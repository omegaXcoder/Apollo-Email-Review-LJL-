# Campaign performance report — 2026-08-03

# (7/22/26) CB HVAC Warm Leads (6a611b02efd8220010b65cc8)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 0**

## Recommended changes

The evaluation is unambiguous: this campaign is failing at the deliverability gate (~12% bounce overall, ~15.5% on fresh sends, 1.30% spam-block, and 0.35% opens), and a prior subject-line swap produced zero lift, proving the problem is inbox placement and/or a broken tracking pixel, not copy. Per the rules, we lead with deliverability remediation and hold copy changes until mail is reliably reaching inboxes, because better copy in the spam folder helps no one. The copy is already broadly on-brief, so the highest-value moves are all non-copy: pause fresh sends, diagnose placement vs. pixel with a seed test, re-verify the list, cut volume, and switch to plain-text to both reduce spam signals and settle the open-tracking question.

## Evaluation

# Campaign Evaluation — (7/22/26) CB HVAC Warm Leads — 2026-08-03

## Verdict
Nothing has changed where it matters: the campaign is still failing at the deliverability gate, and every engagement number below it remains uninterpretable. Bounce rate on attempted sends is ~12% overall (and ~15.5% on the ~277 emails sent since the last review), while opens sit at 4 on 1,132 delivered (0.35%) — the fingerprint of mail that is not reaching inboxes and/or a tracking pixel that never fires. The one thing that visibly changed since last week — the Step 1 subject line was rewritten from "quick question" to "Got any missed calls this week?" — moved opens from 0.22% to 0.35%, i.e., not at all. That is direct confirmation that the disease is placement/reputation, not copy, and fixing it is still worth the entire campaign.

## Prioritized issues
1. **Inbox placement / sending reputation is still broken** — evidence: 0.35% open rate (4/1,132) alongside a 1.30% spam-block rate and ~12% bounce; a subject-line change produced no lift in opens. — estimated impact: **high** (nullifies the campaign on its own).
2. **Bounce rate is not improving — it is getting worse on fresh sends** — evidence: 43 new bounces on ~277 newly attempted emails since 7/27 = ~15.5%, up from the prior ~11%, against a list the brief calls "warm / Apollo-verified." Bad addresses are both wasting sends and actively re-damaging domain reputation with every batch. — estimated impact: **high**.
3. **No corrective action appears to have landed between reports** — evidence: bounce ~11%→~12%, opens ~0.2%→~0.35%, spam-block ~1.45%→~1.30%. The predicted fixes from the prior report (restore placement, clean the list, throttle volume) either were not made or have not worked; the only visible change (subject line) was explicitly warned against as a false fix. — estimated impact: **high** (the campaign is burning list at ~40/day with zero return).
4. **Open tracking may still be broken and has not been ruled out** — evidence: 4 opens on 1,132 delivered is low even for spam placement; a dead/blocked pixel would read identically. Still unresolved from last report. — estimated impact: **med** (blocks reliable diagnosis).
5. **Steps 2–4 remain effectively unsent; single variant per step** — evidence: 43 / 0 / 0 delivered on steps 2–4. No copy, step, or A/B conclusions are possible. — estimated impact: **med** (blocks optimization until the gate is fixed).

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate (of attempted) | 12.22% (160/1,309) | <2% alarm | — | 🔴 |
| Spam-block rate (of attempted) | 1.30% (17/1,309) | <0.3% alarm | — | 🔴 |
| Open rate | 0.35% (4/1,132) | 30–50% typical | 30% | 🔴 |
| Reply rate | 0.18% (2/1,132) | 1–3% typical | 2% | 🔴 |
| Positive reply rate | unknown (n=2) | — | 1.5% | 🔴 |
| Meetings / 100 delivered | 0 (0 clicks, no meeting evidence) | — | 1 | 🔴 |
| Unsubscribe rate | 0.18% (2/1,132) | <1% | — | 🟢 (n too small to trust) |

*Attempted = delivered + bounced + spam-blocked = 1,132 + 160 + 17 = 1,309. Per the rules, no "delivery rate" row is shown; bounce and spam-block cover deliverability and neither is affected by intentional throttling of the unsent queue.*

## Funnel
- **Delivered: 1,132** → **Opened: 4 (0.35%)** → **Replied: 2 (0.18%)**. Clicks: 0.
- **Delivered → Opened is the catastrophic leak — and it is a symptom, not the disease.** Even with Apple Mail Privacy Protection inflating opens elsewhere, a genuinely inbox-placed campaign does not return 4 opens on 1,132 sends. This points to spam-folder placement, a broken tracking pixel, or both. Corroborated by the ~12% bounce and 1.30% spam-block upstream.
- Do not read the funnel starting from `unique_scheduled` (2,375). Sending is throttled by design and much of that queue is simply unsent, not failed.
- **Data note:** the summary reports 160 total bounces, but the step-level breakdown only accounts for 123 (all in Step 1). ~37 bounces are unattributed across steps. Flag this reconciliation gap; it does not change the conclusion (both figures put bounce well into alarm territory).

## Step-by-step
| Step | Subject | Delivered | Bounced | Opened | Replied | Verdict |
|---|---|---|---|---|---|---|
| 1 | "Got any missed calls this week?" | 1,121 | 123 | 3 | loading | Only step with real volume. Subject was changed since last report; open rate still 0.27%. Bounce ~9.8% of its attempted. Copy cannot be judged — placement is broken. |
| 2 | "busy season" | 43 | 0 | 0 | 0 | Too little volume to read. |
| 3 | "whos picking up?" | 0 | 0 | 0 | 0 | No data. |
| 4 | "first to answer wins" | 0 | 0 | 0 | 0 | No data. |

- **The Step 1 subject swap is the most important signal in this pull.** It is the natural A/B against the prior report ("quick question" → 0.22% opens vs. "Got any missed calls this week?" → ~0.27–0.35% opens). No lift. This is affirmative evidence that subject/copy is not what is suppressing opens — placement is.
- Only one variant per step, so **no intra-step A/B comparison is possible**, and all sample sizes are far below the ~150–200/variant threshold anyway.
- Steps 2–4 are still essentially unsent. Any judgment on them remains noise.

## Copy-to-audience fit
The gate is failed, so this is a pre-check for when placement is fixed, not an explanation of current results. Nothing below is contradicted by the data — the copy is broadly on-brief:

- **Pain-led openers: good.** Step 1 ("homeowner's AC dies on a 105 degree day... goes to your competitor next") and Step 4 ("calling three... whoever picks up first usually gets the job") lead with the brief's #1 and #4 pains (missed calls = lost revenue). On target.
- **CTA commitment: appropriate.** "Worth 15 minutes," "quick call," "takes 10 minutes" match the brief's low-friction discovery-call goal. No overreach into sales/closing claims the brief prohibits.
- **Category sophistication: handled.** Step 3 ("more than message taking... work inside your CRM... without the hiring headaches or long term contracts") directly addresses the brief's note that this audience knows basic answering services but not full-service/CRM-integrated ones, and preempts the "hire in-house" objection.
- **Tone: on-brief.** Warm, practical, small-business voice ("eh, maybe," "hop on a quick call").
- **Em-dash rule: followed.** No em dashes in any body. Compliant.
- **Subject-line caution stands.** The rewrite is better than "quick question," but with placement/tracking broken you still cannot attribute the near-zero open rate to subject quality — and the failed rewrite proves it. Do not keep iterating subjects hoping to fix an opens problem that is actually a deliverability problem.
- **Volume vs. brief:** Brief specifies 60/day. Across the campaign's ~12 days, ~1,309 have been attempted (~109/day average), though the pace has slowed to ~40/day since the last report. The slower recent pace is good, but it has not restored placement, and fresh sends are still bouncing at ~15.5% — the reputation damage from the earlier over-send has not healed.

## Open questions
- **Placement vs. tracking (still unresolved):** Is the 0.35% open rate caused by spam-folder placement or a broken/blocked tracking pixel? Run a seed test (GlockApps or a manual Gmail/Outlook/Yahoo seed list) to see where mail lands and whether the pixel fires. This must be settled before any open metric is trusted.
- **Reply sentiment:** Apollo does not expose it. Both replies (and both unsubscribes) should be read manually before treating either reply as a "win" — at n=2 they could be complaints or opt-out requests.
- **Domain/mailbox reputation:** Check Google Postmaster Tools and spam-placement for the sending domains. The persistent bounce + spam-block pattern points to reputation damage the API cannot show.
- **List provenance:** Why does a "warm / Apollo-verified" list bounce at ~12% overall and ~15.5% on the newest batch? Confirm whether these are genuinely warm/engaged contacts and whether verification was actually run before load — this is getting worse, not better.
- **Bounce reconciliation:** Summary shows 160 bounces vs. 123 at step level (~37 unattributed). Confirm the true figure in Apollo.
- **What changed since 7/27:** The Step 1 subject was edited; confirm whether any deliverability remediation (list scrub, volume cut, domain/warm-up changes) was actually performed, since the metrics show no improvement.
- **Meetings booked:** Clicks are 0 and the brief's win condition is a Calendly booking; confirm directly in Apollo/Calendly whether any meeting exists, since the API shows none.

## A/B test plan

**Hypothesis:** Sending Step 1 as clean plain-text with the open-tracking pixel and links removed will improve inbox placement (and yield trustworthy open data) versus the current HTML-with-pixel version, because tracking pixels and HTML wrappers are common spam signals and a dead/blocked pixel would explain the near-zero 0.35% open rate identically to spam placement.
**Variant A:** Current HTML version with tracking pixel enabled (control). Subject: 'Got any missed calls this week?' Body as currently live.
**Variant B:** Identical wording sent as plain-text, open-tracking pixel OFF, no embedded links (Calendly offered as a reply-to ask rather than a tracked link). Subject: 'Got any missed calls this week?'
**Success metric:** Primary: seed-test inbox placement rate across Gmail/Outlook/Yahoo (GlockApps or manual seed list). Secondary once live: reply rate on real sends. Because tracking is disabled in Variant B, do NOT compare reported open rate between variants; use the seed test and replies to judge.
**Decision rule:** Run the seed test first (both variants to the same seed list). If Variant B lands in the inbox materially more often (>=1 folder-level improvement across the major providers), adopt plain-text/no-pixel as the default and rely on replies plus periodic seed tests for measurement. On live sends, call a winner at >=150 delivered per variant on reply rate; if the difference is <20% relative, keep the simpler plain-text version. Do not change subject line, body wording, targeting, or volume while this test runs so placement is the only variable.

## Manual changes (targeting / timing / list)

- PAUSE all fresh sends immediately. Fresh batches are bouncing at ~15.5% and each one re-damages domain reputation; stop burning the list until placement is restored.
- Run a seed/placement test (GlockApps or a manual Gmail + Outlook + Yahoo seed list) to settle the #1 open question: is the 0.35% open rate caused by spam-folder placement, a broken/blocked tracking pixel, or both. Nothing else should resume until this is answered.
- Disable the open-tracking pixel and remove embedded/tracked links from the live emails. This both reduces a common spam signal and rules the pixel in or out as the cause of near-zero opens; offer Calendly via a 'reply and I'll send the link' ask instead of a tracked link.
- Re-verify the ENTIRE list with a dedicated verifier (ZeroBounce/NeverBounce/Bouncer), not just Apollo. Remove all invalid, risky, role-based, and catch-all addresses before any resend. A 'warm/Apollo-verified' list bouncing 12-15.5% means verification either was not run or the source is bad.
- Investigate the list-provenance mismatch: the brief targets home-service businesses at 50-100 employees, but most landscaping/HVAC/pest firms are far smaller, so the imported list may contain mistargeted or scraped-and-guessed addresses driving the bounces. Confirm source and re-scope company size (e.g., include 5-100 employees) with fresh verified contacts.
- Cut daily volume to 20-30/day during reputation recovery (down from the ~40-109/day historical pace) and only ramp back toward the brief's 60/day after seed tests show consistent inbox placement.
- Check Google Postmaster Tools and provider reputation dashboards for the sending domain(s); if reputation is scorched, consider a fresh sending domain/mailbox with proper warm-up before resuming.
- Reconcile the bounce discrepancy (160 summary vs. 123 step-level, ~37 unattributed) in Apollo to confirm the true bounce figure.
- Manually read the 2 replies and 2 unsubscribes before treating any reply as a win; at n=2 they may be complaints or opt-out requests, which would further indicate placement/targeting problems.
- Once placement is confirmed fixed, let Steps 2-4 actually run at meaningful volume before judging them; they are currently unsent (43/0/0 delivered) and produce no readable data.

## Next review

Re-run the evaluation after the seed test is complete AND at least ~300-400 emails have been delivered on the re-verified list at the reduced volume (roughly 2 weeks at 20-30/day). Watch for: bounce rate back under 2%, spam-block under 0.3%, and a real open signal (only trustworthy if the pixel/plain-text question is resolved). Do not judge or iterate on copy until opens clear ~15-20%+, confirming mail is reaching inboxes.

---

# (7/22/26) Cappsure Landscaping (Revised) (6a60d25e082465000f36b61f)

_Brief used: briefs/cappsure.md_

**Changes applied to Apollo automatically: 0**

## Recommended changes

This remains a deliverability failure, not a copy failure: 4.1% bounce, 2.8% spam-block, and 0.35% open rate mean mail is being filtered before any human reads it, and nothing changed across a full week of additional sends. Per the diagnosis, no copy rewrites are warranted yet because better copy in the spam folder helps no one, and the current copy is already well-aligned to the brief's pain points and constraints. All effort should go to list re-verification, domain authentication/reputation repair, volume throttling, and fixing/removing open tracking, then re-measure.

## Evaluation

# Campaign Evaluation — (7/22/26) Cappsure Landscaping (Revised) — 2026-08-03

## Verdict
Nothing has changed since the last evaluation, and that is the story. A week later the campaign is still failing at the deliverability gate — bounce rate 4.1% and spam-block rate 2.8% are both multiples over alarm thresholds — and the open rate is still 0.35%, meaning mail is being filtered before any human sees it. The copy, targeting, and step design remain uninterpretable until inboxing is fixed; that fix is still worth roughly 100x the current visible engagement, and the last round did not deliver it.

## Data caveats (read first)
- **Several fields in this pull are `"loading"`** (step 1 delivered/replied, step 2 scheduled, step 3 delivered). Step-level numbers are partial, so this evaluation leans on the sequence-level aggregates, which are populated.
- **Aggregate attempted = 1,231** (1,145 delivered + 51 bounced + 35 spam-blocked). All deliverability rates use that denominator.
- The summary's `delivery_rate_pct` of 32.34% (1,145 ÷ 3,540 scheduled) is meaningless here — it divides delivered by a throttled/queued send count, not a real attempt count. It is **not** reported below, per the deliverability rules. Sending is intentionally paced, so most of the 3,540 simply hasn't fired yet.
- Volume has grown modestly since the 7/27 pull (~844 → 1,145 delivered), but the *rates* are essentially frozen — this is the same campaign, further along, with no correction applied.

## Prioritized issues
1. **Inbox placement is still collapsed** — evidence: 4 opens / 1,145 delivered = 0.35% open rate, paired with a 2.8% spam-block rate. Mail is being quarantined/filtered, not read. This is a domain/authentication/reputation/list-quality problem, not a copy problem, and it gates every other signal. — **estimated impact: high.**
2. **Bounce rate 4.1% and spam-block 2.8%, both far over alarm** — evidence: 51 bounces + 35 spam-blocks / 1,231 attempted. Points to a dirty/poorly-verified list and/or a burned sending domain. High bounces further depress reputation in a doom loop, which is exactly what the flat week-over-week numbers show. The brief's claim that lists are "Apollo verified" is not holding up. — **estimated impact: high.**
3. **The last round's predicted fix did not happen** — evidence: bounce (4.4%→4.1%), spam-block (3.2%→2.8%), open (0.36%→0.35%) are all statistically unchanged across a week and ~300 additional delivered emails. Whatever was supposed to correct placement either wasn't done or didn't work. — **estimated impact: high (it means the problem is compounding, not resolving).**
4. **Open tracking still appears broken/stripped** — evidence: 3 replies against only 4 recorded opens is implausible if the pixel were firing normally. Opens cannot be trusted as a diagnostic even once placement improves. — **estimated impact: medium (measurement).**
5. **No variant testing** — evidence: one approved variant per step across all 5 steps. No A/B, nothing to compare, no winner to call. — **estimated impact: medium.**
6. **Copy quality remains unmeasurable** — evidence: ~0.35% of delivered mail was opened. The copy reads as brief-aligned but has received essentially zero market exposure. Do not conclude it works or fails. — **estimated impact: low (until #1 is fixed).**

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate | 51 / 1,231 = 4.14% | alarm >2% | — | 🔴 |
| Spam-block rate | 35 / 1,231 = 2.84% | alarm >0.3% | — | 🔴 |
| Open rate | 4 / 1,145 = 0.35% | 30–50% typical | 30% | 🔴 |
| Reply rate | 3 / 1,145 = 0.26% | 1–3% typical | 2% | 🔴 |
| Positive reply rate | unknown (≤0.26%) | — | 1.5% | 🔴 |
| Unsubscribe rate | 1 / 1,145 = 0.09% | alarm >1% | — | 🟢 (low n) |
| Meetings / 100 delivered | 0 known | — | 1 | 🔴 |

## Funnel
- **Attempted 1,231**
- **Delivered 1,145 (93.0% of attempted)** → 51 hard bounces + 35 spam-blocked lost here. Both bounce and spam-block are well over alarm.
- **Opened 4 (0.35% of delivered)** → **the catastrophic leak.** A functioning cold campaign opens 30%+. 0.35% is not weak copy, it is "the message never reached a human inbox." Combined with the 2.8% spam-block rate, the read is that placement has collapsed and mail is going to spam/quarantine.
- **Replied 3 (0.26% of delivered)** → 3 replies against 4 recorded opens is a broken ratio; it strongly suggests the tracking pixel is being stripped (opens undercounted), not that engagement is genuine.

Biggest drop-off: **Delivered → Opened.** Everything downstream is noise until that is fixed.

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Spam-blocked | Verdict |
|---|---|---|---|---|---|---|
| 1 | "who did what, where" | loading (bulk of the 1,145) | 3 | loading | 30 | Only step with meaningful volume. Inboxing broken; cannot judge copy. Accounts for nearly all spam-blocks. |
| 2 | "billing disputes" | 20 | 0 | 0 | 0 | Just starting to send. n=20 is far too small to read anything. |
| 3 | "every site, one screen" | 0 (loading) | 0 | 0 | 0 | Not yet sent. No data. |
| 4 | "deploy in days" | 0 | 0 | 0 | 0 | Not yet sent. No data. |
| 5 | "closing the loop" | 0 | 0 | 0 | 0 | Not yet sent. No data. |

- **Single variant per step** — no A/B test exists, so there is no winner to declare and nothing to compare. Even step 1's volume is against one variant only.
- **0 clicks recorded.** Step 5 references "grab a time here" and step 2/1 offer "a link." Confirm a live, tracked link is actually embedded — but note that with near-zero opens, zero clicks is expected regardless.

## Copy-to-audience fit
Caveat repeated from last round: judging copy is premature when almost nobody sees it. On read-through the copy is **not** the obvious culprit and remains well-matched to the brief:

- **Leads with stated pain points.** Step 1 → proof-of-work / visibility (pain #1). Step 2 → billing disputes/overbilling (pains #3, #6). Step 3 → multi-site visibility (pain #5). Good alignment.
- **Differentiates on GPS/geofence verification** rather than educating from zero — correct for the brief's "moderately sophisticated" audience.
- **CTA matches commitment level.** "Worth a quick 15-min demo?" / "I can send over a link" is appropriately soft for cold and matches the brief's stated CTAs.
- **Tone is practical and non-jargon;** step 4 pre-empts the "switching is too hard" objection ("running in days, not months"), directly addressing a brief objection.
- **Rule compliance:** No em dashes, no invented stats, no named client logos. Brief constraints respected. ✅
- **Targeting note (unchanged):** This copy is vendor/contractor-facing ("the hours *you* bill," "*your* clients"), i.e., the landscaping-vendor side of the brief's audience, not the property-manager side. Consistent with the sequence name, but confirm the delivered list is actually landscaping vendors/owners and not mixed facilities-manager records — a mismatch there could also feed the bounce/spam pattern.

## Open questions
- **Why did nothing change in a week?** Confirm whether any deliverability remediation (domain/auth fixes, list re-verification, throttling changes) was actually attempted after the 7/27 report. Flat rates across ~300 more sends suggest either no action or ineffective action.
- **Reply sentiment:** Apollo's API does not expose it. The 3 replies could be interested prospects or "remove me / stop." **Spot-check the actual reply text in Apollo before treating any as a win.** With n=3 and a broken funnel, assume nothing.
- **Is open tracking enabled and firing?** 3 replies vs 4 opens is either "all in spam" or "pixel disabled/stripped." Verify with inbox-placement testing.
- **Sending domain reputation & authentication:** SPF/DKIM/DMARC status, domain age, dedicated vs shared cold domains — none of this is in the API payload and all of it bears on the 2.8% spam-block rate.
- **List source/segment match:** Confirm delivered contacts are landscaping vendors matching this copy, and investigate why a supposedly Apollo-verified list is bouncing at 4%+.
- **Status of the `"loading"` fields:** Re-pull to confirm step 1's true delivered/replied counts and that steps 2–5 are pending-by-design rather than stuck.

## A/B test plan

**Hypothesis:** This test is QUEUED and must not launch until inbox placement is restored (open rate back above ~20% on a placement test). Once inboxing is fixed, a plain-question subject will lift opens versus the current fragment subject because it reads as a real 1:1 message rather than a filed label. Running it now would waste sample on mail that never reaches inboxes.
**Variant A:** Subject: who did what, where (current step 1 subject, unchanged body)
**Variant B:** Subject: proving your crew showed up? (same step 1 body)
**Success metric:** Open rate, then reply rate as tiebreaker. Call a winner at >=150 delivered per variant with confirmed inbox placement.
**Decision rule:** If relative open-rate difference is <20%, keep Variant A (simpler/current). Do not change body copy, send times, or list segment while this test runs so open-rate change is attributable to subject only. DO NOT START until the deliverability fixes below have moved the open rate off the floor.

## Manual changes (targeting / timing / list)

- FREEZE the sequence now. Do not send more volume onto a burned domain/dirty list; every additional bounce deepens the reputation doom loop the evaluation describes.
- Re-verify the entire remaining list through a dedicated verifier (ZeroBounce, NeverBounce, or MillionVerifier) rather than trusting Apollo's built-in status, which is producing a 4.1% bounce rate. Remove all 'risky', 'catch-all', and 'unknown' results before any further sends.
- Audit sending-domain health: confirm SPF, DKIM, and DMARC are all passing on the actual sending domain(s); check domain age and blocklist status (MXToolbox, Google Postmaster). If the primary domain is burned, move to fresh dedicated cold domains that have completed warm-up.
- Run an inbox-placement test (GlockApps or Mailreach seed test) to see where step 1 is actually landing. This is the single fastest way to confirm the 0.35% open rate is a placement problem before spending on copy.
- Fix or remove open tracking: 3 replies against only 4 recorded opens means the pixel is stripped or disabled. Either enable a custom tracking domain (better deliverability and accurate opens) or turn open tracking off entirely, since the open pixel itself can trigger spam filtering.
- Throttle volume: drop from 60/day on one inbox to ~20-30/day per inbox spread across 2-3 warmed inboxes, and keep warm-up running in parallel. Ramp only after bounce rate is under 2% and spam-block under 0.3%.
- Spot-check the 3 existing replies in Apollo before treating any as a win; confirm whether they are interested prospects or 'remove me' so the reply-rate signal is not misread.
- Confirm list-to-copy segment match: verify delivered contacts are actually landscaping vendors/owners (the audience this vendor-facing copy addresses), not mixed facilities-manager records, since a mismatch can also inflate bounce/spam.
- Once inboxing is restored, add a second variant to each of the 5 steps so future rounds have an A/B winner to call; right now there is nothing to compare.

## Next review

Re-run the evaluation after deliverability remediation is complete AND at least ~400-500 emails have been delivered under the corrected setup (verified list, fixed auth, throttled volume, working/removed open tracking). Expect roughly 2-3 weeks at reduced volume. Watch first for bounce <2% and spam-block <0.3%, then for open rate climbing toward 20-30%; only judge copy and launch the queued subject-line A/B test once the open rate is off the floor.

---

# CB Email Revamp - sector 3 (69f25cd4bae977000dbd0c5e)

_Brief used: briefs/call-boss.md_

**Changes applied to Apollo automatically: 2**

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

## Evaluation

# Campaign Evaluation — CB Email Revamp - sector 3 — 2026-08-03

## Verdict
Deliverability has regressed, not stabilized: measured against attempted sends, bounce is 3.44% and spam-block is 2.41% — both well over alarm thresholds and both **worse** than the last pull. The newest batch of contacts is the culprit (roughly 8% bounce / 6% spam on the incremental sends), which means the list, not the copy, is now the dominant problem. On top of that, open tracking is still non-functional (5 opens ≤ 4 replies for the fourth consecutive pull) and reply volume is frozen at exactly 4 despite ~117 more contacts reaching the reply-producing step 2 — the "timing artifact" excuse from last week has now largely expired. Fixing list hygiene is the highest-value move; until it's clean, every downstream signal stays untrustworthy.

## Prioritized issues
1. **Deliverability regressed and the newest imports are dirty** — evidence: aggregate bounce 3.44% (40/1162) and spam-block 2.41% (28/1162), both up from 2.25%/1.5% on 07-27; on the ~196 incremental attempts since last pull, bounce ≈ 8.2% (16/196) and spam ≈ 6.1% (12/196). **Impact: high.** This is a gate — engagement metrics below are unreliable until it's fixed.
2. **Open tracking is still broken** — evidence: 5 opens < replies-adjacent, unchanged across four pulls; opens (5) barely exceed replies (4), meaning the pixel only registers when someone replies. **Impact: high.** The client's central hypothesis ("messaging isn't getting opened") remains literally unmeasurable.
3. **Reply volume is flat at 4 despite step 2 receiving +117 deliveries** — evidence: step 2A went 368→485 delivered but stayed at 1 reply; step 3 unchanged at 3 replies. The added follow-up volume produced **zero** incremental replies. **Impact: high**, and no longer explainable purely by queue timing. Still small n — see confidence caveat.
4. **Step-2 variant B is still empty and unapproved** — evidence: blank body, `to_be_reviewed`, 0 delivered, unchanged 12+ days. **Impact: low.** Pure housekeeping; it can't win a test it never enters.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Bounce rate | 3.44% (40/1162 attempts) | alarm >2% | — | 🔴 (worsening) |
| Spam-block rate | 2.41% (28/1162 attempts) | alarm >0.3% | — | 🔴 (8x alarm, worsening) |
| Open rate | 0.46% (5/1094) | 30–50% typical | 30% | 🔴 (tracking broken) |
| Reply rate | 0.37% (4/1094) | 1–3% typical | 2% | 🔴 |
| Click rate | 0% | — | — | ⚪ (no links used) |
| Unsubscribe rate | 0.09% (1/1094) | alarm >1% | — | 🟢 |
| Meetings / 100 delivered | 0 confirmed | — | 1 | 🔴 / unmeasurable |

*No delivery-rate row: the reported 103.89% (delivered 1094 > scheduled 1053) confirms `unique_scheduled` is a queue snapshot, not list size, and is meaningless as a deliverability denominator. Judge deliverability off bounce and spam-block alone.*

## Funnel
Delivered 1094 → Opened 5 (0.46%) → Replied 4 (0.37%). Clicked 0 (no links).

The open stage is unreadable: opens (5) are essentially equal to replies (4), the same broken-pixel signature seen on 07-15, 07-20, and 07-27. You cannot locate the funnel's biggest leak at the open stage because opens aren't being counted.

On the honest metric (replies): 4 total, 0.37% — roughly one-fifth of the 2% target. Reply rate is down from 0.43% (07-27) purely because the denominator grew while replies stayed frozen at 4. The last report predicted re-pulling after step-2 waits elapsed would give a fair read; that has now partly happened (step 2A gained 117 deliveries) and **still produced no new replies**, so the previously hoped-for upside from queued follow-ups is not materializing.

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Reply rate | Bounce / Spam | Verdict |
|---|---|---|---|---|---|---|---|
| 1 (opener) | "who answers your phone?" | 1093 | 1 | 0 | 0% | 29 / 19 (2.54% / 1.67%) | Still 0 replies on 1093 delivered. Confounded by soft "reply Plan" CTA + broken pixel, but the fresh-import bounce/spam concentrate here. |
| 2A | (blank subject, threads on step 1) | 485 | 1 | 1 | 0.21% | 6 / 5 | +117 delivered vs. 07-27, still 1 reply. The added volume added no replies — early evidence the objection-handling message isn't converting, though n=1. |
| 2B | (blank, empty body) | 0 | 0 | 0 | — | 0 / 0 | Still `to_be_reviewed` with empty body, unchanged ~19+ days. Dead weight. |
| 3 (breakup) | "Last try… yes or no?" | 315 | 3 | 3 | 0.95% | 2 / 2 | Essentially unchanged (was 313/3). Highest per-send reply rate but n=3 — noise, not a result. |

**Confidence:** Every per-step reply claim rests on n = 0–3 replies. **No step or variant winner can be declared** — you need ~150–200+ delivered *and* a double-digit reply count per variant before a comparison means anything. Variant 2A vs 2B cannot be tested at all because 2B has never sent.

**Data quirk (unchanged):** per-step delivered counts are per-touch and don't sum to the per-unique-contact aggregate (step 1 = 1093 vs. aggregate 1094). Don't add the step rows.

## Copy-to-audience fit
The copy remains well-aligned with the brief — it is not the primary problem, and nothing has changed since 07-27:

- **Step 1 subject "who answers your phone?"** leads with pain point #1 (missed calls while the crew is in the field) in a lowercase, casual register matching the brief's "warm, practical small-business-owner" tone. Good fit.
- **Step 1 body** hits pain #1 and #4 (missed call → caller dials the next name → lost revenue) and preempts the "no bandwidth to hire/train" objection ("no in-house hire or training on your end"). CTA is the soft "Reply 'Plan'" rather than the brief's primary Calendly ask — reasonable as a first touch, but confirm this two-step nurture is intentional.
- **Step 2A** directly answers the brief's #1 objection ("makes more sense to bring it in house") and the FAQ "why hire you when I can hire office staff." Strong on-brief fit — which makes its 1 reply on 485 delivered more concerning, since the alignment is good but the response isn't there.
- **Step 3** is a clean, low-friction breakup. Fine.
- **No em dashes** in any live copy; no scope-overstatement claims. Brief constraints respected.

Bottom line: with the pixel broken and reply volume near zero, you still cannot distinguish "copy doesn't land" from "the audience never cleanly received or opened it." The regressed deliverability makes this even harder to read than last week.

## Open questions
- **List source and verification for the newest imports.** The incremental batch since 07-27 carries ~8% bounce and ~6% spam — dramatically dirtier than the existing cohort. Where did these contacts come from and were they run through Apollo verification before loading?
- **Is open tracking enabled in Apollo?** Unresolved for four consecutive pulls. Everything about the client's "not enough opens" hypothesis depends on this firing.
- **Reply sentiment on the 4 replies.** Apollo's API does not expose sentiment; the count includes angry/negative replies. Given the brief states no one has ever signed up from email, spot-check all 4 in Apollo before treating any as a win.
- **Is the soft "Reply 'Plan'" opener the intended CTA** in place of the brief's Calendly "book a call"? Confirm this is a deliberate nurture, not a missing link.
- **Has sending pace or list-loading changed?** Volume grew ~168 delivered in one week while daily target is 60; confirm whether pacing or a bulk import drove the deliverability regression.

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

---
