import type { Metadata } from "next";
import { SubNav } from "@/components/SubNav";
import { Rotator } from "@/components/Rotator";
import { Heading, PageHero, Pic, TourBand } from "@/components/ui";
import { difference, leaders, philosophy, photos, principles, values } from "@/content/site";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Samaritan Place's mission, vision and values, our household model philosophy of care, and the leadership team. A vital community of health, healing and hope in the tradition of Catholic social justice teaching.",
  alternates: { canonical: "/about/" },
};

const sections = [
  { id: "mission", label: "Mission" },
  { id: "philosophy", label: "Philosophy of Care" },
  { id: "leadership", label: "Leadership" },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Our mission, <em>values</em> and way of caring
          </>
        }
        lead={<p>Samaritan Place provides long-term care in the tradition of Catholic Social Justice teaching and service.</p>}
      >
        <div className="phero__frame phero__frame--wide">
          <Pic photo={photos.patio} sizes="(max-width: 900px) 90vw, 560px" priority />
        </div>
      </PageHero>

      <SubNav items={sections} />

      <section id="mission" className="section anchor" aria-labelledby="mission-h">
        <div className="container">
          <div className="mv">
            <div className="mv__card mv__card--mission" data-reveal>
              <p className="eyebrow eyebrow--light">Mission</p>
              <h2 id="mission-h">Guided by the healing ministry of Jesus Christ</h2>
              <p>Samaritan Place provides long-term care in the tradition of Catholic Social Justice teaching and service.</p>
            </div>
            <div className="mv__card mv__card--vision" data-reveal>
              <p className="eyebrow">Vision</p>
              <p className="mv__big">A vital community of health, healing and hope.</p>
            </div>
          </div>

          <Heading eyebrow="Values" title="What we stand for" />
          <div className="values">
            {values.map((v, k) => (
              <article key={v.name} className="value tilt" data-reveal>
                <span className="value__num" aria-hidden="true">
                  {k + 1}
                </span>
                <h3>{v.name}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="philosophy" className="section section--sand anchor" aria-labelledby="phil-h">
        <div className="container">
          <Heading eyebrow="Philosophy of care" title="The household is each resident’s home and sanctuary" id="phil-h">
            {philosophy.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </Heading>
          <ol className="principles">
            {principles.map((p, k) => (
              <li key={p.title} className="principle" data-reveal>
                <span className="principle__num" aria-hidden="true">
                  {String(k + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="leadership" className="section anchor" aria-labelledby="lead-h">
        <div className="container">
          <Heading eyebrow="Leadership" title="Our leadership team" id="lead-h">
            <p>
              Our team is devoted to operating Samaritan Place as a best-in-breed long-term care facility for the benefit of the community, staff, and above all our residents and their
              families.
            </p>
          </Heading>
          <ul className="leaders">
            {leaders.map((l) => (
              <li key={l.name} className="leader tilt" data-reveal>
                <Image src={l.photo.src} alt={l.photo.alt} width={l.photo.w} height={l.photo.h} className="leader__photo" />
                <h3>{l.name}</h3>
                <p className="leader__role">{l.role}</p>
                {l.org && <p className="leader__org">{l.org}</p>}
              </li>
            ))}
          </ul>
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

      <TourBand />
    </>
  );
}
