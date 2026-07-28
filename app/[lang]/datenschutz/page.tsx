import { PageIntro } from "../../_components/page-intro";
import { resolveLocale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);

  return buildLocalizedMetadata({
    locale,
    path: "/datenschutz",
    title:
      locale === "de"
        ? "Datenschutz | RelTest Solutions"
        : "Privacy policy | RelTest Solutions",
    description:
      locale === "de"
        ? "Datenschutzhinweise der RelTest Solutions GmbH. Arbeitsstand für den Relaunch mit Hinweisen zu Calendly, Tracking und Drittanbietern."
        : "Privacy information for RelTest Solutions GmbH. Working state for the relaunch with notes on Calendly, tracking and third-party services.",
  });
}

export default async function PrivacyPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const isGerman = locale === "de";

  return (
    <>
      <PageIntro
        eyebrow={isGerman ? "Datenschutz" : "Privacy"}
        title={
          isGerman
            ? "Datenschutz für die neue RelTest-Website"
            : "Privacy for the new RelTest website"
        }
        description={
          isGerman
            ? "Diese Seite ist als Migrationsgrundlage angelegt und muss vor Go-live final rechtlich geprüft werden, insbesondere wegen Calendly, Analytics, Videos und Consent."
            : "This page is prepared as a migration basis and must be legally reviewed before go-live, especially regarding Calendly, analytics, videos and consent."
        }
      />
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5">
          {[
            [
              isGerman ? "Verantwortlicher" : "Controller",
              isGerman
                ? "RelTest Solutions GmbH, Steglen 26, 71083 Herrenberg, info@reltest-solutions.com."
                : "RelTest Solutions GmbH, Steglen 26, 71083 Herrenberg, Germany, info@reltest-solutions.com.",
            ],
            [
              isGerman ? "Calendly" : "Calendly",
              isGerman
                ? "Die Kontaktseite bindet Calendly für Terminbuchungen als Drittanbieter-Element ein und bietet zusätzlich einen direkten Calendly-Link als Fallback. Vor Go-live muss die finale Einbindung rechtlich und consent-seitig geprüft werden."
                : "The contact page embeds Calendly as a third-party booking element and also provides a direct Calendly fallback link. Before go-live, the final integration must be reviewed from a legal and consent perspective.",
            ],
            [
              isGerman ? "Analytics und Tracking" : "Analytics and tracking",
              isGerman
                ? "Vor Go-live muss entschieden werden, ob Matomo, Google Tag Manager oder ein anderer Analytics-Ansatz genutzt wird. Tracking darf nur datenschutzkonform eingebunden werden."
                : "Before go-live, the team must decide whether Matomo, Google Tag Manager or another analytics setup is used. Tracking must be integrated in a privacy-compliant way.",
            ],
            [
              isGerman ? "Drittanbieter und Medien" : "Third-party services and media",
              isGerman
                ? "Externe Dienste wie Videos, Podcast-Links, RelTest Education, Springer und Social-Profile müssen in der finalen Datenschutzerklärung berücksichtigt werden."
                : "External services such as videos, podcast links, RelTest Education, Springer and social profiles must be covered in the final privacy policy.",
            ],
          ].map(([title, body]) => (
            <article
              key={title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                {title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
