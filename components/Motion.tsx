"use client";

import { useEffect } from "react";

/* One small runtime for all scroll-driven motion:
   - marks <html class="js"> so reveal styles only apply when JavaScript runs (no JS = everything visible),
   - reveals [data-reveal] elements as they enter the viewport (stagger with style="--d: 120ms"),
   - counts [data-count] numbers up from 0 when they are revealed,
   - does none of it for people who prefer reduced motion. */
export function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // leave the page at rest

    const root = document.documentElement;
    const pending = new Set<HTMLElement>(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const loose = Array.from(document.querySelectorAll<HTMLElement>("[data-count]")).filter((el) => !el.closest("[data-reveal]"));
    loose.forEach((el) => pending.add(el));

    const countUp = (el: HTMLElement) => {
      if (el.dataset.counted) return;
      el.dataset.counted = "1";
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target)) return;
      const suffix = el.dataset.suffix ?? "";
      const duration = 900;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const reveal = (el: HTMLElement) => {
      if (!pending.has(el)) return;
      pending.delete(el);
      el.classList.add("in");
      if (el.dataset.count !== undefined) countUp(el);
      el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
    };

    const inView = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.92 && r.bottom > 0;
    };

    // Reveal styles apply from here on. Anything already on screen shows at once (staggered by --d).
    root.classList.add("js");
    pending.forEach((el) => { if (inView(el)) reveal(el); });

    if (typeof IntersectionObserver === "undefined") {
      const onScroll = () => pending.forEach((el) => { if (inView(el)) reveal(el); });
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) { reveal(e.target as HTMLElement); io.unobserve(e.target); }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    pending.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
