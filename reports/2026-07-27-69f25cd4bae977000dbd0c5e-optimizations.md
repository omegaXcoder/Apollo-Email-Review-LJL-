## Recommended changes

The evaluation is unambiguous that copy is not the current bottleneck: open tracking is broken (5 opens < 4 replies), deliverability is still red on fresh imports (bounce 2.25%, spam-block 1.5%), and ~620 new contacts are queued at step 1 before the reply-producing follow-ups fire. Accordingly, the highest-leverage work is non-copy (fix the pixel, clean the newest list, finish the dead step-2B variant), and copy edits are kept minimal so we do not lose attribution while flying blind on opens. The one worthwhile copy action is finalizing the abandoned step-2B after-hours variant so it can enter rotation as a genuinely new angle, plus a reply-rate-based A/B test on the opener CTA that does not depend on the broken open pixel.

### Change 1 — step 2 — proposed (auto-apply off)

**Why:** Issue #5 in the eval: step-2B has sat blank and to_be_reviewed for 12+ days, contributing nothing. The after-hours angle (pain #6) is genuinely different from step-2A's in-house-hiring math, so finalizing and approving it gives step 2 a second reason-to-reply to rotate. No em dashes, sender named literally, threads on step 1 so subject stays blank.

**Subject before:** 
**Subject after:** 

**New body:**
```
{{contact.first_name}}, quick question: what happens to calls that come in after 5pm or on a weekend?

Most owners we talk to are quietly losing after-hours leads to voicemail, and those callers rarely call back. Call Boss covers nights and weekends as your office, so the job gets booked instead of the callback that never comes.

Worth a quick look for {{account.name}}?
```

## A/B test plan

**Hypothesis:** Replacing the opener's soft 'Reply Plan' CTA with the brief's primary direct Calendly 'book a 15-min call' ask will change reply/meeting rate, because the current soft ask produced 0 replies on 948 delivered and may be too vague to move owners to act. Measured on replies + meetings, not opens, since open tracking is unreliable.
**Variant A:** Subject: who answers your phone? Body: Hi {{contact.first_name}}, When your crew is out on a job, who picks up when a new customer calls? For a lot of the service companies we work with, the honest answer was voicemail, and that caller just dialed the next name on the list. Call Boss is a 100% US-based team that answers as your office and books jobs straight into your CRM, no in-house hire or training on your end. Want a quick look at how many calls {{account.name}} is likely missing, plus a simple fix? Reply "Plan" and I'll send it over. No pitch deck, just a straightforward breakdown.
**Variant B:** Subject: who answers your phone? Body: Hi {{contact.first_name}}, When your crew is out on a job, who picks up when a new customer calls? For a lot of the service companies we work with, the honest answer was voicemail, and that caller just dialed the next name on the list. Call Boss is a 100% US-based team that answers as your office and books jobs straight into your CRM, no in-house hire or training on your end. Worth a 15-minute call to see how many calls {{account.name}} is likely missing? Grab a time here: [Calendly link]. If a reply is easier, just say "when" and I'll send options.
**Success metric:** Reply rate plus meetings booked per 100 delivered (open rate is unusable until the pixel is fixed).
**Decision rule:** Hold until each variant has >=200 delivered AND a combined double-digit reply count. Call a winner only at >=20% relative difference in positive-reply-or-meeting rate; if closer than that, keep Variant A (soft, lower-commitment) as the default. Do not change subject line, send time, or list source while the test runs, since only the CTA is the variable.

## Manual changes (targeting / timing / list)

- FIRST PRIORITY: confirm open tracking is enabled in Apollo for this sequence and that the tracking domain/pixel is firing (test-send to an internal inbox and verify an open registers). Until 5<4 opens-vs-replies is resolved, the client's 'not enough opens' hypothesis cannot be tested and no subject-line work is worth doing.
- Re-verify the newest step-1 imports before they send: this fresh cohort carries the worst bounce (2.9%) and spam-block (1.9%) rates. Run them through Apollo verification, drop catch-all/risky and role-based addresses, and remove any non-deliverable domains to pull bounce under 2% and spam-block toward 0.3%.
- Approve the finalized step-2B variant (or delete it if you prefer a single-angle step 2) so it stops sitting as dead weight and can actually enter the A/B rotation.
- Spot-check the sentiment of the 4 existing replies in Apollo before treating any as wins; the brief notes zero email signups ever, so confirm these are interested, not angry/opt-out replies.
- Hold daily volume at ~60 (do not scale up) until bounce and spam-block are back in range and the ~620 queued step-1 contacts have flowed through steps 2 and 3; adding more top-of-funnel volume now only inflates the denominator without producing measurable replies.
- Once tracking is confirmed working, re-pull specifically to read step-1 open rate against the 30% target, since that is the exact metric tied to the client's messaging hypothesis.

## Next review

Re-run the evaluation in ~2-3 weeks, once the ~620 queued step-1 contacts have cleared the 30-day and 3-day waits and reached steps 2 and 3 (aim for >=200 delivered per follow-up step and a double-digit total reply count). Watch for: (1) open tracking now firing above ~10% as proof the pixel fix worked, (2) bounce <2% and spam-block trending toward 0.3% on the re-verified list, (3) whether reply volume grows past 4 as follow-ups fire, and (4) the opener CTA A/B result on reply/meeting rate.