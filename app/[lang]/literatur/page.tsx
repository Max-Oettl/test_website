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
    sectionTitle: "Zuverlässigkeitstests und technische Absicherung",
    ctaTitle: "Fachfrage aus Ihrem Projekt klären",
    ctaText:
      "Wir übertragen die Methodik auf Ihre konkrete Produkt-, Prüf- oder Datenfrage.",
    cta: "Fachfrage besprechen",
  },
  en: {
    sectionTitle: "Reliability testing and technical assurance",
    ctaTitle: "Clarify a technical question from your project",
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
            <h1 className="max-w-3xl font-winnstein-display text-4xl font-extrabold sm:text-5xl lg:text-[3.6rem]">
              {page.intro.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-[1.55] text-white/78">
              {page.intro.description}
            </p>
          </div>

          <div className="relative min-h-[25rem] border-t border-white/18 lg:min-h-[38rem] lg:border-t-0 lg:border-l">
            <Image
              src="/expertise/books-and-methods.webp"
              alt=""
              fill
              preload
              sizes="(min-width: 1280px) 640px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,36,82,.28),transparent_45%)]" />
          </div>
        </div>
        <div className="h-2 bg-brand-steel-cyan" />
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-winnstein-display text-3xl font-semibold sm:text-4xl">
            {copy.sectionTitle}
          </h2>

          <div className="mt-9 grid gap-x-8 gap-y-14 lg:grid-cols-2">
            {content.books.map((book) => (
              <article
                key={book.href}
                className="grid gap-7 border-t border-brand-marine/15 pt-8 sm:grid-cols-[minmax(9rem,0.62fr)_minmax(0,1fr)] lg:gap-8 lg:[&:nth-child(even)]:border-l lg:[&:nth-child(even)]:pl-8"
              >
                <Link
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[22rem] items-center justify-center bg-brand-steel-cyan-10 px-5 py-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-inset sm:min-h-[25rem]"
                  aria-label={`${page.bookCta}: ${book.title}`}
                >
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={900}
                    height={book.cover.endsWith(".webp") ? 1306 : 1284}
                    className="h-[19rem] w-auto max-w-full object-contain transition-transform duration-300 group-hover:-translate-y-1 sm:h-[22rem]"
                    sizes="(min-width: 1024px) 14vw, (min-width: 640px) 25vw, 75vw"
                  />
                </Link>

                <div className="flex min-w-0 flex-col justify-center">
                  <h3 className="font-winnstein-display text-2xl font-semibold leading-tight">
                    {book.title}
                  </h3>
                  <p className="mt-5 text-base leading-[1.65] text-brand-marine/72">
                    {book.description}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-brand-marine/62">
                    {page.authorsLabel}: {book.authors}
                  </p>
                  <div className="mt-7 flex flex-col items-start gap-4">
                    <Link
                      href={book.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-5 border-b-2 border-brand-steel-cyan pb-1.5 font-winnstein-display text-sm font-semibold transition-colors hover:text-brand-steel-cyan"
                    >
                      {page.bookCta}
                      <ArrowIcon />
                    </Link>
                    <Link
                      href={localizeHref(locale, "/kontakt")}
                      className="inline-flex items-center gap-5 font-winnstein-display text-sm font-semibold text-brand-marine/68 transition-colors hover:text-brand-steel-cyan"
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
