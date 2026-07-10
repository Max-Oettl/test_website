type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "section-heading mx-auto max-w-3xl text-center"
          : "section-heading max-w-3xl"
      }
    >
      <p className="section-heading-eyebrow text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700">
        {eyebrow}
      </p>
      <h2 className="section-heading-title mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="section-heading-description mt-5 text-lg leading-8 text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
