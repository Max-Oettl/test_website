import Link from "next/link";

import { AiAwareImage as Image } from "../../_components/ai-aware-image";
import { BrandLineWatermark } from "../../_components/brand-line-watermark";
import { PageClosingCta } from "../../_components/page-closing-cta";
import { localizeHref, resolveLocale, type Locale } from "../../_i18n/config";
import {
  absoluteUrl,
  buildLocalizedMetadata,
  siteUrl,
} from "../../_seo/metadata";

type Props = {
  params: Promise<{ lang: string }>;
};

type LeaderProfile = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  introduction: string;
  facts: string[];
  profileHref: string;
  profileLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  secondaryExternal?: boolean;
};

type TeamCapability = {
  title: string;
  points: string[];
  link: {
    label: string;
    href: string;
    external?: boolean;
  };
};

type CompanySignal = {
  value: string;
  title: string;
  description: string;
};

type WorkStep = {
  title: string;
  description: string;
};

type CompanyValue = {
  title: string;
  description: string;
};

type Milestone = {
  label: string;
  title: string;
  description: string;
};

type AboutPageContent = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    title: string;
    description: string;
    principles: {
      firstLine: string;
      secondLine: string;
    }[];
  };
  company: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    signals: CompanySignal[];
    servicesLabel: string;
    partnershipLabel: string;
  };
  leadership: {
    eyebrow: string;
    title: string;
    description: string;
    profiles: LeaderProfile[];
  };
  podcast: {
    label: string;
    title: string;
    description: string;
    linkLabel: string;
    contactLabel: string;
    durationLabel: string;
  };
  team: {
    eyebrow: string;
    title: string;
    description: string;
    imageAlt: string;
    profiles: TeamCapability[];
    moreTitle: string;
    moreDescription: string;
    linkedInLabel: string;
    xingLabel: string;
    expertiseLabel: string;
  };
  workingModel: {
    eyebrow: string;
    title: string;
    description: string;
    steps: WorkStep[];
  };
  identity: {
    eyebrow: string;
    title: string;
    visionLabel: string;
    vision: string;
    values: CompanyValue[];
    historyTitle: string;
    historyDescription: string;
    milestones: Milestone[];
  };
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};

const podcastUrl =
  "https://ingenieurshelden.de/podcast-fuer-ingenieure-und-ingenieurinnen/kevin-lucan";
const calendlyUrl = "https://calendly.com/kevin-lucan";
const linkedInUrl = "https://www.linkedin.com/company/reltest-solutions";
const xingUrl = "https://www.xing.com/pages/reltest-solutions-gmbh";

const aboutContent: Record<Locale, AboutPageContent> = {
  de: {
    metaTitle: "RelTest Solutions | Unternehmen, Team und Expertise",
    metaDescription:
      "RelTest Solutions verbindet Zuverlässigkeitstechnik, Lebensdauer, Erprobung, Statistik und DoE in einem spezialisierten Engineering-Team.",
    hero: {
      title: "Wir sind RelTest.",
      description:
        "RelTest Solutions ist ein spezialisiertes Engineering-Unternehmen für Zuverlässigkeit, Lebensdauer und technische Absicherung. Wir verbinden wissenschaftliche Tiefe, industrielle Erfahrung und ein eingespieltes Kompetenznetzwerk zu belastbaren Entwicklungsentscheidungen.",
      principles: [
        {
          firstLine: "Technische Ursachen",
          secondLine: "systematisch klären",
        },
        {
          firstLine: "Passende Methoden",
          secondLine: "gezielt einsetzen",
        },
        {
          firstLine: "Ergebnisse klar",
          secondLine: "dokumentieren",
        },
      ],
    },
    company: {
      eyebrow: "RelTest Solutions GmbH",
      title:
        "Breite Methodenkompetenz. Klare Verantwortung. Ein gemeinsames Ergebnis.",
      paragraphs: [
        "Seit 2016 beraten wir Industrieunternehmen zu technischer Zuverlässigkeit. Unser Kernteam verbindet Planung, Risikoanalyse, Lebensdauererprobung, Statistik und DoE – als methodische Beratung, definiertes Arbeitspaket oder fachliche Projektleitung.",
      ],
      signals: [
        {
          value: "Seit 2016",
          title: "Spezialisierte Beratung",
          description:
            "Erfahrung aus industriellen Entwicklungs- und Absicherungsprojekten.",
        },
        {
          value: "4 Leistungsfelder",
          title: "Durchgängige Bearbeitung",
          description:
            "Planung & Lebensdauer, Risiko & Absicherung, Test & Datenanalyse sowie Projektpartnerschaft.",
        },
        {
          value: "Ein Team",
          title: "Kompetenzen passend kombiniert",
          description:
            "Fachwissen wird geteilt und für die konkrete Aufgabe gezielt zusammengeführt.",
        },
        {
          value: "Praxis + Wissenschaft",
          title: "Fachlich anschlussfähig",
          description:
            "Industrieerfahrung, Forschung, Normungsarbeit und Weiterbildung greifen ineinander.",
        },
      ],
      servicesLabel: "Leistungsfelder ansehen",
      partnershipLabel: "Projektpartnerschaft",
    },
    leadership: {
      eyebrow: "Geschäftsführung und fachliche Expertise",
      title: "Verantwortung für Projekte und Methoden.",
      description:
        "Dr.-Ing. Kevin Lucan verantwortet die operative Projektarbeit. Prof. Dr.-Ing. Bernd Bertsche bringt wissenschaftliche Tiefe und jahrzehntelange Erfahrung ein.",
      profiles: [
        {
          name: "Dr.-Ing. Kevin Lucan",
          role: "Geschäftsführer, Gründer und direkter Ansprechpartner",
          image: "/about/kevin-lucan-professional-v2.png",
          imageAlt:
            "Dr.-Ing. Kevin Lucan, Geschäftsführer von RelTest Solutions",
          introduction:
            "Kevin Lucan führt RelTest Solutions und begleitet Unternehmen von der technischen Fragestellung bis zur belastbaren Entwicklungsentscheidung.",
          facts: [
            "Studium und stellvertretende Leitung der Zuverlässigkeitstechnik am Institut für Maschinenelemente (IMA) der Universität Stuttgart.",
            "Mitarbeit in DKE/K 132 und an der IEC 62506 für beschleunigte Produkttests.",
            "Methodik für repräsentative Lastkollektive und Leitung eines Arbeitskreises zur Nutzfahrzeugbremse.",
            "Beratung zu Zuverlässigkeitsprozessen, Erprobungsstrategien, Felddaten und DoE.",
          ],
          profileHref: "/ueber-uns/kevin-lucan",
          profileLabel: "Profil ansehen",
          secondaryHref: calendlyUrl,
          secondaryLabel: "Gespräch vereinbaren",
          secondaryExternal: true,
        },
        {
          name: "Prof. Dr.-Ing. Bernd Bertsche",
          role: "Gründer, Mentor und fachlicher Wissensträger",
          image: "/about/bernd-bertsche-professional.webp",
          imageAlt:
            "Prof. Dr.-Ing. Bernd Bertsche, Gründer und fachlicher Berater von RelTest Solutions",
          introduction:
            "Bernd Bertsche zählt zu den prägenden deutschen Experten der Zuverlässigkeitstechnik und bringt wissenschaftliche Tiefe, Industrieerfahrung und jahrzehntelange Verantwortung in RelTest ein.",
          facts: [
            "Aufbau des Forschungsgebiets Zuverlässigkeitstechnik und langjährige Leitung des Instituts für Maschinenelemente (IMA) der Universität Stuttgart.",
            "Ausgezeichnet mit dem Forschungspreis von FAG Kugelfischer, dem VDI-Ehrenring und als Top-Experte beim Deutschen Gründerpreis.",
            "Neun Fachbücher, rund 300 nationale und internationale Publikationen sowie vier Patente.",
            "Leitende Facharbeit in DFG, VDI und DKE sowie Transfer zwischen Forschung und Industrie.",
          ],
          profileHref: "/ueber-uns/bernd-bertsche",
          profileLabel: "Profil ansehen",
          secondaryHref: "/ueber-uns/bernd-bertsche#fachbuecher",
          secondaryLabel: "Fachbücher ansehen",
        },
      ],
    },
    podcast: {
      label: "Ingenieurshelden-Podcast",
      title: "Kevin Lucan im Gespräch.",
      description:
        "Im Podcast spricht Kevin über seinen Weg, technische Verantwortung und die Zusammenarbeit in anspruchsvollen Entwicklungsprojekten. Ein persönlicher Einstieg, bevor wir miteinander sprechen.",
      linkLabel: "Podcast anhören",
      contactLabel: "Gespräch vereinbaren",
      durationLabel: "Gespräch über Ingenieurpraxis und Verantwortung",
    },
    team: {
      eyebrow: "Teamkompetenzen",
      title: "Kompetenz, die im Projekt zusammenwirkt.",
      description:
        "Methodenwissen wird im Team geteilt und passend zur Aufgabe kombiniert.",
      imageAlt:
        "Schematische Darstellung eines vernetzten RelTest-Projektteams mit unterschiedlichen Kompetenzfeldern",
      profiles: [
        {
          title: "Risiko und technische Absicherung",
          points: [
            "Ausfallmechanismen verstehen",
            "Risiken priorisieren",
            "Nachweise absichern",
          ],
          link: {
            label: "Risikomanagement",
            href: "/leistungen/risikomanagement",
          },
        },
        {
          title: "Systemzuverlässigkeit und Produktlebenszyklus",
          points: [
            "Anforderungen verbinden",
            "Erprobung ausrichten",
            "Felddaten zurückführen",
          ],
          link: {
            label: "Zuverlässigkeitstechnik",
            href: "/leistungen/zuverlaessigkeitstechnik",
          },
        },
        {
          title: "Versuchsplanung und statistische Modellierung",
          points: [
            "Versuche effizient planen",
            "Lebensdauerdaten auswerten",
            "Prognosen belastbar machen",
          ],
          link: {
            label: "Design of Experiments",
            href: "/leistungen/design-of-experiments",
          },
        },
        {
          title: "Projektsteuerung und Wissenstransfer",
          points: [
            "Arbeitspakete strukturieren",
            "Schnittstellen und Ergebnisse steuern",
            "Wissen im Kundenteam verankern",
          ],
          link: {
            label: "Projektpartnerschaft",
            href: "/leistungen/langfristige-kooperation",
          },
        },
      ],
      moreTitle: "Das passende Projektteam entsteht aus der Aufgabe.",
      moreDescription:
        "System, Entwicklungsphase und Methodenbedarf bestimmen Besetzung und Umfang. Eine klare Projektleitung hält Ziele, Ergebnisse und Kommunikation zusammen.",
      linkedInLabel: "Das Team auf LinkedIn",
      xingLabel: "Das Team auf XING",
      expertiseLabel: "Gesamte Expertise ansehen",
    },
    workingModel: {
      eyebrow: "Arbeitsweise",
      title: "Klarer Auftrag. Passendes Team. Prüfbares Ergebnis.",
      description:
        "Ein klarer Auftrag und die richtige fachliche Besetzung schaffen Tempo und belastbare Ergebnisse.",
      steps: [
        {
          title: "Fragestellung und Entscheidung klären",
          description:
            "Festlegen, welche technische Aussage belastbar sein muss.",
        },
        {
          title: "Umfang, Schnittstellen und Team festlegen",
          description:
            "Arbeitspakete, Verantwortung und Datenbedarf vereinbaren.",
        },
        {
          title: "Analysieren, erproben und absichern",
          description:
            "Methoden, Versuche und Modelle gezielt kombinieren.",
        },
        {
          title: "Ergebnisse dokumentieren und übergeben",
          description:
            "Annahmen, Grenzen und nächste Schritte sichtbar machen.",
        },
      ],
    },
    identity: {
      eyebrow: "Unser Anspruch an Projektarbeit",
      title: "Methoden müssen zu klaren Entscheidungen führen.",
      visionLabel: "Zuverlässigkeit früh steuern",
      vision:
        "Wir übersetzen Anforderungen, reale Nutzung und Daten in messbare Zuverlässigkeitsziele und belastbare Nachweise – damit Risiken vor Freigabe und Feldeinsatz sichtbar und bewertbar werden.",
      values: [
        {
          title: "Aussagekraft belegen",
          description:
            "Datenbasis, Modellannahmen, Unsicherheit und Gültigkeitsbereich werden im Ergebnis dokumentiert.",
        },
        {
          title: "Auftrag klar abgrenzen",
          description:
            "Ziel, Schnittstellen, Lieferumfang und Abnahmekriterien werden vor Projektstart vereinbart.",
        },
        {
          title: "Ergebnisse nutzbar übergeben",
          description:
            "Modelle, Entscheidungen und nächste Schritte werden so aufbereitet, dass Entwicklung und Qualität direkt weiterarbeiten können.",
        },
      ],
      historyTitle: "Von der Forschung in industrielle Projekte",
      historyDescription:
        "Der rote Faden seit der Gründung: wissenschaftliche Methodik für konkrete Entwicklungs- und Absicherungsaufgaben nutzbar machen.",
      milestones: [
        {
          label: "Universität Stuttgart",
          title: "Forschung zu Zuverlässigkeit, Statistik und Lebensdauer",
          description:
            "Wissenschaftliche Arbeit am IMA bildet die methodische Basis von RelTest.",
        },
        {
          label: "Gründung 2016",
          title: "Spezialisierte Beratung für Entwicklung und Absicherung",
          description:
            "Methoden werden auf konkrete Fragen zu Produktzuverlässigkeit, Erprobung und Nachweis übertragen.",
        },
        {
          label: "Heute",
          title: "Beratung und definierte Engineering-Arbeitspakete",
          description:
            "RelTest verbindet methodische Beratung, Projektleitung, Umsetzung und Wissenstransfer.",
        },
      ],
    },
    cta: {
      title: "Ihr Projektteam kennenlernen.",
      description:
        "Schildern Sie uns Ihre technische Fragestellung. Gemeinsam klären wir, welche Unterstützung für Ihr Projekt sinnvoll ist.",
      primaryLabel: "Gespräch vereinbaren",
      secondaryLabel: "Leistungen ansehen",
    },
  },
  en: {
    metaTitle: "RelTest Solutions | Company, team and expertise",
    metaDescription:
      "RelTest Solutions combines reliability engineering, lifetime, testing, statistics and DoE in a specialised engineering team.",
    hero: {
      title: "We are RelTest.",
      description:
        "RelTest Solutions is a specialised engineering company for reliability, lifetime and technical assurance. We combine scientific depth, industrial experience and an integrated network of expertise to enable robust development decisions.",
      principles: [
        {
          firstLine: "Examine causes",
          secondLine: "systematically",
        },
        {
          firstLine: "Use suitable methods",
          secondLine: "purposefully",
        },
        {
          firstLine: "Document results",
          secondLine: "transparently",
        },
      ],
    },
    company: {
      eyebrow: "RelTest Solutions GmbH",
      title:
        "Broad methodological expertise. Clear responsibility. One shared result.",
      paragraphs: [
        "Since 2016, we have advised industrial companies on technical reliability. Our core team combines planning, risk analysis, lifetime testing, statistics and DoE – as methodological consulting, a defined work package or technical project leadership.",
      ],
      signals: [
        {
          value: "Since 2016",
          title: "Specialised consulting",
          description:
            "Experience from industrial development and assurance projects.",
        },
        {
          value: "4 service fields",
          title: "End-to-end delivery",
          description:
            "Planning & lifetime, risk & assurance, testing & data analysis, and project partnership.",
        },
        {
          value: "One team",
          title: "Expertise combined for the task",
          description:
            "Technical knowledge is shared and brought together purposefully for each specific assignment.",
        },
        {
          value: "Practice + science",
          title: "Technically connected",
          description:
            "Industrial experience, research, standards work and professional education reinforce each other.",
        },
      ],
      servicesLabel: "View service fields",
      partnershipLabel: "Project partnership",
    },
    leadership: {
      eyebrow: "Leadership and technical expertise",
      title: "Responsibility for projects and methods.",
      description:
        "Dr.-Ing. Kevin Lucan leads operational project delivery. Prof. Dr.-Ing. Bernd Bertsche contributes scientific depth and decades of experience.",
      profiles: [
        {
          name: "Dr.-Ing. Kevin Lucan",
          role: "Managing Director, founder and direct contact",
          image: "/about/kevin-lucan-professional-v2.png",
          imageAlt:
            "Dr.-Ing. Kevin Lucan, Managing Director of RelTest Solutions",
          introduction:
            "Kevin Lucan leads RelTest Solutions and supports companies from the initial technical question through to robust development decisions.",
          facts: [
            "Studied at the University of Stuttgart and served as deputy head of reliability engineering at the Institute of Machine Components (IMA).",
            "Contributes to DKE/K 132 and IEC 62506 on accelerated product testing.",
            "Developed a methodology for representative load spectra and led a commercial-vehicle brake working group.",
            "Advises on reliability processes, test strategies, field data and Design of Experiments.",
          ],
          profileHref: "/ueber-uns/kevin-lucan",
          profileLabel: "View profile",
          secondaryHref: calendlyUrl,
          secondaryLabel: "Schedule a conversation",
          secondaryExternal: true,
        },
        {
          name: "Prof. Dr.-Ing. Bernd Bertsche",
          role: "Founder, mentor and technical authority",
          image: "/about/bernd-bertsche-professional.webp",
          imageAlt:
            "Prof. Dr.-Ing. Bernd Bertsche, founder and technical advisor to RelTest Solutions",
          introduction:
            "Bernd Bertsche is one of Germany's leading reliability engineering experts and contributes scientific depth, industrial experience and decades of leadership.",
          facts: [
            "Established reliability engineering as a research field and served for many years as director of the Institute of Machine Components (IMA) at the University of Stuttgart.",
            "Recipient of the FAG Kugelfischer Research Award, the VDI Ring of Honour and recognition as a top expert in the German Founders' Award.",
            "Nine specialist books, around 300 national and international publications, and four patents.",
            "Senior technical work in DFG, VDI and DKE bodies and sustained transfer between research and industry.",
          ],
          profileHref: "/ueber-uns/bernd-bertsche",
          profileLabel: "View profile",
          secondaryHref: "/ueber-uns/bernd-bertsche#books",
          secondaryLabel: "View reference books",
        },
      ],
    },
    podcast: {
      label: "Ingenieurshelden podcast",
      title: "A conversation with Kevin Lucan.",
      description:
        "In the podcast, Kevin talks about his professional path, technical responsibility and collaboration in demanding development projects. A personal introduction before we speak directly.",
      linkLabel: "Listen to the podcast",
      contactLabel: "Schedule a conversation",
      durationLabel: "A conversation about engineering practice and responsibility",
    },
    team: {
      eyebrow: "Team capabilities",
      title: "Expertise that works together in the project.",
      description:
        "Methods and experience are shared across the team and combined to match the task.",
      imageAlt:
        "Schematic view of a connected RelTest project team with complementary fields of expertise",
      profiles: [
        {
          title: "Risk and technical assurance",
          points: [
            "Understand failure mechanisms",
            "Prioritise risks",
            "Verify technical assurance",
          ],
          link: {
            label: "Risk management",
            href: "/leistungen/risikomanagement",
          },
        },
        {
          title: "System reliability and product lifecycle",
          points: [
            "Connect requirements",
            "Align testing",
            "Feed back field data",
          ],
          link: {
            label: "Reliability engineering",
            href: "/leistungen/zuverlaessigkeitstechnik",
          },
        },
        {
          title: "Experimental design and statistical modelling",
          points: [
            "Plan efficient experiments",
            "Analyse lifetime data",
            "Build robust forecasts",
          ],
          link: {
            label: "Design of Experiments",
            href: "/leistungen/design-of-experiments",
          },
        },
        {
          title: "Project delivery and knowledge transfer",
          points: [
            "Structure engineering work packages",
            "Manage interfaces and results",
            "Embed knowledge in client teams",
          ],
          link: {
            label: "Project partnership",
            href: "/leistungen/langfristige-kooperation",
          },
        },
      ],
      moreTitle: "The right project team follows from the task.",
      moreDescription:
        "The system, development phase and methodological needs determine the team and scope. Clear project leadership keeps objectives, results and communication together.",
      linkedInLabel: "Meet the team on LinkedIn",
      xingLabel: "Meet the team on XING",
      expertiseLabel: "View all expertise",
    },
    workingModel: {
      eyebrow: "How we work",
      title: "Clear assignment. Right team. Verifiable result.",
      description:
        "A clear assignment and the right technical team create pace and robust results.",
      steps: [
        {
          title: "Clarify the question and required decision",
          description:
            "Define which technical statement must be supported robustly.",
        },
        {
          title: "Define scope, interfaces and team",
          description:
            "Agree work packages, responsibilities and data needs.",
        },
        {
          title: "Analyse, test and assure",
          description:
            "Combine methods, experiments and models purposefully.",
        },
        {
          title: "Document and transfer the results",
          description:
            "Make assumptions, limits and next steps visible.",
        },
      ],
    },
    identity: {
      eyebrow: "Our standard for project work",
      title: "Methods must lead to clear decisions.",
      visionLabel: "Manage reliability early",
      vision:
        "We translate requirements, real-world use and data into measurable reliability targets and robust evidence—so risks can be identified and assessed before release and field operation.",
      values: [
        {
          title: "Substantiate conclusions",
          description:
            "The data basis, model assumptions, uncertainty and validity range are documented with the result.",
        },
        {
          title: "Define the assignment clearly",
          description:
            "Objectives, interfaces, deliverables and acceptance criteria are agreed before the project starts.",
        },
        {
          title: "Deliver usable results",
          description:
            "Models, decisions and next steps are prepared so development and quality teams can act on them directly.",
        },
      ],
      historyTitle: "From research to industrial projects",
      historyDescription:
        "The common thread since RelTest was founded: making scientific methodology usable for concrete development and assurance tasks.",
      milestones: [
        {
          label: "University of Stuttgart",
          title: "Research in reliability, statistics and lifetime",
          description:
            "Scientific work at IMA provides RelTest's methodological foundation.",
        },
        {
          label: "Founded in 2016",
          title: "Specialised consulting for development and assurance",
          description:
            "Methods are applied to concrete questions of product reliability, testing and evidence.",
        },
        {
          label: "Today",
          title: "Consulting and defined engineering work packages",
          description:
            "RelTest combines methodological consulting, project leadership, delivery and knowledge transfer.",
        },
      ],
    },
    cta: {
      title: "Meet your project team.",
      description:
        "Tell us about your technical challenge. Together, we will determine which form of support makes sense for your project.",
      primaryLabel: "Arrange a conversation",
      secondaryLabel: "View services",
    },
  },
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
    >
      <path
        d="M5 12h13m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="currentColor"
    >
      <path d="M5.2 7.6A2.2 2.2 0 1 0 5.2 3a2.2 2.2 0 0 0 0 4.5ZM3.4 21h3.7V9H3.4v12Zm6 0h3.7v-6.6c0-1.7.3-3.4 2.5-3.4 2.1 0 2.2 2 2.2 3.5V21h3.7v-7.2c0-3.6-.8-6.3-4.9-6.3-2 0-3.3 1.1-3.8 2.1h-.1V9H9.3v12Z" />
    </svg>
  );
}

function XingIcon() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-6 min-w-6 items-center justify-center font-winnstein-display text-[0.65rem] leading-none font-bold tracking-[-0.04em]"
    >
      XING
    </span>
  );
}

function ValueIcon({ index }: { index: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
    >
      {index === 0 ? (
        <>
          <path
            d="M3.5 12s3.2-5 8.5-5 8.5 5 8.5 5-3.2 5-8.5 5-8.5-5-8.5-5Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <circle
            cx="12"
            cy="12"
            r="2.2"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </>
      ) : index === 1 ? (
        <>
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="m8 12 2.6 2.6L16.5 9"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </>
      ) : (
        <>
          <circle cx="7" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="17" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="m9 9.5 2 5m4-5-2 5" stroke="currentColor" strokeWidth="1.7" />
        </>
      )}
    </svg>
  );
}

function TextLink({
  href,
  children,
  external = false,
  inverse = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  inverse?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex min-w-0 items-center justify-between gap-3 border-b pb-1 font-winnstein-display text-sm font-bold transition-colors ${
        inverse
          ? "border-white/45 text-white hover:border-brand-steel-cyan hover:text-brand-steel-cyan"
          : "border-brand-steel-cyan text-brand-marine hover:text-brand-steel-cyan"
      }`}
    >
      <span className="min-w-0">{children}</span>
      <span className="shrink-0">
        <ArrowIcon />
      </span>
    </Link>
  );
}

function TeamSection({
  locale,
  content,
}: {
  locale: Locale;
  content: AboutPageContent["team"];
}) {
  return (
    <section id="team" className="scroll-mt-28 bg-surface-muted">
      <div className="mx-auto max-w-[90rem] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 border-b border-line-soft pb-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="font-winnstein-display text-sm font-semibold tracking-[0.08em] text-brand-steel-cyan">
              {content.eyebrow}
            </p>
            <h2 className="mt-3 font-winnstein-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              {content.title}
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-copy-muted lg:justify-self-end">
            {content.description}
          </p>
        </div>

        <div className="brand-panel-cut-bottom-right mx-auto mt-10 max-w-7xl overflow-hidden border border-line-soft bg-white">
          <div className="relative aspect-[8/3] min-h-[14rem] overflow-hidden border-b border-line-soft bg-white">
            <Image
              src="/about/reltest-team-knowledge-network.webp"
              alt={content.imageAlt}
              fill
              sizes="(min-width: 1280px) 1280px, (min-width: 1024px) calc(100vw - 64px), calc(100vw - 40px)"
              className="object-cover object-center"
            />
          </div>

          <div className="grid gap-px bg-line-soft md:grid-cols-2 xl:grid-cols-4">
            {content.profiles.map((profile) => (
              <article
                key={profile.title}
                className="flex min-w-0 flex-col bg-white p-7 lg:p-8"
              >
                <h3 className="font-winnstein-display text-2xl font-bold text-brand-marine">
                  {profile.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2 text-sm leading-5 text-copy-muted">
                  {profile.points.map((point) => (
                    <li
                      key={point}
                      className="border border-line-soft bg-surface-muted px-3 py-2"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7">
                  <TextLink
                    href={localizeHref(locale, profile.link.href)}
                    external={profile.link.external}
                  >
                    {profile.link.label}
                  </TextLink>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-7 bg-brand-marine p-7 text-white sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12">
            <div>
              <h3 className="font-winnstein-display text-2xl font-bold">
                {content.moreTitle}
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-white/72">
                {content.moreDescription}
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center lg:justify-end">
              <div className="grid w-full gap-3 sm:w-auto">
                <Link
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-action inline-flex min-h-12 w-full min-w-[15rem] items-center justify-center gap-3 bg-brand-steel-cyan px-5 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-marine"
                >
                  <LinkedInIcon />
                  {content.linkedInLabel}
                </Link>
                <Link
                  href={xingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-action brand-action-outline group inline-flex min-h-12 w-full min-w-[15rem] items-center justify-center gap-3 px-5 py-3 font-winnstein-display text-sm font-bold text-brand-steel-cyan"
                >
                  <span className="text-white">
                    <XingIcon />
                  </span>
                  <span className="text-white">{content.xingLabel}</span>
                </Link>
              </div>
              <TextLink href={localizeHref(locale, "/expertise")} inverse>
                {content.expertiseLabel}
              </TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = aboutContent[locale];

  return buildLocalizedMetadata({
    locale,
    path: "/ueber-uns",
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default async function AboutPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const content = aboutContent[locale];
  const aboutUrl = absoluteUrl(localizeHref(locale, "/ueber-uns"));
  const kevinUrl = absoluteUrl(
    localizeHref(locale, "/ueber-uns/kevin-lucan"),
  );
  const berndUrl = absoluteUrl(
    localizeHref(locale, "/ueber-uns/bernd-bertsche"),
  );

  const peopleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${aboutUrl}#page`,
        url: aboutUrl,
        name: content.metaTitle,
        description: content.metaDescription,
        about: { "@id": `${siteUrl}/#organization` },
        mentions: [
          { "@id": `${kevinUrl}#person` },
          { "@id": `${berndUrl}#person` },
        ],
      },
      {
        "@type": "Person",
        "@id": `${kevinUrl}#person`,
        name: "Dr.-Ing. Kevin Lucan",
        jobTitle: locale === "de" ? "Geschäftsführer" : "Managing Director",
        image: absoluteUrl("/about/kevin-lucan-professional-v2.png"),
        url: kevinUrl,
        sameAs: [podcastUrl],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Universität Stuttgart",
          url: "https://www.uni-stuttgart.de/",
        },
        worksFor: {
          "@type": "Organization",
          name: "RelTest Solutions GmbH",
          url: siteUrl,
        },
      },
      {
        "@type": "Person",
        "@id": `${berndUrl}#person`,
        name: "Prof. Dr.-Ing. Bernd Bertsche",
        image: absoluteUrl("/about/bernd-bertsche-professional.webp"),
        url: berndUrl,
        affiliation: [
          {
            "@type": "Organization",
            name: "RelTest Solutions GmbH",
            url: siteUrl,
          },
          {
            "@type": "CollegeOrUniversity",
            name: "Universität Stuttgart",
            url: "https://www.uni-stuttgart.de/",
          },
        ],
      },
    ],
  };

  return (
    <div className="overflow-x-clip bg-white font-winnstein-body text-brand-marine">
      <section className="relative overflow-hidden border-b border-white/12 bg-brand-marine text-white">
        <div className="knowledge-watermark-mask pointer-events-none absolute inset-0">
          <BrandLineWatermark placement="about" />
        </div>

        <div className="relative mx-auto flex min-h-[20rem] max-w-7xl items-center px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div className="relative z-10 min-w-0">
              <h1 className="max-w-3xl font-winnstein-display text-[2.4rem] font-bold leading-[1.03] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.7rem]">
                {content.hero.title}
              </h1>
              <span
                aria-hidden="true"
                className="mt-7 block h-1 w-20 bg-brand-steel-cyan"
              />
            </div>
            <div>
              <p className="max-w-3xl text-lg leading-8 text-white/76">
                {content.hero.description}
              </p>

              <div className="mt-8 grid border-y border-white/18 sm:grid-cols-3">
                {content.hero.principles.map((principle, index) => (
                  <div
                    key={`${principle.firstLine}-${principle.secondLine}`}
                    className={`flex min-h-20 items-center gap-3 py-4 font-winnstein-display text-sm font-bold ${
                      index > 0
                        ? "sm:border-l sm:border-white/18 sm:px-7"
                        : "sm:pr-7"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="brand-list-dash brand-list-dash-center"
                    />
                    <span>
                      <span className="block whitespace-nowrap">{principle.firstLine}</span>
                      <span className="block whitespace-nowrap">{principle.secondLine}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="h-2 bg-brand-steel-cyan" />
      </section>

      <section className="bg-surface-muted">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="brand-panel-cut-bottom-right overflow-hidden border border-line-soft bg-white shadow-[0_28px_80px_-58px_rgba(3,19,52,0.55)]">
            <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
              <div className="relative overflow-hidden bg-brand-marine p-8 text-white sm:p-10 lg:p-12">
                <div className="knowledge-watermark-mask pointer-events-none absolute inset-0 opacity-45">
                  <BrandLineWatermark placement="about" />
                </div>
                <div className="relative">
                  <p className="font-winnstein-display text-sm font-semibold tracking-[0.08em] text-brand-steel-cyan">
                    {content.identity.eyebrow}
                  </p>
                  <h2 className="mt-4 max-w-xl font-winnstein-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-[2.8rem] lg:leading-[1.08]">
                    {content.identity.title}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="mt-8 block h-1 w-20 bg-brand-steel-cyan"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center bg-white p-8 sm:p-10 lg:border-l lg:border-line-soft lg:p-12">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="h-px w-10 bg-brand-steel-cyan"
                  />
                  <p className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                    {content.identity.visionLabel}
                  </p>
                </div>
                <p className="mt-6 max-w-3xl font-winnstein-display text-2xl font-bold leading-9 tracking-[-0.025em] text-brand-marine sm:text-3xl sm:leading-10">
                  {content.identity.vision}
                </p>
              </div>
            </div>

            <div className="grid gap-px bg-line-soft md:grid-cols-3">
              {content.identity.values.map((value, index) => (
                <article
                  key={value.title}
                  className="grid grid-cols-[3rem_1fr] gap-5 bg-white p-7 lg:p-8"
                >
                  <span className="brand-panel-cut-bottom-right flex h-12 w-12 items-center justify-center rounded-tl-xl bg-brand-steel-cyan-10 text-brand-steel-cyan [--brand-panel-cut:0.625rem]">
                    <ValueIcon index={index} />
                  </span>
                  <div>
                    <h3 className="font-winnstein-display text-xl font-bold">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-copy-muted">
                      {value.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.34fr_1fr] lg:gap-12 lg:items-start">
            <div className="border-l-2 border-brand-steel-cyan pl-6">
              <h3 className="font-winnstein-display text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                {content.identity.historyTitle}
              </h3>
              <p className="mt-4 max-w-sm text-base leading-7 text-copy-muted">
                {content.identity.historyDescription}
              </p>
            </div>

            <ol className="grid gap-4 md:grid-cols-3">
              {content.identity.milestones.map((milestone, index) => (
                <li
                  key={milestone.title}
                  className="brand-panel-cut-bottom-right flex min-h-52 flex-col border border-line-soft bg-white p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-winnstein-display text-3xl font-bold text-brand-steel-cyan">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span aria-hidden="true" className="h-px flex-1 bg-line-soft" />
                  </div>
                  <p className="mt-8 font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                    {milestone.label}
                  </p>
                  <h4 className="mt-3 font-winnstein-display text-xl font-bold leading-7 tracking-[-0.02em]">
                    {milestone.title}
                  </h4>
                  <p className="mt-4 text-sm leading-6 text-copy-muted">
                    {milestone.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-8 border-b border-line-soft pb-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="font-winnstein-display text-sm font-semibold tracking-[0.08em] text-brand-steel-cyan">
                {content.leadership.eyebrow}
              </p>
              <h2 className="mt-3 max-w-3xl font-winnstein-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                {content.leadership.title}
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-copy-muted lg:justify-self-end">
              {content.leadership.description}
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:gap-10">
            {content.leadership.profiles.map((profile, index) => {
              const image = (
                <div className="relative min-h-[25rem] lg:min-h-[30rem]">
                  <Image
                    src={profile.image}
                    alt={profile.imageAlt}
                    fill
                    showAiDisclosure={false}
                    quality={90}
                    className="object-cover object-[50%_25%]"
                    sizes="(min-width: 1024px) 47vw, 100vw"
                  />
                </div>
              );

              const details = (
                <div className="flex min-w-0 flex-col justify-center bg-brand-marine p-7 text-white sm:p-10 lg:p-12">
                  <p className="font-winnstein-display text-sm font-semibold text-brand-steel-cyan sm:text-base">
                    {profile.role}
                  </p>
                  <h3 className="mt-3 font-winnstein-display text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                    {profile.name}
                  </h3>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-white/76">
                    {profile.introduction}
                  </p>

                  <ul className="mt-7 grid border-t border-white/18 sm:grid-cols-2">
                    {profile.facts.map((fact, factIndex) => (
                      <li
                        key={fact}
                        className={`flex gap-3 border-b border-white/18 py-4 text-sm leading-6 text-white/82 ${
                          factIndex % 2 === 1
                            ? "sm:border-l sm:pl-5"
                            : "sm:pr-5"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className="brand-list-dash"
                        />
                        {fact}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <Link
                      href={localizeHref(locale, profile.profileHref)}
                      className="brand-action inline-flex min-h-12 items-center justify-center gap-3 bg-white px-6 py-3 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:bg-brand-steel-cyan-10"
                    >
                      {profile.profileLabel}
                      <ArrowIcon />
                    </Link>
                    <TextLink
                      href={
                        profile.secondaryExternal
                          ? profile.secondaryHref
                          : localizeHref(locale, profile.secondaryHref)
                      }
                      external={profile.secondaryExternal}
                      inverse
                    >
                      {profile.secondaryLabel}
                    </TextLink>
                  </div>
                </div>
              );

              return (
                <article
                  key={profile.name}
                  className="grid overflow-hidden border border-line-soft shadow-[0_30px_80px_-52px_rgba(3,19,52,0.5)] lg:grid-cols-2"
                >
                  {index % 2 === 0 ? image : details}
                  {index % 2 === 0 ? details : image}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <TeamSection locale={locale} content={content.team} />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="font-winnstein-display text-sm font-semibold tracking-[0.08em] text-brand-steel-cyan">
                {content.company.eyebrow}
              </p>
              <h2 className="mt-3 max-w-2xl font-winnstein-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                {content.company.title}
              </h2>
              <span
                aria-hidden="true"
                className="mt-7 block h-1 w-20 bg-brand-steel-cyan"
              />
            </div>

            <div className="lg:pt-7">
              <div className="space-y-5 text-lg leading-8 text-copy-muted">
                {content.company.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
                <TextLink href={localizeHref(locale, "/leistungen")}>
                  {content.company.servicesLabel}
                </TextLink>
                <TextLink
                  href={localizeHref(
                    locale,
                    "/leistungen/langfristige-kooperation",
                  )}
                >
                  {content.company.partnershipLabel}
                </TextLink>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-px border border-line-soft bg-line-soft sm:grid-cols-2 xl:grid-cols-4">
            {content.company.signals.map((signal) => (
              <article
                key={signal.title}
                className="flex min-h-36 flex-col justify-between bg-white p-7 lg:p-8"
              >
                <p className="font-winnstein-display text-xl font-bold text-brand-steel-cyan">
                  {signal.value}
                </p>
                <h3 className="mt-6 font-winnstein-display text-xl font-bold tracking-[-0.02em]">
                  {signal.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-marine text-white">
        <div className="knowledge-watermark-mask pointer-events-none absolute inset-0 opacity-60">
          <BrandLineWatermark placement="about" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-8 border-b border-white/18 pb-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="font-winnstein-display text-sm font-semibold tracking-[0.08em] text-brand-steel-cyan">
                {content.workingModel.eyebrow}
              </p>
              <h2 className="mt-3 max-w-3xl font-winnstein-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                {content.workingModel.title}
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-white/72 lg:justify-self-end">
              {content.workingModel.description}
            </p>
          </div>

          <ol className="mt-10 grid gap-px bg-white/18 md:grid-cols-2 xl:grid-cols-4">
            {content.workingModel.steps.map((step, index) => (
              <li key={step.title} className="bg-brand-marine p-7 lg:p-8">
                <span className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-winnstein-display text-2xl font-bold tracking-[-0.025em]">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/68">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="podcast"
        className="scroll-mt-28 border-t-8 border-brand-steel-cyan bg-surface-muted text-brand-marine"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="font-winnstein-display text-sm font-semibold text-brand-steel-cyan">
              {content.podcast.label}
            </p>
            <h2 className="mt-3 font-winnstein-display text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
              {content.podcast.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-copy-muted">
              {content.podcast.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href={podcastUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-action inline-flex min-h-12 items-center justify-center gap-3 bg-brand-marine px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-brand-steel-cyan"
              >
                {content.podcast.linkLabel}
                <ArrowIcon />
              </Link>
              <TextLink href={calendlyUrl} external>
                {content.podcast.contactLabel}
              </TextLink>
            </div>
          </div>

          <div className="brand-panel-cut-bottom-right border border-brand-marine/15 bg-brand-marine px-6 py-7 sm:px-8">
            <div className="relative aspect-[3/1] overflow-hidden">
              <Image
                src="/about/podcast-waveform-transparent.png"
                alt=""
                fill
                aria-hidden="true"
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-contain object-center"
              />
            </div>
            <p className="mt-2 text-right text-sm text-white/60">
              {content.podcast.durationLabel}
            </p>
          </div>
        </div>
      </section>

      <PageClosingCta
        locale={locale}
        title={content.cta.title}
        description={content.cta.description}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(peopleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
