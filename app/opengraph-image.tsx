import { ImageResponse } from "next/og";
import { site } from "@/content/site";

/* Social preview card, generated at build time. */
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const dots = Array.from({ length: 8 }, (_, i) => {
  const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
  return { x: 60 + 44 * Math.cos(a), y: 60 + 44 * Math.sin(a), mark: i === 0 };
});

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#F5F8F6",
          color: "#172220",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ position: "relative", width: 120, height: 120, display: "flex" }}>
            {dots.map((d, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: d.x - 11,
                  top: d.y - 11,
                  width: 22,
                  height: 22,
                  borderRadius: 11,
                  background: d.mark ? "#B7791F" : "#12715B",
                }}
              />
            ))}
          </div>
          <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>{site.tagline}</div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "#3E4D48", maxWidth: 1000 }}>{site.definition}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#0B5343" }}>
          <div style={{ width: 12, height: 12, borderRadius: 6, background: "#12715B" }} />
          Free to join · No app store · No meetings
        </div>
      </div>
    ),
    size,
  );
}
