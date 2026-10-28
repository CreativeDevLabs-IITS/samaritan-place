"use client";

import { useState } from "react";
import { neighbourhoods } from "@/content/site";

// A simple cross-section of the building. Pick a neighbourhood or cottage to see how many suites it has.
export function Neighbourhoods() {
  const [id, setId] = useState("park");
  const sel = neighbourhoods.find((n) => n.id === id)!;
  const block = (nid: string) => {
    const n = neighbourhoods.find((x) => x.id === nid)!;
    return (
      <button
        type="button"
        className={`block block--${n.kind.toLowerCase()} ${id === nid ? "is-on" : ""}`}
        onClick={() => setId(nid)}
        aria-pressed={id === nid}
        aria-label={`${n.name} ${n.kind.toLowerCase()}, ${n.floor.toLowerCase()}`}
      >
        <span className="block__kind">{n.kind}</span>
        <span className="block__name">{n.name}</span>
      </button>
    );
  };

  return (
    <div className="hoods">
      <div className="hoods__building" role="group" aria-label="Samaritan Place floors">
        <div className="floor">
          <span className="floor__label">Second floor</span>
          <div className="floor__row">{block("park")}</div>
        </div>
        <div className="floor">
          <span className="floor__label">First floor</span>
          <div className="floor__row">
            {block("prairie")}
            {block("candle")}
            {block("emma")}
          </div>
        </div>
        <div className="hoods__ground" aria-hidden="true" />
      </div>

      <div className="hoods__detail" aria-live="polite">
        <p className="eyebrow">
          {sel.kind} · {sel.floor}
        </p>
        <h3>{sel.name}</h3>
        <p>{sel.text}</p>
        <div className="dots" role="img" aria-label={`${sel.single} single suites${sel.companion ? ` and ${sel.companion} companion suites` : ""}`}>
          {Array.from({ length: sel.single }, (_, k) => (
            <span key={`s${k}`} className="suite suite--single" style={{ animationDelay: `${k * 18}ms` }} />
          ))}
          {Array.from({ length: sel.companion }, (_, k) => (
            <span key={`c${k}`} className="suite suite--companion" style={{ animationDelay: `${(sel.single + k) * 18}ms` }} />
          ))}
        </div>
        <ul className="legend">
          <li>
            <span className="suite suite--single" /> {sel.single} single suites
          </li>
          {sel.companion > 0 && (
            <li>
              <span className="suite suite--companion" /> {sel.companion} companion suites
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
