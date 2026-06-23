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
    path: "/aktuelles",
    title:
      locale === "de"
        ? "Aktuelles zu Reliability Engineering | RelTest"
        : "Reliability Engineering News | RelTest",
    description:
      locale === "de"
        ? "Migrierte News, Webinare und fachliche Hinweise von RelTest Solutions mit Verbindung zu Wissen, Leistungen und Zuverlässigkeitstechnik."
        : "Migrated news, webinars and technical updates from RelTest Solutions connected to knowledge, services and reliability engineering.",
  });
}

export default async function NewsPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const items = getDetailPages("news", locale);

  return (
    <>
      <PageIntro
        eyebrow={locale === "de" ? "Aktuelles" : "News"}
        title={
          locale === "de"
            ? "Fachliche Impulse bleiben erhalten, aber werden klarer eingeordnet."
            : "Technical updates are retained and connected more clearly."
        }
        description={
          locale === "de"
            ? "Die alten News- und Webinar-URLs werden nicht unkontrolliert entfernt. Relevante Themen werden in die neue Wissens- und Leistungsstruktur eingebunden."
            : "Former news and webinar URLs are not removed blindly. Relevant topics are connected to the new knowledge and service structure."
        }
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <IndexCardGrid locale={locale} basePath="/aktuelles" items={items} />
      </section>
    </>
  );
}
