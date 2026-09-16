export const CONSENT_CHANGE_EVENT = "reltest:consent-change";
export const CONSENT_SETTINGS_EVENT = "reltest:consent-settings";

const CONSENT_STORAGE_KEY = "reltest_consent";
const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 180;
// Some browsers block storage entirely. Keep the explicit choice for this tab
// in that case, without granting consent by default or persisting it elsewhere.
let volatileChoice: ConsentChoice | null = null;

export type ConsentChoice = {
  externalMedia: boolean;
  necessary: true;
  updatedAt: string;
  version: typeof CONSENT_VERSION;
};

export function readConsentChoice(): ConsentChoice | null {
  if (typeof window === "undefined") {
    return null;
  }
  if (volatileChoice) return volatileChoice;

  try {
    const storedValue = window.localStorage.getItem(CONSENT_STORAGE_KEY);

    if (!storedValue) {
      return null;
    }

    const parsed = JSON.parse(storedValue) as Partial<ConsentChoice>;
    const updatedAt =
      typeof parsed.updatedAt === "string"
        ? Date.parse(parsed.updatedAt)
        : Number.NaN;

    if (
      parsed.version !== CONSENT_VERSION ||
      parsed.necessary !== true ||
      typeof parsed.externalMedia !== "boolean" ||
      !Number.isFinite(updatedAt) ||
      updatedAt > Date.now() ||
      Date.now() - updatedAt > CONSENT_MAX_AGE_MS
    ) {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }

    return parsed as ConsentChoice;
  } catch {
    return volatileChoice;
  }
}

export function saveConsentChoice(externalMedia: boolean) {
  const choice: ConsentChoice = {
    externalMedia,
    necessary: true,
    updatedAt: new Date().toISOString(),
    version: CONSENT_VERSION,
  };

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(choice));
    volatileChoice = null;
  } catch {
    volatileChoice = choice;
  }

  window.dispatchEvent(
    new CustomEvent<ConsentChoice>(CONSENT_CHANGE_EVENT, { detail: choice }),
  );

  return choice;
}

export function requestConsentSettings() {
  window.dispatchEvent(new Event(CONSENT_SETTINGS_EVENT));
}

export function getConsentExternalMediaSnapshot() {
  return readConsentChoice()?.externalMedia ?? null;
}

export function getConsentServerSnapshot() {
  return null;
}

export function subscribeToConsentChoice(onStoreChange: () => void) {
  function handleStorage(event: StorageEvent) {
    if (event.key === CONSENT_STORAGE_KEY || event.key === null) {
      volatileChoice = null;
      onStoreChange();
    }
  }

  window.addEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", handleStorage);
  };
}
