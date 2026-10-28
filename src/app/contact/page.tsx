import type { Metadata } from "next";
import { Directory } from "@/components/Directory";
import { Facebook, Mail, Phone, Pin } from "@/components/icons";
import { Heading, PageHero, Pic } from "@/components/ui";
import { photos, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Samaritan Place at 375 Cornish Road, Saskatoon, SK. Phone (306) 986-1460. Staff extensions and direct lines, and how to book a home tour.",
  alternates: { canonical: "/contact/" },
};

const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Come and <em>see us</em>
          </>
        }
        lead={<p>Home tours are offered weekly. Please call Reception at <span className="nw">{site.tourPhone}</span> to book a tour.</p>}
      >
        <div className="phero__frame phero__frame--wide">
          <Pic photo={photos.buildingStreet} sizes="(max-width: 900px) 90vw, 560px" priority />
        </div>
      </PageHero>

      <section className="section" aria-labelledby="info-h">
        <div className="container contact">
          <div className="contact__cards">
            <h2 id="info-h" className="sr">
              Contact information
            </h2>
            <a className="ccard" href={mapHref} target="_blank" rel="noopener noreferrer" data-reveal>
              <Pin size={26} />
              <span>
                <strong>Visit</strong>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.province}
                <br />
                {site.address.postal}
                <em>Open in maps</em>
              </span>
            </a>
            <a className="ccard" href={site.phoneHref} data-reveal>
              <Phone size={26} />
              <span>
                <strong>Phone</strong>
                {site.phone}
                <em>Fax: {site.fax}</em>
              </span>
            </a>
            <a className="ccard" href={`mailto:${site.email}`} data-reveal>
              <Mail size={26} />
              <span>
                <strong>Email</strong>
                {site.email}
              </span>
            </a>
            <a className="ccard" href={site.facebook} target="_blank" rel="noopener noreferrer" data-reveal>
              <Facebook size={26} />
              <span>
                <strong>Facebook</strong>
                Find us on Facebook
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="section section--sand" aria-labelledby="dir-h">
        <div className="container">
          <Heading eyebrow="Extensions and direct lines" title="Who to call" id="dir-h">
            <p>Call Reception at <span className="nw">{site.phone}</span> and give the extension, or use a direct line where one is listed.</p>
          </Heading>
          <div data-reveal>
            <Directory />
          </div>
        </div>
      </section>
    </>
  );
}
