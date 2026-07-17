const BASE_URL = "https://api.apollo.io/api/v1";

function headers(apiKey) {
  return {
    "x-api-key": apiKey,
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  };
}

async function apolloRequest(apiKey, method, urlPath, body) {
  const res = await fetch(`${BASE_URL}${urlPath}`, {
    method,
    headers: headers(apiKey),
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch {
    // non-JSON error body; keep raw text
  }
  if (!res.ok) {
    const detail = json?.error ?? json?.message ?? text.slice(0, 300);
    const err = new Error(`Apollo ${method} ${urlPath} -> ${res.status}: ${detail}`);
    err.status = res.status;
    err.body = json ?? text;
    throw err;
  }
  return json;
}

export async function fetchSequence(apiKey, sequenceId) {
  return apolloRequest(apiKey, "GET", `/emailer_campaigns/${sequenceId}`);
}

// Page through every sequence in the account (search endpoint needs a master key).
export async function listSequences(apiKey) {
  const all = [];
  let page = 1;
  for (;;) {
    const res = await apolloRequest(apiKey, "POST", "/emailer_campaigns/search", {
      page,
      per_page: 100,
    });
    const sequences = res.emailer_campaigns ?? [];
    all.push(...sequences);
    const totalPages = res.pagination?.total_pages ?? 1;
    if (sequences.length === 0 || page >= totalPages) break;
    page++;
  }
  return all;
}

function rate(numerator, denominator) {
  if (!denominator || denominator <= 0) return null;
  return Math.round((numerator / denominator) * 10000) / 100;
}

function htmlToText(html) {
  if (!html) return null;
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

// Flatten Apollo's response into the stats + copy summary the prompts consume.
export function summarizeSequence(raw) {
  const c = raw.emailer_campaign ?? raw;
  const steps = raw.emailer_steps ?? [];
  const touches = raw.emailer_touches ?? [];
  const templates = raw.emailer_templates ?? [];

  const delivered = c.unique_delivered;
  const summary = {
    pulled_at: new Date().toISOString(),
    sequence_id: c.id,
    sequence_name: c.name,
    active: c.active,
    created_at: c.created_at,
    num_steps: c.num_steps,
    unique_scheduled: c.unique_scheduled,
    unique_delivered: delivered,
    unique_bounced: c.unique_bounced,
    unique_opened: c.unique_opened,
    unique_replied: c.unique_replied,
    unique_clicked: c.unique_clicked,
    unique_unsubscribed: c.unique_unsubscribed,
    unique_spam_blocked: c.unique_spam_blocked,
    delivery_rate_pct: rate(delivered, c.unique_scheduled),
    bounce_rate_pct: rate(c.unique_bounced, c.unique_scheduled),
    open_rate_pct: rate(c.unique_opened, delivered),
    reply_rate_pct: rate(c.unique_replied, delivered),
    click_rate_pct: rate(c.unique_clicked, delivered),
    unsubscribe_rate_pct: rate(c.unique_unsubscribed, delivered),
    steps: steps.map((step) => ({
      step_id: step.id,
      position: step.position,
      type: step.type,
      wait_time: step.wait_time,
      variants: touches
        .filter((t) => t.emailer_step_id === step.id)
        .map((t) => {
          const template = templates.find((tpl) => tpl.id === t.emailer_template_id);
          return {
            touch_id: t.id,
            template_id: t.emailer_template_id,
            status: t.status,
            subject: template?.subject ?? null,
            body_text: template?.body_text ?? htmlToText(template?.body_html),
            body_html: template?.body_html ?? null,
            scheduled: t.unique_scheduled,
            delivered: t.unique_delivered,
            bounced: t.unique_bounced,
            opened: t.unique_opened,
            replied: t.unique_replied,
            unsubscribed: t.unique_unsubscribed,
            spam_blocked: t.unique_spam_blocked,
            open_rate_pct: rate(t.unique_opened, t.unique_delivered),
            reply_rate_pct: rate(t.unique_replied, t.unique_delivered),
          };
        }),
    })),
  };
  return summary;
}

// Write a rewritten subject/body back into Apollo. Apollo's docs are thin on the
// exact write shape, so try the touch-level update first and fall back to
// updating the template object directly. run.js verifies with a re-fetch either way.
export async function applyEmailChange(apiKey, change) {
  const payloadTemplate = {
    subject: change.new_subject,
    body_html: change.new_body_html,
  };

  // PUT /emailer_templates/{id} is the shape Apollo accepted on the 2026-07-14
  // live run (verified by re-fetch); the others remain as fallbacks.
  const attempts = [
    {
      method: "PUT",
      path: `/emailer_templates/${change.template_id}`,
      body: payloadTemplate,
    },
    {
      method: "PUT",
      path: `/emailer_touches/${change.touch_id}`,
      body: {
        emailer_touch: {
          emailer_template: { id: change.template_id, ...payloadTemplate },
        },
      },
    },
    {
      method: "PATCH",
      path: `/emailer_templates/${change.template_id}`,
      body: { emailer_template: payloadTemplate },
    },
  ];

  const errors = [];
  for (const attempt of attempts) {
    try {
      await apolloRequest(apiKey, attempt.method, attempt.path, attempt.body);
      return { ok: true, via: `${attempt.method} ${attempt.path}`, errors };
    } catch (err) {
      errors.push(err.message);
    }
  }
  return { ok: false, via: null, errors };
}
