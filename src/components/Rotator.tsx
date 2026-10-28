"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { Left, Right } from "./icons";

const REDUCE = "(prefers-reduced-motion: reduce)";
const subscribeReduce = (cb: () => void) => {
  const m = window.matchMedia(REDUCE);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};

// Rotates through a few pieces of content. Autoplays (paused on hover/focus and for reduced motion);
// always has previous/next buttons and dots, so it works with a keyboard and a screen reader.
export function Rotator({ items, label, interval = 8000, className = "" }: { items: ReactNode[]; label: string; interval?: number; className?: string }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  // Treated as "reduce" on the server and until the browser reports otherwise, so nothing auto-plays by surprise.
  const reduce = useSyncExternalStore(subscribeReduce, () => window.matchMedia(REDUCE).matches, () => true);
  const box = useRef<HTMLDivElement>(null);
  const n = items.length;

  useEffect(() => {
    if (paused || reduce) return;
    const t = window.setTimeout(() => setI((v) => (v + 1) % n), interval);
    return () => window.clearTimeout(t);
  }, [i, paused, reduce, n, interval]);

  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <div
      ref={box}
      className={`rotator ${className}`}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="rotator__stage" aria-live={paused || reduce ? "polite" : "off"}>
        {items.map((it, k) => (
          <div key={k} className={`rotator__slide ${k === i ? "is-on" : ""}`} aria-hidden={k !== i} role="group" aria-label={`${k + 1} of ${n}`}>
            {it}
          </div>
        ))}
      </div>
      <div className="rotator__controls">
        <button type="button" className="icon-btn" onClick={() => go(-1)} aria-label="Previous">
          <Left size={20} />
        </button>
        <div className="rotator__dots">
          {items.map((_, k) => (
            <button key={k} type="button" className={`dot ${k === i ? "is-on" : ""}`} onClick={() => setI(k)} aria-label={`Show ${k + 1} of ${n}`} aria-current={k === i}>
              {k === i && !paused && !reduce && <span className="dot__bar" style={{ animationDuration: `${interval}ms` }} />}
            </button>
          ))}
        </div>
        <button type="button" className="icon-btn" onClick={() => go(1)} aria-label="Next">
          <Right size={20} />
        </button>
      </div>
    </div>
  );
}
