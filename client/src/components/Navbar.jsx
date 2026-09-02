import { useEffect, useState } from "react";
import { nav } from "../data/site.js";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <a className="nav__brand" href="#home" onClick={() => setOpen(false)}>
          <span className="nav__brand-dot" />
          DON <strong>DEW</strong>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {nav.slice(0, -1).map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="btn nav__cta" href="#contact">
            Let's connect <i className="bi bi-arrow-up-right" />
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} />
        </button>
      </div>

      <nav id="mobile-menu" className={`nav__mobile ${open ? "nav__mobile--open" : ""}`} aria-label="Mobile">
        {nav.map((item, i) => (
          <a key={item.href} href={item.href} style={{ transitionDelay: `${i * 30}ms` }} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
