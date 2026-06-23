import { PageIntro } from "../../_components/page-intro";
import { getSiteContent } from "../../_content/site-content";
import { resolveLocale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

const calendlyHref = "https://calendly.com/kevin-lucan";
const calendlyEmbedHref =
  "https://calendly.com/kevin-lucan?hide_gdpr_banner=1&primary_color=0891b2";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const page = getSiteContent(locale).pages.contact;

  return buildLocalizedMetadata({
    locale,
    path: "/kontakt",
    title:
      locale === "de"
        ? "Kontakt und Projektanfrage | RelTest Solutions"
        : "Contact and Project Inquiry | RelTest Solutions",
    description: page.intro.description,
  });
}

export default async function ContactPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const page = getSiteContent(locale).pages.contact;

  return (
    <>
      <PageIntro {...page.intro} />

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbfd_0%,#edf4f8_100%)] px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -right-28 top-12 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
          <div className="flex flex-col rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/70 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              {page.calendly.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              {page.calendly.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              {page.calendly.description}
            </p>

            <div className="mt-8 grid gap-3">
              {page.calendly.points.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4"
                >
                  <p className="text-sm leading-6 font-medium text-slate-200">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <a
                href={calendlyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-4 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
              >
                {page.calendly.fallback}
              </a>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {page.calendly.note}
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-300/60">
            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-700">
                  Calendly
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  RelTest Solutions
                </p>
              </div>
              <span className="hidden rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-800 sm:inline-flex">
                Online
              </span>
            </div>
            <iframe
              title={page.calendly.embedTitle}
              src={calendlyEmbedHref}
              loading="lazy"
              className="h-[720px] w-full border-0 md:h-[760px]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
              {page.directContact}
            </h2>
            <div className="mt-6 space-y-4 text-base text-slate-600">
              <p>RelTest Solutions GmbH</p>
              <p>Steglen 26, 71083 Herrenberg</p>
              <a
                className="block font-semibold text-slate-950 hover:text-cyan-800"
                href="mailto:info@reltest-solutions.com"
              >
                info@reltest-solutions.com
              </a>
              <a
                className="block font-semibold text-slate-950 hover:text-cyan-800"
                href="tel:+4971125253531"
              >
                +49 711 25253531
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">
              {page.reasonsTitle}
            </h2>
            <div className="mt-6 grid gap-3">
              {page.reasons.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                >
                  <p className="text-sm text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
