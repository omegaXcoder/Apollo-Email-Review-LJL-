---
name: evaluate-campaign
description: Pull fresh stats for an Apollo email sequence and produce a performance evaluation report. Use when the user wants to check, evaluate, audit, or review campaign/sequence performance. Takes an optional sequence ID or name as argument.
---

# Evaluate Apollo Campaign

Run the full evaluation pipeline:

## Step 1: Identify the sequence

- If the user passed a sequence ID (a long hex string), use it directly.
- If they passed a name or nothing, check `campaign-brief.md` for the "Apollo
  sequence ID" field. If it's filled in, use that.
- If still unknown, run:
  `powershell -File scripts\Fetch-ApolloStats.ps1 -ListSequences -NameFilter "<name>"`
  and ask the user to pick if multiple match.

## Step 2: Pull fresh data

Run: `powershell -File scripts\Fetch-ApolloStats.ps1 -SequenceId <id>`

This writes `data/<today>-raw.json` and `data/<today>-summary.json`.

If the script fails with an auth error, tell the user to add their Apollo master
API key to a `.env` file in the project root (`APOLLO_API_KEY=...`) — see README.md.

## Step 3: Gather context

Read, in this order:
1. `data/<today>-summary.json` (and the raw JSON if the summary is missing detail)
2. `campaign-brief.md` — if it's still the unfilled template, warn the user that
   the analysis will be generic and ask them to fill it in; proceed with what exists.
3. The most recent prior report in `reports/`, if any, for trend comparison.

## Step 4: Evaluate

Follow the instructions in `prompts/evaluate-performance.md` exactly — analysis
framework, output format, and rules. Write the report to
`reports/YYYY-MM-DD-evaluation.md` (today's date).

## Step 5: Report back

Give the user the verdict, the scorecard, and the top prioritized issue inline in
chat, link the full report file, and mention they can run `/optimize-campaign` to
turn the diagnosis into concrete changes.
