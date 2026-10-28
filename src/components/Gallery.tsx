"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/content/site";
import { Close, Left, Right } from "./icons";

// A grid of photos that open in an accessible lightbox (Esc closes, arrows move).
export function Gallery({ photos, className = "" }: { photos: Photo[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const n = photos.length;

  const close = useCallback(() => {
    setOpen(null);
    opener.current?.focus();
  }, []);
  const step = useCallback((d: number) => setOpen((v) => (v === null ? v : (v + d + n) % n)), [n]);

  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  return (
    <>
      <ul className={`gallery ${className}`}>
        {photos.map((ph, k) => (
          <li key={ph.src} data-reveal>
            <button
              type="button"
              className="gallery__item"
              onClick={(e) => {
                opener.current = e.currentTarget;
                setOpen(k);
              }}
              aria-label={`Enlarge photo: ${ph.alt}`}
            >
              <Image src={ph.src} alt={ph.alt} width={ph.w} height={ph.h} sizes="(max-width: 700px) 50vw, 25vw" />
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={close}>
          <button ref={closeBtn} type="button" className="lightbox__close icon-btn" onClick={close} aria-label="Close photo">
            <Close size={24} />
          </button>
          {n > 1 && (
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev icon-btn"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
            >
              <Left size={24} />
            </button>
          )}
          <figure onClick={(e) => e.stopPropagation()}>
            <Image src={photos[open].src} alt={photos[open].alt} width={photos[open].w} height={photos[open].h} sizes="90vw" />
            <figcaption>{photos[open].alt}</figcaption>
          </figure>
          {n > 1 && (
            <button
              type="button"
              className="lightbox__nav lightbox__nav--next icon-btn"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
            >
              <Right size={24} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
