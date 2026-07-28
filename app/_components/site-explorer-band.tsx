"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localizeHref, type Locale } from "../_i18n/config";

type Crumb = {
  label: string;
  href?: string;
};

const sectionLabels: Record<Locale, Record<string, string>> = {
  de: {
    aktuelles: "Aktuelles",
    branchen: "Branchen",
    datenschutz: "Datenschutz",
    expertise: "Expertise",
    glossar: "Glossar",
    impressum: "Impressum",
    karriere: "Karriere",
    kontakt: "Kontakt",
    leistungen: "Leistungen",
    literatur: "Literatur",
    prozess: "Prozess",
    referenzen: "Referenzen",
    "ueber-uns": "Wir sind RelTest",
    weiterbildung: "Weiterbildung",
    wissen: "Wissen",
  },
  en: {
    aktuelles: "News",
    branchen: "Industries",
    datenschutz: "Privacy policy",
    expertise: "Expertise",
    glossar: "Glossary",
    impressum: "Legal notice",
    karriere: "Careers",
    kontakt: "Contact",
    leistungen: "Services",
    literatur: "Literature",
    prozess: "Process",
    referenzen: "References",
    "ueber-uns": "About RelTest",
    weiterbildung: "Training",
    wissen: "Knowledge",
  },
};

const detailLabels: Record<Locale, Record<string, string>> = {
  de: {
    absicherung: "Absicherung",
    academy: "RelTest Education",
    automotive: "Automotive",
    beratung: "Beratung",
    "bernd-bertsche": "Prof. Dr.-Ing. Bernd Bertsche",
    coaching: "Coaching",
    "datenanalyse-prognostik": "Datenanalyse & Prognostik",
    "design-of-experiments": "Design of Experiments",
    "doe-coaching": "DoE Coaching",
    "doe-consulting": "DoE Consulting",
    "doe-praxisorientierte-statistische-versuchsplanung": "DoE Seminar",
    "elektronische-produkte": "Elektronische Produkte",
    "entwicklung-absicherung-elektronischer-komponenten":
      "Elektronische Komponenten",
    "erneuerbare-energien": "Erneuerbare Energien",
    erprobung: "Erprobung",
    "kevin-lucan": "Dr.-Ing. Kevin Lucan",
    "kooperation-holland-innovative": "Kooperation Holland Innovative",
    konsumgueter: "Konsumg\u00fcter",
    "langfristige-kooperation": "Langfristige Kooperation",
    "luft-und-raumfahrt": "Luft- und Raumfahrt",
    maschinenbau: "Maschinenbau",
    medizintechnik: "Medizintechnik",
    "marketing-manager": "Marketing Manager",
    planung: "Planung",
    produktionstechnik: "Produktionstechnik",
    prognosen: "Prognosen",
    "rams-award": "RAMS-Award",
    risikomanagement: "Risikomanagement",
    schwachstellenanalyse: "Schwachstellenanalyse",
    seminare: "Seminare",
    "smart-data-produktdesign": "Smart Data f\u00fcr Produktdesign",
    "webinar-beschleunigte-lebensdauertests":
      "Webinar: Beschleunigte Lebensdauertests",
    "webinar-effiziente-lebensdauertestplanung":
      "Webinar: Effiziente Lebensdauertestplanung",
    "werkstudentin-e-learning": "Werkstudent:in E-Learning",
    "zuverlaessigkeit-erprobung-fuer-praktiker":
      "Zuverl\u00e4ssigkeit & Erprobung",
    zuverlaessigkeitsmanagement: "Zuverl\u00e4ssigkeitsmanagement",
    zuverlaessigkeitstechnik: "Zuverl\u00e4ssigkeitstechnik",
  },
  en: {
    absicherung: "Validation",
    academy: "RelTest Education",
    automotive: "Automotive",
    beratung: "Consulting",
    "bernd-bertsche": "Prof. Dr.-Ing. Bernd Bertsche",
    coaching: "Coaching",
    "datenanalyse-prognostik": "Data analysis & prognostics",
    "design-of-experiments": "Design of Experiments",
    "doe-coaching": "DoE coaching",
    "doe-consulting": "DoE consulting",
    "doe-praxisorientierte-statistische-versuchsplanung": "DoE training",
    "elektronische-produkte": "Electronic products",
    "entwicklung-absicherung-elektronischer-komponenten":
      "Electronic components",
    "erneuerbare-energien": "Renewable energy",
    erprobung: "Testing",
    "kevin-lucan": "Dr.-Ing. Kevin Lucan",
    "kooperation-holland-innovative": "Holland Innovative cooperation",
    konsumgueter: "Consumer goods",
    "langfristige-kooperation": "Long-term cooperation",
    "luft-und-raumfahrt": "Aerospace",
    maschinenbau: "Mechanical engineering",
    medizintechnik: "Medical technology",
    "marketing-manager": "Marketing manager",
    planung: "Planning",
    produktionstechnik: "Production technology",
    prognosen: "Predictions",
    "rams-award": "RAMS Award",
    risikomanagement: "Risk management",
    schwachstellenanalyse: "Weak-point analysis",
    seminare: "Seminars",
    "smart-data-produktdesign": "Smart data for product design",
    "webinar-beschleunigte-lebensdauertests":
      "Webinar: accelerated life tests",
    "webinar-effiziente-lebensdauertestplanung":
      "Webinar: efficient life test planning",
    "werkstudentin-e-learning": "Working student e-learning",
    "zuverlaessigkeit-erprobung-fuer-praktiker":
      "Reliability & testing for practitioners",
    zuverlaessigkeitsmanagement: "Reliability management",
    zuverlaessigkeitstechnik: "Reliability engineering",
  },
};

const explorerLabels: Record<
  Locale,
  { ariaLabel: string }
> = {
  de: {
    ariaLabel: "Seitenpfad",
  },
  en: {
    ariaLabel: "Page path",
  },
};

function humanizeSlug(slug: string) {
  const acronyms: Record<string, string> = {
    doe: "DoE",
    rams: "RAMS",
  };

  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => acronyms[part] ?? `${part[0]?.toUpperCase() ?? ""}${part.slice(1)}`)
    .join(" ");
}

function getLabel(locale: Locale, segment: string, index: number) {
  const decodedSegment = decodeURIComponent(segment);

  if (index === 0) {
    return sectionLabels[locale][decodedSegment] ?? humanizeSlug(decodedSegment);
  }

  return detailLabels[locale][decodedSegment] ?? humanizeSlug(decodedSegment);
}

function buildCrumbs(pathname: string, locale: Locale): Crumb[] {
  const pathWithoutQuery = pathname.split("?")[0] ?? pathname;
  const segments = pathWithoutQuery.split("/").filter(Boolean);
  const pageSegments = segments[0] === locale ? segments.slice(1) : segments;

  if (pageSegments.length === 0) {
    return [];
  }

  return pageSegments.map((segment, index) => {
    const isLast = index === pageSegments.length - 1;
    const href = `/${pageSegments.slice(0, index + 1).join("/")}`;

    return {
      label: getLabel(locale, segment, index),
      href: isLast ? undefined : href,
    };
  });
}

export function SiteExplorerBand({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const crumbs = buildCrumbs(pathname, locale);
  const labels = explorerLabels[locale];

  if (crumbs.length === 0) {
    return null;
  }

  return (
    <div className="border-t border-slate-200/70 bg-slate-50/90">
      <nav
        aria-label={labels.ariaLabel}
        className="mx-auto flex max-w-7xl items-center overflow-x-auto px-5 py-2.5 sm:px-6 lg:px-8"
      >
        <ol className="flex min-w-0 items-center gap-2 whitespace-nowrap text-xs font-semibold text-slate-600">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;

            return (
              <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-slate-300">
                    &gt;
                  </span>
                ) : null}
                {isLast || !crumb.href ? (
                  <span
                    aria-current="page"
                    className="rounded-full bg-white px-3 py-1.5 text-slate-950 shadow-sm ring-1 ring-slate-200"
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={localizeHref(locale, crumb.href)}
                    className="rounded-full px-2.5 py-1.5 text-slate-600 transition hover:bg-white hover:text-cyan-700 hover:shadow-sm hover:ring-1 hover:ring-slate-200"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
