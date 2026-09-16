import { founder, assets } from "../data/foundation";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { GeometricPattern } from "./GeometricPattern";

const blocks = [
  { heading: "Humanitarian Service and Leadership", body: founder.leadership },
  { heading: "Islamic Values and Personal Character", body: founder.values },
  { heading: "Vision for the Future", body: founder.future },
];

export function FounderSection() {
  return (
    <section id="founder" className="section-pad scroll-mt-24 bg-cream-100">
      <div className="container-x">
        <Reveal>
          <SectionHeader eyebrow="Our Founder" title="A leader devoted to service" />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          {/* Portrait */}
          <Reveal delay={100} className="min-w-0">
            <div className="relative lg:sticky lg:top-32 lg:self-start">
              <div className="absolute -left-5 -top-5 hidden h-full w-full rounded-3xl border border-gold-500/40 md:block" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-3xl shadow-lift">
                <img
                  src={assets.founderPhoto}
                  alt={`Portrait of ${founder.name}, ${founder.honorific}`}
                  width={1280}
                  height={1157}
                  className="aspect-[1280/1157] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mt-6 rounded-2xl border border-brand-100 bg-white p-6 shadow-soft">
                <p className="font-display text-xl font-semibold text-brand-950">{founder.name}</p>
                <p className="mt-1 text-sm font-medium text-brand-600">{founder.honorific}</p>
                <dl className="mt-5 space-y-3 text-sm">
                  {founder.quickFacts.map((fact) => (
                    <div key={fact.label} className="flex items-start gap-3 border-t border-brand-50 pt-3">
                      <dt className="w-36 shrink-0 font-medium text-ink-500">{fact.label}</dt>
                      <dd className="text-ink">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>

          {/* Biography */}
          <div className="min-w-0">
            <Reveal delay={140}>
              <div className="space-y-6 text-base leading-relaxed text-ink-500">
                {founder.intro.map((para) => (
                  <p key={para.slice(0, 24)} className="text-pretty">{para}</p>
                ))}
              </div>
            </Reveal>

            <div className="mt-12 space-y-12">
              {blocks.map((block, i) => (
                <Reveal key={block.heading} delay={80 + i * 80}>
                  <div className="md:pl-8">
                    <div className="relative">
                      <span
                        aria-hidden="true"
                        className="absolute -left-2 top-1 hidden h-4 w-4 rotate-45 border border-gold-500 bg-cream md:block"
                      />
                      <h3 className="font-display text-2xl font-semibold text-brand-950">{block.heading}</h3>
                    </div>
                    <div className="mt-4 space-y-5 text-base leading-relaxed text-ink-500">
                      {block.body.map((para) => (
                        <p key={para.slice(0, 24)} className="text-pretty">{para}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="relative mt-12 overflow-hidden rounded-2xl bg-brand-900 p-7 text-cream">
                <GeometricPattern id="founder-girih" className="text-white/[0.06]" />
                <div className="relative flex items-center gap-4">
                  <span aria-hidden="true" className="font-display text-5xl text-gold-500">“</span>
                  <p className="font-display text-lg font-medium text-cream/90">
                    {founder.name}
                    <span className="mt-1 block text-sm font-normal text-cream/60">{founder.honorific}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}