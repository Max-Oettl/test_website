import Image from "next/image";

import { PageIntro } from "../../_components/page-intro";
import { getSiteContent, referenceLogos } from "../../_content/site-content";
import { resolveLocale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

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

  return (
    <>
      <PageIntro {...page.intro} />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {referenceLogos.map((reference) => (
            <a
              key={reference.name}
              href={reference.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={page.logoLinkLabel.replace("{name}", reference.name)}
              className="flex min-h-40 items-center justify-center rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-4"
            >
              <Image
                src={reference.src}
                alt={reference.name}
                width={220}
                height={110}
                className={
                  reference.name === "ZEISS"
                    ? "h-20 w-20 object-contain"
                    : "h-auto max-h-16 w-auto max-w-full object-contain"
                }
              />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
