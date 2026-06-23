import { IndexCardGrid } from "../../_components/index-card-grid";
import { PageIntro } from "../../_components/page-intro";
import { getDetailPages } from "../../_content/migration-pages";
import { resolveLocale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);

  return buildLocalizedMetadata({
    locale,
    path: "/branchen",
    title:
      locale === "de"
        ? "Branchen für Reliability Engineering | RelTest Solutions"
        : "Industries for Reliability Engineering | RelTest Solutions",
    description:
      locale === "de"
        ? "Branchenüberblick für Zuverlässigkeitstechnik, Erprobung und technische Absicherung in Automotive, Maschinenbau, Elektronik und weiteren Industrien."
        : "Industry overview for reliability engineering, testing and validation in automotive, mechanical engineering, electronics and other industries.",
  });
}

export default async function IndustriesPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const items = getDetailPages("industries", locale);

  return (
    <>
      <PageIntro
        eyebrow={locale === "de" ? "Branchen" : "Industries"}
        title={
          locale === "de"
            ? "Zuverlässigkeit ist je nach Branche unterschiedlich kritisch."
            : "Reliability matters differently in every industry."
        }
        description={
          locale === "de"
            ? "Die neue Website bündelt die bisherigen Brancheninhalte in einer klaren Struktur und zeigt, wie RelTest Methoden auf unterschiedliche technische Kontexte überträgt."
            : "The new website consolidates the former industry content into a clearer structure and shows how RelTest applies methods to different technical contexts."
        }
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <IndexCardGrid locale={locale} basePath="/branchen" items={items} />
      </section>
    </>
  );
}
