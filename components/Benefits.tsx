import { Icon } from "./Icon";
import { benefits, compare } from "@/content/site";

export function Benefits() {
  return (
    <section id="benefits" className="band">
      <div className="section-head" data-reveal>
        <div className="eyebrow">Benefits</div>
        <h2>Everyone on the street gets something.</h2>
      </div>
      <div className="benefits">
        {benefits.map((b, i) => (
          <div className="benefit" key={b.title} data-reveal style={{ "--d": `${i * 110}ms` } as React.CSSProperties}>
            <Icon name={b.icon} className="icon" />
            <h3>{b.title}</h3>
            <ul>
              {b.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="street-note" data-reveal>
        <p>
          <b>For merchants&apos; associations, landlords and malls:</b> one street plan makes every business on the street a member,
          adds monthly Street Quests and events, and reports the footfall between businesses. Ask us about it in the form below.
        </p>
      </div>
    </section>
  );
}

export function Compare() {
  const last = compare.columns.length - 1;
  return (
    <section id="compare">
      <div className="section-head" data-reveal>
        <div className="eyebrow">Why not just…</div>
        <h2>The alternatives, honestly.</h2>
      </div>
      <div className="compare" data-reveal>
        <table>
          <thead>
            <tr>
              <th scope="col"></th>
              {compare.columns.map((c, i) => (
                <th scope="col" key={c} className={i === last ? "hi" : undefined}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compare.rows.map((r) => (
              <tr key={r.label}>
                <th scope="row">{r.label}</th>
                {r.values.map((v, i) => (
                  <td key={i} data-label={compare.shortColumns[i]} className={i === last ? "hi" : undefined}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
