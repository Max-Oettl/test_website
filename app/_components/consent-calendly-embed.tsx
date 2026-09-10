"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

import { localizeHref, type Locale } from "../_i18n/config";
import {
  getConsentExternalMediaSnapshot,
  getConsentServerSnapshot,
  requestConsentSettings,
  saveConsentChoice,
  subscribeToConsentChoice,
} from "./consent-state";

type ConsentCalendlyEmbedProps = {
  locale: Locale;
  src: string;
  title: string;
};

const embedCopy = {
  de: {
    eyebrow: "Externer Inhalt",
    title: "Calendly ist noch deaktiviert.",
    description:
      "Die Terminbuchung wird erst nach Ihrer Zustimmung geladen. Beim Aktivieren wird eine Verbindung zu Calendly hergestellt; dabei können Daten in die USA übertragen und Cookies oder ähnliche Technologien eingesetzt werden.",
    activate: "Calendly aktivieren",
    settings: "Einstellungen öffnen",
    privacy: "Mehr zum Datenschutz",
  },
  en: {
    eyebrow: "External content",
    title: "Calendly is currently disabled.",
    description:
      "The scheduling tool loads only after you consent. Activating it establishes a connection to Calendly; data may be transferred to the United States and cookies or similar technologies may be used.",
    activate: "Activate Calendly",
    settings: "Open settings",
    privacy: "More about privacy",
  },
} as const;

export function ConsentCalendlyEmbed({
  locale,
  src,
  title,
}: ConsentCalendlyEmbedProps) {
  const copy = embedCopy[locale];
  const isAllowed =
    useSyncExternalStore(
      subscribeToConsentChoice,
      getConsentExternalMediaSnapshot,
      getConsentServerSnapshot,
    ) ?? false;

  if (isAllowed) {
    return (
      <iframe
        title={title}
        src={src}
        loading="lazy"
        className="h-[760px] w-full border-0 sm:h-[800px]"
      />
    );
  }

  return (
    <div className="flex min-h-[32rem] items-center justify-center bg-[linear-gradient(135deg,rgba(46,161,207,0.1),rgba(255,255,255,0.96)_58%)] px-6 py-12 sm:min-h-[36rem] sm:px-10">
      <div className="max-w-xl border-l-4 border-brand-steel-cyan bg-white p-7 sm:p-9">
        <p className="font-winnstein-display text-xs font-bold uppercase tracking-[0.14em] text-brand-steel-cyan">
          {copy.eyebrow}
        </p>
        <h3 className="mt-3 font-winnstein-display text-2xl leading-tight font-bold sm:text-3xl">
          {copy.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-brand-marine/72 sm:text-base">
          {copy.description}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="brand-action inline-flex min-h-12 items-center justify-center bg-brand-marine px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-brand-steel-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan"
            onClick={() => saveConsentChoice(true)}
          >
            {copy.activate}
          </button>
          <button
            type="button"
            className="inline-flex min-h-12 items-center justify-center border border-brand-marine/25 px-6 py-3 font-winnstein-display text-sm font-bold transition-colors hover:bg-brand-steel-cyan-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan"
            onClick={requestConsentSettings}
          >
            {copy.settings}
          </button>
        </div>
        <Link
          href={localizeHref(locale, "/datenschutz#calendly")}
          className="mt-5 inline-flex border-b border-brand-steel-cyan pb-0.5 text-sm font-semibold"
        >
          {copy.privacy}
        </Link>
      </div>
    </div>
  );
}
