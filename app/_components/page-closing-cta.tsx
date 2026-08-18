import Link from "next/link";

import { localizeHref, type Locale } from "../_i18n/config";

type PageClosingCtaProps = {
  locale: Locale;
  title: string;
  description: string;
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
  locale,
  title,
  description,
  theme = "solutions",
}: PageClosingCtaProps) {
  const isEducation = theme === "education";
  const scheduleLabel =
    locale === "de" ? "Erstgespräch vereinbaren" : "Book an initial consultation";
  const formLabel =
    locale === "de" ? "Anliegen schriftlich senden" : "Send your inquiry";
  const primaryClasses = isEducation
    ? "bg-brand-education hover:bg-[#008f48]"
    : "bg-brand-marine hover:bg-brand-steel-cyan";
  const accentClasses = isEducation
    ? "bg-brand-education"
    : "bg-brand-steel-cyan";
  const secondaryClasses = isEducation
    ? "text-brand-education hover:text-[#008f48]"
    : "text-brand-marine hover:text-brand-steel-cyan";

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
          <div className="flex w-full flex-col gap-3 sm:w-72 lg:justify-self-end">
            <Link
              href={localizeHref(locale, "/kontakt#termin")}
              className={`brand-action inline-flex min-h-12 w-full items-center justify-between gap-5 px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors ${primaryClasses}`}
            >
              {scheduleLabel}
              <ArrowIcon />
            </Link>
            <Link
              href={localizeHref(locale, "/kontakt#anfrageformular")}
              className={`brand-action brand-action-outline brand-action-outline-light inline-flex min-h-12 w-full items-center justify-between gap-5 px-6 py-3 font-winnstein-display text-sm font-bold transition-colors ${secondaryClasses}`}
            >
              {formLabel}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
