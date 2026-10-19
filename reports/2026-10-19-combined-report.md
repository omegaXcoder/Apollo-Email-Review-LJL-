# Campaign performance report — 2026-10-19

# CB Email Campaign Start 9/9 (6aa060e17af83e00143f470d)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 0**

## Recommended changes

Five consecutive reports show an identical 0 opens / 0 replies on 101 delivered, which the evaluation correctly reads as a tracking or inbox-placement artifact rather than a copy failure. Per the deliverability-first rule, this plan freezes copy (which the eval rates as one of the campaign's strengths) and concentrates every change on confirming open tracking, diagnosing placement, and cutting volume so we stop accumulating un-measurable sends. The one structured test proposed is a diagnostic to isolate whether the open-tracking pixel itself is suppressing deliverability or recording.

## Evaluation

# Campaign Evaluation — CB Email Campaign Start 9/9 — 2026-10-19

## Verdict
Fifth consecutive report, identical flat-zero signature: **0 opens and 0 replies across 101 delivered**, now with still more volume stacked behind it (step 2 up to 86 delivered, step 3 up to 67). A sustained 0/101 across a subject swap and five weeks of rising sends is not a copy outcome — it is the fingerprint of broken open tracking or systematic inbox non-placement. This gate has not moved in five reports and nothing downstream can be judged until it clears. Fixing the tracking/placement root cause is worth the entire campaign; you are still accumulating un-measurable sends.

## Prioritized issues
1. **Zero opens on 101 delivered — five weeks running, prediction held a fifth time** — evidence: `unique_opened: 0`, `open_rate_pct: 0`, across all three steps and now across **253 total step-level deliveries** (100 + 86 + 67). A functioning cold campaign to a US SMB list leaks double-digit opens from Apple Mail privacy pre-fetch and security-scanner bots alone, independent of copy. A flat zero that survives a subject change AND five weeks of growing volume is not consistent with human behavior — it points to a disabled/broken open pixel or mail not landing in inboxes. This gates every engagement judgment below. Estimated impact: **high**.
2. **Spam-block rate ~6× alarm, count still frozen at 2** — evidence: 2 spam-blocked ÷ 105 attempted (101 delivered + 2 bounced + 2 spam) = **1.90%** (alarm >0.3%). Directional at this n, and the count has not moved across any report, so it is decaying as a rate rather than growing. Paired with issue #1, a placement/reputation problem remains the leading shared hypothesis. Estimated impact: **high** if zero-opens and spam placement share a root cause.
3. **Bounce rate just under the alarm line, decaying** — evidence: 2 bounced ÷ 105 attempted = **1.90%** (alarm >2%). Same 2 bounces as all five prior reports — no new bounces despite additional sends — so this continues to trend down as a rate. Estimated impact: **medium**, improving.
4. **Steps 2–3 still accumulating but unreadable** — evidence: step 2 at 86 delivered (up from 78), step 3 at 67 (up from 32 — fastest-growing step). Both single-variant, both still short of the ~150–200/variant needed to call anything, and zero opens/replies everywhere make the growth uninformative. Estimated impact: **medium** (blocks step-level and copy-on-data analysis).

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate | 1.90% (2/105 attempted) | <2% | (95%+ delivery) | 🟡 just under line, count flat, decaying |
| Spam-block rate | 1.90% (2/105 attempted) | <0.3% | — | 🔴 ~6× threshold; count unchanged — directional at this n |
| Open rate | 0% (0/101 delivered) | 30–50% | 30% | 🔴 anomalous — almost certainly tracking/placement, not copy |
| Reply rate | 0% (0/101 delivered) | 1–3% | 2% | ⚪ gated by opens |
| Unsubscribe rate | 0% (0/101) | <1% | — | ⚪ n too small / gated |
| Meetings booked / 100 delivered | 0 (0/101) | ~1 | 1 | ⚪ gated |

No "delivery rate" row by design: sending is intentionally throttled (~60/day), so only part of the list has been attempted. A delivered-over-scheduled figure would misrepresent pacing as failure. Note Apollo's own `bounce_rate_pct: 6.9` and `delivery_rate_pct: 348.28` are built on the incoherent `unique_scheduled: 29` denominator and should be ignored — a 348% delivery rate is nonsensical on its face. Bounce and spam-block measured against attempted sends (105) are the reliable deliverability signals.

## Funnel
Delivered **101** → Opened **0 (0%)** → Replied **0 (0%)**.

The nominal biggest leak is the open stage, but the *shape* is the real signal and it is now at its strongest yet. Zero opens on 101 delivered — sustained through a subject-line change and five weeks of growing volume — is not consistent with "weak subject lines." Even a bad cold campaign leaks opens from privacy pre-fetch and bots. A flat zero at this n points to the open pixel not being recorded or mail not reaching inboxes. **The funnel remains un-interpretable until open tracking and inbox placement are confirmed.** You cannot read subject quality — or anything downstream — off a tracking artifact.

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 | "missed calls?" | 100 | 0 | 0 | Only step at callable volume. Absorbed all 4 deliverability events (2 bounce, 2 spam). 0 opens across two subjects tried — chase tracking/placement, not copy. |
| 2 | (empty / threads as reply) | 86 | 0 | 0 | Grew 78 → 86. Zero opens make it unreadable; still short of ~150–200 for any conclusion. |
| 3 | (empty / threads as reply) | 67 | 0 | 0 | Grew 32 → 67 — fastest-growing step. Approaching but still below callable volume. |

Single variant per step — no A/B comparison exists, and n is nowhere near callable anyway. No step can be labeled dead weight; steps 2–3 are still ramping. With opens flat at zero everywhere, step-level reads are impossible by construction.

**Counter note:** the per-step and sequence-level `scheduled` fields remain internally incoherent (step 1 `scheduled: 0` vs `delivered: 100`; sequence `unique_scheduled: 29` far below `unique_delivered: 101`). As in all prior reports, treat `scheduled` as an unreliable live-queue counter, not a cumulative total. It changes no conclusion — opens are zero regardless.

## Copy-to-audience fit
Copy is unchanged since the prior reports and remains one of the stronger parts of this campaign; the zero-engagement problem is almost certainly not a copy problem. Re-confirming alignment (nothing new on data because opens are still zero):

- **Subject leads on pain, tersely.** "missed calls?" maps to brief pain points #1 and #4 (missed calls in the field → lost revenue); short, lowercase, defensible cold register. Actual performance unknowable from this data.
- **Body opens on the stated pain in the audience's words.** "When your crew is out on a job, what happens to a new customer call?" — pain point #1 stated plainly. Good fit.
- **Objection handling matches the brief.** Step 2 tackles "hiring an in-house receptionist feels like the safer move" with the scale/cost answer — nearly verbatim the brief's stated objection and prescribed response.
- **Tone matches.** Warm, plain, non-corporate — the relatable small-business-owner register the brief calls for.
- **Constraints respected.** No em dashes; scope stays inside stated services ("answers as your office and books jobs right in your CRM"); no implication of full-time employment.
- **CTA is deliberately softer than the brief's goal.** Brief's core CTA is "Schedule a call" (Calendly); the sequence uses reply micro-commitments ("reply 'Plan'" / "reply 'yes'"). Lower friction is defensible, but the Calendly link is never surfaced, so every reply would require manual follow-up to become a booked meeting.
- **Trust ammunition still idle.** Named testimonials, CRM integrations (Jobber/Service Autopilot/YardBook), woman/minority-owned — none appears in the sequence. Not a defect, but unused.

## Trend vs. 2026-10-12
- **Opens: 0 → 0** (delivered 101 → 101). The gate flagged for five straight reports has still not cleared. Added step-2/3 volume continues to strengthen the tracking/placement hypothesis. **No change.**
- **Bounce rate: 1.90% → 1.90%** (count flat at 2, denominator unchanged at 105). Still decaying across campaign history; no new bounces.
- **Spam-block rate: 1.90% → 1.90%** (count flat at 2). Still far over alarm, still directional at this n.
- **Step 2 volume: 78 → 86 delivered; Step 3: 32 → 67 delivered.** More data accumulating, still zero engagement, still sub-threshold.
- **Net:** nothing flagged as the #1 blocker in five consecutive reports has been resolved. The campaign is still pumping sends into a funnel that cannot be measured. The predicted "more volume only produces more un-interpretable zeros" has held a fifth time.

## Open questions
- **Is open tracking actually enabled on this sequence?** A true 0/101 sustained across a subject change and five weeks is far more consistent with a disabled/broken pixel than real behavior. Verify in Apollo before drawing any subject-line conclusion. **Still the top thing to confirm — unchanged for five reports.**
- **Where are messages landing?** Run an inbox-placement / seed test on the sending domain. Zero opens plus a spam-block rate ~6× alarm together hint at a placement/reputation problem the API cannot confirm.
- **Why do the `scheduled` counters contradict `delivered`?** (sequence `unique_scheduled: 29` < `unique_delivered: 101`; step 1: 0 vs 100). Reconcile in Apollo; the recurring inconsistency — and the nonsensical 348% `delivery_rate_pct` it produces — suggests the counters are mid-refresh or semantically misused.
- **Reply sentiment is moot now (0 replies), but note for later:** Apollo's reply count includes angry/negative replies. Once replies exist, spot-check them by hand before treating reply rate as positive interest.
- **Re-evaluate once open tracking is confirmed working AND ≥150–200 are delivered per step.** Until the gate clears, more volume only produces more un-interpretable zeros — now demonstrated five reports in a row.

## A/B test plan

**Hypothesis:** The flat 0/101 open signature is caused by the open-tracking pixel (either broken recording or a mis-configured/shared tracking domain that tanks placement), not by copy; sending the same email with the pixel disabled will produce measurable replies while the pixel-on version stays at zero.
**Variant A:** Current step-1 email exactly as written (subject 'missed calls?', body unchanged) sent with Apollo open-tracking ENABLED (pixel on).
**Variant B:** Identical step-1 email (subject 'missed calls?', body unchanged, no links) sent with Apollo open-tracking DISABLED (no pixel), relying on reply micro-commitment ('reply Plan') as the only measurable signal.
**Success metric:** Reply rate per variant (opens are untrustworthy by design in this test). Run to at least 150 delivered per variant.
**Decision rule:** If Variant B (pixel off) generates replies while Variant A (pixel on) stays at or near zero, the tracking pixel/tracking-domain is the root cause: disable the pixel or move to a dedicated authenticated tracking domain campaign-wide. If both variants reply at similar non-zero rates, the pixel is fine and prior zeros were a reporting lag. If both stay at zero despite confirmed inbox placement, escalate to Apollo support as a tracking bug. Do NOT change subject, body, send time, or list source while the test runs.

## Manual changes (targeting / timing / list)

- FIRST: Open the sequence in Apollo and confirm open-tracking is actually enabled and the tracking pixel is firing. A true 0/101 across a subject change and five weeks is far more consistent with a disabled/broken pixel than human behavior. This is the single most important action and gates everything else.
- Run an inbox-placement / seed test (e.g., GlockApps or Mailreach) from the actual sending mailbox to confirm whether mail is landing in Primary, Promotions, or Spam. Zero opens plus a spam-block rate ~6x the alarm line strongly suggests a placement/reputation issue the API cannot see.
- Audit sending-domain authentication: verify SPF, DKIM, and DMARC are all passing and aligned, and confirm the Apollo click/open tracking domain is a custom subdomain with its own DNS/CNAME setup rather than a shared Apollo tracking domain (shared tracking domains are a common cause of bulk spam placement).
- Throttle daily volume down from 60 to ~20-25/day until open tracking and inbox placement are both confirmed working. Continuing at 60/day only converts more of the list into un-measurable zeros and risks burning reputation on a possibly-broken setup.
- Reconcile the incoherent counters with Apollo support (sequence unique_scheduled 29 < unique_delivered 101; step 1 scheduled 0 vs delivered 100; nonsensical 348% delivery_rate). This may indicate a reporting/refresh bug that is also affecting the open counter.
- Re-verify the remaining unsent list through Apollo (or a second verifier like NeverBounce/ZeroBounce) before resuming full volume to keep bounces under the 2% line as new batches send.
- Keep step-1 body link-free (as it currently is) during diagnosis; do not add a Calendly link yet, since introducing a URL while placement is in question would confound the deliverability read. Once placement is confirmed, surface the Calendly link in the positive-reply handling flow, not in the cold step.
- Do not touch the copy during this window. The evaluation rates copy-to-audience fit as strong and correctly aligned to brief pain points #1 and #4; changing it now would destroy attribution on the real (deliverability) variable.

## Next review

Re-run the evaluation only after (a) open tracking is confirmed enabled/firing in Apollo AND (b) an inbox-placement seed test has been completed, then once at least 150-200 messages have been delivered per step under the corrected setup (roughly 2 weeks at 20-25/day, or sooner if volume is restored after placement is confirmed clean). Watch first for any non-zero open or reply signal at all, which would confirm the gate has cleared; only then judge subject-line and body performance. If opens remain at exactly zero after tracking is verified and placement is confirmed in-inbox, treat it as a confirmed Apollo reporting bug and escalate rather than rewriting copy.

---

# 9/3/26 Test Sequence (6a99ac201d11ff001447f137)

_Brief used: none_

**Changes applied to Apollo automatically: 0**

## Recommended changes

This is a dormant test sequence, not a live campaign — the subject is literally "Test Email" and figures have been frozen for seven consecutive weekly pulls (3 delivered, 1 bounced, 0 opens, 0 replies). No copy optimization is warranted because there is no real offer, no campaign brief, and no statistically meaningful volume to read. The only impactful actions are operational: confirm why nothing has sent in ~7 weeks, load verified real contacts, supply a brief, and replace the placeholder content with real outreach before any A/B testing or copy tuning can begin.

## Evaluation

# Campaign Evaluation — 9/3/26 Test Sequence — 2026-10-19

## Verdict
This is still a test sequence, not a live campaign — the subject is literally "Test Email" and the body says "This email has been sent as a test for Apollo sending." The numbers are byte-for-byte identical to the previous **six** evaluations (3 delivered, 1 bounced, 0 opened, 0 replied, 0 scheduled), making this the **seventh consecutive week** with no incremental sends and nothing new to diagnose. Fixing this is worth nothing until real copy and real send volume exist; the sequence has now been frozen for roughly seven weeks and should be treated as abandoned or misconfigured until someone confirms otherwise in Apollo.

## Prioritized issues
1. **Sequence frozen for seven consecutive pulls** — evidence: figures unchanged across 2026-09-07, 09-14, 09-21, 09-28, 10-05, 10-12, and now 10-19 (delivered 3, bounced 1, opened 0, replied 0, `unique_scheduled: 0`). Despite `active: true`, nothing has sent in ~7 weeks. — estimated impact: high (blocks all analysis)
2. **Sample size is effectively zero** — evidence: 4 total attempted sends across the entire sequence lifetime. No engagement rate is statistically interpretable at this n. — estimated impact: high
3. **Still placeholder/test content, not campaign copy** — evidence: subject "Test Email"; body is a receipt-confirmation message with no offer, no pain point, and a sender-serving CTA ("reply to confirm receipt"). Nothing to optimize. — estimated impact: high
4. **One bounce out of four attempts** — evidence: `unique_bounced: 1` against 4 attempted = nominal 25%, but a single bad address produces that at n=4. Not a reliable signal. — estimated impact: low
5. **No campaign brief supplied (seventh time)** — evidence: brief section blank again. Copy-to-audience fit and target-vs-actual comparisons cannot be performed. — estimated impact: medium

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
- **No movement for a seventh straight pull.** Every figure is identical to 09-07, 09-14, 09-21, 09-28, 10-05, and 10-12. The prior reports' conclusion — that the sequence is misconfigured or abandoned — is now beyond doubt: roughly seven weeks have passed with `unique_scheduled: 0` and zero incremental sends. Nothing changed because nothing is sending. This is a confirmed dormant state, not an anomaly to keep watching.

## Open questions
- **Why has nothing sent in ~7 weeks?** The sequence is `active: true` but `unique_scheduled: 0` and volume is unchanged since 9/7. Someone should verify in Apollo whether real contacts have been loaded and whether sending is paused, throttled, complete, or silently misconfigured.
- **Should this evaluation cadence be paused?** Seven identical automated reports have now been generated. Strongly consider halting recurring evaluation until the sequence shows incremental sends (≥150–200 delivered per variant before reading any engagement metric), to avoid generating further no-op reports.
- **Was the single bounce hard or soft, and was that address a known typo/bad?** Noise at n=4, but confirm list verification is in place before scaling.
- **Is a campaign brief available elsewhere?** Without product/offer/audience/target metrics, copy-to-audience fit and target comparisons are impossible — supply one before the next evaluation.
- **Reply sentiment** is not exposed by the Apollo API; once real replies arrive, spot-check them manually (angry replies count toward reply rate too).

## A/B test plan

**Hypothesis:** No A/B test should run yet — with only 4 lifetime attempted sends and 3 delivered, there is no readable sample. Attempting a test now would produce noise, not signal.
**Variant A:** N/A — hold all testing until real copy exists and at least ~150–200 emails are delivered per variant.
**Variant B:** N/A — same reason.
**Success metric:** Reply rate (primary) and open rate (secondary), measured only once each variant reaches ≥150 delivered.
**Decision rule:** Do not call any winner below 150 delivered per variant; if the relative difference is under 20% once volume is reached, keep the simpler/shorter variant.

## Manual changes (targeting / timing / list)

- Verify in Apollo why the sequence shows active: true but unique_scheduled: 0 — check whether sending is paused, throttled, completed, or silently misconfigured. Nothing has sent in ~7 weeks.
- Confirm real, verified contacts are loaded into the sequence. Currently only 4 lifetime sends exist, which is a test batch, not an audience.
- Run list verification (e.g., bounce/email validation) before scaling — one hard bounce at n=4 is noise but hygiene must be confirmed before volume grows.
- Replace the placeholder 'Test Email' step with real outreach copy — this requires a campaign brief (product, offer, target persona, pain points, tone, and must-not-say constraints), which has been missing for seven straight evaluations. Supply one before copy can be written.
- Pause the recurring automated evaluation cadence until the sequence shows incremental sends; seven identical no-op reports have now been generated.

## Next review

Do not re-run a full evaluation until the sequence shows incremental sends beyond the current frozen 4. Trigger the next review once real copy is live and at least ~150–200 emails have been delivered per variant — only then will open/reply rates be interpretable. In the interim, a single operational check in Apollo (is it sending? are contacts loaded?) is more valuable than another metrics report.

---
