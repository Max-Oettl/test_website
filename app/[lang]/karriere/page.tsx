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
    path: "/karriere",
    title:
      locale === "de"
        ? "Karriere bei RelTest Solutions"
        : "Careers at RelTest Solutions",
    description:
      locale === "de"
        ? "Karrierebereich von RelTest Solutions. Migrierte Stellen-URLs bleiben erreichbar und können vor Go-live final aktualisiert werden."
        : "Career section of RelTest Solutions. Migrated job URLs remain reachable and can be updated before go-live.",
  });
}

export default async function CareersPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const items = getDetailPages("careers", locale);

  return (
    <>
      <PageIntro
        eyebrow={locale === "de" ? "Karriere" : "Careers"}
        title={
          locale === "de"
            ? "Karriereinhalte sauber migriert statt als 404 verloren."
            : "Career content migrated cleanly instead of being lost as 404s."
        }
        description={
          locale === "de"
            ? "Die bisherigen Karriere-URLs werden als Arbeitsstand übernommen. Vor Go-live muss entschieden werden, welche Stellen aktiv, pausiert oder archiviert sind."
            : "Former career URLs are retained as a working state. Before go-live, the team should decide which positions are active, paused or archived."
        }
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <IndexCardGrid locale={locale} basePath="/karriere" items={items} />
      </section>
    </>
  );
}
