import type { Locale } from "../_i18n/config";

export type ServiceCardImage = {
  src: string;
  alt: string;
  label: string;
};

export const serviceCardImages = {
  de: {
    "/leistungen/beratung": {
      src: "/team/img-0112.jpg",
      alt: "RelTest Experten analysieren ein technisches Bauteil und Ausfallmechanismen",
      label: "Technische Beratung",
    },
    "/weiterbildung/seminare": {
      src: "/team/img-0107.png",
      alt: "RelTest Seminar zur Zuverlässigkeitstechnik vor Ort",
      label: "Direkter Wissenstransfer",
    },
    "/weiterbildung/academy": {
      src: "/team/academy-e-learning.png",
      alt: "Digitales Lernangebot von RelTest Education zur Lebensdatenanalyse am Bildschirm",
      label: "Digital lernen",
    },
    "/leistungen/langfristige-kooperation": {
      src: "/team/img-0139.jpg",
      alt: "RelTest Experte unterstützt technische Absicherung an einem Prüfstand",
      label: "Projektbegleitung",
    },
  },
  en: {
    "/leistungen/beratung": {
      src: "/team/img-0112.jpg",
      alt: "RelTest experts analysing a technical component and failure mechanisms",
      label: "Technical consulting",
    },
    "/weiterbildung/seminare": {
      src: "/team/img-0107.png",
      alt: "RelTest on-site seminar on reliability engineering",
      label: "Direct knowledge transfer",
    },
    "/weiterbildung/academy": {
      src: "/team/academy-e-learning.png",
      alt: "RelTest Education digital training on life data analysis displayed on a screen",
      label: "Digital learning",
    },
    "/leistungen/langfristige-kooperation": {
      src: "/team/img-0139.jpg",
      alt: "RelTest expert supporting technical validation at a test bench",
      label: "Project support",
    },
  },
} as const satisfies Record<Locale, Record<string, ServiceCardImage>>;
