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