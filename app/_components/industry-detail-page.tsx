import Link from "next/link";

import { AiAwareImage as Image } from "./ai-aware-image";
import {
  getIndustryDetails,
  type IndustryDetailContent,
  type ResolvedIndustryDetailContent,
} from "../_content/industry-detail-content";
import type { IndustryEditorialLayout } from "../_content/industry-editorial-content";
import { localizeHref, type Locale } from "../_i18n/config";
import { ActiveNavLink } from "./active-nav-link";
import { PageClosingCta } from "./page-closing-cta";
import { SectionRailNavigation } from "./section-rail-navigation";

type Props = {
  locale: Locale;
  content: ResolvedIndustryDetailContent;
};

const reverseHeroLayouts = new Set<IndustryEditorialLayout>([
  "lifetime-curve",
  "qualification-stack",
  "asset-cycle",
  "mission-chain",
]);

const industryEditorialImages: Record<
  string,
  Record<"wide" | "portrait", string>
> = {
  automotive: {
    wide: "/industries/editorial/automotive-test-rig.jpg",
    portrait: "/industries/editorial/automotive-field-review.jpg",
  },
  maschinenbau: {
    wide: "/industries/editorial/mechanical-gearbox-analysis.jpg",
    portrait: "/industries/editorial/mechanical-spindle-test.jpg",
  },
  "elektronische-produkte": {
    wide: "/industries/editorial/electronics-climate-test.jpg",
    portrait: "/industries/editorial/electronics-solder-analysis.jpg",
  },
  halbleiterindustrie: {
    wide: "/industries/editorial/semiconductor-evidence-chain.jpg",
    portrait: "/industries/editorial/semiconductor-power-cycling.jpg",
  },
  konsumgueter: {
    wide: "/industries/editorial/consumer-tool-usage-testing.jpg",
    portrait: "/industries/editorial/consumer-battery-system.jpg",
  },
  "erneuerbare-energien": {
    wide: "/industries/editorial/renewables-wind-drivetrain.jpg",
    portrait: "/industries/editorial/renewables-inverter-analysis.jpg",
  },
  medizintechnik: {
    wide: "/industries/editorial/medical-infusion-safety-case.jpg",
    portrait: "/industries/editorial/medical-reprocessing-verification.jpg",
  },
  "luft-und-raumfahrt": {
    wide: "/industries/editorial/aerospace-mission-qualification.jpg",
    portrait: "/industries/editorial/aerospace-avionics-vibration.jpg",
  },
  produktionstechnik: {
    wide: "/industries/editorial/production-line-bottleneck.jpg",
    portrait: "/industries/editorial/production-robot-condition-monitoring.jpg",
  },
};

function ArrowIcon({ external = false }: { external?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4 shrink-0"
      fill="none"
    >
      <path
        d={external ? "M6 14 14 6m-6 0h6v6" : "M4 10h11m-4-4 4 4-4 4"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IndustryEditorialFlow({ locale, content }: Props) {
  const { editorial } = content;
  const wideImage = editorial.imageBriefs.find((item) => item.format === "wide");
  const portraitImage = editorial.imageBriefs.find((item) => item.format === "portrait");
  const imageSources = industryEditorialImages[content.slug];
  const history = editorial.history;
  const idPrefix = `industry-${content.slug}`;
  const sectionName = industryNavigationNames[locale][content.slug] ?? content.title;
  const projectTerms =
    locale === "de"
      ? ["Ausgangslage", "Vorgehen", "Ergebnis"]
      : ["Challenge", "Approach", "Result"];
  const labels =
    locale === "de"
      ? {
          overview: "Anforderungen und Freigabe",
          systems: "Produkte und Risikofelder",
          validation: "Prüf- und Nachweisstrategie",
          field: "Felddaten und Rückkopplung",
          support: "Zusammenarbeit mit RelTest",
          risk: "Risikofeld",
          evidence: "Nachweis",
          project: "Projektbeispiel",
          deliverables: "Ergebnisse",
          practice: "Praxisbeispiel",
          source: "Quelle",
          serviceTopics: "Schwerpunkte",
          serviceLink: "Leistung im Detail",
          knowledge: "Fachwissen zur Vertiefung",
          questions: "Fragen, die wir zu Projektbeginn klären",
          context: "Fachlicher Rahmen",
        }
      : {
          overview: "Requirements and release",
          systems: "Products and risk fields",
          validation: "Test and evidence strategy",
          field: "Field data and feedback",
          support: "Working with RelTest",
          risk: "Risk field",
          evidence: "Evidence",
          project: "Project example",
          deliverables: "Deliverables",
          practice: "Practical example",
          source: "Source",
          serviceTopics: "Focus areas",
          serviceLink: "Explore service",
          knowledge: "Technical knowledge",
          questions: "Questions we clarify at project start",
          context: "Engineering context",
        };
  const chapters = [
    { number: "01", label: labels.overview, href: `#${idPrefix}-anforderungen` },
    { number: "02", label: labels.systems, href: `#${idPrefix}-systeme` },
    { number: "03", label: wideImage?.label ?? labels.validation, href: `#${idPrefix}-nachweis` },
    { number: "04", label: portraitImage?.label ?? labels.field, href: `#${idPrefix}-felddaten` },
    { number: "05", label: labels.support, href: `#${idPrefix}-zusammenarbeit` },
  ];

  return (
    <section className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 xl:grid-cols-[13rem_minmax(0,1fr)] xl:gap-16">
        <SectionRailNavigation
          ariaLabel={
            locale === "de"
              ? `Abschnitte in ${sectionName}`
              : `Sections in ${sectionName}`
          }
          items={chapters}
          title={sectionName}
        />

        <article className="min-w-0">
          <section id={`${idPrefix}-anforderungen`} className="scroll-mt-36 pb-16 sm:pb-20">
            <header className="grid gap-4 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6">
              <span className="font-winnstein-display text-2xl font-bold text-brand-steel-cyan">01</span>
              <div>
                <h2 className="max-w-4xl hyphens-auto font-winnstein-display text-3xl leading-[1.12] font-bold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-4xl xl:text-[2.65rem]">
                  {editorial.seoTitle}
                </h2>
              </div>
            </header>

            <div className="mt-8 space-y-5 text-lg leading-8 text-brand-marine/72 sm:ml-[5.5rem]">
              {editorial.seoParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 border-t border-brand-marine/18 pt-8 sm:ml-[5.5rem]">
              <p className="max-w-4xl font-winnstein-display text-2xl leading-tight font-bold">
                {content.decisionTitle}
              </p>
              <p className="mt-4 max-w-4xl text-base leading-8 text-brand-marine/70">
                {content.decisionText}
              </p>
              <ul className="mt-8 border-t border-brand-marine/16">
                {content.decisionPath.map((step) => (
                  <li
                    key={step.label}
                    className="grid gap-y-2 border-b border-brand-marine/16 py-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-start sm:gap-5"
                  >
                    <strong className="font-winnstein-display text-base">{step.label}</strong>
                    <span className="text-base leading-7 text-brand-marine/68">{step.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id={`${idPrefix}-systeme`} className="scroll-mt-36 border-t border-brand-marine/18 py-16 sm:py-20">
            <header className="grid gap-4 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6">
              <span className="font-winnstein-display text-2xl font-bold text-brand-steel-cyan">02</span>
              <div>
                <h2 className="max-w-4xl hyphens-auto font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-4xl">
                  {editorial.productTitle}
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-marine/72">
                  {editorial.productLead}
                </p>
              </div>
            </header>

            <div className="mt-10 sm:ml-[5.5rem]">
              {editorial.products.map((product) => (
                <article
                  key={product.name}
                  className="grid gap-y-5 border-t border-brand-marine/16 py-8 xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-7"
                >
                  <h3 className="hyphens-auto font-winnstein-display text-xl leading-tight font-bold [overflow-wrap:anywhere]">
                    {product.name}
                  </h3>
                  <div>
                    <p className="text-base leading-7 text-brand-marine/72">{product.context}</p>
                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <p className="text-sm leading-6 text-brand-marine/64">
                        <strong className="mb-1 block font-winnstein-display text-brand-marine">
                          {labels.risk}
                        </strong>
                        {product.risk}
                      </p>
                      <p className="text-sm leading-6 text-brand-marine/64">
                        <strong className="mb-1 block font-winnstein-display text-brand-marine">
                          {labels.evidence}
                        </strong>
                        {product.evidence}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id={`${idPrefix}-nachweis`} className="scroll-mt-36 border-t border-brand-marine/18 py-16 sm:py-20">
            <header className="grid gap-4 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6">
              <span className="font-winnstein-display text-2xl font-bold text-brand-steel-cyan">03</span>
              <div>
                {wideImage && (
                  <>
                    <h2 className="max-w-4xl hyphens-auto font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-4xl">
                      {wideImage.title}
                    </h2>
                    <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-marine/72">
                      {wideImage.description}
                    </p>
                  </>
                )}
              </div>
            </header>

            {wideImage && imageSources?.wide && (
              <figure className="mt-10 sm:ml-[5.5rem]">
                <div className="relative aspect-[16/9] overflow-hidden bg-brand-steel-cyan-10">
                  <Image
                    src={imageSources.wide}
                    alt={wideImage.alt}
                    fill
                    showAiDisclosure={false}
                    sizes="(min-width: 1280px) 60rem, 100vw"
                    className="object-cover saturate-[0.94] contrast-[1.02]"
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-6 text-brand-marine/56">
                  {wideImage.alt}
                </figcaption>
              </figure>
            )}

            <div className="mt-12 border-t border-brand-marine/18 pt-9 sm:ml-[5.5rem]">
              <h3 className="max-w-4xl hyphens-auto font-winnstein-display text-2xl leading-tight font-bold [overflow-wrap:anywhere] sm:text-3xl">
                {labels.project}: {editorial.project.title}
              </h3>
              <dl className="mt-7 border-t border-brand-marine/16">
                {[editorial.project.challenge, editorial.project.approach, editorial.project.result].map((text, index) => (
                  <div
                    key={projectTerms[index]}
                    className="grid gap-2 border-b border-brand-marine/16 py-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6"
                  >
                    <dt className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                      {projectTerms[index]}
                    </dt>
                    <dd className="text-base leading-7 text-brand-marine/70">{text}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm leading-7 text-brand-marine/66">
                <strong className="font-winnstein-display text-brand-marine">
                  {labels.deliverables}:
                </strong>{" "}
                {editorial.project.deliverables.join(" · ")}
              </p>
            </div>
          </section>

          <section id={`${idPrefix}-felddaten`} className="scroll-mt-36 border-t border-brand-marine/18 py-16 sm:py-20">
            <header className="grid gap-4 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6">
              <span className="font-winnstein-display text-2xl font-bold text-brand-steel-cyan">04</span>
              <div>
                {portraitImage && (
                  <>
                    <h2 className="max-w-4xl hyphens-auto font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-4xl">
                      {portraitImage.title}
                    </h2>
                    <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-marine/72">
                      {portraitImage.description}
                    </p>
                  </>
                )}
              </div>
            </header>

            {portraitImage && imageSources?.portrait && (
              <figure className="mt-10 sm:ml-[5.5rem]">
                <div className="relative aspect-[16/8] min-h-[20rem] overflow-hidden bg-brand-steel-cyan-10">
                  <Image
                    src={imageSources.portrait}
                    alt={portraitImage.alt}
                    fill
                    showAiDisclosure={false}
                    sizes="(min-width: 1280px) 60rem, 100vw"
                    className="object-cover saturate-[0.94] contrast-[1.02]"
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-6 text-brand-marine/56">
                  {portraitImage.alt}
                </figcaption>
              </figure>
            )}

            {history && (
              <div className="mt-12 border-t border-brand-marine/18 pt-9 sm:ml-[5.5rem]">
                <h3 className="max-w-4xl hyphens-auto font-winnstein-display text-2xl leading-tight font-bold [overflow-wrap:anywhere] sm:text-3xl">
                  {labels.practice}: {history.title}
                </h3>
                <div className="mt-6 max-w-4xl space-y-5 text-base leading-8 text-brand-marine/72">
                  <p>{history.text}</p>
                  <p>{history.lesson}</p>
                </div>
                <a
                  href={history.sourceHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-3 font-winnstein-display text-sm font-bold text-brand-steel-cyan hover:text-brand-marine"
                >
                  {labels.source}: {history.sourceLabel}
                  <ArrowIcon external />
                </a>
              </div>
            )}
          </section>

          <section id={`${idPrefix}-zusammenarbeit`} className="scroll-mt-36 border-t border-brand-marine/18 pt-16 sm:pt-20">
            <header className="grid gap-4 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-6">
              <span className="font-winnstein-display text-2xl font-bold text-brand-steel-cyan">05</span>
              <div>
                <h2 className="max-w-4xl hyphens-auto font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-4xl">
                  {content.servicesTitle}
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-marine/72">
                  {content.servicesLead}
                </p>
              </div>
            </header>

            <div className="mt-10 sm:ml-[5.5rem]">
              {content.services.map((service) => (
                <article
                  key={service.title}
                  className="grid gap-y-4 border-t border-brand-marine/16 py-7 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-7"
                >
                  <h3 className="hyphens-auto font-winnstein-display text-xl leading-tight font-bold [overflow-wrap:anywhere]">
                    {service.title}
                  </h3>
                  <div>
                    <p className="text-base leading-7 text-brand-marine/70">{service.text}</p>
                    <p className="mt-3 text-sm leading-6 text-brand-marine/60">
                      <strong className="font-winnstein-display text-brand-marine">
                        {labels.serviceTopics}:
                      </strong>{" "}
                      {service.topics.join(" · ")}
                    </p>
                    <Link
                      href={localizeHref(locale, service.href)}
                      className="mt-4 inline-flex items-center gap-3 font-winnstein-display text-sm font-bold text-brand-steel-cyan hover:text-brand-marine"
                    >
                      {labels.serviceLink}
                      <ArrowIcon />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 border-t border-brand-marine/18 pt-8 sm:ml-[5.5rem]">
              <h3 className="font-winnstein-display text-xl font-bold">{labels.knowledge}</h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-brand-marine/68">
                {editorial.knowledgeLead}
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-4">
                {editorial.knowledge.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={localizeHref(locale, item.href)}
                      className="inline-flex items-center gap-3 border-b border-brand-steel-cyan pb-1 font-winnstein-display text-sm font-bold hover:text-brand-steel-cyan"
                    >
                      {item.title}
                      <ArrowIcon />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 border-t border-brand-marine/18 pt-9 sm:ml-[5.5rem]">
              <h3 className="font-winnstein-display text-2xl font-bold">{labels.questions}</h3>
              <div className="mt-5 border-t border-brand-marine/16">
                {content.questions.map((item, index) => (
                  <details key={item.question} open={index === 0} className="group border-b border-brand-marine/16">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-winnstein-display text-base leading-7 font-bold marker:hidden">
                      <span>{item.question}</span>
                      <span aria-hidden="true" className="text-brand-steel-cyan group-open:rotate-45">+</span>
                    </summary>
                    <p className="max-w-3xl pb-6 text-base leading-8 text-brand-marine/70">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-brand-marine/18 pt-8 sm:ml-[5.5rem]">
              <p className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                {labels.context}
              </p>
              <p className="mt-3 max-w-4xl text-base leading-8 text-brand-marine/70">
                <strong className="font-winnstein-display text-brand-marine">{content.contextTitle}.</strong>{" "}
                {content.contextText}
              </p>
              <p className="mt-4 text-sm leading-7 text-brand-marine/60">
                {content.contextTerms.join(" · ")}
              </p>
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}

const industryNavigationNames: Record<Locale, Record<string, string>> = {
  de: {
    automotive: "Automotive",
    maschinenbau: "Maschinenbau",
    "elektronische-produkte": "Elektronische Produkte",
    halbleiterindustrie: "Halbleiterindustrie",
    konsumgueter: "Consumer-Technik",
    "erneuerbare-energien": "Erneuerbare Energien",
    medizintechnik: "Medizintechnik",
    "luft-und-raumfahrt": "Luft- und Raumfahrt",
    produktionstechnik: "Produktionstechnik",
  },
  en: {
    automotive: "Automotive",
    maschinenbau: "Mechanical engineering",
    "elektronische-produkte": "Electronic products",
    halbleiterindustrie: "Semiconductor industry",
    konsumgueter: "Consumer technology",
    "erneuerbare-energien": "Renewable energy",
    medizintechnik: "Medical technology",
    "luft-und-raumfahrt": "Aerospace",
    produktionstechnik: "Production technology",
  },
};

function IndustryNavigationCardVisual({
  current = false,
  industry,
  locale,
}: {
  current?: boolean;
  industry: IndustryDetailContent;
  locale: Locale;
}) {
  const labels =
    locale === "de"
      ? { current: "Aktuell" }
      : { current: "Current" };
  const name = industryNavigationNames[locale][industry.slug] ?? industry.title;

  return (
    <span className="flex min-w-0 items-center justify-between gap-5">
      <span className="font-winnstein-display text-base leading-tight font-bold text-brand-marine">
        {name}
      </span>
      {current ? (
        <span className="shrink-0 text-xs font-semibold text-brand-steel-cyan">
          {labels.current}
        </span>
      ) : (
        <span className="shrink-0 text-brand-steel-cyan transition-transform group-hover:translate-x-1">
          <ArrowIcon />
        </span>
      )}
    </span>
  );
}

function IndustryNavigation({ locale, currentSlug }: { locale: Locale; currentSlug: string }) {
  const industries = getIndustryDetails(locale);
  const labels =
    locale === "de"
      ? {
          title: "Branche wechseln",
          all: "Alle Branchen ansehen",
        }
      : {
          title: "Change industry",
          all: "View all industries",
        };

  return (
    <section
      aria-labelledby="industry-navigation-title"
      className="bg-brand-steel-cyan-10 px-5 py-12 sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="industry-navigation-title"
              className="font-winnstein-display text-2xl leading-tight font-bold tracking-[-0.035em] sm:text-3xl"
            >
              {labels.title}
            </h2>
          </div>
          <Link
            href={localizeHref(locale, "/branchen")}
            className="inline-flex w-fit items-center gap-3 border-b border-brand-steel-cyan pb-1 font-winnstein-display text-sm font-bold hover:text-brand-steel-cyan"
          >
            {labels.all}
            <ArrowIcon />
          </Link>
        </div>

        <nav aria-label={labels.title} className="mt-8">
          <div className="grid border-t border-l border-brand-marine/16 bg-white sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const isCurrent = industry.slug === currentSlug;
              const itemClassName = `group border-r border-b border-brand-marine/16 px-5 py-4 ${
                isCurrent ? "bg-brand-steel-cyan-10" : "bg-white hover:bg-brand-steel-cyan-10/60"
              }`;

              if (isCurrent) {
                return (
                  <div
                    key={industry.slug}
                    aria-current="page"
                    className={itemClassName}
                  >
                    <IndustryNavigationCardVisual
                      current
                      industry={industry}
                      locale={locale}
                    />
                  </div>
                );
              }

              return (
                <ActiveNavLink
                  key={industry.slug}
                  href={localizeHref(locale, `/branchen/${industry.slug}`)}
                  className={`${itemClassName} transition-colors focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-steel-cyan`}
                  activeClassName=""
                >
                  <IndustryNavigationCardVisual
                    industry={industry}
                    locale={locale}
                  />
                </ActiveNavLink>
              );
            })}
          </div>
        </nav>
      </div>
    </section>
  );
}

export function IndustryDetailPage({ locale, content }: Props) {
  const { editorial } = content;
  const reverseHero = reverseHeroLayouts.has(editorial.layout);
  const labels =
    locale === "de"
      ? { industries: "Alle Branchen" }
      : { industries: "All industries" };

  return (
    <main className="font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden bg-brand-marine text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl xl:grid-cols-[minmax(0,0.92fr)_minmax(30rem,1.08fr)]">
          <div className={`flex min-w-0 flex-col justify-center px-5 py-16 sm:px-8 lg:px-10 lg:py-24 ${reverseHero ? "xl:order-2" : ""}`}>
            <Link href={localizeHref(locale, "/branchen")} className="inline-flex w-fit items-center gap-3 font-winnstein-display text-sm font-bold text-brand-steel-cyan">
              <span aria-hidden="true">←</span>
              {labels.industries}
            </Link>
            <h1 className="mt-10 max-w-4xl hyphens-auto font-winnstein-display text-4xl leading-[1.04] font-bold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-5xl xl:text-[3.4rem]">{content.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">{content.heroLead}</p>
            <Link href={localizeHref(locale, "/kontakt")} className="brand-action mt-9 inline-flex min-h-14 w-fit items-center justify-between gap-8 bg-brand-steel-cyan px-7 py-4 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-marine">
              {content.heroCta}
              <ArrowIcon />
            </Link>
          </div>

          <div className={`relative min-h-[28rem] border-t border-white/15 xl:min-h-[43rem] xl:border-t-0 ${reverseHero ? "xl:order-1 xl:border-r" : "xl:border-l"}`}>
            <Image
              src={content.heroImage}
              alt={content.heroAlt}
              fill
              preload
              sizes="(min-width: 1280px) 720px, (min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <div className={`absolute inset-0 ${reverseHero ? "bg-[linear-gradient(270deg,rgba(3,19,52,.48),transparent_48%),linear-gradient(0deg,rgba(3,19,52,.38),transparent_55%)]" : "bg-[linear-gradient(90deg,rgba(3,19,52,.54),transparent_48%),linear-gradient(0deg,rgba(3,19,52,.38),transparent_55%)]"}`} />
          </div>
        </div>
        <div className="h-2 bg-brand-steel-cyan" />
      </section>

      <IndustryEditorialFlow locale={locale} content={content} />

      <PageClosingCta
        locale={locale}
        title={content.ctaTitle}
        description={content.ctaText}
      />

      <IndustryNavigation locale={locale} currentSlug={content.slug} />
    </main>
  );
}
