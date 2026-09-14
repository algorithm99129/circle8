"use client";

import { useEffect, useRef, useState } from "react";

/* An auto-playing, five-scene walkthrough: what Circle8 is and what it does for the owner.
   Each scene is a small SVG animation (CSS keyframes and SMIL, restarted by remounting on change).
   Auto-advance pauses on hover/focus and is off entirely for people who prefer reduced motion. */

const SCENE_MS = 6000;

const steps = [
  {
    label: "Your street becomes a circle",
    what: "Circle8 puts your business in a circle of eight nearby businesses that don't compete with you: one café, one gym, one salon, one florist…",
    forYou: "Partners you never had to find, and none of them can take your customers.",
  },
  {
    label: "Monday: one match, one tap",
    what: "Every Monday the app proposes one deal with a neighbour: what you give their customers, what they give yours. You tap Accept, and the poster, the counter card and the social post are made for you.",
    forYou: "Five minutes a week. No negotiation, no design work, no meetings.",
  },
  {
    label: "All week: gifts send customers next door",
    what: "Your customers scan the card at your till and get a gift at your partner's. Their customers get a gift at yours. Every gift is claimed with a code on the customer's own phone.",
    forYou: "New customers who already trust your neighbour, at no cost to you: the partner provides the gift.",
  },
  {
    label: "Friday: the number",
    what: "You see how many customers came from each partner, how many you sent, and which offer worked best.",
    forYou: "Proof, not promises. By Friday you know what works.",
  },
  {
    label: "Fair by design",
    what: "Every customer you send earns a credit; every one you receive uses one. Balanced costs nothing. Receive more? About $1 each, capped. Send more? You're paid for the difference.",
    forYou: "Busy shops earn from what they send. Growing shops get customers for almost nothing.",
  },
];

/* ---------- scenes ---------- */

const shopIcons = ["cafe", "gym", "salon", "florist", "clinic", "book", "tailor", "bakery"];

function SceneCircle() {
  // 8 shops start in a row along the street and travel to their place on the ring
  const cx = 260, cy = 166, rx = 175, ry = 108;
  return (
    <svg viewBox="0 0 520 380" className="scene s1" role="img" aria-label="Eight shops on a street move into a circle">
      <rect x="0" y="300" width="520" height="34" fill="#EDF3F0" />
      <path d="M0 317H520" stroke="#D6DFDB" strokeWidth="1.5" strokeDasharray="8 8" />
      <ellipse className="s1-ring" cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke="#12715B" strokeWidth="2" strokeDasharray="7 7" pathLength="100" />
      {shopIcons.map((icon, i) => {
        const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
        const tx = cx + rx * Math.cos(a), ty = cy + ry * Math.sin(a);
        const fx = 62 + i * 57, fy = 262;
        const you = i === 7;
        return (
          <g key={icon} className="s1-shop" style={{ "--fx": `${fx}px`, "--fy": `${fy}px`, "--tx": `${tx}px`, "--ty": `${ty}px`, "--i": i } as React.CSSProperties}>
            <circle r="22" fill={you ? "#F6ECD8" : "#FFFFFF"} stroke={you ? "#B7791F" : "#172220"} strokeWidth="1.5" />
            <use href={`#ic-${icon}`} x="-11" y="-11" width="22" height="22" color="#172220" />
            {you && <text y="40" textAnchor="middle" fontSize="11" fill="#B7791F" style={{ fontFamily: "var(--mono)" }}>you</text>}
          </g>
        );
      })}
      <text className="s1-label" x={cx} y={cy + 6} textAnchor="middle" fontSize="15" fontWeight="600" fill="#0B5343" style={{ fontFamily: "var(--display)" }}>Your circle of 8</text>
    </svg>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <rect x="170" y="20" width="180" height="340" rx="26" fill="#172220" />
      <rect x="180" y="32" width="160" height="316" rx="18" fill="#F5F8F6" />
      {children}
    </>
  );
}

function SceneMonday() {
  return (
    <svg viewBox="0 0 520 380" className="scene s2" role="img" aria-label="A phone shows the Monday match and a finger taps Accept">
      <PhoneFrame>
        <text x="260" y="58" textAnchor="middle" fontSize="9" letterSpacing="1" fill="#0B5343" style={{ fontFamily: "var(--mono)" }}>MONDAY 9:00 · THIS WEEK&apos;S MATCH</text>
        <rect x="192" y="72" width="136" height="150" rx="10" fill="#FFFFFF" stroke="#D6DFDB" />
        <circle cx="232" cy="106" r="16" fill="#E3F1EB" stroke="#D6DFDB" />
        <use href="#ic-bakery" x="222" y="96" width="20" height="20" color="#0B5343" />
        <circle cx="288" cy="106" r="16" fill="#E3F1EB" stroke="#D6DFDB" />
        <use href="#ic-gym" x="278" y="96" width="20" height="20" color="#0B5343" />
        <path d="M250 106H270" stroke="#12715B" strokeWidth="2" />
        <circle cx="260" cy="106" r="4" fill="#B7791F" />
        <text x="260" y="140" textAnchor="middle" fontSize="11" fontWeight="600" fill="#172220" style={{ fontFamily: "var(--display)" }}>FitZone Gym · 300 m</text>
        <text x="260" y="156" textAnchor="middle" fontSize="9" fill="#5E6E68">free coffee ⇄ free week</text>
        <rect className="s2-btn" x="204" y="176" width="112" height="28" rx="7" fill="#12715B" />
        <text className="s2-t1" x="260" y="194" textAnchor="middle" fontSize="11" fontWeight="600" fill="#FFFFFF">Accept</text>
        <text className="s2-t2" x="260" y="194" textAnchor="middle" fontSize="11" fontWeight="600" fill="#FFFFFF">Accepted ✓</text>
        <g className="s2-kit">
          <rect x="192" y="236" width="136" height="92" rx="10" fill="#FFFFFF" stroke="#D6DFDB" />
          <text x="204" y="254" fontSize="8.5" letterSpacing="1" fill="#0B5343" style={{ fontFamily: "var(--mono)" }}>MADE FOR YOU</text>
          <g fontSize="10" fill="#172220">
            <text x="204" y="274">▪ Counter card</text>
            <text x="204" y="290">▪ Poster</text>
            <text x="204" y="306">▪ Instagram post</text>
            <text x="204" y="322">▪ Offer link</text>
          </g>
        </g>
      </PhoneFrame>
      <circle className="s2-ripple" cx="260" cy="190" r="12" fill="none" stroke="#12715B" strokeWidth="2" />
      <circle className="s2-finger" cx="0" cy="0" r="11" fill="#172220" opacity="0.85" />
    </svg>
  );
}

function SceneWeek() {
  const path = "M152 232Q260 120 368 232";
  return (
    <svg viewBox="0 0 520 380" className="scene s3" role="img" aria-label="Customers carry gift codes from the bakery to the gym and are counted">
      <rect x="0" y="262" width="520" height="34" fill="#EDF3F0" />
      <path d="M0 279H520" stroke="#D6DFDB" strokeWidth="1.5" strokeDasharray="8 8" />
      <g transform="translate(68 190)">
        <use href="#sf" width="84" height="70" /><use href="#sf-awning" width="84" height="70" fill="#B7791F" /><use href="#ic-bakery" x="34" y="4" width="16" height="16" color="#172220" />
      </g>
      <text x="110" y="278" textAnchor="middle" fontSize="11" fill="#5E6E68" style={{ fontFamily: "var(--mono)" }}>your till</text>
      <g transform="translate(368 190)">
        <use href="#sf" width="84" height="70" /><use href="#sf-awning" width="84" height="70" fill="#12715B" /><use href="#ic-gym" x="34" y="4" width="16" height="16" color="#172220" />
      </g>
      <text x="410" y="278" textAnchor="middle" fontSize="11" fill="#5E6E68" style={{ fontFamily: "var(--mono)" }}>your partner</text>
      {/* the counter card at the till */}
      <g className="s3-card" transform="translate(120 150) rotate(-6)">
        <rect width="54" height="34" rx="4" fill="#FFFFFF" stroke="#172220" strokeWidth="1.2" />
        <rect x="6" y="6" width="20" height="20" fill="#172220" opacity="0.85" />
        <rect x="9" y="9" width="6" height="6" fill="#FFFFFF" /><rect x="19" y="9" width="4" height="4" fill="#FFFFFF" /><rect x="9" y="19" width="4" height="4" fill="#FFFFFF" />
        <text x="32" y="15" fontSize="6.5" fill="#172220" style={{ fontFamily: "var(--display)" }}>Thank you</text>
        <text x="32" y="24" fontSize="5" fill="#5E6E68">pick a gift</text>
      </g>
      <path d={path} fill="none" stroke="#12715B" strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />
      {[0, 1, 2].map((n) => (
        <g key={n} className="s3-walker" style={{ animationDelay: `${0.4 + n * 1.3}s` }}>
          <circle r="9" fill="#12715B" />
          <rect x="6" y="-14" width="16" height="11" rx="2" fill="#FFFFFF" stroke="#B7791F" strokeWidth="1.2" />
          <text x="14" y="-6" textAnchor="middle" fontSize="6" fill="#B7791F" style={{ fontFamily: "var(--mono)" }}>BX4K</text>
          <animateMotion dur="1.6s" begin={`${0.4 + n * 1.3}s`} fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" keyTimes="0;1" keyPoints="0;1" path={path} />
        </g>
      ))}
      {[0, 1, 2].map((n) => (
        <text key={n} className="s3-plus" style={{ animationDelay: `${1.9 + n * 1.3}s` }} x="428" y="180" textAnchor="middle" fontSize="16" fontWeight="700" fill="#12715B">+1</text>
      ))}
      <g className="s3-count">
        <rect x="336" y="120" width="150" height="30" rx="15" fill="#E3F1EB" />
        <text x="411" y="140" textAnchor="middle" fontSize="12" fontWeight="600" fill="#0B5343" style={{ fontFamily: "var(--display)" }}>3 customers counted</text>
      </g>
    </svg>
  );
}

function SceneFriday({ n }: { n: number }) {
  return (
    <svg viewBox="0 0 520 380" className="scene s4" role="img" aria-label="A phone shows nine new customers from partners this week, with a bar per partner">
      <PhoneFrame>
        <text x="260" y="58" textAnchor="middle" fontSize="9" letterSpacing="1" fill="#0B5343" style={{ fontFamily: "var(--mono)" }}>FRIDAY 17:00 · THIS WEEK</text>
        <text x="260" y="128" textAnchor="middle" fontSize="72" fontWeight="700" fill="#172220" style={{ fontFamily: "var(--display)", letterSpacing: "-3px" }}>{n}</text>
        <text x="260" y="150" textAnchor="middle" fontSize="10.5" fill="#172220">new customers from partners</text>
        <g fontSize="10" fill="#172220">
          <text x="196" y="186">FitZone Gym</text>
          <rect className="s4-bar" x="196" y="192" width="128" height="8" rx="4" fill="#12715B" style={{ "--w": 1 } as React.CSSProperties} />
          <text x="324" y="186" textAnchor="end" fontWeight="600">6</text>
          <text x="196" y="222">Zen Yoga</text>
          <rect className="s4-bar" x="196" y="228" width="128" height="8" rx="4" fill="#12715B" style={{ "--w": 0.5, animationDelay: "0.25s" } as React.CSSProperties} />
          <text x="324" y="222" textAnchor="end" fontWeight="600">3</text>
        </g>
        <g className="s4-chip">
          <rect x="196" y="256" width="128" height="28" rx="8" fill="#E3F1EB" />
          <text x="206" y="274" fontSize="10" fontWeight="600" fill="#0B5343">You sent 11</text>
          <text x="314" y="274" textAnchor="end" fontSize="10" fontWeight="600" fill="#0B5343">2 ahead</text>
        </g>
        <g className="s4-tip">
          <rect x="196" y="296" width="128" height="40" rx="8" fill="#FFFFFF" stroke="#D6DFDB" />
          <text x="204" y="312" fontSize="8" letterSpacing="1" fill="#0B5343" style={{ fontFamily: "var(--mono)" }}>FROM YOUR HOST</text>
          <text x="204" y="326" fontSize="8.5" fill="#172220">Tuesdays convert 2× better.</text>
        </g>
      </PhoneFrame>
    </svg>
  );
}

function SceneFair() {
  return (
    <svg viewBox="0 0 520 380" className="scene s5" role="img" aria-label="A balance scale: you sent ten, received seven, so you are paid for the difference">
      <rect x="250" y="150" width="20" height="150" rx="4" fill="#D6DFDB" />
      <rect x="200" y="296" width="120" height="12" rx="6" fill="#D6DFDB" />
      <g className="s5-beam">
        <rect x="120" y="144" width="280" height="10" rx="5" fill="#172220" />
        <circle cx="260" cy="149" r="9" fill="#B7791F" stroke="#172220" strokeWidth="1.5" />
        <g transform="translate(140 149)">
          <path d="M0 0V40" stroke="#172220" strokeWidth="1.5" /><rect x="-46" y="40" width="92" height="12" rx="6" fill="#E3F1EB" stroke="#172220" strokeWidth="1.2" />
          {[0, 1, 2].map((n) => <circle key={n} className="s5-coin" style={{ animationDelay: `${0.4 + n * 0.35}s` }} cx={-20 + n * 20} cy="32" r="8" fill="#B7791F" stroke="#172220" strokeWidth="1" />)}
        </g>
        <g transform="translate(380 149)">
          <path d="M0 0V40" stroke="#172220" strokeWidth="1.5" /><rect x="-46" y="40" width="92" height="12" rx="6" fill="#E3F1EB" stroke="#172220" strokeWidth="1.2" />
        </g>
      </g>
      <g fontSize="12" fill="#172220" style={{ fontFamily: "var(--display)" }} fontWeight="600">
        <text x="140" y="226" textAnchor="middle">you sent 10</text>
        <text x="380" y="226" textAnchor="middle">you received 7</text>
      </g>
      <g className="s5-pay">
        <rect x="150" y="60" width="220" height="34" rx="17" fill="#12715B" />
        <text x="260" y="82" textAnchor="middle" fontSize="13" fontWeight="600" fill="#FFFFFF" style={{ fontFamily: "var(--display)" }}>3 ahead → you&apos;re paid</text>
      </g>
      <g fontSize="10.5" fill="#5E6E68" style={{ fontFamily: "var(--mono)" }}>
        <text x="260" y="340" textAnchor="middle">balanced: nothing extra · behind: about $1 each, capped</text>
      </g>
    </svg>
  );
}

/* ---------- the story ---------- */

export function Story() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [auto, setAuto] = useState(true);
  const [count, setCount] = useState(9);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce.current) setAuto(false);
  }, []);

  // auto-advance
  useEffect(() => {
    if (!auto || paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), SCENE_MS);
    return () => clearTimeout(t);
  }, [active, auto, paused]);

  // count the Friday number up each time scene 4 opens
  useEffect(() => {
    if (active !== 3 || reduce.current) { setCount(9); return; }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1100);
      setCount(Math.round(9 * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  const go = (i: number) => { setActive(i); setAuto(false); };

  return (
    <section id="story" className="band">
      <div className="section-head" data-reveal>
        <div className="eyebrow">What Circle8 is</div>
        <h2>Circle8 in five scenes.</h2>
        <p>What it does, and what it does for you. It plays on its own; tap a step to jump.</p>
      </div>

      <div className="story" data-reveal onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
        <div className="stage" aria-live="polite">
          <div className="stage-inner" key={active}>
            {active === 0 && <SceneCircle />}
            {active === 1 && <SceneMonday />}
            {active === 2 && <SceneWeek />}
            {active === 3 && <SceneFriday n={count} />}
            {active === 4 && <SceneFair />}
          </div>
          <div className="stage-caption">
            <span className="n">{active + 1} / {steps.length}</span>
            <span>{steps[active].label}</span>
          </div>
        </div>

        <ol className="story-steps">
          {steps.map((s, i) => {
            const isActive = i === active;
            return (
              <li key={s.label} className={isActive ? "story-step active" : "story-step"}>
                <button type="button" onClick={() => go(i)} aria-current={isActive ? "step" : undefined}>
                  <span className="num">{i + 1}</span>
                  <span className="lbl">{s.label}</span>
                </button>
                {isActive && (
                  <div className="story-body">
                    <p>{s.what}</p>
                    <p className="for-you"><b>For you:</b> {s.forYou}</p>
                  </div>
                )}
                <span className="bar" aria-hidden="true">
                  {isActive && auto && !paused && <i style={{ animationDuration: `${SCENE_MS}ms` }} />}
                  {isActive && (!auto || paused) && <i className="full" />}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
