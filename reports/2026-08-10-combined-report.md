# Campaign performance report — 2026-08-10

# 8/6/26 Test Sequence (6a749640053b820018213811)

_Brief used: none_

**Changes applied to Apollo automatically: 0**

## Recommended changes

This sequence is a functional send test (subject "Test Email," body asking recipients to confirm receipt), not a real campaign, with only 5 delivered emails — so there is no campaign copy to optimize yet. No brief was supplied, meaning audience, offer, tone, and constraints are all unknown, and every engagement figure is noise at n=5. The correct next action is to load real copy against a real list and a real brief, not to tune placeholder test content.

## Evaluation

# Campaign Evaluation — 8/6/26 Test Sequence — 2026-08-10

## Verdict
This is not a real outreach campaign — it's a functional send test (subject "Test Email," body asking recipients to "reply to confirm it was received") with only **5 delivered emails**. Deliverability is clean (0 bounces, 0 spam-blocks), which confirms the sending infrastructure works, but every engagement number is statistically meaningless at n=5 and no campaign brief exists to judge copy fit. The single most important fact: **there is nothing here to evaluate as a campaign yet.**

## Prioritized issues
1. **Sample size is far too small to conclude anything** — evidence: 5 delivered, 4 replied. Both the 80% reply rate and the funnel are noise at this volume (a single reply swings the rate 20 points). — estimated impact: high (blocks all downstream judgment)
2. **This is a test payload, not campaign copy** — evidence: subject "Test Email," body "This email has been sent as a test for Apollo sending. Please reply to this email to confirm it was received." No value proposition, no audience, no CTA relevant to any product. — estimated impact: high (nothing to optimize until real copy exists)
3. **Data inconsistency between summary and step detail** — evidence: summary reports `unique_opened: 0` / `open_rate_pct: 0`, but the step variant reports `opened: 1` / `open_rate_pct: 20`. The variant's `replied` field is still `"loading"`, so the pull may be mid-refresh. — estimated impact: medium (don't trust these figures until a clean re-pull)
4. **No campaign brief supplied** — evidence: brief section explicitly empty. Copy-to-audience fit and target-vs-actual comparisons cannot be performed; only generic benchmarks apply. — estimated impact: medium

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate | 0% (0/5) | alarm >2% | n/a — no brief | 🟢 (but n=5) |
| Spam-block rate | 0% (0/5) | alarm >0.3% | n/a | 🟢 (but n=5) |
| Open rate | 0% summary / 20% step — conflicting | 30–50% typical | n/a | 🔴 unreliable |
| Reply rate | 80% (4/5) | 1–3% typical | n/a | ⚪ meaningless at n=5 |
| Click rate | 0% | — (no links) | n/a | ⚪ n/a |
| Unsubscribe rate | 0% | alarm >1% | n/a | 🟢 (but n=5) |

Status caveat: every 🟢 here rests on 5 sends. None of these are trustworthy signals of campaign health — they only confirm the pipe is open.

## Funnel
Delivered (5) → Opened (0 per summary, 1 per step detail — conflicting) → Replied (4).

At this volume there is no meaningful "leak" to identify. The eye-catching detail — a reported 80% reply rate against a 0–20% open rate — is a direct artifact of the copy: the email literally instructs recipients to reply to confirm receipt, so replies here measure "did a human acknowledge a test," not genuine outreach interest. Opens are also under-counted relative to replies, which is expected when opens rely on tracking pixels that many clients block while replies are logged directly. Do not read this as a "strong reply funnel."

## Step-by-step
| Step | Type | Sent | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|---|
| 1 (only step) | auto_email, single variant | — | 5 | 0–1 (conflicting) | 4 (variant still "loading") | Test send only; no incremental-value judgment possible. Single variant means no A/B comparison exists. |

Only one step and one variant exist, so there is no dead-weight step to flag and no variant winner to call. A winner call would require ~150–200 delivered per variant; we have 5 total.

## Copy-to-audience fit
Not assessable in any real sense:
- **No audience defined** — no brief was provided, so there is no stated pain point, tone, or commitment level to score against.
- **The copy is placeholder test content.** "Test Email" / "reply to confirm it was received" leads with nothing, offers nothing, and its CTA (reply to confirm) exists only to verify the sending mechanism. Against generic cold-outreach standards it would fail on every axis (no personalization, no relevance, no value prop) — but grading it as campaign copy would be a category error. It was never meant to be one.

## Open questions
- **Was this run purely to validate Apollo sending?** If so, it succeeded (mail delivered, no bounces/spam-blocks, replies logged) and the next step is loading real copy and a real list — not optimizing this.
- **Reply sentiment is invisible via the API.** The 4 replies are almost certainly "confirmed, received" acknowledgments given the ask, but Apollo doesn't expose sentiment — spot-check the actual replies before treating any as interest.
- **Resolve the open-count discrepancy** (summary 0 vs. step 1) and the `"loading"` reply field with a fresh pull; the current snapshot appears to have been captured mid-refresh.
- **A campaign brief is required** for any subsequent evaluation to assess targeting, tone, offer fit, and target-vs-actual performance.

## A/B test plan

**Hypothesis:** No A/B test should run yet: the current content is a delivery test, not outreach copy, so any test would measure nothing meaningful. Once real copy and a brief exist, the first test should be a subject-line test — a plain, lowercase-casual subject will outperform a marketing-style subject because cold inboxes reward internal-memo phrasing.
**Variant A:** (Pending real campaign copy) Variant A subject: lowercase-casual, e.g. "quick question"
**Variant B:** (Pending real campaign copy) Variant B subject: descriptive/value-led, e.g. "cutting your onboarding time"
**Success metric:** Reply rate, called at >=150 delivered per variant; if relative difference <20%, keep the simpler subject. Do not change body, send time, or list while the subject test runs.
**Decision rule:** Do not launch this test until (1) a campaign brief is provided, (2) real copy replaces the test payload, and (3) volume can reach >=300 total delivered. Until then, no test is valid.

## Manual changes (targeting / timing / list)

- Do not scale this sequence — it is a send test; confirm the sending pipeline passed (0 bounces, 0 spam-blocks on 5 sends) and then archive or repurpose it.
- Obtain a campaign brief before any copy or targeting work: product, offer, target titles/industries, tone, audience pain points, and must-not-say constraints.
- Re-pull the stats after the snapshot finishes refreshing — the current pull was mid-refresh (variant 'replied' field shows 'loading', and summary opens=0 conflicts with step opens=1); do not trust these numbers.
- Spot-check the 4 replies manually for sentiment — given the body literally asks recipients to reply to confirm receipt, these are almost certainly acknowledgments, not buying interest.
- Build a verified target list and load production copy into a new (or renamed) sequence rather than editing this test artifact, so test-send data doesn't pollute campaign reporting.

## Next review

After a real brief and production copy are loaded and at least 150–200 emails have been delivered per variant (roughly 300+ total sends), re-run the evaluation. Until real copy exists, there is nothing to review; the immediate checkpoint is confirming the brief and copy are in place before any send at volume.

---
