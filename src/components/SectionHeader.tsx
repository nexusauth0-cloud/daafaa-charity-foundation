interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({ eyebrow, title, description, align = "left", dark = false }: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto flex flex-col items-center text-center" : ""} max-w-2xl`}>
      <p className={`eyebrow ${dark ? "text-gold-400" : "text-brand-600"}`}>
        <span aria-hidden="true" className={`${centered ? "mx-auto mb-3" : "mb-3"} block h-px w-10 bg-gold-500`} />
        {eyebrow}
      </p>
      <h2 className={`h-display mt-4 text-balance ${dark ? "text-cream" : "text-brand-950"}`}>{title}</h2>
      {description ? (
        <p className={`mt-5 text-base leading-relaxed text-pretty ${dark ? "text-cream/75" : "text-ink-500"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}