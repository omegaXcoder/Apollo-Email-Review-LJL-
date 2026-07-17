---
name: optimize-campaign
description: Generate concrete tweaks for the email campaign — rewritten copy, A/B test plan, targeting changes — based on the latest evaluation report. Use when the user wants to improve, optimize, fix, or rewrite the campaign.
---

# Optimize Apollo Campaign

Turn the latest evaluation into concrete, ready-to-paste changes.

## Step 1: Gather inputs

1. The most recent `reports/*-evaluation.md`. If none exists, run the
   `/evaluate-campaign` flow first (pull data, evaluate), then continue.
2. `campaign-brief.md` — the audience psychology, tone, and constraints sections
   drive the copy rewrites. If the brief is unfilled, warn the user the rewrites
   will be generic.
3. The latest `data/*-summary.json` for the current subject lines and body copy.
   If the summary has no copy (templates weren't returned by the API), ask the
   user to paste the current emails, or check `data/*-raw.json`.

## Step 2: Generate optimizations

Follow the instructions in `prompts/generate-optimizations.md` exactly — the
diagnosis→prescription map, copy rules, A/B test plan requirements, and output
format. Write to `reports/YYYY-MM-DD-optimizations.md` (today's date).

## Step 3: Report back

Show the user inline: the prioritized change list and the single highest-impact
copy rewrite (before/after). Link the full report. Remind them which metrics to
watch and when to re-run `/evaluate-campaign` (per the "Next review" section).

Note: Apollo's API does not support updating sequence templates reliably, so the
user applies copy changes in the Apollo UI by hand — format rewrites so they can
be pasted directly (subject on one line, body below, no markdown decoration
inside the copy blocks).
