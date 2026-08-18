import Link from "next/link";

import { AiAwareImage as Image } from "../../_components/ai-aware-image";
import { getSiteContent } from "../../_content/site-content";
import { PageClosingCta } from "../../_components/page-closing-cta";
import { localizeHref, resolveLocale, type Locale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

const literatureCopy = {
  de: {
    count: "2 Springer-Fachbücher",
    context: "Methodik aus Forschung und Ingenieurpraxis",
    sectionTitle: "Publizierte Expertise, die in Projekten anwendbar bleibt.",
    sectionText:
      "Die Bücher verbinden Grundlagen, Prüfstrategien und statistische Verfahren mit den Entscheidungen, die Entwicklung und Freigabe technischer Produkte prägen.",
    bookLabel: "Fachbuch",
    ctaTitle: "Eine Fachfrage aus Ihrem Projekt einordnen?",
    ctaText:
      "Wir übertragen die Methodik auf Ihre konkrete Produkt-, Prüf- oder Datenfrage.",
    cta: "Fachfrage besprechen",
  },
  en: {
    count: "2 Springer reference books",
    context: "Methods grounded in research and engineering practice",
    sectionTitle: "Published expertise that remains applicable in projects.",
    sectionText:
      "The books connect fundamentals, test strategies and statistical methods with the decisions that shape engineering and product release.",
    bookLabel: "Reference book",
    ctaTitle: "Would you like to assess a technical question from your project?",
    ctaText:
      "We apply the methodology to your specific product, testing or data challenge.",
    cta: "Discuss a technical question",
  },
} as const satisfies Record<Locale, object>;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
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

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = getSiteContent(locale);

  return buildLocalizedMetadata({
    locale,
    path: "/literatur",
    title:
      locale === "de"
        ? "Fachliteratur zu Zuverlässigkeitstests und Zuverlässigkeit | RelTest"
        : "Reliability Engineering Literature | RelTest",
    description: content.pages.literature.intro.description,
  });
}

export default async function LiteraturePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = getSiteContent(locale);
  const page = content.pages.literature;
  const copy = literatureCopy[locale];

  return (
    <main className="font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden bg-brand-marine text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <p className="font-winnstein-display text-sm font-semibold text-brand-steel-cyan">
              {page.intro.eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl font-winnstein-display text-4xl font-extrabold sm:text-5xl lg:text-[3.6rem]">
              {page.intro.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-[1.55] text-white/78">
              {page.intro.description}
            </p>
            <div className="mt-10 grid max-w-xl border-y border-white/18 sm:grid-cols-2">
              <div className="py-5 sm:border-r sm:border-white/18 sm:pr-6">
                <strong className="block font-winnstein-display text-xl font-semibold text-white">
                  {copy.count}
                </strong>
              </div>
              <div className="border-t border-white/18 py-5 sm:border-t-0 sm:pl-6">
                <span className="block text-sm leading-6 text-white/68">
                  {copy.context}
                </span>
              </div>
            </div>
          </div>

          <div className="relative min-h-[25rem] border-t border-white/18 lg:min-h-[38rem] lg:border-t-0 lg:border-l">
            <Image
              src="/expertise/books-and-methods.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,36,82,.28),transparent_45%)]" />
          </div>
        </div>
        <div className="h-2 bg-brand-steel-cyan" />
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 border-b border-brand-marine/15 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <h2 className="max-w-3xl font-winnstein-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              {copy.sectionTitle}
            </h2>
            <p className="max-w-3xl text-lg leading-[1.55] text-brand-marine/72 lg:justify-self-end">
              {copy.sectionText}
            </p>
          </div>

          <div className="border-l border-brand-marine/15">
            {content.books.map((book, index) => (
              <article
                key={book.href}
                className="grid border-r border-b border-brand-marine/15 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)]"
              >
                <Link
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex min-h-[30rem] items-center justify-center overflow-hidden bg-brand-steel-cyan-10 px-7 py-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-inset sm:min-h-[35rem]"
                  aria-label={`${page.bookCta}: ${book.title}`}
                >
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={900}
                    height={book.cover.endsWith(".webp") ? 1306 : 1284}
                    className="h-[27rem] w-auto max-w-full object-contain transition-transform duration-300 group-hover:-translate-y-1 sm:h-[31rem]"
                    sizes="(min-width: 1024px) 22vw, 65vw"
                  />
                </Link>

                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <div className="flex items-center gap-4">
                    <span className="font-winnstein-display text-sm font-semibold text-brand-steel-cyan">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-brand-marine/15" />
                    <span className="text-sm text-brand-marine/58">{copy.bookLabel}</span>
                  </div>
                  <h2 className="mt-7 max-w-3xl font-winnstein-display text-3xl font-semibold sm:text-4xl">
                    {book.title}
                  </h2>
                  <p className="mt-5 text-lg font-semibold leading-[1.45] text-brand-steel-cyan">
                    {book.subtitle}
                  </p>
                  <p className="mt-7 max-w-3xl text-base leading-[1.65] text-brand-marine/72">
                    {book.description}
                  </p>
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-brand-marine/62">
                    {page.authorsLabel}: {book.authors}
                  </p>
                  <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <Link
                      href={book.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brand-action inline-flex min-h-12 items-center justify-between gap-7 bg-brand-marine px-6 py-3 font-winnstein-display text-sm font-semibold text-white transition-colors hover:bg-brand-steel-cyan"
                    >
                      {page.bookCta}
                      <ArrowIcon />
                    </Link>
                    <Link
                      href={localizeHref(locale, "/kontakt")}
                      className="inline-flex items-center gap-5 border-b-2 border-brand-steel-cyan pb-2 font-winnstein-display text-sm font-semibold"
                    >
                      {page.questionCta}
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageClosingCta
        locale={locale}
        title={copy.ctaTitle}
        description={copy.ctaText}
      />
    </main>
  );
}
