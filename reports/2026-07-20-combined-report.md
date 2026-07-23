# Campaign performance report — 2026-07-20

**Skipped (not email campaigns):** CB LI Sector 1 (No email steps (linkedin_step_connect, linkedin_step_message)); CB LI Sector 4 (No email steps (linkedin_step_connect, linkedin_step_message)); CB LI Sector 5 (No email steps (linkedin_step_connect, linkedin_step_message)); CB LI Sector 3 (No email steps (linkedin_step_connect, linkedin_step_message)); Cappsure LI Sector 3 (No email steps (linkedin_step_connect, linkedin_step_message)); Cappsure LI Sector 1 (No email steps (linkedin_step_connect, linkedin_step_message)); Cappsure LI Sector 2 (No email steps (linkedin_step_connect, linkedin_step_message))

**Cross-sequence flag:** all three Call Boss email sequences (sectors 3, 4, 5) show **zero new sends since the 2026-07-15 pull** — every unique and per-step delivery/bounce/open/reply figure is byte-for-byte identical, five days apart, even though the rewritten copy from the 07-15 optimization round is confirmed live in Apollo. This is evaluation-only output (no auto-apply, no email send) — see individual reports for full detail.

---

# CB Email Revamp - sector 5 (69f365095f308f0015f454db)

_Brief used: briefs/call-boss.md_

## Evaluation

[See reports/2026-07-20-69f365095f308f0015f454db-evaluation.md](2026-07-20-69f365095f308f0015f454db-evaluation.md)

**Verdict:** No new sends in 5 days despite the 07-15 copy rewrite going live. Deliverability (86.5% delivery, 7.6% bounce, 6.3% spam-block) and the 0/302 open-tracking anomaly are both unchanged and still unresolved underneath the sending stoppage.

---

# CB Email Revamp - sector 4 (69f3606091ce91000d1e89f3)

_Brief used: briefs/call-boss.md_

## Evaluation

[See reports/2026-07-20-69f3606091ce91000d1e89f3-evaluation.md](2026-07-20-69f3606091ce91000d1e89f3-evaluation.md)

**Verdict:** Same stalled-sending pattern. Deliverability (85.8% delivery, 8.7% bounce, 5.5% spam-block) unchanged from 07-15; the compliance fixes (dashes, scope claim, HVAC hard-coding) shipped but are untested against fresh sends.

---

# CB Email Revamp - sector 3 (69f25cd4bae977000dbd0c5e)

_Brief used: briefs/call-boss.md_

## Evaluation

[See reports/2026-07-20-69f25cd4bae977000dbd0c5e-evaluation.md](2026-07-20-69f25cd4bae977000dbd0c5e-evaluation.md)

**Verdict:** Same stalled-sending pattern, but this is the one sequence with real signal (4 replies on 316 delivered) — now 5 days stale. Open tracking is still arithmetically broken (5 opens < 4 replies), and the live step-1 copy still contains the "can even take payments" claim that was removed from sectors 4 and 5's rewrites — worth reconciling.

---

## Notes on this run
- Read-only evaluation run via `/evaluate-campaign` — no changes were written to Apollo (`AUTO_APPLY` in `.env` is `true` for the full pipeline, but this run used the evaluation-only skill, not `npm start`).
- No report email was sent (that's the full pipeline's job, not this skill's).
- Recommend running the full pipeline (`npm start`) or manually checking Apollo to confirm whether the three Call Boss sequences are paused, list-exhausted, or otherwise stalled before doing any further copy work.
