import Link from "next/link";

import { getSiteContent } from "../_content/site-content";
import { localizeHref, type Locale } from "../_i18n/config";
import { IcebergHeroGraphic } from "./iceberg-hero-graphic";

type HomeHeroProps = {
  locale: Locale;
};

function renderHeroTitle(title: string) {
  const keyword = "Zuverlässigkeitstechnik";

  if (!title.includes(keyword)) {
    return title;
  }

  const [before, after] = title.split(keyword);

  return (
    <>
      {before}
      <span className="sm:whitespace-nowrap">{keyword}</span>
      {after}
    </>
  );
}

export function HomeHero({ locale }: HomeHeroProps) {
  const { hero } = getSiteContent(locale);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbfd_0%,#eef4f7_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(8,145,178,0.10),transparent_28%),radial-gradient(circle_at_85%_14%,rgba(15,23,42,0.08),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(14,165,233,0.35),transparent)]" />

      <div className="relative mx-auto grid max-w-[94rem] gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:gap-10 lg:px-8 lg:py-24 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:gap-14">
        <div className="flex min-w-0 max-w-[46rem] flex-col justify-center">
          <p className="break-words text-sm font-semibold uppercase tracking-[0.32em] text-cyan-700">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem]">
            {renderHeroTitle(hero.title)}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {hero.description}
          </p>

          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
            {hero.facts.map((fact) => (
              <div
                key={fact.title}
                className="rounded-3xl border border-white/70 bg-white/80 px-5 py-4 shadow-sm ring-1 ring-slate-200/70 backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">
                  {fact.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={localizeHref(locale, "/kontakt")}
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-slate-300 transition-colors hover:bg-cyan-800"
            >
              {hero.primaryCta}
            </Link>
            <Link
              href={localizeHref(locale, "/leistungen")}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-800"
            >
              {hero.secondaryCta}
            </Link>
          </div>

          <div className="mt-5">
            <Link
              href={localizeHref(locale, "/wissen")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-800 transition-colors hover:text-slate-950"
            >
              {hero.knowledgeCta}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="relative min-w-0 lg:ml-auto lg:w-full lg:max-w-[45rem] xl:max-w-[51rem]">
          <IcebergHeroGraphic locale={locale} />
        </div>
      </div>
    </section>
  );
}
