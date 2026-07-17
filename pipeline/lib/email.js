import nodemailer from "nodemailer";

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Minimal markdown -> HTML good enough for report emails: headings, bold,
// bullets, code fences, and tables rendered as monospace blocks.
export function markdownToHtml(md) {
  const lines = md.split("\n");
  const out = [];
  let inCode = false;
  let inList = false;
  let tableBuffer = [];

  const flushTable = () => {
    if (tableBuffer.length) {
      out.push(
        `<pre style="background:#f4f4f4;padding:8px;border-radius:4px;overflow-x:auto;">${escapeHtml(tableBuffer.join("\n"))}</pre>`,
      );
      tableBuffer = [];
    }
  };
  const flushList = () => {
    if (inList) {
      out.push("</ul>");
      inList = false;
    }
  };

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      flushList();
      flushTable();
      inCode = !inCode;
      out.push(inCode ? '<pre style="background:#f4f4f4;padding:8px;border-radius:4px;">' : "</pre>");
      continue;
    }
    if (inCode) {
      out.push(escapeHtml(line));
      continue;
    }
    if (line.trim().startsWith("|")) {
      flushList();
      tableBuffer.push(line);
      continue;
    }
    flushTable();

    let html = escapeHtml(line);
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

    const heading = html.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      flushList();
      const level = Math.min(heading[1].length + 1, 5);
      out.push(`<h${level}>${heading[2]}</h${level}>`);
      continue;
    }
    const bullet = html.match(/^\s*[-*]\s+(.*)$/);
    if (bullet) {
      if (!inList) {
        out.push("<ul>");
        inList = true;
      }
      out.push(`<li>${bullet[1]}</li>`);
      continue;
    }
    flushList();
    if (html.trim() === "") {
      out.push("");
    } else {
      out.push(`<p>${html}</p>`);
    }
  }
  flushList();
  flushTable();
  return out.join("\n");
}

export async function sendReport(smtp, recipients, { subject, markdown, attachments }) {
  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.port === 465,
    auth: { user: smtp.user, pass: smtp.pass },
  });

  const html = [
    '<div style="font-family:Segoe UI,Arial,sans-serif;max-width:720px;margin:0 auto;color:#222;">',
    markdownToHtml(markdown),
    '<hr><p style="color:#888;font-size:12px;">Generated automatically by the Call Boss Apollo pipeline. Full reports attached.</p>',
    "</div>",
  ].join("\n");

  const info = await transporter.sendMail({
    from: `"Campaign Pipeline" <${smtp.user}>`,
    to: recipients.join(", "),
    subject,
    text: markdown,
    html,
    attachments,
  });
  return info.messageId;
}
