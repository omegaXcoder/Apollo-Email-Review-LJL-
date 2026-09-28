# Campaign performance report — 2026-09-28

# CB Email Campaign Start 9/9 (6aa060e17af83e00143f470d)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 1**

## Recommended changes

The evaluation is unambiguous: 0 opens across 96 delivered over two weeks, plus a spam-block rate 6x the alarm threshold, points to broken open tracking or systematic spam placement, not weak copy. Because better copy in the spam folder helps no one, this cycle leads with deliverability and tracking fixes and keeps copy edits to a single mandatory correction: the step 1 body still contains a literal '[INSERT CALENDLY LINK]' placeholder that was never replaced. Once tracking is verified and inbox placement is confirmed, a subject-line A/B test can finally be read.

### Change 1 — step 1 — applied automatically (PUT /emailer_templates/6aa060e17af83e00143f470f)

**Why:** Mandatory fix: the live body shipped with a literal '[INSERT CALENDLY LINK]' placeholder, so any reader following the CTA hit broken text. Removed the raw link entirely (a bare URL/placeholder in a cold email is also a spam-filter and reputation risk given issue #2) and routed the CTA to a simple reply micro-commitment, which is lower friction and cleaner for deliverability. Copy otherwise preserved because the evaluation rates it as one of the strongest parts of the campaign; the problem is placement, not messaging.

**Subject before:** missed calls?
**Subject after:** missed calls?

**New body:**
```
Hi {{contact.first_name}},

When your crew is out on a job, what happens to a new customer call? Voicemail, a busy line, or nobody at all?

Most owners we talk to quietly lose good leads that way, because the caller just tries the next company on the list.

Call Boss is a US based team that answers as your office and books jobs right in your CRM, without hiring in house. We already do this for lawn care, pest control, and irrigation companies.

Worth a look at how many calls {{account.name}} might be missing? Just reply "Plan" and I'll send a simple breakdown, and I can share a time to talk from there.

Thanks,
The Call Boss Team
```

## Evaluation

# Campaign Evaluation — CB Email Campaign Start 9/9 — 2026-09-28

## Verdict
A second consecutive week, and the campaign now shows **0 opens and 0 replies across 96 delivered emails** — the exact same flat-zero signature as last report, only with more volume behind it. This is no longer a "too early to tell" situation: 0/96 sustained across two different subject lines is the fingerprint of broken open tracking or systematic spam placement, and it remains the single gate blocking every other judgment. The lone positive: bounce and spam-block *counts* have not moved (still 2 each) while delivery grew, so both rates are decaying as the denominator expands — the deliverability alarm is softening, but the tracking/placement alarm is now louder.

## Prioritized issues
1. **Zero opens on 96 delivered — the prior report's central prediction held** — evidence: `unique_opened: 0`, `open_rate_pct: 0`. Last week flagged that a subject swap ("who's answering your phones?" → "missed calls?") producing no change in a 0% open rate points to a broken pixel or inbox non-placement rather than copy. Delivered has since grown from 88 to 96 and opens are *still* exactly zero. A functioning cold campaign to a US SMB list would show double-digit opens from Apple Mail privacy pre-fetch and security-scanner bots alone. This is un-interpretable-as-behavior and must be resolved first. Estimated impact: **high** — gates all engagement analysis.
2. **Spam-block rate still well above alarm** — evidence: 2 spam-blocked ÷ 100 attempted (96 delivered + 2 bounced + 2 spam-blocked) = **2.0%** (alarm >0.3%). Directional at this n, and the *count* is unchanged from both prior reports — so it is decaying as a rate, not growing. But 2.0% remains 6× the threshold and, paired with issue #1, keeps a placement/reputation problem live as the leading hypothesis. Estimated impact: **high** if the zero-opens and spam-placement share a root cause.
3. **Bounce rate right at the alarm line, but decaying** — evidence: 2 bounced ÷ 100 attempted = **2.0%** (alarm >2%). Same 2 bounces as the last two reports — no new bounces across the additional sends — so this is trending down, not up. Estimated impact: **medium**, and improving.
4. **Steps 2–3 still under-sent; no variant read possible** — evidence: step 2 has 27 delivered (up from 3), step 3 has 0 delivered (`scheduled: "loading"`). Single variant per step, all far below the ~150–200/variant needed to call anything. And because opens/replies are zero everywhere, even the growing step-2 volume tells us nothing yet. Estimated impact: **medium** (blocks step-level and copy-on-data analysis).

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate | 2.0% (2/100 attempted) | <2% | (95%+ delivery) | 🔴 at line, decaying (count flat, denom grew) |
| Spam-block rate | 2.0% (2/100 attempted) | <0.3% | — | 🔴 6× threshold; count unchanged — directional at this n |
| Open rate | 0% (0/96 delivered) | 30–50% | 30% | 🔴 anomalous — almost certainly tracking/placement, not copy |
| Reply rate | 0% (0/96 delivered) | 1–3% | 2% | ⚪ gated by opens / n small |
| Unsubscribe rate | 0% (0/96) | <1% | — | ⚪ n too small |
| Meetings booked / 100 delivered | 0 (0/96) | ~1 | 1 | ⚪ gated |

No "delivery rate" row by design: only 100 of 110 contacts have been attempted because sending is intentionally throttled (~60/day). A delivered-over-scheduled figure would misrepresent pacing as failure. Bounce and spam-block are the deliverability signals here.

## Funnel
Delivered **96** → Opened **0 (0%)** → Replied **0 (0%)**.

The nominal biggest leak is the open stage, but as last report noted, the *shape* is the real signal, and it is now stronger. Zero opens on 96 delivered — sustained through a subject-line change and a near-doubling of volume since the first report — is not consistent with "weak subject lines." Even a bad cold campaign leaks opens from privacy pre-fetch and bots. A true flat zero at this n points to the open pixel not being recorded or mail not reaching inboxes. **The funnel remains un-interpretable until open tracking and inbox placement are confirmed.** You cannot read subject quality — or anything downstream — off a tracking artifact.

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 | "missed calls?" | 95 | 0 | 0 | Only step with real volume. Two subjects tried, 0 opens both times — chase tracking/placement, not copy. Absorbed all 4 deliverability events (2 bounce, 2 spam). |
| 2 | (empty / threads as reply) | 27 | 0 | 0 | Now has some volume (up from 3), but zero opens make it unreadable. Not yet near ~150–200 for any conclusion. |
| 3 | (empty / threads as reply) | 0 | 0 | 0 | Not yet sent (`scheduled: "loading"`). No data. |

Single variant per step — no A/B comparison exists, and n is nowhere near a callable sample anyway. No step can be labeled dead weight; steps 2–3 have barely run.

**Counter inconsistency, unchanged flag:** the per-step `scheduled` fields are internally incoherent — step 1 shows `scheduled: 9` but `delivered: 95`; step 2 shows `scheduled: 74` but `delivered: 27`. Last report saw a similar mismatch (step 1 `scheduled: 62` vs `delivered: 87`). This persistent contradiction suggests the summary counters may be mid-refresh or the `scheduled` field is being reused as a live queue counter, not a cumulative total. It doesn't change the conclusion (opens are zero regardless), but don't trust the `scheduled` numbers.

## Copy-to-audience fit
The copy is unchanged since last report and remains one of the stronger parts of this campaign; the zero-engagement problem is almost certainly not a copy problem. Briefly re-confirming alignment (nothing new to add on data because opens are still zero):

- **Subject leads on pain, tersely.** "missed calls?" maps to brief pain points #1 and #4 (missed calls in the field → lost revenue); short, lowercase, defensible cold register. Actual performance unknowable from this data.
- **Body opens on the stated pain in the audience's words.** "When your crew is out on a job, what happens to a new customer call?" — pain point #1 stated plainly. Good fit.
- **Objection handling matches the brief.** Step 2 tackles "hiring an in-house receptionist feels like the safer move" with the scale/cost answer — nearly verbatim the brief's stated objection and prescribed response.
- **Tone matches.** Warm, plain, non-corporate. This is the relatable small-business-owner register the brief calls for.
- **Constraints respected.** No em dashes; scope stays inside stated services ("answers as your office and books jobs right in your CRM"); no implication of full-time employment.
- **CTA is deliberately softer than the brief's goal.** Brief's core CTA is "Schedule a call" (Calendly); sequence uses reply micro-commitments ("reply 'Plan'" / "reply 'yes'"). Lower friction is defensible, but the Calendly link is never surfaced, so every reply requires manual follow-up to become a booked meeting.
- **Trust ammunition still idle.** Named testimonials, CRM integrations (Jobber/Service Autopilot/YardBook), woman/minority-owned — none appears in the sequence. Not a defect, but unused.

## Trend vs. 2026-09-21
- **Opens: 0 → 0** (delivered 88 → 96). The prior report predicted a subject swap wouldn't move a broken pixel; that prediction held, and the added volume strengthens the tracking/placement hypothesis. **No change; the gate is not cleared.**
- **Bounce rate: 2.17% → 2.0%** (count flat at 2, denominator grew). Decaying, as predicted.
- **Spam-block rate: 2.17% → 2.0%** (count flat at 2). Decaying, but still far over alarm.
- **Step 2 volume: 3 → 27 delivered.** More data accumulating, but still zero engagement and still sub-threshold for any read.
- **Net:** nothing that was flagged as the #1 blocker last week has been resolved. The campaign is accumulating sends into a funnel that cannot yet be measured.

## Open questions
- **Is open tracking actually enabled on this sequence?** A true 0/96 sustained across a subject change and two weeks is more consistent with a disabled/broken pixel than real behavior. Verify in Apollo before any subject-line conclusion. **Still the top thing to confirm — unchanged from last week.**
- **Where are messages landing?** Run an inbox-placement / seed test on the sending domain. Zero opens plus a spam-block rate 6× alarm together hint at a placement/reputation issue the API cannot confirm.
- **Why do the per-step `scheduled` counters contradict `delivered` (step 1: 9 vs 95; step 2: 74 vs 27)?** Reconcile in Apollo; the recurring inconsistency suggests the counters may be mid-refresh or semantically misused.
- **Reply sentiment is moot now (0 replies), but note for later:** Apollo's reply count includes angry/negative replies. Once replies exist, spot-check them by hand before treating reply rate as positive interest.
- **Re-evaluate once ≥150–200 are delivered per step AND open tracking is confirmed working.** Until the gate clears, more volume just produces more un-interpretable zeros.

## A/B test plan

**Hypothesis:** Once open tracking is confirmed working and inbox placement is verified, changing the subject from a two-word question to a plain first-name internal-memo style will lift open rate, because a personalized, non-marketing subject reads as a real person and clears filters better for SMB owners.
**Variant A:** missed calls?
**Variant B:** {{contact.first_name}}, quick question about your calls
**Success metric:** Open rate, called at >=150 delivered per variant. If relative difference <20%, keep the shorter 'missed calls?' as the simpler control.
**Decision rule:** Do NOT start this test until open tracking is verified live via a seed/self-send and inbox placement is confirmed out of spam. Running a subject test against a broken pixel or spam placement will produce two more uninterpretable zeros. Hold body copy, send time, and volume constant during the test.

## Manual changes (targeting / timing / list)

- FIRST: verify open tracking is actually enabled on this sequence in Apollo. Send a test email to your own seed inboxes (Gmail, Outlook, Yahoo) and confirm the open pixel registers. A sustained 0/96 across a subject change is far more consistent with a disabled/broken pixel than real behavior.
- Run an inbox-placement / seed test (e.g. GlockApps or manual seed accounts across Gmail/Outlook/Yahoo) on the sending domain to see whether mail is landing in spam. Zero opens plus a spam-block rate 6x alarm together point to a placement/reputation issue the API cannot confirm.
- Remove all raw URLs and bracketed placeholders from every step; route CTAs through reply-based micro-commitments while reputation is in question. Bare links in cold email hurt placement.
- Throttle daily volume down from 60 to ~30/day on this domain until placement is confirmed clean, then ramp back up. Continue running list verification through Apollo to hold bounce count flat.
- Reconcile the contradictory per-step 'scheduled' vs 'delivered' counters in Apollo (step 1: 9 vs 95; step 2: 74 vs 27) to confirm the sequence is pacing and threading correctly and not mis-sending.
- Once tracking is fixed, confirm the sending domain has SPF, DKIM, and DMARC properly aligned, since a reputation/authentication gap is the leading root-cause hypothesis for both the zero opens and the elevated spam-block rate.

## Next review

Re-evaluate after open tracking is confirmed working AND at least 150-200 emails are delivered per step post-fix. Do not judge copy, subjects, or reply rate until the funnel produces non-zero opens; more volume before the tracking/placement gate clears only manufactures more uninterpretable zeros. Watch first for opens moving off zero (proves the gate cleared), then spam-block rate returning under 0.3%, then reply rate.

---

# 9/3/26 Test Sequence (6a99ac201d11ff001447f137)

_Brief used: none_

**Changes applied to Apollo automatically: 0**

## Recommended changes

This is not a live campaign but a test sequence that has been frozen for four consecutive weekly pulls (3 delivered, 1 bounced, 0 opens/replies since 9/3) with placeholder "Test Email" content. No campaign brief exists, so there is no offer, audience, or tone to write real copy against — inventing one would be fabrication. The only meaningful actions are operational: confirm whether the sequence is misconfigured or abandoned, load real contacts, supply a brief, and verify the list before any copy work begins.

## Evaluation

# Campaign Evaluation — 9/3/26 Test Sequence — 2026-09-28

## Verdict
This remains a test sequence, not a live campaign — the subject is literally "Test Email" and the body reads "This email has been sent as a test for Apollo sending." The figures are byte-for-byte identical to the last three evaluations (3 delivered, 1 bounced, 0 opened, 0 replied, 0 scheduled), so for the **fourth consecutive week** there is nothing new to diagnose and nowhere near the volume to interpret any rate. Fixing this is worth nothing until real copy and real send volume exist; the single actionable finding is that the sequence has been frozen for three straight weeks and should be treated as misconfigured or abandoned until someone confirms otherwise.

## Prioritized issues
1. **Sequence frozen for four consecutive pulls** — evidence: figures unchanged across 2026-09-07, 09-14, 09-21, and now 09-28 (delivered 3, bounced 1, opened 0, replied 0, `unique_scheduled: 0`). Despite `active: true`, nothing has sent in three full weeks. — estimated impact: high (blocks all analysis)
2. **Sample size is effectively zero** — evidence: 4 total attempted sends across the entire sequence lifetime. No engagement rate is statistically interpretable at this n. — estimated impact: high
3. **Still placeholder/test content, not campaign copy** — evidence: subject "Test Email"; body is a receipt-confirmation message with no offer, no pain point, and a sender-serving CTA ("reply to confirm receipt"). Nothing to optimize. — estimated impact: high
4. **One bounce out of four attempts** — evidence: `unique_bounced: 1` against 4 attempted = nominal 25%, but a single bad address produces that at n=4. Not a reliable signal. — estimated impact: low
5. **No campaign brief supplied (fourth time)** — evidence: brief section blank again. Copy-to-audience fit and target-vs-actual comparisons cannot be performed. — estimated impact: medium

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

## Open questions
- **Why has nothing sent in three weeks?** The sequence is `active: true` but `unique_scheduled: 0` and volume is unchanged since 9/7. This is now a persistent, month-long state — not a one-week anomaly. Someone should verify in Apollo whether real contacts have been loaded and whether sending is paused, throttled, complete, or silently misconfigured. Re-pull only once ≥150–200 emails per variant have been delivered before reading any engagement metric.
- **Was the single bounce hard or soft, and was that address a known typo/bad?** Noise at n=4, but confirm list verification is in place before scaling.
- **Is a campaign brief available elsewhere?** Without product/offer/audience/target metrics, copy-to-audience fit and target comparisons are impossible — supply one before the next evaluation.
- **Reply sentiment** is not exposed by the Apollo API; once real replies arrive, spot-check them manually (angry replies count toward reply rate too).

## A/B test plan

**Hypothesis:** No A/B test is warranted. Testing requires ~150-200 delivered emails per variant; this sequence has 3 delivered total across its entire lifetime, so any result would be pure noise and attribution would be meaningless.
**Variant A:** N/A — insufficient volume and no live copy to test.
**Variant B:** N/A — insufficient volume and no live copy to test.
**Success metric:** None applicable until real send volume exists (≥150 delivered per variant).
**Decision rule:** Do not run any test until the sequence is delivering real volume to a verified list against a defined brief.

## Manual changes (targeting / timing / list)

- Confirm in Apollo why nothing has sent in 3+ weeks despite active:true — check whether the sequence is paused, throttled, drained, or silently misconfigured (unique_scheduled is 0).
- Load real, verified contacts into the sequence, or archive/deactivate it if it was only ever a deliverability smoke-test so it stops appearing in evaluations.
- Run the recipient list through email verification (e.g., Apollo's built-in verification or a tool like NeverBounce) before scaling — the single bounce at n=4 is noise but list hygiene must be in place before real sends.
- Supply a campaign brief (product, offer, target persona, pain points, tone, must-not-say constraints, target metrics) — copy-to-audience fit and real rewrites are impossible without it and this is the fourth consecutive evaluation blocked by its absence.
- Replace the placeholder subject 'Test Email' and receipt-confirmation body with real outreach copy ONLY after a brief exists — do not go live with the current test artifact.

## Next review

Do not re-run the evaluation on a schedule while the sequence is frozen. Re-pull only after (a) a campaign brief is supplied AND (b) at least 150-200 emails have been delivered to real, verified contacts. At that point, watch bounce rate first (deliverability gate, target <2%), then open rate, then reply rate. Until real volume exists, the correct next action is an operational check in Apollo, not another metrics read.

---
