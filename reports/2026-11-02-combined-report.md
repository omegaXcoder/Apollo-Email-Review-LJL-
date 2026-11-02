# Campaign performance report — 2026-11-02

# CB Email Campaign Start 9/9 (6aa060e17af83e00143f470d)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 0**

## Recommended changes

The campaign has shown a byte-for-byte frozen 0 opens / 0 replies across 101 delivered for seven consecutive reports, which the evaluation correctly reads as a broken open pixel or systematic inbox non-placement, not a copy failure. The spam-block rate is running ~6x the alarm threshold and counters have stopped advancing entirely, suggesting sending may have silently stalled. Per the deliverability-first rule, we are holding copy changes until tracking and inbox placement are confirmed, since better copy in the spam folder helps no one.

## Evaluation

# Campaign Evaluation — CB Email Campaign Start 9/9 — 2026-11-02

## Verdict
Seventh consecutive report, and the numbers are now not just flat but **byte-for-byte identical** to the 2026-10-26 pull: 0 opens and 0 replies across 101 delivered, same 2 bounces, same 2 spam-blocks, same per-step deliveries (100 / 87 / 91). A sustained 0/101 across a prior subject swap and seven weeks is not a copy outcome — it is the signature of broken open tracking or systematic inbox non-placement. Nothing downstream can be judged until this gate clears, and clearing it is worth the entire campaign, because every send logged since September is currently unmeasurable.

## Prioritized issues
1. **Zero opens on 101 delivered — seven reports running, and this pull didn't move a single counter** — evidence: `unique_opened: 0`, `open_rate_pct: 0`, across all three steps (278 total step-level deliveries: 100 + 87 + 91). A functioning cold campaign to a US SMB list leaks double-digit opens from Apple Mail privacy pre-fetch and security-scanner bots alone, regardless of copy quality. A flat zero that survived a subject change and seven weeks is not human behavior — it points to a disabled/broken open pixel or mail not landing in inboxes. This gates every engagement judgment below. Estimated impact: **high**.
2. **Numbers are completely frozen vs. last pull — nothing advanced** — evidence: every field (delivered, bounced, spam, and all three step deliveries) matches 2026-10-26 exactly. Either sending has stalled, the pull is stale, or the sequence is no longer actually dispatching. This is itself a finding: the campaign may be burning calendar time without burning list. Estimated impact: **high** (if sends have silently stopped, you're not even accumulating data anymore).
3. **Spam-block rate ~6× alarm, count still frozen at 2** — evidence: 2 spam-blocked ÷ 105 attempted = **1.90%** (alarm >0.3%). Directional at this n; the count has never moved across seven reports, so it decays as a rate rather than grows. Paired with issue #1, a placement/reputation problem remains the leading shared hypothesis. Estimated impact: **high** if zero-opens and spam placement share a root cause.
4. **Bounce rate just under the alarm line, decaying** — evidence: 2 bounced ÷ 105 attempted = **1.90%** (alarm >2%). Same 2 bounces as all seven prior reports. As a rate it keeps trending down only because the denominator stopped growing. Estimated impact: **medium**, improving but for the wrong reason (no new sends).

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate | 1.90% (2/105 attempted) | <2% | (95%+ delivery) | 🟡 just under line, count flat |
| Spam-block rate | 1.90% (2/105 attempted) | <0.3% | — | 🔴 ~6× threshold; count unchanged — directional at this n |
| Open rate | 0% (0/101 delivered) | 30–50% | 30% | 🔴 anomalous — almost certainly tracking/placement, not copy |
| Reply rate | 0% (0/101 delivered) | 1–3% | 2% | ⚪ gated by opens |
| Unsubscribe rate | 0% (0/101) | <1% | — | ⚪ n too small / gated |
| Meetings booked / 100 delivered | 0 (0/101) | ~1 | 1 | ⚪ gated |

No "delivery rate" row by design: sending is intentionally throttled (~60/day), so only part of the list has been attempted. A delivered-over-scheduled figure would misrepresent pacing as failure. `unique_scheduled` reads `0` this pull and the per-step `scheduled` counters again contradict `delivered` (step 1 `scheduled: 0` vs `delivered: 100`) — unreliable live-queue counters, not cumulative totals, and they change no conclusion. Bounce and spam-block against attempted sends (105) remain the reliable deliverability signals.

## Funnel
Delivered **101** → Opened **0 (0%)** → Replied **0 (0%)**.

The nominal biggest leak is the open stage, but the *shape* is the real signal. Zero opens on 101 delivered — sustained through a subject-line change and seven weeks — is not consistent with "weak subject lines." Even a bad cold campaign leaks opens from privacy pre-fetch and bots. A flat zero at this n points to the open pixel not being recorded or mail not reaching inboxes. **The funnel remains un-interpretable until open tracking and inbox placement are confirmed.** You cannot read subject quality — or anything downstream — off a tracking artifact.

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 | "missed calls?" | 100 | 0 | 0 | Only step at callable volume. Absorbed all 4 deliverability events (2 bounce, 2 spam). 0 opens — chase tracking/placement, not copy. |
| 2 | (empty / threads as reply) | 87 | 0 | 0 | Flat vs. last report (87 → 87). Zero opens make it unreadable; still short of ~150–200 for any conclusion. |
| 3 | (empty / threads as reply) | 91 | 0 | 0 | Flat vs. last report (91 → 91). Growth has now stopped entirely. Still below callable volume. |

Single variant per step — no A/B comparison exists, and n is nowhere near callable. No step can be labeled dead weight; steps 2–3 never reached callable volume and have now stopped moving. With opens flat at zero everywhere, step-level reads are impossible by construction.

## Copy-to-audience fit
Copy is unchanged since all prior reports and remains one of the stronger parts of this campaign; the zero-engagement problem is almost certainly not a copy problem. Re-confirming alignment (nothing new on data, because opens are still zero):

- **Subject leads on pain, tersely.** "missed calls?" maps to brief pain points #1 and #4 (missed calls in the field → lost revenue); short, lowercase, defensible cold register. Actual performance unknowable from this data.
- **Body opens on the stated pain in the audience's words.** "When your crew is out on a job, what happens to a new customer call?" — pain point #1 stated plainly. Good fit.
- **Objection handling matches the brief.** Step 2 tackles "hiring an in-house receptionist feels like the safer move" with the scale/cost answer — nearly verbatim the brief's stated objection and prescribed response.
- **Tone matches.** Warm, plain, non-corporate — the relatable small-business-owner register the brief calls for.
- **Constraints respected.** No em dashes; scope stays inside stated services ("answers as your office and books jobs right in your CRM"); no implication of full-time employment.
- **CTA is deliberately softer than the brief's goal.** Brief's core CTA is "Schedule a call" (Calendly); the sequence uses reply micro-commitments ("reply 'Plan'" / "reply 'yes'"). Lower friction is defensible, but the Calendly link is never surfaced, so every reply would need manual follow-up to become a booked meeting.
- **Trust ammunition still idle.** Named testimonials, CRM integrations (Jobber/Service Autopilot/YardBook), woman/minority-owned — none appears in the sequence. Not a defect, but unused.

## Open questions
- **Is open tracking actually enabled on this sequence?** A true 0/101 sustained across a subject change and seven weeks is far more consistent with a disabled/broken pixel than real behavior. Verify in Apollo before drawing any subject-line conclusion. **Still the top thing to confirm — unchanged for seven reports.**
- **Has sending actually stalled?** Every counter is identical to the last pull. Confirm in Apollo whether the sequence is still dispatching (~60/day) or has silently stopped — if it has, you're no longer even accumulating data, and the "flat" numbers reflect a paused campaign, not steady-state.
- **Where are messages landing?** Run an inbox-placement / seed test on the sending domain. Zero opens plus a spam-block rate ~6× alarm together hint at a placement/reputation problem the API cannot confirm.
- **Why do the `scheduled` counters contradict `delivered`?** (step 1 `scheduled: 0` vs `delivered: 100`). Reconcile in Apollo; treat as a live-queue artifact, not a total.
- **Reply sentiment is moot now (0 replies), but note for later:** Apollo's reply count includes angry/negative replies. Once replies exist, spot-check them by hand before treating reply rate as positive interest.
- **Re-evaluate once open tracking is confirmed working AND ≥150–200 are delivered per step.** Until the gate clears, more volume only produces more un-interpretable zeros — now demonstrated seven reports in a row, and this time without even adding volume.

## A/B test plan

**Hypothesis:** THIS TEST MUST NOT RUN UNTIL OPEN TRACKING AND INBOX PLACEMENT ARE CONFIRMED. Once the gate clears, our hypothesis is: a one-to-one, lowercase personalized subject referencing the recipient's own company will lift open rate over the generic pain-prompt subject, because it reads like an internal note rather than a pitch and survives spam filters better.
**Variant A:** Subject: missed calls?
**Variant B:** Subject: {{account.name}} calls after hours
**Success metric:** Open rate, measured only after open tracking is verified working. Call a winner at >=150 delivered per variant.
**Decision rule:** If one variant's open rate is >=20% relatively higher at >=150 delivered per variant, keep it; if the gap is <20%, keep Variant A (the simpler, shorter line). Do not change body copy, send time, or CTA while the subject test runs.

## Manual changes (targeting / timing / list)

- BEFORE ANYTHING ELSE: Open the sequence in Apollo and confirm open tracking (the tracking pixel) is actually enabled on this sequence. A true 0/101 sustained through a subject change and seven weeks is far more consistent with a disabled/broken pixel than real behavior. Fix this first; nothing downstream is readable until it is confirmed.
- Confirm whether the sequence is still actively dispatching. Every counter (delivered 101, bounced 2, spam 2, step deliveries 100/87/91) is identical to the 2026-10-26 pull, meaning sending may have silently stopped. Re-activate or unpause if dispatch has stalled, otherwise you are burning calendar time without accumulating data.
- Run an inbox-placement / seed test (e.g., GlockApps or a manual seed inbox across Gmail, Outlook, Yahoo) on the sending domain. The combination of 0 opens plus a spam-block rate ~6x the alarm threshold points to a placement/reputation problem the Apollo API cannot confirm.
- Check sending domain health: verify SPF, DKIM, and DMARC are passing, confirm the domain is not on blocklists (MXToolbox, Spamhaus), and confirm the warm-up is genuinely complete and ongoing rather than nominally 'warmed up.'
- Throttle or pause net-new sends until placement is confirmed. Pushing more volume through a possible spam-placement problem only manufactures more un-interpretable zeros and further erodes domain reputation. Hold daily volume at or below 60/day until the seed test is clean.
- Re-run list verification through Apollo (or a second verifier like NeverBounce/ZeroBounce) before resuming. Two spam-blocks and two bounces on a small sample suggest list quality is worth re-checking to protect reputation.
- Once tracking is confirmed and replies start flowing, surface the Calendly link directly in the step-1 or step-2 body so interested replies can self-book instead of requiring manual follow-up. This is a conversion-path fix, not an open fix, so defer it until the gate clears.

## Next review

Re-evaluate only after two conditions are both met: (1) open tracking is confirmed working in Apollo AND the inbox-placement seed test comes back clean, and (2) at least 150-200 messages are delivered per step with tracking live. At ~60/day that is roughly 2-3 weeks of active sending after the gate clears. Watch first for any non-zero open counter (proof the pixel/placement is fixed), then for open rate against the 30% target and spam-block rate falling back under 0.3%. Do not read subject-line or body performance until a non-zero open signal exists.

---

# 9/3/26 Test Sequence (6a99ac201d11ff001447f137)

_Brief used: none_

**Changes applied to Apollo automatically: 0**

## Recommended changes

The sequence has been frozen for nine consecutive evaluation pulls (~9 weeks) with only 4 lifetime attempted sends, zero scheduled, and still contains placeholder test content ('Test Email'). The binding problems are operational — nothing is sending and `unique_scheduled` is 0 despite `active: true` — not copy, and with no campaign brief any real rewrite would be fabricated audience targeting. Accordingly, no copy rewrites are warranted yet; the priority is confirming configuration, loading verified contacts, and supplying a brief before a single word of outreach copy is written.

## Evaluation

# Campaign Evaluation — 9/3/26 Test Sequence — 2026-11-02

## Verdict
This is still not a live campaign, and the data has not changed. The subject is literally "Test Email" and the body reads "This email has been sent as a test for Apollo sending." Every figure is byte-for-byte identical to the **previous eight** evaluations (3 delivered, 1 bounced, 0 opened, 0 replied, 0 scheduled) — this is the **ninth consecutive pull** with zero incremental sends. There is nothing new to diagnose; the sequence has been frozen for roughly nine weeks and should be treated as abandoned or misconfigured until someone confirms otherwise in Apollo.

## Prioritized issues
1. **Sequence frozen for nine consecutive pulls** — evidence: figures unchanged across 2026-09-07, 09-14, 09-21, 09-28, 10-05, 10-12, 10-19, 10-26, and now 11-02 (delivered 3, bounced 1, opened 0, replied 0, `unique_scheduled: 0`). Despite `active: true`, nothing has sent in ~9 weeks. — estimated impact: high (blocks all analysis)
2. **Sample size is effectively zero** — evidence: 4 total attempted sends across the entire sequence lifetime. No engagement rate is statistically interpretable at this n. — estimated impact: high
3. **Still placeholder/test content, not campaign copy** — evidence: subject "Test Email"; body is a receipt-confirmation message with no offer, no pain point, and a sender-serving CTA ("reply to confirm receipt"). Nothing to optimize. — estimated impact: high
4. **One bounce out of four attempts** — evidence: `unique_bounced: 1` against 4 attempted = nominal 25%, but a single bad address produces that at n=4. Not a reliable signal. — estimated impact: low
5. **No campaign brief supplied (ninth time)** — evidence: brief section blank again. Copy-to-audience fit and target-vs-actual comparisons cannot be performed. — estimated impact: medium

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
- **No movement for a ninth straight pull.** Every figure is identical to 09-07, 09-14, 09-21, 09-28, 10-05, 10-12, 10-19, and 10-26. The prior reports' conclusion — that the sequence is misconfigured or abandoned — is now beyond doubt: roughly nine weeks have passed with `unique_scheduled: 0` and zero incremental sends. The predicted effect of the last round (none, because nothing is sending) held exactly. This is a confirmed dormant state, not an anomaly to keep watching.

## Open questions
- **Why has nothing sent in ~9 weeks?** The sequence is `active: true` but `unique_scheduled: 0` and volume is unchanged since 9/7. Someone should verify in Apollo whether real contacts have been loaded and whether sending is paused, throttled, complete, or silently misconfigured.
- **Should this evaluation cadence be paused?** Nine identical automated reports have now been generated. Strongly recommend halting recurring evaluation until the sequence shows incremental sends (≥150–200 delivered per variant before reading any engagement metric), to avoid generating further no-op reports.
- **Was the single bounce hard or soft, and was that address a known typo/bad?** Noise at n=4, but confirm list verification is in place before scaling.
- **Is a campaign brief available elsewhere?** Without product/offer/audience/target metrics, copy-to-audience fit and target comparisons are impossible — supply one before the next evaluation.
- **Reply sentiment** is not exposed by the Apollo API; once real replies arrive, spot-check them manually (angry replies count toward reply rate too).

## A/B test plan

**Hypothesis:** No A/B test should run yet. Any test on 3 delivered emails is statistically meaningless; a valid test requires ~150–200 delivered per variant and real campaign copy that does not yet exist.
**Variant A:** Not applicable — do not launch a test until the sequence is sending real volume to verified contacts with brief-driven copy in place.
**Variant B:** Not applicable — see variant_a.
**Success metric:** Once live: reply rate, read only after ≥150 delivered per variant.
**Decision rule:** Do not evaluate or call any winner until each variant has ≥150 delivered; if relative difference is <20%, keep the simpler variant. Until then, no test is valid.

## Manual changes (targeting / timing / list)

- Confirm in Apollo why the sequence shows `active: true` but `unique_scheduled: 0` — check whether it is paused, throttled, finished, or silently misconfigured. This is the single blocking issue.
- Verify that real, intended contacts have actually been loaded into the sequence; current lifetime volume (4 attempted sends) indicates only test addresses were ever enrolled.
- Run list verification (e.g., bounce/validity check) before scaling — one hard bounce out of four attempts is noise at this n but confirm the process exists before volume grows.
- Replace the placeholder test template entirely before enrolling real contacts; the current subject 'Test Email' and receipt-confirmation body must not be sent to prospects.
- Supply a campaign brief (product, offer, target audience, pain points, tone, must-not-say constraints, target metrics) so copy can be written to a real demographic rather than generic filler.
- Pause the recurring automated evaluation cadence until the sequence shows incremental sends; nine identical no-op reports have now been generated.

## Next review

Do not re-run until the sequence shows incremental sending — specifically ≥150–200 delivered per variant and a campaign brief on file. At that point evaluate deliverability (bounce/spam-block) first, then open rate, then reply rate. If the next pull again shows `unique_scheduled: 0` and unchanged figures, treat the sequence as abandoned and keep evaluation paused.

---
