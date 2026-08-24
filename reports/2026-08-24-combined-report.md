# Campaign performance report — 2026-08-24

# 8/6/26 Test Sequence (6a749640053b820018213811)

_Brief used: none_

**Changes applied to Apollo automatically: 0**

## Recommended changes

This sequence is still a send-pipeline test ('Test Email' subject, 'reply to confirm it was received' body), not real outreach, and with only 5 delivered every metric is noise. With no campaign brief, no product, and no audience defined, writing campaign copy would require fabricating a value prop, offer, and pain points — which the rules forbid. The only worthwhile actions are operational: supply a brief, load real copy and a real list, and resolve the persistent open-tracking discrepancy before any optimization is meaningful.

## Evaluation

# Campaign Evaluation — 8/6/26 Test Sequence — 2026-08-24

## Verdict
This is still a send-pipeline test, not a campaign: the subject is literally "Test Email" and the body asks recipients to "reply to this email to confirm it was received." The sending infrastructure is clean (0 bounces, 0 spam-blocks across 5 delivered), but at **n=5 delivered** every engagement figure is noise, the 80% reply rate is a direct artifact of copy that instructs a reply, and there is still no campaign brief to judge fit against. Nothing here is evaluable as outreach — loading real copy, a real list, and a brief is the only thing worth doing, and that has not happened since the last two evaluations.

## Prioritized issues
1. **Still a test payload, not campaign copy** — evidence: subject "Test Email"; body "This email has been sent as a test for Apollo sending. Please reply to this email to confirm it was received." No value prop, no audience, no product-relevant CTA. — estimated impact: high (nothing to optimize until real copy exists)
2. **Sample size far too small to conclude anything** — evidence: 5 delivered, 4 replied. One reply swings the rate 20 points; the entire funnel is statistical noise. — estimated impact: high (blocks all downstream judgment)
3. **Open-count discrepancy between summary and step detail persists** — evidence: summary reports `unique_opened: 0` / `open_rate_pct: 0`, but the step variant reports `opened: 4` / `open_rate_pct: 80`. The conflict is unchanged from the prior pull; both open figures are untrustworthy. — estimated impact: medium
4. **No campaign brief supplied** — evidence: brief section explicitly empty. Copy-to-audience fit and target-vs-actual comparisons cannot be performed; only generic benchmarks apply. — estimated impact: medium

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate | 0% (0/5 attempted) | alarm >2% | n/a — no brief | 🟢 (but n=5) |
| Spam-block rate | 0% (0/5 attempted) | alarm >0.3% | n/a | 🟢 (but n=5) |
| Open rate | 0% summary / 80% step — conflicting | 30–50% typical | n/a | 🔴 unreliable |
| Reply rate | 80% (4/5) | 1–3% typical | n/a | ⚪ meaningless at n=5 |
| Click rate | 0% | — (no links) | n/a | ⚪ n/a |
| Unsubscribe rate | 0% (0/5) | alarm >1% | n/a | 🟢 (but n=5) |

Status caveat: every 🟢 rests on 5 sends. None are trustworthy signals of campaign health — they confirm only that the sending pipe is open.

## Funnel
Delivered (5) → Opened (0 per summary / 4 per step detail — conflicting) → Replied (4).

At n=5 there is no meaningful leak to identify. The headline 80% reply rate is a direct artifact of the copy: the email instructs recipients to "reply to confirm it was received," so replies measure "did a human acknowledge a test," not genuine outreach interest. The open counts are internally inconsistent (summary 0 vs. variant 4), so no open-to-reply relationship can be read. Do not interpret this as a strong reply funnel.

## Step-by-step
| Step | Type | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 (only step) | auto_email, single variant | 5 | 0–4 (conflicting) | 4 | Test send only; no incremental-value judgment possible. Single variant — no A/B comparison exists. |

Only one step and one variant exist, so there is no dead-weight step to flag and no variant winner to call. A winner call would require ~150–200 delivered per variant; there are 5 total.

## Copy-to-audience fit
Not meaningfully assessable:
- **No audience defined** — no brief, so no stated pain point, tone, or commitment level to score against.
- **The copy is placeholder test content.** "Test Email" / "reply to confirm it was received" leads with nothing, offers nothing, and its CTA exists only to verify the sending mechanism. Against generic cold-outreach standards it fails on every axis (no personalization, no relevance, no value prop) — but grading it as campaign copy is a category error. It was never meant to be one.

## Trend vs. previous report (2026-08-17)
- **No material change.** Same sequence, same single test step, still 5 delivered / 4 replied. The campaign has not been repurposed into real outreach since the last two evaluations.
- **The open discrepancy did NOT resolve — it held steady.** Summary still 0, step detail still 4. Last report noted it had *widened* (1 → 4); it has now stabilized at 4 but remains unreconciled with the summary's 0. Treat both open figures as unreliable.
- **Reply field remains clean at 4** (the earlier `"loading"` data-quality flag stayed resolved). Good.
- **Predicted next step (load real copy + real list) has still not happened.** The recommendation from the prior two reports remains outstanding.

## Open questions
- **Is this run still just validating Apollo sending?** If so, it continues to succeed (delivered, no bounces/spam-blocks, replies logged). The next action is loading real copy and a real list — not optimizing this test.
- **Reply sentiment is invisible via the API.** The 4 replies are almost certainly "confirmed, received" acknowledgments given the ask, but Apollo doesn't expose sentiment — spot-check the actual replies before treating any as interest.
- **Resolve the open-count discrepancy** (summary 0 vs. step 4) directly in Apollo; it has persisted across three pulls now, so check tracking-pixel/open-attribution settings rather than waiting for it to self-correct.
- **A campaign brief is required** for any subsequent evaluation to assess targeting, tone, offer fit, and target-vs-actual performance.

## A/B test plan

**Hypothesis:** No A/B test can be run yet: the sequence contains only placeholder test copy, has a single step with one variant, and n=5 delivered is far below the ~150–200 delivered per variant needed to call a winner. A real test is only definable once campaign copy and a brief exist.
**Variant A:** N/A — hold until real campaign copy is loaded. When it is, Variant A should be the approved control subject line.
**Variant B:** N/A — hold until real campaign copy is loaded. When it is, Variant B should vary exactly one element (e.g., subject line) against A.
**Success metric:** Reply rate (spam-checked for sentiment), evaluated at ≥150 delivered per variant.
**Decision rule:** Once real copy is live, run one-variable-at-a-time; call a winner at ≥150 delivered per variant only if the relative reply-rate difference is ≥20%, otherwise keep the simpler variant. Do not attempt any statistical read below that volume.

## Manual changes (targeting / timing / list)

- Obtain and supply a campaign brief (product, offer, target titles/industries, pain points, tone, must-not-say constraints) — this is the blocking prerequisite; no copy work is defensible without it.
- Replace the placeholder test payload with real campaign copy and load a real, verified prospect list before treating this sequence as live outreach.
- Do not draw any conclusions from current metrics: 5 delivered and 4 replies is statistical noise, and the 80% reply rate is an artifact of copy that literally instructs recipients to reply to confirm receipt.
- Resolve the open-count discrepancy in Apollo directly (summary reports 0 opens, step detail reports 4) — it has persisted across three pulls; check tracking-pixel/open-attribution settings rather than waiting for it to self-correct.
- Spot-check the 4 replies manually for sentiment — they are almost certainly 'received, confirmed' acknowledgments, not genuine interest, since the API does not expose sentiment.
- Once real copy exists, expand the sequence beyond a single step: add 2–3 follow-ups, each introducing a new angle (different pain point or proof point), rather than 'bumping this'.
- Scale send volume to a real list size so metrics become interpretable (aim for enough delivered to read reply rate, ~150+ per variant).

## Next review

After a campaign brief is supplied and real copy + a real list are loaded, re-run once at least ~150–200 messages have been delivered per variant. If the sequence remains a test payload at the next pull, escalate: the load-real-copy recommendation will have been outstanding across four consecutive evaluations. Watch specifically for whether the open-tracking discrepancy resolves and whether replies reflect genuine interest versus test-acknowledgment.

---
