import Link from "next/link";
import { Icon } from "./Icon";
import { plans, privacyPoints, faqs } from "@/content/site";

export function Pricing() {
  return (
    <section id="pricing" className="band">
      <div className="section-head" data-reveal>
        <div className="eyebrow">Pricing</div>
        <h2>Free to join. You never pay for customers you send.</h2>
        <p>
          No card is needed to join. $29 is the reference price in US dollars; you&apos;ll see your city&apos;s exact price before
          anything is charged.
        </p>
      </div>
      <div className="plans">
        {plans.map((p, i) => (
          <div className={p.featured ? "plan featured" : "plan"} key={p.name} data-reveal style={{ "--d": `${i * 110}ms` } as React.CSSProperties}>
            <div className="name">{p.name}</div>
            <div className="price">{p.price}{p.per && <small>{p.per}</small>}</div>
            <p className="who">{p.who}</p>
            <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="fair" data-reveal>
        <Icon name="scale" />
        <div>
          <h3>The fair rule, with numbers</h3>
          <p>
            Every customer you send to a partner earns you one credit. Every customer a partner sends you uses one.
            At the end of the month we look at the balance.
          </p>
          <p>
            <b>Balanced</b> (you sent 10, received 10): you pay nothing extra.<br />
            <b>Behind</b> (you sent 7, received 10): you owe about $1 for each of the 3 extra customers, so $3. Never more than $40 a month.<br />
            <b>Ahead</b> (you sent 10, received 7): you&apos;re paid about $0.40 for each of the 3 customers who showed up, or you take free Pro instead.
          </p>
          <div className="line">Counted at the customer&apos;s phone, not at your till, so nobody can inflate or hide the number.</div>
        </div>
      </div>
    </section>
  );
}

export function Privacy() {
  return (
    <section id="privacy">
      <div className="privacy">
        <div data-reveal>
          <div className="eyebrow">Your customers stay yours</div>
          <h2>You never share a customer.</h2>
          <p className="lede">
            Your customers share themselves, if they want a gift. That is the whole privacy model, and it is built into how
            the app works, not into a policy page.
          </p>
          <p className="quote">&ldquo;No list leaves your shop. No name reaches your partner.&rdquo;</p>
        </div>
        <ul>
          {privacyPoints.map((p, i) => (
            <li key={p.title} data-reveal style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
              <Icon name={p.icon} />
              <div><b>{p.title}</b>{p.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="band-white">
      <div className="faq-grid">
        <div className="faq-aside" data-reveal>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div className="eyebrow">FAQ</div>
            <h2>Questions owners ask first.</h2>
          </div>
          <div className="card">
            <p><b>The short version:</b> you join free, get matched with a neighbour every Monday, tap once, and see on Friday how many customers it brought. Your customers never need an app, and you never share their data.</p>
            <p>Something else on your mind? Tell us in the form below and we&apos;ll answer personally.</p>
            <Link className="btn ghost small" href="#join">Ask a question</Link>
          </div>
        </div>
        <div className="faq" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <div className="a"><p>{f.a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
