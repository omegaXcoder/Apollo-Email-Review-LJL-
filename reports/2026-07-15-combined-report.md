# Campaign performance report — 2026-07-15

**Skipped (not email campaigns):** CB LI Sector 1 (No email steps (linkedin_step_connect, linkedin_step_message)); CB LI Sector 4 (No email steps (linkedin_step_connect, linkedin_step_message)); CB LI Sector 5 (No email steps (linkedin_step_connect, linkedin_step_message)); CB LI Sector 3 (No email steps (linkedin_step_connect, linkedin_step_message)); Cappsure LI Sector 3 (No email steps (linkedin_step_connect, linkedin_step_message)); Cappsure LI Sector 1 (No email steps (linkedin_step_connect, linkedin_step_message)); Cappsure LI Sector 2 (No email steps (linkedin_step_connect, linkedin_step_message))

# CB Email Revamp - sector 5 (69f365095f308f0015f454db)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 3**

## Evaluation

# Campaign Evaluation — CB Email Revamp - sector 5 — 2026-07-15

## Verdict
Nothing has changed since yesterday: the campaign is still failing at the deliverability gate and still cannot be honestly judged on copy or engagement. Aggregate counts are **identical to the 2026-07-14 pull** (302 delivered, 25 bounced, 22 spam-blocked, 0 opens, 0 replies), so whatever was recommended last round either wasn't acted on or hasn't had time to register. Fixing send reputation and list hygiene remains the entire game — every engagement number below is uninterpretable until it is.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Delivery rate | 86.5% (302 / ~349 attempted) | >97% | 95%+ | 🔴 |
| Bounce rate | 7.6% (25 / 327) | <2% alarm | — | 🔴 |
| Spam-block rate | 6.3% (22 / 349) | >0.3% alarm | — | 🔴 |
| Open rate | 0% (0 / 302) | 30–50% typical | 30% | 🔴 |
| Reply rate | 0% (0 / 302) | 1–3% typical | 2% | 🔴 |
| Positive reply rate | 0% | — | 1.5% | 🔴 |
| Unsubscribe rate | 0% | <1% | — | ⚪ (meaningless at 0 opens) |
| Meetings / 100 delivered | 0 | — | 1 | 🔴 |

Note: `delivery_rate_pct`, `bounce_rate_pct` still return `null` and `unique_scheduled` = 0 (anomaly persists). Rates are computed manually from unique counts (delivered 302, bounced 25, spam-blocked 22; attempted ≈ 349). Step-level counts, which read `"loading"` yesterday, are now populated — that's the only data change in this pull.

## Funnel
```
Attempted (~349)
  → Delivered   302   (86.5% of attempted)   ← 47 lost: 25 bounced + 22 spam-blocked
  → Opened        0   (0.0% of delivered)     ← full drop-off
  → Replied       0   (0.0% of delivered)
```
Same two leaks as last round, unchanged:

1. **Attempted → Delivered (13.5% loss).** 7.6% bounce + 6.3% spam-block on an "Apollo-verified" list and a "warmed-up" domain points to stale data and/or a reputation problem. This is the gate.
2. **Delivered → Opened (100% loss).** A literal 0/302 is not a plausible real-world outcome — Apple Mail privacy and bot scanners alone normally push opens well above zero. This is almost certainly a **disabled/stripped open-tracking pixel** or **wholesale spam-folder placement**, not reader indifference. Opens and reply rate cannot be trusted as engagement signals.

The biggest *reportable* leak is deliverability. The 0% open figure is a measurement/placement artifact to diagnose, not a copy verdict.

## Step-by-step
| Step | Subject | Delivered* | Bounced | Spam-blocked | Opened | Replied | Verdict |
|---|---|---|---|---|---|---|---|
| 1 | "Who answers when you're on the job?" | 322 | 5 | 2 | 0 | 0 | Now resolved (was `loading`); no replies |
| 2 | (empty — threads on step 1) | 310 | 10 | 10 | 0 | 0 | Dead weight so far |
| 3 | (empty — threads on step 1) | 297 | 10 | 10 | 0 | 0 | Dead weight so far |

\*Step-level "delivered" are total email events, not unique contacts — note step 1's 322 exceeds unique-delivered 302. Treat these as send-event counts, not people.

Observations:
- **Everyone flowed through all three steps** (322 → 310 → 297). A reply would have removed the contact from the sequence, so the near-full progression independently confirms **zero replies**.
- **Bounces and spam-blocks are back-loaded.** Step 1 lost only 7 (5 bounce + 2 spam); steps 2 and 3 each lost 20 (10 + 10). Rising spam-blocks on follow-ups threading into the same conversation is a classic reputation-degradation signature — receiving servers increasingly distrust the thread as it ages. This suggests the problem is at least partly domain/reputation, not purely list rot.
- **No variant testing exists.** One variant per step, so there is nothing to A/B compare — and at ~302 delivered total you're well below the ~150–200 delivered *per variant* needed to call a winner even if variants existed.
- No step produces incremental replies, but with the deliverability gate failing this says nothing about copy merit.

## Copy-to-audience fit
Copy is unchanged from last round and still cannot be validated by performance (0 trustworthy opens). These remain structural notes, not proven causes:

- **Vertical hard-coding.** Step 1 says "For plumbing companies we work with" and "When your crews are in the field." On-target if sector 5 is plumbing-only; a mismatch if the list mixes verticals. Confirm list composition.
- **CTA drifts from the stated goal.** The brief's win is a booked Calendly call, but the sequence only asks the reader to "Reply with 'Plan'" and never surfaces the calendar link. A defensible low-friction micro-CTA for a cold audience, but it structurally decouples the campaign from the "meetings booked" target.
- **Scope claim to check.** "and can even take payments" may overstate scope; the brief warns against claiming beyond stated services.
- **Dashes.** Em dashes are avoided (compliant), but the copy leans heavily on en dashes ("–") in nearly every sentence. Technically fine; stretches the spirit of the "clean copy" note.
- **Pain-point lead is solid.** Opener leads with the brief's #1 pain (missed calls while crews are in the field → lost revenue), uses a concrete "10–30% lost revenue" figure, and cites the "100% US-based team" proof point that answers a top objection. Structurally aligned; just unmeasurable on results.

## Prioritized issues
1. **Deliverability is broken and gates everything.** Evidence: bounce 7.6% (25/327), spam-block 6.3% (22/349), delivery 86.5% vs 95% target — unchanged from yesterday. — **Impact: high.** Nothing downstream can be evaluated or improved first.
2. **Rising spam-blocks on follow-up steps point to reputation, not just list rot.** Evidence: step 1 lost 2 to spam, steps 2 and 3 lost 10 each. — **Impact: high.** Signals the sending domain is losing trust as threads age; seed/placement testing needed.
3. **Zero opens across 302 delivered is a measurement/placement failure.** Evidence: 0/302 is statistically implausible with live tracking and inbox placement. — **Impact: high.** Until open tracking and inbox placement are confirmed, open and reply rates are uninterpretable.
4. **Zero replies through a full 3-step sequence.** Evidence: 0 replies, near-full progression (322 → 310 → 297) confirms no one exited via reply. — **Impact: high**, but confounded by issues 1–3; do not attribute to copy yet.
5. **Data-pull integrity partially improved but still flawed.** Evidence: step counts now resolved (good), but `scheduled` = 0 and several rate fields still `null`; step-1 delivered (322) exceeds unique-delivered (302). — **Impact: medium.** Confirm the unique vs. event-count semantics before decisions.
6. **CTA/metric misalignment (structural).** Evidence: brief targets booked calls; sequence only asks for a "Plan" reply, never surfaces Calendly. — **Impact: medium**, relevant only once mail is being seen.

## Trend vs. 2026-07-14
- **Aggregate metrics: flat.** Delivered 302, bounced 25, spam-blocked 22, opened 0, replied 0 — identical to yesterday. No movement in delivery, bounce, spam, open, or reply.
- **Only change:** step-level counts that read `"loading"` yesterday are now populated, confirming the full-progression / zero-reply picture and revealing the back-loaded spam-block pattern (issue 2).
- **Predicted effect of last round's diagnosis:** the #1 call was "fix deliverability first." One day later, none of the deliverability metrics have moved. Either no remediation was applied, or it's too soon to see effect (reputation changes lag days-to-weeks). Do not expect same-day movement.

## Open questions
- **Is open tracking enabled** on this sequence/mailbox, and is the pixel being stripped? 0% on 302 delivered still strongly suggests tracking is off or blocked — confirm in Apollo.
- **Where is delivered mail actually landing?** "Delivered" = accepted by the receiving server, not inboxed. Run inbox-placement/seed tests; the rising spam-block on follow-ups suggests spam-foldering is likely wider than the 22 explicit blocks.
- **Are the 25 bounces and 22 spam-blocks concentrated** on one recipient domain or one sending mailbox? Concentration would isolate a specific reputation problem vs. list-wide rot.
- **What is the sector-5 list composition?** Confirm it's plumbing-only, since the copy is plumbing-specific.
- **Why do aggregate counts exactly match yesterday?** Confirm this is a genuine 24-hour re-pull and not a cached/duplicate export before acting on the "no change" conclusion.
- **Reply sentiment is moot at 0 replies**, but for future rounds: Apollo does not expose sentiment via API, so any future reply count must be spot-checked manually — reply rate includes angry/negative replies.

## Recommended changes

Deliverability is still the gate: 86.5% delivery, 7.6% bounce, 6.3% spam-block, and an implausible 0/302 opens that almost certainly signal disabled open tracking and/or spam-foldering rather than reader indifference. Until inbox placement and tracking are confirmed and reputation recovers, no copy change can be judged, so the fixes below lead with non-copy deliverability work and keep copy edits minimal and defensive (strip spam-trigger phrasing, remove the payments scope claim, de-hard-code the vertical, and give each follow-up a real new angle). Expect no same-day movement; reputation changes lag days to weeks.

### Change 1 — step 1 — applied automatically (PUT /emailer_templates/69f3658fcbda1500152a57a0)

**Why:** Removes likely spam-trigger phrasing the eval flagged (the "10-30% lost revenue" money-percentage claim), drops the "can even take payments" line that overstates scope per the brief's must-not-say list, replaces plumbing-specific hard-coding with vertical-neutral copy in case sector-5 is mixed, and strips en dashes for cleaner rendering. Subject switched to a lowercase internal-memo style that typically outperforms marketing questions once mail actually reaches the inbox.

**Subject before:** Who answers when you’re on the job?
**Subject after:** who's answering your phones?

**New body:**
```
Hi {{contact.first_name}},

When your crew is out on a job, what happens to a new customer call? Voicemail, a busy line, or nobody at all?

Most owners we work with quietly lose good leads that way, because the caller just tries the next company on the list.

Call Boss is a US based team that answers as your office and books jobs right in your CRM, without you hiring in house.

Want me to put together a quick look at how many calls {{account.name}} might be missing, plus a simple way to catch them?

Just reply "Plan" and I'll send it over. No pitch, just a straightforward breakdown.
```

### Change 2 — step 2 — applied automatically (PUT /emailer_templates/69f3667ecb335e000d430221)

**Why:** The eval flagged steps 2 and 3 as dead weight and 'just bumping' follow-ups. This gives the second touch a genuinely new angle, the brief's #1 objection ("it makes more sense to bring it in house"), and answers it with the brief's own scale/cost point rather than repeating the step-1 ask.

**Subject before:** 
**Subject after:** 

**New body:**
```
{{contact.first_name}}, a lot of owners tell me hiring an in-house receptionist feels like the safer move.

The math usually flips once you add wages, training, and turnover. We scale up or down with your call volume at a set weekly cost instead.

Want me to send that missed-calls plan so you can compare the two side by side?
```

### Change 3 — step 3 — applied automatically (PUT /emailer_templates/69f36823fc760d0021216f30)

**Why:** Adds a third distinct angle (after-hours / peak-time coverage, pain points #6 and #4 in the brief) instead of a generic breakup, and keeps a one-line yes/no format for the lowest-friction commitment this cold audience will accept.

**Subject before:** 
**Subject after:** 

**New body:**
```
Last note on this, {{contact.first_name}}.

If calls slipping through after hours or during your busy stretches is costing you jobs, reply "yes" and I'll send the plan. If the timing's off, no worries and I'll close this out.
```

## A/B test plan

**Hypothesis:** Once inbox placement is restored, changing the step-1 subject from a marketing-style question to a lowercase internal-memo style will improve open rate because it reads like a peer note rather than a pitch, which cold service-business owners are more likely to open.
**Variant A:** who's answering your phones?
**Variant B:** missed a call today?
**Success metric:** Open rate, measured only after open tracking is confirmed live and inbox placement passes a seed test.
**Decision rule:** Hold until at least 150-200 delivered per variant with tracking confirmed. Call the higher open rate the winner only if the relative difference is >=20%; otherwise keep variant A as the simpler default. Do not change body copy, send time, or list source while the subject test runs, or attribution is lost.

## Manual changes (targeting / timing / list)

- Confirm open tracking is actually enabled on this sequence/mailbox in Apollo; a literal 0/302 with Apple Mail and bot scanners in the mix almost always means the pixel is off or stripped. Fix before drawing any engagement conclusions.
- Run an inbox-placement / seed test (e.g., GlockApps or a manual seed set across Gmail, Outlook, Yahoo) to see where 'delivered' mail actually lands. Rising spam-blocks on steps 2-3 suggest spam-foldering is wider than the 22 explicit blocks.
- Re-verify the entire sector-5 list with a dedicated verification tool (NeverBounce/ZeroBounce), not just Apollo. A 7.6% bounce on 'verified' data means stale records; remove catch-all and risky addresses before resending.
- Check whether the 25 bounces and 22 spam-blocks concentrate on one recipient domain or one sending mailbox. If concentrated, pause that mailbox or segment rather than the whole campaign.
- Throttle daily volume down from 60 to ~25-30 per mailbox while reputation recovers, and add mailboxes/warm-up rather than pushing volume through a domain that's losing trust.
- Space follow-ups further apart (step 2 and 3 are only 3 days each). Widening to 4-5 days reduces the reputation-degradation signature seen as spam-blocks climb across the aging thread.
- Confirm sector-5 list composition is plumbing-only; if it is mixed verticals, the vertical-neutral rewrites above are required and Apollo lists should be segmented by trade.
- Add the Calendly link as a soft P.S. or as the ask once someone replies 'Plan', so the sequence is structurally connected to the brief's booked-call goal instead of ending at a 'Plan' reply.
- Confirm this pull is a genuine 24-hour re-pull and not a cached/duplicate export, since aggregate counts exactly match the prior day before acting further.

## Next review

Re-run the evaluation 7-10 days after the deliverability fixes ship AND at least 150 newly delivered emails have gone out on a confirmed-clean list with tracking verified. Watch first for delivery rate climbing toward 95%+, bounce under 2%, and spam-block under 1%; only if those clear should opens/replies be treated as real copy signals. If opens are still 0 after tracking is confirmed live, the problem is placement (spam folder), not copy.

---

# CB Email Revamp - sector 4 (69f3606091ce91000d1e89f3)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 3**

## Evaluation

# Campaign Evaluation — CB Email Revamp - sector 4 — 2026-07-15

## Verdict
Nothing has changed since yesterday. The unique counts are **identical to the 2026-07-14 pull** (296 delivered, 30 bounced, 19 spam-blocked, 0 opened, 0 replied), which means none of the gate-level problems flagged in the last report have been touched. The campaign is still failing at the deliverability gate (delivery 85.8%, bounce 8.7%, spam-block 5.5% — 4–18x alarm thresholds), open tracking is still returning an impossible 0, and there are still 0 replies on 296 delivered. Until the gate is fixed, every engagement signal below remains unreadable; fixing it is the precondition for the ~6 replies/2% target the brief wants and is worth the entire campaign.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Delivery rate | 85.8% (296/345) | >97% | 95%+ | 🔴 |
| Bounce rate | 8.7% (30/345)* | <2% alarm | — | 🔴 |
| Spam-block rate | 5.5% (19/345) | <0.3% alarm | — | 🔴 |
| Open rate | 0% — **tracking broken** | 30–50% | 30% | 🔴 (unmeasurable) |
| Reply rate | 0% (0/296) | 1–3% | 2% | 🔴 |
| Positive reply rate | 0% | — | 1.5% | 🔴 |
| Meetings / 100 delivered | 0 | — | 1 | 🔴 |
| Unsubscribe rate | 0% | <1% | — | ⚪ (meaningless at this engagement) |

*On a delivered+bounced denominator, bounce = 9.2% (30/326). Either way, severely elevated.

Note: the API summary again returned `delivery_rate_pct` and `bounce_rate_pct` as `null` and `unique_scheduled` as `0`. Rates above are computed by hand from the unique counts. Per-step delivery/bounce/spam fields are now populated (they were `"loading"` yesterday), but they are per-send counts, not unique contacts, so they don't reconcile 1:1 with the unique totals.

## Funnel
Attempted (delivered + bounced + spam-blocked) = **345**
→ Delivered **296 (85.8%)** — 49 attempted sends lost to bounces (30) + spam blocks (19)
→ Opened **0 (0%)** — not credible for genuine sends; tracking is off or the pixel isn't firing
→ Replied **0 (0%)**

**Biggest leak:** the gate, unchanged from yesterday. ~14% of attempted sends never land, and the combination of high bounce + high spam-block is the leading indicator of domain-reputation damage, which further suppresses inbox placement for mail that *does* deliver. The 0 opens compound this — we cannot see whether delivered mail is even being read.

The only trustworthy signal is replies (they don't depend on a tracking pixel): **0 replies on 296 delivered**, versus ~6 expected at the 2% target. That is a real miss, but n=296 is modest and it can't be cleanly separated from the deliverability failure beneath it, so read it as "clearly below target," not "statistically damning."

## Step-by-step
Step-level counts are now available (per-send, so they exceed the unique totals):

| Step | Type | Subject | Delivered | Bounced | Spam | Opened | Replied | Verdict |
|---|---|---|---|---|---|---|---|---|
| 1 | Auto email | "Who answers when you're on the job?" | 308 | 18 | 8 | 0 | 0 | Carries the most bounces (18) — first-touch hitting bad addresses; 0 replies |
| 2 | Auto email | (bump, no subject) | 296 | 9 | 8 | 0 | 0 | 0 replies |
| 3 | Auto email | (breakup, no subject) | 289 | 4 | 4 | 0 | 0 | 0 replies |

- **No step produced a single reply.** No step is carrying the campaign and none is dead weight relative to another — none is working.
- **Bounces concentrate on step 1** (18 of the per-step bounces), consistent with a list-hygiene problem surfacing on first contact rather than a send-infrastructure issue that would spread evenly.
- **Single variant per step** — no A/B test is running, so there is no winner to declare. Sample sizes (289–308 delivered/step) would be large enough to test on, but there is nothing to compare. Moot until the gate is fixed.

## Copy-to-audience fit
Copy is unchanged from the last pull, so all prior findings still stand:

- **Explicit constraint still violated — dashes.** The brief says "Please don't use em dashes." Email 1 is full of en/em dashes ("10–30% lost revenue," "take payments – without," "answer-every-call setup –"), and steps 2 and 3 use them too ("circling back -", "Last try on this –"). Direct, checkable rule break, not yet fixed.
- **Possible scope overstatement still present.** "can even take payments" is not among the brief's listed services (call answering, CRM, estimate/scheduling, back-office), and the brief explicitly warns against overstating scope. Still flagged.
- **Pain-point lead is good.** Subject "Who answers when you're on the job?" and the opening hit pain point #1 (missed calls while crews are in the field) squarely.
- **Category-fit CTA is good.** "Reply with 'Plan'" is a low-commitment ask, appropriate for a skeptical, category-aware SMB owner; it correctly defers the Calendly call.
- **Answers a stated objection.** "100% US-based team" directly addresses the brief's listed question about staff location.
- **Vertical mismatch risk unresolved.** Body hard-codes "For HVAC companies we work with." Fine if "sector 4" is a pure HVAC list; off-putting to the other verticals if mixed. Still unconfirmed.
- **Plain-text formatting bug persists.** `body_text` jams sentences with no spaces ("get missed completely?For HVAC companies"). HTML renders fine, but plain-text clients and some filters see a wall of text — a minor readability/deliverability risk on top of the main one.
- **Tone** is practical and reasonably warm, slightly stat-forward vs. the "relief/trust" register the brief prefers.

## Trend vs. 2026-07-14
- **Zero movement on the numbers that matter.** Unique delivered (296), bounced (30), spam-blocked (19), opened (0), and replied (0) are all identical to yesterday. Whatever the last report recommended, none of it has landed in the metrics.
- **The only difference is data completeness, not performance:** per-step fields that read `"loading"` yesterday are now populated, and step 3's delivered figure resolved from 273 → 289. That is the previous pull finalizing, not a real change in outcomes.
- **The last report's predicted-effect check is therefore N/A** — no fixes were applied, so nothing could have had its predicted effect. Deliverability, open tracking, and copy constraints all remain exactly as diagnosed.

## Prioritized issues
1. **Deliverability still broken at the gate** — evidence: bounce 8.7% (30/345) and spam-block 5.5% (19/345), both far past alarm thresholds; delivery 85.8% vs 95% target; unchanged day-over-day — **impact: high.** Corrupts every downstream metric and continues to burn domain reputation.
2. **Open tracking still non-functional** — evidence: 0 opens on 296 delivered is impossible for genuine sends — **impact: high.** The client's central hypothesis is about opens and still cannot be measured.
3. **Zero replies on 296 delivered** — evidence: 0 vs ~6 expected at the 2% target — **impact: high, but confounded** by #1/#2 and limited by modest n; do not attribute to copy until the gate and tracking are clean.
4. **No action taken since last evaluation** — evidence: identical unique counts to 2026-07-14 — **impact: high (process).** The diagnosis is stalling at the report stage instead of the fix stage.
5. **Explicit copy constraint still violated (dashes)** — evidence: en/em dashes throughout all three steps against a stated rule — **impact: low on performance, high on client trust/compliance.**
6. **Possible service-scope overstatement ("take payments")** — evidence: not among brief's listed services; brief warns against it — **impact: medium** (misrepresentation / bad-fit reply risk).
7. **No A/B variants + plain-text formatting bug** — evidence: single variant per step; missing spaces in `body_text` — **impact: low now, blocks optimization later.**

## Open questions
- **Was this a fresh send or the same pull re-read?** Identical unique counts one day apart could mean the campaign is paused/idle, or that no new sends went out. Confirm in Apollo whether contacts are actively progressing through the sequence.
- **Is open tracking intentionally disabled?** 0 opens is either a config choice, a pixel/HTML issue, or a pull artifact. Verify before trusting any open-rate reading.
- **Reply sentiment is moot at n=0**, but the moment replies appear, remember Apollo counts angry/negative replies the same as positive ones — spot-check manually before celebrating any reply-rate lift.
- **Source and age of "sector 4"?** An 8.7% bounce rate points to stale/unverified data despite "cleaned through Apollo." Confirm how recently the list was verified and whether it's all HVAC (to match the hard-coded copy).
- **Domain/IP reputation:** with 5.5% spam-block on a supposedly warmed domain, check Google Postmaster / Microsoft SNDS — the warm-up may have lapsed or the volume/content is tripping filters.

## Recommended changes

The campaign is stalled at the deliverability gate (85.8% delivery, 8.7% bounce, 5.5% spam-block) with broken open tracking and zero replies on 296 delivered, and nothing has moved since the prior pull. No copy rewrite can help mail that lands in spam, so the priority is list re-verification, domain-reputation repair, volume throttling, and confirming the campaign is actually sending and tracking. Copy changes here are limited to compliance and hygiene fixes (remove em dashes, drop the unsupported 'take payments' claim, de-risk the hard-coded HVAC line, add new follow-up angles) that are cheap to make while deliverability is being restored.

### Change 1 — step 1 — applied automatically (PUT /emailer_templates/69f361bf28f2f2001d4f2151)

**Why:** Removes every en/em dash (explicit brief constraint the eval flagged in issue #5), drops the unsupported 'can even take payments' claim (scope overstatement, issue #6), and replaces the hard-coded 'For HVAC companies' with 'service companies' to remove the vertical-mismatch risk on a possibly mixed list. Also strips the aggressive '10-30% lost revenue' stat toward the warmer relief/trust register the brief prefers, while keeping the strong pain-point hook and low-commitment 'Plan' CTA the eval praised.

**Subject before:** Who answers when you’re on the job?
**Subject after:** Who answers when you're on the job?

**New body:**
```
Hi {{contact.first_name}},

When your crews are out in the field, what happens to new customer calls? Voicemail, a busy office, or missed completely?

For service companies we work with, those few missed calls add up fast, because most homeowners just dial the next name on the list.

Call Boss is a 100% US-based team that answers as your office and books jobs right into your CRM, without you hiring in-house staff.

Want me to put together a quick missed-calls plan for {{account.name}}? A simple look at how many calls you're likely losing and an answer-every-call setup.

Just reply with "Plan" and I'll send it over. No pitch deck, just a straightforward breakdown.
```

### Change 2 — step 2 — applied automatically (PUT /emailer_templates/69f362bbab9ef40021c800a0)

**Why:** Replaces the empty 'circling back' bump (a dead follow-up per the diagnosis map) with a new angle that answers the brief's #1 objection, 'it makes more sense to hire in-house,' using the brief's own scale/cost rebuttal. Removes the hyphen dash and gives the recipient a fresh reason to reply instead of just re-asking.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hey {{contact.first_name}}, a lot of owners tell me they'd rather hire office staff than use a service like ours. Fair.

The catch is one hire calls in sick, takes vacation, and eventually turns over. We scale with you and cover nights and weekends too, usually for less than a part-time salary.

Still happy to build that missed-calls plan for {{account.name}} if you want to see the numbers. Want it?
```

### Change 3 — step 3 — applied automatically (PUT /emailer_templates/69f362fe9b0ef4000d5b5903)

**Why:** Removes the em dash and reframes the breakup around zero-cost, low-effort value ('five minutes, no cost to look') rather than a generic yes/no, giving the final touch a distinct low-friction angle while keeping the warm, respectful tone the brief calls for.

**Subject before:** 
**Subject after:** 

**New body:**
```
I'll close this out so I'm not cluttering your inbox, {{contact.first_name}}.

If missing calls while you're on a job is costing you work, the plan takes me five minutes to build and there's no cost to look. Reply "yes" and it's yours. If now isn't the time, no worries at all.
```

## A/B test plan

**Hypothesis:** Changing the step-1 subject line to a shorter, internal-memo style line will raise open rate versus the current full-question subject, because terse lowercase subjects typically read as personal rather than marketing to skeptical SMB owners. NOTE: do not launch this test until deliverability is fixed and open tracking is confirmed working, or the results will be unreadable.
**Variant A:** Who answers when you're on the job?
**Variant B:** missed calls
**Success metric:** Open rate as the primary read, reply rate as the confirming read.
**Decision rule:** Call a winner at >=150 delivered per variant with working open tracking; require a >=20% relative lift in open rate to switch, otherwise keep Variant A (the more descriptive line). Hold body copy, send time, and volume constant while the test runs.

## Manual changes (targeting / timing / list)

- Pause the sequence immediately and confirm in Apollo whether contacts are actively progressing; identical unique counts two days running suggest it may be idle or double-read (eval open question).
- Re-verify the entire 'sector 4' list through a dedicated verification tool (not just Apollo's native filter) and remove all catch-all/risky/undeliverable addresses before resuming; the 8.7% bounce points to stale data and step 1 carries most bounces.
- Check Google Postmaster Tools and Microsoft SNDS for the sending domain; a 5.5% spam-block on a supposedly warmed domain indicates reputation damage or lapsed warm-up.
- Throttle daily volume from 60 down to 20-30 while reputation recovers, and resume ramp only once bounce is under 2% and spam-block under 0.3%.
- Verify open tracking is enabled and the pixel is firing (send a seed test to your own inbox); 0 opens on 296 delivered is not credible and blocks the client's core open-rate hypothesis.
- Confirm whether 'sector 4' is a pure HVAC list; if it is, you may re-insert HVAC-specific language in step 1, if mixed keep the generic 'service companies' phrasing.
- Fix the plain-text version so sentences are space-separated (current body_text jams words together), which hurts readability in plain-text clients and can trip filters.

## Next review

Re-run the evaluation after the list is re-verified and roughly 200+ new contacts have been delivered per step post-fix (about 2-3 weeks at the reduced 20-30/day volume). Watch first for the gate metrics: delivery back above 95%, bounce under 2%, spam-block under 0.3%, and a non-zero open rate confirming tracking works. Only once the gate is clean should reply rate be judged against the 2% target and the subject-line A/B test be launched.

---

# CB Email Revamp - sector 3 (69f25cd4bae977000dbd0c5e)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 2**

## Evaluation

# Campaign Evaluation — CB Email Revamp - sector 3 — 2026-07-15

## Verdict
Nothing has changed since yesterday's evaluation, and nothing is fixed. Deliverability is still failing on two fronts (bounce ~4.7%, spam-block ~3.5%, both multiples of alarm thresholds) and open tracking is still arithmetically broken (5 opens < 4 replies), which means the client's working hypothesis — "not enough people open" — remains unverifiable. Deliverability plus tracking are the only things worth fixing right now; every engagement number below is unreliable until they are, and fixing them is worth more than any copy edit.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Delivery rate | ~91.9% (316 / ~344 attempted) | >97% | 95%+ | 🔴 |
| Bounce rate | ~4.7% (16 / ~344) | alarm >2% | — | 🔴 |
| Spam-block rate | ~3.5% (12 / ~344) | alarm >0.3% | — | 🔴 |
| Open rate | 1.58% (5 / 316) | 30–50% typical | 30% | 🔴 (tracking broken) |
| Reply rate | 1.27% (4 / 316) | 1–3% typical | 2% | 🟡 |
| Click rate | 0% | — | — | ⚪ (no links used) |
| Unsubscribe rate | 0.32% (1 / 316) | alarm >1% | — | 🟢 |
| Meetings / 100 delivered | Unknown (0 confirmed) | — | 1 | 🔴 / unmeasurable |

Note: "attempted" is estimated as delivered + bounced + spam_blocked (316 + 16 + 12 = 344) because the API returned null delivery/bounce rates. These figures are unchanged from the 2026-07-14 report.

## Funnel
Delivered 316 → Opened 5 (1.58%) → Replied 4 (1.27%). Clicked 0 (no links in copy).

Two structural problems, both identical to yesterday:

1. **Opens < replies is impossible under working tracking.** You cannot reply without opening, and opens are normally *inflated* by Apple Mail Privacy Protection and bots. A 1.58% open rate sitting *below* the reply rate means the tracking pixel is disabled, stripped, or not firing. Do not read anything into the "low open" number — it is not a measurement, it is a broken instrument.

2. **The largest provable leak is upstream of engagement:** ~8% of attempts never reached the inbox (4.7% bounced + 3.5% spam-blocked). At this volume that is active reputation damage, not noise.

Because deliverability is compromised and open tracking is broken, the reply funnel is directional at best and built on n=4.

## Step-by-step
| Step | Variant | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 — "Who answers when you're on the job?" | A | 324 | 1 | 0 | **Zero replies.** The full-pitch opener still converts no one. |
| 2 — (blank subject) "circling back…" | A | 317 | 1 | 1 | 1 reply. Functional but negligible. |
| 2 — (blank) | B | 0 | 0 | 0 | Still unfinished/unapproved (`to_be_reviewed`, empty body). Dead split. |
| 3 — "Last try… yes or no?" | A | 313 | 3 | 3 | All 3 "opens" are replies — the breakup line carries 3 of 4 total replies. |

Key findings:
- **All 4 replies come from follow-ups (steps 2 and 3); step 1 produced zero.** The workhorse email is dead weight for replies; the breakup line does the work. The blended 1.27% hides a first touch that converted no one across 324 sends.
- **Sample sizes remain far too small to declare any winner.** 4 total replies across ~315 delivered per step — nothing here is statistically distinguishable. "Step 3 wins" is a hint, not a finding.
- Step 2 variant B is still empty and unapproved, so the A/B split is not actually running.

## Copy-to-audience fit
No copy has changed since the prior report; the same fit issues stand:

- **Vertical mismatch.** Step 1 hardcodes "For landscaping companies we work with," sent across a mixed "sector 3" list spanning HVAC, plumbing, roofing, pest control, etc. Non-landscaping recipients get a message that visibly isn't about them.
- **CTA diverges from the brief.** The brief's core CTA is "Schedule a call" via Calendly; the emails use a soft reply CTA ("Reply with 'Plan'"). Defensible for deliverability (explains 0% clicks), but it's a different funnel than the brief describes, and it makes "meetings booked per 100 delivered" (target: 1) unmeasurable from this data.
- **Dash style.** Brief says no em dashes; copy uses en dashes (–) heavily — technically compliant, but the dash-heavy style the instruction was aimed at is still there.
- **Plain-text formatting defects.** Run-together sentences in the text version ("completely?For", "next company.CallBoss", "in-house staff.If") and a space before the comma in "{{contact.first_name}} ,". HTML renders fine; the text fallback looks broken, which is both a trust and a spam signal.
- **What's still good:** copy hits real brief pain points (missed calls → lost revenue, "without adding in-house staff") and preempts the "are they US-based" objection. Tone is warm and practical, in line with the brief. The bones are fine; the targeting and mechanics around them are not.

## Trend vs. 2026-07-14
**Nothing moved.** Every top-line and per-step number is identical to yesterday's report: 316 delivered, 16 bounced, 12 spam-blocked, 5 opened, 4 replied, 1 unsub, and the same step-level splits. This tells you one of two things: either no changes were shipped since the last evaluation, or they were shipped too recently to have generated new sends. The two flagged blockers (deliverability failure and broken open tracking) are still fully present. The last report's top recommendations have not yet had any measurable effect — because there is no new data to show one.

## Prioritized issues
1. **Deliverability is failing** — evidence: bounce ~4.7% and spam-block ~3.5%, both multiples of alarm thresholds; delivery ~91.9% vs. 95% target — estimated impact: **high**. Gates everything and is degrading sender reputation. List hygiene and/or content-triggered filtering are the suspects.
2. **Open tracking is non-functional** — evidence: 5 opens < 4 replies; 1.58% with zero Apple/bot inflation — estimated impact: **high**. The client's core hypothesis ("not enough opens") cannot be validated until this is fixed. You are flying blind at the top of the funnel.
3. **Step 1 produces zero replies** — evidence: 0/324 replied on the first touch; all replies come from steps 2–3 — estimated impact: **high**. The primary pitch email earns nothing on its own.
4. **No change since last evaluation** — evidence: data identical to 2026-07-14 — estimated impact: **high for decision-making**. Confirm whether fixes were actually deployed; if so, they haven't produced new sends, and the campaign is effectively stalled.
5. **Vertical/copy mismatch on a mixed list** — evidence: "landscaping companies" hardcoded in step 1 to a multi-vertical sector — estimated impact: **medium**.
6. **Empty, unapproved step-2 variant B** — evidence: 0 delivered, blank body, `to_be_reviewed` — estimated impact: **low** (wasted split).
7. **Plain-text formatting defects / dash-style non-compliance** — evidence: run-together sentences, space-before-comma, en dashes throughout — estimated impact: **low-medium**.

## Open questions
- **Were any changes actually shipped since 2026-07-14?** The identical data suggests either no deploy or no new sends. Confirm in Apollo whether the sequence was edited and whether sending is still active.
- **Reply sentiment is unknown.** Apollo's API does not expose it. All 4 replies count equally whether they say "send the plan" or "stop emailing me." The 1 unsubscribe and the "yes or no?" breakup framing make some negative replies plausible. **Spot-check the actual reply text in Apollo before treating 1.27% as interest.**
- **Is the open tracking pixel enabled/functioning?** Confirm in Apollo settings — this determines whether the "low opens" story is even real.
- **What's driving bounces and spam-blocks?** Check the raw response for which domains/recipients failed — list quality vs. content triggers vs. sending-domain reputation.
- **Did any of the 4 replies route to a booked meeting?** With a reply-based CTA and no Calendly link, 0 clicks tells you nothing here. Verify manually.
- **Company-size targeting:** the brief targets 50–100 employees, which is large for "small service businesses" and may not map to owner/office-manager decision-makers. Confirm the list matches the intended buyer.

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

---
