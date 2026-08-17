# Campaign performance report — 2026-08-17

# 8/6/26 Test Sequence (6a749640053b820018213811)

_Brief used: none_

**Changes applied to Apollo automatically: 0**

## Recommended changes

This is a functional send-test (subject 'Test Email', body asking recipients to reply to confirm receipt), not a real outreach campaign, and at n=5 delivered every metric is statistical noise. With no campaign brief, no defined audience, and placeholder copy, there is nothing to optimize as outreach — writing 'real' copy now would mean fabricating a product, audience, and offer that don't exist. The only responsible action is infrastructure/process work: load a real brief and list, then re-evaluate once genuine copy has been sent at volume.

## Evaluation

# Campaign Evaluation — 8/6/26 Test Sequence — 2026-08-17

## Verdict
This remains a functional send test, not a campaign: the subject is "Test Email" and the body asks recipients to "reply to this email to confirm it was received." Deliverability infrastructure is clean (0 bounces, 0 spam-blocks across 5 delivered), but at **n=5 delivered** every engagement number is statistical noise, the 80% reply rate is a direct artifact of copy that literally instructs a reply, and **no campaign brief exists** to judge fit. There is still nothing here to evaluate as an outreach campaign — fixing that (real copy, real list, real brief) is the only thing worth anything.

## Prioritized issues
1. **Sample size far too small to conclude anything** — evidence: 5 delivered, 4 replied. A single reply moves the rate 20 points; the funnel is noise. — estimated impact: high (blocks all downstream judgment)
2. **This is a test payload, not campaign copy** — evidence: subject "Test Email," body "This email has been sent as a test for Apollo sending. Please reply to this email to confirm it was received." No value proposition, audience, or product-relevant CTA. — estimated impact: high (nothing to optimize until real copy exists)
3. **Open-count discrepancy persists between summary and step detail** — evidence: summary reports `unique_opened: 0` / `open_rate_pct: 0`, but the step variant now reports `opened: 4` / `open_rate_pct: 80` (last pull it was `opened: 1`). The conflict didn't resolve — it widened. Don't trust either open figure. — estimated impact: medium
4. **No campaign brief supplied** — evidence: brief section explicitly empty. Copy-to-audience fit and target-vs-actual comparisons cannot be performed; only generic benchmarks apply. — estimated impact: medium

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate | 0% (0/5) | alarm >2% | n/a — no brief | 🟢 (but n=5) |
| Spam-block rate | 0% (0/5) | alarm >0.3% | n/a | 🟢 (but n=5) |
| Open rate | 0% summary / 80% step — conflicting | 30–50% typical | n/a | 🔴 unreliable |
| Reply rate | 80% (4/5) | 1–3% typical | n/a | ⚪ meaningless at n=5 |
| Click rate | 0% | — (no links) | n/a | ⚪ n/a |
| Unsubscribe rate | 0% (0/5) | alarm >1% | n/a | 🟢 (but n=5) |

Status caveat: every 🟢 rests on 5 sends. None are trustworthy signals of campaign health — they only confirm the sending pipe is open.

## Funnel
Delivered (5) → Opened (0 per summary / 4 per step detail — conflicting) → Replied (4).

At n=5 there is no meaningful leak to identify. The headline detail — an 80% reply rate — is a direct artifact of the copy: the email instructs recipients to "reply to confirm it was received," so replies measure "did a human acknowledge a test," not genuine outreach interest. The open counts are internally inconsistent (summary says 0, the variant says 4), so no open-to-reply relationship can be read from this snapshot. Do not interpret this as a strong reply funnel.

## Step-by-step
| Step | Type | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 (only step) | auto_email, single variant | 5 | 0–4 (conflicting) | 4 | Test send only; no incremental-value judgment possible. Single variant means no A/B comparison exists. |

Only one step and one variant exist, so there is no dead-weight step to flag and no variant winner to call. A winner call would require ~150–200 delivered per variant; there are 5 total.

## Copy-to-audience fit
Not assessable in any real sense:
- **No audience defined** — no brief provided, so there is no stated pain point, tone, or commitment level to score against.
- **The copy is placeholder test content.** "Test Email" / "reply to confirm it was received" leads with nothing, offers nothing, and its CTA exists only to verify the sending mechanism. Against generic cold-outreach standards it fails on every axis (no personalization, no relevance, no value prop) — but grading it as campaign copy would be a category error. It was never meant to be one.

## Trend vs. previous report (2026-08-10)
- **No material change.** Same sequence, same single test step, still 5 delivered / 4 replied. The campaign has not been repurposed into real outreach since the last evaluation.
- **The `"loading"` reply field resolved** — replied is now cleanly `4` (was mid-refresh last time). Good; that one data-quality flag cleared.
- **The open discrepancy did NOT resolve — it got worse.** Last pull: summary 0 vs. step 1. This pull: summary 0 vs. step 4. This suggests the open figure in the step detail is unstable, not that opens genuinely occurred. Treat both open numbers as unreliable.
- **Predicted next step (load real copy + real list) has not happened.** The recommendation from the prior report is still outstanding.

## Open questions
- **Was this run purely to validate Apollo sending?** If so, it continues to succeed (delivered, no bounces/spam-blocks, replies logged). The next action is loading real copy and a real list — not optimizing this test.
- **Reply sentiment is invisible via the API.** The 4 replies are almost certainly "confirmed, received" acknowledgments given the ask, but Apollo doesn't expose sentiment — spot-check the actual replies before treating any as interest.
- **Resolve the open-count discrepancy** (summary 0 vs. step 4) with a fresh pull and, if it persists, check Apollo's tracking-pixel/open-attribution settings directly — the field appears unstable across pulls.
- **A campaign brief is required** for any subsequent evaluation to assess targeting, tone, offer fit, and target-vs-actual performance.

## A/B test plan

**Hypothesis:** No copy A/B test is justified yet. Testing variants of a placeholder 'Test Email' payload would produce noise; a meaningful test requires real campaign copy and a real audience defined by a brief. Defer the test until those exist.
**Variant A:** (pending) Control: the first real subject line + body written once a campaign brief and audience are supplied.
**Variant B:** (pending) Challenger: a single-variable change (e.g., subject line only) against the control, once real copy is live.
**Success metric:** Reply rate (spot-checked for positive sentiment, since Apollo doesn't expose sentiment via API), with open rate as a secondary read only after the open-count discrepancy is resolved.
**Decision rule:** Do not call any winner until ~150–200 delivered per variant. If the relative difference is under 20%, keep the simpler/shorter variant. No test should run until real copy replaces the test payload.

## Manual changes (targeting / timing / list)

- Do not deploy this sequence as outreach — subject 'Test Email' and 'reply to confirm it was received' are test content, not campaign copy. Treat the current run purely as pipeline validation, which it passed (5 delivered, 0 bounces, 0 spam-blocks).
- Supply a campaign brief before any copy work: product/service, offer, target titles and industries, audience pain points, tone, and the CTA commitment level the audience accepts. No responsible copy can be written without it.
- Build and verify a real target list (email verification pass) instead of the current 5-address test set, so future metrics reach a readable sample (aim for at least 150–200 delivered before drawing conclusions).
- Spot-check the 4 replies manually — given the copy literally instructs a reply, these are almost certainly 'received/confirmed' acknowledgments, not genuine interest. Do not carry the 80% reply rate forward as a benchmark.
- Resolve the open-count discrepancy: summary reports unique_opened 0 while the step variant reports 4 (was 1 last pull). Do a fresh pull and, if it persists, check Apollo's open-tracking/pixel attribution settings directly — treat both open figures as unreliable until reconciled.
- Expand the sequence beyond a single step only after real copy exists: plan follow-up touches where each adds a new angle (new pain point or proof point), not 'just bumping this.'

## Next review

Re-run the evaluation once a campaign brief is supplied AND real copy has been sent to a verified list at meaningful volume — target at least 150–200 delivered per variant. At that review, watch bounce/spam-block rates first (deliverability gate), then confirm the open-count discrepancy has resolved, then read reply rate against real (not test-artifact) engagement. If the sequence is still the 'Test Email' payload at next pull, the only finding will again be 'load real copy and a real list.'

---
