import { useState } from "react";
import { officeProject, type MediaAsset } from "../data/foundation";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { CtaButton } from "./Button";
import { ImageLightbox } from "./ImageLightbox";

interface OfficeLightboxState {
  asset: MediaAsset;
  zoomable: boolean;
}

export function OfficeProjectSection() {
  const [selected, setSelected] = useState<OfficeLightboxState | null>(null);

  return (
    <section id="office-project" className="section-pad scroll-mt-24 bg-cream-100">
      <div className="container-x">
        <Reveal>
          <SectionHeader
            eyebrow={officeProject.eyebrow}
            title={officeProject.title}
            description={officeProject.description}
          />
        </Reveal>

        {/* The land + narrative */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
          <Reveal delay={80} className="min-w-0">
            <button
              type="button"
              onClick={() => setSelected({ asset: officeProject.land, zoomable: false })}
              className="group mx-auto block w-full max-w-md text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
              aria-label={`View ${officeProject.land.alt} enlarged`}
            >
              <figure className="overflow-hidden rounded-3xl border border-brand-100 bg-white p-2 shadow-lift transition-shadow duration-300 group-hover:shadow-card">
                <img
                  src={officeProject.land.image}
                  alt={officeProject.land.alt}
                  width={officeProject.land.width}
                  height={officeProject.land.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl"
                />
                <figcaption className="px-2 pb-1 pt-3 text-center text-sm font-medium text-ink-500">
                  {officeProject.land.caption} · Tap to enlarge
                </figcaption>
              </figure>
            </button>
          </Reveal>

          <Reveal delay={160} className="min-w-0">
            <div className="lg:pl-2">
              <h3 className="font-display text-2xl font-semibold text-brand-950 sm:text-3xl">
                Building a home for service
              </h3>
              <p className="mt-5 leading-relaxed text-ink-500 text-pretty">{officeProject.landNote}</p>
              <ol className="mt-8 space-y-4">
                {officeProject.steps.map((step, i) => (
                  <li key={step} className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-800 font-display text-sm font-semibold text-gold-300">
                      {i + 1}
                    </span>
                    <span className="font-medium text-ink">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-10">
                <CtaButton href={officeProject.ctaHref}>{officeProject.cta}</CtaButton>
                <p className="mt-4 text-sm text-ink-500">
                  Contributions can be made through the Support section below.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* The blueprint */}
        <div className="mt-20">
          <Reveal>
            <SectionHeader
              eyebrow="The Blueprint"
              title="A vision for the office facility"
              description={officeProject.blueprintNote}
            />
          </Reveal>
          <Reveal delay={120}>
            <button
              type="button"
              onClick={() => setSelected({ asset: officeProject.blueprint, zoomable: true })}
              className="group mx-auto mt-10 block w-full max-w-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
              aria-label={`View ${officeProject.blueprint.alt} enlarged`}
            >
              <figure className="overflow-hidden rounded-3xl border border-brand-100 bg-white p-3 shadow-card transition-shadow duration-300 group-hover:shadow-lift">
                <img
                  src={officeProject.blueprint.image}
                  alt={officeProject.blueprint.alt}
                  width={officeProject.blueprint.width}
                  height={officeProject.blueprint.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl"
                />
                <figcaption className="px-2 pb-1 pt-3 text-center text-sm font-medium text-ink-500">
                  {officeProject.blueprint.caption} · Tap to enlarge and zoom in
                </figcaption>
              </figure>
            </button>
          </Reveal>
        </div>

        {/* Campaign graphics */}
        <div className="mt-20">
          <Reveal>
            <SectionHeader
              eyebrow="Campaign Materials"
              title="Graphics for the office project"
              description="Official campaign graphics designed for and supplied by the foundation."
            />
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-3xl gap-8 sm:grid-cols-2">
            {officeProject.graphics.map((graphic, i) => (
              <Reveal key={graphic.image} delay={i * 100} className="min-w-0">
                <button
                  type="button"
                  onClick={() => setSelected({ asset: graphic, zoomable: true })}
                  className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
                  aria-label={`View ${graphic.alt} enlarged`}
                >
                  <figure className="overflow-hidden rounded-3xl border border-brand-100 bg-white p-2 shadow-soft transition-shadow duration-300 group-hover:shadow-card">
                    <img
                      src={graphic.image}
                      alt={graphic.alt}
                      width={graphic.width}
                      height={graphic.height}
                      loading="lazy"
                      decoding="async"
                      className="w-full rounded-2xl"
                    />
                    <figcaption className="px-2 pb-1 pt-3 text-center text-sm font-medium text-ink-500">
                      {graphic.caption} · Tap to enlarge and zoom in
                    </figcaption>
                  </figure>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <ImageLightbox
        open={selected !== null}
        onClose={() => setSelected(null)}
        media={selected?.asset}
        zoomable={selected?.zoomable}
        caption={
          selected ? (
            <div className="pt-1">
              <p className="font-display text-base font-semibold text-brand-950">{selected.asset.caption}</p>
            </div>
          ) : undefined
        }
      />
    </section>
  );
}