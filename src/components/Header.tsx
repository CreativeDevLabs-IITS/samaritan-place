"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { Chevron, Close, Menu, Phone } from "./icons";

export function Header() {
  const pathname = usePathname();
  // The menu is "open" only for the page it was opened on, so it closes by itself after navigating.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the drawer is open; Escape closes it.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenPath(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname.startsWith(href.replace(/#.*$/, "")) && href !== "/";

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header__bar container">
        <Link href="/" className="header__logo" aria-label="Samaritan Place, home">
          <Image src="/images/logo.png" alt="Samaritan Place" width={281} height={51} priority />
        </Link>

        <nav className="nav" aria-label="Main">
          <ul className="nav__list">
            {nav.map((item) => (
              <li key={item.href} className={`nav__item ${item.sub.length ? "has-sub" : ""}`}>
                <Link href={item.href} className={`nav__link ${isActive(item.href) ? "is-active" : ""}`}>
                  {item.label}
                  {item.sub.length > 0 && <Chevron size={14} />}
                </Link>
                {item.sub.length > 0 && (
                  <ul className="nav__sub">
                    {item.sub.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href}>{s.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn--small header__cta" href={site.phoneHref}>
          <Phone size={18} /> <span>{site.phone}</span>
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="drawer"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? <Close size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div id="drawer" className={`drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="drawer__link" tabIndex={open ? 0 : -1}>
                  {item.label}
                </Link>
                {item.sub.length > 0 && (
                  <ul className="drawer__sub">
                    {item.sub.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} tabIndex={open ? 0 : -1}>
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn" href={site.tourPhoneHref} tabIndex={open ? 0 : -1}>
          <Phone size={18} /> Book a home tour
        </a>
      </div>
    </header>
  );
}
