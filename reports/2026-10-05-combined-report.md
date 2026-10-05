# Campaign performance report — 2026-10-05

# CB Email Campaign Start 9/9 (6aa060e17af83e00143f470d)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 0**

## Recommended changes

Three straight weeks of 0 opens and 0 replies on 101 delivered, sustained across a subject swap, is a tracking or inbox-placement failure, not a copy problem; the copy already fits the brief well and rewriting it now would be wasted effort landing in spam. The correct move is to fix the measurement gate first: confirm open tracking is enabled, run a seed/inbox-placement test, and address the spam-block rate that is ~6x the alarm line. No copy rewrites are warranted until engagement can actually be measured, so the only test proposed is a deliverability-diagnostic one (tracking-on vs tracking-off/plain-text) scored on replies, the one signal still readable while opens are broken.

## Evaluation

# Campaign Evaluation — CB Email Campaign Start 9/9 — 2026-10-05

## Verdict
Third consecutive week, same flat-zero signature: **0 opens and 0 replies across 101 delivered emails**. This is no longer explainable as "early" or "weak copy" — a sustained 0/101 across three weeks, two different subject lines, and growing volume is the fingerprint of broken open tracking or systematic inbox non-placement. Nothing downstream (open rate, reply rate, copy quality on data) can be judged until that gate clears, and it has not moved since the first report. Fixing the tracking/placement root cause is worth the entire campaign — right now you are accumulating un-measurable sends.

## Prioritized issues
1. **Zero opens on 101 delivered — three weeks running, prediction held again** — evidence: `unique_opened: 0`, `open_rate_pct: 0`, across all three steps. A functioning cold campaign to a US SMB list leaks double-digit opens from Apple Mail privacy pre-fetch and security-scanner bots alone, regardless of copy quality. A true flat zero sustained through a subject swap and now 101 delivered is not consistent with behavior — it points to a disabled/broken open pixel or mail not landing in inboxes. This gates every engagement judgment. Estimated impact: **high**.
2. **Spam-block rate still ~6× alarm, count frozen at 2** — evidence: 2 spam-blocked ÷ 105 attempted (101 delivered + 2 bounced + 2 spam) = **1.90%** (alarm >0.3%). Directional at this n, and the count has not moved across any report — so it is decaying as a rate, not growing. But paired with issue #1, a placement/reputation problem remains the leading hypothesis. Estimated impact: **high** if zero-opens and spam placement share a root cause.
3. **Bounce rate just under the alarm line, decaying** — evidence: 2 bounced ÷ 105 attempted = **1.90%** (alarm >2%). Same 2 bounces as all three prior reports — no new bounces across the additional sends — so this is trending down. Estimated impact: **medium**, improving.
4. **Steps 2–3 accumulating but still unreadable** — evidence: step 2 now 57 delivered (up from 27), step 3 now 8 (up from 0). Single variant per step, both still well below the ~150–200/variant needed to call anything, and zero opens/replies everywhere make even the growing volume uninformative. Estimated impact: **medium** (blocks step-level and copy-on-data analysis).

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate | 1.90% (2/105 attempted) | <2% | (95%+ delivery) | 🟡 just under line, count flat, decaying |
| Spam-block rate | 1.90% (2/105 attempted) | <0.3% | — | 🔴 ~6× threshold; count unchanged — directional at this n |
| Open rate | 0% (0/101 delivered) | 30–50% | 30% | 🔴 anomalous — almost certainly tracking/placement, not copy |
| Reply rate | 0% (0/101 delivered) | 1–3% | 2% | ⚪ gated by opens |
| Unsubscribe rate | 0% (0/101) | <1% | — | ⚪ n too small / gated |
| Meetings booked / 100 delivered | 0 (0/101) | ~1 | 1 | ⚪ gated |

No "delivery rate" row by design: sending is intentionally throttled (~60/day), so only part of the list has been attempted. A delivered-over-scheduled figure would misrepresent pacing as failure. Bounce and spam-block are the deliverability signals here.

## Funnel
Delivered **101** → Opened **0 (0%)** → Replied **0 (0%)**.

The nominal biggest leak is the open stage, but the *shape* is the real signal and it is now at its strongest. Zero opens on 101 delivered — sustained through a subject-line change and across three weeks of growing volume — is not consistent with "weak subject lines." Even a bad cold campaign leaks opens from privacy pre-fetch and bots. A true flat zero at this n points to the open pixel not being recorded or mail not reaching inboxes. **The funnel remains un-interpretable until open tracking and inbox placement are confirmed.** You cannot read subject quality — or anything downstream — off a tracking artifact.

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 | "missed calls?" | 100 | 0 | 0 | Only step near callable volume. Absorbed all 4 deliverability events (2 bounce, 2 spam). 0 opens across two subjects tried — chase tracking/placement, not copy. |
| 2 | (empty / threads as reply) | 57 | 0 | 0 | Grew from 27, but zero opens make it unreadable. Still short of ~150–200 for any conclusion. |
| 3 | (empty / threads as reply) | 8 | 0 | 0 | Now sending (was 0). Far too little data. |

Single variant per step — no A/B comparison exists, and n is nowhere near callable anyway. No step can be labeled dead weight; steps 2–3 have barely run. With opens flat at zero everywhere, step-level reads are impossible by construction.

**Counter note:** the per-step `scheduled` fields remain internally incoherent (step 1 `scheduled: 5` vs `delivered: 100`; step 2 `scheduled: 62` vs `delivered: 57`; step 3 `scheduled: "loading"`). As in prior reports, treat `scheduled` as an unreliable live-queue counter, not a cumulative total. It doesn't change any conclusion — opens are zero regardless.

## Copy-to-audience fit
Copy is unchanged since the last two reports and remains one of the stronger parts of this campaign; the zero-engagement problem is almost certainly not a copy problem. Re-confirming alignment (nothing new on data because opens are still zero):

- **Subject leads on pain, tersely.** "missed calls?" maps to brief pain points #1 and #4 (missed calls in the field → lost revenue); short, lowercase, defensible cold register. Actual performance unknowable from this data.
- **Body opens on the stated pain in the audience's words.** "When your crew is out on a job, what happens to a new customer call?" — pain point #1 stated plainly. Good fit.
- **Objection handling matches the brief.** Step 2 tackles "hiring an in-house receptionist feels like the safer move" with the scale/cost answer — nearly verbatim the brief's stated objection and prescribed response.
- **Tone matches.** Warm, plain, non-corporate — the relatable small-business-owner register the brief calls for.
- **Constraints respected.** No em dashes; scope stays inside stated services ("answers as your office and books jobs right in your CRM"); no implication of full-time employment.
- **CTA is deliberately softer than the brief's goal.** Brief's core CTA is "Schedule a call" (Calendly); the sequence uses reply micro-commitments ("reply 'Plan'" / "reply 'yes'"). Lower friction is defensible, but the Calendly link is never surfaced, so every reply would require manual follow-up to become a booked meeting.
- **Trust ammunition still idle.** Named testimonials, CRM integrations (Jobber/Service Autopilot/YardBook), woman/minority-owned — none appears in the sequence. Not a defect, but unused.

## Trend vs. 2026-09-28
- **Opens: 0 → 0** (delivered 96 → 101). The gate predicted three weeks ago has still not cleared; added volume continues to strengthen the tracking/placement hypothesis. **No change.**
- **Bounce rate: 2.0% → 1.90%** (count flat at 2, denominator grew). Decaying, as predicted.
- **Spam-block rate: 2.0% → 1.90%** (count flat at 2). Decaying, still far over alarm.
- **Step 2 volume: 27 → 57 delivered; Step 3: 0 → 8.** More data accumulating, still zero engagement, still sub-threshold.
- **Net:** nothing flagged as the #1 blocker in the last three reports has been resolved. The campaign is still pumping sends into a funnel that cannot be measured.

## Open questions
- **Is open tracking actually enabled on this sequence?** A true 0/101 sustained across a subject change and three weeks is far more consistent with a disabled/broken pixel than real behavior. Verify in Apollo before drawing any subject-line conclusion. **Still the top thing to confirm — unchanged for three reports.**
- **Where are messages landing?** Run an inbox-placement / seed test on the sending domain. Zero opens plus a spam-block rate ~6× alarm together hint at a placement/reputation problem the API cannot confirm.
- **Why do the per-step `scheduled` counters contradict `delivered`?** (step 1: 5 vs 100; step 2: 62 vs 57) Reconcile in Apollo; the recurring inconsistency suggests the counters are mid-refresh or semantically misused.
- **Reply sentiment is moot now (0 replies), but note for later:** Apollo's reply count includes angry/negative replies. Once replies exist, spot-check them by hand before treating reply rate as positive interest.
- **Re-evaluate once open tracking is confirmed working AND ≥150–200 are delivered per step.** Until the gate clears, more volume only produces more un-interpretable zeros.

## A/B test plan

**Hypothesis:** Removing the open-tracking pixel and sending a plain, low-HTML version will improve inbox placement and surface measurable replies, because the current flat-zero opens plus a spam-block rate ~6x alarm point to a tracking pixel and/or heavy HTML wrapper hurting deliverability rather than weak copy.
**Variant A:** CONTROL (current step 1, unchanged, open-tracking ON): Subject: missed calls? Body: Hi {{contact.first_name}}, When your crew is out on a job, what happens to a new customer call? Voicemail, a busy line, or nobody at all? Most owners we talk to quietly lose good leads that way, because the caller just tries the next company on the list. Call Boss is a US based team that answers as your office and books jobs right in your CRM, without hiring in house. We already do this for lawn care, pest control, and irrigation companies. Worth a look at how many calls {{account.name}} might be missing? Just reply "Plan" and I'll send a simple breakdown, and I can share a time to talk from there. Thanks, The Call Boss Team
**Variant B:** TEST (open-tracking OFF, plain text, no HTML styling, no images/links): Subject: missed calls? Body: Hi {{contact.first_name}}, When your crew is out on a job, what happens to a new customer call? Voicemail, a busy line, or no one? Most owners we talk to quietly lose good leads that way. The caller just tries the next company on the list. Call Boss is a US based team that answers as your office and books jobs right in your CRM, no in house hire needed. We already do this for lawn care, pest control, and irrigation companies. Want me to send a quick breakdown of how many calls {{account.name}} might be missing? Just reply "Plan". Thanks, The Call Boss Team
**Success metric:** Reply rate (opens are not trustworthy right now). Secondary: spam-block rate and bounce rate per variant. Call it at >=150 delivered per variant.
**Decision rule:** If Variant B (tracking off / plain text) produces any replies while A stays at zero, or shows a materially lower spam-block rate, adopt plain-text sending and investigate the pixel as the culprit. If both stay at absolute zero replies and zero opens at 150+ delivered each, the problem is domain/placement reputation, not the email itself, and escalate to a full deliverability audit before any further sending. Do not change body copy, CTA, send times, or targeting while this test runs, so the tracking/HTML variable stays isolated.

## Manual changes (targeting / timing / list)

- Verify open-tracking is actually enabled on this sequence in Apollo settings before anything else. A true 0/101 across three weeks and two subjects is far more consistent with a disabled or broken open pixel than real behavior. Send a test email to your own inbox and confirm the open registers.
- Run an inbox-placement / seed test (e.g., to a set of Gmail, Outlook, Yahoo, and iCloud seed addresses) on the sending domain to confirm whether mail is landing in inbox vs spam. Zero opens plus a spam-block rate ~6x alarm strongly suggests a placement problem the API cannot see.
- Check the sending domain's SPF, DKIM, and DMARC records and its reputation (Google Postmaster Tools, MXToolbox blacklist check). Confirm warm-up is genuinely complete and not just marked done.
- Pause or sharply throttle new sends (hold at or below 30/day) until tracking and placement are confirmed. Continuing at 60/day only burns list and reputation on un-measurable sends.
- Consider turning OFF open-tracking entirely for this audience. The pixel adds little value for SMB cold outreach and can trigger spam filters; replies are the signal that matters here.
- Reconcile the per-step 'scheduled' counters that contradict 'delivered' (step 1 scheduled 5 vs delivered 100) with Apollo support to rule out a sequence configuration fault.
- Once replies start coming, surface the Calendly link in replies/follow-ups so a positive reply converts to a booked meeting without manual back-and-forth.
- Clean the list again through Apollo verification to keep bounces under 2% as volume scales.

## Next review

Re-evaluate after the deliverability fixes are confirmed AND at least 150-200 emails are delivered per step with open-tracking verified working (roughly 2-3 weeks at 30-60/day). Watch first for any non-zero open rate (confirming the tracking gate has cleared), then spam-block rate dropping under 0.3%, then reply rate. Do not judge subject lines or body copy until opens register above zero.

---

# 9/3/26 Test Sequence (6a99ac201d11ff001447f137)

_Brief used: none_

**Changes applied to Apollo automatically: 0**

## Recommended changes

The sequence has been dormant for five consecutive weekly pulls (3 delivered, 1 bounced, 0 opens/replies, 0 scheduled) and still contains placeholder test content, so there is nothing statistically or editorially real to optimize yet. The priority is operational, not copy: confirm why nothing has sent in over a month, load verified real contacts, and replace the test artifact with actual campaign copy — which cannot responsibly be written without a brief. No copy rewrites are proposed because inventing an offer, audience, and pain points with no brief would fabricate the campaign rather than optimize it.

## Evaluation

# Campaign Evaluation — 9/3/26 Test Sequence — 2026-10-05

## Verdict
This is still a test sequence, not a live campaign — the subject is literally "Test Email" and the body reads "This email has been sent as a test for Apollo sending." The numbers are byte-for-byte identical to the previous four evaluations (3 delivered, 1 bounced, 0 opened, 0 replied, 0 scheduled), making this the **fifth consecutive week** with no new sends and nothing to diagnose. Fixing this is worth nothing until real copy and real send volume exist; the one actionable finding remains that the sequence has been frozen for over a month and should be treated as misconfigured or abandoned until someone confirms otherwise.

## Prioritized issues
1. **Sequence frozen for five consecutive pulls** — evidence: figures unchanged across 2026-09-07, 09-14, 09-21, 09-28, and now 10-05 (delivered 3, bounced 1, opened 0, replied 0, `unique_scheduled: 0`). Despite `active: true`, nothing has sent in a full month. — estimated impact: high (blocks all analysis)
2. **Sample size is effectively zero** — evidence: 4 total attempted sends across the entire sequence lifetime. No engagement rate is statistically interpretable at this n. — estimated impact: high
3. **Still placeholder/test content, not campaign copy** — evidence: subject "Test Email"; body is a receipt-confirmation message with no offer, no pain point, and a sender-serving CTA ("reply to confirm receipt"). Nothing to optimize. — estimated impact: high
4. **One bounce out of four attempts** — evidence: `unique_bounced: 1` against 4 attempted = nominal 25%, but a single bad address produces that at n=4. Not a reliable signal. — estimated impact: low
5. **No campaign brief supplied (fifth time)** — evidence: brief section blank again. Copy-to-audience fit and target-vs-actual comparisons cannot be performed. — estimated impact: medium

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
- **No movement for a fifth straight pull.** Every figure is identical to 09-07, 09-14, 09-21, and 09-28. The prior report's single prediction — that the sequence is misconfigured or abandoned — is now strongly reinforced: a full calendar month has passed with `unique_scheduled: 0` and zero incremental sends. Nothing changed because nothing is sending. This is no longer an anomaly to watch; it is a confirmed dormant state.

## Open questions
- **Why has nothing sent in over a month?** The sequence is `active: true` but `unique_scheduled: 0` and volume is unchanged since 9/7. Someone should verify in Apollo whether real contacts have been loaded and whether sending is paused, throttled, complete, or silently misconfigured. Re-pull only once ≥150–200 emails per variant have been delivered before reading any engagement metric.
- **Was the single bounce hard or soft, and was that address a known typo/bad?** Noise at n=4, but confirm list verification is in place before scaling.
- **Is a campaign brief available elsewhere?** Without product/offer/audience/target metrics, copy-to-audience fit and target comparisons are impossible — supply one before the next evaluation.
- **Reply sentiment** is not exposed by the Apollo API; once real replies arrive, spot-check them manually (angry replies count toward reply rate too).

## A/B test plan

**Hypothesis:** No A/B test can be run until the sequence is actually sending real copy at volume; any test now would read pure small-number noise (n=3 delivered).
**Variant A:** N/A — hold all testing until ≥150 emails are delivered per variant with real campaign copy in place.
**Variant B:** N/A — same as above.
**Success metric:** Reply rate, once a readable sample exists (~150–200 delivered per variant).
**Decision rule:** Do not call any winner below 150 delivered per variant; if the relative difference is under 20%, keep the simpler variant.

## Manual changes (targeting / timing / list)

- Diagnose why `unique_scheduled: 0` despite `active: true` for over a month — check in Apollo whether the sequence is paused, throttled, out of contacts, or silently misconfigured, and fix the root cause.
- Load real, verified target contacts into the sequence; the entire lifetime volume is 4 attempted sends, which is why nothing is interpretable.
- Run the contact list through email verification before scaling — the single bounce (1/4) is noise at this n, but list hygiene must be confirmed before volume ramps.
- Replace the placeholder test template (subject 'Test Email', body 'This email has been sent as a test for Apollo sending...') with real outreach copy before any send volume is added — but obtain a campaign brief first (product, offer, audience, pain points, tone, must-not-say constraints).
- Supply a campaign brief: without product/offer/audience/target metrics, copy-to-audience fit and meaningful rewrites are impossible — this is the fifth consecutive evaluation blocked on its absence.

## Next review

Re-run the evaluation only after two conditions are met: (1) a campaign brief is supplied, and (2) at least 150–200 real emails have been delivered per variant. Until then, re-reviewing weekly only re-confirms the dormant state — watch specifically for `unique_scheduled` moving above 0 and real (non-test) subject/body content appearing in the template.

---
