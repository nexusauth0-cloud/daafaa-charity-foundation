import { foundation, navLinks, support, contact } from "../data/foundation";
import { GeometricPattern } from "./GeometricPattern";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-brand-950 text-cream">
      <GeometricPattern id="footer-girih" className="text-white/[0.05]" />
      <div className="container-x relative z-10 pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.webp"
                alt="DA’AFAA Charity Foundation logo"
                width={44}
                height={35}
                className="h-12 w-auto"
              />
              <div>
                <p className="font-display text-lg font-semibold">DA’AFAA</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              {foundation.name} — {foundation.tagline}. Established {foundation.established}. Serving the less
              privileged, orphans, widows, widowers, and vulnerable members of society across Nigeria.
            </p>
            <p className="mt-5 text-xs uppercase tracking-widest text-gold-400">{foundation.headlessEstablishment}</p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-widest text-cream/50">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-cream/80 transition-colors hover:text-gold-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cream/50">Support</p>
            <ul className="mt-5 space-y-3 text-sm text-cream/80">
              <li className="flex items-center justify-between gap-3">
                <span>Bank</span>
                <span className="text-right font-medium text-cream">{support.bank}</span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Account Name</span>
                <span className="text-right font-medium text-cream">{support.accountName}</span>
              </li>
              <li className="flex items-center justify-between gap-3">
                <span>Account No.</span>
                <span className="font-medium tracking-widest text-gold-300">{support.accountNumber}</span>
              </li>
            </ul>
            <a
              href="#support"
              className="mt-6 inline-flex items-center rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-brand-950 transition-colors hover:bg-gold-400"
            >
              Give with hope
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cream/50">Contact</p>
            <p className="mt-5 text-sm leading-relaxed text-cream/80">{contact.address}</p>
            <a href={contact.phoneHref} className="mt-3 block text-sm text-cream/80 transition-colors hover:text-gold-300">
              Phone: {contact.phone}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-xs text-cream/50 sm:flex-row">
          <p>© {year} {foundation.name}. All rights reserved.</p>
          <p className="font-display text-sm text-cream/70">{foundation.tagline}.</p>
        </div>
      </div>
    </footer>
  );
}