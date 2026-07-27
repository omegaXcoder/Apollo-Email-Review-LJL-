# Campaign performance report — 2026-07-27

# (7/22/26) CB HVAC Warm Leads (6a611b02efd8220010b65cc8)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 4**

## Evaluation

# Campaign Evaluation — (7/22/26) CB HVAC Warm Leads — 2026-07-27

## Verdict
This campaign is **deliverability-broken and cannot be judged on engagement yet**. Of ~1,008 emails actually attempted, roughly **11.5% bounced** and opens are effectively **zero (2 of 892 delivered, 0.22%)** — a number so far below even bot/Apple-Mail-inflated norms that it signals either disabled open tracking or near-total spam-folder placement, not a copy problem. Until the list quality and inbox-placement issues are fixed, the brief's stated hypothesis ("our messaging isn't matching, so not enough people open") is unprovable — the emails aren't reliably reaching inboxes in the first place. Fixing deliverability is the entire game here; nothing downstream is trustworthy.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Delivery rate (of scheduled) | 33.5% (892/2661) | — | 95%+ | 🔴 misleading — see note |
| Delivery rate (of *attempted*) | ~88.5% (892/1008) | >97% | 95%+ | 🔴 |
| Bounce rate (of attempted) | ~11.5% (116/1008) | alarm >2% | — | 🔴 |
| Bounce rate (of scheduled, as API reports) | 4.36% | alarm >2% | — | 🔴 |
| Spam-block rate (of attempted) | ~1.4% (14/1008) | alarm >0.3% | — | 🔴 |
| Open rate | 0.22% (2/892) | 30–50% typical | 30% | 🔴 |
| Reply rate | 0.11% (1/892) | 1–3% typical | 2% | 🔴 |
| Click rate | 0% | — | — | ⚪ no links used |
| Unsubscribe rate | 0.11% (1/892) | >1% is a problem | — | 🟢 (but n too small) |
| Meetings / 100 delivered | ~0 | — | 1 | 🔴 |

**Note on delivery rate:** The API's 33.52% is `delivered / scheduled`, but only ~1,008 of 2,661 scheduled emails have actually been *attempted* (892 delivered + 116 bounced); the remaining ~1,653 are still queued (steps 2–4 have barely started — this campaign is 5 days old at 60/day). The honest delivery figure is **~88.5% of attempted**, and the honest bounce figure is **~11.5% of attempted** — both failing.

## Funnel
```
Scheduled:   2,661   (only ~1,008 actually sent so far — campaign is early)
Attempted:   ~1,008
Delivered:     892   (~88.5% of attempted — 116 bounced, 14 spam-blocked)
Opened:          2   (0.22% of delivered)   ← CATASTROPHIC LEAK
Replied:         1   (0.11% of delivered)
Clicked:         0   (no links)
```

**Two leaks, both upstream of copy:**
1. **Attempted → Delivered:** ~11.5% bounce + ~1.4% spam-block. A bounce rate this high on a list the brief says was "verified/cleaned through Apollo" means the list is stale, unverified, or was imported without validation. This alone will keep sending domains from staying warm.
2. **Delivered → Opened (the biggest leak):** 0.22% open is not a "weak subject line" number — it is a *structural* number. Even garbage cold campaigns clear 15–25% because of Apple Mail Privacy Protection and security-scanner bots auto-firing the tracking pixel. Two opens across 892 delivered means one of two things: **(a) open tracking is disabled/misconfigured**, or **(b)** the mail is landing in spam where the pixel never loads. Either way, **opens are uninterpretable and so is any subject-line judgment.**

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 | "You're losing HVAC jobs to voicemail" | ~886 (bulk) | 0 reported | (the 1 reply likely here) | Only step with real volume; still 0 opens |
| 2 | "A little help for your busiest season" | 6 | 0 | 0 | n=6 — no signal |
| 3 | "Who's answering your phone right now?" | 0 | 0 | 0 | Not yet sent — no data |
| 4 | "Every missed call is a missed job" | 0 | 0 | 0 | Not yet sent — no data |

**There is nothing to compare.** Only Step 1 has meaningful volume; Steps 2–4 have effectively zero delivered. No variant testing exists (one variant per step). **Do not draw any per-step or A/B conclusion — the sample sizes are 6, 0, and 0.** The only interpretable fact is that Step 1 produced 0 tracked opens and 1 reply, which points back to the deliverability/tracking problem, not to the sequence design.

## Copy-to-audience fit
The copy itself is reasonably well-targeted — but I'm evaluating it in a vacuum because almost no one is receiving it. Observations against the brief:

- **🔴 Hard brief violation — em dashes everywhere.** The brief explicitly says *"Please don't use em dashes in your copy."* Every single email is built around em dashes (Step 1 alone has three; Steps 2, 3, 4 all use them). This is a direct, repeated violation of an explicit constraint.
- **🟡 Subject-line risk (unverifiable).** "You're losing HVAC jobs to voicemail" and "Every missed call is a missed job" are negative/loss-framed and read like classic pitch subjects — the kind spam filters and busy owners pattern-match to sales blasts. I *cannot* prove they hurt opens (opens are broken), but they're worth flagging once placement is fixed.
- **🟡 Proof-point mismatch.** Step 2 cites *"AZ Irrigation & Maintenance"* as the social proof inside a campaign titled and framed as **HVAC**. That's an irrigation company being used to vouch to HVAC owners. The brief lists irrigation as a valid vertical, but inside an HVAC-specific sequence a non-HVAC name weakens the "we work with people like you" claim.
- **🟢 Pain-point alignment is good.** "Phone rings while you're on a ladder," "techs on jobs, office staff stretched thin," "whoever picks up first wins the job" map cleanly to brief pain points #1, #4, and #6. Tone is warm and practical as the brief wants.
- **🟢 CTA/commitment fit.** "15-minute call" / "10 minutes" / "want me to send over how it works?" matches the brief's low-commitment "Schedule a call" goal and escalates appropriately. No pricing overstated, no full-time-employee implication — compliant with the "must not say" list on those points.
- **🟡 Audience-sophistication note.** The brief says this audience likely *knows* the answering-service category but not the full-service/CRM-integrated version. The copy leans entirely on "answer the phone" and never differentiates on CRM integration / back-office / 24/7 depth — the very things that separate Call Boss from the basic answering service they've "probably already tried." That's a positioning gap, but again, secondary to delivery.

## Prioritized issues
1. **List quality / bounce rate ~11.5% of attempted** — evidence: 116 bounced of 1,008 attempted; brief claims Apollo-cleaned but the number says otherwise — **estimated impact: HIGH.** This is degrading domain reputation with every send and is the root cause feeding into spam placement.
2. **Delivered→Opened at 0.22% — tracking broken or mass spam placement** — evidence: 2 opens / 892 delivered, an impossible number if the pixel were firing and mail were landing in inboxes — **estimated impact: HIGH.** Until resolved, every open-based and subject-line conclusion is invalid.
3. **Spam-block rate ~1.4% of attempted** — evidence: 14 spam-blocked / 1,008 — **estimated impact: HIGH.** Well over the 0.3% alarm; corroborates a reputation/placement problem, not a copy problem.
4. **Explicit brief violation: em dashes in all four emails** — evidence: direct comparison to the "must not say/do" constraint — **estimated impact: MED** (correctness/compliance; also mildly triggers "automated blast" pattern detection).
5. **HVAC campaign using a non-HVAC (irrigation) testimonial in Step 2** — evidence: "AZ Irrigation & Maintenance" in an HVAC-framed sequence — **estimated impact: LOW–MED**, and only matters once emails are actually being read.
6. **No differentiation from basic answering services** — evidence: copy sells "someone answers the phone," brief says audience already tried that and needs the CRM/back-office/24-7 upgrade story — **estimated impact: LOW** at current volume, MED once deliverability is fixed.

## Open questions
- **Is open tracking actually enabled on this sequence?** A 0.22% open rate on 892 delivered is more consistent with a disabled/broken tracking pixel than with real behavior. Confirm in Apollo settings before concluding the audience isn't opening.
- **Where are delivered emails landing — inbox or spam?** Apollo reports "delivered" for anything accepted by the receiving server, including the spam folder. Run seed-list / inbox-placement tests to confirm.
- **What is the source and age of this list, and was it run through Apollo's verification (not just import)?** An 11.5% bounce rate suggests it wasn't, or the data is stale.
- **Sentiment of the 1 reply.** Apollo's API does not expose reply sentiment — the single reply counts the same whether it's "let's talk" or "stop emailing me / unsubscribe." Spot-check the actual reply in Apollo before treating it as a positive.
- **Sending-domain health/warm-up status right now.** The brief says domains are "warmed up," but the bounce + spam-block pattern would rapidly un-warm them. Check current domain reputation (Google Postmaster / warm-up tool).

## Recommended changes

The campaign is deliverability-broken (roughly 11.5% bounce, 1.4% spam-block, and 0.22% opens that indicate spam placement or disabled tracking), so no copy conclusion is trustworthy yet and list/inbox fixes must come first. The copy changes below are limited to correcting the explicit brief violation (em dashes appear in all four emails), fixing an HVAC-mismatched testimonial, softening spam-pattern subject lines, and adding the CRM/back-office differentiation the brief says this audience needs. Expect the deliverability work to drive the real gains; the copy edits protect against pattern-detection and prepare the sequence to be judged fairly once mail reaches inboxes.

### Change 1 — step 1 — applied automatically (PUT /emailer_templates/6a611c941ef4520020195371)

**Why:** Removes all em dashes (hard brief violation), swaps the loss-framed pitch subject for a low-key internal-memo subject that pattern-matches less to spam, and adds the CRM/back-office differentiation the brief flags as the missing positioning against basic answering services.

**Subject before:** You're losing HVAC jobs to voicemail
**Subject after:** quick question

**New body:**
```
Hi {{contact.first_name}},

When a homeowner's AC dies on a 105 degree day and your phone rings while your crew is on a ladder, what happens? If it goes to voicemail, it usually goes to your competitor next.

Call Boss answers your calls live, 24/7, so every emergency job, new lead, and "are you available today?" call gets picked up, even nights, weekends, and when the whole crew is out on rooftops. Our US based team can also log the details straight into your CRM.

Worth 15 minutes to see what missed calls might be costing you?
```

### Change 2 — step 2 — applied automatically (PUT /emailer_templates/6a61219954821200144eb982)

**Why:** Removes em dashes and replaces the irrigation testimonial (AZ Irrigation & Maintenance) that mismatched an HVAC sequence; since the brief has no named HVAC customer, I substituted a concrete capability statement rather than fabricate one.

**Subject before:** A little help for your busiest season
**Subject after:** busy season

**New body:**
```
Hi {{contact.first_name}},

HVAC season doesn't really have an off switch. Calls come in early mornings, late nights, mid install, mid emergency. It's a lot for one team, or one office manager, to keep up with.

That's the exact stretch where Call Boss takes the phones off your plate. We answer live, book the appointment, and handle the follow up in your system, so nothing slips during your busiest weeks.

Want to hop on a quick call and see if it's a fit for your team?
```

### Change 3 — step 3 — applied automatically (PUT /emailer_templates/6a61219954821200144eb98b)

**Why:** Removes em dashes and adds the CRM/back-office/US-based-team differentiation so this step gives a new reason to reply rather than repeating the basic answering-service angle the audience has already tried.

**Subject before:** Who's answering your phone right now?
**Subject after:** whos picking up?

**New body:**
```
Hey {{contact.first_name}},

Random question: if a customer called your business right now, would someone actually pick up?

If the honest answer is "eh, maybe," that's normal in HVAC. Techs are on jobs, office staff is stretched thin, and the phone just rings out, or worse, goes to a robot.

Call Boss is more than message taking. Our US based assistants answer live, work inside your CRM, and handle scheduling and back office tasks, without the hiring headaches or long term contracts.

Want me to send over how it works?
```

### Change 4 — step 4 — applied automatically (PUT /emailer_templates/6a61219954821200144eb990)

**Why:** Removes em dashes, tightens copy, keeps the strong 'first to answer wins' angle as a distinct final hook, and adds a literal sender sign-off since the original body had a dangling 'Talk soon,' with no name.

**Subject before:** Every missed call is a missed job
**Subject after:** first to answer wins

**New body:**
```
{{contact.first_name}},

In HVAC, timing wins. A homeowner with a broken furnace in January isn't calling one contractor, they're calling three. Whoever picks up first usually gets the job.

When your team is in the field or slammed, those calls go to voicemail, and voicemail rarely calls back.

Call Boss answers 24/7 and logs every lead into your CRM so nothing gets lost. Happy to show you exactly how this looks for an HVAC business. Takes 10 minutes.

Talk soon,
The Call Boss team
```

## A/B test plan

**Hypothesis:** Once inbox placement is fixed, changing the Step 1 subject from a loss-framed pitch line to a short, curiosity-style line will raise open rate because busy owners and spam filters pattern-match short casual subjects as personal mail rather than a sales blast.
**Variant A:** Subject: quick question
**Variant B:** Subject: missing calls this week?
**Success metric:** Open rate (and secondarily reply rate) on Step 1, measured only after open tracking is confirmed working and seed tests show inbox placement.
**Decision rule:** Call a winner at 150+ delivered per variant; if the relative difference in open rate is under 20%, keep Variant A (the simpler line). Do not change body copy, send time, or from-name while the test runs so the subject is the only variable.

## Manual changes (targeting / timing / list)

- Confirm open tracking is actually enabled on this sequence in Apollo before drawing any subject-line conclusion; a 0.22% open rate on 892 delivered is more consistent with a broken pixel than real behavior.
- Run a seed-list / inbox-placement test (e.g., GlockApps or a manual seed set) to determine whether 'delivered' mail is landing in inbox vs spam, and check Google Postmaster Tools for current domain reputation.
- Pause sending and re-verify the entire list through a dedicated real-time verification tool (NeverBounce/ZeroBounce), not just Apollo import; an ~11.5% bounce rate means the list is stale or unvalidated. Remove all catch-all and risky addresses before resuming.
- Throttle daily volume down from 60 to ~20-25 per domain until bounce rate is under 2% and spam-block is under 0.3%, to let the sending domains recover reputation.
- Spot-check the sentiment of the single existing reply in Apollo to confirm whether it was interest or an opt-out/complaint.
- Segment truly HVAC-only contacts before resuming so the HVAC-specific framing matches the recipient's actual vertical.

## Next review

Re-run the evaluation after list re-verification and roughly 400-600 newly delivered emails on the recovered domains (about 2-3 weeks at throttled volume). Watch first for delivery >97% of attempted, bounce <2%, and spam-block <0.3%; only if those clear should you judge open rate (target 30%) and the Step 1 subject A/B test.

---

# (7/22/26) Cappsure Landscaping (Revised) (6a60d25e082465000f36b61f)

_Brief used: briefs/cappsure.md_

**Changes applied to Apollo automatically: 5**

## Evaluation

# Campaign Evaluation — (7/22/26) Cappsure Landscaping (Revised) — 2026-07-27

## Verdict
This evaluation is running against an incomplete data pull — most engagement counters (`scheduled`, `bounced`, `replied`, `spam_blocked`, delivery/reply rates) came back as `"loading"`, so the funnel below the delivery line cannot be trusted yet. What *can* be judged conclusively is the copy, and the copy is the biggest problem: it pitches a generic "CRM / scheduling / invoicing" product, not the GPS/geofence-verified multi-site accountability platform the brief describes — and it leads with the exact objection ("switching CRMs is hard") the brief warns this audience already has. Fixing the positioning is worth more than any deliverability tweak, because right now the message is aimed at a different product and a different buyer than the brief defines.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Delivery rate | N/A (720 delivered; scheduled/bounced still `loading`) | >97% | 95% | ⚪ unknown |
| Bounce rate | `loading` | <2% alarm | — | ⚪ unknown |
| Spam-block rate | `loading` | <0.3% alarm | — | ⚪ unknown |
| Open rate | 0% (0 / 720) | 30–50% typical | 30% | 🔴 (almost certainly a tracking artifact — see below) |
| Reply rate | `loading` | 1–3% typical | 2% | ⚪ unknown |
| Positive reply rate | Not exposed by API | — | 1.5% | ⚪ unknown |
| Click rate | 0% (0 / 720) | — | — | 🔴/⚪ (tracking) |
| Unsubscribe rate | 0% (0 / 720) | <1% | — | 🟢 (but low signal at this stage) |
| Meetings booked / 100 delivered | Not exposed by API | — | 1 | ⚪ unknown |

## Funnel
Scheduled (`loading`) → Delivered **720** → Opened **0 (0%)** → Replied (`loading`).

I cannot name the real biggest leak because the reply and bounce numbers haven't loaded. The one hard number below delivery — **0 opens across 720 delivered** — is not credible as a genuine engagement reading. Cold sends almost always register *some* opens purely from Apple Mail privacy pre-fetch and bot/security scanners. A flat zero across 720 delivered points to open tracking being **disabled or broken**, not to a real 0% open rate. Until that's confirmed, treat opens as unmeasured, not as "nobody opened."

Practical takeaway: the data layer needs to be fixed and re-pulled before any engagement-based judgment is valid. This is the gate, and it's currently closed.

## Step-by-step
Only Step 1 shows any delivery volume at the sequence level (720 delivered). Steps 2–5 report `delivered: 0` (Steps 3–5 also `scheduled: 0`), consistent with a campaign that's only 5 days old — later steps simply haven't fired at volume yet. So there is **no step-level reply attribution possible** and **no dead-weight step can be identified yet**.

| Step | Subject | Sends (delivered) | Opens | Replies | Verdict |
|---|---|---|---|---|---|
| 1 | "When your CRM does too much (and not enough)" | `loading` (seq total 720) | 0 | `loading` | Only step with volume; data incomplete |
| 2 | "How much time is scheduling costing you?" | 0 | 0 | 0 | Not yet sent at volume |
| 3 | "Is your CRM costing you money?" | 0 | 0 | 0 | Not yet sent at volume |
| 4 | "Too many tabs, not enough progress" | 0 | 0 | 0 | Not yet sent at volume |
| 5 | "Last note from Cappsure" | 0 | 0 | 0 | Not yet sent at volume |

**Variants:** one variant per step. There is no A/B test running, so there is nothing to compare and no winner to call. (For reference, you'd want ~150–200 delivered per variant before trusting a comparison; you don't have a second variant to begin with.)

## Copy-to-audience fit
This is where the data is complete, and the mismatches are severe and specific:

1. **Wrong product is being sold.** The brief's core value prop is *GPS/geofence-verified visibility and accountability across multi-site facilities* — knowing what work was done, where, and by whom. Not one of the five emails mentions GPS, geofencing, on-site verification, inspections, checklists, or multi-site oversight. Instead, every email pitches a **CRM with lead management, scheduling, estimating, and invoicing** (Step 1: "Cleaner, more intuitive lead management"; Step 3: "lead → estimate → quote"; Step 4: "Create a lead and move straight into an estimate"). This is a different product story than the brief defines.

2. **The copy leads with a stated objection.** The brief lists "moving from one CRM to another is too difficult" as a known objection. Steps 1 and 3 open by explicitly framing Cappsure as a CRM replacement ("does your CRM actually make your day easier"; "Is your CRM working for you?"). That leads with the friction, not the payoff.

3. **Pain points are barely touched.** The brief's top pains — no real-time proof vendors did the work, unverifiable on-site time, labor overbilling, asset location tracking. Step 3 grazes "track real crew hours on-site with built-in clock-in tools," which is the closest hit. Overbilling verification, vendor accountability, and multi-site visibility — the emotional core of the brief — are absent.

4. **Audience mismatch inside the sequence.** The brief's buyers are facilities/property managers and ops managers overseeing multi-site portfolios *plus* the vendors servicing them. The copy is written narrowly to a **landscaping business owner running crews and jobs** (crews, dispatch, customer rescheduling, job pricing). That fits one slice of the vendor segment and ignores the property/facilities decision-maker entirely. The sequence name ("Landscaping") suggests this is intentional targeting — but then the value prop should still be the accountability angle, not generic CRM features.

5. **Explicit brief constraints violated:**
   - **Em dashes.** The brief says plainly "don't use em dashes." Every email is full of them ("systems that are overly complex—filled with…", "takes that off your plate—", etc.).
   - **Named client.** The brief says avoid naming client logos/testimonials unless permission is confirmed. Steps 1 and 4 name "Little John's Lawns" directly. Confirm you have written permission before this keeps sending.

6. **What fits:** The CTA ("grab a time here" / 15-min demo) matches the brief's stated CTA and commitment level, and the tone is reasonably plain and non-jargon. Those are fine.

## Prioritized issues
1. **Data pull is incomplete — engagement is unmeasurable.** Evidence: `scheduled`, `bounced`, `replied`, `spam_blocked`, and all derived rates return `"loading"`; opens read a non-credible flat 0/720. Estimated impact: **high** — nothing downstream of delivery can be judged until this is re-pulled and open tracking is confirmed working.
2. **Copy sells the wrong product.** Evidence: 0 of 5 emails mention GPS/geofence/on-site verification/multi-site accountability — the brief's entire value prop — while all 5 pitch generic CRM/scheduling/invoicing. Estimated impact: **high** — this is the most likely explanation for the brief's own note that prior campaigns got zero positive replies.
3. **Copy leads with a known objection (CRM switching).** Evidence: Steps 1 and 3 open on the "your CRM" frame; brief lists CRM-migration difficulty as a top objection. Estimated impact: **medium-high**.
4. **Value prop doesn't hit the stated pain points.** Evidence: overbilling verification, vendor accountability, asset tracking, and "who did what where" are effectively absent. Estimated impact: **medium-high**.
5. **Brief constraints broken (em dashes throughout; named client "Little John's Lawns").** Evidence: direct rule violations in every email / Steps 1 and 4. Estimated impact: **medium** (compliance/deliverability/trust risk).
6. **No A/B variants.** Evidence: single variant per step. Estimated impact: **low-medium** — not a performance leak, but it means you'll learn nothing about what moves the needle.

## Open questions
- **Is open/click tracking actually enabled?** 0/720 opens is almost certainly a tracking or data-load artifact. Confirm in Apollo before treating open rate as real.
- **Re-pull the summary once counters finish loading** — delivery rate, bounce rate, spam-block rate, and reply rate are all needed to run the deliverability gate and the reply-truth read. None of them are available in this pull.
- **Reply sentiment.** Apollo's API does not expose positive vs. negative replies. Once replies load, spot-check the actual inbox — the reply-rate figure will include angry/unsubscribe-style replies, so don't count them as wins until read.
- **Meetings booked.** The brief's headline success metric (1 demo / 100 delivered) is not in the API payload. Pull booked-demo counts from your calendar/Apollo meetings view separately.
- **Do you have written permission to name "Little John's Lawns" in outreach?** The brief flags this as not-confirmed; verify before continued sends.
- **Is the "Landscaping" narrowing intentional?** Confirm whether this sequence is meant to target landscaping vendors specifically, or whether the broader facilities/property-manager segment in the brief should be receiving a different message.

## Recommended changes

The copy is selling a generic CRM/scheduling/invoicing product to landscaping owners, while the brief's actual value proposition is GPS/geofence-verified proof of what work was done, where, and by whom across multiple sites. All five emails are rewritten to lead with the accountability, on-site verification, and billing-accuracy pains that the brief names, and to stop leading with the 'switching CRMs is hard' objection the audience already holds. Em dashes and the unpermissioned 'Little John's Lawns' reference are removed, and the open-tracking/data pull must be fixed in parallel so engagement becomes measurable.

### Change 1 — step 1 — applied automatically (PUT /emailer_templates/6a60d25e082465000f36b621)

**Why:** Replaces the generic 'your CRM' hook (which leads with the known migration objection) with the brief's core value prop: GPS/geofence-verified proof of on-site work. Removes em dashes and the unpermissioned client name, and matches the plain, accountability-focused tone.

**Subject before:** When your CRM does too much (and not enough)
**Subject after:** who did what, where

**New body:**
```
Hi {{contact.first_name}},

Quick one. When a client asks whether your crew actually showed up at their site last Tuesday, can you prove it without digging through texts and photos?

Cappsure gives landscaping teams GPS and geofence-verified check-ins, so every visit, checklist, and job is logged with when, where, and who. No paper reports, no back-and-forth over whether the work got done.

Worth a quick 15-min demo? I can send over a link.

Best,
```

### Change 2 — step 2 — applied automatically (PUT /emailer_templates/6a60d25e082465000f36b624)

**Why:** Swaps the generic scheduling angle for the brief's overbilling/labor-verification pain point, giving the follow-up a genuinely new reason to reply rather than another feature list. Trims to under 100 words and drops em dashes.

**Subject before:** How much time is scheduling costing you?
**Subject after:** billing disputes

**New body:**
```
Hi {{contact.first_name}},

Most billing disputes come down to one thing: no proof of time actually spent on-site.

Cappsure timestamps and geo-tags every crew check-in, so the hours you bill match the hours worked, and your clients can see exactly what was done and where. That means fewer arguments and less revenue lost to "we were never told that got done."

If that'd be useful, I can send over a link for a 15-min look.

Best,
```

### Change 3 — step 3 — applied automatically (PUT /emailer_templates/6a60d25e082465000f36b627)

**Why:** Removes the second 'your CRM' objection-led opener and reframes around multi-site real-time visibility, a top brief pain point that was entirely absent. New angle keeps the follow-up sequence fresh.

**Subject before:** Is your CRM costing you money?
**Subject after:** every site, one screen

**New body:**
```
Hi {{contact.first_name}},

If you're running crews across a lot of properties, keeping real-time tabs on what's happening at each site is tough.

Cappsure puts every site's visits, inspections, and photos in one place, all GPS-verified, so you're not chasing crews or stitching together reports at the end of the week.

Want me to show you what that looks like for a portfolio like yours? 15 minutes.

Best,
```

### Change 4 — step 4 — applied automatically (PUT /emailer_templates/6a60d25e082465000f36b62a)

**Why:** Directly addresses the brief's 'switching is too difficult' and 'ease of adoption / deploy in days' notes as a payoff rather than an opening objection, and removes the named client and em dashes from the original.

**Subject before:** Too many tabs, not enough progress
**Subject after:** deploy in days

**New body:**
```
Hi {{contact.first_name}},

I know swapping tools sounds like a headache, which is exactly why teams get Cappsure running in days, not months.

Your crews use a simple mobile app to check in, run inspections, and snap photos from the field. No paper, no drawn-out re-training.

If you've been putting off fixing the "did they actually do it" problem because change feels like a lift, this is built to be the easy part.

Open to a quick 15-min demo?

Best,
```

### Change 5 — step 5 — applied automatically (PUT /emailer_templates/6a60d25e082465000f36b62d)

**Why:** Keeps the low-friction breakup format but re-anchors the recap on the verification/billing value prop instead of generic 'scheduling, pricing, workflow,' so the final touch reinforces the corrected positioning.

**Subject before:** Last note from Cappsure
**Subject after:** closing the loop

**New body:**
```
Hi {{contact.first_name}},

I'll leave it here. If getting GPS-verified proof of what your crews did on each site, plus cleaner billing to back it up, is worth a look, you can grab a time here.

If not, no worries at all, I won't keep filling your inbox.

Best,
```

## A/B test plan

**Hypothesis:** Reframing the opening email around GPS-verified proof of on-site work (the brief's core value prop) instead of a generic 'your CRM' pitch will increase reply rate, because it speaks to the accountability pain this audience actually feels and avoids leading with the CRM-switching objection.
**Variant A:** Subject: 'who did what, where' with the verification-led body (new Step 1 copy above).
**Variant B:** Subject: 'proof your crews showed up' with the same verification-led body, opening line: 'When a client questions whether your crew made it out last week, can you prove it in seconds?'
**Success metric:** Positive reply rate, evaluated once each variant has at least 150 delivered; call a winner only at a 20% or greater relative difference, otherwise keep Variant A (the simpler subject).
**Decision rule:** Do not change body copy, send times, or targeting while the test runs; only the Step 1 subject/opening line varies so reply differences are attributable to the hook.

## Manual changes (targeting / timing / list)

- Fix the data/tracking layer first: confirm open and click tracking are enabled in Apollo (0 opens across 720 delivered is a tracking artifact) and re-pull the summary once scheduled/bounced/replied/spam_blocked counters finish loading, so deliverability and reply reads become possible.
- Verify written permission before ever naming a client like 'Little John's Lawns'; it has been removed from all rewritten copy until permission is confirmed.
- Keep daily volume at 60 while deliverability counters are still unknown; only scale toward 100/day after delivery rate confirms >97% and bounce rate <2% on a re-pull.
- Confirm whether this sequence is intentionally landscaping-vendor-only; if the broader facilities/property-manager segment is also in the list, split them into a separate sequence with buyer-appropriate messaging (vendor accountability vs. running your own crews).
- Spot-check the actual inbox for reply sentiment once replies load, since the API count will include unsubscribe-style and negative replies that should not count as wins.

## Next review

Re-run the evaluation once tracking is confirmed working and Step 1 of the revised copy has reached ~200 delivered per A/B variant (roughly 10-14 days at 60/day), watching corrected open rate, reply rate, positive-reply sentiment, and booked demos against the brief's targets.

---

# CB Email Revamp - sector 3 (69f25cd4bae977000dbd0c5e)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 3**

## Evaluation

# Campaign Evaluation — CB Email Revamp - sector 3 — 2026-07-27

## Verdict
Sending has resumed — the #1 blocker from the last two reports is fixed, and delivered volume nearly tripled (316 → 920). But the ~604 new sends produced **zero new opens and zero new replies**: every engagement event (5 opens, 4 replies) is identical to the 07-20 pull. All new volume landed at step 1, which has now sent 918 emails and earned **not a single direct reply**, while the entire reply count still comes from the older cohort's follow-ups (steps 2 and 3). Deliverability improved but is still above alarm on both bounce (2.5%) and spam-block (1.67%), and open tracking remains broken (5 opens < 4 replies is impossible), so the client's "not enough opens" hypothesis still cannot be tested.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Delivery rate | ~95.8% (920 / 960 attempted) | >97% | 95%+ | 🟡 |
| Bounce rate | ~2.5% (24 / 960) | alarm >2% | — | 🔴 |
| Spam-block rate | ~1.67% (16 / 960) | alarm >0.3% | — | 🔴 |
| Open rate | 0.54% (5 / 920) | 30–50% typical | 30% | 🔴 (tracking broken) |
| Reply rate | 0.43% (4 / 920) | 1–3% typical | 2% | 🔴 (but funnel immature — see below) |
| Click rate | 0% | — | — | ⚪ (no links used) |
| Unsubscribe rate | 0.11% (1 / 920) | alarm >1% | — | 🟢 |
| Meetings / 100 delivered | Unknown (0 confirmed) | — | 1 | 🔴 / unmeasurable |
| **New sends since 07-20** | **+604 delivered** | — | — | 🟢 (sending resumed) |

## Funnel
Delivered 920 → Opened 5 (0.54%) → Replied 4 (0.43%). Clicked 0.

Two things dominate the funnel read this period:

1. **The new volume is invisible in engagement.** Opens (5) and replies (4) are byte-for-byte identical to the 07-20 report despite 604 additional delivered emails. Reason: the new batch is stacked at step 1 (918 delivered, up from 324), and step 1 has never produced a direct reply. The follow-up steps that actually generate replies barely moved (step 2A 317 → 366; step 3 unchanged at 313), so the new cohort has not yet matured into the reply-producing part of the sequence.

2. **Open tracking is still non-functional.** 5 opens against 4 replies is impossible under working tracking — the pixel is disabled, stripped, or not firing. Open rate is therefore uninformative, exactly as in the prior two reports.

The real, provable leak is **step 1 → reply: 0 replies on 918 delivered.** Every reply the campaign has ever recorded came from steps 2 and 3.

## Step-by-step
| Step | Variant | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 — "who answers your phone?" | A | 918 | 1 | 0 | 594 new sends, still **0 direct replies**. Real negative signal at scale, but the new cohort hasn't reached follow-ups yet. |
| 2 — (blank subject) objection-handling | A | 366 | 1 | 1 | +49 delivered, no new replies. Reply came from the old cohort. |
| 2 — (blank) | B | 0 | 0 | 0 | Still empty, `to_be_reviewed` — untouched since 07-15. Delete or finish. |
| 3 — "Last try…yes or no?" | A | 313 | 3 | 3 | **Unchanged** — no new cohort has reached step 3. Historically the strongest step (3 of 4 total replies). |

**Structural flag:** step 1 has `wait_time: 30` vs. `wait_time: 3` on steps 2 and 3. If that 30 is days, the follow-up sequence is delayed roughly a month behind step 1 — which explains why 594 new step-1 sends barely fed steps 2/3, and why aggregate reply rate looks worse than the funnel actually is. Confirm the unit; if it's 30 days, the sequence is throttling its own reply-producing steps.

**Sample-size note:** with only 4 total replies, no per-step or per-variant reply claim is statistically callable. What is clear is directional: step 1 alone (n=918) not producing a single reply is enough volume to say step 1 does not earn replies on its own.

## Copy-to-audience fit
- **Step 1 subject "who answers your phone?"** — leads with the brief's #1 pain point (missed calls while crew is in the field), lowercase/casual, on-tone. Good fit.
- **Step 1 body** — opens on the field/voicemail scenario (pain point #1, #4), names US-based team, CRM job-booking (a real proof point), and low-commitment "reply Plan" CTA. Tone matches the brief's "warm, practical small-business-owner" guidance.
- **Scope overstatement persists:** "and can even take payments" is still in the live step-1 copy. The brief's proof points list CRM management, estimate/scheduling, and back-office work — not payment processing — and explicitly warns against overstating scope. Sectors 4/5 reportedly dropped this phrase in the same edit round; sector 3 still carries it. Compliance/trust risk, unresolved from 07-20.
- **CTA mismatch with the stated goal:** the brief's core win is a booked Calendly call, but all three steps use a soft "reply Plan / yes or no" micro-commitment and no link. That's a defensible choice for a cold, price-sensitive audience — but it means the sequence is optimizing for a reply, not a booking, and 0 clicks is expected because there are no links. Worth being explicit that "meetings booked" cannot be measured from this sequence's metrics at all.
- **Punctuation constraint:** brief says no em dashes. Step 1 and step 2 are clean. **Step 3 uses "Last try on this – happy to…"** — that's an en dash, not a true em dash, but it sits in the spirit of the rule and should be reconciled.
- **Sophistication fit:** brief says the audience knows the category but not full-service/CRM-integrated options. Step 1 correctly educates on the full-service angle rather than assuming knowledge. Good.

## Prioritized issues
1. **Step 1 earns zero direct replies at scale** — evidence: 0 replies on 918 delivered; every campaign reply ever came from steps 2/3 — **impact: high.** Whether this is a copy problem or just a follow-up-driven sequence can't be fully separated yet because the new cohort hasn't reached steps 2/3.
2. **Open tracking still broken** — evidence: 5 opens < 4 replies, unchanged across three reports — **impact: high.** The client's central "not enough opens" hypothesis remains untestable until the pixel is fixed.
3. **Deliverability still above alarm on two axes** — evidence: bounce 2.5% (alarm >2%), spam-block 1.67% (5× alarm >0.3%). Both improved vs. 07-20 (4.7% / 3.5%) but not fixed — **impact: high/medium.**
4. **Likely 30-day gap between step 1 and step 2** — evidence: `wait_time: 30` on step 1 vs. `3` on steps 2/3; 594 new step-1 sends fed only ~49 new step-2 sends — **impact: medium.** Delays the reply-producing steps and distorts the aggregate reply rate downward.
5. **Scope-overstatement "can even take payments" still live** — evidence: brief lists it as a claim to avoid; sectors 4/5 removed it, sector 3 didn't — **impact: medium.**
6. **Step-2 variant B still empty/unapproved** — evidence: 0 delivered, blank body, `to_be_reviewed` since 07-15 — **impact: low.**

## Open questions
- **Reply sentiment on the 4 replies** — Apollo does not expose this. Spot-check whether these are interested, "remove me," or hostile before treating 4 replies as validation. Still not confirmed done from prior reports.
- **Is `wait_time: 30` on step 1 in days?** If so, is the month-long gap intentional? This materially changes how to read the funnel.
- **Is open tracking enabled in this sequence?** Third report flagging opens < replies — needs a direct check, not an inference.
- **How many of the 604 new step-1 sends have entered steps 2/3 yet?** Confirming cohort maturity determines whether step 1's 0 replies is a copy verdict or just timing.
- **Meetings booked** — the sequence has no Calendly link, so bookings (the brief's actual win condition) are entirely invisible to these metrics. Confirm separately whether any replies converted to calls.

## Trend vs. 2026-07-20
- **Sending resumed** — the top blocker in the last two reports is cleared: +604 delivered (316 → 920). 🟢
- **Deliverability improved but not fixed** — bounce 4.7% → 2.5%, spam-block 3.5% → 1.67%; both still above alarm.
- **Zero new engagement from new volume** — opens (5) and replies (4) are unchanged; all new sends sit at step 1, which produced nothing. The rewritten step 1 copy is now live against 918 sends with 0 direct replies, but the follow-up test is still pending because of the wait-time gap.
- **Carryover open items unresolved:** broken open tracking, empty step-2 variant B, and the "can even take payments" scope phrase all remain exactly as flagged on 07-20.

## Recommended changes

The provable leak is step 1 earning zero direct replies on 918 sends while every reply the campaign has ever produced came from follow-ups, so we tighten step 1, remove the live scope-overstatement ("can even take payments"), and finally fill the empty step-2 variant B with a fresh after-hours angle to give the sequence a testable second touch. Deliverability is still above alarm on bounce (2.5%) and spam-block (1.67%) and open tracking is still broken, so those get fixed by hand in Apollo before we read any copy result. Copy changes are surgical and low-risk; the biggest measurable gains this cycle come from fixing tracking, throttling/cleaning the list, and closing the ~30-day wait gap that is starving the reply-producing steps.

### Change 1 — step 1 — applied automatically (PUT /emailer_templates/69f3658fbc84d10019057c09)

**Why:** Removes the live scope-overstatement "and can even take payments" (flagged as a compliance/trust risk and never validated in the brief's proof points), trims the body under 100 words, and keeps the strong on-tone subject and the low-commitment "reply Plan" CTA. Step 1 has produced 0 replies on 918 sends, so we sharpen the hook while preserving the one element the evaluation praised.

**Subject before:** who answers your phone?
**Subject after:** who answers your phone?

**New body:**
```
Hi {{contact.first_name}},

When your crew is out on a job, who picks up when a new customer calls? For a lot of the service companies we work with, the honest answer was voicemail, and that caller just dialed the next name on the list.

Call Boss is a 100% US-based team that answers as your office and books jobs straight into your CRM, no in-house hire or training on your end.

Want a quick look at how many calls {{account.name}} is likely missing, plus a simple fix? Reply "Plan" and I'll send it over. No pitch deck, just a straightforward breakdown.
```

### Change 2 — step 2 — applied automatically (PUT /emailer_templates/69f367469b0ef40019dd3354)

**Why:** Fills the empty, unapproved step-2 variant B (blank since 07-15) so we finally have a live A/B test at the reply-producing step. It brings a genuinely new angle (after-hours/24/7 coverage, pain points #4 and #6) distinct from variant A's in-house hiring math, rather than repeating the same objection.

**Subject before:** 
**Subject after:** 

**New body:**
```
{{contact.first_name}}, one quick question: what happens to calls that come in after 5pm or on a weekend?

Most owners we talk to are quietly losing after-hours leads to voicemail, and those callers rarely call back. Call Boss covers nights and weekends as your office, so the booking happens instead of the callback that never comes.

Worth a quick look for {{account.name}}?
</body>
```

### Change 3 — step 3 — applied automatically (PUT /emailer_templates/69f3688a220f4f0011aeab21)

**Why:** Replaces the en dash ("Last try on this – happy to...") with clean punctuation to honor the brief's no-dash constraint, keeping the one-line yes/no format intact since step 3 is historically the strongest reply generator.

**Subject before:** 
**Subject after:** 

**New body:**
```
Last try on this. Happy to leave you alone if now isn't the time. Want the plan, yes or no?
```

## A/B test plan

**Hypothesis:** Adding a distinct after-hours coverage angle at step 2 (variant B) will match or beat the in-house-hiring-math angle (variant A) on reply rate, because a different pain point catches owners the first objection-handler misses.
**Variant A:** Subject: (blank, threads). Body: "{{contact.first_name}}, quick one. Most owners we talk to first think about hiring office staff before trying us. The math usually favors us: no hiring, training, or turnover, and we scale up and down with your busy season. Want the numbers for {{account.name}}?"
**Variant B:** Subject: (blank, threads). Body: "{{contact.first_name}}, one quick question: what happens to calls that come in after 5pm or on a weekend? Most owners we talk to are quietly losing after-hours leads to voicemail, and those callers rarely call back. Call Boss covers nights and weekends as your office, so the booking happens instead of the callback that never comes. Worth a quick look for {{account.name}}?"
**Success metric:** Direct reply rate at step 2. Call a winner once each variant has ≥150 delivered; if the relative difference is under 20%, keep variant A as the simpler/shorter option.
**Decision rule:** Do not change step 1 copy, send volume, or the wait times while the step-2 test is accumulating, otherwise attribution is lost. With only 4 total replies to date, treat early results as directional until the sample matures.

## Manual changes (targeting / timing / list)

- Fix open tracking before reading any open-based result: 5 opens < 4 replies across three reports means the pixel is disabled or stripped. Confirm tracking is enabled in this sequence, or accept reply rate as the only usable metric.
- Deliverability triage first: bounce is 2.5% (alarm >2%) and spam-block 1.67% (5x the >0.3% alarm). Re-verify the entire remaining list through Apollo, remove any risky/catch-all addresses, and throttle daily sends from 60 to ~40 until bounce is under 2% and spam-block under 0.3%.
- Confirm the unit of step 1's wait_time: 30 vs. 3 on steps 2/3. If it is 30 days, reduce it to 3 to 4 days so new step-1 cohorts actually reach the reply-producing follow-ups instead of stalling for a month.
- Spot-check the sentiment of the 4 existing replies (interested vs. remove-me vs. hostile) before treating them as validation of the sequence.
- Since the brief's true win condition is a booked Calendly call and this sequence has no link, add the Calendly link into the reply flow (e.g., in the auto-response after someone replies "Plan") so bookings become measurable; keep the cold emails link-free to protect deliverability.
- Delete the old blank step-2 variant B record if the newly written body cannot be cleanly approved in place, to avoid an empty variant siphoning sends.

## Next review

Re-run in 3 to 4 weeks, once the ~600 new step-1 sends have cleared the corrected wait gap and at least 150 have entered each step-2 variant. Watch: (1) step 1 direct reply rate now that payments claim is removed, (2) step 2 A vs B reply rates, (3) bounce back under 2% and spam-block under 0.3%, and (4) whether open tracking is now firing (opens should exceed replies).

---
