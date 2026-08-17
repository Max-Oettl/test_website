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
    path: "/impressum",
    title:
      locale === "de"
        ? "Impressum | RelTest Solutions"
        : "Legal notice | RelTest Solutions",
    description:
      locale === "de"
        ? "Impressum der RelTest Solutions GmbH. Arbeitsstand für den Website-Relaunch, vor Go-live rechtlich final prüfen."
        : "Legal notice of RelTest Solutions GmbH. Working state for the website relaunch, to be legally reviewed before go-live.",
  });
}

export default async function LegalNoticePage({ params }: Props) {
  const locale = await resolveLocale(params);

  return (
    <>
      <PageIntro
        eyebrow={locale === "de" ? "Impressum" : "Legal notice"}
        title={
          locale === "de"
            ? "Impressum der RelTest Solutions GmbH"
            : "Legal notice of RelTest Solutions GmbH"
        }
        description={
          locale === "de"
            ? "Diese Seite ist für die Migration angelegt. Der Rechtstext muss vor Go-live mit den finalen Angaben der bestehenden Website und ggf. juristisch geprüft werden."
            : "This page is prepared for migration. The legal text must be reviewed before go-live against the final company information and legal requirements."
        }
      />
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
            RelTest Solutions GmbH
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
            <p>Steglen 26, 71083 Herrenberg, Deutschland</p>
            <p>E-Mail: info@reltest-solutions.com</p>
            <p>Telefon: +49 711 25253531</p>
            <p>
              {locale === "de"
                ? "Vertretungsberechtigte Person, Registerangaben, Umsatzsteuer-ID und weitere Pflichtinformationen müssen vor Veröffentlichung aus dem bestehenden Impressum übernommen und final geprüft werden."
                : "Authorised representative, register information, VAT ID and further mandatory information must be transferred from the existing legal notice and reviewed before publication."}
            </p>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
              {locale === "de" ? "Hinweis zu Bildinhalten" : "Notice on visual content"}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {locale === "de"
                ? "Auf dieser Website werden teilweise KI-generierte und KI-bearbeitete Bilder und Grafiken verwendet."
                : "This website uses some AI-generated and AI-edited images and graphics."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
