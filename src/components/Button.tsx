import type { ReactNode, ComponentPropsWithoutRef } from "react";

const variants = {
  primary:
    "border-gold-500 bg-gold-500 text-brand-950 hover:border-gold-400 hover:bg-gold-400 shadow-[0_10px_24px_-12px_rgba(217,164,65,0.9)]",
  outline:
    "border border-white/50 bg-transparent text-white hover:border-white hover:bg-white/10",
  ghost:
    "border-brand-200 bg-transparent text-brand-700 hover:border-brand-300 hover:bg-brand-50",
} as const;

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

interface CtaButtonProps {
  href: string;
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
}

export function CtaButton({ href, variant = "primary", children, className = "" }: CtaButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}

interface JournalButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: keyof typeof variants;
  children: ReactNode;
}

export function JournalButton({ variant = "primary", children, className = "", ...props }: JournalButtonProps) {
  return (
    <button type="button" {...props} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}