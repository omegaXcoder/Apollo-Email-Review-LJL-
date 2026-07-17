# Call Boss — Apollo Email Campaign Pipeline

A fully automated loop for managing Apollo email outreach campaigns:

```
Apollo API (stats + current copy)
        │
        ▼
Claude: evaluate performance against the campaign brief
        │
        ▼
Claude: generate rewritten emails, A/B test plan, targeting changes
        │
        ▼
Apply the new copy back to the Apollo sequence (AUTO_APPLY=true)
        │
        ▼
Email the full report to everyone in REPORT_EMAILS
```

## Setup (one time)

1. **Fill in [.env](.env)** — Apollo master API key, sequence ID(s), Anthropic
   API key, SMTP credentials, and report recipients. `APOLLO_SEQUENCE_IDS` and
   `REPORT_EMAILS` both accept comma-separated lists.
2. **Fill in the briefs in [briefs/](briefs/)** — one per business:
   [briefs/call-boss.md](briefs/call-boss.md) and
   [briefs/cappsure.md](briefs/cappsure.md). Each brief's first line declares
   which sequences it applies to (`<!-- sequence-match: CB, Call Boss -->`);
   the pipeline matches on the sequence name, so "CB Email Revamp - sector 5"
   uses the Call Boss brief and "Cappsure LI Sector 3" uses the Cappsure one.
   Add another `briefs/*.md` file with its own keywords for any new business.
   Sequences matching no brief fall back to `campaign-brief.md`.
3. `npm install` (already done if `node_modules/` exists).

## Run it

```powershell
npm start          # or: node pipeline\run.js
```

For each sequence in `APOLLO_SEQUENCE_IDS`, the pipeline:

1. Pulls stats + current email copy from the Apollo API → `data/<date>-<id>-*.json`
2. Runs the evaluation prompt → `reports/<date>-<id>-evaluation.md`
3. Runs the optimization prompt → structured copy rewrites + A/B plan →
   `reports/<date>-<id>-optimizations.md`
4. If `AUTO_APPLY=true`, writes the new subject/body into the Apollo sequence
   and verifies the change with a re-fetch. Failed writes are flagged in the
   email with ready-to-paste copy.
5. Sends one combined report email to all `REPORT_EMAILS` recipients, with the
   markdown reports attached.

One sequence failing doesn't stop the others — errors are reported per-sequence
in the email and the console.

## Run it on a schedule

Windows Task Scheduler, weekly on Monday at 8am:

```powershell
schtasks /Create /TN "CallBossCampaignPipeline" /SC WEEKLY /D MON /ST 08:00 `
  /TR "\"E:\Kudos\Programs\Call Boss Apollo Email Evaluation\pipeline\run.cmd\""
```

Match the cadence to send volume: re-running before ~150-200 new deliveries per
variant just re-litigates the same data. Weekly is right for most volumes.

## Tuning the analysis

The prompts are plain markdown you can edit — no code changes needed:

- [prompts/evaluate-performance.md](prompts/evaluate-performance.md) — the
  diagnosis pass: deliverability gate, funnel benchmarks, per-step analysis,
  copy-to-audience fit
- [prompts/generate-optimizations.md](prompts/generate-optimizations.md) — the
  prescription pass: symptom→lever map, copy rules, A/B test requirements

Each evaluation compares against the previous report for the same sequence, so
you build a running record of what each change actually did.

## Safety switches

- **`AUTO_APPLY=false`** in `.env` turns off Apollo write-back — you get the
  full report and proposed copy by email, but nothing changes in Apollo until
  you paste it yourself. Use this for the first run or two to build trust.
- All raw API pulls are kept in `data/` (dated), so any applied change can be
  reverted by hand from the previous day's copy.

## Files

```
.env                              ← keys + config (gitignored)
briefs/                           ← one brief per business, matched by sequence name
campaign-brief.md                 ← fallback brief for unmatched sequences
prompts/                          ← the two Claude prompts (editable)
pipeline/
  run.js                          ← orchestrator
  run.cmd                         ← Task Scheduler wrapper
  lib/apollo.js                   ← Apollo API fetch/summarize/write-back
  lib/claude.js                   ← Claude API calls (evaluation + structured optimization)
  lib/email.js                    ← SMTP report delivery
  lib/env.js                      ← config loading/validation
data/                             ← dated raw + summarized API pulls
reports/                          ← dated evaluation/optimization/combined reports
scripts/Fetch-ApolloStats.ps1     ← standalone PowerShell fetcher (manual use)
.claude/skills/                   ← optional /evaluate-campaign, /optimize-campaign
                                    slash commands for interactive use in Claude Code
```

## Notes & limits

- **Opens are directional, replies are truth** — Apple Mail privacy and bot
  scanners inflate opens. The prompts weight replies accordingly.
- **Apollo's API doesn't expose reply sentiment** — an angry reply counts the
  same as an interested one. Spot-check actual replies before celebrating.
- Apollo's write endpoints for sequence templates are thinly documented; the
  pipeline tries multiple update shapes and verifies each write by re-fetching
  the sequence. Anything that can't be verified is flagged in the email as
  manual-apply with the copy included.
- Sequence endpoints require an Apollo **master** API key on a paid plan.
