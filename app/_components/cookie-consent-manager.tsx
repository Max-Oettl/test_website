"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { localizeHref, type Locale } from "../_i18n/config";
import {
  CONSENT_SETTINGS_EVENT,
  getConsentExternalMediaSnapshot,
  getConsentServerSnapshot,
  readConsentChoice,
  saveConsentChoice,
  subscribeToConsentChoice,
} from "./consent-state";

type CookieConsentManagerProps = {
  locale: Locale;
};

const consentCopy = {
  de: {
    eyebrow: "Datenschutz",
    title: "Ihre Privatsphäre-Einstellungen",
    description:
      "Wir verwenden technisch notwendige Speicherungen für Ihre Spracheinstellung und Ihre Datenschutz-Auswahl. Mit Ihrer Zustimmung laden wir Calendly zur Terminbuchung. Dabei können Daten an Calendly in den USA übertragen und Cookies oder ähnliche Technologien eingesetzt werden.",
    necessaryOnly: "Nur notwendige",
    acceptAll: "Alle akzeptieren",
    settings: "Einstellungen",
    save: "Auswahl speichern",
    back: "Zurück",
    necessaryTitle: "Technisch notwendig",
    necessaryDescription:
      "Speichert die Spracheinstellung und Ihre Datenschutz-Auswahl. Diese Funktionen können nicht deaktiviert werden.",
    externalTitle: "Externe Medien: Calendly",
    externalDescription:
      "Lädt die eingebettete Terminbuchung erst nach Ihrer Zustimmung. Dabei wird eine Verbindung zu Calendly hergestellt.",
    alwaysActive: "Immer aktiv",
    privacy: "Datenschutzerklärung",
  },
  en: {
    eyebrow: "Privacy",
    title: "Your privacy settings",
    description:
      "We use technically necessary storage for your language and privacy choices. With your consent, we load Calendly for appointment scheduling. This may transfer data to Calendly in the United States and involve cookies or similar technologies.",
    necessaryOnly: "Necessary only",
    acceptAll: "Accept all",
    settings: "Settings",
    save: "Save selection",
    back: "Back",
    necessaryTitle: "Technically necessary",
    necessaryDescription:
      "Stores the language setting and your privacy choice. These functions cannot be disabled.",
    externalTitle: "External media: Calendly",
    externalDescription:
      "Loads the embedded scheduling service only after your consent. This establishes a connection to Calendly.",
    alwaysActive: "Always active",
    privacy: "Privacy policy",
  },
} as const;

export function CookieConsentManager({ locale }: CookieConsentManagerProps) {
  const copy = consentCopy[locale];
  const headingRef = useRef<HTMLHeadingElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const storedExternalMedia = useSyncExternalStore(
    subscribeToConsentChoice,
    getConsentExternalMediaSnapshot,
    getConsentServerSnapshot,
  );
  const [externalMedia, setExternalMedia] = useState(false);
  const [isManuallyOpen, setIsManuallyOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const isOpen = storedExternalMedia === null || isManuallyOpen;

  useEffect(() => {
    function handleSettingsRequest() {
      previousFocusRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;

      const currentChoice = readConsentChoice();
      setExternalMedia(currentChoice?.externalMedia ?? false);
      setShowSettings(true);
      setIsManuallyOpen(true);
      window.requestAnimationFrame(() => headingRef.current?.focus());
    }

    window.addEventListener(CONSENT_SETTINGS_EVENT, handleSettingsRequest);

    return () => {
      window.removeEventListener(CONSENT_SETTINGS_EVENT, handleSettingsRequest);
    };
  }, []);

  function restorePreviousFocus() {
    window.requestAnimationFrame(() => previousFocusRef.current?.focus());
    previousFocusRef.current = null;
  }

  function commitChoice(allowExternalMedia: boolean) {
    saveConsentChoice(allowExternalMedia);
    setExternalMedia(allowExternalMedia);
    setIsManuallyOpen(false);
    setShowSettings(false);
    restorePreviousFocus();
  }

  if (!isOpen) {
    return null;
  }

  return (
    <aside
      className="fixed inset-x-0 bottom-0 z-[80] max-h-[92dvh] overflow-y-auto border-t-4 border-brand-steel-cyan bg-white text-brand-marine shadow-[0_-24px_70px_rgba(20,36,82,0.22)]"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
    >
      <div className="mx-auto max-w-[100rem] px-5 py-6 sm:px-6 sm:py-7 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
          <div className="max-w-4xl">
            <p className="font-winnstein-display text-xs font-bold uppercase tracking-[0.14em] text-brand-steel-cyan">
              {copy.eyebrow}
            </p>
            <h2
              id="cookie-consent-title"
              ref={headingRef}
              tabIndex={-1}
              className="mt-2 font-winnstein-display text-2xl font-bold outline-none sm:text-3xl"
            >
              {copy.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-marine/76 sm:text-base sm:leading-7">
              {copy.description}
            </p>
            <Link
              href={localizeHref(locale, "/datenschutz")}
              className="mt-3 inline-flex border-b border-brand-steel-cyan pb-0.5 text-sm font-semibold"
            >
              {copy.privacy}
            </Link>
          </div>

          <div className="grid min-w-0 gap-3 sm:grid-cols-3 lg:min-w-[38rem]">
            <button
              type="button"
              className="brand-action brand-action-outline brand-action-outline-light inline-flex min-h-12 items-center justify-center px-5 py-3 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:text-brand-steel-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan"
              onClick={() => commitChoice(false)}
            >
              {copy.necessaryOnly}
            </button>
            <button
              type="button"
              className="brand-action brand-action-outline brand-action-outline-light inline-flex min-h-12 items-center justify-center px-5 py-3 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:text-brand-steel-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan"
              onClick={() => setShowSettings((current) => !current)}
              aria-expanded={showSettings}
              aria-controls="cookie-consent-settings"
            >
              {showSettings ? copy.back : copy.settings}
            </button>
            <button
              type="button"
              className="brand-action inline-flex min-h-12 items-center justify-center bg-brand-marine px-5 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-brand-steel-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan"
              onClick={() => commitChoice(true)}
            >
              {copy.acceptAll}
            </button>
          </div>
        </div>

        {showSettings ? (
          <div
            id="cookie-consent-settings"
            className="mt-6 grid gap-3 border-t border-brand-marine/15 pt-5 md:grid-cols-2"
          >
            <div className="border border-brand-marine/15 bg-brand-steel-cyan-10/45 p-5">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="font-winnstein-body text-base font-semibold">
                    {copy.necessaryTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-brand-marine/70">
                    {copy.necessaryDescription}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-bold text-brand-steel-cyan">
                  {copy.alwaysActive}
                </span>
              </div>
            </div>

            <label className="flex cursor-pointer items-start justify-between gap-5 border border-brand-marine/15 p-5">
              <span>
                <span className="block font-winnstein-body text-base font-semibold">
                  {copy.externalTitle}
                </span>
                <span className="mt-2 block text-sm leading-6 text-brand-marine/70">
                  {copy.externalDescription}
                </span>
              </span>
              <input
                type="checkbox"
                className="mt-1 h-6 w-6 shrink-0 accent-brand-steel-cyan"
                checked={externalMedia}
                onChange={(event) => setExternalMedia(event.target.checked)}
              />
            </label>

            <div className="md:col-span-2 md:flex md:justify-end">
              <button
                type="button"
                className="brand-action inline-flex min-h-12 w-full items-center justify-center bg-brand-marine px-6 py-3 font-winnstein-display text-sm font-bold text-white transition-colors hover:bg-brand-steel-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan md:w-auto"
                onClick={() => commitChoice(externalMedia)}
              >
                {copy.save}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </aside>
  );
}
