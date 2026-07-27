import fs from "node:fs";
import path from "node:path";
import { loadConfig, todayStamp, PROJECT_ROOT } from "./lib/env.js";
import {
  fetchSequence,
  listSequences,
  summarizeSequence,
  applyEmailChange,
} from "./lib/apollo.js";
import { makeClient, runEvaluation, runOptimization } from "./lib/claude.js";
import { loadBriefs, selectBrief } from "./lib/briefs.js";
import { sendReport } from "./lib/email.js";

const DATA_DIR = path.join(PROJECT_ROOT, "data");
const REPORTS_DIR = path.join(PROJECT_ROOT, "reports");
const PROMPTS_DIR = path.join(PROJECT_ROOT, "prompts");

function readIfExists(filePath) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : null;
}

function saveFile(dir, name, content) {
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, name);
  fs.writeFileSync(filePath, content, "utf8");
  return filePath;
}

function latestPreviousReport(sequenceId, today) {
  if (!fs.existsSync(REPORTS_DIR)) return null;
  const candidates = fs
    .readdirSync(REPORTS_DIR)
    .filter((f) => f.endsWith(`-${sequenceId}-evaluation.md`) && !f.startsWith(today))
    .sort();
  if (candidates.length === 0) return null;
  return readIfExists(path.join(REPORTS_DIR, candidates[candidates.length - 1]));
}

function optimizationToMarkdown(opt, applyResults) {
  const lines = ["## Recommended changes", "", opt.summary, ""];
  opt.changes.forEach((change, i) => {
    const result = applyResults?.[i];
    const status = result == null
      ? "proposed (auto-apply off)"
      : result.ok
        ? `applied automatically (${result.via})`
        : "FAILED to apply — paste into Apollo by hand";
    lines.push(
      `### Change ${i + 1} — step ${change.step_position} — ${status}`,
      "",
      `**Why:** ${change.rationale}`,
      "",
      `**Subject before:** ${change.current_subject}`,
      `**Subject after:** ${change.new_subject}`,
      "",
      "**New body:**",
      "```",
      change.new_body_html.replace(/<br\s*\/?>/gi, "\n").replace(/<\/?p>/gi, "\n").trim(),
      "```",
      "",
    );
    if (result && !result.ok) {
      lines.push(`_Apply errors: ${result.errors.join(" | ")}_`, "");
    }
  });
  lines.push(
    "## A/B test plan",
    "",
    `**Hypothesis:** ${opt.ab_test.hypothesis}`,
    `**Variant A:** ${opt.ab_test.variant_a}`,
    `**Variant B:** ${opt.ab_test.variant_b}`,
    `**Success metric:** ${opt.ab_test.success_metric}`,
    `**Decision rule:** ${opt.ab_test.decision_rule}`,
    "",
    "## Manual changes (targeting / timing / list)",
    "",
    ...opt.non_copy_changes.map((c) => `- ${c}`),
    "",
    "## Next review",
    "",
    opt.next_review,
  );
  return lines.join("\n");
}

async function processSequence(config, client, prompts, briefs, fallbackBrief, sequenceId, today) {
  console.log(`\n=== Sequence ${sequenceId} ===`);

  console.log("Fetching stats from Apollo...");
  const raw = await fetchSequence(config.apolloApiKey, sequenceId);
  const summary = summarizeSequence(raw);
  saveFile(DATA_DIR, `${today}-${sequenceId}-raw.json`, JSON.stringify(raw, null, 2));
  saveFile(DATA_DIR, `${today}-${sequenceId}-summary.json`, JSON.stringify(summary, null, 2));
  console.log(
    `  ${summary.sequence_name}: delivered ${summary.unique_delivered ?? "?"}, ` +
      `open ${summary.open_rate_pct ?? "?"}%, reply ${summary.reply_rate_pct ?? "?"}%`,
  );

  // Only analyze email campaigns — LinkedIn/call/task sequences have no email
  // metrics or copy to evaluate.
  const hasEmailSteps = summary.steps.some((s) => (s.type ?? "").toLowerCase().includes("email"));
  if (!hasEmailSteps) {
    const stepTypes = [...new Set(summary.steps.map((s) => s.type))].join(", ") || "none";
    console.log(`  Skipping — no email steps (step types: ${stepTypes})`);
    return {
      sequenceId,
      name: summary.sequence_name,
      skipped: true,
      skipReason: `No email steps (${stepTypes})`,
    };
  }

  const brief = selectBrief(briefs, fallbackBrief, summary.sequence_name);
  console.log(`  Using brief: ${brief.source}`);

  console.log("Running evaluation (Claude)...");
  const evaluation = await runEvaluation(client, {
    promptText: prompts.evaluate,
    brief: brief.content,
    summary,
    previousReport: latestPreviousReport(sequenceId, today),
  });
  const evalPath = saveFile(REPORTS_DIR, `${today}-${sequenceId}-evaluation.md`, evaluation);

  console.log("Generating optimizations (Claude)...");
  const optimization = await runOptimization(client, {
    promptText: prompts.optimize,
    brief: brief.content,
    summary,
    evaluation,
  });

  let applyResults = null;
  if (config.autoApply && optimization.changes.length > 0) {
    console.log(`Applying ${optimization.changes.length} change(s) to Apollo...`);
    applyResults = [];
    for (const change of optimization.changes) {
      const result = await applyEmailChange(config.apolloApiKey, change);
      applyResults.push(result);
      console.log(
        `  step ${change.step_position}: ${result.ok ? `OK via ${result.via}` : "FAILED"}`,
      );
    }
    // Verify by re-fetching and comparing subjects
    try {
      const verifyRaw = await fetchSequence(config.apolloApiKey, sequenceId);
      const verifyTemplates = verifyRaw.emailer_templates ?? [];
      optimization.changes.forEach((change, i) => {
        if (!applyResults[i].ok) return;
        const tpl = verifyTemplates.find((t) => t.id === change.template_id);
        if (tpl && tpl.subject !== change.new_subject) {
          applyResults[i].ok = false;
          applyResults[i].errors.push(
            "Verification failed: Apollo accepted the request but the subject did not change.",
          );
        }
      });
    } catch (err) {
      console.warn(`  Verification re-fetch failed: ${err.message}`);
    }
  }

  const optMarkdown = optimizationToMarkdown(optimization, applyResults);
  const optPath = saveFile(REPORTS_DIR, `${today}-${sequenceId}-optimizations.md`, optMarkdown);

  return {
    sequenceId,
    name: summary.sequence_name,
    briefSource: brief.source,
    summary,
    evaluation,
    optimization,
    applyResults,
    optMarkdown,
    attachments: [evalPath, optPath],
  };
}

function buildEmailBody(results, skipped, failures, autoApply, today) {
  const parts = [`# Campaign performance report — ${today}`, ""];
  if (skipped.length > 0) {
    parts.push(
      "**Skipped (not email campaigns):** " +
        skipped.map((s) => `${s.name} (${s.skipReason})`).join("; "),
      "",
    );
  }
  for (const r of results) {
    const applied = r.applyResults?.filter((a) => a.ok).length ?? 0;
    const failed = r.applyResults?.filter((a) => !a.ok).length ?? 0;
    // Lead each sequence's notes with what to act on (recommended changes,
    // then the diagnosis's prioritized issues) before the full evaluation
    // detail — that's what actually gets reviewed each week.
    const abPlanIndex = r.optMarkdown.indexOf("## A/B test plan");
    const recommendedChanges = abPlanIndex === -1 ? r.optMarkdown : r.optMarkdown.slice(0, abPlanIndex).trimEnd();
    const optimizationDetail = abPlanIndex === -1 ? "" : r.optMarkdown.slice(abPlanIndex);
    parts.push(
      `# ${r.name} (${r.sequenceId})`,
      "",
      `_Brief used: ${r.briefSource}_`,
      "",
      autoApply
        ? `**Changes applied to Apollo automatically: ${applied}**` +
            (failed ? ` — **${failed} failed, see below for copy to paste by hand**` : "")
        : "**Auto-apply is off — all changes below are proposals.**",
      "",
      recommendedChanges,
      "",
      "## Evaluation",
      "",
      r.evaluation,
      "",
      optimizationDetail,
      "",
      "---",
      "",
    );
  }
  for (const f of failures) {
    parts.push(`# Sequence ${f.sequenceId} — PIPELINE ERROR`, "", "```", f.error, "```", "");
  }
  return parts.join("\n");
}

async function main() {
  const config = loadConfig();
  const today = todayStamp();
  const client = makeClient(config.anthropicApiKey);

  const prompts = {
    evaluate: readIfExists(path.join(PROMPTS_DIR, "evaluate-performance.md")),
    optimize: readIfExists(path.join(PROMPTS_DIR, "generate-optimizations.md")),
  };
  if (!prompts.evaluate || !prompts.optimize) {
    throw new Error("Prompt files missing from prompts/ — evaluate-performance.md and generate-optimizations.md are required.");
  }
  const briefs = loadBriefs();
  const fallbackBrief = readIfExists(path.join(PROJECT_ROOT, "campaign-brief.md"));
  console.log(
    briefs.length > 0
      ? `Loaded ${briefs.length} brief(s): ${briefs.map((b) => `${b.file} [${b.keywords.join(", ")}]`).join("; ")}`
      : "No briefs/ directory found — using campaign-brief.md for all sequences.",
  );

  let sequenceIds = config.sequenceIds;
  if (config.autoDiscover) {
    console.log("APOLLO_SEQUENCE_IDS is blank/auto — discovering sequences from Apollo...");
    const sequences = await listSequences(config.apolloApiKey);
    const active = sequences.filter((s) => s.active);
    for (const s of sequences) {
      console.log(`  ${s.active ? "[ACTIVE]  " : "[inactive]"} ${s.id}  ${s.name}`);
    }
    if (active.length === 0) {
      throw new Error(
        `Found ${sequences.length} sequence(s) but none are active. ` +
          "Activate a sequence in Apollo, or pin specific IDs in APOLLO_SEQUENCE_IDS.",
      );
    }
    sequenceIds = active.map((s) => s.id);
    console.log(`Running against ${active.length} active sequence(s).\n`);
  }

  const results = [];
  const skipped = [];
  const failures = [];
  for (const sequenceId of sequenceIds) {
    try {
      const result = await processSequence(
        config, client, prompts, briefs, fallbackBrief, sequenceId, today,
      );
      (result.skipped ? skipped : results).push(result);
    } catch (err) {
      console.error(`Sequence ${sequenceId} failed: ${err.message}`);
      failures.push({ sequenceId, error: err.message });
    }
  }

  if (results.length === 0 && failures.length === 0) {
    console.log("No email campaigns to report on.");
    return;
  }

  const emailBody = buildEmailBody(results, skipped, failures, config.autoApply, today);
  saveFile(REPORTS_DIR, `${today}-combined-report.md`, emailBody);

  if (config.emailEnabled) {
    console.log(`\nEmailing report to ${config.reportEmails.join(", ")}...`);
    const names = results.map((r) => r.name).filter(Boolean).join(", ") || "campaigns";
    const messageId = await sendReport(config.smtp, config.reportEmails, {
      subject: `Campaign report — ${names} — ${today}`,
      markdown: emailBody,
      attachments: results.flatMap((r) =>
        r.attachments.map((p) => ({ filename: path.basename(p), path: p })),
      ),
    });
    console.log(`Email sent (${messageId}).`);
  } else {
    console.log(
      "\nEmail not sent — SMTP settings incomplete in .env (need SMTP_HOST, SMTP_USER, SMTP_PASS, REPORT_EMAILS).",
    );
    console.log(`Report saved to reports/${today}-combined-report.md`);
  }

  if (failures.length > 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error(`Pipeline failed: ${err.message}`);
  process.exitCode = 1;
});
