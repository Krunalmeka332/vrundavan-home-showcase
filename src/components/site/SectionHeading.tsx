export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "navy",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "navy" | "light";
}) {
  return (
    <div
      data-reveal
      className={`reveal ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      {eyebrow && <p className={`eyebrow ${tone === "light" ? "text-brand-bright" : ""}`}>{eyebrow}</p>}
      <h2
        className={`mt-4 text-[clamp(1.75rem,3.2vw,2.6rem)] leading-[1.18] tracking-[-0.005em] ${
          tone === "light" ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[14.5px] font-light leading-[1.85] ${
            tone === "light" ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
