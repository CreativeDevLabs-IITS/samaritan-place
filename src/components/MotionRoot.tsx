"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Page-wide motion: scroll reveals, counters, gentle parallax and a soft pointer glow.
// Everything switches off for visitors who prefer reduced motion; pointer effects need a mouse.
export function MotionRoot() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    const q = <T extends Element>(s: string) => Array.from(document.querySelectorAll<T>(s));

    const finalText = (el: HTMLElement) => {
      const end = Number(el.dataset.count);
      el.textContent = `${el.dataset.prefix ?? ""}${end}${el.dataset.suffix ?? ""}`;
    };

    if (reduce) {
      q<HTMLElement>("[data-reveal], [data-intro]").forEach((el) => (el.style.opacity = "1"));
      q<HTMLElement>("[data-count]").forEach(finalText);
      return;
    }

    const ctx = gsap.context(() => {
      // Reveal on scroll, staggered when several arrive together.
      gsap.set("[data-reveal]", { y: 28 });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 90%",
        once: true,
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.1, overwrite: true }),
      });

      // Number counters.
      q<HTMLElement>("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count);
        const state = { v: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
          once: true,
          onEnter: () =>
            gsap.to(state, {
              v: end,
              duration: 1.8,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = `${el.dataset.prefix ?? ""}${Math.round(state.v)}${el.dataset.suffix ?? ""}`;
              },
            }),
        });
      });

      // Slow parallax on marked images.
      q<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 8;
        gsap.fromTo(
          el,
          { yPercent: -amount },
          { yPercent: amount, ease: "none", scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true } },
        );
      });

      // Hero entrance.
      const intro = q<HTMLElement>("[data-intro]");
      if (intro.length) gsap.fromTo(intro, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.12, delay: 0.1 });
    });

    // Pointer effects (mouse only): a soft glow that follows the cursor, and magnetic buttons.
    let off = () => {};
    if (fine) {
      const glow = document.getElementById("glow");
      const gx = glow ? gsap.quickTo(glow, "x", { duration: 0.6, ease: "power3" }) : null;
      const gy = glow ? gsap.quickTo(glow, "y", { duration: 0.6, ease: "power3" }) : null;
      const onMove = (e: PointerEvent) => {
        gx?.(e.clientX);
        gy?.(e.clientY);
        if (glow) glow.style.opacity = "1";
        const m = (e.target as Element | null)?.closest?.<HTMLElement>("[data-magnet]");
        q<HTMLElement>("[data-magnet]").forEach((b) => {
          if (b !== m) gsap.to(b, { x: 0, y: 0, duration: 0.4, ease: "power3.out" });
        });
        if (m) {
          const r = m.getBoundingClientRect();
          gsap.to(m, { x: (e.clientX - (r.left + r.width / 2)) * 0.18, y: (e.clientY - (r.top + r.height / 2)) * 0.25, duration: 0.3, ease: "power3.out" });
        }
      };
      const onLeave = () => glow && (glow.style.opacity = "0");
      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
      off = () => {
        window.removeEventListener("pointermove", onMove);
        document.documentElement.removeEventListener("pointerleave", onLeave);
      };
    }

    // Images and fonts settle after load, so recompute trigger positions once they have.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 600);

    return () => {
      off();
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [pathname]);

  return <div id="glow" className="glow" aria-hidden="true" />;
}
