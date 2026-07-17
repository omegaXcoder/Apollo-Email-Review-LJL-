import fs from "node:fs";
import path from "node:path";
import { PROJECT_ROOT } from "./env.js";

const BRIEFS_DIR = path.join(PROJECT_ROOT, "briefs");

// Each briefs/*.md declares its own matching keywords on line 1:
// <!-- sequence-match: CB, Call Boss -->
export function loadBriefs() {
  if (!fs.existsSync(BRIEFS_DIR)) return [];
  return fs
    .readdirSync(BRIEFS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const content = fs.readFileSync(path.join(BRIEFS_DIR, f), "utf8");
      const match = content.match(/<!--\s*sequence-match:\s*(.+?)\s*-->/i);
      const keywords = match
        ? match[1].split(",").map((s) => s.trim().toLowerCase()).filter(Boolean)
        : [];
      return { file: f, keywords, content };
    });
}

// Longest matching keyword wins, so "call boss" outranks a short overlap like "cb".
export function selectBrief(briefs, fallbackBrief, sequenceName) {
  const name = (sequenceName ?? "").toLowerCase();
  let best = null;
  let bestLength = 0;
  for (const brief of briefs) {
    for (const keyword of brief.keywords) {
      if (name.includes(keyword) && keyword.length > bestLength) {
        best = brief;
        bestLength = keyword.length;
      }
    }
  }
  if (best) return { source: `briefs/${best.file}`, content: best.content };
  if (fallbackBrief) return { source: "campaign-brief.md (fallback)", content: fallbackBrief };
  return { source: "none", content: null };
}
