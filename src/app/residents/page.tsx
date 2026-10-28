import type { Metadata } from "next";
import Link from "next/link";
import { Gallery } from "@/components/Gallery";
import { Neighbourhoods } from "@/components/Neighbourhoods";
import { PortalSlider } from "@/components/PortalSlider";
import { SubNav } from "@/components/SubNav";
import { SuiteExplorer } from "@/components/SuiteExplorer";
import { Arrow, External, Mail, Phone } from "@/components/icons";
import { DownloadCard, Heading, PageHero, Pic, TourBand } from "@/components/ui";
import { commonAreas, downloads, photos, quotes, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resident Life",
  description:
    "Suites, common areas, events and activities at Samaritan Place in Saskatoon: bright modern suites, companion suites for couples, a chapel, a pub, gardens and something happening every day.",
  alternates: { canonical: "/residents/" },
};

const sections = [
  { id: "suites", label: "Suites" },
  { id: "common-areas", label: "Common Areas" },
  { id: "life-enhancement", label: "Life Enhancement" },
  { id: "information", label: "Information for Residents" },
];

const activityPhotos = [photos.exerciseLeader, photos.painting, photos.mass2, photos.petTherapy, photos.therapeuticRec, photos.exerciseGroup2];

export default function Residents() {
  return (
    <>
      <PageHero
        eyebrow="Resident life"
        title={
          <>
            Suites &amp; <em>amenities</em>
          </>
        }
        lead={<p>Our accommodations are bright, modern, welcoming and well-appointed, and there is always something going on.</p>}
      >
        <div className="phero__frame">
          <Pic photo={photos.gardenAerial} sizes="(max-width: 900px) 90vw, 520px" priority />
        </div>
      </PageHero>

      <SubNav items={sections} />

      <section id="suites" className="section anchor" aria-labelledby="suites-h">
        <div className="container">
          <Heading eyebrow="Suites" title="Neighbourhoods and streets, not wings and halls" id="suites-h">
            <p>
              In keeping with our philosophy, our care home doesn’t have wings and halls, but instead has neighbourhoods and streets. We have two neighbourhoods, Park on the second floor and
              Prairie on the first floor. Each neighbourhood is home to 38 residents; 28 are single suites and 10 are companion suites.
            </p>
            <p>We have two cottages, Candle and Emma, located on the first floor. The cottages are secure areas. There are 12 single suites in each cottage.</p>
          </Heading>
          <div data-reveal>
            <Neighbourhoods />
          </div>

          <Heading eyebrow="The suites" title="Three ways to call it home" />
          <div data-reveal>
            <SuiteExplorer />
          </div>

          <div className="callout" data-reveal>
            <div>
              <h3>Companion living</h3>
              <p>Unique to Samaritan Place, we offer 20 dual-living companion suites, designed to become home for two people who wish to remain together.</p>
            </div>
            <a className="btn" href={downloads.companion.href} download>
              Companion Living Brochure ({downloads.companion.type}, {downloads.companion.size})
            </a>
          </div>

          <div className="tours" data-reveal>
            <h3>Tours</h3>
            <p>
              Samaritan Place offers weekly tours. To book a tour, please contact Reception at <span className="nw">(306) 986-1460 ext. 1401</span>. You can also email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> to book a tour of our facility.
            </p>
            <div className="tours__cta">
              <a className="btn" href={site.tourPhoneHref}>
                <Phone size={20} /> Call to book a tour
              </a>
              <a className="btn btn--ghost" href={`mailto:${site.email}?subject=Tour%20request`}>
                <Mail size={20} /> Email Reception
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="common-areas" className="section section--sand anchor" aria-labelledby="areas-h">
        <div className="container">
          <Heading eyebrow="Common areas" title="Places to gather, pray, dine and just bond over a cup of coffee" id="areas-h">
            <p>
              Our vision is to connect relationships, experiences and cultures that will come together in this unique and spirited community. To this end, our home includes many common areas
              where residents can dine privately with their visitors, pray and attend mass, enjoy group social events or just bond over cards and a cup of coffee.
            </p>
          </Heading>

          <div className="areas">
            {commonAreas.map((a) => (
              <article key={a.id} className="area tilt" data-reveal>
                <span className="area__num" aria-hidden="true">
                  {String(commonAreas.indexOf(a) + 1).padStart(2, "0")}
                </span>
                <h3>{a.name}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
          <p className="areas__booking" data-reveal>
            To book space, please submit a room booking form.{" "}
            <a href={downloads.booking.href} download>
              Room Booking Form ({downloads.booking.type}, {downloads.booking.size})
            </a>
          </p>

          <div className="split">
            <div data-reveal>
              <h3>Outdoor spaces</h3>
              <p>
                Samaritan Place also includes some beautiful outdoor areas and gardens for residents to enjoy, including terraces, benches, a gazebo, flower gardens and a gas grill.
              </p>
            </div>
            <div className="split__photos" data-reveal>
              <Pic photo={photos.gazebo} sizes="(max-width: 900px) 90vw, 520px" />
              <Pic photo={photos.gardenWide} sizes="(max-width: 900px) 90vw, 520px" />
            </div>
          </div>
        </div>
      </section>

      <section id="life-enhancement" className="section anchor" aria-labelledby="life-h">
        <div className="container">
          <Heading eyebrow="Life Enhancement" title="There is always something happening" id="life-h">
            <p>
              There is always something happening at Samaritan Place! From morning exercises to movie nights and excursions, we believe in staying active and having fun. Families can see the
              full month’s schedule of events through the Family Portal below.
            </p>
          </Heading>
          <Gallery photos={activityPhotos} className="gallery--wide" />

          <div className="portal-wrap">
            <div className="portal-wrap__text" data-reveal>
              <p className="eyebrow">Activity Pro Family Portal</p>
              <h3>Stay close to what is happening</h3>
              <p>
                Families wishing to have a snapshot of resident programming, access the monthly calendar, or review the menu, are welcome to sign on for the Family Portal. To gain access,
                please connect with Sarah Pickering at <span className="nw">306-986-1462</span> or <a href={`mailto:${site.lifeEmail}`}>{site.lifeEmail}</a>.
              </p>
              <p>Registered families can log in to the Family Portal at:</p>
              <a className="btn btn--ghost" href={site.portalLogin} target="_blank" rel="noopener noreferrer">
                online.activitypro.net/users/login/emmanuel <External size={18} />
              </a>
            </div>
            <div data-reveal>
              <PortalSlider />
            </div>
          </div>
        </div>
      </section>

      <section id="information" className="section section--teal anchor" aria-labelledby="info-h">
        <div className="container">
          <Heading eyebrow="Information for residents" title="Applying, moving in and what to expect" id="info-h">
            <p>All applications, assignments and transfers for Saskatoon care homes are managed by the Saskatchewan Health Authority.</p>
          </Heading>
          <div className="info">
            <a className="btn btn--light" href={site.healthAuthority} target="_blank" rel="noopener noreferrer" data-reveal>
              How to apply <External size={18} />
            </a>
            <div className="info__book" data-reveal>
              <h3>Resident Handbook</h3>
              <p>
                In the Resident Information Handbook, you will find comprehensive residence details including information on our care, local services, a move-in guide, an introduction to our Care
                Services team, rules and regulations and details on our care philosophy.
              </p>
              <p className="info__welcome">We look forward to welcoming you into our home!</p>
              <div className="downloads downloads--light">
                <DownloadCard {...downloads.handbook} />
                <DownloadCard {...downloads.privacy} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="A resident's words">
        <div className="container pull" data-reveal>
          <q>{quotes[1].text}</q>
          <span>
            {quotes[1].who}, {quotes[1].role}
          </span>
          <Link className="btn btn--ghost" href="/about/#philosophy">
            Our philosophy of care <Arrow size={20} />
          </Link>
        </div>
      </section>

      <TourBand />
    </>
  );
}
