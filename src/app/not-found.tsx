import Link from "next/link";
import { Arrow } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="section notfound">
      <div className="container">
        <p className="eyebrow">Page not found</p>
        <h1>We couldn’t find that page.</h1>
        <p>It may have moved. Try one of these, or call Reception at (306) 986-1460.</p>
        <div className="hero__cta">
          <Link className="btn" href="/">
            Go to the home page <Arrow size={20} />
          </Link>
          <Link className="btn btn--ghost" href="/residents/">
            Resident life
          </Link>
          <Link className="btn btn--ghost" href="/contact/">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
