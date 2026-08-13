import { AiAwareImage as Image } from "../../_components/ai-aware-image";

import { resolveLocale, type Locale } from "../../_i18n/config";
import { buildLocalizedMetadata } from "../../_seo/metadata";

const calendlyHref = "https://calendly.com/kevin-lucan";
const calendlyEmbedHref =
  "https://calendly.com/kevin-lucan?hide_gdpr_banner=1&background_color=ffffff&text_color=142452&primary_color=2ea1cf";

const contactCopy = {
  de: {
    metadata: {
      title: "Projektanfrage und Kontakt | RelTest Solutions",
      description:
        "Sprechen Sie mit RelTest Solutions über Ihre technische Fragestellung in Zuverlässigkeitstechnik, Risikomanagement, Test oder Datenanalyse.",
    },
    hero: {
      title: "Lassen Sie uns über Ihr Projekt sprechen.",
      description:
        "Im ersten Gespräch klären wir, worum es technisch geht, welche Entscheidung ansteht und ob RelTest sinnvoll unterstützen kann.",
      primaryCta: "Termin auswählen",
      secondaryCta: "E-Mail schreiben",
      contactLabel: "Ihr Ansprechpartner",
      name: "Dr.-Ing. Kevin Lucan",
      role: "Geschäftsführer und Reliability Engineer",
      imageAlt:
        "Dr.-Ing. Kevin Lucan, Geschäftsführer von RelTest Solutions",
    },
    booking: {
      title: "Termin direkt auswählen.",
      description:
        "Wählen Sie im Kalender einen passenden Termin. Das Gespräch findet online statt; die Zugangsdaten erhalten Sie mit der Bestätigung.",
      embedTitle: "Terminbuchung bei RelTest Solutions mit Kevin Lucan",
      fallback: "Terminbuchung separat öffnen",
    },
    preparation: {
      title: "Für den Einstieg reichen drei Punkte.",
      items: [
        "Worum geht es bei Ihrem Produkt oder Projekt?",
        "Welche technische Entscheidung steht an?",
        "Welche Daten, Versuche oder Erfahrungen liegen bereits vor?",
      ],
      note:
        "Eine fertige Aufgabenbeschreibung ist nicht nötig. Den sinnvollen Umfang grenzen wir gemeinsam ein.",
    },
    direct: {
      title: "Lieber direkt schreiben oder anrufen?",
      description:
        "Sie erreichen RelTest ohne Umweg. Technische Unterlagen können Sie gerne per E-Mail mitsenden.",
      emailSubject: "Projektanfrage an RelTest Solutions",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      addressLabel: "Anschrift",
    },
  },
  en: {
    metadata: {
      title: "Project Inquiry and Contact | RelTest Solutions",
      description:
        "Talk to RelTest Solutions about your technical question in reliability engineering, risk management, testing or data analysis.",
    },
    hero: {
      title: "Let us talk about your project.",
      description:
        "In the first conversation, we clarify the technical question, the decision ahead and whether RelTest is the right partner to support you.",
      primaryCta: "Choose a time",
      secondaryCta: "Send an email",
      contactLabel: "Your contact",
      name: "Dr.-Ing. Kevin Lucan",
      role: "Managing Director and Reliability Engineer",
      imageAlt:
        "Dr.-Ing. Kevin Lucan, Managing Director of RelTest Solutions",
    },
    booking: {
      title: "Choose a meeting time directly.",
      description:
        "Select a suitable time in the calendar. The meeting will take place online; you will receive the access details with your confirmation.",
      embedTitle: "Schedule a meeting with Kevin Lucan at RelTest Solutions",
      fallback: "Open scheduling separately",
    },
    preparation: {
      title: "Three points are enough to get started.",
      items: [
        "What is the product or project about?",
        "Which technical decision is ahead?",
        "Which data, tests or experience are already available?",
      ],
      note:
        "You do not need a finished scope of work. We will define a sensible scope together.",
    },
    direct: {
      title: "Prefer to write or call directly?",
      description:
        "You can reach RelTest without any detours. Technical documents are welcome by email.",
      emailSubject: "Project inquiry for RelTest Solutions",
      emailLabel: "Email",
      phoneLabel: "Phone",
      addressLabel: "Address",
    },
  },
} as const satisfies Record<Locale, object>;

type Props = {
  params: Promise<{ lang: string }>;
};

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
  const copy = contactCopy[locale];

  return buildLocalizedMetadata({
    locale,
    path: "/kontakt",
    title: copy.metadata.title,
    description: copy.metadata.description,
  });
}

export default async function ContactPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const copy = contactCopy[locale];
  const emailHref = `mailto:info@reltest-solutions.com?subject=${encodeURIComponent(
    copy.direct.emailSubject,
  )}`;

  return (
    <main className="font-winnstein-body text-brand-marine">
      <section className="bg-white px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-brand-marine/15 bg-brand-marine text-white lg:grid-cols-[1.04fr_0.96fr]">
          <div className="relative flex min-w-0 flex-col justify-center overflow-hidden px-7 py-14 sm:px-10 lg:px-14 lg:py-20">
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:64px_64px]" />
            <div className="absolute -left-32 bottom-[-8rem] h-80 w-80 rounded-full border border-brand-steel-cyan/20" />
            <div className="absolute -left-16 bottom-[-4rem] h-52 w-52 rounded-full border border-brand-steel-cyan/15" />

            <div className="relative">
              <h1 className="max-w-3xl font-winnstein-display text-4xl leading-[1.05] font-bold tracking-[-0.04em] sm:text-5xl lg:text-[3.6rem]">
                {copy.hero.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76">
                {copy.hero.description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#termin"
                  className="brand-action inline-flex min-h-14 items-center justify-between gap-7 bg-brand-steel-cyan px-7 py-4 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-marine"
                >
                  {copy.hero.primaryCta}
                  <ArrowIcon />
                </a>
                <a
                  href={emailHref}
                  className="brand-action brand-action-outline inline-flex min-h-14 items-center justify-between gap-7 border border-white/35 px-7 py-4 font-winnstein-display text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/8"
                >
                  {copy.hero.secondaryCta}
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[31rem] border-t border-white/18 lg:min-h-[39rem] lg:border-t-0 lg:border-l">
            <Image
              src="/about/kevin-lucan-professional.webp"
              alt={copy.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-[50%_10%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,36,82,.94)_0%,rgba(20,36,82,.22)_42%,transparent_68%)]" />
            <div className="absolute right-0 bottom-0 left-0 p-7 sm:p-9">
              <p className="font-winnstein-display text-sm font-semibold text-brand-steel-cyan">
                {copy.hero.contactLabel}
              </p>
              <p className="mt-2 font-winnstein-display text-2xl font-bold sm:text-3xl">
                {copy.hero.name}
              </p>
              <p className="mt-2 text-sm text-white/72">{copy.hero.role}</p>
            </div>
          </div>
        </div>
        <div className="mx-auto h-2 max-w-7xl bg-brand-steel-cyan" />
      </section>

      <section
        id="termin"
        className="scroll-mt-28 bg-brand-steel-cyan-10 px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 border-b border-brand-marine/15 pb-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <h2 className="max-w-3xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
              {copy.booking.title}
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-brand-marine/72 lg:justify-self-end">
              {copy.booking.description}
            </p>
          </div>

          <div className="brand-panel-cut-bottom-right mt-10 grid border border-brand-marine/15 bg-white lg:grid-cols-[1fr_21rem]">
            <div className="min-w-0 overflow-hidden">
              <iframe
                title={copy.booking.embedTitle}
                src={calendlyEmbedHref}
                loading="lazy"
                className="h-[760px] w-full border-0 sm:h-[800px]"
              />
            </div>

            <aside className="flex flex-col border-t border-brand-marine/15 bg-brand-marine p-7 text-white sm:p-9 lg:border-t-0 lg:border-l">
              <h3 className="font-winnstein-display text-2xl leading-tight font-bold">
                {copy.preparation.title}
              </h3>
              <ol className="mt-8 border-t border-white/18">
                {copy.preparation.items.map((item, index) => (
                  <li
                    key={item}
                    className="grid grid-cols-[2.25rem_1fr] gap-3 border-b border-white/18 py-5 text-sm leading-6 text-white/82"
                  >
                    <span className="font-winnstein-display font-bold text-brand-steel-cyan">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
              <p className="mt-7 text-sm leading-7 text-white/66">
                {copy.preparation.note}
              </p>
              <a
                href={calendlyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-between gap-5 border-b-2 border-brand-steel-cyan pt-10 pb-2 font-winnstein-display text-sm font-bold text-white"
              >
                {copy.booking.fallback}
                <ArrowIcon />
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-brand-marine/15 pb-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <h2 className="max-w-3xl font-winnstein-display text-3xl leading-tight font-bold tracking-[-0.035em] sm:text-4xl">
              {copy.direct.title}
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-brand-marine/72 lg:justify-self-end">
              {copy.direct.description}
            </p>
          </div>

          <dl className="grid border-l border-brand-marine/15 md:grid-cols-3">
            <div className="border-r border-b border-brand-marine/15 p-7 lg:p-9">
              <dt className="font-winnstein-display text-sm font-semibold text-brand-steel-cyan">
                {copy.direct.emailLabel}
              </dt>
              <dd className="mt-4">
                <a
                  href={emailHref}
                  className="inline-flex items-center gap-4 border-b-2 border-brand-steel-cyan pb-2 font-winnstein-display text-base font-bold"
                >
                  info@reltest-solutions.com
                  <ArrowIcon />
                </a>
              </dd>
            </div>
            <div className="border-r border-b border-brand-marine/15 p-7 lg:p-9">
              <dt className="font-winnstein-display text-sm font-semibold text-brand-steel-cyan">
                {copy.direct.phoneLabel}
              </dt>
              <dd className="mt-4">
                <a
                  href="tel:+4971125253531"
                  className="font-winnstein-display text-xl font-bold"
                >
                  +49 711 25253531
                </a>
              </dd>
            </div>
            <div className="border-r border-b border-brand-marine/15 p-7 lg:p-9">
              <dt className="font-winnstein-display text-sm font-semibold text-brand-steel-cyan">
                {copy.direct.addressLabel}
              </dt>
              <dd className="mt-4 text-base leading-7 text-brand-marine/76">
                RelTest Solutions GmbH
                <br />
                Steglen 26
                <br />
                71083 Herrenberg
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
