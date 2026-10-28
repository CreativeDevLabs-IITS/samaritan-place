"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { suiteTypes } from "@/content/site";
import { Gallery } from "./Gallery";

// Tabs for the three kinds of suite, each with what is included and its photos.
export function SuiteExplorer() {
  const [active, setActive] = useState(0);
  const base = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent, k: number) => {
    const n = suiteTypes.length;
    let next = k;
    if (e.key === "ArrowRight") next = (k + 1) % n;
    else if (e.key === "ArrowLeft") next = (k - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  const s = suiteTypes[active];
  return (
    <div className="explorer">
      <div className="tabs" role="tablist" aria-label="Types of suite">
        {suiteTypes.map((t, k) => (
          <button
            key={t.id}
            ref={(el) => {
              tabs.current[k] = el;
            }}
            id={`${base}-tab-${t.id}`}
            role="tab"
            type="button"
            aria-selected={k === active}
            aria-controls={`${base}-panel`}
            tabIndex={k === active ? 0 : -1}
            className={`tab ${k === active ? "is-on" : ""}`}
            onClick={() => setActive(k)}
            onKeyDown={(e) => onKey(e, k)}
          >
            <span className="tab__count">{t.count}</span>
            <span className="tab__label">{t.label}</span>
          </button>
        ))}
      </div>

      <div id={`${base}-panel`} role="tabpanel" aria-labelledby={`${base}-tab-${s.id}`} className="explorer__panel" key={s.id}>
        <div className="explorer__text">
          <p>{s.blurb}</p>
          <ul className="ticks">
            {s.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        <Gallery photos={s.photos} className="gallery--suite" />
      </div>
    </div>
  );
}
