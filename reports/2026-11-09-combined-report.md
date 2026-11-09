# Campaign performance report — 2026-11-09

# CB Email Campaign Start 9/9 (6aa060e17af83e00143f470d)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 1**

## Recommended changes

The campaign's eight-week flat 0/101 open record is a deliverability or open-tracking failure, not a copy problem, so the priority is fixing the pipes before touching words. The evaluation confirms the copy itself is one of the stronger parts of this campaign, so copy work is held to a single low-risk refinement (surfacing the Calendly link) to be deployed only once sending and tracking are verified. Expected impact: clearing the deliverability/tracking gate is worth the entire campaign, because every send since September is currently unmeasurable.

### Change 1 — step 1 — applied automatically (PUT /emailer_templates/6aa060e17af83e00143f470f)

**Why:** Keeps the strong, on-brief subject and pain-led open the evaluation praised, but makes two surgical fixes: surfaces the Calendly link the eval flagged as never present (so a warm reply can convert to a booked meeting without manual chasing) and softens "without hiring in house" to "no in house hire needed" to trim one more potential spam signal. This is the only copy change recommended; it should be deployed only after open tracking and inbox placement are confirmed working, otherwise it just produces more un-interpretable zeros.

**Subject before:** missed calls?
**Subject after:** missed calls?

**New body:**
```
Hi {{contact.first_name}},

When your crew is out on a job, what happens to a new customer call? Voicemail, a busy line, or nobody at all?

Most owners we talk to quietly lose good leads that way, because the caller just tries the next company on the list.

Call Boss is a US based team that answers as your office and books jobs right in your CRM, no in house hire needed. We already do this for lawn care, pest control, and irrigation companies.

Worth seeing how many calls {{account.name}} might be missing? Reply "Plan" and I'll send a quick breakdown, or grab a time that works here: https://calendly.com/call-boss

Thanks,
The Call Boss Team
```

## Evaluation

# Campaign Evaluation — CB Email Campaign Start 9/9 — 2026-11-09

## Verdict
This is the eighth consecutive pull with **byte-for-byte identical numbers**: 0 opens and 0 replies across 101 delivered, the same 2 bounces and 2 spam-blocks, the same per-step deliveries (100 / 87 / 91). A sustained 0/101 across a prior subject swap and eight weeks is not a copy outcome — it is the signature of broken open tracking or systematic inbox non-placement, and possibly a stalled sequence that is no longer dispatching. Nothing downstream is judgeable until this gate clears, and clearing it is worth the entire campaign, because every send logged since September remains unmeasurable.

## Prioritized issues
1. **Zero opens on 101 delivered — eight reports running, not a single counter has moved** — evidence: `unique_opened: 0`, `open_rate_pct: 0`, across all three steps (278 total step-level deliveries: 100 + 87 + 91). A functioning cold campaign to a US SMB list leaks double-digit opens from Apple Mail privacy pre-fetch and security-scanner bots alone, regardless of copy quality. A flat zero that survived a subject change and eight weeks is not human behavior — it points to a disabled/broken open pixel or mail not landing in inboxes. This gates every engagement judgment below. Estimated impact: **high**.
2. **Numbers are completely frozen vs. the last three-plus pulls — nothing advanced** — evidence: every field (delivered 101, bounced 2, spam 2, and the three step deliveries 100 / 87 / 91) matches the 2026-11-02 and 2026-10-26 pulls exactly. Either sending has stalled, the pull is stale, or the sequence is no longer dispatching. This is itself a finding: the campaign may be burning calendar time without burning list. Estimated impact: **high** (if sends have silently stopped, you are no longer even accumulating data).
3. **Spam-block rate ~6× alarm, count frozen at 2** — evidence: 2 spam-blocked ÷ 105 attempted = **1.90%** (alarm >0.3%). Directional at this n; the count has never moved across eight reports, so it decays as a rate rather than grows. Paired with issue #1, a placement/reputation problem remains the leading shared hypothesis. Estimated impact: **high** if zero-opens and spam placement share a root cause.
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

The nominal biggest leak is the open stage, but the *shape* is the real signal. Zero opens on 101 delivered — sustained through a subject-line change and eight weeks — is not consistent with "weak subject lines." Even a bad cold campaign leaks opens from privacy pre-fetch and bots. A flat zero at this n points to the open pixel not being recorded or mail not reaching inboxes. **The funnel remains un-interpretable until open tracking and inbox placement are confirmed.** You cannot read subject quality — or anything downstream — off a tracking artifact.

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 | "missed calls?" | 100 | 0 | 0 | Only step at callable volume. Absorbed all 4 deliverability events (2 bounce, 2 spam). 0 opens — chase tracking/placement, not copy. |
| 2 | (empty / threads as reply) | 87 | 0 | 0 | Flat again (87 → 87). Zero opens make it unreadable; still short of ~150–200 for any conclusion. |
| 3 | (empty / threads as reply) | 91 | 0 | 0 | Flat again (91 → 91). Growth has stopped entirely. Still below callable volume. |

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
- **Is open tracking actually enabled on this sequence?** A true 0/101 sustained across a subject change and eight reports is far more consistent with a disabled/broken pixel than real behavior. Verify in Apollo before drawing any subject-line conclusion. **Still the top thing to confirm — unchanged for eight reports.**
- **Has sending actually stalled?** Every counter is identical to the last several pulls. Confirm in Apollo whether the sequence is still dispatching (~60/day) or has silently stopped — if it has, you are no longer even accumulating data, and the "flat" numbers reflect a paused campaign, not steady-state.
- **Where are messages landing?** Run an inbox-placement / seed test on the sending domain. Zero opens plus a spam-block rate ~6× alarm together hint at a placement/reputation problem the API cannot confirm.
- **Why do the `scheduled` counters contradict `delivered`?** (step 1 `scheduled: 0` vs `delivered: 100`). Reconcile in Apollo; treat as a live-queue artifact, not a total.
- **Reply sentiment is moot now (0 replies), but note for later:** Apollo's reply count includes angry/negative replies. Once replies exist, spot-check them by hand before treating reply rate as positive interest.
- **Re-evaluate once open tracking is confirmed working AND ≥150–200 are delivered per step.** Until the gate clears, more volume only produces more un-interpretable zeros — now demonstrated eight reports in a row, and for the second straight pull without even adding a single new send.

## A/B test plan

**Hypothesis:** Once open tracking is confirmed and mail is landing in inboxes, a plain-text-style first line (no link above the fold) will place better and open higher than a version that surfaces the Calendly link early, because link-heavy cold emails to cold SMB domains draw more filtering.
**Variant A:** Step 1 body ending with reply-only CTA: 'Reply "Plan" and I'll send a quick breakdown.' (no URL in body)
**Variant B:** Step 1 body ending with reply CTA plus Calendly link: 'Reply "Plan" ... or grab a time that works here: https://calendly.com/call-boss'
**Success metric:** Inbox placement and open rate first; reply rate as secondary. Call a winner at >=150 delivered per variant. If relative open-rate difference is <20%, keep Variant A (simpler, lower filtering risk).
**Decision rule:** Do NOT change subject line, send time, volume, or follow-up copy while this test runs so link presence is the only variable; attribution is otherwise lost. Only start this test after the zero-open tracking gate is cleared.

## Manual changes (targeting / timing / list)

- BEFORE anything else: open the sequence in Apollo and confirm open tracking is actually enabled on all three steps. A true 0/101 across a subject change and eight weeks is far more consistent with a disabled/broken open pixel than real behavior. This is the single highest-value action.
- Confirm whether the sequence is still dispatching. Every counter (delivered 101, bounced 2, spam 2, steps 100/87/91) has been byte-for-byte identical for eight pulls, which suggests sending may have silently stalled. If paused, the 'flat' numbers reflect a stopped campaign, not steady state. Restart or fix pacing.
- Run an inbox-placement / seed-list test (e.g., GlockApps or manual seed inboxes across Gmail, Outlook, Yahoo) on the sending domain. Zero opens plus a spam-block rate ~6x alarm (1.90%) strongly hint at a placement/reputation problem the API cannot confirm.
- Check sending-domain authentication: verify SPF, DKIM, and DMARC are all passing and that the tracking/link domain (used for the open pixel and Calendly link) is a properly configured custom subdomain, not a flagged shared tracker that could be triggering both the zero opens and the spam blocks.
- Temporarily throttle volume down (e.g., 20-30/day) while diagnosing, rather than pushing more sends that produce un-interpretable zeros. Resume 60/day only after placement is confirmed.
- Re-verify the list through Apollo and remove the 2 known bounces plus any catch-all/risky addresses; bounce rate sits right at the 2% alarm line and should be driven down before scaling.
- Consider consolidating steps 2 and 3 messaging only after tracking is fixed; do not restructure the sequence while the pipeline is broken, since no step has reached callable volume.

## Next review

Re-run the evaluation once (1) open tracking is confirmed enabled and a seed test shows inbox placement, AND (2) at least 150-200 messages are delivered per step after sending resumes. Until the gate clears, more volume only produces more un-interpretable zeros. At next review, watch first for any non-zero open counter (proof the pixel works), then spam-block and bounce rates against attempted sends, then reply rate and sentiment.

---

# 9/3/26 Test Sequence (6a99ac201d11ff001447f137)

_Brief used: none_

**Changes applied to Apollo automatically: 0**

## Recommended changes

This is the tenth consecutive pull showing a frozen test sequence — 3 delivered, 1 bounced, 0 opens, 0 replies, and unique_scheduled:0 for roughly ten weeks despite active:true. The blocker is operational, not editorial: nothing is sending, the content is a placeholder test message, and no campaign brief exists, so no engagement metric is interpretable and no copy can be responsibly rewritten. The highest-value actions are to confirm why sending is stalled, load a verified real audience, supply a brief, and pause this recurring no-op evaluation until there are real sends to analyze.

## Evaluation

# Campaign Evaluation — 9/3/26 Test Sequence — 2026-11-09

## Verdict
This is still not a live campaign. The subject is "Test Email" and the body reads "This email has been sent as a test for Apollo sending." Every figure is byte-for-byte identical to the previous **nine** evaluations (3 delivered, 1 bounced, 0 opened, 0 replied, `unique_scheduled: 0`) — this is now the **tenth consecutive pull** with zero incremental sends. There is nothing new to diagnose; the sequence has been frozen for roughly ten weeks and should be treated as abandoned or misconfigured until someone confirms otherwise in Apollo. The highest-value action is operational, not analytical: find out why nothing is sending and pause this recurring evaluation.

## Prioritized issues
1. **Sequence frozen for ten consecutive pulls** — evidence: figures unchanged across 09-07, 09-14, 09-21, 09-28, 10-05, 10-12, 10-19, 10-26, 11-02, and now 11-09 (delivered 3, bounced 1, opened 0, replied 0, `unique_scheduled: 0`). Despite `active: true`, nothing has sent in ~10 weeks. — estimated impact: high (blocks all analysis)
2. **Sample size is effectively zero** — evidence: 4 total attempted sends across the sequence's entire lifetime. No engagement rate is statistically interpretable at this n. — estimated impact: high
3. **Still placeholder/test content, not campaign copy** — evidence: subject "Test Email"; body is a receipt-confirmation message with no offer, no pain point, and a sender-serving CTA ("reply to confirm receipt"). Nothing to optimize. — estimated impact: high
4. **One bounce out of four attempts** — evidence: `unique_bounced: 1` against 4 attempted = nominal 25%, but a single bad address produces that at n=4. Not a reliable signal. — estimated impact: low
5. **No campaign brief supplied (tenth time)** — evidence: brief section blank again. Copy-to-audience fit and target-vs-actual comparisons cannot be performed. — estimated impact: medium

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
- **No movement for a tenth straight pull.** Every figure is identical to 09-07 through 11-02. The prior reports' conclusion — that the sequence is misconfigured or abandoned — is now beyond doubt: roughly ten weeks have passed with `unique_scheduled: 0` and zero incremental sends. The predicted effect of the last round (none, because nothing is sending) held exactly. This is a confirmed dormant state, not an anomaly to keep watching.

## Open questions
- **Why has nothing sent in ~10 weeks?** The sequence is `active: true` but `unique_scheduled: 0` and volume is unchanged since 9/7. Someone should verify in Apollo whether real contacts have been loaded and whether sending is paused, throttled, complete, or silently misconfigured.
- **Should this evaluation cadence be paused?** Ten identical automated reports have now been generated. Strongly recommend halting recurring evaluation until the sequence shows incremental sends (≥150–200 delivered per variant before reading any engagement metric), to avoid generating further no-op reports.
- **Was the single bounce hard or soft, and was that address a known typo/bad?** Noise at n=4, but confirm list verification is in place before scaling.
- **Is a campaign brief available elsewhere?** Without product/offer/audience/target metrics, copy-to-audience fit and target comparisons are impossible — supply one before the next evaluation.
- **Reply sentiment** is not exposed by the Apollo API; once real replies arrive, spot-check them manually (angry replies count toward reply rate too).

## A/B test plan

**Hypothesis:** No A/B test is warranted. With only 3 lifetime delivered emails and placeholder test content, any variant comparison would be noise — the rule of thumb is ~150–200 delivered per variant before reading engagement, and we are at n=3 total.
**Variant A:** N/A — hold all testing until the sequence is actually sending to a real, verified list and a campaign brief defines the offer, audience, and target metrics.
**Variant B:** N/A — same as above.
**Success metric:** Not applicable until sample size is sufficient (≥150–200 delivered per variant).
**Decision rule:** Do not start any test until incremental sends resume and real campaign copy (not the 'Test Email' placeholder) is live.

## Manual changes (targeting / timing / list)

- Investigate in Apollo why unique_scheduled is 0 and nothing has sent in ~10 weeks despite active:true — check whether real contacts are loaded, whether sending is paused/throttled/completed, or the sequence is silently misconfigured.
- Confirm a verified contact list is attached; the single bounce at n=4 is noise but verify list-cleaning (e.g., ZeroBounce/NeverBounce) is in place before scaling.
- Replace the placeholder 'Test Email' subject and 'This email has been sent as a test' body with real campaign copy once a brief is supplied — do not launch the test artifact to a real audience.
- Supply a campaign brief (product, offer, target audience, pain points, tone, must-not-say constraints, and target metrics) so copy-to-audience fit and targeting can actually be assessed.
- Pause this recurring automated evaluation until the sequence shows incremental sends — ten identical no-op reports have now been generated; resume only when ≥150–200 emails per variant have been delivered.

## Next review

Do not re-run on the current cadence. Trigger the next evaluation only after the sequence resumes sending AND accumulates at least 150–200 delivered emails per variant with real (non-placeholder) copy. At that point, watch first for deliverability (bounce rate <2%, spam-block <0.3%), then opens, then replies — in that order.

---
