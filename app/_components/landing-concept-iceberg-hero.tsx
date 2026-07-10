import Link from "next/link";

import { getSiteContent } from "../_content/site-content";
import { localizeHref, type Locale } from "../_i18n/config";
import { IcebergHeroGraphic } from "./iceberg-hero-graphic";

type LandingConceptIcebergHeroProps = {
  locale: Locale;
};

export function LandingConceptIcebergHero({
  locale,
}: LandingConceptIcebergHeroProps) {
  const { hero } = getSiteContent(locale);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfdfe_0%,#eef4f7_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_10%,rgba(8,145,178,0.12),transparent_28rem)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(14,165,233,0.08),transparent_24rem)]" />
      <div className="hero-editorial-grid absolute inset-0 opacity-80" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(14,165,233,0.35),transparent)]" />

      <div className="relative mx-auto grid max-w-[94rem] gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(34rem,1.12fr)] lg:items-center lg:px-8 lg:py-24 xl:grid-cols-[minmax(0,0.82fr)_minmax(40rem,1.18fr)]">
        <div className="relative z-10 min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-700">
            {hero.eyebrow}
          </p>

          <h1 className="mt-6 max-w-[44rem] text-[clamp(3rem,4.4vw,5.1rem)] leading-[0.98] font-semibold tracking-[-0.066em] text-slate-950 text-balance drop-shadow-[0_1px_0_rgba(255,255,255,0.9)]">
            {hero.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 font-medium text-slate-700">
            {hero.description}
          </p>

          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
            {hero.facts.map((fact) => (
              <div
                key={fact.title}
                className="rounded-[1.35rem] border border-slate-200/90 bg-white/72 p-4 shadow-sm ring-1 ring-white/80 backdrop-blur"
              >
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-cyan-700">
                  {fact.title}
                </p>
                <p className="mt-2 text-sm leading-6 font-medium text-slate-600">
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

          <Link
            href={localizeHref(locale, "/wissen")}
            className="mt-6 inline-flex text-sm font-bold text-cyan-800 transition-colors hover:text-slate-950"
          >
            {hero.knowledgeCta}
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <div className="relative z-10 min-w-0 lg:ml-auto lg:w-full lg:max-w-[45rem] xl:max-w-[51rem]">
          <IcebergHeroGraphic locale={locale} />
        </div>
      </div>
    </section>
  );
}
