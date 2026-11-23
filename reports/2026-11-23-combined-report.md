# Campaign performance report — 2026-11-23

# CB Email Campaign Start 9/9 (6aa060e17af83e00143f470d)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 0**

## Recommended changes

The campaign shows a byte-for-byte frozen 0 opens / 0 replies across 101 delivered for ten consecutive pulls, which is the signature of broken open tracking, inbox non-placement, or a stalled sequence, not a copy failure. The existing copy already aligns well with the brief's pain points, tone, and constraints, so rewriting it now would only produce more un-interpretable zeros. All effort should go to confirming the sequence is actually dispatching, verifying open tracking is enabled, and running an inbox-placement test before any copy or A/B work resumes.

## Evaluation

# Campaign Evaluation — CB Email Campaign Start 9/9 — 2026-11-23

## Verdict
This is the tenth consecutive pull with byte-for-byte identical numbers: 0 opens and 0 replies across 101 delivered, the same 2 bounces and 2 spam-blocks, the same frozen per-step deliveries (100 / 87 / 91). A flat 0/101 that has now survived a subject swap and ten weeks is not a copy outcome — it is the signature of broken open tracking, systematic inbox non-placement, or a sequence that stopped dispatching long ago. Nothing downstream is judgeable until this gate clears, and clearing it is worth the entire campaign: every send logged since September remains unmeasurable, and sending has produced zero new data for weeks running.

## Prioritized issues
1. **Zero opens on 101 delivered — ten reports running, not a single counter has moved** — evidence: `unique_opened: 0`, `open_rate_pct: 0`, across all three steps (278 total step-level deliveries: 100 + 87 + 91). A functioning cold campaign to a US SMB list leaks double-digit opens from Apple Mail privacy pre-fetch and security-scanner bots alone, independent of copy quality. A flat zero that outlived a subject change and ten weeks is not human behavior — it points to a disabled/broken open pixel or mail not landing in inboxes. This gates every engagement judgment below. Estimated impact: **high**.
2. **Numbers are completely frozen — the campaign is accumulating zero new data** — evidence: every field (delivered 101, bounced 2, spam 2, step deliveries 100 / 87 / 91) is identical to the 2026-11-16, 11-09, 11-02, and 10-26 pulls. Either sending has stalled, the pull is stale, or the sequence is no longer dispatching. For at least three straight pulls not one new send has been added. The campaign may be burning calendar time without burning list. Estimated impact: **high**.
3. **Spam-block rate ~6× alarm, count frozen at 2** — evidence: 2 spam-blocked ÷ 105 attempted = **1.90%** (alarm >0.3%). Directional at this n; the count has never moved across ten reports, so it decays as a rate rather than grows. Paired with issue #1, a placement/reputation problem remains the leading shared hypothesis. Estimated impact: **high** if zero-opens and spam placement share a root cause.
4. **Bounce rate just under the alarm line, decaying for the wrong reason** — evidence: 2 bounced ÷ 105 attempted = **1.90%** (alarm >2%). Same 2 bounces as all prior reports. As a rate it only trends down because the denominator stopped growing, not because deliverability improved. Estimated impact: **medium**.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate | 1.90% (2/105 attempted) | <2% | (95%+ delivery) | 🟡 just under line, count flat |
| Spam-block rate | 1.90% (2/105 attempted) | <0.3% | — | 🔴 ~6× threshold; count unchanged — directional at this n |
| Open rate | 0% (0/101 delivered) | 30–50% | 30% | 🔴 anomalous — almost certainly tracking/placement, not copy |
| Reply rate | 0% (0/101 delivered) | 1–3% | 2% | ⚪ gated by opens |
| Unsubscribe rate | 0% (0/101) | <1% | — | ⚪ n too small / gated |
| Meetings booked / 100 delivered | 0 (0/101) | ~1 | 1 | ⚪ gated |

No "delivery rate" row by design: sending is intentionally throttled (~60/day), so only part of the list has been attempted. A delivered-over-scheduled figure would misrepresent pacing as failure. `unique_scheduled` reads `0` this pull and the per-step `scheduled` counters again contradict `delivered` (step 1 `scheduled: 0` vs `delivered: 100`) — unreliable live-queue counters, not cumulative totals, and they change no conclusion. Bounce and spam-block against attempted sends (105) remain the only reliable deliverability signals.

## Funnel
Delivered **101** → Opened **0 (0%)** → Replied **0 (0%)**.

The nominal biggest leak is the open stage, but the *shape* is the real signal. Zero opens on 101 delivered — sustained through a subject-line change and ten weeks — is not consistent with "weak subject lines." Even a bad cold campaign leaks opens from privacy pre-fetch and bots. A flat zero at this n points to the open pixel not being recorded or mail not reaching inboxes. **The funnel remains un-interpretable until open tracking and inbox placement are confirmed.** You cannot read subject quality — or anything downstream — off a tracking artifact.

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 | "missed calls?" | 100 | 0 | 0 | Only step at near-callable volume. Absorbed all 4 deliverability events (2 bounce, 2 spam). 0 opens — chase tracking/placement, not copy. |
| 2 | (empty / threads as reply) | 87 | 0 | 0 | Flat again (87 → 87). Zero opens make it unreadable; still short of ~150–200 for any conclusion. |
| 3 | (empty / threads as reply) | 91 | 0 | 0 | Flat again (91 → 91). Growth has stopped entirely. Still below callable volume. |

Single variant per step — no A/B comparison exists, and n is nowhere near callable. No step can be labeled dead weight; steps 2–3 never reached callable volume and have now been frozen for weeks. With opens flat at zero everywhere, step-level reads are impossible by construction.

## Copy-to-audience fit
Copy is unchanged since all prior reports and remains one of the stronger parts of this campaign; the zero-engagement problem is almost certainly not a copy problem. Re-confirming alignment (nothing new on data, because opens are still zero):

- **Subject leads on pain, tersely.** "missed calls?" maps to brief pain points #1 and #4 (missed calls in the field → lost revenue); short, lowercase, defensible cold register. Actual performance unknowable from this data.
- **Body opens on the stated pain in the audience's words.** "When your crew is out on a job, what happens to a new customer call?" — pain point #1 stated plainly. Good fit.
- **Objection handling matches the brief.** Step 2 tackles "hiring an in-house receptionist feels like the safer move" with the scale/cost answer — nearly verbatim the brief's stated objection and prescribed response.
- **Tone matches.** Warm, plain, non-corporate — the relatable small-business-owner register the brief calls for.
- **Constraints respected.** No em dashes; scope stays inside stated services ("answers as your office and books jobs right in your CRM"); no implication of full-time employment.
- **CTA is deliberately softer than the brief's goal.** Brief's core CTA is "Schedule a call" (Calendly); the sequence uses reply micro-commitments ("reply 'Plan'" / "reply 'yes'"). Step 1 surfaces the ask via reply; steps 2–3 lean entirely on reply prompts, so most paths would need manual follow-up to become a booked meeting.
- **Trust ammunition still idle.** Named testimonials, CRM integrations (Jobber/Service Autopilot/YardBook), woman/minority-owned — none appears in the sequence. Not a defect, but unused.

## Open questions
- **Is open tracking actually enabled on this sequence?** A true 0/101 sustained across a subject change and ten reports is far more consistent with a disabled/broken pixel than real behavior. Verify in Apollo before drawing any subject-line conclusion. **Still the top thing to confirm — unchanged for ten reports.**
- **Has sending actually stalled?** Every counter is identical to the last several pulls, and no new sends have been added for at least three straight pulls. Confirm in Apollo whether the sequence is still dispatching (~60/day) or has silently stopped — if it has, the "flat" numbers reflect a paused campaign, not steady-state, and you are no longer accumulating data. This is now the most likely explanation for the frozen numbers.
- **Where are messages landing?** Run an inbox-placement / seed test on the sending domain. Zero opens plus a spam-block rate ~6× alarm together hint at a placement/reputation problem the API cannot confirm.
- **Why do the `scheduled` counters contradict `delivered`?** (step 1 `scheduled: 0` vs `delivered: 100`). Reconcile in Apollo; treat as a live-queue artifact, not a total.
- **Reply sentiment is moot now (0 replies), but note for later:** Apollo's reply count includes angry/negative replies. Once replies exist, spot-check them by hand before treating reply rate as positive interest.
- **Re-evaluate once open tracking is confirmed working AND ≥150–200 are delivered per step.** Until the gate clears, more volume only produces more un-interpretable zeros — now demonstrated ten reports in a row, and with the campaign apparently no longer adding sends at all.

## A/B test plan

**Hypothesis:** DO NOT RUN until the tracking/placement gate clears. Once opens are confirmed recording and inbox placement is verified, test whether leading step 1 with a proof point improves reply rate, because this audience knows the answering-service category and may need trust (named-vertical social proof) more than another pain restatement.
**Variant A:** Subject: missed calls? / Body: current step 1 copy unchanged (pain-led open).
**Variant B:** Subject: missed calls? / Body: same copy but open with social proof line 'We answer the phones for lawn care, pest control, and irrigation companies across the US as their own office.' then the missed-call pain and the 'reply Plan' CTA.
**Success metric:** Reply rate, measured only after open tracking is confirmed functional.
**Decision rule:** Call a winner at >=150 delivered per variant; if relative reply-rate difference is <20%, keep Variant A (the simpler, current copy). Do not change subject line, send time, or list source while the test runs.

## Manual changes (targeting / timing / list)

- BEFORE anything else: open Apollo and confirm the sequence 'CB Email Campaign Start 9/9' is actually active and dispatching ~60/day. Every counter has been identical for ten pulls, so the most likely explanation is that sending has silently stopped. If paused, re-enable; if dispatching, confirm new sends are being added week over week.
- Verify open-tracking (tracking pixel) is enabled on this sequence in Apollo settings. A true 0/101 sustained through a subject change and ten weeks is far more consistent with a disabled/broken pixel than real human behavior, since Apple Mail pre-fetch and security scanners alone leak double-digit opens on any live US SMB campaign.
- Run an inbox-placement / seed test (e.g., GlockApps or a manual seed list across Gmail/Outlook/Yahoo) on the sending domain. The spam-block rate of ~1.9% is roughly 6x the 0.3% alarm line, which paired with zero opens points to a possible reputation/placement problem the API cannot confirm.
- Throttle or hold new sends until tracking and placement are confirmed. Continuing to send ~60/day at this state only burns list against an unmeasurable gate and risks further reputation damage if mail is landing in spam.
- Re-verify the list through Apollo and remove the 2 bounced addresses; keep bounce rate under the 2% line as volume resumes so the denominator growth does not push it back over alarm.
- Reconcile the scheduled-vs-delivered counter mismatch (step 1 scheduled:0 vs delivered:100) in the Apollo UI to rule out a queue/dispatch malfunction rather than treating it purely as a live-queue display artifact.

## Next review

Re-run the evaluation once (a) open tracking is confirmed enabled and recording, (b) an inbox-placement test has been run, and (c) at least 150-200 messages have been delivered on step 1 AFTER the gate clears. Until opens move off zero, more volume only produces more un-interpretable data, so do not schedule a copy-performance review before the tracking and dispatch issues are resolved. Watch first for any non-zero open counter as the single signal that measurement is finally working.

---

# 9/3/26 Test Sequence (6a99ac201d11ff001447f137)

_Brief used: none_

**Changes applied to Apollo automatically: 0**

## Recommended changes

This is not a live campaign: it is an Apollo send-test that has been frozen for twelve consecutive pulls (3 delivered, 1 bounced, 0 opens, 0 replies, unique_scheduled 0) with placeholder 'Test Email' copy. No copy optimization is warranted because there is no brief, no real audience, and no interpretable sample — the only meaningful actions are operational: diagnose why nothing has sent in ~12 weeks and pause this no-op evaluation cadence. Expected impact of copy edits here is zero until the sequence is actually delivering to real contacts at readable volume.

## Evaluation

# Campaign Evaluation — 9/3/26 Test Sequence — 2026-11-23

## Verdict
This is not a live campaign and the numbers have not moved for a **twelfth consecutive pull**. Subject is "Test Email," the body is an Apollo send-test confirmation, and every figure is byte-for-byte identical to the previous eleven evaluations (3 delivered, 1 bounced, 0 opened, 0 replied, `unique_scheduled: 0`). There is nothing new to diagnose — the sequence has been frozen for roughly twelve weeks and should be treated as abandoned or misconfigured. The only valuable action is operational, not analytical: find out why nothing is sending and halt this recurring evaluation.

## Prioritized issues
1. **Sequence frozen for twelve consecutive pulls** — evidence: figures unchanged across 09-07 → 11-16 and now 11-23 (delivered 3, bounced 1, opened 0, replied 0, `unique_scheduled: 0`). `active: true` but zero incremental sends in ~12 weeks. — estimated impact: high (blocks all analysis)
2. **Sample size is effectively zero** — evidence: 4 total attempted sends across the sequence's entire lifetime. No engagement rate is statistically interpretable at this n. — estimated impact: high
3. **Still placeholder/test content, not campaign copy** — evidence: subject "Test Email"; body is a receipt-confirmation ("Please reply to this email to confirm it was received") with no offer, no pain point, and a sender-serving CTA. Nothing to optimize. — estimated impact: high
4. **One bounce out of four attempts** — evidence: `unique_bounced: 1` against 4 attempted = nominal 25%, but a single bad address produces that at n=4. Not a reliable signal. — estimated impact: low
5. **No campaign brief supplied (twelfth time)** — evidence: brief section blank again. Copy-to-audience fit and target-vs-actual comparisons cannot be performed. — estimated impact: medium

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
- **No movement for a twelfth straight pull.** Every figure is identical to 09-07 through 11-16. The prior reports' conclusion — that the sequence is misconfigured or abandoned — is now beyond doubt: ~12 weeks with `unique_scheduled: 0` and zero incremental sends. The last round predicted no change (because nothing is sending); that held exactly. This is a confirmed dormant state, not an anomaly worth continued watching.

## Open questions
- **Why has nothing sent in ~12 weeks?** The sequence is `active: true` but `unique_scheduled: 0` and volume is unchanged since 9/7. Someone should verify in Apollo whether real contacts have been loaded and whether sending is paused, throttled, complete, or silently misconfigured.
- **Should this evaluation cadence be paused?** Twelve identical automated reports have now been generated. Strongly recommend halting recurring evaluation until the sequence shows incremental sends (≥150–200 delivered per variant before reading any engagement metric), to avoid generating further no-op reports.
- **Was the single bounce hard or soft, and was that address a known typo/bad?** Noise at n=4, but confirm list verification is in place before scaling.
- **Is a campaign brief available elsewhere?** Without product/offer/audience/target metrics, copy-to-audience fit and target comparisons are impossible — supply one before the next evaluation.
- **Reply sentiment** is not exposed by the Apollo API; once real replies arrive, spot-check them manually (angry replies count toward reply rate too).

## A/B test plan

**Hypothesis:** No A/B test can be validly run right now — at 3 delivered emails any result is noise. Deferred hypothesis for once real sends exist: 'A plain, specific subject line will beat the generic placeholder because cold-email opens are driven by relevance and curiosity, not confirmation-style phrasing.'
**Variant A:** Do not run. Hold current single variant until real contacts are loaded and sending resumes.
**Variant B:** Do not run. A second variant should only be introduced once each variant can reach ~150–200 delivered.
**Success metric:** Open rate (then reply rate) — but only readable at ≥150–200 delivered per variant.
**Decision rule:** Do not call any winner below ~150–200 delivered per variant; if the relative difference is under 20% at that volume, keep the simpler copy. No test should start until the sequence shows incremental sends.

## Manual changes (targeting / timing / list)

- Investigate in Apollo why unique_scheduled is 0 and no new sends have occurred in ~12 weeks despite active: true — check whether real contacts are loaded, whether sending is paused/throttled/complete, or whether the sequence is silently misconfigured.
- Confirm whether this is a leftover test sequence; if so, archive or clearly rename it (e.g., 'TEST — do not use') so it is not mistaken for a live campaign.
- Replace placeholder test content with real campaign copy ONLY after a campaign brief (product, offer, audience, target metrics) is supplied — current subject 'Test Email' and the confirmation-receipt body are functional artifacts, not outreach.
- Verify the single bounced address was a known typo/bad contact and ensure list verification (e.g., email verification step) is in place before scaling to real volume.
- Pause this recurring automated evaluation until the sequence shows incremental delivery; twelve identical no-op reports have now been generated and further runs add no value until data moves.

## Next review

Do not re-run on the current cadence. Trigger the next evaluation only once the sequence shows incremental sends — ideally ≥150–200 delivered per variant — at which point real engagement metrics (open, reply, bounce) become interpretable. Until then, the next 'review' should be an operational check in Apollo confirming contacts are loaded and sending is unblocked, plus delivery of a campaign brief.

---
