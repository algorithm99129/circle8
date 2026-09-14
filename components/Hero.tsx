import Link from "next/link";
import { HeroArt } from "./HeroArt";
import { facts, site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="copy">
        <span className="pill">For local businesses · opening one street at a time</span>
        <h1>{site.tagline}</h1>
        <p className="definition">{site.definition}</p>
        <p className="lede">
          You join a circle of eight nearby businesses that don&apos;t compete with you. Each Monday the app proposes one deal:
          your customers get a gift at a neighbour&apos;s, their customers get a gift at yours. It makes the poster, counts every
          customer who arrives, and tells you the result on Friday.
        </p>
        <div className="actions">
          <Link className="btn" href="#join">Get early access</Link>
          <Link className="btn ghost" href="#story">See how it works</Link>
        </div>
        <p className="fineprint">Free to join, no card needed. No app store, no meetings, no customer data shared.</p>
      </div>
      <HeroArt />
    </section>
  );
}

export function Intro() {
  return (
    <section id="intro">
      <div className="section-head" data-reveal>
        <div className="eyebrow">The essentials</div>
        <h2>A partnership with a neighbour every week, with every customer counted.</h2>
        <p>
          Every business on a street already has something the others want: customers who trust it. Circle8 turns that into a
          simple weekly exchange. Nobody negotiates, nobody designs a flyer, nobody sits in a meeting. The app does the pairing,
          the paperwork and the counting.
        </p>
      </div>
      <div className="facts">
        {facts.map((f, i) => {
          const n = parseInt(f.big, 10);
          const suffix = f.big.replace(String(n), "");
          return (
            <div className="fact" key={f.big} data-reveal style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
              <div className="big" data-count={n} data-suffix={suffix}>{f.big}</div>
              <div className="label">{f.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
