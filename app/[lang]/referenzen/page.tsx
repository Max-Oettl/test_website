import Image from "next/image";
import Link from "next/link";

import { getSiteContent, referenceLogos } from "../../_content/site-content";
import { localizeHref, resolveLocale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

const referencesCopy = {
  de: {
    countLabel: "Unternehmen aus anspruchsvollen technischen Branchen",
    heroDescription:
      "RelTest unterstützt Unternehmen, deren Produkte hohe Anforderungen an Lebensdauer, Qualität und technische Nachweisführung erfüllen müssen.",
    boardEyebrow: "Zusammenarbeit",
    boardTitle: "Ausgewählte Unternehmen aus unserer Zusammenarbeit",
    externalLabel: "Unternehmenswebsite",
    ctaTitle: "Zuverlässigkeit wird im Projekt konkret.",
    ctaText:
      "Sprechen Sie mit uns über Ihre technische Fragestellung und den passenden Einstieg in die Zusammenarbeit.",
    ctaPrimary: "Projekt besprechen",
    ctaSecondary: "Expertise ansehen",
  },
  en: {
    countLabel: "companies from demanding technical industries",
    heroDescription:
      "RelTest supports companies whose products must meet demanding requirements for lifetime, quality and technical evidence.",
    boardEyebrow: "Collaboration",
    boardTitle: "Selected companies from our collaborations",
    externalLabel: "Company website",
    ctaTitle: "Reliability becomes tangible in the project.",
    ctaText:
      "Talk to us about your technical challenge and the right starting point for working together.",
    ctaPrimary: "Discuss your project",
    ctaSecondary: "View expertise",
  },
} as const;

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4"
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

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const page = getSiteContent(locale).pages.references;

  return buildLocalizedMetadata({
    locale,
    path: "/referenzen",
    title:
      locale === "de"
        ? "Referenzen und Branchenvertrauen | RelTest"
        : "References and Industry Trust | RelTest",
    description: page.intro.description,
  });
}

export default async function ReferencesPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const page = getSiteContent(locale).pages.references;
  const copy = referencesCopy[locale];
  const logos = [...referenceLogos].sort((a, b) =>
    a.name.localeCompare(b.name, locale),
  );

  return (
    <main className="font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden bg-brand-marine text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.36fr)] lg:items-end lg:px-10 lg:py-24">
          <div>
            <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
              {page.intro.eyebrow}
            </p>
            <h1 className="mt-5 max-w-5xl font-winnstein-display text-4xl leading-[1.04] font-bold tracking-[-0.035em] sm:text-5xl lg:text-[3.8rem]">
              {page.intro.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/76">
              {copy.heroDescription}
            </p>
          </div>
          <div className="border-t border-white/20 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <strong className="block font-winnstein-display text-6xl font-bold text-brand-steel-cyan sm:text-7xl">
              {logos.length}
            </strong>
            <span className="mt-3 block max-w-xs text-sm leading-6 font-semibold text-white/72">
              {copy.countLabel}
            </span>
          </div>
        </div>
        <div className="h-2 bg-brand-steel-cyan" />
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="font-winnstein-display text-sm font-bold tracking-[0.08em] text-brand-steel-cyan">
              {copy.boardEyebrow}
            </p>
            <h2 className="mt-4 max-w-4xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
              {copy.boardTitle}
            </h2>
          </div>

          <div className="mt-12 grid border-t border-l border-brand-marine/18 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {logos.map((reference) => (
              <a
                key={reference.name}
                href={reference.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={page.logoLinkLabel.replace(
                  "{name}",
                  reference.name,
                )}
                className="group relative flex min-h-48 items-center justify-center overflow-hidden border-r border-b border-brand-marine/18 bg-white px-8 py-9 focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-inset"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-steel-cyan transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                <span
                  className={
                    reference.name === "ZEISS"
                      ? "relative block h-24 w-24"
                      : "relative block h-20 w-full max-w-[13rem]"
                  }
                >
                  <Image
                    src={reference.src}
                    alt={`${reference.name} Logo`}
                    fill
                    className="object-contain"
                    sizes="210px"
                  />
                </span>
                <span className="sr-only">
                  {copy.externalLabel}: {reference.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-steel-cyan-10 px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 border-y border-brand-marine/18 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="max-w-4xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
              {copy.ctaTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-brand-marine/72">
              {copy.ctaText}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={localizeHref(locale, "/kontakt")}
              className="inline-flex min-h-12 items-center justify-between gap-6 bg-brand-marine px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-brand-steel-cyan"
            >
              {copy.ctaPrimary}
              <ArrowIcon />
            </Link>
            <Link
              href={localizeHref(locale, "/expertise")}
              className="inline-flex min-h-12 items-center justify-between gap-6 border border-brand-marine/30 px-6 py-3 font-winnstein-display text-sm font-bold transition-colors hover:border-brand-steel-cyan"
            >
              {copy.ctaSecondary}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
