import Image from "next/image";
import type { ReactNode } from "react";
import { site, type Photo } from "@/content/site";
import { Download, Phone } from "./icons";

export function Pic({ photo, className = "", sizes, priority, parallax }: { photo: Photo; className?: string; sizes?: string; priority?: boolean; parallax?: number }) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.w}
      height={photo.h}
      sizes={sizes}
      priority={priority}
      className={className}
      data-parallax={parallax}
    />
  );
}

export function Heading({ eyebrow, title, children, id, center }: { eyebrow?: string; title: ReactNode; children?: ReactNode; id?: string; center?: boolean }) {
  return (
    <div className={`heading ${center ? "heading--center" : ""}`} data-reveal>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {children && <div className="heading__lead">{children}</div>}
    </div>
  );
}

export function DownloadCard({ title, href, type, size, note }: { title: string; href: string; type: string; size: string; note?: string }) {
  return (
    <a className="download" href={href} download data-reveal>
      <span className="download__icon">
        <Download size={22} />
      </span>
      <span className="download__body">
        <span className="download__title">{title}</span>
        {note && <span className="download__note">{note}</span>}
        <span className="download__meta">
          {type} · {size}
        </span>
      </span>
    </a>
  );
}

export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: ReactNode; lead?: ReactNode; children?: ReactNode }) {
  return (
    <section className="phero">
      <div className="container phero__grid">
        <div className="phero__text">
          <p className="eyebrow" data-intro>
            {eyebrow}
          </p>
          <h1 data-intro>{title}</h1>
          {lead && (
            <div className="phero__lead" data-intro>
              {lead}
            </div>
          )}
        </div>
        {children && <div className="phero__art">{children}</div>}
      </div>
    </section>
  );
}

export function TourBand() {
  return (
    <section className="tour" aria-labelledby="tour-h">
      <div className="container tour__inner" data-reveal>
        <div>
          <p className="eyebrow eyebrow--light">Visit us</p>
          <h2 id="tour-h">Home tours are offered weekly.</h2>
          <p>
            Please call Reception at <span className="nw">{site.tourPhone}</span> to book a tour, or email <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
        <a className="btn btn--light" href={site.tourPhoneHref} data-magnet>
          <Phone size={20} /> Book a home tour
        </a>
      </div>
    </section>
  );
}
