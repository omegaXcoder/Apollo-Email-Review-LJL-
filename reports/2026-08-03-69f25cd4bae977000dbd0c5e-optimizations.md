## Recommended changes

Deliverability is the gate, not copy: aggregate bounce (3.44%) and spam-block (2.41%) are worsening and the newest imports run ~8% bounce / ~6% spam, so list hygiene and fixing broken open tracking must come before any copy optimization. The existing copy already fits the brief well, so proposed copy edits are minimal and low-risk (trim mild spam-trigger phrasing, add a concrete proof point to the non-converting step 2) and should be held until deliverability is clean. Expected impact: restoring deliverability and tracking makes every downstream signal readable for the first time in four pulls, which is the prerequisite for the copy A/B test to mean anything.

### Change 1 — step 2 — applied automatically (PUT /emailer_templates/69f367469b0ef40019dd3352)

**Why:** Step 2A is on-brief but produced only 1 reply on 485 delivered, so it needs a new reason to reply rather than just objection math. Added real proof points from the brief (US-based, woman-owned, native CRM integrations) to answer the FAQ 'do they get into our CRM / are they US-based' inside the message. This is a low-risk edit; hold it until deliverability is clean so attribution is not lost in the noise.

**Subject before:** 
**Subject after:** 

**New body:**
```
{{contact.first_name}}, quick one.

Most owners we talk to weigh hiring office staff before trying us. The math usually favors us: no hiring, training, or turnover, and we scale up and down with your busy season.

Call Boss is a US-based, woman-owned team that plugs right into Jobber, Service Autopilot, and YardBook, so calls get answered and jobs get booked without adding a desk.

Want the numbers for {{account.name}}?
```

### Change 2 — step 1 — applied automatically (PUT /emailer_templates/69f3658fbc84d10019057c09)

**Why:** Copy is already well-aligned per the evaluation, so this is a light tightening only: shortened the closing line and cleaned run-on phrasing to reduce length and any mild spam-trigger density on the touch that carries the fresh-import bounce/spam concentration. Subject retained because it correctly leads with pain point #1 in the brief's tone. No structural change so it does not confound the deliverability fix.

**Subject before:** who answers your phone?
**Subject after:** who answers your phone?

**New body:**
```
Hi {{contact.first_name}},

When your crew is out on a job, who picks up when a new customer calls? For most service companies we work with, the honest answer is voicemail, and that caller just dials the next name on the list.

Call Boss is a 100% US-based team that answers as your office and books jobs straight into your CRM. No in-house hire, no training on your end.

Want a quick look at how many calls {{account.name}} is likely missing, plus a simple fix? Reply "Plan" and I'll send it over.
```

## A/B test plan

**Hypothesis:** Changing the step 1 subject line will improve reply rate because the current 'who answers your phone?' is a rhetorical question owners can dismiss, while a loss-framed prompt taps pain points #1 and #4 (missed call = lost revenue) more urgently.
**Variant A:** who answers your phone?
**Variant B:** missed a call today?
**Success metric:** Reply rate (opens are untrustworthy until tracking is fixed, so replies are the honest metric). Call a winner at >=200 delivered AND >=10 replies per variant; if the relative difference is <20%, keep variant A as the simpler incumbent.
**Decision rule:** Do NOT start this test until deliverability is restored (bounce <2%, spam-block <0.3% on a clean segment). While it runs, hold body copy, send times, daily volume, and step timing constant so subject line is the only variable.

## Manual changes (targeting / timing / list)

- Quarantine the newest import batch (the ~196 incremental contacts since 07-27) immediately - it is carrying ~8% bounce and ~6% spam and is dragging the whole domain reputation down.
- Re-run every unsent contact through Apollo email verification and drop anything not 'verified'; exclude catch-all/accept-all and role-based addresses before they enter the sequence.
- Fix open tracking in Apollo: confirm the tracking pixel/open-tracking toggle is enabled on this sequence - it has been non-functional for four consecutive pulls, making the client's core 'not enough opens' hypothesis unmeasurable.
- Throttle daily volume from 60 back to 40-50 and ramp slowly over 2-3 weeks to let domain reputation recover after the spam-block spike.
- Test-send each new import batch to a small 20-30 contact sub-batch first and check bounce/spam before releasing the full list, so a dirty source is caught early instead of after 196 sends.
- Resolve step 2 variant B: it already has usable after-hours body copy but sits in 'to_be_reviewed' with 0 sends - either approve it so it can actually enter the A/B pool or delete it to remove dead weight.
- Manually spot-check the sentiment of all 4 existing replies in Apollo before treating any as positive; the brief notes zero email signups ever, so some may be negative/opt-outs.

## Next review

Re-run the evaluation after ~300-400 delivered on a freshly verified, throttled list (roughly 2-3 weeks at 40-50/day). Watch for: bounce back under 2% and spam-block under 0.3% (the gate), open tracking actually firing (opens materially exceeding replies), and whether the revised step 2 plus subject test move reply rate off its frozen count of 4.