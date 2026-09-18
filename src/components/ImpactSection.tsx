import { useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import { activities, type MediaAsset } from "../data/foundation";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { GeometricPattern } from "./GeometricPattern";
import { ImageLightbox } from "./ImageLightbox";

export function ImpactSection() {
  const [selected, setSelected] = useState<MediaAsset | null>(null);

  return (
    <section id="impact" className="relative isolate scroll-mt-24 overflow-hidden bg-brand-950 py-20 text-cream md:py-28">
      <GeometricPattern id="impact-girih" className="text-white/[0.06]" />
      <div className="container-x relative z-10">
        <Reveal>
          <SectionHeader
            dark
            eyebrow={activities.eyebrow}
            title={activities.title}
            description={activities.description}
          />
        </Reveal>

        {/* Featured activity */}
        <Reveal delay={140}>
          <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14">
            <button
              type="button"
              onClick={() => setSelected(activities.photos[0])}
              className="group mx-auto block w-full max-w-md text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
              aria-label={`View ${activities.photos[0].alt} enlarged`}
            >
              <figure className="overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] p-2 shadow-lift backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.01]">
                <img
                  src={activities.photos[0].image}
                  alt={activities.photos[0].alt}
                  width={activities.photos[0].width}
                  height={activities.photos[0].height}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl"
                />
                <figcaption className="px-2 pb-1 pt-3 text-center text-xs font-medium tracking-wide text-cream/70">
                  {activities.photos[0].caption} · Tap to enlarge
                </figcaption>
              </figure>
            </button>

            <div className="lg:pl-2">
              <p className="eyebrow text-gold-400">Featured Activity</p>
              <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl">
                {activities.featureTitle}
              </h3>
              <p className="mt-5 max-w-prose leading-relaxed text-cream/80 text-pretty">
                {activities.featureIntro}
              </p>
              <a
                href="#impact-gallery"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-300 transition-colors hover:text-gold-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
              >
                View the gallery
                <FiArrowDown aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Photo gallery */}
        <div id="impact-gallery" className="mt-16 scroll-mt-28">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold text-cream">Moments from the distribution</h3>
          </Reveal>
          <div className="mt-8 columns-2 gap-4 sm:columns-3">
            {activities.photos.map((photo, i) => (
              <Reveal key={photo.image} delay={(i % 3) * 80} className="mb-4 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setSelected(photo)}
                  className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
                  aria-label={`View ${photo.alt} enlarged`}
                >
                  <figure className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-1.5">
                    <img
                      src={photo.image}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      loading="lazy"
                      decoding="async"
                      className="w-full rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </figure>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Video record */}
        <div className="mt-16">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold text-cream">{activities.videosTitle}</h3>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-cream/70">{activities.videosIntro}</p>
          </Reveal>
          <div className="mx-auto mt-8 grid w-full max-w-2xl gap-8 sm:grid-cols-2">
            {activities.videos.map((video, i) => (
              <Reveal key={video.src} delay={i * 120} className="min-w-0">
                <figure>
                  <div className="overflow-hidden rounded-2xl border border-white/15 bg-brand-950 shadow-lift">
                    <div className="aspect-[9/16]">
                      <video
                        className="h-full w-full object-cover"
                        controls
                        preload="metadata"
                        playsInline
                        poster={video.poster}
                        width={video.width}
                        height={video.height}
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support embedded videos.
                      </video>
                    </div>
                  </div>
                  <figcaption className="mt-3 text-sm font-medium text-cream/75">{video.label}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <ImageLightbox
        open={selected !== null}
        onClose={() => setSelected(null)}
        media={selected ?? undefined}
        caption={
          selected ? (
            <div className="pt-1">
              <p className="font-display text-base font-semibold text-brand-950">{selected.caption}</p>
            </div>
          ) : undefined
        }
      />
    </section>
  );
}