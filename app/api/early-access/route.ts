import { NextResponse } from "next/server";

/* Receives the early-access form.
   - Validates the fields.
   - Forwards the submission to EARLY_ACCESS_WEBHOOK_URL if set (a Slack incoming webhook, a Google Sheet via Apps Script,
     Zapier, Make, Formspree, or your own API). Without it, the submission is logged to the server console so nothing is lost
     during preview. */

const fields = ["business", "category", "street", "contact", "size", "gift"] as const;
type Submission = Record<(typeof fields)[number], string>;

export async function POST(request: Request) {
  let body: Partial<Submission>;
  try {
    body = (await request.json()) as Partial<Submission>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const data = Object.fromEntries(fields.map((f) => [f, String(body[f] ?? "").trim().slice(0, 500)])) as Submission;
  for (const required of ["business", "category", "street", "contact"] as const) {
    if (!data[required]) {
      return NextResponse.json({ ok: false, error: "Please fill in every required field." }, { status: 400 });
    }
  }

  const submission = { ...data, receivedAt: new Date().toISOString() };
  const webhook = process.env.EARLY_ACCESS_WEBHOOK_URL;

  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `Early access: ${data.business} (${data.category}) · ${data.street} · ${data.contact} · ${data.size || "size n/a"}${data.gift ? ` · gift: ${data.gift}` : ""}`,
        ...submission,
      }),
    });
    if (!res.ok) {
      console.error("early-access webhook failed", res.status, submission);
      return NextResponse.json({ ok: false, error: "That didn't send. Please try again in a minute." }, { status: 502 });
    }
  } else {
    console.log("early-access submission", submission);
  }

  return NextResponse.json({ ok: true });
}
