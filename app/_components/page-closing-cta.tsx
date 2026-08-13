import Link from "next/link";

type CtaAction = {
  href: string;
  label: string;
  external?: boolean;
};

type PageClosingCtaProps = {
  title: string;
  description: string;
  primary: CtaAction;
  secondary?: CtaAction;
  theme?: "solutions" | "education";
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4 shrink-0"
      fill="none"
    >
      <path
        d="M4 10h11m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PageClosingCta({
  title,
  description,
  primary,
  secondary,
  theme = "solutions",
}: PageClosingCtaProps) {
  const isEducation = theme === "education";
  const primaryClasses = isEducation
    ? "bg-brand-education hover:bg-[#008f48]"
    : "bg-brand-marine hover:bg-brand-steel-cyan";
  const accentClasses = isEducation
    ? "bg-brand-education"
    : "bg-brand-steel-cyan";
  const secondaryHoverClasses = isEducation
    ? "hover:text-brand-education after:bg-brand-education"
    : "hover:text-brand-steel-cyan after:bg-brand-steel-cyan";

  return (
    <section className="border-t border-line-soft bg-white px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="brand-panel-cut-bottom-right relative mx-auto max-w-7xl overflow-hidden bg-brand-steel-cyan-10 px-7 py-9 sm:px-10 sm:py-11 lg:px-14 lg:py-12">
        <span
          aria-hidden="true"
          className={`absolute top-0 left-0 h-1 w-28 ${accentClasses}`}
        />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <h2 className="max-w-4xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] text-brand-marine sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-brand-marine/72">
              {description}
            </p>
          </div>
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center lg:justify-end">
            <Link
              href={primary.href}
              target={primary.external ? "_blank" : undefined}
              rel={primary.external ? "noopener noreferrer" : undefined}
              className={`brand-action inline-flex min-h-12 items-center justify-between gap-7 px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors ${primaryClasses}`}
            >
              {primary.label}
              <ArrowIcon />
            </Link>
            {secondary ? (
              <Link
                href={secondary.href}
                target={secondary.external ? "_blank" : undefined}
                rel={secondary.external ? "noopener noreferrer" : undefined}
                className={`relative inline-flex min-h-11 items-center gap-7 py-2 font-winnstein-display text-sm font-bold text-brand-marine transition-colors after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px ${secondaryHoverClasses}`}
              >
                {secondary.label}
                <ArrowIcon />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
