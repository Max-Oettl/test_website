import Image from "next/image";
import Link from "next/link";

const heroTopics = [
  {
    title: "Erprobung",
    icon: "/hero-pictograms/erprobung-clean.png",
    className:
      "left-1/2 top-[2%] w-52 -translate-x-1/2 sm:w-56 lg:w-60",
  },
  {
    title: "Datenanalyse",
    icon: "/hero-pictograms/datenanalyse-clean.png",
    className:
      "right-[3%] top-[29%] w-44 sm:w-48 lg:w-52",
  },
  {
    title: "DoE",
    icon: "/hero-pictograms/doe-clean.png",
    className:
      "bottom-[8%] right-[10%] w-40 sm:w-44 lg:w-48",
  },
  {
    title: "Prognostik & Health Monitoring",
    icon: "/hero-pictograms/prognostik-health-monitoring-clean.png",
    className:
      "bottom-[8%] left-[5%] w-52 sm:w-56 lg:w-60",
  },
  {
    title: "Modellbildung",
    icon: "/hero-pictograms/modellbildung-clean.png",
    className:
      "left-[3%] top-[29%] w-44 sm:w-48 lg:w-52",
  },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbfd_0%,#eef4f7_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(8,145,178,0.10),transparent_28%),radial-gradient(circle_at_85%_14%,rgba(15,23,42,0.08),transparent_24%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(14,165,233,0.35),transparent)]" />

      <div className="relative mx-auto grid max-w-[92rem] gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 lg:px-8 lg:py-24 xl:grid-cols-[0.74fr_1.26fr]">
        <div className="flex max-w-xl flex-col justify-center xl:max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-700">
            Advanced Reliability Engineering Partner
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
            Zuverlässigkeitstechnik für belastbare Entscheidungen in Entwicklung,
            Absicherung und Serienreife.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            RelTest Solutions berät seit 2016 Industrieunternehmen bei der Absicherung
            anspruchsvoller technischer Produkte. Im Team vereinen wir mehrere Jahrzehnte
            Erfahrung in Zuverlässigkeit, Lebensdauer, Statistik, Erprobung und DoE.
          </p>

          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/70 bg-white/80 px-5 py-4 shadow-sm ring-1 ring-slate-200/70 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">
                Seit 2016
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Beratungspartner für technische Zuverlässigkeit in Entwicklungsprojekten.
              </p>
            </div>
            <div className="rounded-3xl border border-white/70 bg-white/80 px-5 py-4 shadow-sm ring-1 ring-slate-200/70 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">
                Jahrzehnte Erfahrung
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Praxiswissen aus Automotive, Maschinenbau, Testing und Statistik.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white shadow-xl shadow-slate-300 transition-colors hover:bg-cyan-800"
            >
              Projekt besprechen
            </Link>
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-800"
            >
              Leistungen ansehen
            </Link>
          </div>

          <div className="mt-5">
            <Link
              href="/wissen"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-800 transition-colors hover:text-slate-950"
            >
              Mehr über Zuverlässigkeitstechnik erfahren
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="relative lg:min-w-[42rem] xl:min-w-[46rem]">
          <div className="overflow-hidden rounded-[2.2rem] border border-slate-200/80 bg-white/78 p-4 shadow-[0_30px_80px_-36px_rgba(15,23,42,0.22)] ring-1 ring-white/80 backdrop-blur lg:p-5">
            <div className="relative aspect-[1.16/1] overflow-hidden rounded-[1.7rem] bg-[linear-gradient(180deg,#fcfeff_0%,#eef4f7_100%)] px-4 py-5 sm:px-5 sm:py-6 lg:aspect-[1.22/1] lg:px-6 lg:py-7">
              <div className="hero-grid absolute inset-0 opacity-60" />

              <svg
                viewBox="0 0 760 720"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="heroOrbitStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0891b2" stopOpacity="0.24" />
                    <stop offset="100%" stopColor="#0f172a" stopOpacity="0.18" />
                  </linearGradient>
                  <linearGradient id="heroAccentStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>

                <circle
                  cx="380"
                  cy="360"
                  r="176"
                  fill="none"
                  stroke="url(#heroOrbitStroke)"
                  strokeWidth="1.4"
                  className="hero-draw"
                  strokeDasharray="1180"
                  strokeDashoffset="1180"
                />
                <circle
                  cx="380"
                  cy="360"
                  r="152"
                  fill="none"
                  stroke="rgba(8,145,178,0.12)"
                  strokeWidth="1"
                  strokeDasharray="6 8"
                  className="hero-spin-slow origin-center"
                />
                <path
                  d="M380 184 A176 176 0 0 1 512 244"
                  fill="none"
                  stroke="url(#heroAccentStroke)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="hero-draw-delay"
                  strokeDasharray="180"
                  strokeDashoffset="180"
                />
                <path
                  d="M250 476 A176 176 0 0 1 380 536"
                  fill="none"
                  stroke="url(#heroAccentStroke)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="hero-draw-delay-2"
                  strokeDasharray="180"
                  strokeDashoffset="180"
                />

                <g stroke="rgba(15,23,42,0.34)" strokeWidth="1.2" fill="none" strokeLinecap="round">
                  <line x1="380" y1="184" x2="380" y2="118" className="hero-draw-delay" />
                  <line x1="556" y1="360" x2="636" y2="360" className="hero-draw-delay" />
                  <line x1="488" y1="488" x2="548" y2="548" className="hero-draw-delay-2" />
                  <line x1="272" y1="488" x2="212" y2="548" className="hero-draw-delay-2" />
                  <line x1="204" y1="360" x2="124" y2="360" className="hero-draw-delay" />
                </g>

                <g fill="#0f172a">
                  <circle cx="380" cy="118" r="5.5" className="hero-pulse" />
                  <circle cx="636" cy="360" r="5.5" className="hero-pulse-delay" />
                  <circle cx="548" cy="548" r="5.5" className="hero-pulse-delay-2" />
                  <circle cx="212" cy="548" r="5.5" className="hero-pulse-delay-3" />
                  <circle cx="124" cy="360" r="5.5" className="hero-pulse-delay-4" />
                </g>

                <g fill="#0ea5e9" opacity="0.78">
                  <circle cx="442" cy="228" r="4" className="hero-pulse-delay-2" />
                  <circle cx="514" cy="454" r="4" className="hero-pulse-delay-4" />
                  <circle cx="300" cy="472" r="4" className="hero-pulse-delay" />
                </g>
              </svg>

              <div className="absolute inset-0 hidden sm:block">
                {heroTopics.map((topic) => (
                  <div
                    key={topic.title}
                    className={`hero-card absolute ${topic.className}`}
                  >
                    <div className="flex items-center gap-3 rounded-[1.5rem] border border-white/90 bg-white/95 px-3.5 py-3 shadow-[0_18px_34px_-28px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/70 backdrop-blur">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#f8fcfe_0%,#eef5f8_100%)] ring-1 ring-slate-200">
                        <Image
                          src={topic.icon}
                          alt=""
                          width={36}
                          height={36}
                          className="h-9 w-9 object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold leading-4 text-slate-900 lg:text-sm">
                          {topic.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute left-1/2 top-1/2 flex h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <div className="hero-core absolute inset-[3%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.98),rgba(241,245,249,0.96))] shadow-[0_28px_55px_-30px_rgba(15,23,42,0.3)]" />
                <div className="hero-core-ring absolute inset-0 rounded-full border border-slate-200/90" />
                <div className="relative flex h-[74%] w-[74%] items-center justify-center rounded-full bg-white shadow-inner shadow-slate-200/70">
                  <Image
                    src="/reltest-solutions-logo.png"
                    alt="RelTest Solutions Logo"
                    width={292}
                    height={104}
                    priority
                    className="h-auto w-[72%]"
                    sizes="(min-width: 1024px) 22vw, 48vw"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:hidden">
              {heroTopics.map((topic) => (
                <div
                  key={topic.title}
                  className="flex items-center gap-3 rounded-[1.4rem] border border-white/90 bg-white/92 px-4 py-3 shadow-sm ring-1 ring-slate-200/70"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                    <Image
                      src={topic.icon}
                      alt=""
                      width={34}
                      height={34}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{topic.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
