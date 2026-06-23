import type { Locale } from "../_i18n/config";

type AnimatedBathtubCurveProps = {
  alt: string;
  locale: Locale;
};

const labels = {
  de: {
    early: "Frühausfälle*",
    random: "Zufallsausfälle",
    wear: "Verschleißausfälle",
    failureRate: "Ausfallrate",
    time: "Zeit t",
    improvementLines: ["Ausfallrate", "nach Maßnahmen"],
    qualitativeLines: ["* Schwerpunkt", "qualitativer Tests"],
    before: "Ausgangsniveau",
    after: "Nach Maßnahmen",
  },
  en: {
    early: "Early failures*",
    random: "Random failures",
    wear: "Wear-out failures",
    failureRate: "Failure rate",
    time: "Time t",
    improvementLines: ["Failure rate", "after measures"],
    qualitativeLines: ["* Focus of", "qualitative testing"],
    before: "Initial level",
    after: "After measures",
  },
} as const;

const highCurve = "M 118 102 C 144 178 254 201 366 205 C 478 209 536 178 566 102";
const lowCurve = "M 126 218 C 178 234 306 247 426 246 C 536 245 598 216 650 142";

export function AnimatedBathtubCurve({
  alt,
  locale,
}: AnimatedBathtubCurveProps) {
  const text = labels[locale];
  const arrowId = `bathtub-arrow-${locale}`;

  return (
    <figure className="relative aspect-[1.62/1] overflow-hidden rounded-[1.4rem] bg-white">
      <svg
        className="h-full w-full"
        viewBox="0 0 820 506"
        role="img"
        aria-label={alt}
      >
        <defs>
          <marker
            id={arrowId}
            markerHeight="8"
            markerWidth="8"
            orient="auto"
            refX="7"
            refY="4"
            viewBox="0 0 8 8"
          >
            <path d="M0 0L8 4L0 8Z" fill="#0f172a" />
          </marker>
          <filter id="bathtub-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="10"
              floodColor="#0f172a"
              floodOpacity="0.12"
              stdDeviation="10"
            />
          </filter>
        </defs>

        <rect width="820" height="506" fill="#ffffff" />
        <rect
          x="30"
          y="28"
          width="760"
          height="396"
          rx="26"
          fill="#f8fbfd"
          stroke="#e2e8f0"
        />

        <g className="text-[18px] font-bold tracking-[-0.03em]">
          <text x="112" y="64" fill="#0f172a">
            {text.early}
          </text>
          <text x="310" y="64" fill="#0f172a">
            {text.random}
          </text>
          <text x="530" y="64" fill="#0f172a">
            {text.wear}
          </text>
        </g>

        <g stroke="#0f172a" strokeLinecap="round" strokeWidth="3">
          <path d="M82 352H690" markerEnd={`url(#${arrowId})`} />
          <path d="M82 352V78" markerEnd={`url(#${arrowId})`} />
        </g>

        <g stroke="#64748b" strokeDasharray="5 8" strokeLinecap="round" strokeWidth="2">
          <path d="M252 78V352" />
          <path d="M474 78V352" />
          <path d="M654 78V352" />
        </g>

        <text
          x="392"
          y="389"
          textAnchor="middle"
          className="fill-slate-950 text-[19px] font-bold"
        >
          {text.time}
        </text>
        <text
          x="39"
          y="215"
          textAnchor="middle"
          className="fill-slate-950 text-[19px] font-bold"
          transform="rotate(-90 39 215)"
        >
          {text.failureRate}
        </text>

        <path
          d={highCurve}
          fill="none"
          stroke="#ef4444"
          strokeLinecap="round"
          strokeWidth="5"
          opacity="0.22"
        />
        <path
          d={lowCurve}
          fill="none"
          stroke="#10b981"
          strokeLinecap="round"
          strokeWidth="5"
          opacity="0.18"
        />

        <g className="bathtub-improvement-arrow" filter="url(#bathtub-soft-shadow)">
          <path
            d="M204 168L222 224"
            stroke="#64748b"
            strokeLinecap="round"
            strokeWidth="10"
          />
          <path d="M197 223L231 211L223 247Z" fill="#64748b" />
        </g>
        <g
          className="bathtub-improvement-arrow bathtub-improvement-arrow-delayed"
          filter="url(#bathtub-soft-shadow)"
        >
          <path
            d="M426 178L444 235"
            stroke="#64748b"
            strokeLinecap="round"
            strokeWidth="10"
          />
          <path d="M419 234L453 222L445 258Z" fill="#64748b" />
        </g>

        <path
          className="bathtub-curve-morph"
          d={lowCurve}
          fill="none"
          stroke="#0891b2"
          strokeLinecap="round"
          strokeWidth="8"
        >
          <animate
            className="bathtub-smil"
            attributeName="d"
            calcMode="spline"
            dur="7.5s"
            keySplines="0.65 0 0.35 1;0.22 1 0.36 1;0.65 0 0.35 1"
            keyTimes="0;0.48;0.78;1"
            repeatCount="indefinite"
            values={`${highCurve};${lowCurve};${lowCurve};${highCurve}`}
          />
          <animate
            className="bathtub-smil"
            attributeName="stroke"
            dur="7.5s"
            keyTimes="0;0.48;0.78;1"
            repeatCount="indefinite"
            values="#ef4444;#0891b2;#0891b2;#ef4444"
          />
        </path>

        <g className="text-[12px] font-semibold">
          <g transform="translate(650 96)">
            <rect width="134" height="68" rx="12" fill="#e2e8f0" stroke="#94a3b8" />
            {text.improvementLines.map((line, index) => (
              <text
                key={line}
                x="67"
                y={index === 0 ? 26 : 46}
                textAnchor="middle"
                fill="#0f172a"
              >
                {line}
              </text>
            ))}
          </g>
          <g transform="translate(650 182)">
            <rect width="134" height="60" rx="12" fill="#ffffff" stroke="#94a3b8" />
            {text.qualitativeLines.map((line, index) => (
              <text
                key={line}
                x="67"
                y={index === 0 ? 24 : 42}
                textAnchor="middle"
                fill="#0f172a"
              >
                {line}
              </text>
            ))}
          </g>
        </g>

        <g className="text-[12px] font-semibold">
          <text x="118" y="456" fill="#ef4444">
            {text.before}
          </text>
          <rect x="218" y="446" width="38" height="5" rx="2.5" fill="#ef4444" opacity="0.55" />
          <text x="296" y="456" fill="#0891b2">
            {text.after}
          </text>
          <rect x="458" y="446" width="38" height="5" rx="2.5" fill="#0891b2" />
        </g>
      </svg>
    </figure>
  );
}
