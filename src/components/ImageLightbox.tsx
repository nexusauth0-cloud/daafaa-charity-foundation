import { useEffect, useRef, useCallback, type ReactNode } from "react";
import { FiX } from "react-icons/fi";
import { type Executive } from "../data/foundation";

interface ImageLightboxProps {
  open: boolean;
  onClose: () => void;
  executive?: Executive;
  caption?: ReactNode;
}

export function ImageLightbox({ open, onClose, executive, caption }: ImageLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
      previous?.focus?.();
    };
  }, [open, handleKey]);

  if (!open || !executive) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-950/90 p-4 backdrop-blur-sm sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={executive.alt}
      onClick={onClose}
    >
      <div
        ref={panelRef}
        className="relative flex max-h-full w-auto max-w-full flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close enlarged view"
          className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-950 shadow-soft transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
        >
          <FiX className="h-5 w-5" aria-hidden="true" />
        </button>
        <figure className="min-w-0 overflow-hidden rounded-2xl bg-white p-2 shadow-lift">
          <img
            src={executive.modalImage}
            alt={executive.alt}
            width={executive.width}
            height={executive.height}
            className="max-h-[68vh] w-auto object-contain"
          />
          {caption ? (
            <figcaption className="px-4 pb-3 pt-2 text-center">{caption}</figcaption>
          ) : null}
        </figure>
        <p className="mt-3 text-xs font-medium tracking-wide text-white/60">Press Escape to close</p>
      </div>
    </div>
  );
}