import type { CSSProperties } from "react";

import type { Locale } from "../_i18n/config";

type RiskMatrixHeroGraphicProps = {
  locale: Locale;
};

type RiskStage = {
  label: string;
  shortLabel: string;
  probability: number;
  impact: number;
  uncertainty: number;
  status: string;
  decision: string;
  summary: string;
};

type RiskAnimationStyle = CSSProperties & Record<`--risk-${string}`, string>;

const content = {
  de: {
    eyebrow: "Risikomatrix im Engineering",
    title: "Vom Risikoverdacht zur belastbaren Entscheidung.",
    subtitle:
      "Die Animation zeigt vereinfacht, wie technische Unsicherheit durch Analyse, Maßnahmen und Nachweise in eine tragfähige Entscheidungsbasis überführt wird.",
    probabilityAxis: "Eintrittswahrscheinlichkeit",
    impactAxis: "Auswirkung",
    stageLabel: "Bewertungsweg",
    uncertainty: "Restunsicherheit im Beispiel",
    currentRisk: "Risikobewertung",
    trail: "Bewertungsweg",
    lowZone: "niedrig",
    mediumZone: "mittel",
    highZone: "hoch",
    note:
      "Die Aussage: RelTest macht Risiken nicht unsichtbar. Wir machen sie bewertbar, priorisierbar und nachvollziehbar dokumentierbar.",
    stages: [
      {
        label: "Unklare technische Auffälligkeit",
        shortLabel: "Unklar",
        probability: 4.35,
        impact: 4.15,
        uncertainty: 78,
        status: "Risiko noch nicht belastbar eingeordnet",
        decision: "Keine sichere Freigabegrundlage",
        summary:
          "Ein Ausfallbild ist sichtbar, aber Ursache, Häufigkeit und Relevanz sind noch nicht ausreichend verstanden.",
      },
      {
        label: "Analyse und Ursachenhypothesen",
        shortLabel: "Analyse",
        probability: 3.55,
        impact: 4.05,
        uncertainty: 52,
        status: "Ausfallmechanismen werden greifbar",
        decision: "Hypothesen und Teststrategie",
        summary:
          "Datenlage, Einsatzbedingungen und potenzielle Mechanismen werden strukturiert bewertet.",
      },
      {
        label: "Maßnahmen, DoE und Erprobung",
        shortLabel: "Maßnahmen",
        probability: 2.55,
        impact: 3.75,
        uncertainty: 34,
        status: "Hebel und Nachweise werden planbar",
        decision: "Maßnahmen und Absicherung definieren",
        summary:
          "Technische Maßnahmen, Versuchsplanung und Erprobung zeigen, was wirksam ist und was nachgewiesen werden muss.",
      },
      {
        label: "Dokumentierte Absicherung",
        shortLabel: "Abgesichert",
        probability: 1.65,
        impact: 3.35,
        uncertainty: 18,
        status: "Entscheidung wird nachvollziehbar",
        decision: "Belastbare Entscheidungsbasis",
        summary:
          "Das Restrisiko bleibt sichtbar, ist aber bewertet und nach Stand der Technik dokumentiert.",
      },
    ],
  },
  en: {
    eyebrow: "Engineering risk matrix",
    title: "From risk signal to robust decision basis.",
    subtitle:
      "The animation shows, in simplified form, how technical uncertainty is turned into a defensible decision basis through analysis, measures and evidence.",
    probabilityAxis: "Probability of occurrence",
    impactAxis: "Impact",
    stageLabel: "Assessment path",
    uncertainty: "Illustrative residual uncertainty",
    currentRisk: "Risk assessment",
    trail: "Assessment path",
    lowZone: "low",
    mediumZone: "medium",
    highZone: "high",
    note:
      "The message: RelTest does not make risks disappear. We make them assessable, prioritizable and transparently documentable.",
    stages: [
      {
        label: "Unclear technical anomaly",
        shortLabel: "Unclear",
        probability: 4.35,
        impact: 4.15,
        uncertainty: 78,
        status: "Risk not yet robustly assessed",
        decision: "No reliable release basis",
        summary:
          "A failure pattern is visible, but root cause, frequency and relevance are not sufficiently understood yet.",
      },
      {
        label: "Analysis and root-cause hypotheses",
        shortLabel: "Analysis",
        probability: 3.55,
        impact: 4.05,
        uncertainty: 52,
        status: "Failure mechanisms become tangible",
        decision: "Hypotheses and test strategy",
        summary:
          "Data quality, operating conditions and potential mechanisms are evaluated systematically.",
      },
      {
        label: "Measures, DoE and testing",
        shortLabel: "Measures",
        probability: 2.55,
        impact: 3.75,
        uncertainty: 34,
        status: "Levers and evidence become plannable",
        decision: "Define measures and validation",
        summary:
          "Technical measures, experimental design and testing show what is effective and what must be proven.",
      },
      {
        label: "Documented validation",
        shortLabel: "Validated",
        probability: 1.65,
        impact: 3.35,
        uncertainty: 18,
        status: "Decision becomes traceable",
        decision: "Robust decision basis",
        summary:
          "Residual risk remains visible, but it is assessed and documented according to the state of the art.",
      },
    ],
  },
} as const;

function percentFromScale(value: number) {
  return ((value - 1) / 4) * 100;
}

function uncertaintySize(stage: RiskStage) {
  return 56 + stage.uncertainty * 0.62;
}

function zoneColor(row: number, column: number) {
  const score = (row + 1) * (column + 1);

  if (score >= 16) {
    return "bg-rose-100/80";
  }

  if (score >= 9) {
    return "bg-amber-100/75";
  }

  return "bg-cyan-50/90";
}

function trailPoints(stages: readonly RiskStage[]) {
  return stages
    .map(
      (stage) =>
        `${percentFromScale(stage.impact).toFixed(2)},${(
          100 - percentFromScale(stage.probability)
        ).toFixed(2)}`,
    )
    .join(" ");
}

function routeStyle(stages: readonly RiskStage[]) {
  return stages.reduce(
    (style, stage, index) => {
      style[`--risk-x-${index}`] = `${percentFromScale(stage.impact)}%`;
      style[`--risk-y-${index}`] = `${percentFromScale(stage.probability)}%`;

      return style;
    },
    { "--risk-route-duration": "12s" } as RiskAnimationStyle,
  );
}

function stepDelay(index: number) {
  return { "--risk-step-delay": `${index * 3}s` } as RiskAnimationStyle;
}

export function RiskMatrixHeroGraphic({ locale }: RiskMatrixHeroGraphicProps) {
  const text = content[locale];
  const firstStage = text.stages[0];
  const lastStage = text.stages[text.stages.length - 1];
  const routeAnimationStyle = routeStyle(text.stages);

  return (
    <div className="risk-matrix-panel w-full overflow-hidden rounded-[2.3rem] border border-slate-200/80 bg-white/[0.9] p-4 shadow-[0_38px_90px_-44px_rgba(15,23,42,0.38)] ring-1 ring-white/90 backdrop-blur sm:p-5">
      <div className="relative overflow-hidden rounded-[1.8rem] bg-[#f5f9fb]">
        <div className="hero-editorial-grid absolute inset-0 opacity-90" />
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute -bottom-28 left-8 h-56 w-56 rounded-full bg-slate-300/30 blur-3xl" />

        <div className="relative z-10 p-5 sm:p-7">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-cyan-800">
                {text.eyebrow}
              </p>
              <h2 className="mt-3 max-w-lg text-2xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-3xl">
                {text.title}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                {text.subtitle}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-right shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                {text.uncertainty}
              </p>
              <p className="mt-1 text-2xl font-semibold tracking-[-0.05em] text-slate-950">
                {firstStage.uncertainty} % -&gt; {lastStage.uncertainty} %
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[1.45rem] border border-slate-200 bg-white/85 p-4 shadow-sm">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                {text.currentRisk}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                <span className="h-2.5 w-2.5 rounded-sm bg-cyan-50 ring-1 ring-cyan-100" />
                <span>{text.lowZone}</span>
                <span className="h-2.5 w-2.5 rounded-sm bg-amber-100 ring-1 ring-amber-200" />
                <span>{text.mediumZone}</span>
                <span className="h-2.5 w-2.5 rounded-sm bg-rose-100 ring-1 ring-rose-200" />
                <span>{text.highZone}</span>
              </div>
            </div>

            <div className="grid grid-cols-[2rem_1fr] gap-3">
              <div className="flex items-center justify-center">
                <p className="-rotate-90 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  {text.probabilityAxis}
                </p>
              </div>
              <div>
                <div
                  className="relative aspect-[1.16/1] overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  aria-label={`${text.currentRisk}: ${text.stages
                    .map((stage) => stage.label)
                    .join(", ")}`}
                  role="img"
                >
                  <div className="grid h-full grid-cols-5 grid-rows-5 gap-px bg-slate-200/80 p-px">
                    {Array.from({ length: 25 }, (_, index) => {
                      const row = 4 - Math.floor(index / 5);
                      const column = index % 5;

                      return (
                        <div
                          key={`${row}-${column}`}
                          className={`${zoneColor(row, column)} transition-colors`}
                        />
                      );
                    })}
                  </div>

                  <svg
                    className="pointer-events-none absolute inset-[1px] h-[calc(100%-2px)] w-[calc(100%-2px)]"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                  >
                    <polyline
                      className="risk-matrix-trail"
                      fill="none"
                      points={trailPoints(text.stages)}
                      stroke="#0f172a"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.15"
                    />
                  </svg>

                  {text.stages.map((stage) => (
                    <span
                      key={stage.label}
                      className="absolute h-2.5 w-2.5 rounded-full border border-white bg-slate-500/70"
                      style={{
                        bottom: `${percentFromScale(stage.probability)}%`,
                        left: `${percentFromScale(stage.impact)}%`,
                        transform: "translate(-50%, 50%)",
                      }}
                    />
                  ))}

                  {text.stages.map((stage, index) => (
                    <div
                      key={`${stage.label}-uncertainty`}
                      className="risk-matrix-uncertainty-step absolute rounded-full border border-cyan-700/25 bg-cyan-400/10"
                      style={{
                        ...stepDelay(index),
                        bottom: `${percentFromScale(stage.probability)}%`,
                        height: `${uncertaintySize(stage)}px`,
                        left: `${percentFromScale(stage.impact)}%`,
                        transform: "translate(-50%, 50%)",
                        width: `${uncertaintySize(stage)}px`,
                      }}
                    />
                  ))}

                  <div
                    className="risk-matrix-route-point absolute h-5 w-5 rounded-full border-[3px] border-white bg-cyan-700 shadow-xl shadow-cyan-900/20"
                    style={routeAnimationStyle}
                  />

                  <div className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-800 shadow-sm ring-1 ring-slate-200">
                    {text.trail}
                  </div>
                </div>
                <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  {text.impactAxis}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              {text.stageLabel}
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
              {text.stages.map((stage, index) => (
                <div
                  key={stage.label}
                  className="risk-step-card rounded-2xl border border-slate-200 bg-white/78 px-3 py-3 text-left shadow-sm"
                  style={stepDelay(index)}
                >
                  <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-800">
                    {stage.shortLabel}
                  </span>
                  <span className="mt-1 block text-sm font-semibold leading-5 text-slate-950">
                    {stage.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm">
            <p className="text-sm font-bold text-slate-950">
              {lastStage.decision}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {text.stages.map((stage) => stage.summary).join(" ")}
            </p>
          </div>

          <p className="mt-4 text-xs leading-5 text-slate-500">{text.note}</p>
        </div>
      </div>
    </div>
  );
}
