import type { IconName } from "@/content/site";

/* Eight shops around a crossroads, joined in a ring. Every few seconds a new pair lights up and a gift travels
   between them: that is the weekly match. Positions are on an ellipse (cx 320, cy 300, rx 240, ry 165). */
const shops: { name: string; icon: IconName; x: number; y: number; awning: string }[] = [
  { name: "Café", icon: "cafe", x: 320, y: 135, awning: "#12715B" },
  { name: "Gym", icon: "gym", x: 490, y: 183, awning: "#B7791F" },
  { name: "Salon", icon: "salon", x: 560, y: 300, awning: "#E3F1EB" },
  { name: "Florist", icon: "florist", x: 490, y: 417, awning: "#12715B" },
  { name: "Clinic", icon: "clinic", x: 320, y: 465, awning: "#E3F1EB" },
  { name: "Bookshop", icon: "book", x: 150, y: 417, awning: "#12715B" },
  { name: "Tailor", icon: "tailor", x: 80, y: 300, awning: "#E3F1EB" },
  { name: "Bakery", icon: "bakery", x: 150, y: 183, awning: "#B7791F" },
];

/* The deals that cycle. `path` runs from shop a to shop b; `label` sits at (lx, ly). */
const deals = [
  { a: 7, b: 1, path: "M150 183Q320 290 490 183", label: "free coffee ⇄ free week", lx: 320, ly: 268 },
  { a: 2, b: 5, path: "M560 300Q380 360 150 417", label: "free treatment ⇄ free book", lx: 372, ly: 405 },
  { a: 0, b: 3, path: "M320 135Q470 240 490 417", label: "free coffee ⇄ free flowers", lx: 420, ly: 300 },
  { a: 6, b: 4, path: "M80 300Q150 330 320 465", label: "free hem ⇄ free check-up", lx: 200, ly: 340 },
];
const SLOT = 4; // seconds each deal is shown
const CYCLE = deals.length * SLOT;

const label = { fontSize: 11, fill: "#5E6E68", textAnchor: "middle", style: { fontFamily: "var(--mono)" } } as const;

function Gift() {
  return (
    <>
      <circle r="17" fill="#FFFFFF" stroke="#12715B" strokeWidth="1.5" />
      <rect x="-8" y="-4" width="16" height="12" rx="1.5" fill="#B7791F" />
      <rect x="-10" y="-8" width="20" height="5" rx="1.5" fill="#B7791F" stroke="#172220" strokeWidth="0.8" />
      <path d="M0-8V8M-4-8c0-3 4-3 4 0c0-3 4-3 4 0" fill="none" stroke="#FFFFFF" strokeWidth="1.4" />
    </>
  );
}

function DealLabel({ d }: { d: (typeof deals)[number] }) {
  const w = d.label.length * 6.6 + 24;
  return (
    <>
      <rect x={d.lx - w / 2} y={d.ly - 14} width={w} height="20" rx="10" fill="#FFFFFF" stroke="#D6DFDB" />
      <text x={d.lx} y={d.ly} {...label}>{d.label}</text>
    </>
  );
}

export function HeroArt() {
  return (
    <svg
      className="hero-art"
      viewBox="28 88 584 440"
      role="img"
      aria-label="Eight shops around a street corner joined in a circle; every few seconds two of them are matched and a gift travels between them"
    >
      {/* roads */}
      <rect x="130" y="286" width="380" height="28" fill="#EDF3F0" />
      <rect x="306" y="182" width="28" height="238" fill="#EDF3F0" />
      <path d="M140 300H500M320 190V412" stroke="#D6DFDB" strokeWidth="1.5" strokeDasharray="8 8" />
      {/* trees */}
      <circle cx="262" cy="258" r="9" fill="#E3F1EB" stroke="#12715B" strokeWidth="1.2" />
      <circle cx="378" cy="342" r="9" fill="#E3F1EB" stroke="#12715B" strokeWidth="1.2" />
      {/* the circle, slowly flowing */}
      <ellipse className="ring" cx="320" cy="300" rx="240" ry="165" fill="none" stroke="#12715B" strokeWidth="2" strokeDasharray="7 7" opacity="0.7" />

      {/* animated deals: each group fades in for its slot; the gift rides the path (SMIL, no JavaScript) */}
      <g className="deals">
        {deals.map((d, i) => (
          <g key={i} className="deal" style={{ animationDelay: `${i * SLOT}s` }}>
            <circle cx={shops[d.a].x} cy={shops[d.a].y} r="52" fill="none" stroke="#12715B" strokeWidth="1.5" opacity="0.35" />
            <circle cx={shops[d.b].x} cy={shops[d.b].y} r="52" fill="none" stroke="#12715B" strokeWidth="1.5" opacity="0.35" />
            <path id={`deal-path-${i}`} d={d.path} fill="none" stroke="#12715B" strokeWidth="4" strokeLinecap="round" />
            <DealLabel d={d} />
            <g className="marker">
              <Gift />
              <animateMotion
                dur={`${CYCLE}s`}
                begin={`${i * SLOT}s`}
                repeatCount="indefinite"
                calcMode="linear"
                keyPoints="0;1;1"
                keyTimes={`0;${(SLOT * 0.75) / CYCLE};1`}
              >
                <mpath href={`#deal-path-${i}`} />
              </animateMotion>
            </g>
          </g>
        ))}
      </g>

      {/* static version for people who prefer reduced motion */}
      <g className="deal-static">
        <path d={deals[0].path} fill="none" stroke="#12715B" strokeWidth="4" strokeLinecap="round" />
        <g transform="translate(320 237)"><Gift /></g>
        <DealLabel d={deals[0]} />
      </g>

      {shops.map((s) => (
        <g key={s.name}>
          <g transform={`translate(${s.x - 42} ${s.y - 35})`}>
            <use href="#sf" width="84" height="70" />
            <use href="#sf-awning" width="84" height="70" fill={s.awning} />
            <use href={`#ic-${s.icon}`} x="34" y="4" width="16" height="16" color="#172220" />
          </g>
          <text x={s.x} y={s.y + 50} {...label}>{s.name}</text>
        </g>
      ))}
    </svg>
  );
}
