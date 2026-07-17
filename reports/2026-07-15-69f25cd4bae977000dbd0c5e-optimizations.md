## Recommended changes

The campaign's real blockers are non-copy: ~8% of attempts never reach the inbox (4.7% bounce + 3.5% spam-block) and open tracking is broken (5 opens < 4 replies), so no engagement number is trustworthy yet. We recommend leading with list verification, volume throttling, and fixing the tracking pixel, while making two low-risk copy fixes that address clear spam/trust signals and the dead step-1 opener. Expect the biggest lift from deliverability repair; copy changes should improve fit but will only be measurable once inbox placement and tracking are restored.

### Change 1 — step 1 — applied automatically (PUT /emailer_templates/69f3658fbc84d10019057c09)

**Why:** Step 1 produced 0 replies on 324 sends. Removed the hardcoded "landscaping companies" line (vertical mismatch on a mixed sector-3 list), fixed the run-together sentences and space-before-comma in the text fallback (trust/spam signals flagged in the eval), and swapped en dashes for plain punctuation to honor the brief's dash intent. Subject moved to lowercase internal-memo style to feel less like marketing. Kept the US-based objection pre-empt and merge tags.

**Subject before:** Who answers when you’re on the job?
**Subject after:** who answers your phone?

**New body:**
```
Hi {{contact.first_name}},

When your crew is in the field, what happens to a new customer call? Voicemail, a busy line, or missed completely?

For the service businesses we work with, a few missed calls add up fast, because the caller just dials the next company on the list.

Call Boss is a 100% US-based team that answers as your office, books jobs right in your CRM, and can even take payments, without you adding in-house staff.

Want me to pull together a quick look at how many calls {{account.name}} is likely missing, plus a simple fix?

Just reply "Plan" and I'll send it over. No pitch deck, just a straightforward breakdown.
```

### Change 2 — step 2 — applied automatically (PUT /emailer_templates/69f367469b0ef40019dd3352)

**Why:** The eval flagged that follow-ups must add a NEW angle rather than "just circling back." This replaces the generic bump with the brief's most common objection (hire in-house vs. outsource) and its stated answer (we scale better at lower cost than in-house staff). Kept short and in-thread with a blank subject; fixed en dashes.

**Subject before:** 
**Subject after:** 

**New body:**
```
{{contact.first_name}}, quick one.

Most owners we talk to first think about hiring office staff before trying us. The math usually favors us: no hiring, training, or turnover, and we scale up and down with your busy season.

Want the numbers for {{account.name}}?
```

## A/B test plan

**Hypothesis:** Changing the step-1 subject from a full-sentence question to a short lowercase-casual line will improve reply rate, because internal-memo style subjects read as personal outreach rather than marketing and are less likely to be ignored by owners scanning on mobile. (Run only after deliverability and open tracking are fixed; open rate is currently unmeasurable so we judge on replies.)
**Variant A:** Subject: who answers your phone? (new rewritten step-1 body)
**Variant B:** Subject: losing calls when you're in the field? (same new rewritten step-1 body)
**Success metric:** Reply rate at step 1 (positive/interested replies spot-checked manually, since open tracking is unreliable).
**Decision rule:** Call a winner at >=150 delivered per variant; if relative reply-rate difference is <20%, keep Variant A (the shorter, simpler subject). Do not change the body, send times, or list segment while the test runs so subject line is the only variable.

## Manual changes (targeting / timing / list)

- Fix deliverability first: run the list through a real-time verifier (NeverBounce/ZeroBounce) and drop invalid, catch-all, and role-based addresses before the next send; goal is bounce under 2%.
- Throttle daily volume from 60 down to ~25-30 while reputation recovers, then step back up once bounce <2% and spam-block <0.3%.
- Confirm SPF, DKIM, and DMARC are passing on the sending domain and check whether specific recipient domains are driving the 12 spam-blocks; pause any domain that repeatedly filters you.
- Verify the open-tracking pixel is enabled and firing in Apollo settings (5 opens < 4 replies proves it is broken or stripped); without this the client's 'low opens' hypothesis cannot be tested.
- Delete or finish step-2 variant B (currently empty, unapproved, 0 delivered) so the split is either real or removed.
- Manually spot-check the text of all 4 existing replies in Apollo for sentiment before treating 1.27% as genuine interest; the 'yes or no?' breakup framing may be generating negative replies.
- Segment the mixed 'sector 3' list by vertical so future copy can name the recipient's trade, or keep the vertical-neutral copy above until segmentation is possible.
- Re-check the 50-100 employee filter against the owner/office-manager buyer; companies that size often have front-desk staff already, so consider adding smaller owner-operated firms where missed calls hit the owner directly.

## Next review

Re-run the evaluation after deliverability fixes have produced ~300+ new delivered per step at the throttled volume (roughly 1-2 weeks). Watch three gates before reading any copy signal: bounce back under 2%, spam-block under 0.3%, and open tracking reporting sane numbers (opens > replies). Only then judge whether the step-1 rewrite and step-2 objection angle lifted replies.