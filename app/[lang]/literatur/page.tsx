import Image from "next/image";
import Link from "next/link";

import { PageIntro } from "../../_components/page-intro";
import { getSiteContent } from "../../_content/site-content";
import { localizeHref, resolveLocale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

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

  return (
    <>
      <PageIntro {...page.intro} />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {content.books.map((book) => (
            <article
              key={book.href}
              className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex h-[28rem] items-center justify-center border-b border-slate-200 bg-[linear-gradient(180deg,#f8fbfd_0%,#eef4f7_100%)] p-8">
                <Link
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={900}
                    height={book.cover.endsWith(".webp") ? 1306 : 1284}
                    className="h-full w-auto object-contain shadow-xl shadow-slate-300/70 transition-transform duration-200 hover:-translate-y-1"
                    sizes="(min-width: 1024px) 18vw, 62vw"
                  />
                </Link>
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <h2 className="text-2xl leading-tight font-semibold tracking-[-0.045em] text-balance text-slate-950 sm:text-[1.7rem]">
                  {book.title}
                </h2>
                <p className="mt-4 text-base leading-7 font-medium text-slate-600">
                  {book.subtitle}
                </p>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  {book.description}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {page.authorsLabel}: {book.authors}
                </p>
                <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                  <Link
                    href={book.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-14 items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
                  >
                    {page.bookCta}
                  </Link>
                  <Link
                    href={localizeHref(locale, "/kontakt")}
                    className="inline-flex min-h-14 items-center justify-center rounded-full border border-slate-300 px-6 py-4 text-sm font-bold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-800"
                  >
                    {page.questionCta}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
