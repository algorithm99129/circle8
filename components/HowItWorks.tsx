import { Icon } from "./Icon";
import { steps } from "@/content/site";

export function HowItWorks() {
  return (
    <section id="how" className="band">
      <div className="section-head" data-reveal>
        <div className="eyebrow">How it works</div>
        <h2>Four steps. Only one of them needs you.</h2>
      </div>
      <div className="steps">
        {steps.map((s, i) => (
          <div className="step" key={s.title} data-reveal style={{ "--d": `${i * 110}ms` } as React.CSSProperties}>
            <div className="n">{s.when}</div>
            <div className="icon"><Icon name={s.icon} /></div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
