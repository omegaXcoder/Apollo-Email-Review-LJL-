import Anthropic from "@anthropic-ai/sdk";

const MODEL = "claude-opus-4-8";

const PIPELINE_ADDENDUM = `
You are running inside an automated, non-interactive pipeline. Ignore any
instructions above about writing files, linking reports, or asking the user
questions — output the complete deliverable directly and nothing else.`;

function textOf(message) {
  return message.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");
}

export function makeClient(apiKey) {
  return new Anthropic({ apiKey });
}

// Pass 1: diagnosis. Returns a markdown evaluation report.
export async function runEvaluation(client, { promptText, brief, summary, previousReport }) {
  const userContent = [
    "# Campaign brief\n",
    brief || "(No campaign brief provided — note this in the report and use generic benchmarks.)",
    "\n\n# Campaign stats pulled from the Apollo API (includes current email copy per step)\n",
    "```json\n" + JSON.stringify(summary, null, 2) + "\n```",
    previousReport
      ? "\n\n# Previous evaluation report (for trend comparison)\n" + previousReport
      : "\n\n# Previous evaluation report\n(None — this is the first evaluation.)",
  ].join("");

  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: 16000,
    thinking: { type: "adaptive" },
    system: [
      {
        type: "text",
        text: promptText + PIPELINE_ADDENDUM,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [{ role: "user", content: userContent }],
  });
  const message = await stream.finalMessage();
  return textOf(message);
}

const OPTIMIZATION_SCHEMA = {
  type: "object",
  properties: {
    summary: {
      type: "string",
      description: "3-sentence overview of the proposed changes and expected impact",
    },
    changes: {
      type: "array",
      description: "Copy rewrites, max 5, ordered by impact. Empty if no copy changes warranted.",
      items: {
        type: "object",
        properties: {
          touch_id: { type: "string", description: "touch_id from the stats summary" },
          template_id: { type: "string", description: "template_id from the stats summary" },
          step_position: { type: "integer" },
          current_subject: { type: "string" },
          new_subject: { type: "string" },
          new_body_html: {
            type: "string",
            description:
              "Complete replacement email body as minimal HTML using only <p> and <br> tags. " +
              "Merge tags like {{contact.first_name}} and {{account.name}} refer to the RECIPIENT " +
              "(their name / their company) — keep them for recipient personalization only. " +
              "The sending business's name must be written literally from the brief, never via merge tag.",
          },
          rationale: {
            type: "string",
            description: "What changed and why, citing the evaluation",
          },
        },
        required: [
          "touch_id",
          "template_id",
          "step_position",
          "current_subject",
          "new_subject",
          "new_body_html",
          "rationale",
        ],
        additionalProperties: false,
      },
    },
    ab_test: {
      type: "object",
      properties: {
        hypothesis: { type: "string" },
        variant_a: { type: "string" },
        variant_b: { type: "string" },
        success_metric: { type: "string" },
        decision_rule: { type: "string" },
      },
      required: ["hypothesis", "variant_a", "variant_b", "success_metric", "decision_rule"],
      additionalProperties: false,
    },
    non_copy_changes: {
      type: "array",
      description: "Targeting, timing, volume, or list-hygiene changes to make by hand in Apollo",
      items: { type: "string" },
    },
    next_review: {
      type: "string",
      description: "When to re-run the evaluation and what to watch for",
    },
  },
  required: ["summary", "changes", "ab_test", "non_copy_changes", "next_review"],
  additionalProperties: false,
};

// Pass 2: prescription. Returns structured changes ready to apply to Apollo.
export async function runOptimization(client, { promptText, brief, summary, evaluation }) {
  const userContent = [
    "# Campaign brief\n",
    brief || "(No campaign brief provided — keep rewrites conservative and note assumptions in rationales.)",
    "\n\n# Campaign stats and current email copy (from the Apollo API)\n",
    "```json\n" + JSON.stringify(summary, null, 2) + "\n```",
    "\n\n# Evaluation report (the diagnosis to act on)\n",
    evaluation,
  ].join("");

  const stream = client.messages.stream({
    model: MODEL,
    max_tokens: 32000,
    thinking: { type: "adaptive" },
    system: [
      {
        type: "text",
        text: promptText + PIPELINE_ADDENDUM,
        cache_control: { type: "ephemeral" },
      },
    ],
    output_config: {
      format: { type: "json_schema", schema: OPTIMIZATION_SCHEMA },
    },
    messages: [{ role: "user", content: userContent }],
  });
  const message = await stream.finalMessage();
  if (message.stop_reason === "refusal") {
    throw new Error("Claude declined the optimization request (stop_reason: refusal).");
  }
  if (message.stop_reason === "max_tokens") {
    throw new Error("Optimization output was truncated (stop_reason: max_tokens).");
  }
  return JSON.parse(textOf(message));
}
