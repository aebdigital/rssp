type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--brand-blue)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-4xl font-light tracking-tight text-[var(--ink)] sm:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
