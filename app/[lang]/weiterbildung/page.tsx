import Image from "next/image";
import Link from "next/link";

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
    path: "/weiterbildung",
    title:
      locale === "de"
        ? "Weiterbildung, Seminare und Academy | RelTest"
        : "Training, Seminars and Academy | RelTest",
    description: content.pages.education.intro.description,
  });
}

export default async function TrainingPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = getSiteContent(locale);
  const page = content.pages.education;

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f7fbfd_0%,#edf5f8_52%,#e4eef3_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="absolute -bottom-32 left-10 h-96 w-96 rounded-full bg-slate-300/35 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-700">
              {page.intro.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl">
              {page.intro.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {page.intro.description}
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {page.trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/80 bg-white/75 p-4 text-sm leading-6 font-semibold text-slate-700 shadow-sm backdrop-blur"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] md:min-h-[520px]">
            <div className="absolute left-0 top-10 hidden h-40 w-40 rounded-full border border-cyan-200 lg:block" />
            <div className="relative ml-auto max-w-2xl overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-slate-300/80 ring-1 ring-slate-200">
              <div className="relative h-[330px] overflow-hidden rounded-[1.55rem] sm:h-[420px]">
                <Image
                  src="/team/img-0107.png"
                  alt={page.visualAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.72))] p-6 text-white">
                  <p className="max-w-md text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                    {page.visualLabel}
                  </p>
                  <p className="mt-2 max-w-lg text-xl font-semibold tracking-[-0.04em]">
                    {page.visualTitle}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 left-0 hidden w-[48%] overflow-hidden rounded-[1.6rem] bg-white p-2 shadow-xl shadow-slate-300/70 ring-1 ring-slate-200 md:block">
              <div className="relative h-44 overflow-hidden rounded-[1.25rem]">
                <Image
                  src="/team/img-0112.jpg"
                  alt={page.supportImageAlt}
                  fill
                  sizes="(min-width: 1024px) 24vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700">
                {page.formatIntro.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                {page.formatIntro.title}
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-slate-600 lg:justify-self-end">
              {page.formatIntro.description}
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            {content.educationFormats.map((format, index) => {
              const external = "external" in format && format.external;
              const visual = page.cardImages[index] ?? page.cardImages[0];
              const isAcademy = index === 1;

              return (
                <article
                  key={format.title}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200"
                >
                  <div className="relative h-72 overflow-hidden bg-slate-100">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0)_35%,rgba(15,23,42,0.58)_100%)]" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/92 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-800 shadow-sm backdrop-blur">
                      {visual.label}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <div className="flex items-start gap-5">
                      <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                        <Image
                          src={
                            isAcademy
                              ? "/academy/reltest-academy-logo.webp"
                              : format.icon
                          }
                          alt={isAcademy ? "RelTest Academy" : ""}
                          width={58}
                          height={58}
                          className={
                            isAcademy
                              ? "h-14 w-14 object-contain"
                              : "h-14 w-14"
                          }
                        />
                      </div>
                      <div>
                        <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                          {format.title}
                        </h2>
                        <p className="mt-4 text-base leading-8 text-slate-600">
                          {format.description}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-8 grid gap-4">
                      {format.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-4">
                          <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-50 ring-1 ring-cyan-100">
                            <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
                          </span>
                          <span className="text-sm leading-7 font-medium text-slate-700">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-8">
                      <Link
                        href={
                          external
                            ? format.ctaHref
                            : localizeHref(locale, format.ctaHref)
                        }
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
                      >
                        {format.ctaLabel}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl shadow-slate-300">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.76fr_1fr] lg:p-12">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                {page.decisionTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                {page.decisionDescription}
              </p>
            </div>
            <div className="grid gap-4">
              {page.decisionItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
                >
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
