import Link from "next/link";
import { Rotator } from "@/components/Rotator";
import { Arrow, Phone } from "@/components/icons";
import { DownloadCard, Heading, Pic, TourBand } from "@/components/ui";
import { difference, downloads, photos, quotes, site, stats, suiteTypes } from "@/content/site";

const tiles = [
  {
    href: "/residents/#suites",
    title: "Suites",
    text: "Samaritan Place accommodations are bright, modern, welcoming and well-appointed.",
    photo: suiteTypes[0].photos[0],
  },
  {
    href: "/residents/#common-areas",
    title: "Common Areas",
    text: "Our residence offers a wide variety of meeting areas, dining areas, quiet places to read and learn and not-so-quiet places like our second floor pub.",
    photo: photos.mass,
  },
  {
    href: "/residents/#life-enhancement",
    title: "Events & Activities",
    text: "From starting our days with weights, drumming circle or balloon volleyball to spa days, movies and excursions, at Samaritan Place we are living life to the fullest.",
    photo: photos.exerciseLeader,
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__text">
            <p className="eyebrow" data-intro>
              Long-term care · Saskatoon, Saskatchewan
            </p>
            <h1 data-intro>
              A vital community of <em>health, healing and hope.</em>
            </h1>
            <p className="hero__lead" data-intro>
              Samaritan Place provides long-term care to over 100 residents, in the tradition of Catholic social justice teaching and service.
            </p>
            <div className="hero__cta" data-intro>
              <a className="btn" href={site.tourPhoneHref} data-magnet>
                <Phone size={20} /> Book a home tour
              </a>
              <Link className="btn btn--ghost" href="/residents/">
                Explore the home <Arrow size={20} />
              </Link>
            </div>
            <p className="hero__note" data-intro>
              Home tours are offered weekly. Please call Reception at <span className="nw">{site.tourPhone}</span> to book a tour.
            </p>
          </div>

          <div className="hero__art" aria-hidden="false">
            <div className="hero__main">
              <Pic photo={photos.gardenAerial} sizes="(max-width: 900px) 90vw, 560px" priority parallax={5} />
            </div>
            <div className="hero__portrait">
              <Pic photo={photos.iceCream} sizes="220px" />
            </div>
            <div className="hero__circle">
              <Pic photo={photos.staffResident} sizes="170px" />
            </div>
            <p className="hero__badge">
              The only care facility in Saskatchewan offering <strong>companion suites</strong>
            </p>
          </div>
        </div>
        <svg className="hero__leaf" viewBox="0 0 200 200" aria-hidden="true">
          <path d="M20 180C20 90 90 20 180 20c0 90-70 160-160 160Z" />
          <path d="M20 180 120 80" />
        </svg>
      </section>

      <section className="stats" aria-label="Samaritan Place at a glance">
        <div className="container stats__grid">
          {stats.map((s) => (
            <div key={s.label} className="stat" data-reveal>
              <p className="stat__num">
                <span data-count={s.value} data-prefix={s.prefix ?? ""} data-suffix={s.suffix ?? ""}>
                  {s.prefix ?? ""}
                  {s.value}
                  {s.suffix ?? ""}
                </span>
              </p>
              <p className="stat__label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="explore-h">
        <div className="container">
          <Heading eyebrow="Resident life" title="A home with streets, neighbourhoods and always something going on" id="explore-h" />
          <div className="tiles">
            {tiles.map((t) => (
              <Link key={t.href} href={t.href} className="tile tilt" data-reveal>
                <span className="tile__img">
                  <Pic photo={t.photo} sizes="(max-width: 900px) 90vw, 360px" />
                </span>
                <span className="tile__body">
                  <span className="tile__title">{t.title}</span>
                  <span className="tile__text">{t.text}</span>
                  <span className="tile__more">
                    Learn more <Arrow size={18} />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--teal" aria-labelledby="diff-h">
        <div className="container diff">
          <Heading eyebrow="The Samaritan Place Difference" title="What makes this home different" id="diff-h" />
          <div data-reveal>
            <Rotator
              label="The Samaritan Place Difference"
              className="rotator--statement"
              interval={9000}
              items={difference.map((d) => (
                <p key={d} className="statement">
                  {d}
                </p>
              ))}
            />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="companion-h">
        <div className="container feature">
          <div className="feature__text">
            <Heading eyebrow="Companion suites" title="Home for two" id="companion-h" />
            <p data-reveal>Unique to Samaritan Place, we offer 20 dual-living companion suites, designed to become home for two people who wish to remain together.</p>
            <p data-reveal>
              Samaritan Place is the only care facility in Saskatchewan offering companion suites, enabling couples who require different levels of care to live here together.
            </p>
            <div className="feature__cta" data-reveal>
              <a className="btn" href={downloads.companion.href} download>
                Companion Living Brochure
              </a>
              <Link className="btn btn--ghost" href="/residents/#suites">
                See the suites <Arrow size={20} />
              </Link>
            </div>
          </div>
          <figure className="feature__art tilt" data-reveal>
            <Pic photo={suiteTypes[0].photos[0]} sizes="(max-width: 900px) 90vw, 480px" />
            <figcaption>
              <q>{quotes[0].text}</q>
              <span>
                {quotes[0].who}, {quotes[0].role}
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="memos-h">
        <div className="container">
          <Heading eyebrow="Residents and families" title="Important Memos, Forms, and Updates" id="memos-h" />
          <div className="downloads">
            <DownloadCard {...downloads.newsletter} />
            <DownloadCard {...downloads.outing} />
            <DownloadCard {...downloads.booking} />
          </div>
        </div>
      </section>

      <section className="section" aria-label="What residents say">
        <div className="container quote-wrap" data-reveal>
          <Rotator
            label="What residents say"
            className="rotator--quote"
            interval={10000}
            items={quotes.map((q) => (
              <figure key={q.text} className="quote">
                <blockquote>{q.text}</blockquote>
                <figcaption>
                  <strong>{q.who}</strong>
                  <span>{q.role}</span>
                </figcaption>
              </figure>
            ))}
          />
        </div>
      </section>

      <TourBand />
    </>
  );
}
