import type { Metadata } from "next";
import Image from "next/image";
import { SubNav } from "@/components/SubNav";
import { External, Mail } from "@/components/icons";
import { DownloadCard, Heading, PageHero, Pic } from "@/components/ui";
import { downloads, friends, photos, site, volunteerRoles, volunteerSteps } from "@/content/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Work, volunteer or give at Samaritan Place in Saskatoon: careers with a team that feels like family, volunteer opportunities for youth and adults, and ways to donate to support our mission.",
  alternates: { canonical: "/get-involved/" },
};

const sections = [
  { id: "careers", label: "Careers" },
  { id: "volunteers", label: "Volunteers & Friends" },
  { id: "donors", label: "Donors" },
];

export default function GetInvolved() {
  return (
    <>
      <PageHero
        eyebrow="Staff & volunteers"
        title={
          <>
            Our people <em>make the difference</em>
          </>
        }
        lead={<p>The people who work at Samaritan Place are devoted, kind and skilled. Our care facility also benefits from the generous support of our community, businesses and volunteers.</p>}
      >
        <div className="phero__frame phero__frame--tall">
          <Pic photo={photos.iceCream} sizes="(max-width: 900px) 70vw, 360px" priority />
        </div>
      </PageHero>

      <SubNav items={sections} />

      <section id="careers" className="section anchor" aria-labelledby="careers-h">
        <div className="container careers">
          <div>
            <Heading eyebrow="Careers" title="This isn’t just a workplace. It’s home." id="careers-h">
              <p>It’s simple. Everyone deserves a home that provides comfort and meaning, shaped by their own needs, expectations and preferences.</p>
            </Heading>
            <div className="who" data-reveal>
              <div>
                <h3>Who we are</h3>
                <p>
                  Samaritan Place, an Emmanuel Health organization, provides long-term care to over 100 residents. In tradition of Catholic social justice teaching and service, we respond to the
                  unmet needs of the vulnerable and the communities we serve through compassionate innovative service and partnerships.
                </p>
              </div>
              <div>
                <h3>Who you are</h3>
                <p>
                  You are an empathetic team-oriented person, who truly represents our values: Commitment, Compassion, Holistic Care, and Innovation. You believe in the philosophy of resident
                  directed care.
                </p>
              </div>
            </div>
            <div className="work" data-reveal>
              <h3>Work with us</h3>
              <p>
                We look forward to hearing from you. Resumes will only be accepted by email to <a href={`mailto:${site.hrEmail}`}>{site.hrEmail}</a> or through our career page.
              </p>
              <a className="btn" href={site.careersPortal} target="_blank" rel="noopener noreferrer" data-magnet>
                Current job postings: Career Centre | Recruitment <External size={18} />
              </a>
            </div>
          </div>
          <figure className="careers__photo tilt" data-reveal>
            <Pic photo={photos.dietaryCook} sizes="(max-width: 900px) 70vw, 320px" />
            <figcaption>It is truly our people who make the difference.</figcaption>
          </figure>
        </div>
      </section>

      <section id="volunteers" className="section section--sand anchor" aria-labelledby="vol-h">
        <div className="container">
          <Heading eyebrow="Volunteers & Friends" title="Volunteers become our team members" id="vol-h">
            <p>
              Volunteers reinforce our commitment to providing person-centered care. You will play a key and vital role in our community supporting neighbors down the Samaritan Place streets!
            </p>
          </Heading>

          <div className="vol">
            <div data-reveal>
              <h3>Volunteer opportunities</h3>
              <p>Daytime, evenings and weekends, for both youth and adults, including:</p>
              <ul className="ticks">
                {volunteerRoles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <h3>New volunteer application process</h3>
              <ol className="steps">
                {volunteerSteps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <div className="vol__cta">
                <DownloadCard {...downloads.volunteer} note="Application Forms for Volunteers (Samaritan Place only)" />
                <a className="btn btn--ghost" href={`mailto:${site.lifeEmail}?subject=Volunteering`}>
                  <Mail size={20} /> Ask about volunteering
                </a>
              </div>
              <p className="vol__hospice">
                Interested in volunteering at the Hospice at Glengarda? Find the application on the Hospice webpage:{" "}
                <a href={site.hospiceVolunteer} target="_blank" rel="noopener noreferrer">
                  Volunteer - Hospice at Glengarda
                </a>
                .
              </p>
            </div>
          </div>

          <Heading eyebrow="Friends of Samaritan Place" title="With thanks to our community" >
            <p>We are very fortunate to have the support of our community and are very grateful for the help of our gifted and generous volunteers.</p>
          </Heading>
          <ul className="friends">
            {friends.map((f) => (
              <li key={f.name} data-reveal>
                {f.href ? (
                  <a href={f.href} target="_blank" rel="noopener noreferrer">
                    {f.name} <External size={16} />
                  </a>
                ) : (
                  <span>{f.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="donors" className="section section--teal anchor" aria-labelledby="donors-h">
        <div className="container donors">
          <div>
            <Heading eyebrow="Donors" title="Thank you to the organizations who support us" id="donors-h">
              <p>We are grateful for the donors who support our Mission and the work we do caring for persons in long term care.</p>
            </Heading>
            <p data-reveal>To make a donation to support the Samaritan Place mission, please visit CanadaHelps.</p>
            <a className="btn btn--light" href={site.donate} target="_blank" rel="noopener noreferrer" data-reveal data-magnet>
              Donate through CanadaHelps <External size={18} />
            </a>
          </div>
          <div className="donors__logo" data-reveal>
            <Image src="/images/mudita-media.png" alt="Mudita Media" width={300} height={83} />
          </div>
        </div>
      </section>
    </>
  );
}
