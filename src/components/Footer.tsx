import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";
import { Facebook, Mail, Phone, Pin } from "./icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <Image src="/images/logo.png" alt="Samaritan Place" width={281} height={51} />
          </div>
          <p>Long-term care in the tradition of Catholic social justice teaching and service.</p>
          <div className="footer__operator">
            <span>Samaritan Place is operated by</span>
            <Image src="/images/emmanuel-health.png" alt="Emmanuel Health, a Catholic Health Organization" width={254} height={105} />
          </div>
        </div>

        <div>
          <h2 className="footer__h">Visit</h2>
          <ul className="footer__list">
            <li>
              <Pin size={18} />
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`} target="_blank" rel="noopener noreferrer">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.province} {site.address.postal}
              </a>
            </li>
            <li>
              <Phone size={18} /> <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <Mail size={18} /> <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Facebook size={18} />
              <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                Find us on Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer__h">Explore</h2>
          <ul className="footer__links">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <a href={site.donate} target="_blank" rel="noopener noreferrer">
                Donate
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer__legal">
        <p>© Copyright Samaritan Place Corp. All Rights Reserved.</p>
        <p>
          <a href="/docs/privacy-and-confidentiality-policy.pdf">Privacy and Confidentiality Policy</a>
        </p>
      </div>
    </footer>
  );
}
