import { foundation, founder, assets } from "../data/foundation";
import { GeometricPattern } from "./GeometricPattern";
import { CtaButton } from "./Button";
import { Reveal } from "./Reveal";

const FOUNDER_W = 1280;
const FOUNDER_H = 1157;

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[92vh] flex-col justify-end overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 text-white md:min-h-[96vh]"
    >
      <GeometricPattern id="hero-girih" className="text-white/[0.07]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-10 h-[560px] w-[560px] rounded-full border border-white/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-24 h-[420px] w-[420px] rounded-full border border-gold-400/20"
      />

      <div className="container-x relative z-10 flex flex-col gap-12 pb-14 pt-32 md:flex-row md:items-end md:justify-between md:pb-16 md:pt-40">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-widest text-white/90 backdrop-blur-sm">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold-400" />
              {foundation.headlessEstablishment}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl">
              {foundation.tagline.split(", ")[0]}
              <span className="block text-gold-300">
                {foundation.tagline.split(", ").slice(1).join(", ")}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              A humanitarian and community-based organization serving the less privileged, orphans, widows,
              widowers, and vulnerable members of society across Nigeria.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CtaButton href="#support" variant="primary">
                Support the Foundation
              </CtaButton>
              <CtaButton href="#about" variant="outline">
                Read Our Story
              </CtaButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={260} className="w-full max-w-xs md:w-72 lg:w-80">
          <div className="relative w-full rounded-3xl bg-white/[0.07] p-2 shadow-lift backdrop-blur-sm">
            <div className="relative overflow-hidden rounded-[22px] bg-white/[0.04]">
              <img
                src={assets.founderPhoto}
                alt={`Portrait of ${founder.name}, ${founder.honorific}`}
                width={FOUNDER_W}
                height={FOUNDER_H}
                className="aspect-[1280/1157] w-full object-cover"
                style={{ aspectRatio: `${FOUNDER_W} / ${FOUNDER_H}` }}
                fetchPriority="high"
              />
            </div>
            <div className="mt-3 pb-3 px-2 text-center">
              <p className="font-display text-base font-semibold text-white">{founder.name}</p>
              <p className="mt-1 text-xs font-medium text-gold-300/90">{founder.honorific.split(",")[0]}</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container-x relative z-10 pb-12 md:pb-16">
        <Reveal delay={380}>
          <div className="grid grid-cols-1 divide-y divide-white/15 rounded-2xl border border-white/15 bg-white/[0.06] p-px text-sm backdrop-blur md:grid-cols-3 md:divide-y-0 md:divide-x">
            {[
              { title: "Established", value: "2nd February, 2026" },
              { title: "Our Promise", value: "Giving Hope, Touching Lives" },
              { title: "Our Focus", value: "Serving communities across Nigeria" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-2 px-6 py-5">
                <span className="text-xs font-medium uppercase tracking-widest text-gold-400/80">{item.title}</span>
                <span className="text-center font-display text-sm font-semibold text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}