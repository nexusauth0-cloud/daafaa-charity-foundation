import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";
import { FiX, FiZoomIn, FiZoomOut } from "react-icons/fi";
import { type Executive, type MediaAsset } from "../data/foundation";

interface ImageLightboxProps {
  open: boolean;
  onClose: () => void;
  executive?: Executive;
  media?: MediaAsset;
  caption?: ReactNode;
  zoomable?: boolean;
}

export function ImageLightbox({
  open,
  onClose,
  executive,
  media,
  caption,
  zoomable = false,
}: ImageLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [zoom, setZoom] = useState(false);

  const src = executive?.modalImage ?? media?.modalImage;
  const alt = executive?.alt ?? media?.alt ?? "Enlarged media";
  const itemWidth = executive?.width ?? media?.width;
  const itemHeight = executive?.height ?? media?.height;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (zoomable && zoom) {
        setZoom(false);
      } else {
        onClose();
      }
    },
    [zoomable, zoom, onClose],
  );

  useEffect(() => {
    if (!open) return;
    setZoom(false);
    const previous = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previous?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, handleKey]);

  if (!open || !src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-950/90 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full w-auto max-w-full flex-col items-center pt-14"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 right-0 flex items-center gap-2">
          {zoomable ? (
            <button
              type="button"
              onClick={() => setZoom((z) => !z)}
              aria-label={zoom ? "Zoom out" : "Zoom in"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-950 shadow-soft transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            >
              {zoom ? (
                <FiZoomOut className="h-5 w-5" aria-hidden="true" />
              ) : (
                <FiZoomIn className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          ) : null}
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close enlarged view"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-950 shadow-soft transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
          >
            <FiX className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <figure className="min-w-0 overflow-hidden rounded-2xl bg-white p-2">
          {zoom ? (
            <div className="max-h-[74vh] max-w-[88vw] overflow-auto">
              <img
                src={src}
                alt={alt}
                style={{ width: (itemWidth ?? 800) * 2, height: "auto" }}
                className="block max-w-none"
              />
            </div>
          ) : (
            <img
              src={src}
              alt={alt}
              width={itemWidth}
              height={itemHeight}
              className="max-h-[68vh] w-auto object-contain"
            />
          )}
          {caption ? (
            <figcaption className="px-4 pb-3 pt-2 text-center">{caption}</figcaption>
          ) : null}
        </figure>
        <p className="mt-3 text-xs font-medium tracking-wide text-white/60">
          {zoom ? "Click zoom out or press Escape to exit zoom" : "Press Escape to close"}
        </p>
      </div>
    </div>
  );
}