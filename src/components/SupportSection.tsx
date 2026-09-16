import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { support, foundation } from "../data/foundation";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { GeometricPattern } from "./GeometricPattern";

export function SupportSection() {
  const [copied, setCopied] = useState(false);

  const copyNumber = async () => {
    const value = support.accountNumber;
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* clipboard unavailable — show the number plainly */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="support" className="relative isolate scroll-mt-24 overflow-hidden bg-brand-900 py-20 text-cream md:py-28">
      <GeometricPattern id="support-girih" className="text-white/[0.06]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full border border-gold-400/15"
      />

      <div className="container-x relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <SectionHeader
                dark
                eyebrow="Give With Hope"
                title="Support & Sponsorship"
                align="left"
              />
              <p className="mt-6 max-w-prose leading-relaxed text-cream/80 text-pretty">{support.intro}</p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 max-w-prose border-l-2 border-gold-500 pl-5">
                <p className="font-display text-lg font-semibold text-cream">
                  "Every act of kindness, no matter how small, can make a meaningful difference."
                </p>
                <p className="mt-2 text-sm text-cream/60">— {foundation.name}</p>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <ul className="mt-8 space-y-3 text-sm text-cream/80">
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                  Donor support reaches orphans, widows, and vulnerable families through identified needs.
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                  Food, clothing, and essential support are mobilized for those facing hardship.
                </li>
                <li className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                  Partnerships and volunteers strengthen humanitarian service across Nigeria.
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Account card */}
          <Reveal delay={160}>
            <div className="relative rounded-3xl border border-white/15 bg-white/[0.07] p-8 shadow-lift backdrop-blur-sm md:p-10">
              <div className="flex items-center justify-between">
                <p className="eyebrow text-gold-400">Foundation Account for support and sponsorship</p>
                <span
                  aria-hidden="true"
                  className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-gold-500 text-brand-950 sm:flex"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
                    <path d="M2.5 10h19" strokeLinecap="round" />
                  </svg>
                </span>
              </div>

              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-widest text-cream/55">Bank</dt>
                  <dd className="mt-1.5 font-display text-2xl font-semibold text-cream">{support.bank}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-widest text-cream/55">Account Name</dt>
                  <dd className="mt-1.5 font-display text-2xl font-semibold text-cream">{support.accountName}</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-widest text-cream/55">Account Number</dt>
                  <dd className="mt-2 grid gap-4 sm:flex sm:items-center sm:gap-4">
                    <span className="select-all whitespace-nowrap self-start font-display text-[clamp(1.5rem,7vw,1.875rem)] font-bold tracking-[0.16em] text-gold-300 sm:text-3xl sm:tracking-[0.18em]">
                      {support.accountNumber}
                    </span>
                    <button
                      type="button"
                      onClick={copyNumber}
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 sm:w-auto ${
                        copied ? "bg-brand-700 text-cream" : "bg-white/15 text-cream hover:bg-white/25"
                      }`}
                      aria-live="polite"
                    >
                      <span aria-hidden="true">{copied ? <FiCheck className="h-4 w-4" /> : <FiCopy className="h-4 w-4" />}</span>
                      {copied ? "Copied" : "Copy account number"}
                    </button>
                  </dd>
                </div>
              </dl>

              <p className="mt-8 border-t border-white/15 pt-6 text-sm leading-relaxed text-cream/70">
                All support is received and directed by the foundation for its charitable activities — supporting the
                less privileged, orphans, widows, widowers, and vulnerable members of society across Nigeria.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}