# Campaign performance report — 2026-07-27

# (7/22/26) CB HVAC Warm Leads (6a611b02efd8220010b65cc8)

_Brief used: briefs/call-boss.md_

**Auto-apply is off — all changes below are proposals.**

## Evaluation

# Campaign Evaluation — (7/22/26) CB HVAC Warm Leads — 2026-07-27

## Verdict
This campaign is not underperforming on copy — it is failing at the deliverability gate, and everything downstream is unreliable as a result. An open rate of 0.22% (2 opens on 900 delivered) combined with an ~11% bounce rate on emails actually attempted is a signature of a burned sending reputation and inbox-placement collapse, almost certainly driven by sending ~200+/day against a stated safe volume of 60/day. Until inbox placement is restored, no read on subject lines, copy, or offer fit is trustworthy; fixing deliverability is the only thing that matters right now and is worth the entire campaign.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Delivery rate (of all scheduled) | 33.89% (900/2656) | >97% | 95%+ | 🔴 |
| Delivery rate (of attempted only) | ~87% (900/1032) | >97% | 95%+ | 🔴 |
| Bounce rate (of attempted) | ~11.3% (117/1032) | <2% alarm | — | 🔴 |
| Spam-block rate (of attempted) | ~1.45% (15/1032) | <0.3% alarm | — | 🔴 |
| Open rate | 0.22% (2/900) | 30–50% typical | 30% | 🔴 |
| Reply rate | 0.11% (1/900) | 1–3% typical | 2% | 🔴 |
| Positive reply rate | unknown (n=1) | — | 1.5% | 🔴 |
| Meetings / 100 delivered | 0 (no click/meeting evidence) | — | 1 | 🔴 |
| Unsubscribe rate | 0.11% (1/900) | <1% | — | 🟢 (n too small to trust) |

## Funnel
- **Scheduled: 2,656** → only **1,032 attempted** so far (900 delivered + 117 bounced + 15 spam-blocked). ~1,624 are still queued; the sequence is 5 days old.
- **Attempted → Delivered: 900** (~87% of attempted). Note the headline "33.89% delivery rate" is misleading because it divides by all scheduled including the unsent queue. The honest number is ~87% of what has actually been sent — still below the 95% target and dragged down by bounces.
- **Delivered → Opened: 2** (0.22%). **This is the catastrophic leak.** Even accounting for Apple Mail Privacy Protection suppressing opens, a real inbox-placed campaign does not return 2 opens on 900 sends. This points to one of two things: (a) emails are landing in spam/junk and never seen, or (b) open tracking is broken. Either way the funnel effectively dies here.
- **Opened → Replied: 1** (0.11% of delivered). One reply, one unsubscribe. Nothing to interpret at this volume.

**Biggest leak:** delivered → opened. But it is a symptom, not the disease — the disease is sending reputation / inbox placement, corroborated by the 11% bounce rate and 1.45% spam-block rate.

## Step-by-step
| Step | Subject | Delivered | Bounced | Opened | Replied | Verdict |
|---|---|---|---|---|---|---|
| 1 | "quick question" | 746 | 116 | 2 | 1 | Only step with real volume. Bounce ~13% of attempted. Opens/replies ~0. Cannot judge copy — placement is broken. |
| 2 | "busy season" | 7 | 0 | 0 | 0 | No data. Campaign too young (contacts haven't reached this step). |
| 3 | "whos picking up?" | 0 | 0 | 0 | 0 | No data. |
| 4 | "first to answer wins" | 0 | 0 | 0 | 0 | No data. |

- Only one variant per step, so **no A/B comparison is possible.**
- Steps 2–4 are effectively unsent (7 / 0 / 0 delivered). Any judgment on them now would be noise.
- The bulk of the bounces (116 of 117) hit Step 1, which is expected — Step 1 is where fresh addresses get validated. A ~13% Step-1 bounce rate against a list the brief calls "warm leads verified through Apollo" is a direct contradiction worth investigating.
- Note also `wait_time: 30` on Step 1 vs. 3 on later steps — flag to confirm this is the intended delay and not a misconfiguration throttling the sequence.

## Copy-to-audience fit
The gate is failed, so treat this as a pre-check for when placement is fixed, not as an explanation of current results.

- **Pain-led openers: good.** Step 1 ("AC dies on a 105 degree day... goes to your competitor next") and Step 4 ("calling three... whoever picks up first gets the job") lead directly with the brief's #1 and #4 pain points (missed calls = lost revenue). This matches the brief well.
- **CTA commitment level: appropriate.** "Worth 15 minutes," "quick call," "takes 10 minutes" all match the brief's low-friction discovery-call goal. No overreach.
- **Category sophistication: handled correctly.** Step 3 ("more than message taking... work inside your CRM") directly addresses the brief's note that the audience knows basic answering services but not full-service/CRM-integrated options. Good.
- **Tone: on-brief.** Warm, practical, small-business voice ("eh, maybe," "hop on a quick call"). Matches the stated casual/relatable tone.
- **Em-dash rule: followed.** I see no em dashes in any of the four bodies. Compliant.
- **Subject-line risk:** "quick question" is one of the most overused, filter-flagged cold subjects in existence, and lowercase generic subjects ("busy season," "whos picking up?") may reinforce spam classification. This *could* be contributing to placement problems, but with tracking/placement broken you cannot attribute the 0.22% open rate to subject quality — do not "fix the subject line" and call the problem solved.
- **Audience/volume mismatch:** Brief specifies 60 sends/day; ~1,032 emails were attempted in ~5 days (~200/day) with 2,656 loaded. Ramping 3x+ over the safe volume on domains that then bounce at 11% is the most likely root cause of the reputation damage.

## Prioritized issues
1. **Inbox placement / sending reputation is broken** — evidence: 0.22% open rate (2/900) alongside 1.45% spam-block rate and 11% bounce; a pattern consistent with mail landing in spam or tracking being stripped. — estimated impact: **high** (this alone nullifies the campaign).
2. **Bounce rate ~11% of attempted on a "verified warm" list** — evidence: 117 bounces, 116 in Step 1, against a list the brief says was cleaned through Apollo. Bad addresses are both wasting sends and actively degrading domain reputation. — estimated impact: **high**.
3. **Send volume is 3x+ over the stated safe rate** — evidence: ~200/day attempted vs. 60/day in the brief, with 2,656 queued. Aggressive ramp on warmed-but-fragile domains is the likely trigger for issues #1 and #2. — estimated impact: **high**.
4. **Open tracking may be broken (rule out before trusting any open metric)** — evidence: 2 total opens is low even for spam placement; a dead/blocked tracking pixel would produce the same reading. Must be distinguished from placement failure. — estimated impact: **med** (affects diagnosis reliability).
5. **Sequence structure/data too thin to evaluate copy or steps 2–4** — evidence: 7/0/0 delivered on steps 2–4, single variant per step. No copy or step conclusions can be drawn yet. — estimated impact: **med** (blocks future optimization until fixed).

## Open questions
- **Reply sentiment:** Apollo does not expose it. The single reply (and the single unsubscribe) should be read manually in Apollo before treating the reply as a "win" — at n=1 it could just as easily be a complaint or an opt-out request.
- **Placement vs. tracking:** Is the 0.22% open rate caused by spam-folder placement or by a broken/blocked tracking pixel? Send a seed test to Gmail/Outlook/Yahoo inboxes (GlockApps or manual seed list) to see where mail actually lands and whether the pixel fires.
- **Domain/mailbox health:** Check the actual sending domains' reputation (Google Postmaster Tools, spam-placement) — the bounce + spam-block pattern suggests reputation damage that the API can't show directly.
- **List provenance:** Why does a "warm leads / Apollo-verified" list bounce at ~11%? Confirm whether these are genuinely warm/engaged contacts or cold-scraped, and whether verification was actually run before load.
- **Wait-time config:** Confirm Step 1's `wait_time: 30` is intentional and not throttling/misordering the sequence.
- **Meetings booked:** Clicks are 0 and the brief's win condition is a Calendly booking; confirm in Apollo/Calendly directly whether any meeting was booked, since the API here shows none.

## Recommended changes

The campaign is failing at the deliverability gate, not on copy: a 0.22% open rate alongside an ~11% bounce rate and 3x-over-safe send volume points to a damaged sending reputation and spam placement. The overwhelming priority is fixing deliverability (throttle to 60/day, re-verify the list, run a seed/inbox-placement test) before drawing any copy conclusions. The only copy change worth making now is retiring the heavily filter-flagged 'quick question' subject line, since it is a plausible contributor to spam classification and is a low-risk swap to bundle with the deliverability work.

### Change 1 — step 1 — proposed (auto-apply off)

**Why:** "quick question" is one of the most overused and filter-flagged cold subjects in existence and the evaluation flagged it as a likely contributor to spam classification. Swapped to a concrete, relevant subject tied to the brief's #1 pain (missed calls = lost revenue) and added the recipient company merge tag to the CTA for personalization. Body kept intact because the eval judged it on-brief; note that with placement broken, this swap cannot be attributed until deliverability is restored.

**Subject before:** quick question
**Subject after:** missed calls this week?

**New body:**
```
Hi {{contact.first_name}},

When a homeowner's AC dies on a 105 degree day and your phone rings while your crew is on a ladder, what happens? If it goes to voicemail, it usually goes to your competitor next.

Call Boss answers your calls live, 24/7, so every emergency job, new lead, and "are you available today?" call gets picked up, even nights, weekends, and when the whole crew is out on rooftops. Our US based team can also log the details straight into your CRM.

Worth 15 minutes to see what missed calls might be costing {{account.name}}?
</body></html>
```

## A/B test plan

**Hypothesis:** Do NOT start this A/B test until inbox placement is confirmed via seed test; running it now would burn sample against a broken funnel. Once placement is fixed: replacing the spam-flagged 'quick question' subject with a concrete, pain-specific subject will lift open rate because it avoids a known filter trigger and signals relevance to HVAC owners.
**Variant A:** Subject: quick question (current control)
**Variant B:** Subject: missed calls this week?
**Success metric:** Open rate, measured only on emails confirmed inbox-placed via seed test. Call a winner at >=150 delivered per variant.
**Decision rule:** If relative open-rate difference is <20%, keep Variant A (simpler/existing). If Variant B wins by >=20% relative, roll it to 100%. Hold body copy, send time, sender name, and volume constant during the test so subject line is the only variable.

## Manual changes (targeting / timing / list)

- Throttle daily send volume from ~200/day back to the brief's stated safe rate of 60/day immediately; the 3x+ ramp is the most likely root cause of the reputation damage.
- Pause the sequence and re-verify the entire remaining ~1,624-contact queue with a dedicated verification tool (NeverBounce/ZeroBounce) before any further sends; an 11% bounce on a supposedly Apollo-verified 'warm' list means the list is not clean and every bounce is degrading domain reputation.
- Run an inbox-placement seed test (GlockApps or a manual Gmail/Outlook/Yahoo seed list) to determine whether mail is landing in spam vs. whether the open-tracking pixel is broken; do not trust any open metric until this is resolved.
- Check sending-domain reputation in Google Postmaster Tools and consider a 1-2 week re-warm at low volume if reputation is degraded; if the current domain is burned, move to a fresh secondary sending domain.
- Remove all 117 bounced addresses from the list and suppress them permanently so they are never retried.
- Read the single reply and single unsubscribe manually in Apollo to confirm sentiment before treating the reply as a positive signal.
- Confirm Step 1's wait_time:30 is intentional and not misconfigured/throttling the sequence relative to the 3-day waits on later steps.
- Consider disabling open-pixel tracking or switching to click/reply-based measurement if the seed test shows the pixel is being stripped, to get trustworthy engagement data going forward.

## Next review

Re-run the evaluation after deliverability fixes are in place AND at least 400-500 emails have been delivered at the corrected 60/day rate with confirmed inbox placement (roughly 8-10 sending days). Watch for: bounce rate dropping below 2%, delivery rate of attempted above 95%, and open rate climbing into a readable range (target 30%). Only once opens are believable should copy, subject-line A/B results, and steps 2-4 performance be judged.

---

# (7/22/26) Cappsure Landscaping (Revised) (6a60d25e082465000f36b61f)

_Brief used: briefs/cappsure.md_

**Auto-apply is off — all changes below are proposals.**

## Evaluation

# Campaign Evaluation — (7/22/26) Cappsure Landscaping (Revised) — 2026-07-27

## Verdict
This campaign is failing at the deliverability gate, so no conclusion about copy or targeting can be trusted yet. A 0.36% open rate paired with a 3.2% spam-block rate at step 1 means the emails are almost certainly not reaching inboxes — they are being filtered, not read. Until inboxing is fixed, the 2 replies and every engagement number below are noise; fixing placement is the entire ballgame and worth roughly 100x the current visible engagement.

## Data caveats (read first)
- The campaign is only ~5 days old (created 7/22, pulled 7/27). **Only step 1 has actually sent.** Step 2 shows 822 scheduled / 0 delivered; steps 3–5 are all zeros. So this is a single-step evaluation.
- The headline `delivery_rate_pct` of 52.79% is misleading — it divides 843 delivered by 1,597 scheduled across *all five steps*, most of which haven't fired. The honest deliverability read comes from step 1 alone.
- **Step 1 attempted ≈ 913** (844 delivered + 40 bounced + 29 spam-blocked). All rates below use that denominator where it matters.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Delivery rate (step 1) | 844 / 913 = 92.4% | >97% | 95% | 🔴 |
| Bounce rate (step 1) | 40 / 913 = 4.4% | alarm >2% | — | 🔴 |
| Spam-block rate (step 1) | 29 / 913 = 3.2% | alarm >0.3% | — | 🔴 |
| Open rate | 3 / 844 = 0.36% | 30–50% typical | 30% | 🔴 |
| Reply rate | 2 / 844 = 0.24% | 1–3% typical | 2% | 🔴 |
| Positive reply rate | unknown (≤0.24%) | — | 1.5% | 🔴 |
| Unsubscribe rate | 1 / 844 = 0.12% | alarm >1% | — | 🟢 (low n) |
| Meetings / 100 delivered | 0 known | — | 1 | 🔴 |

## Funnel
Step 1 only (all downstream steps unsent):

- **Attempted ≈ 913**
- **Delivered 844 (92.4%)** → 40 hard bounces + 29 spam-blocked lost here. Bounce and spam-block are both well over alarm thresholds.
- **Opened 3 (0.36% of delivered)** → **this is the catastrophic leak.** A functioning cold campaign, even a mediocre one, opens 30%+. 0.36% is not "weak copy," it is "the message never appeared in front of a human." Combined with the 3.2% spam-block rate, the signal is that inbox placement has collapsed — mail is going to spam/quarantine.
- **Replied 2 (0.24%)** → 2 replies out of 3 recorded opens is a suspiciously high open-to-reply ratio, which further suggests the open-tracking pixel is being stripped/blocked (opens undercounted) rather than that people are engaging.

The biggest drop-off is Delivered → Opened. Everything downstream is uninterpretable until that is fixed.

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Verdict |
|---|---|---|---|---|---|
| 1 | "who did what, where" | 844 | 3 | 2 | Only step with data. Inboxing broken; cannot judge copy. |
| 2 | "billing disputes" | 0 (822 scheduled) | — | — | Not yet sent. No data. |
| 3 | "every site, one screen" | 0 | — | — | Not yet sent. No data. |
| 4 | "deploy in days" | 0 | — | — | Not yet sent. No data. |
| 5 | "closing the loop" | 0 | — | — | Not yet sent. No data. |

- **Single variant per step.** There is no A/B test running, so there is nothing to compare and no winner to call. (Even if there were, n=844 on one step across one variant is far too thin to draw variant-level conclusions.)
- No links are tracked as clicked (0 clicks), and step 5 references "grab a time here" / "a link" — worth confirming a live link is actually embedded, since click tracking shows nothing.

## Copy-to-audience fit
Caveat: judging copy is premature when nobody is seeing it. That said, on a read-through the copy is *not* the obvious culprit — it is reasonably well-matched to the brief:

- **Leads with stated pain points.** Step 1 opens on "can you prove your crew showed up" (brief pain #1: real-time visibility/proof of work). Step 2 hits billing disputes/overbilling (pains #3, #6). Step 3 hits multi-site visibility (pain #5). Good alignment.
- **Differentiates on GPS/geofence verification** rather than educating from zero — correct for a "moderately sophisticated" audience per the brief.
- **CTA matches commitment level.** "Worth a quick 15-min demo?" / "I can send over a link" is soft and matches the brief's stated CTAs. Appropriate for cold.
- **Tone is practical, non-jargon,** and step 4 pre-empts the "switching is too hard" objection ("running in days, not months") — directly addresses a brief objection.
- **Rule compliance:** No em dashes. No invented stats or named client logos. Both brief constraints respected. ✅
- **Targeting note:** This variant is landscaping/contractor-facing ("the hours *you* bill," "*your* clients"), i.e., the vendor side of the brief's audience, not the property-manager side. That is internally consistent with the sequence name, but confirm the list segment (landscaping vendors) actually matches this copy — a facilities-manager list receiving "the hours you bill" copy would read as a mismatch.

## Prioritized issues
1. **Inbox placement has collapsed** — evidence: 0.36% open rate + 3.2% spam-block rate at step 1. Mail is being filtered before it's seen. This is a domain/authentication/reputation or list-quality problem, not a copy problem. — **estimated impact: high (gates everything).**
2. **Bounce rate 4.4% and spam-block 3.2%, both far over alarm thresholds** — evidence: 40 bounces + 29 spam-blocks / 913 attempted. This points to a dirty or poorly verified list and/or a burned sending domain, and high bounces further depress sender reputation in a doom loop. The brief says lists are "Apollo verified," which is not holding up here. — **estimated impact: high.**
3. **Open tracking appears broken/stripped** — evidence: 2 replies against only 3 recorded opens is implausible if the pixel were firing normally. You may be flying blind on opens entirely, which means opens can't be used as a diagnostic even once placement improves. — **estimated impact: medium (measurement).**
4. **No variant testing** — evidence: one approved variant per step. Even after deliverability is fixed, you'll have no way to learn which subject/angle works. — **estimated impact: medium.**
5. **Copy quality is currently unmeasurable** — evidence: only ~0.4% of delivered mail was opened. The copy looks brief-aligned, but there is zero market signal on it yet. Do not conclude the copy works *or* fails from this data. — **estimated impact: low (until #1 is fixed).**

## Open questions
- **Reply sentiment:** Apollo's API does not expose it. The 2 replies could be interested prospects or "remove me / stop emailing." **Spot-check the actual reply text in Apollo before treating either as a win.** With n=2 and a broken funnel, assume nothing.
- **Is open tracking enabled and firing?** Check whether the tracking pixel is on and whether these sending domains are being filtered. A 0.36% open rate is either "all in spam" or "pixel disabled" — verify which in Apollo/inbox-placement testing.
- **What is the true delivery status of the missing ~683 scheduled?** Confirm they are pending future steps (expected) versus stuck/failed.
- **Sending domain reputation & authentication:** SPF/DKIM/DMARC status, domain age, and whether these are dedicated cold domains — none of this is in the API payload and all of it bears on the spam-block rate.
- **List source/segment match:** Confirm the delivered contacts are actually landscaping vendors/owners (matching this copy) and not mixed facilities-manager records, which the bounce/spam pattern could partly reflect.

## Recommended changes

The campaign is failing at the deliverability gate, not the copy: step 1 shows a 0.36% open rate against a 3.2% spam-block and 4.4% bounce rate, meaning the mail is being filtered before anyone reads it. The copy is already well-aligned to the brief (leads with proof-of-work and billing-dispute pains, differentiates on GPS/geofence verification, respects the no-em-dash and no-invented-stats constraints), so rewriting it now would only put better words in the spam folder. All effort should go to list hygiene, authentication, volume throttling, and measurement fixes first, with a subject-line A/B test staged to run only after inbox placement is restored.

## A/B test plan

**Hypothesis:** Once inbox placement is restored, a shorter, more curiosity-driven subject on step 1 will lift open rate versus the current abstract phrase, because 'who did what, where' reads as vague and marketing-ish while a concrete question earns the open. DO NOT run this test until step-1 open rate clears 20%+ in inbox-placement testing; running it against a broken funnel wastes the sample.
**Variant A:** Subject: who did what, where (current control) with existing step 1 body unchanged.
**Variant B:** Subject: prove your crew showed up? with existing step 1 body unchanged.
**Success metric:** Reply rate (positive replies), with open rate as a secondary read only if the tracking pixel is confirmed firing. Call a winner at >=200 delivered per variant.
**Decision rule:** If one variant beats the other by >=20% relative on positive reply rate at >=200 delivered each, adopt it; if the gap is <20%, keep Variant A (the simpler control). Change only the subject line during the test, hold body, send time, list segment, and volume constant so open/reply differences are attributable to the subject alone.

## Manual changes (targeting / timing / list)

- Pause or throttle the sequence immediately. Do not keep sending at 60/day into a burned reputation; the 4.4% bounce + 3.2% spam-block is a doom loop that further degrades the domain. Drop to 20-30/day per mailbox and add mailboxes/domains rather than pushing volume through one.
- Re-verify the entire remaining list through a dedicated verifier (NeverBounce, ZeroBounce, or similar) before any more sends. Apollo's built-in verification is not holding up (4.4% bounce). Remove all catch-all, risky, and unverifiable addresses.
- Audit sending-domain authentication: confirm SPF, DKIM, and DMARC are all present and aligned, confirm the domains are dedicated cold-outreach domains (not the primary brand domain), and check domain age/reputation on Google Postmaster and a seed-list inbox-placement test (GlockApps or MailReach).
- Investigate the tracking pixel: a 2-reply/3-open ratio strongly implies opens are undercounted or the pixel is stripped/disabled. Either fix the pixel or switch to a custom tracking domain; consider disabling open tracking entirely, since open pixels themselves can trigger spam filters and hurt placement.
- Set up a custom tracking/link domain in Apollo so step 5's 'grab a time here' link and any embedded links are not routed through a shared, blocklisted redirect domain (0 clicks recorded is a red flag worth confirming a live link exists).
- Spot-check the actual text of the 2 replies in Apollo before counting them as wins. With n=2 on a broken funnel they may be 'remove me' requests. If negative, they reinforce that placement, not interest, is the story.
- Confirm the delivered contacts are actually landscaping vendors/owners, not mixed-in facilities managers. The step 1 copy ('the hours you bill', 'your clients') is vendor-side; a facilities-manager on this list would read it as a mismatch and the bounce/spam pattern may partly reflect a mis-segmented list.
- Once bounces are under 2% and inbox-placement testing shows mail landing in the primary inbox, resume sends gradually (ramp volume over 1-2 weeks) before re-enabling the full 5-step cadence.

## Next review

Re-run the evaluation after deliverability fixes are live and at least ~800 fresh step-1 sends have gone out on cleaned lists (roughly 2-3 weeks at throttled volume). Watch first for the deliverability gate: bounce rate under 2%, spam-block under 0.3%, and open rate climbing toward the 30% target. Only if those clear should copy and the staged subject-line A/B test be judged; until then, treat all reply/open numbers as noise.

---

# CB Email Revamp - sector 3 (69f25cd4bae977000dbd0c5e)

_Brief used: briefs/call-boss.md_

**Auto-apply is off — all changes below are proposals.**

## Evaluation

# Campaign Evaluation — CB Email Revamp - sector 3 — 2026-07-27

## Verdict
Sending has finally resumed — volume roughly tripled since the 07-20 stall (926 unique delivered vs. 316), and deliverability improved (bounce 4.7%→2.25%, spam-block 3.5%→1.5%). But two problems dominate: **open tracking is still broken** (5 opens < 4 replies is arithmetically impossible), which means the client's central "not enough opens" hypothesis remains untestable, and **the newly added volume has produced zero incremental replies** — still stuck at exactly 4, because ~620 of the new sends are sitting at step 1 and haven't reached the reply-producing follow-ups yet. Fixing the tracking pixel is worth more than any copy change right now, because until it works you are flying blind on the exact metric the client cares about.

## Scorecard
| Metric | Value | Benchmark | Target (brief) | Status |
|---|---|---|---|---|
| Delivery rate (reported) | 86.7% (926/1068) | >97% | 95%+ | 🔴 (see note) |
| Delivery rate (resolved attempts) | 95.9% (926 / 966 delivered+bounced+spam) | >97% | 95%+ | 🟡 |
| Bounce rate | 2.25% (24/1068) | alarm >2% | — | 🔴 (marginal, improving) |
| Spam-block rate | 1.5% (16/1068) | alarm >0.3% | — | 🔴 (5x alarm, improving) |
| Open rate | 0.54% (5/926) | 30–50% typical | 30% | 🔴 (tracking broken) |
| Reply rate | 0.43% (4/926) | 1–3% typical | 2% | 🔴 |
| Click rate | 0% | — | — | ⚪ (no links used) |
| Unsubscribe rate | 0.11% (1/926) | alarm >1% | — | 🟢 |
| Meetings / 100 delivered | 0 confirmed | — | 1 | 🔴 / unmeasurable |

**Note on delivery rate:** The reported 86.7% almost certainly counts scheduled-but-not-yet-sent contacts as "undelivered." Only 40 of the 142 missing sends are explained by bounce+spam; the other ~102 are likely still queued (step-1 wait is 30, follow-ups haven't fired). Judge deliverability off the resolved-attempts figure (95.9%) plus the bounce/spam rates, not the headline 86.7%.

## Funnel
Delivered 926 → Opened 5 (0.54%) → Replied 4 (0.43%). Clicked 0 (no links).

The funnel is unreadable at the open stage. **Opens (5) are fewer than replies (4)** — opens are only registering when someone replies, meaning the tracking pixel is disabled, stripped, or not firing. This is the same defect flagged on 07-15 and 07-20 and it is now the single most important blocker: the brief's stated hypothesis is "not enough people open," and you literally cannot measure opens.

On replies (the honest metric): 4 total. Reply rate fell from 1.27% (07-20) to 0.43% — **not because engagement got worse, but because the denominator tripled while the 4 replies came from follow-up steps that most of the new contacts haven't reached yet.** The biggest *real* leak is therefore not yet measurable — it lives at steps 2 and 3, which the fresh volume hasn't hit.

## Step-by-step
| Step | Subject | Delivered | Opened | Replied | Reply rate | Verdict |
|---|---|---|---|---|---|---|
| 1 (opener) | "who answers your phone?" | 948 | 1 | 0 | 0% | 624 new sends since 07-20, **0 replies, ~0 opens**. Opener is not directly generating replies — but that is partly by design (soft "reply Plan" CTA) and partly the broken pixel. |
| 2A | (blank / threads on step 1) | 368 | 1 | 1 | 0.27% | Only +51 delivered since 07-20; still just 1 reply. Too early — new volume hasn't arrived. |
| 2B | (blank, empty body) | 0 | 0 | 0 | — | **Still `to_be_reviewed` with a blank body — unchanged for 12+ days.** Dead weight; either finish it or delete it. |
| 3 (breakup) | "Last try… yes or no?" | 313 | 3 | 3 | 0.96% | Unchanged from 07-20 (still 313 delivered, 3 replies). Best per-send reply rate, but new volume hasn't reached it yet. |

**Data quirk to flag:** step-1 delivered (948) exceeds aggregate unique delivered (926). Per-step counts are per-touch; aggregate is per-unique-contact. Don't add the step rows and compare to the aggregate.

**Confidence:** Every per-step reply claim rests on n = 0–3 replies. **No step or variant winner can be declared** — you need ~150–200+ delivered *and* a double-digit reply count before any comparison means anything. Step 3 "leading" is 3 replies; that is noise, not a result.

## Copy-to-audience fit
The copy is genuinely well-aligned with the brief — better than the deliverability/tracking situation would suggest:

- **Step 1 subject "who answers your phone?"** leads directly with pain point #1 (missed calls when the crew is out) in a lowercase, casual register that matches the brief's "warm, practical, small-business-owner" tone. Good.
- **Step 1 body** addresses pain #1 and #4 (missed call → caller dials the next name → lost revenue) and preempts objection "no bandwidth to hire/train" ("no in-house hire or training on your end"). CTA is a low-commitment "Reply 'Plan'" rather than the Calendly ask — a reasonable soft first touch, though note it is *not* the brief's primary CTA (book a call). Worth confirming this soft-CTA-first approach is intentional.
- **The "can even take payments" scope-overstatement phrase flagged on 07-20 has been removed** from live step-1 copy. Compliance issue resolved — good trend.
- **Step 2A** directly handles the brief's #1 objection ("makes more sense to bring it in house") and the FAQ "why hire you when I can hire office staff" (no hiring/training/turnover, scales with season). Strong fit.
- **Step 3** is a clean, low-friction breakup. Fine.
- **No em dashes** detected in any live copy — the brief's constraint is respected.

The copy is not the obvious problem. Given the broken pixel and near-zero reply volume, there is no evidence the copy is failing on its merits — you cannot yet distinguish "copy doesn't land" from "opens aren't tracked and follow-ups haven't sent."

## Prioritized issues
1. **Open tracking is non-functional** — evidence: 5 opens < 4 replies, unchanged across three consecutive pulls — **impact: high.** This blocks the exact metric (opens) the client's hypothesis hinges on. Nothing about the "messaging isn't getting opened" theory can be validated until this fires.
2. **Spam-block rate 1.5% (5x the 0.3% alarm) and bounce 2.25% (over the 2% alarm)** — evidence: aggregate + step-1 attempts (spam 1.9%, bounce 2.9% on fresh contacts) — **impact: high.** Improving vs. 07-20 but still red; step 1 (new list) is where inboxing decays, pointing at list quality/verification on fresh imports.
3. **Reply volume is effectively flat (still 4) despite 3x sends** — evidence: 4 replies on 926 vs. 4 on 316 — **impact: high but partly a timing artifact.** ~620 new contacts are queued at step 1; follow-ups (where all 4 replies originated) haven't fired. Re-pull after the step 2/3 waits elapse before concluding the opener is dead.
4. **Step-1 opener produced 0 replies on 948 delivered** — evidence: step-1 reply rate 0% — **impact: medium.** Real, but confounded by the soft reply-CTA and broken pixel; not conclusively a copy failure yet.
5. **Step-2 variant B still empty and unapproved** — evidence: blank body, `to_be_reviewed`, 0 delivered, unchanged 12+ days — **impact: low.** Housekeeping; it's contributing nothing and can't win a test it never enters.

## Open questions
- **Is open tracking enabled in Apollo?** Confirm directly — this has been the top unresolved blocker for three pulls and everything downstream depends on it.
- **Reply sentiment on the 4 replies.** Apollo's API does not expose sentiment; the reply count includes angry/negative replies. Given the brief states no one has ever signed up from email, spot-check these 4 in Apollo before treating any of them as wins.
- **Is the soft "Reply 'Plan'" opener CTA intentional** in place of the brief's primary Calendly "book a call" ask? Confirm this is a deliberate two-step nurture, not a missing link.
- **When did the new batch enter the sequence, and when will steps 2/3 fire for them?** The follow-up steps are where every reply has come from; re-pull once those waits elapse to get a fair read on the added volume.
- **List source/verification for the fresh step-1 contacts** — they carry the worst bounce (2.9%) and spam (1.9%) rates, suggesting the newest imports are less clean than the older cohort.

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

---
