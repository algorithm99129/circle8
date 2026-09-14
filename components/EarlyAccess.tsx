"use client";

import { useState, type FormEvent } from "react";
import { categories, sizes } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

export function EarlyAccess() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || "That didn't send.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "That didn't send. Please try again.");
    }
  }

  return (
    <section id="join">
      <div className="cta">
        <div data-reveal>
          <div className="eyebrow">Early access</div>
          <h2>Get your street started.</h2>
          <p className="lede">
            Leave your details and we&apos;ll tell you when your street opens. If you run a busy shop, say so: the busiest
            businesses on a street (we call them anchors) get founding terms, including Pro free for life.
          </p>
          <p className="muted">Founding members get everything free for at least 90 days, and longer if they haven&apos;t yet received 20 customers by then.</p>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          {status === "sent" ? (
            <div className="ok" role="status">Thanks. We&apos;ve noted your street and will be in touch when it&apos;s close to opening.</div>
          ) : (
            <div className="fields">
              <div className="two">
                <div className="field">
                  <label htmlFor="f-business">Business name</label>
                  <input id="f-business" name="business" type="text" required autoComplete="organization" placeholder="Bella's Bakery" />
                </div>
                <div className="field">
                  <label htmlFor="f-category">Category</label>
                  <select id="f-category" name="category" required defaultValue="">
                    <option value="" disabled>Choose…</option>
                    {categories.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="f-street">Street and city</label>
                <input id="f-street" name="street" type="text" required placeholder="Oak Street, Springfield" />
              </div>
              <div className="two">
                <div className="field">
                  <label htmlFor="f-contact">Phone or email</label>
                  <input id="f-contact" name="contact" type="text" required autoComplete="tel" placeholder="+1 415 555 0142" />
                </div>
                <div className="field">
                  <label htmlFor="f-size">Customers on a normal day</label>
                  <select id="f-size" name="size" defaultValue="">
                    <option value="">Roughly…</option>
                    {sizes.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="f-gift">What could you give a neighbour&apos;s customer that costs you little? (optional)</label>
                <textarea id="f-gift" name="gift" placeholder="A free coffee with any pastry" />
              </div>
              <button className="btn" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Request early access"}
              </button>
              {status === "error" && <p className="err" role="alert">{error}</p>}
              <p className="hint">We&apos;ll only use this to contact you about your street. No newsletters.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
