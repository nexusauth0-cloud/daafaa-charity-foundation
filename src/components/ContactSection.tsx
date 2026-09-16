import { FiMapPin, FiPhone } from "react-icons/fi";
import { contact, founder } from "../data/foundation";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { GeometricPattern } from "./GeometricPattern";

export function ContactSection() {
  return (
    <section id="contact" className="section-pad scroll-mt-24 bg-cream-100">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <SectionHeader
                eyebrow="Contact"
                title="Reach out to DA’AFAA"
                description="Speak with our team, or find us at our office in Gwagwalada, Abuja."
              />
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-10 space-y-4">
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-soft transition-colors hover:border-brand-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <FiPhone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-widest text-ink-500">Phone</span>
                    <span className="mt-1 block font-display text-lg font-semibold text-brand-950">{contact.phone}</span>
                  </span>
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-brand-100 bg-white p-5 shadow-soft">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-50 text-gold-600">
                    <FiMapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-widest text-ink-500">Office Address</span>
                    <span className="mt-1 block font-display text-lg font-semibold text-brand-950">{contact.address}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="relative flex h-full min-h-[360px] overflow-hidden rounded-3xl bg-brand-900 text-cream shadow-lift">
              <GeometricPattern id="contact-girih" className="text-white/[0.06]" />
              <div className="relative flex w-full flex-col justify-between p-8 md:p-12">
                <div>
                  <p className="eyebrow text-gold-400">Established</p>
                  <p className="mt-3 font-display text-4xl font-semibold sm:text-5xl">2nd February, 2026</p>
                  <p className="mt-6 max-w-sm leading-relaxed text-cream/75 text-pretty">
                    DA’AFAA Charity Foundation is committed to serving humanity with honesty, compassion, and
                    accountability — giving hope and touching lives across Nigeria.
                  </p>
                </div>
                <div className="mt-10 border-t border-white/15 pt-6">
                  <p className="font-display text-2xl font-semibold text-gold-300">Giving Hope, Touching Lives.</p>
                  <p className="mt-1 text-sm text-cream/60">DA’AFAA — {founder.phone}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}