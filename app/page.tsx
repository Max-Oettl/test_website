import Image from "next/image";
import Link from "next/link";

import { HomeHero } from "./_components/home-hero";
import { SectionHeading } from "./_components/section-heading";
import { ServiceCard } from "./_components/service-card";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { getEducationBullets } from "./_content/education-copy";
import {
  benefits,
  bookDetails,
  educationFormats,
  industryReferences,
  methodHighlights,
  serviceOverview,
} from "./_content/site-content";

const podcastFeature = {
  eyebrow: "Podcast",
  title: "RelTest auch im persönlichen Gespräch kennenlernen",
  description:
    "Im Podcast-Gespräch erhalten Interessierte einen ersten persönlichen Eindruck und erleben, wie technische Themen rund um Zuverlässigkeit, Entwicklung und Verantwortung eingeordnet werden.",
  hostContext:
    "Unser Geschäftsführer Kevin Lucan spricht im Ingenieurshelden-Podcast über seinen Weg, technische Denkweisen und die Bedeutung belastbarer Entscheidungen im Ingenieurumfeld.",
  href: "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan",
  ctaLabel: "Podcast anhören",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />

      <main>
        <HomeHero />

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700">
                Zuverlässigkeitstechnik in der Praxis
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                Die Badewannenkurve ist kein Symbol, sondern tägliche Projektrealität.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Gute Zuverlässigkeitstechnik beginnt damit, Frühausfälle, stabile
                Nutzungsphasen und Verschleiß nicht nur theoretisch zu kennen, sondern
                daraus konkrete Prüf-, Analyse- und Entwicklungsentscheidungen
                abzuleiten.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                RelTest Solutions arbeitet genau an dieser Schnittstelle aus Methode,
                Produkt und Realität. Deshalb stehen auf der Website nicht nur
                Konzepte, sondern echte Arbeitssituationen aus Analyse, Seminar,
                Versuch und Projektbegleitung.
              </p>
              <div className="mt-8">
                <Link
                  href="/wissen"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
                >
                  Mehr über Zuverlässigkeitstechnik erfahren
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="relative aspect-[1.62/1] overflow-hidden rounded-[1.4rem] bg-white">
                  <Image
                    src="/graphics/analyse-badewannenkurve.png"
                    alt="Badewannenkurve der Zuverlässigkeit mit Frühausfällen, Zufallsausfällen und Verschleißausfällen"
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="relative aspect-[1.25/1] overflow-hidden rounded-[1.35rem]">
                    <Image
                      src="/team/img-0139.jpg"
                      alt="RelTest Mitarbeiter bei der technischen Analyse eines Bauteils"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 20vw, 100vw"
                    />
                  </div>
                </div>
                <div className="rounded-[1.8rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                    Persönliche Note
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    Echte Menschen, echte Daten, echte technische Verantwortung.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Die Bilder auf der Website zeigen RelTest dort, wo der Mehrwert
                    entsteht: im Seminarraum, an Daten, am Produkt und im Prüf- oder
                    Entwicklungsumfeld.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-3 shadow-sm">
              <div className="relative aspect-[1.45/1] overflow-hidden rounded-[1.35rem]">
                <Image
                  src="/team/img-0071.jpg"
                  alt="RelTest Mitarbeiter analysiert CAD- und Weibull-Daten am Arbeitsplatz"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-3 shadow-sm">
              <div className="relative aspect-[1.45/1] overflow-hidden rounded-[1.35rem]">
                <Image
                  src="/team/img-0107.jpg"
                  alt="RelTest Seminar zur Zuverlässigkeitstechnik und Weibull-Methodik"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-3 shadow-sm">
              <div className="relative aspect-[1.45/1] overflow-hidden rounded-[1.35rem]">
                <Image
                  src="/team/img-0112.jpg"
                  alt="RelTest Team in der gemeinsamen Datenauswertung vor den Bildschirmen"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leistungen"
            title="Ein Angebot, das nicht nur Methoden zeigt, sondern echten Projekterfolg verkauft"
            description="Auf der Startseite sollen Besucher sofort verstehen, wobei RelTest konkret unterstützt, welchen Nutzen die Zusammenarbeit bringt und warum sich die Beauftragung für technische Produkte mit hohen Anforderungen lohnt."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {methodHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-900"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceOverview.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Weiterbildung"
              title="Zwei Weiterbildungswege mit sehr unterschiedlichem Nutzen"
              description="Academy und Vor-Ort-Schulungen gehören beide zur Weiterbildung, lösen aber unterschiedliche Aufgaben. Genau diese Unterscheidung macht die neue Positionierung stärker und glaubwürdiger."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {educationFormats.map((format, index) => (
                <article
                  key={format.title}
                  className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm"
                >
                  <div className="relative aspect-[1.8/1]">
                    <Image
                      src={index === 0 ? "/team/img-0107.jpg" : "/team/academy-e-learning.png"}
                      alt={
                        index === 0
                          ? "RelTest Seminar vor Ort"
                          : "Digitale RelTest Academy Schulung an einem Bildschirm"
                      }
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 42vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.38))]" />
                  </div>
                  <div className="flex h-full flex-col p-8">
                    <div className="flex items-start gap-5">
                      <div
                        className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200"
                      >
                        <Image
                          src={
                            format.title === "RelTest Academy"
                              ? "/academy/reltest-academy-logo.webp"
                              : format.icon
                          }
                          alt={format.title === "RelTest Academy" ? "RelTest Academy" : ""}
                          width={format.title === "RelTest Academy" ? 56 : 56}
                          height={format.title === "RelTest Academy" ? 56 : 56}
                          className={
                            format.title === "RelTest Academy"
                              ? "h-12 w-12 object-contain"
                              : "h-14 w-14"
                          }
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                          {format.title}
                        </h3>
                        <p className="mt-4 text-base leading-8 text-slate-600">{format.description}</p>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-3">
                      {getEducationBullets(format.title, format.bullets).map((bullet) => (
                        <div
                          key={bullet}
                          className="rounded-2xl bg-white px-4 py-4 ring-1 ring-slate-200"
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-50 ring-1 ring-cyan-100">
                              <span className="h-2 w-2 rounded-full bg-cyan-500" />
                            </span>
                            <p className="text-sm leading-7 font-medium text-slate-700">{bullet}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-8">
                      <Link
                        href={format.ctaHref}
                        target={format.external ? "_blank" : undefined}
                        rel={format.external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
                      >
                        {format.ctaLabel}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <SectionHeading
              eyebrow="Warum RelTest"
              title="Kompetenz, die technische Risiken verständlich und entscheidbar macht"
              description="Für technische Entscheider, Projektleiter, Einkauf und Geschäftsführung zählt nicht nur Methodik, sondern belastbare Orientierung: Welche Risiken sind relevant, welche Nachweise sind wirtschaftlich sinnvoll und welche Maßnahmen bringen das Produkt wirklich voran?"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <div className="mb-5 h-1.5 w-16 rounded-full bg-cyan-500" />
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fbfd_0%,#eef4f7_100%)] shadow-sm">
            <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 p-8 text-white shadow-xl shadow-slate-300">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-56"
                  style={{ backgroundImage: "url('/podcast/kevin-lucan-background.png')" }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(15,23,42,0.56)_0%,rgba(15,23,42,0.38)_42%,rgba(15,23,42,0.18)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_34%)]" />
                <div className="absolute inset-y-0 left-0 w-[62%] bg-[linear-gradient(90deg,rgba(15,23,42,0.34),rgba(15,23,42,0.02))]" />
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                    {podcastFeature.eyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                    Stimme, Haltung und technische Perspektive direkt erleben
                  </h2>
                  <p className="mt-5 text-base leading-8 text-slate-300">
                    Der Podcast ist ein guter Einstieg für Besucher, die nicht nur Leistungen
                    lesen, sondern auch ein Gefühl für die Personen hinter RelTest Solutions
                    bekommen möchten.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <SectionHeading
                  eyebrow={podcastFeature.eyebrow}
                  title={podcastFeature.title}
                  description={podcastFeature.description}
                />
                <p className="mt-6 text-base leading-8 text-slate-600">
                  {podcastFeature.hostContext}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={podcastFeature.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
                  >
                    {podcastFeature.ctaLabel}
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-800"
                  >
                    Gespräch anfragen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div className="flex items-center justify-center">
              <div className="mx-auto max-w-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700">
                  Literatur
                </p>
                <div className="relative mt-6">
                  <Image
                    src={bookDetails.cover}
                    alt={bookDetails.title}
                    width={900}
                    height={1284}
                    className="h-auto w-full shadow-xl shadow-slate-300/70"
                    sizes="(min-width: 1024px) 28vw, 80vw"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <SectionHeading
                eyebrow="Fachbuch"
                title="Sichtbare fachliche Tiefe statt nur Behauptungen"
                description={`${bookDetails.description} Das Buch ist ein starker Vertrauensanker für anspruchsvolle Kunden aus Fahrzeug- und Maschinenbau.`}
              />
              <p className="mt-6 text-base leading-8 text-slate-600">
                {bookDetails.subtitle}. Autoren: {bookDetails.authors}.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/literatur"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
                >
                  Literatur ansehen
                </Link>
                <Link
                  href={bookDetails.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-4 text-sm font-bold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-800"
                >
                  Buchseite öffnen
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Referenzen"
            title="Erfahrung in anspruchsvollen Branchen"
            description="Die Website zeigt bereits auf der Startseite, dass RelTest in Industrien arbeitet, in denen Qualität, Lebensdauer und Nachweisfähigkeit besonders kritisch sind."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industryReferences.map((reference) => (
              <div
                key={reference}
                className="rounded-3xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm"
              >
                <p className="text-base font-semibold text-slate-900">{reference}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-900 text-white shadow-2xl shadow-slate-300">
            <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_0.6fr] lg:p-14">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  Kontakt
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Stellen auch Sie den langfristigen Erfolg Ihrer Produkte sicher.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Ob punktuelle Analyse, Weiterbildung, projektbegleitendes Coaching oder
                  vollständiges Arbeitspaket: RelTest Solutions berät Sie unverbindlich
                  zur passenden Zuverlässigkeitsstrategie.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <Link
                  href="/kontakt"
                  className="rounded-full bg-cyan-400 px-6 py-4 text-center text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300"
                >
                  Kontakt aufnehmen
                </Link>
                <a
                  href="mailto:info@reltest-solutions.com"
                  className="rounded-full border border-white/15 px-6 py-4 text-center text-sm font-bold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200"
                >
                  info@reltest-solutions.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
