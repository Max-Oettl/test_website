import type { ReactNode } from "react";
import Link from "next/link";

import { AiAwareImage as Image } from "./ai-aware-image";
import {
  getIndustryDetails,
  type IndustryDetailContent,
  type ResolvedIndustryDetailContent,
  type IndustryService,
} from "../_content/industry-detail-content";
import type { IndustryEditorialLayout } from "../_content/industry-editorial-content";
import { localizeHref, type Locale } from "../_i18n/config";
import { ActiveNavLink } from "./active-nav-link";
import { PageClosingCta } from "./page-closing-cta";
import { PageContextBar } from "./page-context-bar";

type Props = {
  locale: Locale;
  content: ResolvedIndustryDetailContent;
};

type EditorialBlock =
  | "seo"
  | "decision"
  | "products"
  | "imageWide"
  | "imagePortrait"
  | "project"
  | "knowledge"
  | "history"
  | "services"
  | "questions"
  | "context";

const sectionOrder: Record<IndustryEditorialLayout, EditorialBlock[]> = {
  "field-loop": [
    "seo",
    "products",
    "imageWide",
    "decision",
    "project",
    "history",
    "knowledge",
    "services",
    "imagePortrait",
    "questions",
    "context",
  ],
  "lifetime-curve": [
    "seo",
    "decision",
    "imagePortrait",
    "products",
    "project",
    "knowledge",
    "imageWide",
    "services",
    "questions",
    "context",
  ],
  "stress-map": [
    "seo",
    "imageWide",
    "products",
    "knowledge",
    "decision",
    "project",
    "services",
    "imagePortrait",
    "questions",
    "context",
  ],
  "qualification-stack": [
    "seo",
    "products",
    "decision",
    "project",
    "imageWide",
    "knowledge",
    "services",
    "imagePortrait",
    "questions",
    "context",
  ],
  "usage-spectrum": [
    "seo",
    "imagePortrait",
    "products",
    "history",
    "decision",
    "knowledge",
    "project",
    "imageWide",
    "services",
    "questions",
    "context",
  ],
  "asset-cycle": [
    "seo",
    "decision",
    "products",
    "imageWide",
    "history",
    "project",
    "knowledge",
    "services",
    "imagePortrait",
    "questions",
    "context",
  ],
  "safety-case": [
    "seo",
    "project",
    "imagePortrait",
    "products",
    "decision",
    "history",
    "knowledge",
    "imageWide",
    "services",
    "questions",
    "context",
  ],
  "mission-chain": [
    "seo",
    "imageWide",
    "decision",
    "history",
    "products",
    "project",
    "knowledge",
    "services",
    "imagePortrait",
    "questions",
    "context",
  ],
  "availability-loop": [
    "seo",
    "products",
    "project",
    "decision",
    "imagePortrait",
    "knowledge",
    "services",
    "imageWide",
    "questions",
    "context",
  ],
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

function SectionShell({
  children,
  className = "bg-white",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`${className} px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24`}>
      <div className="mx-auto min-w-0 max-w-7xl">{children}</div>
    </section>
  );
}

function SeoSection({ content }: Pick<Props, "content">) {
  const { editorial } = content;

  return (
    <SectionShell>
      <div className="grid gap-9 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-14">
        <div className="min-w-0">
          <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
            {editorial.seoEyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl hyphens-auto font-winnstein-display text-3xl leading-[1.12] font-bold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-4xl xl:text-[2.65rem]">
            {editorial.seoTitle}
          </h2>
        </div>
        <div className="min-w-0 space-y-6 border-t border-brand-marine/18 pt-7 text-lg leading-8 text-brand-marine/72 xl:border-t-0 xl:border-l xl:pt-0 xl:pl-10">
          {editorial.seoParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function DecisionSection({ content }: Pick<Props, "content">) {
  return (
    <SectionShell className="bg-brand-steel-cyan-10">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:gap-14">
        <div className="min-w-0">
          <h2 className="max-w-2xl hyphens-auto font-winnstein-display text-3xl leading-[1.12] font-bold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-4xl">
            {content.decisionTitle}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-marine/72">
            {content.decisionText}
          </p>
        </div>
        <div className="relative min-w-0 pl-6 sm:pl-10">
          <span className="absolute top-3 bottom-3 left-0 w-px bg-brand-steel-cyan/55" />
          <div className="space-y-5">
            {content.decisionPath.map((step, index) => (
              <article
                key={step.label}
                className={`relative bg-white p-6 shadow-[0_16px_40px_rgba(3,19,52,0.06)] sm:grid sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-5 ${
                  index % 2 === 1 ? "sm:ml-10" : "sm:mr-10"
                }`}
              >
                <span className="absolute top-8 -left-[1.79rem] h-3 w-3 rounded-full border-2 border-white bg-brand-steel-cyan sm:-left-[2.91rem]" />
                <span className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                  0{index + 1}
                </span>
                <div>
              <h3 className="hyphens-auto font-winnstein-display text-xl font-bold [overflow-wrap:anywhere]">
                    {step.label}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-brand-marine/68">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function ProductsSection({ locale, content }: Props) {
  const { editorial } = content;
  const featureLast = ["stress-map", "mission-chain"].includes(editorial.layout);
  const featuredIndex = featureLast ? editorial.products.length - 1 : 0;
  const label = locale === "de" ? "Produktfokus" : "Product focus";

  return (
    <SectionShell>
      <div className="grid gap-8 border-b border-brand-marine/16 pb-9 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-end">
        <h2 className="min-w-0 max-w-3xl hyphens-auto font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-4xl xl:text-[2.65rem]">
          {editorial.productTitle}
        </h2>
        <p className="min-w-0 max-w-3xl text-lg leading-8 text-brand-marine/72">
          {editorial.productLead}
        </p>
      </div>
      <div className="mt-9 grid gap-5 lg:grid-cols-12">
        {editorial.products.map((product, index) => {
          const featured = index === featuredIndex;

          return (
            <article
              key={product.name}
              className={`relative overflow-hidden border border-brand-marine/16 p-7 sm:p-8 ${
                featured
                  ? "bg-brand-marine text-white lg:col-span-6 lg:row-span-2"
                  : "bg-white lg:col-span-6"
              }`}
            >
              <span className="font-winnstein-display text-xs font-bold tracking-[0.12em] text-brand-steel-cyan uppercase">
                {label} · 0{index + 1}
              </span>
              <h3 className="mt-5 hyphens-auto font-winnstein-display text-2xl leading-tight font-bold [overflow-wrap:anywhere] sm:text-3xl">
                {product.name}
              </h3>
              <p className={`mt-5 leading-7 ${featured ? "text-white/76" : "text-brand-marine/70"}`}>
                {product.context}
              </p>
              <div className={`mt-7 grid gap-5 border-t pt-6 sm:grid-cols-2 ${featured ? "border-white/18" : "border-brand-marine/14"}`}>
                <p className={`text-sm leading-6 ${featured ? "text-white/68" : "text-brand-marine/64"}`}>
                  <strong className={`mb-1 block font-winnstein-display ${featured ? "text-white" : "text-brand-marine"}`}>
                    {locale === "de" ? "Risikofeld" : "Risk field"}
                  </strong>
                  {product.risk}
                </p>
                <p className={`text-sm leading-6 ${featured ? "text-white/68" : "text-brand-marine/64"}`}>
                  <strong className={`mb-1 block font-winnstein-display ${featured ? "text-white" : "text-brand-marine"}`}>
                    {locale === "de" ? "Belastbarer Nachweis" : "Robust evidence"}
                  </strong>
                  {product.evidence}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}

function ImageBriefSection({
  content,
  format,
}: Props & { format: "wide" | "portrait" }) {
  const image = content.editorial.imageBriefs.find((item) => item.format === format);
  const imageSrc = industryEditorialImages[content.slug]?.[format];

  if (!image || !imageSrc) return null;

  return (
    <SectionShell className={format === "wide" ? "bg-brand-marine text-white" : "bg-white"}>
      <div
        className={`grid overflow-hidden border ${
          format === "wide"
            ? "border-white/18 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)]"
            : "border-brand-marine/16 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)]"
        }`}
      >
        <div
          className={`relative min-h-[22rem] overflow-hidden ${
            format === "wide"
              ? "bg-white/[0.055] lg:min-h-[30rem]"
              : "bg-brand-steel-cyan-10 lg:min-h-[35rem]"
          }`}
        >
          <Image
            src={imageSrc}
            alt={image.alt}
            fill
            showAiDisclosure={false}
            sizes={
              format === "wide"
                ? "(min-width: 1024px) 65vw, 100vw"
                : "(min-width: 1024px) 36vw, 100vw"
            }
            className="object-cover saturate-[0.94] contrast-[1.02]"
          />
          <span
            aria-hidden="true"
            className={`absolute inset-0 ${
              format === "wide"
                ? "bg-[linear-gradient(90deg,rgba(3,19,52,.12),transparent_45%)]"
                : "bg-[linear-gradient(0deg,rgba(3,19,52,.08),transparent_42%)]"
            }`}
          />
        </div>
        <div className={`min-w-0 flex flex-col justify-center p-8 sm:p-10 ${format === "wide" ? "lg:order-first" : ""}`}>
          <p className="font-winnstein-display text-xs font-bold tracking-[0.12em] text-brand-steel-cyan uppercase">
            {image.label}
          </p>
          <h2 className="mt-5 hyphens-auto font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.03em] [overflow-wrap:anywhere] sm:text-4xl">
            {image.title}
          </h2>
          <p className={`mt-6 text-base leading-8 ${format === "wide" ? "text-white/72" : "text-brand-marine/70"}`}>
            {image.description}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

function ProjectSection({ locale, content }: Props) {
  const project = content.editorial.project;
  const terms =
    locale === "de"
      ? ["Ausgangslage", "Engineering-Ansatz", "Entscheidungswert"]
      : ["Challenge", "Engineering approach", "Decision value"];

  return (
    <SectionShell className="bg-brand-marine text-white">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-14">
        <div className="min-w-0">
          <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
            {project.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl hyphens-auto font-winnstein-display text-3xl leading-[1.12] font-bold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-4xl xl:text-[2.65rem]">
            {project.title}
          </h2>
          <div className="mt-9 flex flex-wrap gap-3">
            {project.deliverables.map((deliverable) => (
              <span key={deliverable} className="border border-white/20 px-4 py-2 text-sm text-white/78">
                {deliverable}
              </span>
            ))}
          </div>
        </div>
        <div className="min-w-0 space-y-1 border-t border-white/18">
          {[project.challenge, project.approach, project.result].map((text, index) => (
            <article key={terms[index]} className="grid gap-3 border-b border-white/18 py-6 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-7">
              <h3 className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                {terms[index]}
              </h3>
              <p className="text-base leading-7 text-white/74">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function KnowledgeSection({ locale, content }: Props) {
  const { editorial } = content;
  const label = locale === "de" ? "Wissen" : "Knowledge";

  return (
    <SectionShell className="bg-brand-steel-cyan-10">
      <div className="grid gap-9 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:gap-14">
        <div className="min-w-0">
          <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
            {label}
          </p>
          <h2 className="mt-4 hyphens-auto font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-4xl">
            {editorial.knowledgeTitle}
          </h2>
          <p className="mt-5 text-base leading-8 text-brand-marine/70">
            {editorial.knowledgeLead}
          </p>
        </div>
        <div className="min-w-0 grid border-t border-l border-brand-marine/16 sm:grid-cols-2">
          {editorial.knowledge.map((item, index) => (
            <Link
              key={item.href}
              href={localizeHref(locale, item.href)}
              className={`group flex min-h-56 flex-col border-r border-b border-brand-marine/16 bg-white p-6 transition-colors hover:bg-brand-marine hover:text-white focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-steel-cyan ${
                editorial.knowledge.length % 2 === 1 &&
                index === editorial.knowledge.length - 1
                  ? "sm:col-span-2"
                  : ""
              }`}
            >
              <span className="font-winnstein-display text-xs font-bold text-brand-steel-cyan">0{index + 1}</span>
              <h3 className="mt-5 hyphens-auto font-winnstein-display text-xl leading-tight font-bold [overflow-wrap:anywhere]">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-brand-marine/66 group-hover:text-white/70">{item.text}</p>
              <span className="mt-5 inline-flex items-center justify-between gap-5 font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                {item.linkLabel}
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function HistorySection({ content }: Pick<Props, "content">) {
  const history = content.editorial.history;

  if (!history) return null;

  return (
    <SectionShell>
    <article className="relative overflow-hidden border-l-4 border-brand-steel-cyan bg-brand-marine px-7 py-9 text-white sm:px-10 sm:py-12 xl:grid xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] xl:gap-14">
        <div className="min-w-0">
          <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">{history.eyebrow}</p>
          <h2 className="mt-4 hyphens-auto font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-4xl">{history.title}</h2>
        </div>
        <div className="mt-7 min-w-0 xl:mt-0">
          <p className="text-base leading-8 text-white/74">{history.text}</p>
          <p className="mt-6 border-t border-white/18 pt-6 text-base leading-8 text-white">{history.lesson}</p>
          <a
            href={history.sourceHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-3 font-winnstein-display text-sm font-bold text-brand-steel-cyan hover:text-white"
          >
            {history.sourceLabel}
            <ArrowIcon external />
          </a>
        </div>
      </article>
    </SectionShell>
  );
}

function ServiceCard({
  locale,
  service,
  index,
}: {
  locale: Locale;
  service: IndustryService;
  index: number;
}) {
  return (
    <article className="flex flex-col border border-brand-marine/16 bg-white p-7 sm:p-8">
      <span className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">0{index + 1}</span>
      <h3 className="mt-5 hyphens-auto font-winnstein-display text-2xl leading-tight font-bold [overflow-wrap:anywhere]">{service.title}</h3>
      <p className="mt-4 flex-1 text-base leading-7 text-brand-marine/70">{service.text}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {service.topics.map((topic) => (
          <span key={topic} className="bg-brand-steel-cyan-10 px-3 py-2 text-xs font-semibold text-brand-marine/78">{topic}</span>
        ))}
      </div>
      <Link
        href={localizeHref(locale, service.href)}
        className="group mt-7 inline-flex items-center justify-between border-t border-brand-marine/16 pt-5 font-winnstein-display text-sm font-bold text-brand-marine hover:text-brand-steel-cyan"
      >
        {locale === "de" ? "Leistung im Detail" : "Explore service"}
        <span className="transition-transform group-hover:translate-x-1"><ArrowIcon /></span>
      </Link>
    </article>
  );
}

function ServicesSection({ locale, content }: Props) {
  return (
    <SectionShell className="bg-brand-steel-cyan-10">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-end">
        <h2 className="min-w-0 hyphens-auto font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-4xl xl:text-[2.65rem]">{content.servicesTitle}</h2>
        <p className="min-w-0 max-w-3xl text-lg leading-8 text-brand-marine/72">{content.servicesLead}</p>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {content.services.map((service, index) => (
          <ServiceCard key={service.title} locale={locale} service={service} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}

function QuestionsSection({ locale, content }: Props) {
  return (
    <SectionShell>
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] xl:gap-14">
        <div className="min-w-0">
          <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
            {locale === "de" ? "Aus dem Projektalltag" : "From project practice"}
          </p>
          <h2 className="mt-4 hyphens-auto font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-4xl">{content.questionsTitle}</h2>
        </div>
        <div className="min-w-0 border-t border-brand-marine/18">
          {content.questions.map((item, index) => (
            <details key={item.question} open={index === 0} className="group border-b border-brand-marine/18">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-winnstein-display text-lg leading-7 font-bold marker:hidden">
                <span className="flex gap-5"><span className="text-sm text-brand-steel-cyan">0{index + 1}</span>{item.question}</span>
                <span aria-hidden="true" className="text-brand-steel-cyan group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-3xl pb-7 pl-10 text-base leading-8 text-brand-marine/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function ContextSection({ locale, content }: Props) {
  return (
    <SectionShell className="bg-brand-marine text-white">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-center xl:gap-14">
        <div className="min-w-0">
          <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
            {locale === "de" ? "Fachlicher Kontext" : "Engineering context"}
          </p>
          <h2 className="mt-4 hyphens-auto font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-4xl">{content.contextTitle}</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/72">{content.contextText}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {content.contextTerms.map((term, index) => (
            <span key={term} className={`border border-white/20 px-5 py-4 font-winnstein-display text-sm font-bold ${index % 3 === 1 ? "bg-white text-brand-marine" : "text-white"}`}>{term}</span>
          ))}
        </div>
      </div>
    </SectionShell>
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
      ? { current: "Aktuelle Branche", discover: "Entdecken" }
      : { current: "Current industry", discover: "Explore" };
  const name = industryNavigationNames[locale][industry.slug] ?? industry.title;

  return (
    <>
      <Image
        src={industry.heroImage}
        alt=""
        fill
        aria-hidden="true"
        sizes="(min-width: 768px) 50vw, 100vw"
        className={`-z-20 object-cover object-center saturate-[0.72] transition duration-500 motion-reduce:transform-none ${
          current
            ? "opacity-70"
            : "opacity-55 group-hover:scale-[1.025] group-hover:opacity-65"
        }`}
      />
      <span
        aria-hidden="true"
        className={`absolute inset-0 -z-10 ${
          current
            ? "bg-[linear-gradient(90deg,rgba(232,245,252,0.99)_0%,rgba(232,245,252,0.93)_48%,rgba(232,245,252,0.34)_100%)]"
            : "bg-[linear-gradient(90deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.93)_48%,rgba(255,255,255,0.28)_100%)]"
        }`}
      />

      <span className="relative flex min-w-0 flex-col gap-3">
        <span className="font-winnstein-display text-xl leading-tight font-bold tracking-[-0.025em] text-brand-marine sm:text-2xl">
          {name}
        </span>
        <span
          className={`inline-flex w-fit items-center gap-3 font-winnstein-display text-sm font-bold ${
            current ? "text-brand-marine" : "text-brand-marine/68"
          }`}
        >
          {current ? labels.current : labels.discover}
          {!current && <ArrowIcon />}
        </span>
      </span>

      {current && (
        <span
          aria-hidden="true"
          className="absolute inset-0 ring-2 ring-inset ring-brand-steel-cyan"
        />
      )}
    </>
  );
}

function IndustryNavigation({ locale, currentSlug }: { locale: Locale; currentSlug: string }) {
  const industries = getIndustryDetails(locale);
  const labels =
    locale === "de"
      ? {
          eyebrow: "Branchennavigation",
          title: "Branchen im Überblick",
          description:
            "Wechseln Sie direkt zu den branchenspezifischen Anforderungen, Risikofeldern und Methoden der Zuverlässigkeitstechnik.",
        }
      : {
          eyebrow: "Industry navigation",
          title: "Industries at a glance",
          description:
            "Go directly to industry-specific requirements, risk fields and reliability engineering methods.",
        };

  return (
    <section
      aria-labelledby="industry-navigation-title"
      className="bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-end lg:gap-12">
          <div>
            <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
              {labels.eyebrow}
            </p>
            <h2
              id="industry-navigation-title"
              className="mt-4 font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl"
            >
              {labels.title}
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-brand-marine/72">
            {labels.description}
          </p>
        </div>

        <div className="mt-10 grid border-t border-l border-brand-marine/18 md:grid-cols-2">
          {industries.map((industry, index) => {
            const isCurrent = industry.slug === currentSlug;
            const spansFullRow =
              industries.length % 2 === 1 && index === industries.length - 1;
            const cardClassName = `group relative isolate flex min-h-32 items-center overflow-hidden border-r border-b border-brand-marine/18 px-6 py-6 sm:min-h-36 sm:px-8 ${
              spansFullRow ? "md:col-span-2" : ""
            } ${isCurrent ? "bg-brand-steel-cyan-10" : "bg-white"}`;

            if (isCurrent) {
              return (
                <div
                  key={industry.slug}
                  aria-current="page"
                  className={cardClassName}
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
                className={`${cardClassName} transition-colors hover:border-brand-steel-cyan focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-steel-cyan`}
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
      </div>
    </section>
  );
}

export function IndustryDetailPage({ locale, content }: Props) {
  const { editorial } = content;
  const reverseHero = reverseHeroLayouts.has(editorial.layout);
  const labels =
    locale === "de"
      ? { eyebrow: "Branchenkompetenz", industries: "Alle Branchen", section: "Branchen" }
      : { eyebrow: "Industry expertise", industries: "All industries", section: "Industries" };

  const blocks: Record<EditorialBlock, ReactNode> = {
    seo: <SeoSection content={content} />,
    decision: <DecisionSection content={content} />,
    products: <ProductsSection locale={locale} content={content} />,
    imageWide: <ImageBriefSection locale={locale} content={content} format="wide" />,
    imagePortrait: <ImageBriefSection locale={locale} content={content} format="portrait" />,
    project: <ProjectSection locale={locale} content={content} />,
    knowledge: <KnowledgeSection locale={locale} content={content} />,
    history: <HistorySection content={content} />,
    services: <ServicesSection locale={locale} content={content} />,
    questions: <QuestionsSection locale={locale} content={content} />,
    context: <ContextSection locale={locale} content={content} />,
  };

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
            <p className="mt-9 font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">{labels.eyebrow}</p>
            <p className="mt-4 w-fit border border-white/20 px-3 py-2 text-xs font-semibold tracking-[0.06em] text-white/76">{editorial.heroTag}</p>
            <h1 className="mt-5 max-w-4xl hyphens-auto font-winnstein-display text-4xl leading-[1.04] font-bold tracking-[-0.035em] [overflow-wrap:anywhere] sm:text-5xl xl:text-[3.4rem]">{content.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">{content.heroLead}</p>
            <Link href={localizeHref(locale, "/kontakt")} className="brand-action mt-9 inline-flex min-h-14 w-fit items-center justify-between gap-8 bg-brand-steel-cyan px-7 py-4 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-marine">
              {content.heroCta}
              <ArrowIcon />
            </Link>
          </div>

          <div className={`relative min-h-[28rem] border-t border-white/15 xl:min-h-[43rem] xl:border-t-0 ${reverseHero ? "xl:order-1 xl:border-r" : "xl:border-l"}`}>
            <Image src={content.heroImage} alt={content.heroAlt} fill preload sizes="(min-width: 1280px) 54vw, 100vw" className="object-cover" />
            <div className={`absolute inset-0 ${reverseHero ? "bg-[linear-gradient(270deg,rgba(3,19,52,.48),transparent_48%),linear-gradient(0deg,rgba(3,19,52,.38),transparent_55%)]" : "bg-[linear-gradient(90deg,rgba(3,19,52,.54),transparent_48%),linear-gradient(0deg,rgba(3,19,52,.38),transparent_55%)]"}`} />
          </div>
        </div>
        <div className="h-2 bg-brand-steel-cyan" />
      </section>

      <PageContextBar locale={locale} sectionHref="/branchen" sectionLabel={labels.section} currentLabel={content.title} />

      {sectionOrder[editorial.layout].map((block) => (
        <div key={block}>{blocks[block]}</div>
      ))}

      <PageClosingCta
        locale={locale}
        title={content.ctaTitle}
        description={content.ctaText}
      />

      <IndustryNavigation locale={locale} currentSlug={content.slug} />
    </main>
  );
}
