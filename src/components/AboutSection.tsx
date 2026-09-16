import { foundation } from "../data/foundation";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { GeometricPattern } from "./GeometricPattern";

export function AboutSection() {
  return (
    <section id="about" className="section-pad scroll-mt-24">
      <div className="container-x">
        <Reveal>
          <SectionHeader
            eyebrow="About the Foundation"
            title="Humanitarian service with hope and dignity"
            description="Compassion, kindness, service to humanity — and the belief that every individual deserves dignity, hope, and an opportunity to live a better life."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 max-w-prose space-y-6 text-base leading-relaxed text-ink-500">
            <p className="text-pretty">{foundation.aboutLead}</p>
            <p className="text-pretty">{foundation.aboutPrinciples}</p>
          </div>
        </Reveal>

        {/* Vision & Mission */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal delay={80}>
            <article className="h-full rounded-3xl border border-brand-100 bg-white p-8 shadow-soft md:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
                  <path d="M12 3l2.2 4.9 5.3.6-4 3.8 1.1 5.2L12 14.8 7.4 17.5 8.5 12.3 4.5 8.5l5.3-.6L12 3z" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-brand-950">Our Vision</h3>
              <p className="mt-4 leading-relaxed text-ink-500 text-pretty">{foundation.vision}</p>
            </article>
          </Reveal>
          <Reveal delay={180}>
            <article className="h-full rounded-3xl border border-brand-100 bg-white p-8 shadow-soft md:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-50 text-gold-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
                  <path d="M3 4h18v14H7l-4 4V4z" strokeLinejoin="round" />
                  <path d="M8 9h8M8 13h5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-brand-950">Our Mission</h3>
              <p className="mt-4 leading-relaxed text-ink-500 text-pretty">{foundation.mission}</p>
            </article>
          </Reveal>
        </div>

        {/* Aim & Objectives */}
        <div className="mt-20">
          <Reveal>
            <SectionHeader
              eyebrow="Aim and Objectives"
              title="What DA’AFAA works to achieve"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {foundation.objectives.map((objective, i) => (
              <Reveal key={objective} delay={i * 70}>
                <div className="group flex h-full gap-5 rounded-2xl border border-brand-100 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-card">
                  <span className="font-display text-3xl font-semibold text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                  <p className="leading-relaxed text-ink-600 text-pretty">{objective}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Progress & Achievements */}
      <div className="container-x mt-20">
        <Reveal>
          <SectionHeader
            eyebrow="Foundation’s Progress and Achievements"
            title="Building a foundation of service"
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
            <div className="rounded-3xl bg-white p-8 shadow-soft md:p-10">
              <p className="leading-relaxed text-ink-500 text-pretty">{foundation.progress.intro}</p>
              <div className="mt-8 space-y-4">
                {foundation.progress.areas.map((area) => (
                  <div key={area} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700"
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                        <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="font-medium text-ink">{area}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 border-t border-brand-100 pt-6 leading-relaxed text-ink-500 text-pretty">
                {foundation.progress.development}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-brand-900 p-8 text-cream shadow-lift md:p-10">
              <GeometricPattern id="progress-girih" className="text-white/[0.06]" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-10 bg-gold-500" />
                  <p className="eyebrow text-gold-400">Our Commitment</p>
                </div>
                <div className="mt-6 space-y-5 text-sm leading-relaxed text-cream/85">
                  {foundation.commitment.map((para) => (
                    <p key={para.slice(0, 24)} className="text-pretty">{para}</p>
                  ))}
                </div>
                <p className="mt-8 font-display text-lg font-semibold text-gold-300">
                  {foundation.name} — {foundation.tagline}.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}