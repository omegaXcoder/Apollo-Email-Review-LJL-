# Campaign performance report — 2026-07-14

# CB Email Revamp - sector 5 (69f365095f308f0015f454db)

_Brief used: briefs/call-boss.md_

**Auto-apply is off — all changes below are proposals.**

## Evaluation

# Campaign Evaluation — CB Email Revamp - sector 5 — 2026-07-14

## Verdict
This campaign is failing at the deliverability gate and cannot be honestly assessed on copy or engagement yet. Bounce (~7.6%) and spam-block (~6.3%) rates are both roughly 20x over their alarm thresholds, and the campaign shows **0 opens and 0 replies across 302 delivered and all three steps** — a result so extreme it points to broken open-tracking and/or wholesale spam-folder placement rather than genuine reader indifference. Fixing the sending/list-hygiene problem is the entire ballgame here; every engagement number below is unreliable until it is resolved.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Delivery rate | 86.5% (302 / 349 attempted) | >97% | 95%+ | 🔴 |
| Bounce rate | 7.6% (25 / 327) | <2% alarm | — | 🔴 |
| Spam-block rate | 6.3% (22 / 349) | >0.3% alarm | — | 🔴 |
| Open rate | 0% (0 / 302) | 30–50% typical | 30% | 🔴 |
| Reply rate | 0% (0 / 302) | 1–3% typical | 2% | 🔴 |
| Positive reply rate | 0% | — | 1.5% | 🔴 |
| Unsubscribe rate | 0% | <1% | — | ⚪ (meaningless at 0 opens) |
| Meetings / 100 delivered | 0 | — | 1 | 🔴 |

Note: `delivery_rate_pct`, `bounce_rate_pct`, and several step-level counts came back `null`/`"loading"` in the pull, and `unique_scheduled` = 0 is an anomaly. Rates above are computed manually from the raw unique counts (delivered 302, bounced 25, spam-blocked 22).

## Funnel
```
Attempted (~349)
  → Delivered   302   (86.5% of attempted)   ← 47 lost: 25 bounced + 22 spam-blocked
  → Opened        0   (0.0% of delivered)     ← full drop-off
  → Replied       0   (0.0% of delivered)
```
Two distinct leaks, and it's important not to conflate them:

1. **Delivered → attempted (13.5% loss).** A 7.6% bounce plus 6.3% spam-block on a list the brief says is "Apollo verified" and a domain that is "warmed up" indicates either stale/unverified data or a reputation problem on the sending domain. This is the gate.
2. **Delivered → opened (100% loss).** A literal 0 across 302 delivered is not a plausible real-world outcome even for a bad campaign — Apple Mail privacy and bot scanners alone normally inflate opens well above zero. This almost certainly means the **open-tracking pixel is disabled or stripped**, OR every delivered message is landing in spam where it's never rendered. Either way, opens and reply rate cannot be trusted as engagement signals right now.

The single biggest *reportable* leak is deliverability. The 0% open figure is a measurement/placement artifact to diagnose, not a copy verdict.

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 | "Who answers when you're on the job?" | `loading` (unresolved in pull) | 0 | 0 | Can't confirm send count; no replies |
| 2 | (empty — threads on step 1) | 299 | 0 | 0 | Dead weight so far |
| 3 | (empty — threads on step 1) | 287 | 0 | 0 | Dead weight so far |

Observations:
- **Everyone flowed through all three steps** (299 → 287 delivered on steps 2 and 3), which independently confirms **zero replies** — a reply would have removed contacts from the sequence. The near-full progression is consistent with the 0 reply count.
- **No variant testing exists.** Each step has a single variant, so there is nothing to A/B compare. With only ~302 delivered total, you would not yet have the ~150–200 delivered *per variant* needed to call a winner even if variants existed.
- No step is producing incremental replies, but with the deliverability gate failing this tells us nothing about the copy's merit.

## Copy-to-audience fit
I can read the copy, but with 0 trustworthy opens none of these observations are validated by performance — they're structural notes, not proven causes.

- **Vertical hard-coding.** Step 1 says "For plumbing companies we work with" and "When your crews are in the field." If sector 5 is genuinely a plumbing-only list, that's on-target and specific (good). If the list mixes verticals, the plumbing reference is a mismatch. Worth confirming the list composition.
- **CTA drifts from the stated goal.** The brief's win condition is a **booked Calendly call**. The email instead asks the reader to "Reply with 'Plan'." That's a legitimately lower-friction micro-CTA and defensible for a cold audience — but it means the sequence never actually presents the calendar link, so even a warm reply requires a second manual hop to a meeting. This is a deliberate strategy choice, not an error, but flag that it decouples the campaign from the "meetings booked" target metric.
- **Scope claim to check.** "and can even take payments" may overstate scope; the brief warns against claiming beyond stated services. Confirm payment handling is actually offered.
- **Dashes.** The brief says no em dashes. The copy avoids em dashes but leans heavily on en dashes ("–") in nearly every sentence. Technically compliant, but the spirit of the note (clean, plain copy) is stretched, and dense dash usage can read as choppy.
- **Pain-point lead is solid.** The opener leads with the brief's #1 pain (missed calls while crews are in the field → lost revenue), uses a concrete "10–30% lost revenue" figure, and names the "100% US-based team" proof point that answers a top objection in the brief. Structurally this is aligned with the brief; it just can't be judged on results yet.

## Prioritized issues
1. **Deliverability is broken and gates everything.** Evidence: bounce 7.6% (25/327) and spam-block 6.3% (22/349), both far past alarm thresholds; delivery 86.5% vs. 95% target. — **Impact: high.** Nothing else can be evaluated or improved until send reputation and list verification are fixed.
2. **Zero opens across 302 delivered is a measurement/placement failure.** Evidence: 0/302 opened is statistically implausible if tracking were live and mail were inboxing. — **Impact: high.** Until you confirm whether the open pixel is on and where mail is landing, open rate and reply rate are uninterpretable.
3. **Zero replies through a full 3-step sequence.** Evidence: 0 replies, and near-full progression to steps 2 (299) and 3 (287) confirms no one exited via reply. — **Impact: high**, but currently confounded by issues 1 and 2 — do not attribute this to copy yet.
4. **Data-pull integrity.** Evidence: `scheduled` = 0, several rate fields `null`, step-1 counts `"loading"`. — **Impact: medium.** Re-pull to confirm the numbers before making decisions; the analysis above assumes the unique-level counts are accurate.
5. **CTA/metric misalignment (structural).** Evidence: brief targets booked calls; sequence only asks for a "Plan" reply and never surfaces the Calendly link. — **Impact: medium**, and only relevant once mail is actually being seen.

## Open questions
- **Is open tracking enabled** on this sequence/mailbox, and is the tracking pixel being stripped? A 0% open rate on 302 delivered strongly suggests tracking is off or being blocked — confirm in Apollo before treating opens as real.
- **Where is delivered mail actually landing?** "Delivered" in Apollo means accepted by the receiving server, not inboxed. Run inbox-placement/seed tests — the spam-block rate suggests spam-foldering may be much wider than the 22 explicitly blocked.
- **Are the 22 spam blocks and 25 bounces concentrated** on one recipient domain or one sending mailbox? Concentration would point to a specific reputation problem rather than list-wide rot.
- **What is the sector-5 list composition?** Confirm it's plumbing-only, since the copy is plumbing-specific.
- **Reply sentiment is moot at 0 replies**, but note for future rounds: Apollo does not expose sentiment via API, so any future reply count must be spot-checked manually — reply rate includes angry/negative replies.

## Recommended changes

The campaign is failing at the deliverability gate (7.6% bounce, 6.3% spam-block, 86.5% delivery) with an implausible 0 opens across 302 delivered, which points to disabled/stripped open tracking or wholesale spam-foldering rather than copy failure. Deliverability and measurement must be fixed before copy can be honestly judged, so the copy rewrites below are deliberately minimal and focused on removing spam-trigger phrasing, dropping an over-scoped payment claim, and giving follow-ups genuinely new angles. Expect no reliable read on engagement until inbox placement is restored and open tracking is confirmed live.

### Change 1 — step 1 — proposed (auto-apply off)

**Why:** Removes the 'can even take payments' claim the eval flagged as possible scope overstatement (brief forbids overstating scope), strips the dense en-dash usage that violates the spirit of the no-dashes note and reads choppy, and de-hardcodes 'plumbing' to 'field/crew' language so the copy fits a mixed sector-5 list. Subject switched to a lowercase, internal-memo style short line per cold-email best practice. Kept the strong missed-calls hook, US-based proof point, and low-friction 'Plan' CTA.

**Subject before:** Who answers when you’re on the job?
**Subject after:** missed calls while you're in the field?

**New body:**
```
Hi {{contact.first_name}},

When your crew is out on jobs, what happens to new customer calls? Voicemail, a busy line, or missed completely.

Most owners we work with lose real jobs this way, because the homeowner just dials the next company on the list.

Call Boss is a 100% US-based team that answers as your office and books jobs straight into your CRM, no in-house hire needed.

Want me to put together a quick missed-calls plan for {{account.name}}? Reply 'Plan' and I'll send it over. No pitch deck, just a straightforward breakdown.
```

### Change 2 — step 2 — proposed (auto-apply off)

**Why:** The eval flagged later steps as dead weight that add no new angle ('circling back' is a pure bump). This introduces the brief's #2 pain point (no budget/bandwidth to hire in-house) and directly answers the top objection ('why hire you when I can hire office staff') with the cost/scale angle from the brief, giving a new reason to reply.

**Subject before:** 
**Subject after:** 

**New body:**
```
{{contact.first_name}}, quick math: a full-time receptionist runs several thousand a month plus training and turnover, and still can't cover after-hours.

We handle your phones for a fraction of that and scale as {{account.name}} grows. Want me to send that missed-calls plan so you can compare?
```

### Change 3 — step 3 — proposed (auto-apply off)

**Why:** Turns a generic breakup into one with a fresh angle: the brief's after-hours/24-7 coverage pain plus the reviews/retention pain point. Keeps the clean yes/no breakup structure that gives a graceful exit while adding one last concrete reason to engage.

**Subject before:** 
**Subject after:** 

**New body:**
```
Last note on this, {{contact.first_name}}. The calls that hurt most are the after-hours and weekend ones that go straight to voicemail and never call back.

We answer those too, which protects your reviews and repeat customers. Still happy to send the missed-calls plan for {{account.name}}, or I'll leave you be. Yes or no?
```

## A/B test plan

**Hypothesis:** Once mail is inboxing and open tracking is confirmed, a short lowercase internal-memo subject will beat the current question-style subject because it reads like a peer's note rather than marketing, lifting opens toward the 30% target.
**Variant A:** Who answers when you're on the job?
**Variant B:** missed calls while you're in the field?
**Success metric:** Open rate, with reply rate as the tiebreaker. Do not call a winner until at least 150-200 delivered AND confirmed-inboxed per variant.
**Decision rule:** If one variant beats the other by >=20% relative open rate at >=150 delivered per variant, adopt it; if the gap is <20%, keep Variant B (the simpler, more casual line). Do not change body copy, send times, or CTA while the subject test runs so open-rate attribution stays clean.

## Manual changes (targeting / timing / list)

- Confirm open tracking is actually enabled on this sequence/mailbox in Apollo, and verify the tracking pixel is not disabled or stripped. A literal 0/302 opens is almost certainly a tracking or placement artifact and must be resolved before any copy read is trusted.
- Run an inbox-placement / seed test (e.g., GlockApps or manual seed inboxes across Gmail, Outlook, Yahoo) to find out where 'delivered' mail is actually landing. Apollo 'delivered' only means accepted by the server, and the 6.3% explicit spam-block suggests spam-foldering is likely far wider.
- Pause sending and re-verify the entire sector-5 list through a dedicated verification tool (NeverBounce/ZeroBounce), not just Apollo. A 7.6% bounce on a supposedly verified list indicates stale data; remove all catch-all, risky, and unverifiable addresses before resuming.
- Check whether the 25 bounces and 22 spam blocks are concentrated on a single recipient domain or a single sending mailbox. Concentration points to a specific reputation problem to isolate rather than list-wide rot.
- Throttle daily volume down from 60 while rebuilding reputation (start ~20-30/day) and ramp back up only after delivery clears 95% and spam-block drops under 0.5%.
- Confirm sector-5 list composition (plumbing-only vs mixed vertical) so vertical references in copy match the audience; the rewrites above use generic 'crew/field' language to be safe.
- Confirm internally whether payment-taking is actually an offered service before any future copy reintroduces it, per the brief's scope constraint.
- Re-pull the campaign data to resolve the null/loading fields and the anomalous scheduled=0 before making further decisions.
- Decide whether to surface the Calendly link on a positive 'Plan' reply via a templated manual response, since the sequence currently never presents the calendar and is decoupled from the booked-meeting target metric.

## Next review

Re-run the evaluation after deliverability is fixed and at least 200 messages have been delivered-and-confirmed-inboxed under the new sending settings (roughly 1-2 weeks at the throttled volume). Watch first for delivery rate returning above 95%, bounce under 2%, and spam-block under 0.5%; only once open rate registers a plausible non-zero number (>20%) should reply rate and copy performance be assessed.

---

# CB Email Revamp - sector 4 (69f3606091ce91000d1e89f3)

_Brief used: briefs/call-boss.md_

**Auto-apply is off — all changes below are proposals.**

## Evaluation

# Campaign Evaluation — CB Email Revamp - sector 4 — 2026-07-14

## Verdict
This campaign is failing at the deliverability gate, and that failure invalidates almost every engagement signal below it. Roughly **1 in 7 sends is bouncing or being spam-blocked** (bounce ~8.7%, spam-block ~5.5%), which is 4–18x the alarm thresholds — a list-hygiene and/or domain-reputation problem, not a copy problem. On top of that, **opens report 0 across all 296 delivered, which is statistically impossible for real sends and means open tracking is broken or disabled** — so the client's own stated hypothesis ("not enough people open") cannot even be measured right now. Fix deliverability and open tracking first; until then, treat everything else as unreadable.

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

*Bounce on a delivered+bounced denominator is 9.2% (30/326). Either way it is severely elevated.

Note: the API summary returned `delivery_rate_pct` and `bounce_rate_pct` as `null` and `unique_scheduled` as `0`, with per-variant `scheduled/delivered/bounced/spam_blocked` mostly showing `"loading"`. Rates above are computed by hand from the unique counts. Treat step-level figures as partial.

## Funnel
Attempted (delivered + bounced + spam-blocked) = **345**
→ Delivered **296 (85.8%)** — 49 sends lost to bounces + spam blocks
→ Opened **0 (0%)** — not credible; open tracking is off or the pixel isn't firing
→ Replied **0 (0%)**

**Biggest leak:** the gate itself. Nearly 15% of attempted sends never land, and that same signal (high bounce + high spam-block) is the leading indicator of domain reputation damage — which suppresses inbox placement for the messages that *do* deliver. The 0 opens compound this: we literally cannot see whether delivered mail is being read.

The one signal we can trust is replies, because replies don't depend on tracking pixels. **0 replies on 296 delivered** is a real miss — at the 2% target you'd expect ~6 replies. But n=296 is modest, so this reads as "clearly below target," not "statistically damning," and it can't be cleanly separated from the deliverability problem beneath it.

## Step-by-step
Per-step delivery data is largely unavailable in this pull (`"loading"` for steps 1 and 2). What we have:

| Step | Type | Subject | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|---|
| 1 | Auto email | "Who answers when you're on the job?" | loading | 0 | 0 | Can't assess volume; 0 replies |
| 2 | Auto email | (bump, no subject) | loading | 0 | 0 | Can't assess; 0 replies |
| 3 | Auto email | (breakup, no subject) | 273 | 0 | 0 | 0 replies on 273 delivered |

- **No step produced a single reply.** No step is carrying the campaign and none can be called dead weight versus another, because none is working.
- **Single variant per step** — no A/B test is running, so there is nothing to compare and no winner to declare. This is a missed opportunity, but moot until deliverability is fixed.
- Step 3 delivering 273 while step 1's numbers are still "loading" suggests the pull is mid-refresh; don't over-read step-level completeness.

## Copy-to-audience fit
The copy is directionally on-brief but has concrete problems:

- **Explicit constraint violated — dashes.** The brief says "Please don't use em dashes." Email 1 is full of en/em dashes: "voicemail, a busy office, or get missed completely," "10–30% lost revenue," "take payments – without," "answer-every-call setup –." Steps 2 and 3 also use them ("circling back -", "Last try on this –"). This is a direct, checkable rule break.
- **Possible scope overstatement.** "can even take payments" is not in the brief's stated services (call answering, CRM, estimate/scheduling, back-office). The brief explicitly warns against overstating scope. Flag for verification.
- **Pain-point lead is good.** Subject "Who answers when you're on the job?" and the opening hit pain point #1 (missed calls while crews are in the field) squarely — this matches the brief.
- **Category-fit CTA is good.** "Reply with 'Plan'" is a low-commitment ask, appropriate for a category-aware but skeptical SMB owner. It correctly defers the Calendly call rather than demanding it cold.
- **Answers a stated objection.** "100% US-based team" directly addresses the brief's listed question ("Is your staff in the United States?"). Good.
- **Vertical mismatch risk.** The body hard-codes "For HVAC companies we work with." If "sector 4" is a pure HVAC list, fine; if it's mixed home-services, the HVAC reference will feel off to non-HVAC recipients. Confirm the list composition.
- **Formatting bug in plain-text.** The `body_text` runs sentences together with no spaces ("get missed completely?For HVAC companies"). HTML renders correctly via `<div>`s, but plain-text clients and some spam filters see a wall of jammed text — a minor deliverability/readability risk on top of the bigger one.
- **Tone** is practical and reasonably warm, in line with the brief, though slightly stat-forward ("10–30% lost revenue") versus the "relief/trust" register the brief says resonates.

## Prioritized issues
1. **Deliverability is broken at the gate** — evidence: bounce ~8.7% (30/345) and spam-block ~5.5% (19/345), both far past alarm thresholds; delivery 85.8% vs 95% target — **impact: high.** This corrupts every downstream metric and is actively burning domain reputation.
2. **Open tracking is non-functional** — evidence: 0 opens on 296 delivered is impossible for genuine sends — **impact: high.** The client's central hypothesis is about opens, and it currently cannot be measured or disproven.
3. **Zero replies on 296 delivered** — evidence: 0 vs ~6 expected at the 2% target — **impact: high, but confounded** by issues #1/#2 and limited by modest n; do not attribute this to copy until deliverability and tracking are clean.
4. **Explicit copy constraint violated (dashes)** — evidence: en/em dashes throughout all three steps against a stated "no em dashes" rule — **impact: low on performance, high on client trust/compliance.**
5. **Possible service-scope overstatement ("take payments")** — evidence: not among brief's listed services; brief warns against this — **impact: medium** (risk of misrepresentation / bad-fit replies).
6. **No A/B variants and a plain-text formatting bug** — evidence: single variant per step; missing spaces in `body_text` — **impact: low now, blocks optimization later.**

## Open questions
- **Is open tracking intentionally disabled?** 0 opens is either a config choice, a pixel/HTML issue, or a data-pull artifact. Verify in Apollo before trusting any open-rate reading.
- **Reply sentiment is moot at n=0**, but as soon as replies appear, remember Apollo counts angry/negative replies the same as positive ones — spot-check manually.
- **What's the source and age of "sector 4"?** An 8.7% bounce rate points to stale or unverified data despite "cleaned through Apollo" — confirm how recently this list was verified and whether it's all HVAC (to match the hard-coded copy).
- **Domain/IP reputation:** with a 5.5% spam-block rate on a supposedly warmed domain, check current sender reputation (Google Postmaster / Microsoft SNDS) — the warm-up may have lapsed or the send volume/content is tripping filters.
- **Why does the summary show `unique_scheduled: 0` and per-step `"loading"` fields?** Re-pull to confirm the counts above are final before acting on step-level conclusions.

## Recommended changes

Deliverability is the real failure here: ~8.7% bounce and ~5.5% spam-block mean nearly 1 in 7 sends never lands, and 0 opens on 296 delivered signals broken open tracking, so no copy change can be fairly judged until those are fixed. The prescription therefore leads with list verification, volume throttling, and tracking repair, while keeping copy changes minimal and focused on compliance (removing the em dashes the brief bans and the unsupported 'take payments' claim). Once deliverability is clean, the rewritten warmer, relief-focused copy and new follow-up angles should give the campaign its first fair test at the 2% reply target.

### Change 1 — step 1 — proposed (auto-apply off)

**Why:** Removes all em/en dashes (explicit brief constraint violated across the current copy) and deletes the unsupported 'take payments' claim flagged as scope overstatement. Softens the stat-forward '10-30% lost revenue' toward the relief/trust register the brief says resonates, keeps the strong pain-point hook, the 'US-based' objection answer, and the low-commitment 'reply Plan' CTA. Body is now clean HTML so the plain-text jammed-sentence bug disappears. Subject lowercased to internal-memo style; note 'HVAC' hard-code removed to fit a mixed home-services list (verify list composition).

**Subject before:** Who answers when you’re on the job?
**Subject after:** who answers when you're on a job?

**New body:**
```
Hi {{contact.first_name}},

When your crew is out in the field, what happens to new customer calls? Voicemail, a busy office, or nobody at all?

Most owners we talk to don't realize how many of those callers just dial the next company on the list. That's real jobs walking out the door.

Call Boss is a 100% US-based team that answers as your office and books jobs right in your CRM, so you never lose a lead because you were on a ladder or under a truck. No in-house hire, no training headaches.

Want me to put together a quick missed-calls plan for {{account.name}}? Just a simple look at what you're likely losing and how to catch every call. Reply with "Plan" and I'll send it over. No pitch deck, just a straight breakdown.
```

### Change 2 — step 2 — proposed (auto-apply off)

**Why:** Replaces the empty 'circling back' bump (no new reason to reply) with a fresh angle: the cost of a missed call on a busy day, tied to pain points #1 and #4. Removes the dash. Keeps it to a single-question, one-CTA follow-up per the brief's follow-up rule.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hey {{contact.first_name}}, quick one: what does it cost you when a booked-solid day means a caller goes to voicemail?

That's the exact gap the missed-calls plan for {{account.name}} covers. Want me to send it?
```

### Change 3 — step 3 — proposed (auto-apply off)

**Why:** Turns the flat 'last try' breakup into a new-angle close that answers the brief's top objection ('why hire you when I can hire office staff') with the brief-approved scaling/cost response. Removes the dash, keeps the low-friction yes/no CTA.

**Subject before:** 
**Subject after:** 

**New body:**
```
Last note on this, {{contact.first_name}}. A lot of owners tell me hiring office staff feels like the obvious fix until the turnover and training start.

Call Boss scales without any of that, usually at a lower cost than an in-house hire. If that's worth a look, want the plan? A simple yes or no works.
```

## A/B test plan

**Hypothesis:** Once deliverability and open tracking are fixed, a plain-spoken relief-focused subject will earn more opens than the current question subject, because the brief's audience responds to warm, practical framing over polished marketing questions.
**Variant A:** who answers when you're on a job?
**Variant B:** missed calls = lost jobs
**Success metric:** Open rate (only valid after open tracking is confirmed working), with reply rate as the tiebreaker.
**Decision rule:** Run only after tracking is verified. Call a winner at >=150 delivered per variant; if open-rate difference is under 20% relative, keep variant A (the more specific, on-brief line). Change nothing else in the body while the test runs so opens are attributable to the subject alone.

## Manual changes (targeting / timing / list)

- FIX FIRST: pause or throttle sending until the list is re-verified. An 8.7% bounce rate means the Apollo verification is stale or was skipped; re-run verification on the entire 'sector 4' list and remove all catch-all/risky/unverified addresses before resuming.
- Investigate the 5.5% spam-block rate: check Google Postmaster Tools and Microsoft SNDS for the sending domain's current reputation. The 'warmed up' status may have lapsed given the elevated blocks.
- Drop daily volume from 60 to ~25-30 per domain while reputation recovers, and consider spreading sends across an additional sending domain/inbox to reduce per-domain load.
- Verify in Apollo whether open tracking is enabled and the pixel is firing. 0 opens on 296 delivered is not credible; the client's core hypothesis about opens cannot be measured until this is fixed.
- Confirm the composition of 'sector 4': if it is not pure HVAC, the removed hard-coded 'HVAC companies' reference was correct to cut. Segment mixed lists by vertical so future copy can name the recipient's trade.
- Re-pull the API summary to resolve the 'loading' step-level fields and null delivery/bounce rates before drawing step-level conclusions.
- Confirm with the client whether 'take payments' is an actual offered service; it was removed from copy as an unverified scope claim and should only return if verified.

## Next review

Re-run the evaluation after deliverability is fixed and at least ~300 sends have gone out under the new list-verification and throttled-volume regime (roughly 2-3 weeks at 25-30/day). Watch first for delivery rate returning above 95% and bounce/spam-block dropping under 2%/0.3%, then confirm open tracking reports a plausible non-zero number, and only then judge reply rate against the 2% target.

---

# CB Email Revamp - sector 3 (69f25cd4bae977000dbd0c5e)

_Brief used: briefs/call-boss.md_

**Auto-apply is off — all changes below are proposals.**

## Evaluation

# Campaign Evaluation — CB Email Revamp - sector 3 — 2026-07-14

## Verdict
This campaign has a broken foundation, not a copy problem — and the data can't yet tell you which. Deliverability is failing on two fronts (bounce ~4.7%, spam-block ~3.5%, both well past alarm thresholds), and open tracking is clearly non-functional (5 opens vs. 4 replies is arithmetically impossible for real tracking), which means the client's stated hypothesis — "not enough people open the email" — cannot be confirmed or refuted from this data. Fixing deliverability and restoring open tracking is worth more than any copy change right now, because every engagement signal below is unreliable until they're fixed.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Delivery rate | ~91.9% (316 / ~344 attempted) | >97% | 95%+ | 🔴 |
| Bounce rate | ~4.7% (16 / ~344) | alarm >2% | — | 🔴 |
| Spam-block rate | ~3.5% (12 / ~344) | alarm >0.3% | — | 🔴 |
| Open rate | 1.58% (5 / 316) | 30–50% typical | 30% | 🔴 (tracking broken — see below) |
| Reply rate | 1.27% (4 / 316) | 1–3% typical | 2% | 🟡 |
| Click rate | 0% | — | — | ⚪ (no links used) |
| Unsubscribe rate | 0.32% (1 / 316) | alarm >1% | — | 🟢 |
| Meetings / 100 delivered | Unknown (0 confirmed) | — | 1 | 🔴 / unmeasurable |

Note: "attempted" is estimated as delivered + bounced + spam_blocked (316 + 16 + 12 = 344) because the API returned null delivery/bounce rates.

## Funnel
Delivered 316 → Opened 5 (1.58%) → Replied 4 (1.27%). Clicked 0 (no links in copy).

Two things break the normal funnel logic:

1. **Opens < replies is impossible under working tracking.** You generally cannot reply without opening, and opens are normally *inflated* by Apple Mail Privacy Protection and bot scanners. A 1.58% open rate that sits *below* the reply rate means the open pixel is disabled, stripped, or otherwise not firing. **Do not trust the open metric, and do not conclude anything about "people not opening" from it.**

2. The biggest *provable* leak is upstream of engagement entirely: **~8% of attempts never reached the inbox** (4.7% bounced + 3.5% spam-blocked). At the volumes here that's real reputation damage in progress, not noise.

Because deliverability is compromised and open tracking is broken, the reply funnel below is directional at best and built on n=4.

## Step-by-step
| Step | Variant | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 — "Who answers when you're on the job?" | A | 324 | 1 | 0 | **Zero replies.** The opening email — the one with the full pitch — is generating nothing. |
| 2 — "circling back…" | A | 317 | 1 | 1 | 1 reply. Functional but negligible. |
| 2 — (blank) | B | 0 | 0 | 0 | **Unfinished/unapproved variant** (status `to_be_reviewed`, empty body). Dead weight in the sequence. |
| 3 — "Last try… yes or no?" | A | 313 | 3 | 3 | **All 3 of its "opens" are replies** — the breakup email is where engagement concentrates (3 of 4 total replies). |

Key findings:
- **All 4 replies came from follow-ups (steps 2 and 3); step 1 produced zero.** The workhorse email is dead weight for replies while the breakup line does the work. Do not let the blended 1.27% hide that the first touch converted no one.
- **Sample sizes are far too small to call any winner.** With 4 total replies and ~315 delivered per step, nothing here is statistically distinguishable. Treat "step 3 wins" as a hint, not a finding.
- Step 2's second variant is empty and unapproved — the A/B split is effectively not running.

## Copy-to-audience fit
- **Vertical mismatch.** Step 1 hardcodes "For landscaping companies we work with." This is "sector 3" of a mixed list spanning HVAC, plumbing, roofing, pest control, etc. Any non-landscaping recipient gets a message that visibly isn't about them. The brief covers many verticals; the copy assumes one.
- **CTA diverges from the brief.** The brief's core CTA is "Schedule a call" via Calendly. The emails instead use a soft, reply-based CTA ("Reply with 'Plan'"). That's a defensible deliverability choice (it explains the 0% click rate — no links), but it's a different funnel than the brief describes, and it means "meetings booked per 100 delivered" (target: 1) is currently unmeasurable from the data.
- **Dash usage.** The brief explicitly says no em dashes. The copy uses en dashes (–) heavily rather than em dashes (—), so it's technically compliant, but the intent of the instruction (avoid the dash-heavy style) is not respected. Worth flagging.
- **Formatting sloppiness in the plain-text version.** Sentences run together with no space ("completely?For", "next company.CallBoss", "in-house staff.If"), and there's a space before the comma in "{{contact.first_name}} ,". The HTML renders cleanly, but the text/AMP fallback looks broken — and broken-looking text is both a trust and a spam signal.
- **What's actually good:** the copy does hit real brief pain points (missed calls → lost revenue, "without adding in-house staff"), and it preempts a stated objection by naming the team as "100% US-based." Tone is reasonably warm and practical, in line with the brief. The bones are fine; the targeting and mechanics around them are not.

## Prioritized issues
1. **Deliverability is failing** — evidence: bounce ~4.7% and spam-block ~3.5%, both multiples of alarm thresholds; delivery ~91.9% vs. 95% target — estimated impact: **high**. This gates everything and is actively degrading sender reputation. List hygiene and/or content-triggered spam filtering are the suspects.
2. **Open tracking is non-functional** — evidence: 5 opens < 4 replies, and 1.58% open rate with no Apple/bot inflation — estimated impact: **high**. The client's entire working hypothesis ("not enough opens") cannot be validated until this is fixed. You are currently flying blind on the top of the funnel.
3. **Step 1 produces zero replies** — evidence: 0/324 replied on the first touch; all replies come from steps 2–3 — estimated impact: **high**. The primary pitch email is not earning responses on its own.
4. **Vertical/copy mismatch on a mixed list** — evidence: "landscaping companies" hardcoded in step 1 sent to a multi-vertical sector — estimated impact: **medium**.
5. **Empty, unapproved step-2 variant B** — evidence: 0 delivered, blank body, `to_be_reviewed` — estimated impact: **low** (wasted split, no live test).
6. **Plain-text formatting defects and dash-style non-compliance** — evidence: run-together sentences, space-before-comma, en dashes throughout — estimated impact: **low-medium** (trust + minor spam signal).

## Open questions
- **Reply sentiment is unknown.** Apollo's API does not expose it. All 4 replies count equally whether they're "send the plan" or "stop emailing me" — the 1 unsubscribe and the breakup-email framing ("yes or no?") make it plausible some are negative. **Spot-check the actual reply text in Apollo before treating 1.27% as genuine interest.**
- **Is open tracking actually enabled/working in this sequence?** Confirm in Apollo settings whether the tracking pixel is on and whether it's being blocked — this determines whether the "low opens" story is even real.
- **What's driving the bounces and spam-blocks?** Check whether it's list quality (stale/unverified addresses despite Apollo cleaning), specific content triggers, or the sending domain's reputation. The raw response may show which domains/recipients failed.
- **Where do the 4 replies actually route to a meeting?** With a reply-based CTA and no Calendly link in the email, confirm whether any replies converted to booked calls — the data shows 0 clicks and cannot tell you.
- **Company-size targeting:** the brief targets 50–100 employees, which is large for "small service businesses" and may not map to owner/office-manager decision-makers. Worth confirming the list matches the intended buyer.

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

---

# CB LI Sector 1 (69a6f5b471bbb90015956332)

_Brief used: briefs/call-boss.md_

**Auto-apply is off — all changes below are proposals.**

## Evaluation

# Campaign Evaluation — CB LI Sector 1 — 2026-07-14

## Verdict
This campaign cannot be evaluated on performance because it has **zero activity**: 0 scheduled, 0 delivered, 0 of everything across all four steps. There is nothing to diagnose in the funnel until sends actually go out. Two structural problems are visible without any data, and both matter more than any metric right now: (1) this is a **LinkedIn sequence** (`linkedin_step_connect` + `linkedin_step_message`), not the email campaign the brief describes and sets targets for, and (2) the step-1 copy addresses the **wrong audience** ("property portfolio"), which will sink connection acceptance regardless of volume.

## Scorecard
Every rate is `null` and every count is `0`, so no metric can be scored. This table exists to show the gate is closed, not to grade performance.

| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Scheduled | 0 | — | — | 🔴 |
| Delivered | 0 | — | — | 🔴 |
| Delivery rate | null | >97% | 95%+ | ⚫ n/a |
| Bounce rate | null | <2% | — | ⚫ n/a |
| Open rate | null | 30–50% | 30% | ⚫ n/a (LinkedIn has no open tracking) |
| Reply rate | null | 1–3% | 2% | ⚫ n/a |
| Unsubscribe rate | null | <1% | — | ⚫ n/a |
| Meetings / 100 delivered | null | — | 1 | ⚫ n/a |

## Funnel
No funnel exists. Scheduled = 0 → Delivered = 0 → Opened = 0 → Replied = 0. The "biggest leak" is that **nothing has entered the pipe**. Either the sequence has never been activated against a list, contacts were never loaded, or LinkedIn sending is not connected/authorized. This is the first thing to confirm in Apollo before anything else is discussed.

Note also: this is a LinkedIn channel sequence. Apollo does **not** report opens for LinkedIn steps, so the brief's 30% open-rate target is not measurable here even once sends begin. On LinkedIn the meaningful funnel is: connection requests sent → accepted → messaged → replied. Judge this campaign on **connection-accept rate and reply rate**, not opens.

## Step-by-step
No sends on any step, so no step or variant can be compared. Each step has a **single variant** — there is no A/B test running, so even with volume you would learn nothing about copy alternatives without adding variants. Sample-size rules (150–200 delivered/variant) are moot at n=0.

| Step | Type | Sends | Replies | Verdict |
|---|---|---|---|---|
| 1 | LI connect request | 0 | 0 | No data; copy is off-audience (see below) |
| 2 | LI message | 0 | 0 | No data |
| 3 | LI message | 0 | 0 | No data |
| 4 | LI message | 0 | 0 | No data |

## Copy-to-audience fit
This is the only layer with anything to assess, and there are real problems:

- **Step 1 targets the wrong persona.** "manage a sizable property portfolio" reads like property management / real estate. The brief's audience is **home/outdoor service business owners** (landscaping, HVAC, plumbing, pest control, roofing). A landscaping owner will not recognize themselves in "property portfolio," which directly undermines connection acceptance — the single most important gate in a LinkedIn sequence.
- **Broken/inconsistent merge fields.** Step 1 uses `{{account.name}}`; steps 2 and 3 use `{{Company}}`. `{{Company}}` is not the same token and likely will not populate — risking literal "`{{Company}}`" or a blank in the message body. This must be verified before any send.
- **Step 1 leads with nothing.** It opens with a generic "thought it'd be useful to connect" and never touches the audience's stated top pain (missed calls = lost revenue). The sharpest hook doesn't appear until step 2.
- **Proof points unused.** The brief lists named testimonials in the exact verticals, CRM integrations (Service Autopilot/Jobber/YardBook), and woman/minority-owned positioning. None appear in any step. This audience responds to relatable peer proof; it's absent.
- **Tone drifts corporate.** "optimize your company's admin work," "higher lead connection," "prompt account updates" is vague B2B-speak. The brief calls for a warm, practical, small-business-owner tone.
- **Formatting rule risks.** The brief says no em dashes. Steps use curly quotes/apostrophes ("that vendor," "don't"), which is fine, but confirm no em dashes slipped in and that smart-quote rendering is intentional.
- **CTA level is appropriate.** "Want me to send the link?" / "Want the link?" is a soft, low-commitment ask that fits a cold LinkedIn audience — this part is right.

## Prioritized issues
1. **Zero activity — the campaign isn't running.** Evidence: all counts 0, all rates null, but sequence `active: true` and created 2026-03-03. Estimated impact: high. Nothing else can be measured until this is fixed.
2. **Channel/brief mismatch.** Evidence: sequence is 4 LinkedIn steps; brief describes an email campaign with subject lines, Calendly CTA, and a 30% open-rate target. Confirm whether LinkedIn is the intended channel, and if so, replace email-based targets with connection-accept and reply targets. Estimated impact: high (affects how success is even defined).
3. **Step-1 wrong-audience framing ("property portfolio").** Evidence: brief audience is service businesses, not property managers. Kills connection acceptance. Estimated impact: high.
4. **Merge-field inconsistency (`{{Company}}` vs `{{account.name}}`).** Evidence: raw copy. Risk of broken personalization on 3 of 4 steps. Estimated impact: medium-high.
5. **No proof points and off-tone copy.** Evidence: brief lists testimonials/integrations/positioning, none used; copy reads corporate vs. required warm tone. Estimated impact: medium.
6. **Single variant per step — no testing.** Evidence: one variant on each of 4 steps. Once volume exists you'll learn nothing about what works. Estimated impact: medium (compounding over time).

## Open questions
- **Why is the sequence at zero?** Is a list loaded? Is the LinkedIn account connected and within sending limits? Is it paused despite `active: true`? Check directly in Apollo.
- **Is LinkedIn the intended channel, or does a separate email sequence exist?** The brief and the sequence disagree. The brief's history ("haven't had anyone sign up from an email campaign") suggests email is/was in play elsewhere.
- **Does `{{Company}}` resolve in Apollo, or render blank/literal?** Test-send to confirm.
- **Reply sentiment is not available in the data anyway (and would be zero here).** Once replies exist, Apollo's API does not expose sentiment — you'll need to read replies manually, since angry/"unsubscribe me" replies count the same as interested ones.

## Recommended changes

The sequence has zero activity, so the immediate priority is confirming it is actually running (list loaded, LinkedIn account connected) before any copy change can matter. Beyond the gate being closed, the step-1 connection request targets the wrong persona ('property portfolio' reads as property management, not a landscaping or HVAC owner), which will suppress connection acceptance, and merge fields are inconsistent ({{Company}} vs {{account.name}}) and likely broken on 3 of 4 steps. The rewrites below re-anchor every touch to the missed-call/lost-revenue pain, warm up the tone to match a small-business owner, weave in peer proof and CRM integrations, and standardize merge fields so personalization actually populates.

### Change 1 — step 1 — proposed (auto-apply off)

**Why:** Removes the wrong-audience 'property portfolio' framing flagged as the top copy risk and replaces it with the brief's #1 pain (missed calls while in the field). Shortens to a genuine peer-to-peer connect note and fixes the merge field to {{account.name}} so it actually populates.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

Saw you run {{account.name}}. I work with a lot of home service owners who lose jobs when calls come in while the crew is out in the field.

Thought it'd be worth connecting.
```

### Change 2 — step 2 — proposed (auto-apply off)

**Why:** Fixes the broken {{Company}} merge field, ties directly to stated pains (calls from the field, after-hours voicemail), adds unused proof points (US-based staff, CRM integrations) in the warm tone the brief requires, and keeps the soft CTA that the evaluation confirmed was right.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

Thanks for connecting.

Quick reason I reached out: most owners I talk to are answering the phone from a truck or losing after-hours calls to voicemail. Call Boss is a US-based team that answers your calls, follows up with leads, and keeps your CRM updated (we work inside Jobber, Service Autopilot, YardBook and others), with 24/7 coverage.

Want me to send a link to grab a quick call and see if it's a fit?
```

### Change 3 — step 3 — proposed (auto-apply off)

**Why:** Follow-ups must bring a new angle: this one hits the staffing/turnover pain and the 'why not just hire in-house' objection from the brief, replacing the vague corporate phrasing ('optimize admin work,' 'higher lead connection') the evaluation flagged as off-tone.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hey {{contact.first_name}},

One thing owners tell me after switching: hiring and training in-house office staff was a constant headache, and turnover kept setting them back.

We scale better than an in-house hire and usually cost less, so you catch more leads without another payroll problem to manage.

Worth a quick call to see the numbers for {{account.name}}? Happy to send the link.
```

### Change 4 — step 4 — proposed (auto-apply off)

**Why:** Gives the breakup message a new proof angle (named verticals from the testimonials) instead of a generic bump, removes the curly-quote 'that vendor' phrasing, and adds a clean yes/no close that makes replying easy.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

I won't keep filling up your inbox.

If missed calls or after-hours coverage ever become a headache, we've helped landscaping, lawn care, pest control and irrigation companies fix exactly that. The door's always open.

Want the link, or should I close this out?
```

## A/B test plan

**Hypothesis:** Rewriting the step-1 connection request from the wrong-audience 'property portfolio' framing to a service-owner missed-call hook will raise connection-accept rate, because owners recognize themselves in the pain and are far more likely to accept a relevant request.
**Variant A:** Hi {{contact.first_name}}, Saw you run {{account.name}}. I work with a lot of home service owners who lose jobs when calls come in while the crew is out in the field. Thought it'd be worth connecting.
**Variant B:** Hi {{contact.first_name}}, Saw you run {{account.name}}. Curious how you handle calls that come in when everyone's out on a job. I work with home service teams on exactly that and thought it'd be worth connecting.
**Success metric:** Connection-accept rate (accepts / requests sent). Call a winner at 150+ requests sent per variant; if the relative difference is under 20%, keep Variant A as the simpler note.
**Decision rule:** Do not change step-2 through step-4 copy, targeting, or daily volume while the test runs so the accept-rate difference is attributable to step-1 wording alone.

## Manual changes (targeting / timing / list)

- Confirm why the sequence is at zero: verify a contact list is loaded, the LinkedIn account is connected and authorized, and the sequence is not paused despite active:true. Nothing else matters until requests are actually going out.
- Redefine success metrics for this channel: Apollo does not track opens on LinkedIn steps, so replace the 30% open-rate target with connection-accept rate and reply rate. Judge the funnel as requests sent to accepted to replied.
- Run a test-send to confirm merge fields resolve. Standardize every step to {{account.name}} and remove any {{Company}} tokens, which likely render blank or literal.
- Audit all four steps for em dashes (brief prohibits them) and confirm smart-quote rendering is intentional before activating.
- Add a second variant to each step once volume exists so you can actually learn what works; single-variant steps teach nothing.
- Tighten targeting to the brief's verticals (landscaping, lawn care, pest control, irrigation, HVAC, plumbing, roofing, etc.) and cut any property management or real estate contacts that the original 'property portfolio' copy suggests may have leaked into the list.
- Keep daily volume modest (start at the current 60/day equivalent in connection requests, respecting LinkedIn's weekly invite limits) until accept and reply rates confirm the copy is landing.

## Next review

Re-run the evaluation once at least 150 connection requests have been sent per step-1 variant (roughly 2-3 weeks at current volume, given LinkedIn invite limits). Watch first for whether the campaign is actually sending, then connection-accept rate on step 1, then reply rate on steps 2-4 and reply sentiment (read manually, since Apollo does not expose it).

---

# CB LI Sector 4 (69a616aa6d29a6000d9049e6)

_Brief used: briefs/call-boss.md_

**Auto-apply is off — all changes below are proposals.**

## Evaluation

# Campaign Evaluation — CB LI Sector 4 — 2026-07-14

## Verdict
This campaign cannot be evaluated on performance because **zero contacts have been scheduled, sent, or delivered** (`unique_scheduled: 0` across all four steps) despite the sequence being marked active since 2026-03-02. There is no funnel, no engagement, and no deliverability signal to diagnose — the first problem to fix is operational (why nothing is sending), not copy. Separately, and independently fatal, this is a **LinkedIn sequence** (`linkedin_step_connect` / `linkedin_step_message`), not the cold email campaign the brief describes, and its lead-line copy targets the wrong audience ("sizable property portfolio" = property managers, not the home-service owners in the brief).

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Scheduled | 0 | — | — | 🔴 |
| Delivered | 0 | — | — | 🔴 |
| Delivery rate | n/a (null) | >97% | 95%+ | ⚪ no data |
| Bounce rate | n/a (null) | <2% | — | ⚪ no data |
| Spam-block rate | n/a (null) | <0.3% | — | ⚪ no data |
| Open rate | n/a (null) | 30–50% | 30% | ⚪ no data / N.A. on LinkedIn |
| Reply rate | n/a (null) | 1–3% | 2% | ⚪ no data |
| Unsubscribe rate | n/a (null) | <1% | — | ⚪ no data |
| Meetings / 100 delivered | n/a | ~1 | 1 | ⚪ no data |

⚪ = the API returned `null`/`0`; nothing was sent, so no metric can be computed or trusted.

## Funnel
Scheduled (0) → Delivered (0) → Opened (0) → Replied (0). **There is no funnel.** Every stage is zero. The "biggest leak" is upstream of the funnel entirely: no contacts were ever enrolled or the sequence never fired. Note also that this is a LinkedIn channel — "opened" is not a meaningful or tracked metric for LinkedIn connection requests and DMs the way it is for email, so even once volume exists, the brief's 30% open-rate target does not map to this channel.

## Step-by-step
| Step | Type | Sends | Opens | Replies | Verdict |
|---|---|---|---|---|---|
| 1 | LinkedIn connect request | 0 | 0 | 0 | No data. Single variant only. |
| 2 | LinkedIn message (post-connect) | 0 | 0 | 0 | No data. Single variant only. |
| 3 | LinkedIn message (follow-up) | 0 | 0 | 0 | No data. Single variant only. |
| 4 | LinkedIn message (breakup) | 0 | 0 | 0 | No data. Single variant only. |

- No step has any activity, so no step is proven productive or dead weight.
- **Every step has exactly one variant** — no A/B testing is set up, so even with future volume there will be nothing to compare.
- Wait times: 30 (connect), then 3/3 days between messages. Structurally reasonable for LinkedIn, but unverifiable without data.

## Copy-to-audience fit
Even with zero sends, the copy can be read against the brief, and there are concrete, serious mismatches:

1. **Wrong audience in the opening line.** Step 1 says: *"Saw you run {{account.name}} and manage a sizable property portfolio."* The brief's target is home/outdoor **service** businesses (landscaping, HVAC, plumbing, pest control, roofing). "Property portfolio" is real-estate / property-management language and will read as obviously mistargeted to a lawn-care or plumbing owner. This is the single clearest copy defect and directly undermines the brief's own stated hypothesis ("our messaging isn't matching our target audience").

2. **Broken/inconsistent merge field.** Step 1 uses `{{account.name}}` (valid Apollo syntax) but Steps 2 and 3 use `{{Company}}` — a non-standard field that will likely render as literal `{{Company}}` or blank. A visibly broken merge tag in the second and third touches kills credibility instantly.

3. **Brand name inconsistency.** Brief and sequence prefix use "Call Boss"; the copy uses "CallBoss" throughout. Minor, but pick one.

4. **Pain-point lead is generic, not the brief's #1 pain.** Step 2 opens with "a lot of calls coming in and a lot of administrative work." The brief's top pain is *missed calls = lost revenue* while the owner is in the field. The copy gestures at admin load before it lands the "you're missing money-making calls" hook. Step 3 improves on this ("lower missed call volume").

5. **What's working in the copy:** Tone is warm and plain-spoken, matching the brief's "warm, practical, small-business-owner" guidance. The two-step CTA ("Want me to send the link?") is appropriately low-commitment for a cold audience. The breakup email (Step 4) is well-judged. No em dashes appear in the body copy, per the brief's constraint. 24/7 coverage — a real differentiator per the brief — is called out in Step 2.

6. **Proof points unused.** The brief lists named testimonials, CRM integrations (Jobber, Service Autopilot), and woman/minority-owned status. None appear in any step. For an audience the brief says is skeptical and price-sensitive, the sequence carries no social proof.

## Prioritized issues
1. **Nothing is being sent.** — evidence: `unique_scheduled: 0` on all steps despite `active: true` since March 2026 — estimated impact: **high** (blocks everything; no learning is possible until contacts are enrolled and the sequence fires).
2. **Channel/brief mismatch.** — evidence: sequence is LinkedIn (`linkedin_step_*`), but the brief and targets (open rate, bounce rate, "delivered") are written for cold email — estimated impact: **high** (you're measuring this against the wrong scorecard; confirm which channel this campaign is meant to be).
3. **Opening line targets the wrong audience.** — evidence: "manage a sizable property portfolio" vs. brief's home-service ICP — estimated impact: **high** (directly explains poor prior engagement per the brief's own hypothesis).
4. **Broken merge field in Steps 2–3.** — evidence: `{{Company}}` vs. valid `{{account.name}}` — estimated impact: **medium-high** (visible personalization failure on follow-ups).
5. **No A/B variants and no proof points.** — evidence: one variant per step; zero testimonials/integrations in copy — estimated impact: **medium** (limits learning and conversion once volume exists).

## Open questions
- **Why is `unique_scheduled` zero?** Is the sequence unstarted, is the contact list empty/unassigned, is the LinkedIn sending account disconnected, or are all contacts stuck in a pending/paused state? This must be checked directly in Apollo — the API summary can't tell you the cause.
- **Is this campaign supposed to be email or LinkedIn?** The brief describes a cold *email* program (Calendly CTA, deliverability targets) but the sequence is entirely LinkedIn steps. Confirm which channel the reported targets apply to.
- **Who is actually on the list?** The "property portfolio" language raises the question of whether the imported list is home-service owners at all, or a mis-sourced property-management segment. Verify the list composition against the ICP.
- **Reply sentiment / meeting outcomes** are not exposed by the Apollo API and are moot here anyway (zero replies). Once volume exists, spot-check replies manually — reply counts will include negatives and "not interested."

## Recommended changes

This LinkedIn sequence has sent nothing (unique_scheduled: 0 across all steps since March), so the priority is operational: find out why it isn't firing and confirm whether this should even be LinkedIn versus the cold-email program the brief describes. While that gets fixed, the copy needs three correctness fixes that alone likely explain the brief's 'messaging isn't matching' hypothesis: the opening line targets property managers ('sizable property portfolio') instead of home-service owners, Steps 2-3 use a broken {{Company}} merge tag, and no step leads with the audience's #1 pain (missed calls = lost revenue) or uses any of the available proof points. The rewrites below fix targeting, standardize merge fields to {{account.name}}, lead with missed-call revenue loss, and layer in cost-vs-hiring and social proof on later touches.

### Change 1 — step 1 — proposed (auto-apply off)

**Why:** Removes the mistargeted 'sizable property portfolio' line (property-management language, the single clearest copy defect per the eval) and replaces it with the brief's #1 pain: missing calls while out in the field. Keeps the warm, plain-spoken tone and low-commitment connect ask.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

Saw you run {{account.name}}. Figured you're juggling a lot between being out in the field and keeping up with the phone. My team helps service business owners like you stop missing calls, and the jobs that come with them. Thought it'd be worth connecting.
```

### Change 2 — step 2 — proposed (auto-apply off)

**Why:** Fixes the broken {{Company}} merge tag (swapped to valid {{account.name}}), fixes brand name to 'Call Boss', and leads with missed-call-equals-lost-revenue instead of generic admin load. Adds real CRM-integration proof points from the brief. Keeps the two-step low-commitment CTA.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

Thanks for connecting.

When you or your crew are out on a job, I'd bet some calls to {{account.name}} slip to voicemail, and a missed call is usually a missed job. Call Boss answers every call live, keeps your CRM up to date (we work inside Jobber, Service Autopilot, and more), and covers you 24/7 including nights and weekends.

Want me to send a link to grab a quick call?
```

### Change 3 — step 3 — proposed (auto-apply off)

**Why:** Brings a genuinely NEW angle (cost-vs-hiring, the brief's top objection) instead of just 'circling back', and adds proof points the eval flagged as unused: US-based staff, woman-owned, train-once, and named verticals. Directly answers the 'why hire you vs. in-house' objection.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hey {{contact.first_name}},

Quick thought before I close the loop.

A lot of owners tell us hiring in-house office help is pricey and the turnover is brutal. Call Boss scales with you at a lower cost, you train us once, and we handle it from there. We're US-based and woman-owned, and we already back up lawn care, pest control, and irrigation companies.

Worth a 15-minute look? Happy to send the link.
```

### Change 4 — step 4 — proposed (auto-apply off)

**Why:** Keeps the well-judged breakup tone the eval praised, but ties the offer to a specific outcome (handling the phones for {{account.name}}) rather than the vague 'save time, money, and connections.' Preserves brand-name fix and the no-pressure exit.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

I don't want to be "that vendor" in your inbox.

If missed calls and admin overload aren't a headache right now, no worries at all and our door stays open. But if you'd like to see how we'd handle the phones for {{account.name}}, just say the word and I'll send the link.
```

## A/B test plan

**Hypothesis:** Changing the Step 1 connect line from a generic 'help you grow' hook to a specific missed-calls-cost-you-jobs hook will increase connect-accept and reply rates, because it names the audience's #1 pain in the preview instead of vague growth language.
**Variant A:** Hi {{contact.first_name}}, Saw you run {{account.name}}. Figured you're juggling a lot between being out in the field and keeping up with the phone. My team helps service business owners like you stop missing calls, and the jobs that come with them. Thought it'd be worth connecting.
**Variant B:** Hi {{contact.first_name}}, Saw you run {{account.name}}. Between the crews and the calls, most owners I talk to are running short on hours in the day. My team gives service business owners those hours back by handling the phones and admin. Thought it'd be worth connecting.
**Success metric:** Connection-accept rate, then reply rate on Step 2. Call a winner at 150+ send attempts per variant; if the relative difference is under 20%, keep Variant A (the more concrete missed-calls framing).
**Decision rule:** Do not change wait times, CTA wording, or later steps while the test runs, so accept/reply differences are attributable to the opening line only.

## Manual changes (targeting / timing / list)

- Diagnose why unique_scheduled is 0 in Apollo: confirm the sequence was actually started, the contact list is assigned and non-empty, and the LinkedIn sending account is connected and not paused. Nothing else matters until this is fixed.
- Confirm the intended channel: the brief describes a cold EMAIL program (Calendly CTA, open/bounce/delivery targets) but this is a LinkedIn sequence. If email is intended, rebuild as an email sequence; if LinkedIn, stop measuring against the 30% open-rate target since opens aren't tracked on LinkedIn.
- Audit the list composition against the ICP: the 'property portfolio' language suggests the imported list may contain property managers, not home-service owners. Verify every contact is a landscaping/HVAC/plumbing/pest/roofing type owner or office manager before sending.
- Add a second variant to each step (start with the Step 1 A/B above) so learning is possible once volume exists; currently every step has a single variant.
- Standardize all merge fields to valid Apollo syntax ({{contact.first_name}}, {{account.name}}) and remove the non-standard {{Company}} tag everywhere.
- Once sending is confirmed working, start at a modest daily volume (LinkedIn connect limits ~20-25/day per account to stay safe) rather than pushing 60, then scale as accept rates hold.

## Next review

Re-run the evaluation once at least 150 contacts per Step 1 variant have been attempted (accept/reply data becomes readable), or 2 weeks after sending is confirmed working, whichever comes first. Watch first for whether the sequence is actually firing (scheduled > 0), then connection-accept rate, Step 2 reply rate, and reply sentiment (spot-check manually since Apollo won't expose it).

---

# CB LI Sector 5 (69a6169724a05b0021b6526e)

_Brief used: briefs/call-boss.md_

**Auto-apply is off — all changes below are proposals.**

## Evaluation

# Campaign Evaluation — CB LI Sector 5 — 2026-07-14

## Verdict
This campaign has sent nothing. Every counter in the pull — scheduled, delivered, opened, replied — is zero, despite the sequence being created on 2026-03-02 (over four months before this pull) and marked `active: true`. There is no performance to evaluate; the only diagnosable signal is the copy itself, which contains an audience-targeting error serious enough to sink results even once sends begin. Fixing the "why is nothing sending" problem is worth 100% of this campaign's potential, because right now it is producing exactly zero of the 1 meeting / 100 delivered the brief targets.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Scheduled | 0 | — | — | 🔴 |
| Delivered | 0 | — | — | 🔴 |
| Delivery rate | N/A (0 sent) | >97% | 95%+ | 🔴 |
| Bounce rate | N/A (0 sent) | <2% | — | ⚪ |
| Spam-block rate | N/A (0 sent) | <0.3% | — | ⚪ |
| Open rate | N/A (0 sent) | 30–50% | 30% | ⚪ |
| Reply rate | N/A (0 sent) | 1–3% | 2% | ⚪ |
| Unsubscribe rate | N/A (0 sent) | <1% | — | ⚪ |
| Meetings / 100 delivered | 0 | ~1 | 1 | 🔴 |

⚪ = cannot be measured because there is no volume.

## Funnel
```
Scheduled 0 → Delivered 0 → Opened 0 → Replied 0
```
There is no funnel. The single biggest "leak" is upstream of the funnel entirely: **nothing has entered it.** No contacts have been scheduled into the sequence, so no benchmark comparison (opens, replies, unsubscribes) is possible or meaningful. Any engagement analysis below the send stage is unreliable — not because deliverability is broken, but because there is no delivery data at all.

Two structural notes that reframe the whole audit:
- **This is a LinkedIn sequence, not an email campaign.** The step types are `linkedin_step_connect` and `linkedin_step_message`, and every subject line is empty. The brief describes an *email* program with Calendly CTAs and email-specific targets (delivery/bounce/spam). Those email deliverability gates largely don't apply to LinkedIn DMs. Whoever owns this needs to confirm the brief's targets were written for the right channel.
- **The "reply as truth" rule still holds, but there are zero replies to inspect.**

## Step-by-step
No step has any sends, opens, or replies, so no step or variant can be judged on performance. Each step has only a single variant, so there is no A/B test to call either — and even if there were, you could not declare a winner on n = 0. Copy assessment only:

| Step | Type | Wait | Sends | Replies | Verdict |
|---|---|---|---|---|---|
| 1 | LinkedIn connect | 30 | 0 | 0 | Untested. Copy has a hard audience mismatch (see below). |
| 2 | LinkedIn message | 3 | 0 | 0 | Untested. Strongest copy of the four; leads with the real pain. |
| 3 | LinkedIn message | 3 | 0 | 0 | Untested. Vague "our partners experience..." claims, weak specificity. |
| 4 | LinkedIn message | 3 | 0 | 0 | Untested. Standard breakup message, fine. |

Because there is no incremental-reply data, I cannot tell you which steps are dead weight. That question can only be answered after real volume runs.

## Copy-to-audience fit
The copy exists and can be scored against the brief even though it hasn't been sent:

- **Step 1 targets the wrong audience.** "Saw you run {{account.name}} and manage a sizable property portfolio" describes a property/real-estate manager. The brief's audience is **home/outdoor service businesses** — landscaping, pest control, HVAC, plumbing, roofing. A landscaping owner does not "manage a property portfolio," and this line will read as a mistargeted mass message. This is the most damaging copy issue: the very first touch signals "this isn't for me."
- **Inconsistent / likely-broken merge tags.** Step 1 uses `{{account.name}}` (valid Apollo syntax). Steps 2 and 3 use `{{Company}}`, which is not standard Apollo merge syntax and may render blank or literally as "{{Company}}". Verify before any send — a broken tag in the first personalized line kills credibility.
- **Step 1 leads with no pain point.** The brief's top pains are missed calls / lost revenue / no bandwidth for a receptionist. Step 1 says only "help you grow" and "useful to connect" — generic. The brief explicitly states the current hypothesis is that messaging isn't matching the audience; step 1 confirms that hypothesis.
- **Step 2 is the best-aligned copy.** It names the pain (calls + admin off your plate), the mechanism (answer calls, catch up admin, 24/7 coverage), and matches the warm, practical small-business tone the brief calls for. This is where the value prop actually lands.
- **CTA commitment level is soft but reasonable for LinkedIn.** "Want me to send the link to book a meeting?" is a permission-based, low-commitment ask, which fits an audience the brief says is price-sensitive and skeptical. Note the CTA never sends the Calendly link directly — it asks permission first, adding a step before the booking the brief defines as the win.
- **No pricing or overclaim violations spotted.** Copy doesn't misstate pricing, doesn't claim staff are the client's employees, and doesn't oversell closing/sales. Good.
- **Em dashes:** none found in the body copy — compliant with the brief's constraint. (Step 4 uses curly quotes and an apostrophe, not em dashes.)
- **Sophistication mismatch:** the brief says the audience likely knows basic answering services but not full-service/CRM-integrated options. None of the four messages draws that contrast ("not just message-taking — we get into your CRM"), which is the differentiator most likely to move a skeptical buyer.

## Prioritized issues
1. **The campaign has sent zero messages in 4+ months** — evidence: `unique_scheduled: 0` across all steps, created 2026-03-02, pulled 2026-07-14, yet `active: true`. Nothing is entering the sequence (empty list, disconnected LinkedIn account, paused sending, or no contacts assigned). — estimated impact: **high** (this is 100% of the problem; no other metric can improve until it's resolved).
2. **Step 1 addresses the wrong persona** ("manage a sizable property portfolio") — evidence: direct contradiction with the brief's service-business audience. — estimated impact: **high** (first-touch mismatch will suppress connect-accept rate once sending starts).
3. **Merge-tag inconsistency / likely breakage** (`{{Company}}` in steps 2–3 vs `{{account.name}}` in step 1) — evidence: raw template bodies. — estimated impact: **medium** (broken personalization in the first line erodes reply rate).
4. **Channel vs. brief mismatch** — evidence: sequence is LinkedIn (`linkedin_step_connect`), brief and its targets are written for email. — estimated impact: **medium** (the targets in the brief may not be the right yardstick for this channel; align expectations before judging performance).
5. **Weak/generic step 1 and step 3 copy** — evidence: step 1 leads with no pain; step 3 uses unsubstantiated "our partners experience..." claims. — estimated impact: **low/medium** (matters only after volume exists).

## Open questions
- **Why is `unique_scheduled` 0?** The data can't tell you whether the list is empty, the LinkedIn account is disconnected, sending is paused, or contacts were never enrolled. Check the sequence's contact/enrollment status directly in Apollo — this is the first thing to resolve.
- **Is this the campaign the brief intended to describe?** The brief describes an email program; this pull is a LinkedIn sequence. Confirm you're evaluating the right asset, or that an email counterpart exists elsewhere.
- **Does `{{Company}}` resolve correctly in Apollo's LinkedIn message rendering?** Send yourself a test to confirm the merge tag isn't rendering blank or literal.
- **Reply sentiment is moot for now** (zero replies), but once volume exists, remember Apollo's API does not expose sentiment — spot-check actual replies before treating reply count as success, since angry/"not interested" replies count the same as positive ones.

## Recommended changes

This LinkedIn sequence has sent zero messages in over four months, so the single most important fix is operational: get contacts enrolled and sending before judging any copy. On the copy side, Step 1 targets the wrong persona (a property portfolio manager rather than a service business owner) and Steps 2-3 use a likely-broken {{Company}} merge tag, both of which will suppress connect-accept and reply rates once volume starts. The rewrites below realign every touch to the home/outdoor service owner, standardize merge tags, and add the CRM-integration differentiator that separates Call Boss from basic message-taking answering services.

### Change 1 — step 1 — proposed (auto-apply off)

**Why:** Removes the 'manage a sizable property portfolio' line flagged as a hard persona mismatch (issue #2) and replaces it with the brief's #1 pain point, missed calls while owners are in the field. Keeps the connect request short and warm per the brief's tone guidance.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

Saw you run {{account.name}}. I work with owners of service businesses who lose jobs when calls go to voicemail while the crew is out in the field.

Figured it'd be worth connecting.
```

### Change 2 — step 2 — proposed (auto-apply off)

**Why:** Fixes the broken {{Company}} tag by switching to {{account.name}} (issue #3), and adds the CRM-integration/US-based contrast the evaluation said was missing, which is the differentiator most likely to move a skeptical buyer who has only tried basic answering services.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

Thanks for connecting.

I'd bet {{account.name}} takes a steady stream of calls, and every one that gets missed while your team is on a job is a lead walking to a competitor.

That's what we fix at Call Boss. A trained, US-based team answers your calls, books estimates, and keeps your CRM updated, including nights and weekends. Not just message-taking, we actually get into your system and handle the follow-up.

Want me to send a link to grab a quick call and see if it's a fit?
```

### Change 3 — step 3 — proposed (auto-apply off)

**Why:** Replaces the vague, unsubstantiated 'our partners experience...' claims (issue #5) with the real objection and answer from the brief ('why hire you when I can hire office staff'), giving this follow-up a genuinely new angle instead of just circling back. Uses {{account.name}} for consistent personalization.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hey {{contact.first_name}},

Quick follow-up. One question owners ask me: 'Why not just hire office staff?'

Honest answer: we scale better and cost less than a full-time hire, with no training headaches or turnover to manage. You get coverage that actually answers, books, and updates your CRM without another payroll line.

Worth a 15-minute call to see the numbers for {{account.name}}? Happy to send the link.
```

### Change 4 — step 4 — proposed (auto-apply off)

**Why:** Keeps the breakup format but ties the walk-away directly to the brief's core pains (missed calls, admin overload, after-hours leads) rather than the generic 'save time, money, and connections,' giving a last concrete reason to reply. Replaces curly quotes to keep rendering clean.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

I won't keep filling your inbox.

If missed calls and admin overload aren't a headache right now, no worries at all and I'll leave you to it.

But if losing after-hours leads is costing you, one short call is all it takes to see if we can help. Just say the word and I'll send the link.
```

## A/B test plan

**Hypothesis:** Changing the Step 1 connect message from the mismatched 'property portfolio' line to a service-owner pain hook (missed calls in the field) will increase connect-accept rate, because the first touch will read as relevant instead of as a mistargeted mass message.
**Variant A:** Hi {{contact.first_name}}, Saw you run {{account.name}}. I work with owners of service businesses who lose jobs when calls go to voicemail while the crew is out in the field. Figured it'd be worth connecting.
**Variant B:** Hi {{contact.first_name}}, Saw you run {{account.name}}. Curious how you handle calls that come in while your crew is out on jobs. Would like to connect.
**Success metric:** Connect-accept rate, then downstream reply rate on Step 2. Call a winner at 150+ connect requests sent per variant; if the relative difference is under 20%, keep Variant A (the pain-led version) as the simpler default. Do not change Steps 2-4 or send timing while the test runs so the Step 1 effect stays isolated.
**Decision rule:** Winner = higher connect-accept rate at 150+ sent per variant with at least a 20% relative gap; otherwise default to Variant A.

## Manual changes (targeting / timing / list)

- Resolve why unique_scheduled is 0: check in Apollo whether the sequence has contacts enrolled, the LinkedIn account is connected/authorized, and sending is not paused. Nothing else matters until messages actually send.
- Confirm channel expectations with the owner: this is a LinkedIn sequence but the brief's targets (delivery/bounce/spam/open rates) are written for email. Set LinkedIn-appropriate KPIs (connect-accept rate, DM reply rate, meetings booked) before judging performance.
- Send yourself a test message to verify {{account.name}} and {{contact.first_name}} render correctly in Apollo's LinkedIn message output, and confirm the old {{Company}} tag is fully removed.
- Verify the enrolled list is filtered to the actual target verticals (landscaping, lawn care, pest control, HVAC, plumbing, roofing, etc.) and to Owner/Office Manager titles, since Step 1's old copy suggests the list may have included property/real-estate contacts.
- Once sending, ramp gradually (start ~20-30 connects/day) to protect the LinkedIn account from action limits rather than pushing 60/day immediately.

## Next review

Re-run the evaluation after at least 150 connect requests have been sent per Step 1 variant (roughly 300 total), which at a ramped 20-30/day is about 2-3 weeks. Watch first for connect-accept rate and whether messages are sending at all, then Step 2 reply rate and any positive/meeting replies. Do not draw copy conclusions until real volume exists.

---

# CB LI Sector 3 (69a60a62b30e25000da60630)

_Brief used: briefs/call-boss.md_

**Auto-apply is off — all changes below are proposals.**

## Evaluation

# Campaign Evaluation — CB LI Sector 3 — 2026-07-14

## Verdict
This campaign has **zero recorded activity** — 0 scheduled, 0 delivered, 0 of everything across all four steps — so there is no performance to evaluate. Two structural problems override any metric discussion: (1) this is a **LinkedIn sequence** (`linkedin_step_connect` / `linkedin_step_message`), not the email campaign the brief describes, so the brief's email targets (open rate, deliverability, subject lines, Calendly CTA) largely don't apply; and (2) the **step-1 copy targets the wrong audience** ("manage a sizable property portfolio" speaks to property managers/landlords, not the landscaping/HVAC/pest-control service owners the brief defines). Fixing the audience/copy mismatch and confirming the correct channel is worth everything here, because right now nothing is being learned.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Unique scheduled | 0 | — | — | 🔴 no volume |
| Delivery rate | n/a (0 sent) | >97% | 95%+ | ⚪ unmeasurable |
| Bounce rate | n/a | <2% | — | ⚪ unmeasurable |
| Spam-block rate | n/a | <0.3% | — | ⚪ unmeasurable |
| Open rate | n/a | 30–50% | 30% | ⚪ N/A on LinkedIn (no opens) |
| Reply rate | n/a | 1–3% | 2% | ⚪ unmeasurable |
| Positive reply rate | n/a | — | 1.5% | ⚪ unmeasurable |
| Meetings / 100 delivered | n/a | — | 1 | ⚪ unmeasurable |

Every engagement status is ⚪ because **n = 0**. Nothing has been sent, so no claim about deliverability, engagement, or copy performance can be supported by data.

## Funnel
```
Scheduled 0 → Delivered 0 → Opened 0 → Replied 0 → Clicked 0
```
There is no funnel. The biggest "leak" is at the top: the sequence has never dispatched a single touch despite being marked `active: true` and created 2026-03-02 (over four months before this pull). Either the sequence has no contacts loaded, is paused at the account/mailbox level, or the LinkedIn automation isn't connected. This must be diagnosed before any content critique matters.

Note also: this is a LinkedIn channel. Open rate does not exist for LinkedIn connect requests and messages, so the brief's 30% open-rate target and the whole email deliverability gate are inapplicable to *this* sequence. If the brief's email program is what's meant to be audited, this is the wrong sequence.

## Step-by-step
No sends on any step → no replies attributable to any step. Verdicts below are **copy-only**, not performance-based (all n = 0).

| Step | Type | Wait | Copy verdict (no data) |
|---|---|---|---|
| 1 | LinkedIn connect | 30 | ❌ Audience mismatch ("property portfolio") + broken/placeholder merge risk |
| 2 | LinkedIn message | 3 | 🟡 On-message value prop, but uses `{{Company}}` — inconsistent merge token |
| 3 | LinkedIn message | 3 | 🟡 Generic "circling back," vague proof ("higher lead connection") |
| 4 | LinkedIn message | 3 | 🟡 Reasonable soft breakup; smart quotes present |

Single variant per step, so no A/B comparison is possible and none could be called at n = 0 regardless.

## Copy-to-audience fit
- **Step 1 (critical mismatch):** "Saw you run {{account.name}} and manage a sizable property portfolio." The brief's audience is **home/outdoor service business owners** (landscaping, HVAC, plumbing, pest control, etc.). "Property portfolio" reads as real estate / property management — a different vertical entirely. This is the exact "messaging isn't matching our target audience" hypothesis the brief raised, made concrete. It leads with a false assumption about who the reader is, not with a stated pain point (missed calls, no receptionist bandwidth).
- **Merge-token inconsistency:** Step 1 uses `{{account.name}}` and `{{contact.first_name}}`, but Steps 2 uses `{{Company}}` — a different, likely invalid token. If `{{Company}}` doesn't resolve, Step 2 will render blank or literal, which is a credibility killer on first contact.
- **Pain points:** Steps 2–4 do hit the brief's core pains (call volume, admin overload, 24/7 coverage, missed leads) reasonably well and in a fairly warm tone — this part is closer to brief intent.
- **Proof points unused:** The brief lists strong, specific assets (named testimonials, CRM integrations with Jobber/Service Autopilot/YardBook, woman/minority-owned). Step 3's "our partners experience higher lead connection" is vague where a concrete testimonial or the "we're in the US, we get into your CRM" objection-handling from the brief's Q&A would land harder.
- **CTA / commitment:** Permission-based CTAs ("Want me to send the link?") are appropriate for the audience's commitment level. Fine.
- **Tone:** Generally warm and practical, matching the brief. Good.
- **Constraint check:** No em dashes found (brief prohibits them) — compliant. Smart/curly quotes appear in Step 4; harmless but worth normalizing. No pricing overstatement or scope overreach detected.

## Prioritized issues
1. **Zero volume / sequence not sending** — evidence: `unique_scheduled: 0` across all steps despite `active: true` and a 2026-03-02 creation date — estimated impact: high (nothing can work or be learned until this is fixed).
2. **Channel vs. brief mismatch** — evidence: all steps are `linkedin_step_*`; the brief describes an *email* campaign with open-rate, deliverability, subject-line, and Calendly targets that don't map to LinkedIn — estimated impact: high (you may be auditing the wrong sequence, or the brief targets need LinkedIn-appropriate KPIs like connection-accept rate and reply rate).
3. **Step-1 audience mismatch ("property portfolio")** — evidence: opening line addresses property managers, not service-business owners the brief defines — estimated impact: high (kills relevance on the first, most important touch — the connection request).
4. **Broken merge token `{{Company}}` in Step 2** — evidence: inconsistent with `{{account.name}}` used elsewhere — estimated impact: medium (renders blank/literal, damages first message credibility).
5. **Vague, unsupported proof in Step 3** — evidence: "higher lead connection, lower missed call volume" with no named testimonial or CRM-integration specifics the brief supplies — estimated impact: low–medium.

## Open questions
- **Why is the sequence at zero sends?** Check in Apollo whether contacts are loaded, whether the LinkedIn account is connected/authorized, and whether daily send caps or mailbox/account status are blocking dispatch. The API can't tell us why nothing has gone out.
- **Is this the sequence you meant to audit?** The brief is written for a cold *email* program; this is a LinkedIn sequence. Confirm whether there's a separate email sequence that should have been pulled, or whether the brief's targets should be reframed for LinkedIn (connection-accept rate, message reply rate) — LinkedIn has no "open" event.
- **Reply sentiment:** Not applicable yet (0 replies), but once live, remember Apollo does not expose reply sentiment via API — angry/negative replies count toward reply rate, so spot-check actual replies before treating reply volume as success.
- **Does `{{account.name}}` populate cleanly** for LinkedIn-sourced contacts, and does the audience "property portfolio" framing reflect an actual list-targeting error (are you scraping property managers instead of service businesses)?

## Recommended changes

This is a LinkedIn sequence with zero recorded activity, so the top priority is operational (diagnose why nothing has dispatched) before any copy can be judged on performance. The most fixable copy problems are concrete: Step 1 addresses the wrong audience ('property portfolio' speaks to property managers, not service-business owners), Step 2 uses a broken {{Company}} merge token, and Step 3 leans on vague proof while the brief supplies strong specifics. Rewriting these four touches to match the brief's home/outdoor service-owner audience, fix the merge tokens, and swap in real proof points should lift connection-accept and reply rates once the sequence is actually sending.

### Change 1 — step 1 — proposed (auto-apply off)

**Why:** Fixes the critical audience mismatch flagged as issue #3: replaces the real-estate 'property portfolio' framing with the brief's core pain (missed calls while staff is in the field) aimed at service-business owners. Kept short for LinkedIn connect-request limits and preserved {{contact.first_name}} and {{account.name}}.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

Saw you run {{account.name}}. I work with service business owners who lose leads when calls come in while everyone's out in the field. Thought it'd be worth connecting.
```

### Change 2 — step 2 — proposed (auto-apply off)

**Why:** Fixes the broken {{Company}} token (issue #4) by switching to the valid {{account.name}}, and adds the 'US-based team' objection-handler from the brief's Q&A. Keeps the warm tone and permission-based CTA.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

Thanks for connecting.

I'd bet {{account.name}} gets a steady stream of calls plus admin work you'd love off your plate, especially when the crew is out on jobs.

That's what Call Boss handles. Our US-based team answers your calls, catches up your admin, and keeps up with old clients and new leads. With 24/7 plans you're covered nights and weekends too.

Want me to send a link to grab a quick call and see if it fits?
```

### Change 3 — step 3 — proposed (auto-apply off)

**Why:** Replaces the vague 'higher lead connection' claim (issue #5) with concrete, brief-supported proof: named CRM integrations and the real verticals from the testimonials, plus the 'more than message-taking' differentiator that addresses what they've already tried. New angle rather than 'circling back.'

**Subject before:** 
**Subject after:** 

**New body:**
```
Hey {{contact.first_name}},

One more angle on Call Boss: we plug straight into the tools you likely already use, like Jobber, Service Autopilot, and YardBook, so we can book jobs and update accounts, not just take messages like a basic answering service.

Owners we work with in lawn care, pest control, and irrigation tell us the biggest win is fewer missed leads and one less thing to manage.

Want the link to talk it through?
```

### Change 4 — step 4 — proposed (auto-apply off)

**Why:** Normalizes the smart/curly quotes flagged in the eval, adds a new concrete angle (specific 15-minute call and cost transparency, which addresses the 'too expensive' objection) instead of a generic breakup, and keeps the soft close that fits the audience's tone.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

I don't want to be "that vendor" in your inbox, so I'll keep this short.

If missed calls or admin overload ever start costing you jobs, a 15-minute call with my team can show you exactly how we'd cover it and what it'd cost. If now's not the time, no worries at all.

Just say the word.
```

## A/B test plan

**Hypothesis:** Rewriting the Step 1 connection request to lead with a service-owner pain point (missed calls in the field) instead of the mismatched 'property portfolio' line will improve connection-accept rate because the message will finally be relevant to the actual audience.
**Variant A:** Hi {{contact.first_name}}, Saw you run {{account.name}}. I work with service business owners who lose leads when calls come in while everyone's out in the field. Thought it'd be worth connecting.
**Variant B:** Hi {{contact.first_name}}, Quick one: does {{account.name}} ever miss customer calls when the crew's out on jobs? That's the problem I help service owners solve. Would like to connect.
**Success metric:** Connection-accept rate (LinkedIn has no open event). Call a winner at >=150 sent connection requests per variant; if the relative difference is under 20%, keep Variant A as the simpler default.
**Decision rule:** Whichever variant has the higher accept rate at the threshold wins and becomes the sole Step 1; if inconclusive, keep A. Do not change Steps 2-4 while this test runs so accept-rate differences are attributable to Step 1 copy alone.

## Manual changes (targeting / timing / list)

- Diagnose the zero-send problem first: confirm contacts are loaded into 'CB LI Sector 3,' the LinkedIn account is connected/authorized, and no account-level pause or daily cap is blocking dispatch. No copy change matters until touches actually send.
- Confirm channel intent: the brief describes an email program (open rate, deliverability, Calendly), but this is a LinkedIn sequence. Either pull/audit the intended email sequence or reframe targets to LinkedIn-appropriate KPIs (connection-accept rate and message reply rate); open rate does not exist here.
- Audit list targeting for a scraping error: the 'property portfolio' framing suggests property managers may have been pulled instead of service-business owners. Verify the loaded contacts are owners/office managers at landscaping, HVAC, pest control, plumbing, etc. companies, and cut any real-estate/property-management contacts.
- Verify {{account.name}} populates cleanly for LinkedIn-sourced contacts before launch; a blank company token in Step 1 or 2 kills credibility on first contact.
- Replace the Calendly 'send the link' CTA references with the actual booking flow you use inside LinkedIn DMs, and confirm the link is ready to paste when prospects say yes.

## Next review

Re-run the evaluation after the sequence has dispatched at least 150 connection requests per Step 1 variant (roughly enough to read connection-accept rate) or 3 weeks after the zero-send issue is fixed, whichever comes first. Watch first for whether touches are sending at all, then connection-accept rate on Step 1, then reply rate on Steps 2-4, and spot-check reply sentiment manually since the API does not expose it.

---

# Cappsure LI Sector 3 (698cc2cf5186bf00219d7c14)

_Brief used: briefs/cappsure.md_

**Auto-apply is off — all changes below are proposals.**

## Evaluation

# Campaign Evaluation — Cappsure LI Sector 3 — 2026-07-14

## Verdict
This campaign has **zero recorded activity** — 0 scheduled, 0 delivered, 0 of everything across all four steps, despite being marked `active: true` and having been created on 2026-02-11 (roughly five months before this pull). There is no engagement data to diagnose; the single biggest problem is that the sequence is not actually sending. Until contacts are enrolled and touches start firing, every downstream metric is unknowable and no copy or targeting judgment can be validated against real behavior. Fixing the launch problem is worth 100% of the campaign's potential value, because right now the return is exactly zero.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Scheduled | 0 | — | — | 🔴 |
| Delivered | 0 | — | — | 🔴 |
| Delivery rate | N/A (no sends) | >97% | 95% | 🔴 |
| Bounce rate | N/A | <2% | — | ⚪ no data |
| Open rate | N/A | 30–50% | 30% | ⚪ no data |
| Reply rate | N/A | 1–3% | 2% | ⚪ no data |
| Positive reply rate | N/A | — | 1.5% | ⚪ no data |
| Meetings / 100 delivered | N/A | — | 1 | ⚪ no data |
| Unsubscribe rate | N/A | <1% | — | ⚪ no data |

## Funnel
There is no funnel to analyze. Scheduled (0) → Delivered (0) → Opened (0) → Replied (0). The "leak" is at the very top: nothing has entered the sequence. Note also that this is a **LinkedIn sequence** (`linkedin_step_connect` + three `linkedin_step_message` steps), not an email sequence. The brief's targets (delivery rate, bounce rate, spam-block) are email-native metrics that do not map cleanly onto LinkedIn touches — bounce/spam concepts largely don't apply, and "delivery" depends on connection acceptance rather than an inbox. This channel mismatch should be reconciled before the brief's targets are used to grade it.

## Step-by-step
No step has any sends, opens, or replies, so no step can be called a winner or dead weight, and there are no variants to A/B (each step has a single variant). Sample size is n=0 everywhere — nothing is statistically callable.

| Step | Type | Wait | Sends | Replies | Verdict |
|---|---|---|---|---|---|
| 1 | LinkedIn connect request | 0d | 0 | 0 | No data — never fired |
| 2 | LinkedIn message (audit pitch) | 1d | 0 | 0 | No data — never fired |
| 3 | LinkedIn message (audit follow-up) | 2d | 0 | 0 | No data — never fired |
| 4 | LinkedIn message (breakup / checklist offer) | 6d | 0 | 0 | No data — never fired |

## Copy-to-audience fit
The copy exists and can be read, so this is the only layer with substance — but treat all of it as **untested hypothesis**, since no prospect has seen it.

- **Vertical is narrowed to municipalities only.** Every step targets `{{account.city}}`, "parks and public facilities," and "Public Space Visibility." The brief's target list is broad (property management, facilities, apartments, landscaping, janitorial, roofing, etc.); this sequence ("Sector 3") appears to be a municipality-specific slice. That's a legitimate segmentation choice, but confirm the enrolled list actually consists of municipal/public-sector contacts, or the personalization tokens will misfire.
- **CTA deviates from the brief.** The brief's stated CTA is "Book a quick 15-minute demo." Every step here pitches a **"free 20-minute Public Space Visibility & Compliance Audit"** plus a scorecard/one-pager, not a demo. This is a softer, value-first commitment that is arguably well-suited to cold LinkedIn outreach — but it is a different offer than the brief specifies, and it should be a deliberate decision, not drift.
- **Pain-point alignment is reasonable.** Steps reference paper/email reporting, photo storage, and vendor work documentation, which map to the brief's pain points #1 (visibility into completed work), #2 (inconsistent reporting), and #5 (when/where/who). GPS-stamped verification is the lead differentiator — consistent with the brief's guidance to differentiate on GPS/geofence rather than educate from zero.
- **No invented stats.** The copy avoids fabricated percentages or dollar figures, respecting the brief's constraint. Good.
- **Tone matches.** Practical, low-jargon, accountability-focused ("simple wins," "before any software change"). Consistent with the brief's stated resonant tone.
- **Em dash constraint:** No em dashes are present; the copy uses non-breaking hyphens (e.g., "GPS‑stamped," "20‑minute"). Compliant, though those special characters could be normalized to plain hyphens.
- **One structural risk:** Step 1 is a bare connection request that already discloses the sales angle ("I work with municipalities on inspections and field reporting"). Whether that helps or hurts connection-accept rate is exactly the kind of thing the (currently nonexistent) data would tell you.

## Prioritized issues
1. **The sequence is not sending — 0 scheduled/0 delivered across all steps.** — evidence: `unique_scheduled: 0`, all step counters 0, despite `active: true` and creation ~5 months prior. — estimated impact: **high** (this is total; nothing else matters until it's resolved). Check whether contacts were ever enrolled, whether a LinkedIn account is connected/authorized, and whether the sequence is paused at the account level.
2. **Channel vs. brief-target mismatch.** — evidence: sequence is LinkedIn-only, but the brief's targets and this evaluation framework are email deliverability metrics (delivery/bounce/spam). — estimated impact: **medium** (measurement/expectation problem; you'll grade this campaign against the wrong yardstick).
3. **Vertical scope is a single slice of the brief.** — evidence: all copy is municipality-specific while the brief targets ~15 verticals. — estimated impact: **medium** (fine if intentional and if the list matches; a problem if non-municipal contacts get enrolled and hit broken `{{account.city}}`/parks references).
4. **CTA is an "audit," not the brief's "demo."** — evidence: steps 2–4 pitch a 20-min audit + scorecard vs. brief's 15-min demo. — estimated impact: **low/medium** (defensible soft CTA, but undocumented deviation from the brief's stated goal).

## Open questions
- **Why is `scheduled` 0?** Was the list ever loaded, is the LinkedIn sending account connected, or is the sequence paused? This needs to be checked directly in Apollo — the API pull can't tell you the cause.
- **Is "Sector 3" one of several parallel sequences?** If municipality contacts live here and other verticals live in "Sector 1/2/etc.," confirm the segmentation and that each sequence's copy matches its list.
- **Reply sentiment is not exposed by the Apollo API.** Moot today (0 replies), but once sends begin, spot-check actual replies manually — reply rate will count "not interested" and angry replies as replies.
- **Are LinkedIn connection-accept and message-reply tracked in these same fields?** Confirm which Apollo counters populate for LinkedIn steps so future evaluations read the right stage as the "delivery" gate.

## Recommended changes

This LinkedIn sequence has zero recorded activity (0 scheduled/0 delivered across all four steps) despite being active for ~5 months, so the overwhelming priority is a non-copy operational fix: get the sequence actually enrolling and sending. Because no prospect has seen the copy, all copy remains untested hypothesis and changes should be minimal and conservative until touches start firing and produce a readable sample. The copy that exists is reasonably on-brief (municipal slice, GPS-verification differentiator, practical tone), so the few rewrites below tighten the connection request and follow-ups without overhauling a message set we cannot yet grade.

### Change 1 — step 1 — proposed (auto-apply off)

**Why:** Step 1 currently front-loads the sales angle in a bare connection request, which can suppress accept rates. This softens the pitch to a peer-to-peer, curiosity framing while keeping it honest, and preserves the {{account.city}} token. Untested hypothesis given zero sends; worth A/B testing once live.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

I work with municipal teams on how inspections and field reporting get done across parks and public spaces. Looks like that's your world at {{account.city}}. Would be glad to connect.
```

### Change 2 — step 2 — proposed (auto-apply off)

**Why:** Trims the long audit pitch to a single clear question plus one differentiator (GPS verification, brief pain points #1/#2/#5) and shifts the CTA toward the brief's stated 15-minute demo rather than the drifted 20-minute audit. Normalized special hyphen characters to plain hyphens per the compliance note.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

Thanks for connecting.

Quick question: how does {{account.city}} track inspections and vendor work across parks and public facilities today, mostly paper and email, or a dedicated system?

Reason I ask, we built Cappsure so municipal teams get GPS-stamped inspections, work orders, and photos in one place, so there's no chasing reports or disputing what got done on-site. Happy to walk you through it in 15 minutes if useful.
```

### Change 3 — step 3 — proposed (auto-apply off)

**Why:** The prior step 3 just repeats the audit ask; the brief requires each follow-up to bring a NEW angle. This introduces a fresh pain point (vendor verification + scattered records) and a lower-friction CTA (a short clip instead of a booking commitment).

**Subject before:** 
**Subject after:** 

**New body:**
```
Hey {{contact.first_name}},

Circling back with a different angle. The teams I talk to lose the most time on two things: verifying a vendor actually completed work on-site, and pulling together photos and reports scattered across email and text.

Cappsure timestamps and geo-tags each of those automatically. Want me to send a 2-minute clip of how it looks for a public-space portfolio?
```

### Change 4 — step 4 — proposed (auto-apply off)

**Why:** Keeps the polite breakup but replaces the vague 'audit vs checklist' choice with a concrete, low-effort re-engagement option ('reply later'), which typically lifts response on final touches without inventing any stats or client names per brief constraints.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

I'll leave it here so I'm not cluttering your inbox. If keeping tabs on inspections and vendor work across sites is ever a priority for {{account.city}}, I'm happy to show you what other municipal teams are doing.

Just reply "later" and I'll circle back next quarter.
```

## A/B test plan

**Hypothesis:** Softening the Step 1 connection request so it does not disclose the sales angle will increase LinkedIn connection-accept rate, because peer-framed requests are accepted more often than overtly commercial ones, and every downstream message depends on the connection being accepted.
**Variant A:** Hi {{contact.first_name}}, Saw you're in charge of keeping things running smoothly for {{account.city}}. I work with municipalities on inspections and field reporting across public spaces. Thought it'd be useful to connect.
**Variant B:** Hi {{contact.first_name}}, I work with municipal teams on how inspections and field reporting get done across parks and public spaces. Looks like that's your world at {{account.city}}. Would be glad to connect.
**Success metric:** Connection-accept rate. Call a winner at >=150 sent connection requests per variant; if the relative difference is under 20%, keep Variant B (the softer, more scalable framing). Do not judge on downstream replies until accept-rate is settled.
**Decision rule:** Hold all other steps, timing, and the enrolled list constant while the test runs so accept-rate is the only moving variable. Only compare reply rates after connection-accept has a clear winner.

## Manual changes (targeting / timing / list)

- FIX THE LAUNCH FIRST: In Apollo, confirm contacts are actually enrolled in 'Cappsure LI Sector 3' (unique_scheduled is 0), that a LinkedIn sending account is connected and authorized for the sequence, and that the sequence is not paused at the account or step level. No copy change matters until touches fire.
- Verify the enrolled list is genuinely municipal/public-sector contacts, since every step uses {{account.city}} and 'parks and public facilities' language that will misfire on non-municipal records from the broader brief list.
- Reconcile measurement: this is a LinkedIn sequence, so the brief's email metrics (delivery rate, bounce rate, spam-blocked) do not apply. Re-baseline targets to LinkedIn-native stages: connection-accept rate, message reply rate, and positive reply/demo rate.
- Confirm which Apollo counters populate for LinkedIn steps (accept vs. delivered vs. replied) so the next evaluation reads the correct stage as the 'delivery' gate.
- Confirm the intended CTA with the client: the sequence pitches an 'audit,' the brief says 'demo.' Pick one deliberately; the rewrites above shift toward the brief's 15-minute demo. Keep daily volume at 60 (or lower for LinkedIn, ~20-30 connection requests/day to stay within safe limits) once sending resumes.
- Normalize the non-breaking/special hyphen characters (e.g., in 'GPS-stamped', '15-minute') to plain hyphens across all templates for consistency.

## Next review

Re-run the evaluation once the sequence has actually sent to at least 100-150 contacts through Step 1 and enough have progressed to Step 2 (roughly 2-3 weeks after launch is confirmed). First thing to check: is scheduled/sent finally non-zero. Then watch connection-accept rate (Step 1 A/B), message reply rate, and manually spot-check reply sentiment since Apollo does not expose it.

---

# Cappsure LI Sector 1 (698cbc589fd585001b70f416)

_Brief used: briefs/cappsure.md_

**Auto-apply is off — all changes below are proposals.**

## Evaluation

# Campaign Evaluation — Cappsure LI Sector 1 — 2026-07-14

## Verdict
This campaign cannot be evaluated on performance because **it has sent zero messages**: every counter (scheduled, delivered, opened, replied) is 0 across all four steps, despite the sequence being marked active and created five months ago (2026-02-11). The single biggest problem is not copy or targeting — it's that **the sequence is not actually running**, so there is no funnel, no engagement, and no data to judge. A secondary, structural issue: this is a **LinkedIn sequence** (connect + messages), not an email campaign, so the email-deliverability framework and the brief's email-centric targets (open rate, bounce, spam) do not apply cleanly and need to be reconciled before any numbers will mean anything.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Unique scheduled | 0 | — | — | 🔴 |
| Unique delivered | 0 | — | — | 🔴 |
| Delivery rate | N/A (no sends) | >97% | 95% | 🔴 |
| Bounce rate | N/A | <2% | — | ⚪ no data |
| Spam-block rate | N/A | <0.3% | — | ⚪ no data |
| Open rate | N/A | 30–50% | 30% | ⚪ no data |
| Reply rate | N/A | 1–3% | 2% | ⚪ no data |
| Unsubscribe rate | N/A | <1% | — | ⚪ no data |
| Meetings / 100 delivered | N/A | — | 1 | ⚪ no data |

Note: open/bounce/spam metrics are email concepts. On a LinkedIn sequence Apollo will not populate them in a meaningful way even once the sequence runs — the real LinkedIn metrics are connection-accept rate and reply rate.

## Funnel
There is no funnel to analyze. Scheduled → Delivered → Opened → Replied is 0 → 0 → 0 → 0. Nothing has entered the top of the sequence, which means either no contacts have been loaded/activated, the sending (LinkedIn) account isn't connected, or the sequence is paused at the contact level despite showing `active: true`. **The biggest "leak" is at the very top: no contacts are being scheduled at all.** This must be resolved before any engagement signal exists.

## Step-by-step
All four steps are LinkedIn actions and all have zero volume, so no step can be scored on performance. Structural read of each:

| Step | Type | Wait | Volume | Verdict |
|---|---|---|---|---|
| 1 | LinkedIn connect request w/ note | 0d | 0 | Untested. Connection note, so subject to LinkedIn's ~300-char limit — copy appears within limit. |
| 2 | LinkedIn message (post-accept) | 1d | 0 | Untested. Carries the actual offer (the "audit"). |
| 3 | LinkedIn message (follow-up) | 3d | 0 | Untested. |
| 4 | LinkedIn message (breakup) | 6d | 0 | Untested. |

Single variant per step, so no A/B comparison is possible even in principle. Once live, I'd want at least ~150–200 delivered per step before drawing any conclusion.

## Copy-to-audience fit
Since there is no performance data, this is the only substantive read available — and there are real issues to flag:

- **Merge-tag inconsistency (likely breakage).** Step 1 uses `{{Company}}` while Steps 2–4 use `{{account.name}}`. These are not the same variable. `{{Company}}` is almost certainly not a valid Apollo token and will render blank or literally, producing "Saw you run and manage multiple properties" in the very first touch. This alone can tank connection-accept rate.
- **Niche narrower than the brief.** The copy speaks specifically to **landscape companies** ("I work with landscape companies," "We built Cappsure so landscapers get GPS-stamped visits… and proposals per property"). The brief targets a much broader set (property/facilities management, janitorial, snow removal, roofing, municipalities, campuses, etc.). This is fine *if* "LI Sector 1" is a landscaping-only list — but if the list is mixed, most recipients will feel the message isn't for them. Confirm the list segment matches the copy.
- **CTA does not match the brief.** The brief's stated CTA is "Book a quick 15-minute demo." The sequence instead offers a **"free 20-minute Portfolio Visibility & Profit Audit"** plus a one-pager/scorecard. This is a legitimate soft-entry offer and arguably better for a cold, low-trust audience — but it is a *different* offer than the brief defines, and it's longer (20 vs 15 min). Decide deliberately which one you're running; right now brief and execution disagree.
- **Pain points are addressed well.** The copy leans on visibility, documentation, and capturing billable work — which maps directly to brief pain points #1 (real-time visibility), #2 (inconsistent reporting), and #6 (accurate estimating/billing). Tone is practical and non-jargon, matching the brief. Good.
- **Constraints respected.** No invented stats, no named client logos, and no em dashes. Compliant with the brief's "must not" list.
- **Sophistication level is appropriate.** Copy differentiates on GPS/geofence verification rather than educating from zero, matching the brief's "moderately sophisticated" read.

## Prioritized issues
1. **Zero sends on an active 5-month-old sequence** — evidence: `unique_scheduled: 0` and all step counters 0, `created_at 2026-02-11`, pulled 2026-07-14 — estimated impact: **high** (nothing else matters until this is fixed; there is no campaign until contacts flow).
2. **Framework/channel mismatch: LinkedIn sequence measured against email targets** — evidence: all steps are `linkedin_step_connect` / `linkedin_step_message`; brief targets delivery/open/bounce/spam — estimated impact: **high** (you'll never populate open/bounce/spam; success must be redefined as connection-accept rate + reply rate before evaluation is meaningful).
3. **Broken merge tag in Step 1 (`{{Company}}` vs `{{account.name}}`)** — evidence: inconsistent tokens across steps — estimated impact: **medium-high** (blank company in the first impression suppresses connection acceptance once live).
4. **Copy niche (landscaping) may not match the list** — evidence: "landscape companies"/"landscapers" language vs. broad brief demographic — estimated impact: **medium** (depends entirely on how "Sector 1" is segmented).
5. **CTA/offer divergence from brief (20-min audit vs. 15-min demo)** — evidence: brief CTA section vs. Step 2 copy — estimated impact: **low-medium** (needs a deliberate decision, not necessarily a problem).

## Open questions
- **Why is the sequence sending nothing?** Is the LinkedIn account disconnected, is the sequence out of contacts, or is it active-but-paused at the contact level? This needs to be checked directly in Apollo — the API summary can't distinguish these.
- **What is "LI Sector 1"?** Is this list scoped to landscaping specifically, or is it a mixed multi-vertical list? That determines whether the landscaping-specific copy is a strength or a mismatch.
- **Which offer is intended** — the 15-min demo (brief) or the 20-min audit (live copy)? Confirm the intended primary CTA.
- **Reply sentiment:** Not applicable yet (zero replies), but note for future rounds — Apollo's API does not expose positive vs. negative reply sentiment, so once replies exist you must spot-check them manually before treating reply rate as a win.
- **Is this the only channel?** The brief references email CTAs and a 60/day email send volume, but the sequence is LinkedIn-only. Confirm whether a parallel email sequence exists that should also be under audit.

## Recommended changes

This is a LinkedIn sequence that has sent zero messages in five months, so the top priority is operational (get contacts flowing and confirm the LinkedIn account is connected), not copy. The most urgent copy fix is the broken merge tag in Step 1 ({{Company}} instead of {{account.name}}), which would render a blank company name in the very first impression and suppress connection acceptance once live. Beyond that, the copy is directionally sound for a landscaping segment, so rewrites focus on fixing the token, tightening length, and giving each follow-up a distinct angle, while operational and targeting decisions are handled by hand in Apollo.

### Change 1 — step 1 — proposed (auto-apply off)

**Why:** Fixes the broken {{Company}} token (Steps 2-4 use {{account.name}}), which would otherwise render 'Saw you run and manage...' and tank connection-accept rate. This is issue #3 in the evaluation and the single highest-impact copy fix. Removed special hyphen characters per the brief's no-em-dash/clean-text constraint.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

Saw you run {{account.name}} and manage work across multiple properties. I work with landscape and property teams on GPS-verified job site reporting and enhancement visibility. Thought it would be worth connecting.
```

### Change 2 — step 2 — proposed (auto-apply off)

**Why:** Aligns the CTA with the brief's stated 15-minute demo (was a 20-minute audit, evaluation issue #5), trims length, keeps the leading question as the hook, and reinforces brief pain points #1 (real-time visibility) and #2 (paper reporting). Preserved {{account.name}} and fixed special hyphens.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

Thanks for connecting.

Quick question: how do crews at {{account.name}} currently send in photos, notes, and enhancement ideas from sites right now, mostly texts and email, or a dedicated system?

We built Cappsure so teams get GPS-stamped visits, photos, and proposals tied to each property, so there is no chasing paper reports or disputing what got done. If it is useful, I can send a link to book a quick 15-minute demo.
```

### Change 3 — step 3 — proposed (auto-apply off)

**Why:** Gives the follow-up a NEW angle (labor overbilling / time verification, brief pain point #3) instead of just 'circling back on the audit,' per the evaluation's rule that each step must add a new reason to reply. Kept it short and single-CTA.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hey {{contact.first_name}},

One thing that comes up a lot with multi-site teams: labor overbilling and no clean way to verify time actually spent on site.

Cappsure's geofence check-ins timestamp every visit, so billing disputes basically disappear. Worth a 15-minute look?
```

### Change 4 — step 4 — proposed (auto-apply off)

**Why:** Keeps the breakup format but ties it to a concrete pain point (vendor verification, reporting) rather than the generic 'that vendor' line, and offers a low-friction binary reply. Fixed special hyphens and preserved merge tags.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

I do not want to clutter your inbox, so this is my last note.

If verifying vendor work and cleaning up site reporting is not a priority right now, no worries. If it ever is, I am one message away. Want me to send a link, or should I close this out?
```

## A/B test plan

**Hypothesis:** Fixing the broken company merge tag in the Step 1 connection note will raise connection-accept rate, because recipients see a personalized, coherent first line instead of a blank or literal token.
**Variant A:** Hi {{contact.first_name}}, Saw you run {{account.name}} and manage work across multiple properties. I work with landscape and property teams on GPS-verified job site reporting and enhancement visibility. Thought it would be worth connecting.
**Variant B:** Hi {{contact.first_name}}, You manage work across multiple sites at {{account.name}}. I help teams get GPS-verified proof of what got done on each property, without the paper chase. Open to connecting?
**Success metric:** Connection-accept rate. Call a winner at >=150 connection requests sent per variant; if the relative difference is under 20%, keep Variant A (simpler, closer to original).
**Decision rule:** Do not change Steps 2-4, send volume, or targeting while this test runs, so the accept-rate difference is attributable only to the connection note.

## Manual changes (targeting / timing / list)

- URGENT: Diagnose why the sequence has sent zero messages in five months. In Apollo, confirm (1) the LinkedIn sending account is connected and healthy, (2) contacts are actually loaded and activated into the sequence, and (3) the sequence is not paused at the contact level despite showing active. No copy change matters until contacts flow.
- Reconcile success metrics: this is a LinkedIn sequence, so drop the email targets (open rate, bounce, spam) and evaluate on connection-accept rate and reply rate instead. Set explicit LI targets before the next review.
- Confirm what 'LI Sector 1' actually contains. If it is a landscaping-only list, the current landscaping-leaning copy is fine; if it is mixed (facilities, janitorial, roofing, municipalities), either re-segment into vertical-specific sequences or swap the landscaping language for the broader 'property and facilities teams' framing used in the rewrites.
- Make a deliberate offer decision: the brief says 15-minute demo, the live copy said 20-minute audit. Rewrites standardize on the 15-minute demo; if you prefer the soft-entry audit as the cold opener, apply it consistently across Steps 2-4.
- Respect LinkedIn connection-note character limits (~300 chars) when pasting Step 1; verify the rendered length after merge tags expand.
- Set a sane daily LinkedIn action volume (well under the platform's ~20-25 connection requests/day safe limit) rather than the brief's 60/day email figure, which does not apply to this channel.

## Next review

Re-run the evaluation once at least ~150-200 connection requests have been sent and Steps 2-4 have accumulated ~150 delivered messages each (enough for a readable connection-accept and reply-rate sample). If sends are still at zero at the next check, the issue is operational/account-level, not copy, and the review should focus there. Watch connection-accept rate first, then reply rate and manual reply-sentiment spot checks.

---

# Cappsure LI Sector 2 (698b7eb2fe465f0011eb536b)

_Brief used: briefs/cappsure.md_

**Auto-apply is off — all changes below are proposals.**

## Evaluation

# Campaign Evaluation — Cappsure LI Sector 2 — 2026-07-14

## Verdict
This campaign has **zero recorded activity** — 0 scheduled, 0 delivered, 0 sent across all 4 steps — despite being marked active and having been created on 2026-02-10, roughly five months before this pull. There is nothing to diagnose on deliverability or engagement because nothing has gone out. Two structural problems are visible regardless: (1) this is a **LinkedIn sequence** (all steps are `linkedin_step_connect` / `linkedin_step_message`), so the email-centric targets in the brief and this framework's deliverability gate do not apply to it; and (2) the sequence's CTA is a "Field Visibility Audit," not the demo booking the brief defines as the win. Getting contacts actually loaded and sending is worth more than any copy tweak right now, because a campaign that sends nothing converts nothing.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Scheduled | 0 | — | — | 🔴 |
| Delivered | 0 | — | — | 🔴 |
| Delivery rate | N/A (no sends) | >97% | 95% | ⚪ No data |
| Bounce rate | N/A | <2% | — | ⚪ No data |
| Open rate | N/A | 30–50% | 30% | ⚪ No data / N/A for LinkedIn |
| Reply rate | N/A | 1–3% | 2% | ⚪ No data |
| Positive reply rate | N/A | — | 1.5% | ⚪ No data |
| Meetings / 100 delivered | N/A | ~1 | 1 | ⚪ No data |
| Unsubscribe rate | N/A | <1% | — | ⚪ No data |

Every engagement metric is null. The status is not "healthy" or "broken" — it is **unmeasurable because the campaign has not sent**.

## Funnel
Scheduled (0) → Delivered (0) → Opened (0) → Replied (0). There is no funnel to analyze. The single biggest "leak" is at the very top: **contacts are not entering the sequence at all.** Note also that open/bounce/spam are email concepts; for a LinkedIn connect-and-message sequence, the meaningful funnel would be Connection sent → Connection accepted → Message delivered → Replied. Apollo is reporting this against email-style fields, all of which are zero.

## Step-by-step
No step has any sends, so no step can be judged on performance. Each step has a single variant, so there is no A/B test to evaluate and no winner to call. Sample size is n=0 across the board — any comparative claim would be fabricated.

| Step | Type | Sent | Replies | Verdict |
|---|---|---|---|---|
| 1 | LinkedIn connect request | 0 | 0 | Not sent — unmeasurable |
| 2 | LinkedIn message (wait 1d) | 0 | 0 | Not sent — unmeasurable |
| 3 | LinkedIn message (wait 3d) | 0 | 0 | Not sent — unmeasurable |
| 4 | LinkedIn message (wait 4d) | 0 | 0 | Not sent — unmeasurable |

## Copy-to-audience fit
The copy can be read and scored against the brief even with no send data:

- **Pain-point lead (Step 1):** "responsible for facilities across multiple sites… field-reporting headaches" hits pain points #1 and #2 (visibility across sites, messy reporting). Reasonable opener for a connection request, though generic — it names no specific consequence like disputed vendor billing.
- **CTA mismatch (Steps 2–4):** The brief defines the win as a **booked demo** ("Worth a 15-min demo?"). This sequence never asks for a demo. It pushes a "free 20-minute Field Visibility Audit" and, in Step 4, a "self-assessment checklist." A soft lead-magnet CTA can be legitimate, but as built there is **no path to the actual conversion event** the brief cares about. Even a positive responder gets routed to an audit, not a demo.
- **Commitment level:** A 20-minute audit is a *higher* time ask than the 15-minute demo the brief says this audience will accept, while delivering a vaguer payoff. The step-4 fallback (a checklist they fill out themselves) is lower commitment but also lower intent-signal.
- **Sophistication fit:** Good. The brief says the audience is moderately sophisticated and should be differentiated on GPS/geofence verification rather than educated from zero. Step 2's "GPS-stamped photos, work orders, and inspections in one place" does this correctly and doesn't over-explain.
- **Tone:** Practical and non-jargony, consistent with the brief. Step 4's "I don't want to be another vendor blowing up your inbox" is an appropriate soft breakup.
- **Style rule violation:** The brief explicitly says **do not use em dashes**. The copy is littered with en dashes / non-breaking hyphens ("spreadsheets, or a dedicated tool?", "in one place – I'm offering", "documented – all before"). These violate the spirit of that instruction and read as auto-formatted punctuation.
- **Proof points:** None of the available proof (7,500+ users, app-store reviews on billing accuracy) appears in any message. The brief lists "unknown vendor / lack of trust" as a top objection; the copy does nothing to counter it.

## Prioritized issues
1. **The campaign has sent nothing (0 scheduled/delivered) five months after creation** — evidence: all `unique_*` counters = 0, `created_at` 2026-02-10 vs `pulled_at` 2026-07-14, yet `active: true`. Nothing else matters until this is resolved. Estimated impact: **high**.
2. **Channel/brief mismatch** — evidence: sequence type is entirely LinkedIn (`linkedin_step_connect`/`linkedin_step_message`), but the brief, targets, and prior history are written for email demo outreach. Either the wrong brief is mapped to this sequence or the wrong channel is being measured against email KPIs (open/bounce/delivery rate targets are meaningless for LinkedIn DMs). Estimated impact: **high** (affects whether any of the targets are even valid).
3. **CTA does not match the defined win** — evidence: brief win = booked demo (15-min); sequence only offers a 20-min audit and a self-assessment checklist, with no demo ask anywhere. Estimated impact: **medium** (caps conversion even once sending starts).
4. **Trust/proof objection unaddressed** — evidence: brief flags "unknown vendor" as a core objection; no proof points (7,500+ users, reviews) appear in copy. Estimated impact: **medium**.
5. **Style-rule violations (dashes)** — evidence: en/non-breaking dashes throughout despite explicit "no em dashes" instruction. Estimated impact: **low**.

## Open questions
- **Why has nothing sent?** Is the sequence unpopulated (no contacts added), paused at the account level, disconnected LinkedIn account, or is the Apollo pull scoped incorrectly? Check directly in Apollo whether contacts are enrolled and whether the LinkedIn sending account is connected and within daily limits.
- **Is this the right brief for this sequence?** The name is "Cappsure LI Sector 2" (LinkedIn), but the brief and targets describe email outreach. Confirm whether email KPIs (delivery/open/bounce) should apply at all, or whether LinkedIn connection-acceptance and reply rates are the right yardstick.
- **Is there a parallel email sequence** where the actual demo-booking send volume (brief says 60/day) is happening? If so, that sequence — not this one — is where the deliverability gate and funnel should be evaluated.
- **Reply sentiment** is not exposed by the Apollo API in any case. Once sends begin, spot-check actual replies manually — reply counts will include "not interested" and angry responses, not just interest.

## Recommended changes

This LinkedIn sequence has sent nothing in five months, so the top priority is operational (confirm contacts are enrolled and the LinkedIn account is connected and sending), not copy. Once sending resumes, the copy needs three fixes: route interested people to the actual win (a 15-minute demo) instead of a vaguer 20-minute audit, add the 7,500+ user proof point to counter the 'unknown vendor' objection, and strip the en/non-breaking dashes that violate the brief's no-dash rule. Copy rewrites below are ready to paste but will not matter until the enrollment/sending problem is resolved.

### Change 1 — step 2 — proposed (auto-apply off)

**Why:** Replaces the higher-commitment, vaguer 20-minute audit with the 15-minute demo the brief defines as the win, leads with pain point #3 (labor overbilling/verification), adds the 7,500+ proof point to counter the 'unknown vendor' objection, and removes the en dash. Keeps GPS-verification differentiation the brief calls for.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

Thanks for connecting.

Quick question: across your sites, how do you currently confirm a vendor actually did the work they billed for? Most facilities teams are stuck piecing it together from emails, texts, and photos scattered in different places.

We built Cappsure so multi-site teams get GPS-verified photos, work orders, and inspections in one place. 7,500+ teams use it to stop chasing paper and disputing vendor billing.

Worth a quick 15-minute demo to see if it fits how {{account.name}} runs? Happy to send a link.
```

### Change 2 — step 3 — proposed (auto-apply off)

**Why:** Follow-up now brings a new, concrete angle (billing disputes / geofence verification) instead of restating the audit, aligns the CTA to a demo, and removes the en dash. Directly addresses pain points #1 and #3 from the brief.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hey {{contact.first_name}},

Circling back with a specific example. One of the biggest headaches we hear from multi-site teams is disputed vendor invoices: was the crew really on site, for how long, and did they finish the scope?

Cappsure geofences each location, so every photo and completed checklist is stamped with when, where, and who. No more he-said-she-said at billing time.

Want me to send a link for a 15-minute demo so you can see it against your current process?
```

### Change 3 — step 4 — proposed (auto-apply off)

**Why:** Keeps the soft breakup tone the brief likes but replaces the low-intent self-assessment checklist with a clear demo-or-close choice, giving even the last touch a path to the defined win. Removes the em/en dash usage.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

I do not want to be another vendor cluttering your inbox, so I will keep this short.

If verifying vendor work and cleaning up field reporting is not a priority right now, no problem. If it is, the fastest way to judge Cappsure is a 15-minute demo on your own sites.

Want the link, or should I close the loop?
```

### Change 4 — step 1 — proposed (auto-apply off)

**Why:** Sharpens the generic opener with a specific consequence (verifying vendor work before paying) tied to pain points #1 and #3, which improves connection-accept rate. Minimal change to preserve the low-friction nature of a connect request.

**Subject before:** 
**Subject after:** 

**New body:**
```
Hi {{contact.first_name}},

Saw you oversee facilities across multiple sites at {{account.name}}. I work with teams who are tired of chasing vendors for proof that work actually got done before they pay for it. Thought it would be worth connecting.
```

## A/B test plan

**Hypothesis:** Changing the Step 2 CTA from a 20-minute Field Visibility Audit to a 15-minute demo (plus a proof point) will increase positive reply/booking rate, because the demo is a lower time ask, matches the win the brief says this audience accepts, and the 7,500+ users counters the unknown-vendor trust objection.
**Variant A:** Current Step 2 copy: offers a free 20-minute Field Visibility Audit with a scorecard and one-pager, no proof point, CTA 'If that'd be useful, I can send over a link.'
**Variant B:** New Step 2 copy: leads with vendor-billing verification pain, cites 7,500+ teams, CTA 'Worth a quick 15-minute demo... Happy to send a link.'
**Success metric:** Positive reply rate (interest or booking) per delivered Step 2 message. Call a winner at >=150 delivered messages per variant; if the relative difference is under 20%, keep Variant B for its cleaner demo-to-conversion path.
**Decision rule:** Ship the winner to all steps. Do not change Step 1 connect copy, send timing, or targeting while the test runs so reply differences are attributable to the CTA/proof change only.

## Manual changes (targeting / timing / list)

- Immediately diagnose why zero contacts have sent in five months: confirm contacts are actually enrolled in 'Cappsure LI Sector 2', the sequence is not paused at account level, and the LinkedIn sending account is connected and within daily limits.
- Confirm channel vs brief mapping: this is a LinkedIn connect-and-message sequence, so measure it on connection-accept rate and reply rate, not the email open/bounce/delivery targets in the brief. Update the tracked KPIs accordingly.
- Verify whether a parallel email sequence exists that is handling the 60/day demo outreach the brief describes; if so, evaluate deliverability there, not here.
- Once sending, keep LinkedIn connect volume within safe limits (roughly 15-25 connect requests/day per account) to avoid restrictions, rather than the email 60/day figure.
- Set up a routing/notification so positive replies get a demo link sent same-day, since the sequence previously dead-ended into an audit.

## Next review

Re-run the evaluation once at least 150 contacts have completed Step 2 per variant (or 2-3 weeks after sending actually begins, whichever comes first). Watch first for connection-accept rate and whether messages are delivering at all, then Step 2 positive reply rate to call the A/B test, then whether positive replies convert to booked demos.

---
