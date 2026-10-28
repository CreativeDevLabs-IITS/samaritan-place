"use client";

import Image from "next/image";
import { useState } from "react";
import { portalSlides } from "@/content/site";
import { Left, Right } from "./icons";

export function PortalSlider() {
  const [i, setI] = useState(0);
  const n = portalSlides.length;
  const go = (d: number) => setI((v) => (v + d + n) % n);
  const s = portalSlides[i];
  return (
    <div className="portal" role="group" aria-roledescription="carousel" aria-label="Activity Pro Family Portal slides">
      <div className="portal__stage">
        <Image key={s.src} src={s.src} alt={s.alt} width={s.w} height={s.h} sizes="(max-width: 900px) 100vw, 640px" className="portal__img" />
        <button type="button" className="icon-btn portal__nav portal__nav--prev" onClick={() => go(-1)} aria-label="Previous slide">
          <Left size={22} />
        </button>
        <button type="button" className="icon-btn portal__nav portal__nav--next" onClick={() => go(1)} aria-label="Next slide">
          <Right size={22} />
        </button>
      </div>
      <ul className="portal__thumbs">
        {portalSlides.map((p, k) => (
          <li key={p.src}>
            <button type="button" className={k === i ? "is-on" : ""} onClick={() => setI(k)} aria-label={`Show slide ${k + 1} of ${n}`} aria-current={k === i}>
              <Image src={p.src} alt="" width={110} height={62} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
