import type { NextConfig } from "next";

const isVercelPreviewDeployment = process.env.VERCEL_ENV === "preview";

const legacyRedirectPairs = [
  ["/", "/de"],
  ["/de/weiterbildung", "/de/education"],
  ["/en/weiterbildung", "/en/education"],
  ["/de/weiterbildung/seminare", "/de/education#vor-ort-schulung"],
  ["/en/weiterbildung/seminare", "/en/education#on-site-training"],
  ["/de/weiterbildung/academy", "/de/education#e-learning"],
  ["/en/weiterbildung/academy", "/en/education#e-learning"],
  ["/zuverlaessigkeitstechnik", "/de/wissen/zuverlaessigkeitstechnik"],
  ["/zuverlaessigkeitstechnik/planung", "/de/wissen/planung"],
  ["/zuverlaessigkeitstechnik/absicherung", "/de/wissen/absicherung"],
  [
    "/zuverlaessigkeitstechnik/schwachstellenanalyse",
    "/de/wissen/schwachstellenanalyse",
  ],
  ["/zuverlaessigkeitstechnik/prognosen", "/de/wissen/prognosen"],
  ["/zuverlaessigkeitstechnik/erprobung", "/de/wissen/erprobung"],
  [
    "/zuverlaessigkeitsmanagement",
    "/de/leistungen/zuverlaessigkeitsmanagement",
  ],
  ["/zuverlaessigkeitsmanagement/consulting", "/de/leistungen/beratung"],
  ["/zuverlaessigkeitsmanagement/coaching", "/de/leistungen/coaching"],
  [
    "/zuverlaessigkeitsmanagement/training",
    "/de/education#vor-ort-schulung",
  ],
  [
    "/zuverlaessigkeitsmanagement/seminare",
    "/de/education#vor-ort-schulung",
  ],
  [
    "/zuverlaessigkeitsmanagement/seminare/doe-praxisorientierte-statistische-versuchsplanung",
    "/de/weiterbildung/doe-praxisorientierte-statistische-versuchsplanung",
  ],
  [
    "/zuverlaessigkeitsmanagement/seminare/zuverlaessigkeit-erprobung-fuer-praktiker",
    "/de/weiterbildung/zuverlaessigkeit-erprobung-fuer-praktiker",
  ],
  [
    "/zuverlaessigkeitsmanagement/seminare/entwicklung-und-absicherung-elektronischer-komponenten",
    "/de/weiterbildung/entwicklung-absicherung-elektronischer-komponenten",
  ],
  ["/design-of-experiments", "/de/wissen/design-of-experiments"],
  ["/design-of-experiments-doe", "/de/wissen/design-of-experiments"],
  ["/glossar/design-of-experiments-doe", "/de/wissen/design-of-experiments"],
  ["/design-of-experiments/consulting", "/de/leistungen/doe-consulting"],
  ["/design-of-experiments/coaching", "/de/leistungen/doe-coaching"],
  [
    "/design-of-experiments/training",
    "/de/weiterbildung/doe-praxisorientierte-statistische-versuchsplanung",
  ],
  ["/branchen", "/de/branchen"],
  ["/zuverlaessigkeitsmanagement/automotive", "/de/branchen/automotive"],
  ["/zuverlaessigkeitsmanagement/maschinenbau", "/de/branchen/maschinenbau"],
  [
    "/zuverlaessigkeitsmanagement/elektronische-produkte",
    "/de/branchen/elektronische-produkte",
  ],
  [
    "/zuverlaessigkeitsmanagement/erneuerbare-energien",
    "/de/branchen/erneuerbare-energien",
  ],
  ["/zuverlaessigkeitsmanagement/konsumgueter", "/de/branchen/konsumgueter"],
  [
    "/zuverlaessigkeitsmanagement/luft-und-raumfahrt",
    "/de/branchen/luft-und-raumfahrt",
  ],
  ["/zuverlaessigkeitsmanagement/medizintechnik", "/de/branchen/medizintechnik"],
  [
    "/zuverlaessigkeitsmanagement/produktionstechnik",
    "/de/branchen/produktionstechnik",
  ],
  [
    "/buch-fuer-zuverlaessigkeit-im-fahrzeug-und-maschinenbau",
    "/de/literatur",
  ],
  ["/ueber-uns", "/de/ueber-uns"],
  ["/ueber-uns/dr-ing-kevin-lucan", "/de/ueber-uns/kevin-lucan"],
  ["/ueber-uns/prof-dr-ing-bernd-bertsche", "/de/ueber-uns/bernd-bertsche"],
  ["/referenzen", "/de/referenzen"],
  ["/kontakt", "/de/kontakt"],
  ["/datenschutz", "/de/datenschutz"],
  ["/impressum", "/de/impressum"],
  ["/glossar", "/de/glossar"],
  ["/aktuelles", "/de/aktuelles"],
  ["/membership-login", "/de/kontakt"],
  ["/karriere", "/de/karriere"],
  ["/karriere/werkstudentin-e-learning", "/de/karriere/werkstudentin-e-learning"],
  ["/karriere/marketing-manager", "/de/karriere/marketing-manager"],
  [
    "/webinar-beschleunigte-lebensdauertests",
    "/de/aktuelles/webinar-beschleunigte-lebensdauertests",
  ],
  [
    "/kooperation-mit-holland-innovative",
    "/de/aktuelles/kooperation-holland-innovative",
  ],
  ["/rams-award", "/de/aktuelles/rams-award"],
  [
    "/unser-aktuelles-webinar-zum-thema-effiziente-lebensdauertestplanung",
    "/de/aktuelles/webinar-effiziente-lebensdauertestplanung",
  ],
  [
    "/smart-data-der-neue-ansatz-fuer-das-produktdesign-von-martin-dazer",
    "/de/aktuelles/smart-data-produktdesign",
  ],
  ["/category/a", "/de/aktuelles"],
  ["/category/cee", "/de/aktuelles"],
  ["/author/MasterRel20", "/de/aktuelles"],
  ["/en/reliability-engineering", "/en/wissen/zuverlaessigkeitstechnik"],
  ["/en/reliability-engineering/reliability-planning", "/en/wissen/planung"],
  ["/en/reliability-engineering/reliability-testing", "/en/wissen/erprobung"],
  [
    "/en/reliability-engineering/vulnerability-analysis",
    "/en/wissen/schwachstellenanalyse",
  ],
  ["/en/reliability-engineering/reliability-forecast", "/en/wissen/prognosen"],
  ["/en/reliability-engineering/reliability-assurance", "/en/wissen/absicherung"],
  [
    "/en/reliability-management",
    "/en/leistungen/zuverlaessigkeitsmanagement",
  ],
  ["/en/reliability-management/consulting", "/en/leistungen/beratung"],
  ["/en/reliability-management/coaching", "/en/leistungen/coaching"],
  ["/en/reliability-management/training", "/en/education#on-site-training"],
  ["/en/reliability-management/seminars", "/en/education#on-site-training"],
  ["/en/industries", "/en/branchen"],
  ["/en/reliability-management/automotive", "/en/branchen/automotive"],
  [
    "/en/reliability-management/mechanical-engineering",
    "/en/branchen/maschinenbau",
  ],
  [
    "/en/reliability-management/electronic-products",
    "/en/branchen/elektronische-produkte",
  ],
  [
    "/en/reliability-management/renewable-energy",
    "/en/branchen/erneuerbare-energien",
  ],
  [
    "/en/reliability-management/consumer-goods",
    "/en/branchen/konsumgueter",
  ],
  ["/en/reliability-management/aerospace", "/en/branchen/luft-und-raumfahrt"],
  ["/en/reliability-management/medical", "/en/branchen/medizintechnik"],
  [
    "/en/reliability-management/production-technology",
    "/en/branchen/produktionstechnik",
  ],
  ["/en/about-us", "/en/ueber-uns"],
  ["/en/about-us/dr-ing-kevin-lucan", "/en/ueber-uns/kevin-lucan"],
  ["/en/about-us/prof-dr-ing-bernd-bertsche", "/en/ueber-uns/bernd-bertsche"],
  ["/en/credentials", "/en/referenzen"],
  ["/en/contact", "/en/kontakt"],
  ["/en/news", "/en/aktuelles"],
  [
    "/en/webinar-accelerated-life-testing",
    "/en/aktuelles/webinar-beschleunigte-lebensdauertests",
  ],
  ["/en/rams-award-2", "/en/aktuelles/rams-award"],
  [
    "/en/smart-data-the-new-approach-to-product-design-by-martin-dazer",
    "/en/aktuelles/smart-data-produktdesign",
  ],
  [
    "/en/cooperation-with-holland-innovative",
    "/en/aktuelles/kooperation-holland-innovative",
  ],
  [
    "/en/our-current-webinar-on-efficient-life-test-planning",
    "/en/aktuelles/webinar-effiziente-lebensdauertestplanung",
  ],
] as const;

function withOptionalTrailingSlash(
  source: string,
  destination: string,
): Array<{ source: string; destination: string; statusCode: 301 }> {
  if (source === "/") {
    return [{ source, destination, statusCode: 301 }];
  }

  return [
    { source, destination, statusCode: 301 },
    { source: `${source}/`, destination, statusCode: 301 },
  ];
}

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  async headers() {
    if (!isVercelPreviewDeployment) {
      return [];
    }

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet",
          },
        ],
      },
    ];
  },
  async redirects() {
    return legacyRedirectPairs.flatMap(([source, destination]) =>
      withOptionalTrailingSlash(source, destination),
    );
  },
};

export default nextConfig;
