# Campaign performance report — 2026-09-14

# CB Email Campaign Start 9/9 (6aa060e17af83e00143f470d)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 1**

## Recommended changes

The campaign is only five days old with ~52 attempts and shows an anomalous flat 0 opens on 48 delivered plus red bounce (3.8%) and spam-block (3.8%) signals, so the primary problem is almost certainly deliverability or broken open-tracking, not copy. Per the evaluation, the copy is actually one of the stronger elements (on-pain hook, on-brief objection handling, right tone, constraints respected), so copy changes are held to a minimum until inbox placement and tracking are verified. The one copy lever worth preparing is a subject-line A/B for step 1 to run once deliverability is confirmed clean, plus surfacing unused trust assets in later steps.

### Change 1 — step 1 — applied automatically (PUT /emailer_templates/6aa060e17af83e00143f470f)

**Why:** Copy is strong per the evaluation, so this is a light touch: a shorter, lowercase-casual subject to test against the current one (the brief's stated concern is opens), and one added line naming the exact verticals Call Boss already serves to put the brief's unused testimonial/trust ammunition to work. This should only ship after deliverability/tracking is confirmed so results are readable.

**Subject before:** who's answering your phones?
**Subject after:** missed calls?

**New body:**
```
Hi {{contact.first_name}},

When your crew is out on a job, what happens to a new customer call? Voicemail, a busy line, or nobody at all?

Most owners we work with quietly lose good leads that way, because the caller just tries the next company on the list.

Call Boss is a US based team that answers as your office and books jobs right in your CRM, without you hiring in house. We already do this for lawn care, pest control, and irrigation companies.

Want a quick look at how many calls {{account.name}} might be missing, plus a simple way to catch them?

Just reply "Plan" and I'll send it over. No pitch, just a straightforward breakdown.
```

## Evaluation

# Campaign Evaluation — CB Email Campaign Start 9/9 — 2026-09-14

## Verdict
This campaign is roughly five days old and has only made ~52 attempted sends, so almost nothing here is statistically conclusive — but two early signals are worth stopping on. First, both deliverability alarms (bounce and spam-block) are tripped on the small sample. Second, and more striking, **0 opens across 48 delivered emails** is not a normal "slow start" number; even bot/Apple-Mail inflation usually manufactures *some* opens, so this points to either broken open tracking or systematic spam placement. Until deliverability is confirmed clean, every engagement number below is unreliable and no conclusion about copy can be drawn from the metrics.

## Prioritized issues
1. **Zero opens on 48 delivered** — evidence: `unique_opened: 0`, `open_rate_pct: 0` with 48 delivered — a true 0% is anomalous for cold email and suggests either open-tracking is disabled/misfiring or messages are landing in spam. Estimated impact: **high** (this is the gate on all other engagement analysis).
2. **Spam-block rate above alarm** — evidence: 2 spam-blocked ÷ 52 attempted = **3.8%** (alarm >0.3%). On n=52 this is directional, not proven, but combined with issue #1 it reinforces a possible reputation/placement problem. Estimated impact: **high** if real.
3. **Bounce rate above alarm** — evidence: 2 bounced ÷ 52 attempted = **3.8%** (alarm >2%). Again fragile at this n — one bounce swings it ~2 points — but worth watching as volume grows. Estimated impact: **medium**.
4. **Campaign is too young / under-sent to evaluate steps or copy on data** — evidence: only step 1 has meaningful sends (49 delivered); steps 2 and 3 show `loading`/0. Estimated impact: **medium** (blocks step-level and variant analysis entirely).

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate | 3.8% (2/52 attempted) | <2% | (95%+ delivery) | 🔴 |
| Spam-block rate | 3.8% (2/52 attempted) | <0.3% | — | 🔴 |
| Open rate | 0% (0/48 delivered) | 30–50% | 30% | 🔴 |
| Reply rate | 0% (0/48 delivered) | 1–3% | 2% | ⚪ n too small |
| Unsubscribe rate | 0% (0/48) | <1% | — | ⚪ n too small |
| Meetings booked / 100 delivered | 0 (0/48) | ~1 | 1 | ⚪ n too small |

Note: no "delivery rate" row by design — only 52 of 110 contacts have been attempted because sending is intentionally throttled (~60/day), so a delivered-over-scheduled figure would misrepresent pacing as failure. Bounce and spam-block are the deliverability signals, and both are red — with the caveat that n=52 makes them directional.

## Funnel
Delivered **48** → Opened **0 (0%)** → Replied **0 (0%)**.

The biggest leak is the **open stage**, but the shape of it (an exact 0, not a low-but-nonzero number) is the tell. A weak-but-functioning cold campaign to this list would still show double-digit opens from Apple Mail privacy pre-fetch and security scanners alone. A flat zero more often means the open pixel isn't being recorded or the mail isn't reaching the inbox at all. Treat the funnel as un-interpretable until that's resolved — you cannot judge subject-line performance off a tracking artifact.

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 | "who's answering your phones?" | 49 | 0 | 0 | Only step with real volume; 0 opens is the anomaly to chase, not proof the copy failed |
| 2 | (empty / threads as reply) | 0 | 0 | 0 | Not yet sent (`scheduled: loading`) — no data |
| 3 | (empty / threads as reply) | 0 | 0 | 0 | Not yet sent — no data |

Single variant per step, so there is no A/B comparison to make, and even if there were, n is far below the ~150–200 delivered/variant needed to call a winner. No step can be labeled "dead weight" yet — steps 2 and 3 simply haven't run.

## Copy-to-audience fit
The copy itself is, on a read, one of the stronger parts of this campaign — the metrics problem above is almost certainly not a copy problem:

- **Leads with the stated pain point.** Step 1 opens on "When your crew is out on a job, what happens to a new customer call?" — this is brief pain point #1 (missed calls while owner/staff is in the field) stated in the audience's own terms. Good fit.
- **Objection handling matches the brief.** Step 2 tackles "hiring an in-house receptionist feels like the safer move" and answers with the scale/cost argument — this is almost verbatim the brief's stated objection ("makes more sense to bring it in house") and its prescribed answer ("we scale a lot better than hiring in house... at a better cost"). Well aligned.
- **Tone matches.** Warm, plain, non-corporate ("No pitch, just a straightforward breakdown," "no worries and I'll close this out"). This is the relatable small-business-owner register the brief calls for.
- **Constraints respected.** No em dashes anywhere. No overstated scope — it says "answers as your office and books jobs right in your CRM," which stays inside the stated service set and doesn't imply full-time employment of client staff.
- **CTA is softer than the brief's stated goal, deliberately.** The brief's core CTA is "Schedule a call" (Calendly), but the sequence uses a reply-based micro-commitment ("reply 'Plan'"). This is a defensible cold-email choice — lower friction than asking for a calendar booking cold — but flag it so it's a conscious decision: the emails never surface the Calendly link or a call, so the path from "Plan" reply to booked meeting depends entirely on manual follow-up.
- **Unused assets.** The brief lists heavy proof (named testimonials across lawn care/pest/irrigation, CRM integrations with Jobber/Service Autopilot/YardBook, woman/minority-owned). None of it appears in the sequence. Not a defect, but worth noting the trust ammunition is sitting unused.

## Open questions
- **Is open tracking actually enabled on this sequence?** A true 0/48 is more consistent with a disabled/broken pixel than with real behavior. Verify in Apollo before concluding the subject line is failing.
- **Where are messages landing?** Run an inbox-placement/seed test on the sending domain. The bounce + spam-block signals (both ~3.8%, small n) plus zero opens together hint at a reputation or placement issue that the API can't confirm.
- **Reply sentiment is moot right now (0 replies), but note for later:** Apollo's reply count includes angry and negative replies. Once replies exist, spot-check them by hand before treating reply rate as positive interest.
- **What is the true list size vs. what's been sent?** 110 scheduled with 60/day throttling means this campaign has barely begun — re-evaluate once at least ~150–200 have been delivered per step so the funnel and any variant reads are meaningful.

## A/B test plan

**Hypothesis:** Changing the step 1 subject from a full question ('who's answering your phones?') to a 2-word internal-memo style ('missed calls?') will lift open rate, because short lowercase subjects typically outperform complete sentences in cold outreach and read less like marketing. NOTE: this test is only valid once open tracking is verified and inbox placement is confirmed clean, otherwise a 0-open artifact will make both variants look identical.
**Variant A:** who's answering your phones?
**Variant B:** missed calls?
**Success metric:** Open rate, secondarily reply rate. Call a winner at >=150 delivered per variant.
**Decision rule:** If one variant beats the other by >=20% relative open rate at >=150 delivered each, adopt it; if the gap is <20%, keep Variant B (shorter/simpler). Do not change body copy, send time, sender name, or volume while the test runs.

## Manual changes (targeting / timing / list)

- FIRST: verify open tracking is actually enabled on this sequence in Apollo. A true 0/48 is more consistent with a disabled or misfiring open pixel than real behavior, so confirm this before drawing any subject-line conclusions.
- Run an inbox-placement/seed test (e.g., GlockApps or manual seed inboxes across Gmail/Outlook) on the sending domain to confirm whether messages are landing in inbox vs spam, given the paired spam-block and zero-open signals.
- Check sending domain reputation: confirm SPF, DKIM, and DMARC are all passing and that the domain/IP warm-up is genuinely complete before pushing volume higher.
- Tighten list verification before the next batch: re-run the remaining ~58 unsent contacts through Apollo/bulk email verification to drive the bounce rate back under 2% before sending more.
- Hold daily volume at 60/day (do not increase) until bounce and spam-block are back under threshold on a larger sample; increasing volume now would amplify a reputation problem.
- Consider disabling link/open tracking or using a tracking domain aligned to the sending domain if the seed test shows tracking pixels are hurting placement.
- Confirm the manual path from a 'Plan'/'yes' reply to a booked Calendly meeting is staffed and fast, since the sequence intentionally uses a reply micro-commitment and never surfaces the Calendly link.

## Next review

Re-run the evaluation once at least 150-200 emails have been delivered on step 1 AND deliverability/tracking issues are confirmed resolved (roughly 1-2 weeks at 60/day after fixes land). Watch for: open rate climbing off zero (proves tracking fixed), bounce back under 2%, spam-block under 0.3%, and the first readable reply-rate signal. Do not judge subject-line or copy performance until opens are non-zero and placement is confirmed.

---

# 9/3/26 Test Sequence (6a99ac201d11ff001447f137)

_Brief used: none_

**Changes applied to Apollo automatically: 0**

## Recommended changes

This remains a test sequence with placeholder content ('Test Email' / 'sent as a test for Apollo sending'), no campaign brief, and only 4 attempted sends with zero engagement — there is nothing statistically or substantively to optimize yet. The blocking problems are operational, not creative: the sequence appears stalled (unique_scheduled: 0, no sends in a week despite active: true), no real audience or offer is loaded, and no brief exists to write audience-relevant copy against. Until real campaign copy, a brief, and meaningful volume (≥150–200 delivered per variant) exist, copy rewrites would be fabrication, so the recommended work is confined to list, sending, and setup fixes.

## Evaluation

# Campaign Evaluation — 9/3/26 Test Sequence — 2026-09-14

## Verdict
This is still a test sequence, not a live campaign — the subject is "Test Email" and the body literally states "This email has been sent as a test for Apollo sending." One week after the prior evaluation, the numbers have not moved at all (3 delivered, 1 bounced, 0 opens, 0 replies), so there is nothing new to diagnose and still far too little volume to interpret any rate. Fixing this is worth nothing until real campaign copy and real send volume exist — the only actionable takeaway is that sending appears stalled or complete at n=4 with no engagement mechanism to evaluate.

## Prioritized issues
1. **No progress since last pull; sequence appears stalled or idle** — evidence: identical figures to the 2026-09-07 report (delivered 3, bounced 1, opened 0, replied 0), and `unique_scheduled` has dropped from a draining queue to `0`. Nothing was sent in the intervening week despite `active: true`. — estimated impact: high (blocks all analysis)
2. **Sample size is effectively zero for analysis** — evidence: 4 total attempted sends. No open, reply, bounce, or unsubscribe rate is statistically interpretable at this n. — estimated impact: high
3. **Still placeholder/test content, not campaign copy** — evidence: subject "Test Email"; body is a send-confirmation message with no offer, pain point, or recipient-facing CTA. There is nothing to optimize. — estimated impact: high
4. **One bounce out of four attempts** — evidence: `unique_bounced: 1` against 4 attempted = nominal 25%, but a single bad address produces that figure at n=4. Not a reliable signal; watch once real volume lands. — estimated impact: low
5. **No campaign brief supplied** — evidence: brief section blank. Copy-to-audience fit and target-vs-actual comparisons cannot be performed. — estimated impact: medium

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
- The funnel remains undiagnosable. With 3 delivered emails, 0 opens is equally consistent with a broken pipeline, open-tracking not firing, or plain small-number variance — the data cannot distinguish these. There is no "biggest leak" to call out because no stage has enough volume for drop-off to mean anything.

## Step-by-step
| Step | Variant | Scheduled | Delivered | Bounced | Opened | Replied | Verdict |
|---|---|---|---|---|---|---|---|
| 1 (auto_email) | "Test Email" | 0 | 3 | 1 | 0 | 0 | Test send only. Not evaluable. |

- Single step, single variant — no A/B comparison possible and none should be attempted at this volume.
- Unlike last week, per-variant stats have finished computing (delivered 3, bounced 1 now resolved, no longer "loading"), and `scheduled` is now 0 — the queue has fully drained with no new sends added. This confirms the sequence is not actively delivering.

## Copy-to-audience fit
- **Cannot be scored — the copy is a test artifact, and no brief exists.** Subject "Test Email" and body ("This email has been sent as a test for Apollo sending. Please reply to this email to confirm it was received.") are functional check messages, not outreach.
- Against generic cold-email principles only: no value proposition, no personalization, no audience pain point, and a CTA that serves the sender ("reply to confirm receipt"), not the recipient. All expected for a test — flagged so it is not mistaken for live copy.

## Open questions
- **Why has nothing sent in a week?** The sequence is `active: true` but `unique_scheduled: 0` and volume is unchanged since 9/7. Confirm in Apollo whether real contacts have been loaded and whether sending is paused, throttled, or complete. Re-pull only once ≥150–200 emails per variant have been delivered before reading any engagement metric.
- **Was the single bounce hard or soft, and was that address a known typo/bad?** Noise at n=4, but confirm list verification is in place before scaling.
- **Is a campaign brief available elsewhere?** Without product/offer/audience/target metrics, copy-to-audience fit and target comparisons are impossible — supply one before the next evaluation.
- **Reply sentiment** is not exposed by the Apollo API; once real replies arrive, spot-check them manually (angry replies count toward reply rate too).

## A/B test plan

**Hypothesis:** No valid A/B test can be defined yet — with 3 delivered emails, 0 opens, and placeholder test copy, any comparison would be pure noise. Once real campaign copy and a brief exist, the first test should isolate the subject line, because subject line is the single largest driver of open rate and opens are currently unmeasurable.
**Variant A:** (Deferred) Short, lowercase, internal-memo style subject drawn from the brief's primary pain point once supplied.
**Variant B:** (Deferred) One-to-three word curiosity subject drawn from the brief's primary pain point once supplied.
**Success metric:** Open rate as the primary metric, with reply rate as the tiebreaker. Call a winner only at ≥150 delivered per variant; if relative difference <20%, keep the simpler subject.
**Decision rule:** Do not run any test until real copy is live and volume is flowing. Do not change body, send time, or targeting while a subject-line test is running so open-rate attribution stays clean.

## Manual changes (targeting / timing / list)

- Confirm why nothing has sent in a week: sequence is active:true but unique_scheduled is 0. Verify real contacts are loaded, check whether sending is paused/throttled/complete, and restart the queue once real copy is in place.
- Replace the placeholder test template ('Test Email' subject, 'sent as a test for Apollo sending' body) with real campaign copy — but do not draft that copy until a campaign brief (product, offer, target audience, pain points, tone, must-not-say constraints) is supplied.
- Obtain and attach the campaign brief before the next evaluation; without it, copy-to-audience fit and target-vs-actual comparisons are impossible.
- Run the contact list through email verification (e.g., Apollo's verifier or a third-party tool) before scaling — 1 bounce in 4 attempts is noise at this n, but verify list hygiene is in place before real volume lands.
- Confirm whether the single bounce was hard or soft and whether that address was a known typo/bad record; remove any invalid addresses before scaling send volume.
- Set a ramp plan so the sequence delivers enough volume (≥150–200 per variant) for metrics to be interpretable, rather than trickling 3–4 sends.

## Next review

Re-run the evaluation only after real campaign copy is live AND at least 150–200 emails per variant have been delivered — not on a fixed date, since the queue is currently stalled. At that point watch first for deliverability (bounce and spam-block rates against real volume), then open rate to validate subject lines, then reply rate. Do not attempt to read any engagement metric while total delivered remains in the single digits.

---
