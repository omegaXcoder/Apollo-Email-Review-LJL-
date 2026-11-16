# Campaign performance report — 2026-11-16

# CB Email Campaign Start 9/9 (6aa060e17af83e00143f470d)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 1**

## Recommended changes

The data shows a frozen 0/101 funnel across nine consecutive pulls, which is the signature of broken open tracking, inbox non-placement, or a stalled sequence, not a copy problem. Per the evaluation, no copy change can be judged until that gate clears, so the priority is deliverability and dispatch verification, with copy changes held to a single low-risk deliverability-adjacent edit (removing the naked Calendly URL that can trip spam filters). Expected impact: restoring measurable opens and inbox placement is worth the entire campaign, since every send since September is currently unmeasurable.

### Change 1 — step 1 — applied automatically (PUT /emailer_templates/6aa060e17af83e00143f470f)

**Why:** The only copy change worth making before the tracking gate clears: the raw Calendly URL in the body is a common spam-filter trigger and pairs with the ~6x-alarm spam-block rate flagged in the evaluation. Subject and strong pain-led hook are kept verbatim since the eval judges the copy as one of the campaign's stronger parts; moving the booking link to the post-reply conversation reduces deliverability risk without weakening the message.

**Subject before:** missed calls?
**Subject after:** missed calls?

**New body:**
```
Hi {{contact.first_name}},

When your crew is out on a job, what happens to a new customer call? Voicemail, a busy line, or nobody at all?

Most owners we talk to quietly lose good leads that way, because the caller just tries the next company on the list.

Call Boss is a US based team that answers as your office and books jobs right in your CRM, no in house hire needed. We already do this for lawn care, pest control, and irrigation companies.

Want a quick breakdown of how many calls {{account.name}} might be missing? Just reply "Plan" and I'll put it together.

Thanks,
The Call Boss Team
```

## Evaluation

# Campaign Evaluation — CB Email Campaign Start 9/9 — 2026-11-16

## Verdict
This is the ninth consecutive pull with **byte-for-byte identical numbers**: 0 opens and 0 replies across 101 delivered, the same 2 bounces and 2 spam-blocks, the same per-step deliveries (100 / 87 / 91). A flat 0/101 that has now survived a subject swap and nine weeks is not a copy outcome — it is the signature of broken open tracking, systematic inbox non-placement, or a sequence that has stopped dispatching entirely. Nothing downstream is judgeable until this gate clears, and clearing it is worth the entire campaign: every send logged since September remains unmeasurable, and for at least two straight pulls not one new send has been added.

## Prioritized issues
1. **Zero opens on 101 delivered — nine reports running, not a single counter has moved** — evidence: `unique_opened: 0`, `open_rate_pct: 0`, across all three steps (278 total step-level deliveries: 100 + 87 + 91). A functioning cold campaign to a US SMB list leaks double-digit opens from Apple Mail privacy pre-fetch and security-scanner bots alone, independent of copy quality. A flat zero that outlived a subject change and nine weeks is not human behavior — it points to a disabled/broken open pixel or mail not landing in inboxes. This gates every engagement judgment below. Estimated impact: **high**.
2. **Numbers are completely frozen vs. the prior several pulls — nothing advanced** — evidence: every field (delivered 101, bounced 2, spam 2, and the three step deliveries 100 / 87 / 91) matches the 2026-11-09, 2026-11-02, and 2026-10-26 pulls exactly. Either sending has stalled, the pull is stale, or the sequence is no longer dispatching. This is itself a finding: the campaign may be burning calendar time without burning list. Estimated impact: **high** (if sends have silently stopped, you are no longer even accumulating data).
3. **Spam-block rate ~6× alarm, count frozen at 2** — evidence: 2 spam-blocked ÷ 105 attempted = **1.90%** (alarm >0.3%). Directional at this n; the count has never moved across nine reports, so it decays as a rate rather than grows. Paired with issue #1, a placement/reputation problem remains the leading shared hypothesis. Estimated impact: **high** if zero-opens and spam placement share a root cause.
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

The nominal biggest leak is the open stage, but the *shape* is the real signal. Zero opens on 101 delivered — sustained through a subject-line change and nine weeks — is not consistent with "weak subject lines." Even a bad cold campaign leaks opens from privacy pre-fetch and bots. A flat zero at this n points to the open pixel not being recorded or mail not reaching inboxes. **The funnel remains un-interpretable until open tracking and inbox placement are confirmed.** You cannot read subject quality — or anything downstream — off a tracking artifact.

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 | "missed calls?" | 100 | 0 | 0 | Only step at near-callable volume. Absorbed all 4 deliverability events (2 bounce, 2 spam). 0 opens — chase tracking/placement, not copy. |
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
- **CTA is deliberately softer than the brief's goal.** Brief's core CTA is "Schedule a call" (Calendly); the sequence uses reply micro-commitments ("reply 'Plan'" / "reply 'yes'"). Step 1 does also surface the Calendly link, but steps 2–3 lean entirely on reply prompts, so most paths would need manual follow-up to become a booked meeting.
- **Trust ammunition still idle.** Named testimonials, CRM integrations (Jobber/Service Autopilot/YardBook), woman/minority-owned — none appears in the sequence. Not a defect, but unused.

## Open questions
- **Is open tracking actually enabled on this sequence?** A true 0/101 sustained across a subject change and nine reports is far more consistent with a disabled/broken pixel than real behavior. Verify in Apollo before drawing any subject-line conclusion. **Still the top thing to confirm — unchanged for nine reports.**
- **Has sending actually stalled?** Every counter is identical to the last several pulls, and no new sends have been added for at least two straight pulls. Confirm in Apollo whether the sequence is still dispatching (~60/day) or has silently stopped — if it has, the "flat" numbers reflect a paused campaign, not steady-state, and you are no longer accumulating data.
- **Where are messages landing?** Run an inbox-placement / seed test on the sending domain. Zero opens plus a spam-block rate ~6× alarm together hint at a placement/reputation problem the API cannot confirm.
- **Why do the `scheduled` counters contradict `delivered`?** (step 1 `scheduled: 0` vs `delivered: 100`). Reconcile in Apollo; treat as a live-queue artifact, not a total.
- **Reply sentiment is moot now (0 replies), but note for later:** Apollo's reply count includes angry/negative replies. Once replies exist, spot-check them by hand before treating reply rate as positive interest.
- **Re-evaluate once open tracking is confirmed working AND ≥150–200 are delivered per step.** Until the gate clears, more volume only produces more un-interpretable zeros — now demonstrated nine reports in a row, and for at least the second straight pull without a single new send.

## A/B test plan

**Hypothesis:** Once open tracking and inbox placement are confirmed working, a curiosity/first-name subject will lift open rate over the terse pain subject because it reads more like a one-to-one note and less like a pitch. DO NOT run this test until opens are confirmed registering above zero.
**Variant A:** Subject: missed calls?
**Variant B:** Subject: {{contact.first_name}}, quick one about {{account.name}}
**Success metric:** Open rate, called at >=150 delivered per variant.
**Decision rule:** Pick the higher open rate only if the relative difference is >=20%; otherwise keep Variant A (simpler, already written). Do not change body copy, send times, or volume while the test runs, and do not start it until a seed test confirms inbox placement and the open pixel is recording.

## Manual changes (targeting / timing / list)

- Confirm in Apollo that open tracking (the open pixel) is enabled on sequence 6aa060e17af83e00143f470d before any other action — a true 0/101 across nine pulls is almost certainly a disabled/broken pixel, not real behavior.
- Verify the sequence is still actively dispatching ~60/day. Every counter has been identical for at least two pulls, suggesting sending has silently stalled or paused; if so, re-activate it so data resumes accumulating.
- Run an inbox-placement / seed test (e.g., GlockApps or a manual seed set across Gmail/Outlook/Yahoo) on the sending domain to confirm whether mail lands in inbox vs spam, given the spam-block rate is ~6x the alarm threshold.
- Check sending-domain reputation (Google Postmaster Tools, DMARC/DKIM/SPF alignment) and confirm warm-up is actually reflected in placement, not just claimed.
- Re-verify the current list through Apollo and remove the 2 bouncing/invalid addresses; keep bounce rate under 2% as the denominator grows.
- Hold daily volume at or below 60/day until placement is confirmed — pushing more volume now only produces more un-interpretable zeros and risks further reputation damage.
- Add a Calendly booking step into the post-reply handoff (manual or templated) so positive 'Plan'/'yes' replies convert to booked calls, since steps 2-3 currently lean entirely on reply micro-commitments.

## Next review

Re-run the evaluation only after (1) open tracking is confirmed recording non-zero opens AND (2) at least 150-200 messages are delivered per step following the fixes — likely 2-3 weeks at ~60/day once dispatching resumes. Watch first for opens moving off zero and spam-block rate dropping below 0.3%; only then judge subject-line and reply performance.

---

# 9/3/26 Test Sequence (6a99ac201d11ff001447f137)

_Brief used: none_

**Changes applied to Apollo automatically: 0**

## Recommended changes

The sequence has been frozen for eleven consecutive pulls with only 4 lifetime attempted sends, placeholder test content ('Test Email'), and no campaign brief — there is nothing statistically or creatively actionable here. The only meaningful work is operational: diagnose why nothing has scheduled in ~11 weeks and replace the Apollo send-test artifact with real campaign copy once a brief exists. No copy rewrites are proposed because inventing an offer, audience, or value proposition without a brief would fabricate the campaign.

## Evaluation

# Campaign Evaluation — 9/3/26 Test Sequence — 2026-11-16

## Verdict
This is still not a live campaign, and the numbers have not moved for an **eleventh consecutive pull**. Subject is "Test Email," the body is an Apollo send-test confirmation, and every figure is byte-for-byte identical to the previous ten evaluations (3 delivered, 1 bounced, 0 opened, 0 replied, `unique_scheduled: 0`). There is nothing new to diagnose — the sequence has been frozen for roughly eleven weeks and should be treated as abandoned or misconfigured. The only valuable action is operational, not analytical: find out why nothing is sending and halt this recurring evaluation.

## Prioritized issues
1. **Sequence frozen for eleven consecutive pulls** — evidence: figures unchanged across 09-07 → 11-09 and now 11-16 (delivered 3, bounced 1, opened 0, replied 0, `unique_scheduled: 0`). `active: true` but zero incremental sends in ~11 weeks. — estimated impact: high (blocks all analysis)
2. **Sample size is effectively zero** — evidence: 4 total attempted sends across the sequence's entire lifetime. No engagement rate is statistically interpretable at this n. — estimated impact: high
3. **Still placeholder/test content, not campaign copy** — evidence: subject "Test Email"; body is a receipt-confirmation ("Please reply to this email to confirm it was received") with no offer, no pain point, and a sender-serving CTA. Nothing to optimize. — estimated impact: high
4. **One bounce out of four attempts** — evidence: `unique_bounced: 1` against 4 attempted = nominal 25%, but a single bad address produces that at n=4. Not a reliable signal. — estimated impact: low
5. **No campaign brief supplied (eleventh time)** — evidence: brief section blank again. Copy-to-audience fit and target-vs-actual comparisons cannot be performed. — estimated impact: medium

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
- **No movement for an eleventh straight pull.** Every figure is identical to 09-07 through 11-09. The prior reports' conclusion — that the sequence is misconfigured or abandoned — is now beyond doubt: ~11 weeks with `unique_scheduled: 0` and zero incremental sends. The last round predicted no change (because nothing is sending); that held exactly. This is a confirmed dormant state, not an anomaly worth continued watching.

## Open questions
- **Why has nothing sent in ~11 weeks?** The sequence is `active: true` but `unique_scheduled: 0` and volume is unchanged since 9/7. Someone should verify in Apollo whether real contacts have been loaded and whether sending is paused, throttled, complete, or silently misconfigured.
- **Should this evaluation cadence be paused?** Eleven identical automated reports have now been generated. Strongly recommend halting recurring evaluation until the sequence shows incremental sends (≥150–200 delivered per variant before reading any engagement metric), to avoid generating further no-op reports.
- **Was the single bounce hard or soft, and was that address a known typo/bad?** Noise at n=4, but confirm list verification is in place before scaling.
- **Is a campaign brief available elsewhere?** Without product/offer/audience/target metrics, copy-to-audience fit and target comparisons are impossible — supply one before the next evaluation.
- **Reply sentiment** is not exposed by the Apollo API; once real replies arrive, spot-check them manually (angry replies count toward reply rate too).

## A/B test plan

**Hypothesis:** Deferred — no A/B test should run until the sequence is actually sending at volume. Testing at n=4 would produce noise, not signal. Once real copy and a brief exist, the first test should be subject line style: 'Changing the subject from marketing-speak to a lowercase internal-memo style will improve open rate because cold-email audiences treat casual, specific subjects as more personal and less promotional.'
**Variant A:** Subject: Quick question about {{account.name}}
**Variant B:** Subject: {{account.name}} + [sending business] (lowercase, 1-4 words, written literally once brief names the sender)
**Success metric:** Open rate, evaluated only after ≥150–200 delivered per variant.
**Decision rule:** Call a winner at ≥150 delivered per variant; if the relative open-rate difference is <20%, keep Variant A as the simpler option. Do not change body copy, send time, or targeting while this test runs.

## Manual changes (targeting / timing / list)

- Investigate in Apollo why unique_scheduled is 0 despite active:true — confirm whether real contacts are loaded, sending is paused/throttled, or the sequence silently misconfigured. This is the single blocking issue.
- Confirm the sequence list actually contains verified, in-target contacts; the current 4 lifetime sends suggest no real audience was ever loaded.
- Run the contact list through email verification (e.g., Apollo's built-in or Zerobounce/NeverBounce) before scaling — the single bounce at n=4 is noise but list hygiene must be in place before volume.
- Pause the recurring automated evaluation cadence until the sequence shows incremental sends; eleven identical no-op reports add no value.
- Obtain and attach a campaign brief (product, offer, target titles/industries, audience pain points, tone, must-not-say constraints, target metrics) before any copy is written — copy-to-audience fit cannot be assessed without it.
- Replace the test template (subject 'Test Email', body 'This email has been sent as a test...') with real outreach copy only after the brief is supplied — do not launch the placeholder to live contacts.

## Next review

Do not re-run the full evaluation until the sequence shows incremental sends — specifically, pause the recurring cadence and resume only once ≥150–200 emails have been delivered per variant. Trigger a review when unique_scheduled becomes non-zero and delivered volume starts climbing, and at that point watch first for bounce/spam-block rate (deliverability) before reading open or reply rates.

---
