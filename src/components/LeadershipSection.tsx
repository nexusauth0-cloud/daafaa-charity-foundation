import { executives, assets, type Executive } from "../data/foundation";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { GeometricPattern } from "./GeometricPattern";
import { ImageLightbox } from "./ImageLightbox";
import { useState } from "react";

export function LeadershipSection() {
  const [selected, setSelected] = useState<Executive | null>(null);

  return (
    <section id="leadership" className="section-pad scroll-mt-24">
      <div className="container-x">
        <Reveal>
          <SectionHeader
            eyebrow="Leadership"
            title="The executives guiding DA’AFAA"
            description="A team of dedicated leaders working to mobilize support, promote compassion, and create opportunities for disadvantaged members of society."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {executives.map((exec, i) => (
            <Reveal key={exec.id} delay={(i % 3) * 90}>
              <button
                type="button"
                onClick={() => setSelected(exec)}
                className="group flex w-full flex-col rounded-3xl border border-brand-100 bg-white p-4 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
                aria-label={exec.name ? `View identity card of ${exec.name} enlarged` : "View DA’AFAA executive identity card enlarged"}
              >
                <div className="relative w-full overflow-hidden rounded-2xl bg-cream-100">
                  {/* 2:3 frame; object-contain keeps each official card intact */}
                  <div className="aspect-[2/3] w-full">
                    <img
                      src={exec.image}
                      alt={exec.alt}
                      width={exec.width}
                      height={exec.height}
                      loading="lazy"
                      decoding="async"
                      className="mx-auto h-full w-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-brand-950/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
                <div className="px-1 pb-1 pt-5">
                  <h3 className="font-display text-lg font-semibold text-brand-950">
                    {exec.name ?? "Executive Member"}
                  </h3>
                  {exec.role ? (
                    <p className="mt-1 text-sm text-brand-600">{exec.role}</p>
                  ) : (
                    <p className="mt-1 text-sm text-ink-500">Official identity card</p>
                  )}
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Leadership in unity — the group image */}
        <Reveal delay={120}>
          <figure className="relative mt-16 overflow-hidden rounded-3xl bg-brand-900 shadow-lift">
            <GeometricPattern id="leadership-girih" className="text-white/[0.06]" />
            <div className="relative grid gap-0 md:grid-cols-[1fr_1.1fr]">
              <div className="relative flex min-h-[280px] items-center overflow-hidden p-8 md:p-12 lg:p-16">
                <img
                  src={assets.groupExecutives}
                  alt="The DA’AFAA executive team photographed together"
                  width={718}
                  height={1044}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-top opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-950/70 via-brand-950/40 to-brand-950/10" aria-hidden="true" />
                <div className="relative text-cream">
                  <p className="eyebrow text-gold-400">Leadership with Purpose</p>
                  <p className="mt-4 max-w-sm font-display text-3xl font-semibold leading-tight sm:text-4xl">
                    A team united in compassion and service
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-6 p-8 md:p-12 lg:p-16">
                <p className="leading-relaxed text-cream/80 text-pretty">
                  Our leaders work together to identify people in need, connect with beneficiaries, and mobilize
                  support to address their essential needs — drawing on partnerships, volunteers, and the goodwill of
                  the public to strengthen humanitarian service across Nigeria.
                </p>
                <p className="text-sm text-cream/60">
                  The official identity cards of each executive are displayed exactly as issued. Select any card to
                  view it at a larger size.
                </p>
              </div>
            </div>
          </figure>
        </Reveal>
      </div>

      <ImageLightbox
        open={selected !== null}
        onClose={() => setSelected(null)}
        executive={selected ?? undefined}
        caption={
          selected ? (
            <div className="pt-1">
              <p className="font-display text-base font-semibold text-brand-950">
                {selected.name ?? "DA’AFAA Executive"}
              </p>
              {selected.role ? <p className="mt-0.5 text-sm text-brand-600">{selected.role}</p> : null}
            </div>
          ) : undefined
        }
      />
    </section>
  );
}