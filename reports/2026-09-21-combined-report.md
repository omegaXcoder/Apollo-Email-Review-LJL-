# Campaign performance report — 2026-09-21

# CB Email Campaign Start 9/9 (6aa060e17af83e00143f470d)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 1**

## Recommended changes

The evaluation is unambiguous that this is a tracking/deliverability problem, not a copy problem: a true 0/88 opens sustained across two different subject lines points to a disabled open pixel or systematic spam placement, so those must be resolved before any copy read is trustworthy. We therefore lead with non-copy fixes (confirm open tracking, run an inbox-placement seed test, disable link tracking, reconcile the scheduled/delivered discrepancy, and re-verify the list) and hold copy changes to a single high-value edit. The one copy change surfaces the brief's actual core CTA (the Calendly link) which no current email includes, so that any reply-or-book intent converts to a booked meeting without depending on manual follow-up.

### Change 1 — step 1 — applied automatically (PUT /emailer_templates/6aa060e17af83e00143f470f)

**Why:** The evaluation flagged that the sequence never surfaces the brief's core CTA (Calendly), so every reply-based micro-commitment depends on manual follow-up to become a booked meeting. Keeping the reply-'Plan' low-friction option but adding a direct booking link gives owners who are ready a one-click path, aligning the sequence with the brief's stated win (meeting on the calendar). Subject is intentionally left unchanged so it can be isolated in the A/B test below. Note: a link may slightly affect placement, so add it only after the inbox-placement seed test confirms the domain is landing in the inbox.

**Subject before:** missed calls?
**Subject after:** missed calls?

**New body:**
```
Hi {{contact.first_name}},

When your crew is out on a job, what happens to a new customer call? Voicemail, a busy line, or nobody at all?

Most owners we work with quietly lose good leads that way, because the caller just tries the next company on the list.

Call Boss is a US based team that answers as your office and books jobs right in your CRM, without hiring in house. We already do this for lawn care, pest control, and irrigation companies.

Worth a quick look at how many calls {{account.name}} might be missing? Reply "Plan" and I'll send a simple breakdown, or grab a 15 minute slot here: [INSERT CALENDLY LINK].
```

## Evaluation

# Campaign Evaluation — CB Email Campaign Start 9/9 — 2026-09-21

## Verdict
One week on, this campaign has delivered 88 emails and still shows **exactly zero opens and zero replies**. A true 0/88 is not a "slow start" — it is the signature of either disabled/broken open tracking or systematic spam placement, and it is the single thing that must be resolved before anything else here can be trusted. Until it is, every engagement number below is un-interpretable, and no judgment about the (genuinely decent) copy can be made from the data. The one piece of good news: the bounce and spam-block counts have not moved since the last report despite volume nearly doubling, so the deliverability alarms are softening from "possible reputation problem" toward "two early events on a small list."

## Prioritized issues
1. **Zero opens on 88 delivered — now across two different subject lines** — evidence: `unique_opened: 0`, `open_rate_pct: 0`, and the step-1 subject has changed from "who's answering your phones?" (prior report) to "missed calls?" (now), yet opens are *still* flat zero. A subject swap producing no change in a 0% open rate is strong evidence the problem is not the copy but a broken open pixel or inbox placement. Estimated impact: **high** — this is the gate on all engagement analysis.
2. **Spam-block rate above alarm** — evidence: 2 spam-blocked ÷ 92 attempted (88 delivered + 2 bounced + 2 spam-blocked) = **2.17%** (alarm >0.3%). Directional at this n, and notably the count is unchanged from the last report, but 2.17% is still well over threshold and, combined with issue #1, keeps a placement/reputation problem live as a hypothesis. Estimated impact: **high** if the two zeros (opens + placement) share a root cause.
3. **Bounce rate at the alarm line** — evidence: 2 bounced ÷ 92 attempted = **2.17%** (alarm >2%). Same 2 bounces as last report — no new bounces across ~40 additional sends — so this is decaying, not growing. Estimated impact: **medium**, and trending down.
4. **Still too under-sent to evaluate steps 2–3 or run any variant read** — evidence: step 2 has 3 delivered, step 3 has 0; single variant per step. No step-level or A/B conclusion is possible. Estimated impact: **medium** (blocks the step and copy-on-data analysis entirely).

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate | 2.17% (2/92 attempted) | <2% | (95%+ delivery) | 🔴 at line, but flat since last report |
| Spam-block rate | 2.17% (2/92 attempted) | <0.3% | — | 🔴 (count unchanged — directional at this n) |
| Open rate | 0% (0/88 delivered) | 30–50% | 30% | 🔴 anomalous (likely tracking/placement) |
| Reply rate | 0% (0/88 delivered) | 1–3% | 2% | ⚪ n too small / gated by opens |
| Unsubscribe rate | 0% (0/88) | <1% | — | ⚪ n too small |
| Meetings booked / 100 delivered | 0 (0/88) | ~1 | 1 | ⚪ n too small / gated |

No "delivery rate" row by design: only 92 of 110 contacts have been attempted because sending is intentionally throttled (~60/day). A delivered-over-scheduled figure would misrepresent pacing as failure. Bounce and spam-block are the deliverability signals here.

## Funnel
Delivered **88** → Opened **0 (0%)** → Replied **0 (0%)**.

The biggest leak is nominally the **open stage**, but the *shape* of it is the real signal. A weak-but-functioning cold campaign to this list would still show double-digit opens from Apple Mail privacy pre-fetch and security-scanner bots alone. A flat zero on 88 delivered — sustained even after the step-1 subject line was changed — is far more consistent with the open pixel not being recorded, or mail not reaching inboxes, than with genuinely terrible subject performance. Treat the funnel as un-interpretable until open tracking and inbox placement are confirmed. You cannot read subject-line quality off a tracking artifact.

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 | "missed calls?" | 87 | 0 | 0 | Only step with real volume. Subject changed since last report; 0 opens persisted — chase tracking/placement, not the copy |
| 2 | (empty / threads as reply) | 3 | 0 | 0 | Barely started — no data |
| 3 | (empty / threads as reply) | 0 | 0 | 0 | Not yet sent — no data |

Single variant per step, so there is no A/B comparison to make, and n is nowhere near the ~150–200 delivered/variant needed to call a winner anyway. No step can be labeled dead weight yet — steps 2 and 3 have essentially not run. (Note: the step-1 raw fields are internally inconsistent — `scheduled: 62` but `delivered: 87` — worth a glance in Apollo, but it doesn't change the conclusion.)

## Copy-to-audience fit
The copy remains one of the stronger parts of this campaign; the metrics problem is almost certainly not a copy problem. Reading the current templates against the brief:

- **Subject now leads on pain, tersely.** "missed calls?" maps to brief pain points #1 and #4 (missed calls while in the field → lost revenue) and is short and lowercase, which is a defensible cold-email register. But with 0 opens on two different subjects, its actual performance is unknowable from this data.
- **Body leads with the stated pain point in the audience's own words.** "When your crew is out on a job, what happens to a new customer call? Voicemail, a busy line, or nobody at all?" — this is pain point #1 stated plainly. Good fit.
- **Objection handling matches the brief.** Step 2 tackles "hiring an in-house receptionist feels like the safer move" and answers with the scale/cost argument — almost verbatim the brief's stated objection and its prescribed answer. Well aligned.
- **Tone matches.** Warm, plain, non-corporate ("No pitch, just a straightforward breakdown," "no worries and I'll close this out"). This is the relatable small-business-owner register the brief calls for.
- **Constraints respected.** No em dashes. No overstated scope — "answers as your office and books jobs right in your CRM" stays inside the stated service set and doesn't imply full-time employment of client staff.
- **CTA is softer than the brief's stated goal, deliberately.** The brief's core CTA is "Schedule a call" (Calendly); the sequence uses a reply-based micro-commitment ("reply 'Plan'" / "reply 'yes'"). Lower friction is defensible cold, but flag it as a conscious choice: no email surfaces the Calendly link, so every "Plan"/"yes" reply depends on manual follow-up to become a booked meeting.
- **Unused proof assets.** The brief lists heavy trust ammunition — named testimonials across lawn care/pest/irrigation, CRM integrations (Jobber/Service Autopilot/YardBook), woman/minority-owned. None appears in the sequence. Not a defect, but the trust ammunition is sitting idle.

## Open questions
- **Is open tracking actually enabled on this sequence?** A true 0/88 — persisting through a subject-line change — is more consistent with a disabled/broken pixel than with real behavior. Confirm in Apollo before drawing any conclusion about subject lines. This is the top thing to verify.
- **Where are messages landing?** Run an inbox-placement / seed test on the sending domain. Zero opens plus a spam-block count that (while flat) sits above alarm together hint at a placement/reputation issue the API can't confirm.
- **Why does step 1 show `scheduled: 62` but `delivered: 87`?** Reconcile in Apollo — the field inconsistency suggests the summary counters may be mid-refresh, which is worth ruling out before trusting any single number.
- **Reply sentiment is moot now (0 replies), but note for later:** Apollo's reply count includes angry/negative replies. Once replies exist, spot-check them by hand before treating reply rate as positive interest.
- **Re-evaluate once ≥150–200 are delivered per step.** At 88 total delivered and only step 1 meaningfully sent, the funnel and any variant read remain premature.

## A/B test plan

**Hypothesis:** Once open tracking and inbox placement are confirmed working, changing the step-1 subject line from a two-word pain fragment to a specific, personalized internal-memo question will improve open rate, because a curiosity-plus-relevance line tends to beat a bare fragment in cold B2B inboxes.
**Variant A:** missed calls?
**Variant B:** who's answering {{account.name}}'s phones?
**Success metric:** Open rate, called at >=150 delivered per variant. If relative difference is <20%, keep Variant A (simpler). Watch reply rate as a secondary tiebreaker.
**Decision rule:** Do NOT change body copy, send times, volume, or the CTA while the subject test runs — only the subject line varies, so any lift is attributable to it. Do not start the test until open tracking is verified as functional; testing subjects against a broken pixel wastes the sample.

## Manual changes (targeting / timing / list)

- TOP PRIORITY: In Apollo, confirm open tracking is actually enabled on this sequence. A true 0/88 across two subject lines is far more consistent with a disabled/broken open pixel than real behavior — verify before drawing any subject-line conclusions.
- Run an inbox-placement / seed test on the sending domain (e.g., GlockApps or a manual seed set across Gmail/Outlook/Yahoo) to confirm whether mail is landing in inbox vs spam. The 2.17% spam-block rate plus zero opens together point to a possible placement problem the API cannot confirm.
- Disable link tracking (and consider disabling the open pixel entirely for a period) — tracking domains that aren't properly set up are a common cause of both spam placement and un-recorded opens. If you disable the open pixel to improve placement, judge the campaign on reply/meeting rate instead.
- Reconcile the step-1 field inconsistency (scheduled: 62 vs delivered: 87) in Apollo before trusting any single counter — the summary may be mid-refresh or miscounting.
- Re-verify the remaining ~18 un-sent contacts and the full list through a third-party verifier (NeverBounce/ZeroBounce) on top of Apollo to keep bounces under 2% as volume scales.
- Hold daily volume at 40-50 until the seed test confirms inbox placement, then ramp back toward 60. Do not increase volume while deliverability is unconfirmed.

## Next review

Re-run the evaluation once open tracking and inbox placement are confirmed fixed AND at least 150-200 emails have been delivered per step (roughly 2-3 weeks at 40-60/day). At that point, first confirm opens are being recorded at a plausible rate (double-digit % minimum), then read subject-line performance, the A/B result, and step 2-3 engagement. If opens are still flat zero after tracking is verified, treat it as a pure deliverability/placement issue and pause copy work entirely.

---

# 9/3/26 Test Sequence (6a99ac201d11ff001447f137)

_Brief used: none_

**Changes applied to Apollo automatically: 0**

## Recommended changes

This remains a test sequence, not a live campaign — the subject is literally "Test Email," the body is a send-confirmation receipt, and the numbers have been frozen (3 delivered, 1 bounced, 0 opens, 0 replies) across three consecutive weekly pulls with 0 scheduled. No copy rewrites are warranted because there is no campaign brief (no product, offer, audience, or tone) to write real outreach against, and inventing an offer would violate the no-fabrication rule. The actionable work is entirely operational: confirm why nothing has sent in two weeks, verify the list, and supply a brief before any copy or A/B work can begin.

## Evaluation

# Campaign Evaluation — 9/3/26 Test Sequence — 2026-09-21

## Verdict
This is still a test sequence, not a live campaign — the subject is literally "Test Email" and the body says "This email has been sent as a test for Apollo sending." The numbers are byte-for-byte identical to both prior evaluations (3 delivered, 1 bounced, 0 opens, 0 replies, 0 scheduled), so for the third consecutive week there is nothing new to diagnose and far too little volume to interpret any rate. Fixing this is worth nothing until real campaign copy and real send volume exist; the only actionable takeaway is that the sequence is idle and no engagement mechanism exists to evaluate.

## Prioritized issues
1. **Sequence has been frozen for three consecutive pulls** — evidence: figures are unchanged across 2026-09-07, 2026-09-14, and now 2026-09-21 (delivered 3, bounced 1, opened 0, replied 0), with `unique_scheduled: 0`. Despite `active: true`, nothing has sent in two full weeks. — estimated impact: high (blocks all analysis)
2. **Sample size is effectively zero** — evidence: 4 total attempted sends across the entire sequence lifetime. No open, reply, bounce, or unsubscribe rate is statistically interpretable at this n. — estimated impact: high
3. **Still placeholder/test content, not campaign copy** — evidence: subject "Test Email"; body is a receipt-confirmation message with no offer, no pain point, and a CTA that serves the sender ("reply to confirm receipt"). There is nothing to optimize. — estimated impact: high
4. **One bounce out of four attempts** — evidence: `unique_bounced: 1` against 4 attempted = nominal 25%, but a single bad address produces that at n=4. Not a reliable signal; watch once real volume lands. — estimated impact: low
5. **No campaign brief supplied** — evidence: brief section blank for the third time. Copy-to-audience fit and target-vs-actual comparisons cannot be performed. — estimated impact: medium

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate | 1/4 attempted (nominal 25%) | <2% | n/a — no brief | 🔴 nominal / ⚠️ n=4, not reliable |
| Spam-block rate | 0/4 (0%) | <0.3% | n/a | 🟢 (but n=4) |
| Open rate | 0% (0/3 delivered) | 30–50% typical | n/a | ⚠️ n=3, uninterpretable |
| Reply rate | 0% (0/3 delivered) | 1–3% typical | n/a | ⚠️ n=3, uninterpretable |
| Click rate | 0% (no links in copy) | n/a | n/a | ⚪ n/a |
| Unsubscribe rate | 0% (0/3) | <1% | n/a | ⚪ n=3, uninterpretable |

*Bounce rate is measured against attempted sends (delivered + bounced + spam-blocked = 4). No "delivery rate" is reported, per methodology — `unique_scheduled: 0` and the test/throttled nature of sending make any list-size denominator meaningless.*

## Funnel
- **Attempted: 4** → **Delivered: 3** → **Opened: 0** → **Replied: 0**
- The funnel remains undiagnosable. With 3 delivered emails, 0 opens is equally consistent with a broken tracking pixel, a stalled pipeline, or plain small-number variance — the data cannot distinguish these. There is no "biggest leak" to call out because no stage has enough volume for drop-off to carry meaning.

## Step-by-step
| Step | Variant | Scheduled | Delivered | Bounced | Opened | Replied | Verdict |
|---|---|---|---|---|---|---|---|
| 1 (auto_email) | "Test Email" | 0 | 3 | 1 | 0 | 0 | Test send only. Not evaluable. |

- Single step, single variant — no A/B comparison possible and none should be attempted at this volume.
- Stats are fully resolved (no longer computing) and `scheduled` remains 0. The queue is drained and no new sends have been added since 9/3, confirming the sequence is not actively delivering.

## Copy-to-audience fit
- **Cannot be scored — the copy is a test artifact, and no brief exists.** Subject "Test Email" and body ("This email has been sent as a test for Apollo sending. Please reply to this email to confirm it was received.") are functional check messages, not outreach.
- Against generic cold-email principles only: no value proposition, no personalization, no audience pain point, and a CTA that serves the sender rather than the recipient. All expected for a test — flagged so it is not mistaken for live copy.

## Open questions
- **Why has nothing sent in two weeks?** The sequence is `active: true` but `unique_scheduled: 0` and volume is unchanged since 9/7. Confirm in Apollo whether real contacts have been loaded and whether sending is paused, throttled, or complete. This is now a persistent state, not a one-week anomaly — someone should verify the sequence is not silently misconfigured. Re-pull only once ≥150–200 emails per variant have been delivered before reading any engagement metric.
- **Was the single bounce hard or soft, and was that address a known typo/bad?** Noise at n=4, but confirm list verification is in place before scaling.
- **Is a campaign brief available elsewhere?** Without product/offer/audience/target metrics, copy-to-audience fit and target comparisons are impossible — supply one before the next evaluation.
- **Reply sentiment** is not exposed by the Apollo API; once real replies arrive, spot-check them manually (angry replies count toward reply rate too).

## A/B test plan

**Hypothesis:** No A/B test can be legitimately run yet — with only 3 delivered emails and placeholder test copy, any result would be noise, and with no brief there is no offer or audience hypothesis to test. Once real campaign copy and volume exist, the first test should be: changing the subject line from a generic phrase to a short, lowercase, curiosity-driven line will increase open rate because cold-email opens are driven primarily by subject and sender.
**Variant A:** (pending brief) Current/control subject line for the real campaign, e.g. a plain descriptive subject.
**Variant B:** (pending brief) A 1–3 word lowercase subject referencing the recipient's specific pain point from the brief.
**Success metric:** Open rate, called at ≥150 delivered per variant; if relative difference <20%, keep the simpler line. Reply rate as secondary tiebreaker.
**Decision rule:** Do not start this test until (a) a brief exists, (b) real copy replaces the test artifact, and (c) the sequence is actually delivering volume. Until then, run no test — the sample is uninterpretable.

## Manual changes (targeting / timing / list)

- Investigate why the sequence shows active:true but unique_scheduled:0 with unchanged volume since 9/7 — confirm real contacts are loaded and sending is not paused, throttled, or drained. This is the single blocking issue.
- Supply a campaign brief (product, offer, target persona, pain points, tone, must-not-say constraints, target metrics) before the next evaluation — copy-to-audience fit and target comparisons are impossible without it.
- Replace the placeholder test template ('Test Email' / 'sent as a test for Apollo sending') with real campaign copy once the brief is available; do not scale the current test content.
- Verify list hygiene / email verification before scaling — confirm whether the single bounce at n=4 was a hard bounce or known-bad address, and ensure a verification step (e.g., Apollo/NeverBounce) is enabled to keep bounce rate <2% at real volume.
- Once real sends begin, confirm open tracking is functioning (the 0/3 opens could be a broken pixel, a stalled pipeline, or small-number variance — currently indistinguishable).

## Next review

Re-run the evaluation only after real campaign copy is live AND ≥150–200 emails per variant have been delivered — not on a fixed calendar date. At that point, first confirm deliverability (bounce <2%, spam-block <0.3%) and that open tracking works, then read open and reply rates. If the sequence is still frozen at 0 scheduled next week, treat that as an operational escalation rather than a copy problem.

---
