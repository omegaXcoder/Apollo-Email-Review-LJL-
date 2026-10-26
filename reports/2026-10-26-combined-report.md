# Campaign performance report — 2026-10-26

# CB Email Campaign Start 9/9 (6aa060e17af83e00143f470d)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 0**

## Recommended changes

This campaign's problem is not copy — it is a six-week, 0-opens-on-101-delivered signature that points to broken open tracking or systematic inbox non-placement, compounded by a spam-block rate ~6x the alarm threshold. Per the evaluation, no copy or subject change can be judged until that gate clears, so better copy would only land in the same unreadable (or spam) funnel. The right move now is to freeze copy, confirm tracking is enabled, run an inbox-placement test, and fix deliverability before spending any more sends.

## Evaluation

# Campaign Evaluation — CB Email Campaign Start 9/9 — 2026-10-26

## Verdict
Sixth consecutive report, identical flat-zero signature: **0 opens and 0 replies across 101 delivered**, with still more volume stacked behind step 3 (now 91 delivered, up from 67). A sustained 0/101 across a prior subject swap and six weeks of rising sends is not a copy outcome — it is the fingerprint of broken open tracking or systematic inbox non-placement. This gate has not moved in six reports; nothing downstream can be judged until it clears. Resolving the tracking/placement root cause is worth the entire campaign — you are still accumulating un-measurable sends.

## Prioritized issues
1. **Zero opens on 101 delivered — six weeks running, prediction held a sixth time** — evidence: `unique_opened: 0`, `open_rate_pct: 0`, across all three steps and now across **278 total step-level deliveries** (100 + 87 + 91). A functioning cold campaign to a US SMB list leaks double-digit opens from Apple Mail privacy pre-fetch and security-scanner bots alone, independent of copy quality. A flat zero that survived a subject change AND six weeks of growing volume is not consistent with human behavior — it points to a disabled/broken open pixel or mail not landing in inboxes. This gates every engagement judgment below. Estimated impact: **high**.
2. **Spam-block rate ~6× alarm, count still frozen at 2** — evidence: 2 spam-blocked ÷ 105 attempted (101 delivered + 2 bounced + 2 spam) = **1.90%** (alarm >0.3%). Directional at this n, and the count has not moved across any report, so it continues to decay as a rate rather than grow. Paired with issue #1, a placement/reputation problem remains the leading shared hypothesis. Estimated impact: **high** if zero-opens and spam placement share a root cause.
3. **Bounce rate just under the alarm line, decaying** — evidence: 2 bounced ÷ 105 attempted = **1.90%** (alarm >2%). Same 2 bounces as all six prior reports — no new bounces despite additional sends — so this keeps trending down as a rate. Estimated impact: **medium**, improving.
4. **Step 3 now near callable volume but still unreadable** — evidence: step 3 at 91 delivered (up from 67 — again the fastest-growing step), step 2 effectively flat at 87 (from 86). Step 3 is approaching but still short of the ~150–200/variant needed to call anything, and zero opens/replies everywhere make the growth uninformative. Estimated impact: **medium** (blocks step-level and copy-on-data analysis).

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate | 1.90% (2/105 attempted) | <2% | (95%+ delivery) | 🟡 just under line, count flat, decaying |
| Spam-block rate | 1.90% (2/105 attempted) | <0.3% | — | 🔴 ~6× threshold; count unchanged — directional at this n |
| Open rate | 0% (0/101 delivered) | 30–50% | 30% | 🔴 anomalous — almost certainly tracking/placement, not copy |
| Reply rate | 0% (0/101 delivered) | 1–3% | 2% | ⚪ gated by opens |
| Unsubscribe rate | 0% (0/101) | <1% | — | ⚪ n too small / gated |
| Meetings booked / 100 delivered | 0 (0/101) | ~1 | 1 | ⚪ gated |

No "delivery rate" row by design: sending is intentionally throttled (~60/day), so only part of the list has been attempted. A delivered-over-scheduled figure would misrepresent pacing as failure. Note `unique_scheduled` reads `"loading"` this pull and the per-step `scheduled` counters again contradict `delivered` (step 1 `scheduled: 0` vs `delivered: 100`) — these are unreliable live-queue counters, not cumulative totals, and change no conclusion. Bounce and spam-block measured against attempted sends (105) are the reliable deliverability signals.

## Funnel
Delivered **101** → Opened **0 (0%)** → Replied **0 (0%)**.

The nominal biggest leak is the open stage, but the *shape* is the real signal and it is now at its strongest yet. Zero opens on 101 delivered — sustained through a subject-line change and six weeks of growing volume — is not consistent with "weak subject lines." Even a bad cold campaign leaks opens from privacy pre-fetch and bots. A flat zero at this n points to the open pixel not being recorded or mail not reaching inboxes. **The funnel remains un-interpretable until open tracking and inbox placement are confirmed.** You cannot read subject quality — or anything downstream — off a tracking artifact.

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 | "missed calls?" | 100 | 0 | 0 | Only step that has held at callable volume. Absorbed all 4 deliverability events (2 bounce, 2 spam). 0 opens — chase tracking/placement, not copy. |
| 2 | (empty / threads as reply) | 87 | 0 | 0 | Essentially flat (86 → 87). Zero opens make it unreadable; still short of ~150–200 for any conclusion. |
| 3 | (empty / threads as reply) | 91 | 0 | 0 | Grew 67 → 91 — fastest-growing step again. Approaching but still below callable volume. |

Single variant per step — no A/B comparison exists, and n is nowhere near callable anyway. No step can be labeled dead weight; steps 2–3 are still ramping. With opens flat at zero everywhere, step-level reads are impossible by construction.

## Copy-to-audience fit
Copy is unchanged since the prior reports and remains one of the stronger parts of this campaign; the zero-engagement problem is almost certainly not a copy problem. Re-confirming alignment (nothing new to add on data, because opens are still zero):

- **Subject leads on pain, tersely.** "missed calls?" maps to brief pain points #1 and #4 (missed calls in the field → lost revenue); short, lowercase, defensible cold register. Actual performance unknowable from this data.
- **Body opens on the stated pain in the audience's words.** "When your crew is out on a job, what happens to a new customer call?" — pain point #1 stated plainly. Good fit.
- **Objection handling matches the brief.** Step 2 tackles "hiring an in-house receptionist feels like the safer move" with the scale/cost answer — nearly verbatim the brief's stated objection and prescribed response.
- **Tone matches.** Warm, plain, non-corporate — the relatable small-business-owner register the brief calls for.
- **Constraints respected.** No em dashes; scope stays inside stated services ("answers as your office and books jobs right in your CRM"); no implication of full-time employment.
- **CTA is deliberately softer than the brief's goal.** Brief's core CTA is "Schedule a call" (Calendly); the sequence uses reply micro-commitments ("reply 'Plan'" / "reply 'yes'"). Lower friction is defensible, but the Calendly link is never surfaced, so every reply would require manual follow-up to become a booked meeting.
- **Trust ammunition still idle.** Named testimonials, CRM integrations (Jobber/Service Autopilot/YardBook), woman/minority-owned — none appears in the sequence. Not a defect, but unused.

## Trend vs. 2026-10-19
- **Opens: 0 → 0** (delivered 101 → 101). The gate flagged for six straight reports has still not cleared. Added step-3 volume continues to strengthen the tracking/placement hypothesis. **No change.**
- **Bounce rate: 1.90% → 1.90%** (count flat at 2, denominator unchanged at 105). Still decaying across campaign history; no new bounces.
- **Spam-block rate: 1.90% → 1.90%** (count flat at 2). Still far over alarm, still directional at this n.
- **Step 2 volume: 86 → 87 delivered (flat); Step 3: 67 → 91 delivered.** More data accumulating, still zero engagement, still sub-threshold.
- **Net:** nothing flagged as the #1 blocker in six consecutive reports has been resolved. The campaign is still pumping sends into a funnel that cannot be measured. The predicted "more volume only produces more un-interpretable zeros" has now held six times running.

## Open questions
- **Is open tracking actually enabled on this sequence?** A true 0/101 sustained across a subject change and six weeks is far more consistent with a disabled/broken pixel than real behavior. Verify in Apollo before drawing any subject-line conclusion. **Still the top thing to confirm — unchanged for six reports.**
- **Where are messages landing?** Run an inbox-placement / seed test on the sending domain. Zero opens plus a spam-block rate ~6× alarm together hint at a placement/reputation problem the API cannot confirm.
- **Why do the `scheduled` counters contradict `delivered`, and why is `unique_scheduled` now `"loading"`?** (step 1 `scheduled: 0` vs `delivered: 100`). Reconcile in Apollo; the recurring inconsistency suggests the counters are mid-refresh or semantically misused — treat as a live-queue artifact, not a total.
- **Reply sentiment is moot now (0 replies), but note for later:** Apollo's reply count includes angry/negative replies. Once replies exist, spot-check them by hand before treating reply rate as positive interest.
- **Re-evaluate once open tracking is confirmed working AND ≥150–200 are delivered per step.** Until the gate clears, more volume only produces more un-interpretable zeros — now demonstrated six reports in a row.

## A/B test plan

**Hypothesis:** Before any copy test can be trusted, we must confirm the open-tracking pixel is firing and that mail reaches the inbox; the real 'test' this cycle is a diagnostic placement test, not a copy variant. Only once opens register above zero should we run the queued subject test: changing the subject from a question to an internal-memo style will lift opens because terse lowercase subjects read as peer-to-peer rather than marketing.
**Variant A:** Subject: missed calls?
**Variant B:** Subject: calls while you're in the field
**Success metric:** Open rate, measured only after open tracking is confirmed working via a seed/inbox-placement test.
**Decision rule:** Do NOT start this test until a seed test confirms the pixel fires and mail lands in the inbox. Once confirmed, call a winner at >=150 delivered per variant; if relative open-rate difference is <20%, keep variant A (the simpler, shorter subject). Do not change body copy, send times, or CTA while the test runs.

## Manual changes (targeting / timing / list)

- Verify open tracking is actually enabled on this sequence in Apollo settings before anything else — a true 0/101 sustained through a subject change and six weeks is far more consistent with a disabled/broken open pixel than real human behavior. This is the single highest-priority action.
- Run an inbox-placement / seed test on the sending domain (e.g. GlockApps or manual seed inboxes across Gmail, Outlook, Yahoo) to confirm whether messages are landing in inbox, spam, or being blocked. Zero opens plus a spam-block rate ~6x alarm together strongly suggest a placement/reputation problem the API cannot confirm.
- Check sending-domain authentication: confirm SPF, DKIM, and DMARC are all passing, and check the domain against blocklists (MXToolbox). Review Google Postmaster Tools reputation if sending to Gmail-heavy lists.
- Pause or reduce daily volume from 60 to ~20-25/day until placement is confirmed — you are currently accumulating un-measurable sends and risking further reputation damage by pumping into a possibly-spam-foldered funnel.
- Consider disabling link/open tracking temporarily or switching to a redirect domain: tracking pixels and shortened/tracked links are a common spam-placement trigger and could explain both the zero opens and the elevated spam-block rate simultaneously.
- Re-verify the current list through Apollo (and ideally a second verifier like NeverBounce) before sending further — isolate whether the 2 spam-blocks correlate with specific risky recipients.
- Once tracking and placement are confirmed healthy, surface the Calendly link in the copy so positive replies can convert to booked meetings without manual back-and-forth (the eval noted the Calendly link is never shown).
- Reconcile the contradictory scheduled vs delivered counters and the 'loading' unique_scheduled value with Apollo support if they persist — confirm they are live-queue artifacts and not a sign of a misconfigured sequence.

## Next review

Re-run the evaluation only after (1) open tracking is confirmed enabled AND (2) a seed/placement test confirms inbox delivery AND (3) at least 150-200 messages have been delivered per step post-fix. Until the tracking/placement gate clears, additional volume will only produce more un-interpretable zeros, as predicted for six reports running. First priority at next review: confirm opens have moved off zero; only then judge subject-line and body performance.

---

# 9/3/26 Test Sequence (6a99ac201d11ff001447f137)

_Brief used: none_

**Changes applied to Apollo automatically: 0**

## Recommended changes

The sequence has been frozen for eight consecutive weeks with only 4 lifetime attempted sends and placeholder 'Test Email' content, so there is no real campaign and no statistically readable data to optimize. The binding problem is operational (nothing has sent since 9/3 despite active: true) and informational (no campaign brief exists), not copy quality. Until real contacts are loaded, sending is confirmed live, and a brief is supplied, copy rewrites would be speculative and are intentionally withheld.

## Evaluation

# Campaign Evaluation — 9/3/26 Test Sequence — 2026-10-26

## Verdict
This is still not a live campaign. The subject is literally "Test Email" and the body reads "This email has been sent as a test for Apollo sending." Every figure is byte-for-byte identical to the previous **seven** evaluations (3 delivered, 1 bounced, 0 opened, 0 replied, 0 scheduled) — this is the **eighth consecutive week** with zero incremental sends. There is nothing new to diagnose and nothing to optimize until real copy and real send volume exist; the sequence has now been frozen for roughly eight weeks and should be treated as abandoned or misconfigured until someone confirms otherwise in Apollo.

## Prioritized issues
1. **Sequence frozen for eight consecutive pulls** — evidence: figures unchanged across 2026-09-07, 09-14, 09-21, 09-28, 10-05, 10-12, 10-19, and now 10-26 (delivered 3, bounced 1, opened 0, replied 0, `unique_scheduled: 0`). Despite `active: true`, nothing has sent in ~8 weeks. — estimated impact: high (blocks all analysis)
2. **Sample size is effectively zero** — evidence: 4 total attempted sends across the entire sequence lifetime. No engagement rate is statistically interpretable at this n. — estimated impact: high
3. **Still placeholder/test content, not campaign copy** — evidence: subject "Test Email"; body is a receipt-confirmation message with no offer, no pain point, and a sender-serving CTA ("reply to confirm receipt"). Nothing to optimize. — estimated impact: high
4. **One bounce out of four attempts** — evidence: `unique_bounced: 1` against 4 attempted = nominal 25%, but a single bad address produces that at n=4. Not a reliable signal. — estimated impact: low
5. **No campaign brief supplied (eighth time)** — evidence: brief section blank again. Copy-to-audience fit and target-vs-actual comparisons cannot be performed. — estimated impact: medium

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate | 1/4 attempted (nominal 25%) | <2% | n/a — no brief | 🔴 nominal / ⚠️ n=4, not reliable |
| Spam-block rate | 0/4 (0%) | <0.3% | n/a | 🟢 (but n=4) |
| Open rate | 0% (0/3 delivered) | 30–50% typical | n/a | ⚠️ n=3, uninterpretable |
| Reply rate | 0% (0/3 delivered) | 1–3% typical | n/a | ⚠️ n=3, uninterpretable |
| Click rate | 0% (no links in copy) | n/a | n/a | ⚪ n/a |
| Unsubscribe rate | 0% (0/3) | <1% | n/a | ⚪ n=3, uninterpretable |

*Bounce and spam-block are measured against attempted sends (delivered + bounced + spam-blocked = 4). No "delivery rate" is reported, per methodology — `unique_scheduled: 0` and the test/throttled nature of sending make any list-size denominator meaningless.*

## Funnel
- **Attempted: 4** → **Delivered: 3** → **Opened: 0** → **Replied: 0**
- Undiagnosable. With 3 delivered emails, 0 opens is equally consistent with a broken tracking pixel, a stalled pipeline, or plain small-number variance — the data cannot distinguish these. No "biggest leak" can be called out because no stage carries enough volume for drop-off to mean anything.

## Step-by-step
| Step | Variant | Scheduled | Delivered | Bounced | Opened | Replied | Verdict |
|---|---|---|---|---|---|---|---|
| 1 (auto_email) | "Test Email" | 0 | 3 | 1 | 0 | 0 | Test send only. Not evaluable. |

- Single step, single variant — no A/B comparison possible, and none should be attempted at this volume (rule of thumb: ~150–200 delivered per variant before reading anything).
- Stats are fully resolved (not still computing) and `scheduled` remains 0. The queue is drained and no new sends have been added since 9/3 — confirming the sequence is not actively delivering.

## Copy-to-audience fit
- **Cannot be scored** — the copy is a test artifact and no brief exists. Subject "Test Email" and body ("This email has been sent as a test for Apollo sending. Please reply to this email to confirm it was received.") are functional check messages, not outreach.
- Against generic cold-email principles only: no value proposition, no personalization, no audience pain point, and a CTA that serves the sender rather than the recipient. All expected for a test — flagged so it is not mistaken for live copy.

## Trend
- **No movement for an eighth straight pull.** Every figure is identical to 09-07, 09-14, 09-21, 09-28, 10-05, 10-12, and 10-19. The prior reports' conclusion — that the sequence is misconfigured or abandoned — is now beyond doubt: roughly eight weeks have passed with `unique_scheduled: 0` and zero incremental sends. The predicted effect of the last round (none, because nothing is sending) held exactly. This is a confirmed dormant state, not an anomaly to keep watching.

## Open questions
- **Why has nothing sent in ~8 weeks?** The sequence is `active: true` but `unique_scheduled: 0` and volume is unchanged since 9/7. Someone should verify in Apollo whether real contacts have been loaded and whether sending is paused, throttled, complete, or silently misconfigured.
- **Should this evaluation cadence be paused?** Eight identical automated reports have now been generated. Strongly recommend halting recurring evaluation until the sequence shows incremental sends (≥150–200 delivered per variant before reading any engagement metric), to avoid generating further no-op reports.
- **Was the single bounce hard or soft, and was that address a known typo/bad?** Noise at n=4, but confirm list verification is in place before scaling.
- **Is a campaign brief available elsewhere?** Without product/offer/audience/target metrics, copy-to-audience fit and target comparisons are impossible — supply one before the next evaluation.
- **Reply sentiment** is not exposed by the Apollo API; once real replies arrive, spot-check them manually (angry replies count toward reply rate too).

## A/B test plan

**Hypothesis:** No valid A/B test can be run yet because the sequence has fewer than 4 lifetime sends and ~150–200 delivered per variant are needed before any engagement metric is readable; once real copy and real volume exist, changing the subject line from a generic label to a short lowercase-casual line will improve open rate because specificity and a human tone earn opens in cold outreach.
**Variant A:** Subject: (to be defined from the campaign brief once supplied — current placeholder 'Test Email' is not a testable variant)
**Variant B:** Subject: (to be defined from the campaign brief once supplied — e.g., a 1–4 word lowercase internal-memo style line)
**Success metric:** Open rate, with a winner called only at >=150 delivered per variant; if the relative difference is <20%, keep the simpler line.
**Decision rule:** Do not start any A/B test until at least 150 delivered per variant is achievable; do not change send-time, list, or sender identity mid-test once it begins.

## Manual changes (targeting / timing / list)

- Investigate in Apollo why unique_scheduled has been 0 for ~8 weeks despite active: true — confirm whether sending is paused, throttled, completed, or silently misconfigured, and whether real contacts are actually loaded into the sequence.
- Load a real verified contact list; the current lifetime volume is 4 attempted sends, which is too small to interpret any metric.
- Run the list through email verification before scaling to avoid repeating the 1-in-4 bounce (confirm whether that single bounce was a hard bounce / known bad address).
- Replace the placeholder 'Test Email' step with real campaign copy before enabling broader sending — but do this only after a campaign brief (product, offer, target audience, tone, must-not-say constraints, target metrics) is supplied, since targeted copy cannot be written without it.
- Pause the recurring weekly evaluation cadence until the sequence shows incremental sends; eight identical no-op reports have now been generated. Resume evaluation once >=150–200 delivered per variant has accumulated.

## Next review

Do not re-run until the sequence shows incremental sends — specifically once at least 150–200 emails have been delivered per variant with real copy. At that point watch deliverability first (bounce <2%, spam-block <0.3%), then open rate, then reply rate. If figures remain identical at the next scheduled pull, treat the sequence as abandoned and halt automated reporting.

---
