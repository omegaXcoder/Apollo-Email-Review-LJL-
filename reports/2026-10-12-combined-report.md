# Campaign performance report — 2026-10-12

# CB Email Campaign Start 9/9 (6aa060e17af83e00143f470d)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 0**

## Recommended changes

The diagnosis is unambiguous: four consecutive reports show 0 opens on 101 delivered, which is the signature of broken open tracking or systematic inbox non-placement, not weak copy. Per the rule to fix deliverability before touching copy, this round makes no copy edits (the brief and evaluation both rate the current copy as strong) and instead prescribes concrete Apollo/domain fixes to clear the measurement gate. A subject-line A/B test is drafted and queued but must stay parked until tracking is confirmed working, otherwise the test produces more un-interpretable zeros.

## Evaluation

# Campaign Evaluation — CB Email Campaign Start 9/9 — 2026-10-12

## Verdict
Fourth consecutive report, same flat-zero signature: **0 opens and 0 replies across 101 delivered**, now with meaningfully more volume stacked behind it (step 2 up to 78 delivered, step 3 up to 32). A true 0/101 sustained through a subject-line swap and four weeks of growing sends is not a copy outcome — it is the fingerprint of broken open tracking or systematic inbox non-placement. This gate has not moved since report #1, and nothing downstream can be judged until it clears. Fixing the tracking/placement root cause is worth the entire campaign; you are still accumulating un-measurable sends.

## Prioritized issues
1. **Zero opens on 101 delivered — four weeks running, prediction held a fourth time** — evidence: `unique_opened: 0`, `open_rate_pct: 0`, across all three steps and now across 210 total step-level deliveries (100 + 78 + 32). A functioning cold campaign to a US SMB list leaks double-digit opens from Apple Mail privacy pre-fetch and security-scanner bots alone, independent of copy. A flat zero that survives a subject change AND four weeks of rising volume is not consistent with human behavior — it points to a disabled/broken open pixel or mail not landing in inboxes. This gates every engagement judgment below. Estimated impact: **high**.
2. **Spam-block rate ~6× alarm, count still frozen at 2** — evidence: 2 spam-blocked ÷ 105 attempted (101 delivered + 2 bounced + 2 spam) = **1.90%** (alarm >0.3%). Directional at this n, and the count has not moved across any report, so it is decaying as a rate rather than growing. But paired with issue #1, a placement/reputation problem remains the leading shared hypothesis. Estimated impact: **high** if zero-opens and spam placement share a root cause.
3. **Bounce rate just under the alarm line, decaying** — evidence: 2 bounced ÷ 105 attempted = **1.90%** (alarm >2%). Same 2 bounces as all four prior reports — no new bounces despite additional sends — so this continues to trend down. Estimated impact: **medium**, improving.
4. **Steps 2–3 now accumulating faster but still unreadable** — evidence: step 2 at 78 delivered (up from 57), step 3 at 32 (up from 8). Both single-variant, both still short of the ~150–200/variant needed to call anything, and zero opens/replies everywhere make the growth uninformative. Estimated impact: **medium** (blocks step-level and copy-on-data analysis).

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate | 1.90% (2/105 attempted) | <2% | (95%+ delivery) | 🟡 just under line, count flat, decaying |
| Spam-block rate | 1.90% (2/105 attempted) | <0.3% | — | 🔴 ~6× threshold; count unchanged — directional at this n |
| Open rate | 0% (0/101 delivered) | 30–50% | 30% | 🔴 anomalous — almost certainly tracking/placement, not copy |
| Reply rate | 0% (0/101 delivered) | 1–3% | 2% | ⚪ gated by opens |
| Unsubscribe rate | 0% (0/101) | <1% | — | ⚪ n too small / gated |
| Meetings booked / 100 delivered | 0 (0/101) | ~1 | 1 | ⚪ gated |

No "delivery rate" row by design: sending is intentionally throttled (~60/day), so only part of the list has been attempted. A delivered-over-scheduled figure would misrepresent pacing as failure. Note Apollo's own `bounce_rate_pct: 2.82` and `delivery_rate_pct: 142.25` are built on the incoherent `unique_scheduled: 71` denominator and should be ignored — 142% delivery is nonsensical on its face. Bounce and spam-block measured against attempted sends (105) are the reliable deliverability signals.

## Funnel
Delivered **101** → Opened **0 (0%)** → Replied **0 (0%)**.

The nominal biggest leak is the open stage, but the *shape* is the real signal and it is now at its strongest yet. Zero opens on 101 delivered — sustained through a subject-line change and four weeks of growing volume — is not consistent with "weak subject lines." Even a bad cold campaign leaks opens from privacy pre-fetch and bots. A flat zero at this n points to the open pixel not being recorded or mail not reaching inboxes. **The funnel remains un-interpretable until open tracking and inbox placement are confirmed.** You cannot read subject quality — or anything downstream — off a tracking artifact.

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 | "missed calls?" | 100 | 0 | 0 | Only step near callable volume. Absorbed all 4 deliverability events (2 bounce, 2 spam). 0 opens across two subjects tried — chase tracking/placement, not copy. |
| 2 | (empty / threads as reply) | 78 | 0 | 0 | Grew from 57 → 78. Zero opens make it unreadable; still short of ~150–200 for any conclusion. |
| 3 | (empty / threads as reply) | 32 | 0 | 0 | Grew from 8 → 32 — fastest-growing step. Still far below callable volume. |

Single variant per step — no A/B comparison exists, and n is nowhere near callable anyway. No step can be labeled dead weight; steps 2–3 are still ramping. With opens flat at zero everywhere, step-level reads are impossible by construction.

**Counter note:** the per-step `scheduled` fields remain internally incoherent (step 1 `scheduled: 0` vs `delivered: 100`; step 2 `scheduled: 31` vs `delivered: 78`; step 3 `scheduled: "loading"`), and the sequence-level `unique_scheduled: 71` is below `unique_delivered: 101`. As in all prior reports, treat `scheduled` as an unreliable live-queue counter, not a cumulative total. It changes no conclusion — opens are zero regardless.

## Copy-to-audience fit
Copy is unchanged since the prior reports and remains one of the stronger parts of this campaign; the zero-engagement problem is almost certainly not a copy problem. Re-confirming alignment (nothing new on data because opens are still zero):

- **Subject leads on pain, tersely.** "missed calls?" maps to brief pain points #1 and #4 (missed calls in the field → lost revenue); short, lowercase, defensible cold register. Actual performance unknowable from this data.
- **Body opens on the stated pain in the audience's words.** "When your crew is out on a job, what happens to a new customer call?" — pain point #1 stated plainly. Good fit.
- **Objection handling matches the brief.** Step 2 tackles "hiring an in-house receptionist feels like the safer move" with the scale/cost answer — nearly verbatim the brief's stated objection and prescribed response.
- **Tone matches.** Warm, plain, non-corporate — the relatable small-business-owner register the brief calls for.
- **Constraints respected.** No em dashes; scope stays inside stated services ("answers as your office and books jobs right in your CRM"); no implication of full-time employment.
- **CTA is deliberately softer than the brief's goal.** Brief's core CTA is "Schedule a call" (Calendly); the sequence uses reply micro-commitments ("reply 'Plan'" / "reply 'yes'"). Lower friction is defensible, but the Calendly link is never surfaced, so every reply would require manual follow-up to become a booked meeting.
- **Trust ammunition still idle.** Named testimonials, CRM integrations (Jobber/Service Autopilot/YardBook), woman/minority-owned — none appears in the sequence. Not a defect, but unused.

## Trend vs. 2026-10-05
- **Opens: 0 → 0** (delivered 101 → 101). The gate flagged for four straight reports has still not cleared. Added step-2/3 volume continues to strengthen the tracking/placement hypothesis. **No change.**
- **Bounce rate: 1.90% → 1.90%** (count flat at 2, denominator unchanged at 105). Still decaying across the campaign history; no new bounces.
- **Spam-block rate: 1.90% → 1.90%** (count flat at 2). Still far over alarm, still directional at this n.
- **Step 2 volume: 57 → 78 delivered; Step 3: 8 → 32 delivered.** More data accumulating, still zero engagement, still sub-threshold.
- **Net:** nothing flagged as the #1 blocker in four consecutive reports has been resolved. The campaign is still pumping sends into a funnel that cannot be measured. The predicted "more volume only produces more un-interpretable zeros" has held exactly.

## Open questions
- **Is open tracking actually enabled on this sequence?** A true 0/101 sustained across a subject change and four weeks is far more consistent with a disabled/broken pixel than real behavior. Verify in Apollo before drawing any subject-line conclusion. **Still the top thing to confirm — unchanged for four reports.**
- **Where are messages landing?** Run an inbox-placement / seed test on the sending domain. Zero opens plus a spam-block rate ~6× alarm together hint at a placement/reputation problem the API cannot confirm.
- **Why do the `scheduled` counters contradict `delivered`?** (sequence `unique_scheduled: 71` < `unique_delivered: 101`; step 1: 0 vs 100; step 2: 31 vs 78). Reconcile in Apollo; the recurring inconsistency — and the nonsensical 142% `delivery_rate_pct` it produces — suggests the counters are mid-refresh or semantically misused.
- **Reply sentiment is moot now (0 replies), but note for later:** Apollo's reply count includes angry/negative replies. Once replies exist, spot-check them by hand before treating reply rate as positive interest.
- **Re-evaluate once open tracking is confirmed working AND ≥150–200 are delivered per step.** Until the gate clears, more volume only produces more un-interpretable zeros — now demonstrated four reports in a row.

## A/B test plan

**Hypothesis:** Once open tracking is confirmed working, a curiosity/pain subject will out-open a plain internal-memo subject because this audience responds to concrete missed-revenue framing over vague teasers. DO NOT launch this test until open tracking and inbox placement are verified; running it now loses attribution to the deliverability fix.
**Variant A:** Subject: missed calls?
**Variant B:** Subject: calls going to voicemail
**Success metric:** Open rate, measured only after tracking is confirmed functional and at least 150 delivered per variant.
**Decision rule:** Call a winner at >=150 delivered per variant; if the relative difference in open rate is under 20%, keep Variant A (the shorter, already-live line). Hold reply CTA, body, send time, and volume constant during the test so subject line is the only variable.

## Manual changes (targeting / timing / list)

- Confirm open tracking is actually enabled on this sequence in Apollo (sequence settings > tracking). A true 0/101 across four weeks and a subject change is far more consistent with a disabled or broken open pixel than real behavior. This is the single highest-value action and has been flagged four reports in a row.
- If Apollo uses a custom tracking domain/CNAME for the open pixel, verify the CNAME resolves and is not blocked; a misconfigured tracking domain will register zero opens even when mail is read.
- Run an inbox-placement / seed test (e.g., GlockApps or a manual seed set across Gmail, Outlook/Office365, Yahoo) on the sending domain to confirm whether mail is landing in inbox vs spam. Zero opens plus a spam-block rate ~6x alarm points to a placement/reputation problem the API cannot confirm.
- Check domain authentication: SPF, DKIM, and DMARC must all pass and align for the sending domain. Check the domain and sending IP against major blacklists (MXToolbox / Spamhaus).
- Throttle or pause sending until placement is confirmed. Do not push the campaign past ~30/day (down from 60) while the gate is open; every additional send right now is un-measurable and risks further reputation damage.
- Re-verify the current list through a secondary validator (NeverBounce/ZeroBounce) in addition to Apollo. The persistent spam-block events suggest possible spam traps or low-quality addresses that hurt reputation.
- Reconcile the incoherent scheduled-vs-delivered counters in Apollo (sequence unique_scheduled 71 < unique_delivered 101; step 1 scheduled 0 vs delivered 100). This may indicate a reporting/sync issue in the same system that would also under-report opens.
- Add the Calendly link into step 1 and step 3 bodies once tracking is fixed (currently the core CTA is never surfaced, so even a positive reply requires manual follow-up to become a booked meeting). Defer this until after the deliverability fix to avoid confounding the diagnosis.

## Next review

Re-run the evaluation only after (1) open tracking is confirmed functional via a seed/placement test and at least one send cycle shows non-zero opens, AND (2) at least 150-200 messages are delivered per step. Until the tracking/placement gate clears, more volume only produces more un-interpretable zeros, so do not judge subject lines, body copy, or reply rate before then. Watch first for any non-zero open signal and the spam-block rate relative to attempted sends.

---

# 9/3/26 Test Sequence (6a99ac201d11ff001447f137)

_Brief used: none_

**Changes applied to Apollo automatically: 0**

## Recommended changes

This is not a live campaign — it is a six-week-dormant test sequence containing placeholder content ("Test Email") with only 4 lifetime attempted sends, so there is nothing meaningful to optimize via copy yet. No campaign brief was supplied, so writing targeted outreach copy would mean fabricating an audience, offer, and voice — which the rules forbid. The prescribed action is operational: confirm the sequence's status in Apollo, supply a brief, load and verify real contacts, and only then introduce real copy and an A/B test.

## Evaluation

# Campaign Evaluation — 9/3/26 Test Sequence — 2026-10-12

## Verdict
This remains a test sequence, not a live campaign — the subject is literally "Test Email" and the body reads "This email has been sent as a test for Apollo sending." The numbers are byte-for-byte identical to the previous five evaluations (3 delivered, 1 bounced, 0 opened, 0 replied, 0 scheduled), making this the **sixth consecutive week** with no new sends and nothing to diagnose. Fixing this is worth nothing until real copy and real send volume exist; the sequence has now been frozen for roughly six weeks and should be treated as misconfigured or abandoned until someone confirms otherwise in Apollo.

## Prioritized issues
1. **Sequence frozen for six consecutive pulls** — evidence: figures unchanged across 2026-09-07, 09-14, 09-21, 09-28, 10-05, and now 10-12 (delivered 3, bounced 1, opened 0, replied 0, `unique_scheduled: 0`). Despite `active: true`, nothing has sent in ~6 weeks. — estimated impact: high (blocks all analysis)
2. **Sample size is effectively zero** — evidence: 4 total attempted sends across the entire sequence lifetime. No engagement rate is statistically interpretable at this n. — estimated impact: high
3. **Still placeholder/test content, not campaign copy** — evidence: subject "Test Email"; body is a receipt-confirmation message with no offer, no pain point, and a sender-serving CTA ("reply to confirm receipt"). Nothing to optimize. — estimated impact: high
4. **One bounce out of four attempts** — evidence: `unique_bounced: 1` against 4 attempted = nominal 25%, but a single bad address produces that at n=4. Not a reliable signal. — estimated impact: low
5. **No campaign brief supplied (sixth time)** — evidence: brief section blank again. Copy-to-audience fit and target-vs-actual comparisons cannot be performed. — estimated impact: medium

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
- **No movement for a sixth straight pull.** Every figure is identical to 09-07, 09-14, 09-21, 09-28, and 10-05. The prior reports' single conclusion — that the sequence is misconfigured or abandoned — is now even more firmly established: roughly six weeks have passed with `unique_scheduled: 0` and zero incremental sends. Nothing changed because nothing is sending. This is a confirmed dormant state, not an anomaly to keep watching.

## Open questions
- **Why has nothing sent in ~6 weeks?** The sequence is `active: true` but `unique_scheduled: 0` and volume is unchanged since 9/7. Someone should verify in Apollo whether real contacts have been loaded and whether sending is paused, throttled, complete, or silently misconfigured. Re-pull only once ≥150–200 emails per variant have been delivered before reading any engagement metric.
- **Should this evaluation cadence continue?** Six identical automated reports have now been generated. Consider pausing recurring evaluation until the sequence shows incremental sends, to avoid generating further no-op reports.
- **Was the single bounce hard or soft, and was that address a known typo/bad?** Noise at n=4, but confirm list verification is in place before scaling.
- **Is a campaign brief available elsewhere?** Without product/offer/audience/target metrics, copy-to-audience fit and target comparisons are impossible — supply one before the next evaluation.
- **Reply sentiment** is not exposed by the Apollo API; once real replies arrive, spot-check them manually (angry replies count toward reply rate too).

## A/B test plan

**Hypothesis:** No valid A/B test can run yet because the sequence has delivered only 3 emails lifetime and contains test-only content; a test requires real copy, a defined audience, and ~150–200 delivered per variant before any result is readable.
**Variant A:** N/A — hold until a campaign brief is supplied and real sending resumes. Placeholder: current single variant (subject "Test Email").
**Variant B:** N/A — do not create a second variant until there is real outreach copy and sufficient volume to read it.
**Success metric:** Reply rate, measured only once each variant has ≥150 delivered.
**Decision rule:** Do not call any winner below 150 delivered per variant. Once at volume, keep the variant with the higher reply rate; if the relative difference is <20%, keep the simpler/shorter variant. No test should start before deliverability and list verification are confirmed.

## Manual changes (targeting / timing / list)

- Confirm in Apollo why nothing has sent in ~6 weeks: the sequence is active:true but unique_scheduled:0. Determine whether it is paused, throttled, complete, or misconfigured, and whether real contacts are loaded.
- Decide explicitly whether this sequence is live or should be archived — it has been a frozen test artifact for six consecutive evaluation pulls. If abandoned, archive it to stop generating no-op reports.
- Supply a campaign brief (product, offer, target demographic, tone, must-not-say constraints, target metrics) before any copy work — without it, targeted rewrites would require fabricating audience details.
- Run list verification before scaling: confirm whether the single bounce (1 of 4) was a hard bounce / known-bad address, and verify the full contact list to protect sending-domain health.
- Once a brief and verified list exist, replace the placeholder test content entirely with real outreach copy — the current subject ("Test Email") and body (a receipt-confirmation message) must not go out at volume.

## Next review

Pause the recurring evaluation cadence until the sequence shows incremental sends. Re-run the evaluation only after a brief is supplied and ≥150–200 emails per variant have been delivered — at which point open, reply, and bounce rates become statistically readable. Watch first for deliverability (bounce/spam-block) before interpreting engagement.

---
