"use client";

import { useState } from "react";

import type { Locale } from "../_i18n/config";

type ReliabilityImpactCockpitProps = {
  locale: Locale;
};

const copy = {
  de: {
    title: "Reliability Impact Cockpit",
    subtitle:
      "Ein vereinfachtes Beispielmodell zeigt, wie methodische Absicherung Ausfälle reduziert und Verfügbarkeit stabilisiert.",
    sliderLabel: "Betriebszeit im Beispielmodell",
    hours: "Betriebszeit",
    standard: "Standardvorgehen",
    engineered: "Systematisch abgesichert",
    reliability: "Zuverlässigkeit R(t)",
    failures: "Ausfälle je 1.000 Systeme",
    availability: "Verfügbarkeit",
    outcome: "Weniger Ausfälle. Höhere Uptime. Belastbarere Entscheidungen.",
    note:
      "Vereinfachtes Beispielmodell zur Veranschaulichung, keine projektspezifische Berechnung.",
    xAxis: "Zeit",
    yAxis: "R(t)",
  },
  en: {
    title: "Reliability Impact Cockpit",
    subtitle:
      "A simplified example model shows how methodological validation reduces failures and stabilises availability.",
    sliderLabel: "Operating time in the example model",
    hours: "Operating time",
    standard: "Standard approach",
    engineered: "Systematically validated",
    reliability: "Reliability R(t)",
    failures: "Failures per 1,000 systems",
    availability: "Availability",
    outcome: "Fewer failures. Higher uptime. More robust decisions.",
    note:
      "Simplified example model for illustration, not a project-specific calculation.",
    xAxis: "Time",
    yAxis: "R(t)",
  },
} as const;

const minHours = 500;
const maxHours = 10000;
const stepHours = 250;
const chart = {
  width: 520,
  height: 260,
  left: 48,
  right: 28,
  top: 34,
  bottom: 44,
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function reliabilityAt(hours: number, scale: number, shape: number) {
  return Math.exp(-Math.pow(hours / scale, shape));
}

function xForHours(hours: number) {
  const plotWidth = chart.width - chart.left - chart.right;
  return chart.left + (hours / maxHours) * plotWidth;
}

function yForReliability(reliability: number) {
  const plotHeight = chart.height - chart.top - chart.bottom;
  return chart.top + (1 - reliability) * plotHeight;
}

function buildPath(scale: number, shape: number) {
  const segments = Array.from({ length: 72 }, (_, index) => {
    const hours = (index / 71) * maxHours;
    const x = xForHours(hours);
    const y = yForReliability(reliabilityAt(hours, scale, shape));

    return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
  });

  return segments.join(" ");
}

const standardPath = buildPath(27000, 1.8);
const engineeredPath = buildPath(42000, 1.95);

function formatHours(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "de" ? "de-DE" : "en-US").format(
    value,
  );
}

function formatPercent(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "de" ? "de-DE" : "en-US", {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
    style: "percent",
  }).format(value);
}

export function ReliabilityImpactCockpit({
  locale,
}: ReliabilityImpactCockpitProps) {
  const [hours, setHours] = useState(6000);
  const text = copy[locale];
  const standardReliability = reliabilityAt(hours, 27000, 1.8);
  const engineeredReliability = reliabilityAt(hours, 42000, 1.95);
  const standardFailures = Math.round((1 - standardReliability) * 1000);
  const engineeredFailures = Math.round((1 - engineeredReliability) * 1000);
  const standardAvailability = clamp(
    0.9975 - (1 - standardReliability) * 0.052,
    0.965,
    0.999,
  );
  const engineeredAvailability = clamp(
    0.9988 - (1 - engineeredReliability) * 0.031,
    0.975,
    0.999,
  );
  const markerX = xForHours(hours);
  const standardY = yForReliability(standardReliability);
  const engineeredY = yForReliability(engineeredReliability);
  const sliderProgress =
    ((hours - minHours) / (maxHours - minHours)) * 100;

  return (
    <div className="impact-cockpit-panel w-full overflow-hidden rounded-[2.3rem] border border-slate-200/80 bg-white/[0.88] p-4 shadow-[0_38px_90px_-44px_rgba(15,23,42,0.38)] ring-1 ring-white/90 backdrop-blur sm:p-5">
      <div className="relative overflow-hidden rounded-[1.8rem] bg-[#f5f9fb]">
        <div className="hero-editorial-grid absolute inset-0 opacity-90" />
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute -bottom-28 left-12 h-56 w-56 rounded-full bg-slate-300/30 blur-3xl" />

        <div className="relative z-10 p-5 sm:p-7">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-cyan-800">
                {text.title}
              </p>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
                {text.subtitle}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-right shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                {text.hours}
              </p>
              <p className="mt-1 text-2xl font-semibold tracking-[-0.05em] text-slate-950">
                {formatHours(hours, locale)} h
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[1.45rem] border border-slate-200 bg-white/[0.82] p-4 shadow-sm">
            <svg
              viewBox={`0 0 ${chart.width} ${chart.height}`}
              className="h-auto w-full"
              role="img"
              aria-label={`${text.reliability}: ${text.standard} ${formatPercent(
                standardReliability,
                locale,
              )}, ${text.engineered} ${formatPercent(
                engineeredReliability,
                locale,
              )}`}
            >
              <defs>
                <linearGradient
                  id="standard-line"
                  x1="0"
                  x2="1"
                  y1="0"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#475569" />
                </linearGradient>
                <linearGradient
                  id="engineered-line"
                  x1="0"
                  x2="1"
                  y1="0"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#0369a1" />
                </linearGradient>
              </defs>

              <rect
                x={chart.left}
                y={chart.top}
                width={chart.width - chart.left - chart.right}
                height={chart.height - chart.top - chart.bottom}
                rx="18"
                fill="#f8fafc"
              />
              {[0.7, 0.8, 0.9, 1].map((tick) => (
                <g key={tick}>
                  <line
                    x1={chart.left}
                    x2={chart.width - chart.right}
                    y1={yForReliability(tick)}
                    y2={yForReliability(tick)}
                    stroke="#dbe6ed"
                    strokeDasharray="4 7"
                  />
                  <text
                    x={chart.left - 12}
                    y={yForReliability(tick) + 4}
                    textAnchor="end"
                    className="fill-slate-400 text-[10px] font-bold"
                  >
                    {(tick * 100).toFixed(0)} %
                  </text>
                </g>
              ))}
              {[2500, 5000, 7500, 10000].map((tick) => (
                <g key={tick}>
                  <line
                    x1={xForHours(tick)}
                    x2={xForHours(tick)}
                    y1={chart.top}
                    y2={chart.height - chart.bottom}
                    stroke="#e2e8f0"
                  />
                  <text
                    x={xForHours(tick)}
                    y={chart.height - 18}
                    textAnchor="middle"
                    className="fill-slate-400 text-[10px] font-bold"
                  >
                    {tick / 1000}k
                  </text>
                </g>
              ))}

              <path
                d={standardPath}
                className="impact-cockpit-path"
                pathLength={1}
                fill="none"
                stroke="url(#standard-line)"
                strokeLinecap="round"
                strokeWidth="4"
              />
              <path
                d={engineeredPath}
                className="impact-cockpit-path impact-cockpit-path-accent"
                pathLength={1}
                fill="none"
                stroke="url(#engineered-line)"
                strokeLinecap="round"
                strokeWidth="5"
              />

              <line
                x1={markerX}
                x2={markerX}
                y1={chart.top - 4}
                y2={chart.height - chart.bottom + 6}
                stroke="#0f172a"
                strokeDasharray="3 8"
                strokeLinecap="round"
                opacity="0.55"
              />
              <circle
                cx={markerX}
                cy={standardY}
                r="6"
                fill="#fff"
                stroke="#475569"
                strokeWidth="3"
              />
              <circle
                className="impact-cockpit-pulse"
                cx={markerX}
                cy={engineeredY}
                r="8"
                fill="#0891b2"
                opacity="0.16"
              />
              <circle
                cx={markerX}
                cy={engineeredY}
                r="6"
                fill="#0891b2"
                stroke="#fff"
                strokeWidth="3"
              />

              <text
                x={chart.left}
                y="20"
                className="fill-slate-500 text-[11px] font-bold"
              >
                {text.yAxis}
              </text>
              <text
                x={chart.width - chart.right}
                y={chart.height - 18}
                textAnchor="end"
                className="fill-slate-500 text-[11px] font-bold"
              >
                {text.xAxis}
              </text>
            </svg>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-600">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-6 rounded-full bg-slate-500" />
                {text.standard}
              </span>
              <span className="inline-flex items-center gap-2 text-cyan-900">
                <span className="h-2 w-6 rounded-full bg-cyan-600" />
                {text.engineered}
              </span>
            </div>
          </div>

          <label className="mt-6 block" htmlFor="reliability-hours">
            <span className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              <span>{text.sliderLabel}</span>
              <span>{formatHours(hours, locale)} h</span>
            </span>
            <input
              id="reliability-hours"
              className="impact-slider mt-4 w-full"
              min={minHours}
              max={maxHours}
              step={stepHours}
              type="range"
              value={hours}
              style={{
                background: `linear-gradient(90deg, #0891b2 0%, #0891b2 ${sliderProgress}%, #dbe6ed ${sliderProgress}%, #dbe6ed 100%)`,
              }}
              onChange={(event) => setHours(Number(event.target.value))}
            />
          </label>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <MetricCard
              label={text.reliability}
              standard={formatPercent(standardReliability, locale)}
              engineered={formatPercent(engineeredReliability, locale)}
            />
            <MetricCard
              label={text.failures}
              standard={standardFailures.toString()}
              engineered={engineeredFailures.toString()}
              invert
            />
            <MetricCard
              label={text.availability}
              standard={formatPercent(standardAvailability, locale)}
              engineered={formatPercent(engineeredAvailability, locale)}
            />
          </div>

          <div className="mt-5 rounded-2xl border border-cyan-200/70 bg-cyan-50/80 px-4 py-3">
            <p className="text-sm font-semibold leading-6 text-cyan-950">
              {text.outcome}
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500">{text.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

type MetricCardProps = {
  label: string;
  standard: string;
  engineered: string;
  invert?: boolean;
};

function MetricCard({ label, standard, engineered, invert }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-sm">
      <p className="min-h-9 text-[10px] font-bold uppercase leading-4 tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <div className="mt-3 grid gap-2">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-xs font-semibold text-slate-500">
            Standard
          </span>
          <span className="text-lg font-semibold tracking-[-0.04em] text-slate-700">
            {standard}
          </span>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-xs font-semibold text-cyan-800">
            RelTest
          </span>
          <span
            className={`text-lg font-semibold tracking-[-0.04em] ${
              invert ? "text-emerald-700" : "text-cyan-800"
            }`}
          >
            {engineered}
          </span>
        </div>
      </div>
    </div>
  );
}
