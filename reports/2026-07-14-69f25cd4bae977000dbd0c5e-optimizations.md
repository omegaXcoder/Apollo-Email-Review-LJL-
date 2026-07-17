## Recommended changes

The campaign's core problem is deliverability and broken open tracking, not copy, so the priority is fixing list hygiene, spam triggers, and the tracking pixel before reading any engagement signal. That said, step 1 earned zero replies and hardcodes 'landscaping' on a mixed-vertical list, so the copy rewrites below make it vertical-neutral, tighten formatting, remove dash-heavy style, and give each follow-up a genuinely new angle instead of a bump. Expected impact: cleaner inbox placement, a first touch that actually earns replies, and measurable top-of-funnel once tracking is restored.

### Change 1 — step 1 — proposed (auto-apply off)

**Why:** Step 1 produced 0 replies on 324 delivered and hardcoded 'landscaping companies' on a multi-vertical list. New copy is vertical-neutral, drops all en dashes to respect the brief's dash-style intent, fixes the run-together plain-text spacing, keeps the merge tags and soft reply CTA, and shortens to under 100 words while still hitting missed-calls-equals-lost-revenue and the 'without adding staff' objection.

**Subject before:** Who answers when you’re on the job?
**Subject after:** missed calls?

**New body:**
```
Hi {{contact.first_name}},

When your team is out on a job, who picks up when a new customer calls? If it hits voicemail, most people just dial the next company on the list.

Call Boss is a 100% US-based team that answers as your office, books jobs in your CRM, and can even take payments, so you stop losing work you already earned the shot at. No in-house hire required.

Want me to pull a quick estimate of what missed calls are likely costing {{account.name}}? Reply "plan" and I'll send it over. No pitch deck, just the numbers.
```

### Change 2 — step 2 — proposed (auto-apply off)

**Why:** The current step 2 is a pure 'circling back' bump with no new reason to reply. This version introduces a new angle by preempting the brief's #1 objection ('makes more sense to bring it in house'), using the brief's own answer about scaling and cost, while keeping the threaded blank subject and the reply CTA.

**Subject before:** 
**Subject after:** 

**New body:**
```
{{contact.first_name}}, a lot of owners tell me they'd rather just hire in-house than use a service.

The catch: one receptionist can't cover evenings, weekends, or two calls ringing at once, and every time they quit you start training over. We scale with you and cost less than a full desk.

Want that missed-calls plan for {{account.name}}?
```

### Change 3 — step 2 — proposed (auto-apply off)

**Why:** Step 2 variant B was empty and unapproved (status to_be_reviewed), so the A/B split was never actually running. This fills it with a one-line question format for a real, different-format test against variant A's objection angle.

**Subject before:** 
**Subject after:** 

**New body:**
```
{{contact.first_name}}, quick one: how many calls a week do you think slip past when nobody's at the desk?

Most owners we help are surprised once we tally it. Reply and I'll put the number together for {{account.name}}.
```

### Change 4 — step 3 — proposed (auto-apply off)

**Why:** Step 3 is the best performer (3 of 4 total replies), so the change is intentionally minimal: only remove the en dash to comply with the brief's dash-style instruction and clean the plain-text fallback. Keep the yes/no breakup framing that is already working.

**Subject before:** 
**Subject after:** 

**New body:**
```
Last try on this. Happy to leave you alone if now isn't the time.

Want the plan: yes or no?
```

## A/B test plan

**Hypothesis:** Making the step 1 subject and hook vertical-neutral (vs. the current 'landscaping'-anchored copy) will improve reply rate because a mixed 'sector 3' list currently receives a message that visibly isn't about their trade.
**Variant A:** Subject: 'missed calls?' Body: vertical-neutral rewrite (Hi {{contact.first_name}}, When your team is out on a job, who picks up... 100% US-based team... Reply "plan"...).
**Variant B:** Subject: 'who answers when nobody's at the desk?' Body: identical vertical-neutral body as variant A.
**Success metric:** Reply rate (and positive-reply rate from manual sentiment spot-check). Call a winner at >=150 delivered per variant; if the relative difference is under 20%, keep variant A (shorter/simpler subject).
**Decision rule:** Do not change body copy, send times, volume, or the CTA while the subject test runs, or attribution is lost. Note: this test is only readable once open tracking is confirmed working and deliverability is back above 95%.

## Manual changes (targeting / timing / list)

- DELIVERABILITY FIRST: pause new sends or drop daily volume from 60 to ~25 until bounce is under 2% and spam-block under 0.3%; current bounce ~4.7% and spam-block ~3.5% are actively damaging sender reputation.
- Re-verify the entire list with a dedicated email-verification tool (not just Apollo) and remove catch-all, role-based, and stale addresses before resuming full volume.
- Confirm the open-tracking pixel is enabled and firing in the Apollo sequence settings; 5 opens vs 4 replies proves tracking is broken and the client's 'low opens' hypothesis cannot be tested until this is fixed.
- Manually read the 4 existing replies in Apollo to confirm sentiment before treating 1.27% as interest; the 1 unsubscribe plus the yes/no breakup framing suggests some may be negative.
- Approve the newly filled step 2 variant B so the A/B split actually runs, and confirm even 50/50 split allocation.
- Add a Calendly link as a secondary CTA on positive replies (or in step 3) so 'meetings booked per 100 delivered' becomes measurable; it is currently unmeasurable with a reply-only CTA.
- Review company-size targeting: the brief's 50-100 employee filter is large for owner-operated service businesses; tighten toward the owner/office-manager buyer if the list skews to bigger firms without a clear decision-maker.
- Audit step 1 copy for spam-trigger phrasing (payments, revenue-loss percentages) as a possible contributor to the 3.5% spam-block rate once list quality is ruled out.

## Next review

Re-run the evaluation after ~300 delivered per step on the cleaned list (roughly 3-4 weeks at reduced volume). First confirm deliverability recovered (delivery >=95%, bounce <2%, spam-block <0.3%) and that open tracking now reports plausible numbers; only then judge the step 1 subject A/B and whether the new first-touch copy earns replies.