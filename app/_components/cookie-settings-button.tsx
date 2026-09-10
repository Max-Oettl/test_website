"use client";

import { requestConsentSettings } from "./consent-state";

type CookieSettingsButtonProps = {
  label: string;
};

export function CookieSettingsButton({ label }: CookieSettingsButtonProps) {
  return (
    <button
      type="button"
      className="site-footer-link w-fit text-xs"
      onClick={requestConsentSettings}
    >
      {label}
    </button>
  );
}
