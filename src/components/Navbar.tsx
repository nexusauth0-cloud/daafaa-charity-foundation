import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { foundation, navLinks } from "../data/foundation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const offset = window.scrollY + 120;
      let current = "home";
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= offset) current = link.id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = navLinks[navLinks.length - 1].id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mql.matches) setOpen(false);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "border-b border-brand-100 bg-cream/95 shadow-soft backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20" aria-label="Primary">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src="/logo.webp"
            alt="DA’AFAA Charity Foundation logo"
            width={44}
            height={35}
            className="h-10 w-auto"
          />
          <span className="leading-tight">
            <span className={`block font-display text-lg font-semibold ${scrolled ? "text-brand-950" : "text-white"}`}>
              DA’AFAA
            </span>
            <span
              className={`block text-[0.65rem] font-medium uppercase tracking-widest2 ${
                scrolled ? "text-brand-600" : "text-gold-300"
              }`}
            >
              {foundation.tagline}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                active === link.id
                  ? scrolled
                    ? "text-brand-800"
                    : "text-gold-300"
                  : scrolled
                    ? "text-ink-600 hover:text-brand-800"
                    : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
              {active === link.id ? (
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-0.5 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full ${
                    scrolled ? "bg-gold-500" : "bg-gold-400"
                  }`}
                />
              ) : null}
            </a>
          ))}
          <a
            href="#support"
            className={`ml-3 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              scrolled ? "bg-brand-800 text-cream hover:bg-brand-900" : "bg-gold-500 text-brand-950 hover:bg-gold-400"
            }`}
          >
            Support
          </a>
        </div>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
            scrolled ? "text-brand-950" : "text-white"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX className="h-6 w-6" aria-hidden="true" /> : <FiMenu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>
    </header>

    {open ? (
      <div id="mobile-menu" className="lg:hidden" role="dialog" aria-modal="true" aria-label="Site menu" onClick={() => setOpen(false)}>
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-brand-950/95 px-6 pb-10 pt-6 backdrop-blur">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-4 text-lg font-medium transition-colors ${
                  active === link.id ? "bg-brand-800 text-gold-300" : "text-cream hover:bg-brand-900"
                }`}
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {link.label}
                <span aria-hidden="true" className="text-gold-500">
                  →
                </span>
              </a>
            ))}
            <a
              href="#support"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-4 text-base font-semibold text-brand-950"
            >
              Support the Foundation
            </a>
          </div>
        </div>
      </div>
    ) : null}
    </>
  );
}