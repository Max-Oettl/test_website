import Image from "next/image";

import type { Locale } from "../_i18n/config";
import { localizedPath } from "../_i18n/routes";

export function ErrorScreen({
  locale,
  kind,
  retry,
}: {
  locale: Locale;
  kind: "not-found" | "error";
  retry?: () => void;
}) {
  const de = locale === "de";
  const notFound = kind === "not-found";
  const title = notFound
    ? de ? "Diese Seite wurde nicht gefunden." : "This page could not be found."
    : de ? "Die Seite konnte nicht geladen werden." : "This page could not be loaded.";

  return (
    <div className="error-screen">
      <div className="error-screen-card">
        <a href={`/${locale}`} aria-label={de ? "RelTest Startseite" : "RelTest home"}>
          <Image src="/branding/reltest-horizontal-positive.svg" alt="RelTest" width={184} height={60} unoptimized />
        </a>
        <p className="mt-8 text-sm font-bold">{notFound ? "404" : de ? "Technischer Fehler" : "Technical error"}</p>
        <h1 className="mt-4 text-3xl sm:text-4xl">{title}</h1>
        <p className="mt-5 leading-7">
          {notFound
            ? de ? "Möglicherweise wurde die Adresse geändert oder der Link ist nicht mehr aktuell. Über die Startseite finden Sie unsere Leistungen und Fachinformationen."
              : "The address may have changed or the link may be out of date. Visit our homepage to find our services and technical information."
            : de ? "Bitte versuchen Sie es erneut. Sollte der Fehler bestehen bleiben, erreichen Sie uns direkt per E-Mail."
              : "Please try again. If the problem persists, you can contact us directly by email."}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          {retry ? <button type="button" className="brand-action bg-brand-marine px-6 py-3 font-semibold text-white" onClick={retry}>
            {de ? "Erneut versuchen" : "Try again"}
          </button> : null}
          <a className="border-b-2 border-brand-steel-cyan py-2 font-semibold" href={`/${locale}`}>{de ? "Zur Startseite" : "Go to homepage"}</a>
          <a className="border-b-2 border-brand-steel-cyan py-2 font-semibold" href={notFound ? localizedPath(locale, "/kontakt") : "mailto:info@reltest-solutions.com"}>
            {de ? "Kontakt aufnehmen" : "Contact us"}
          </a>
        </div>
      </div>
    </div>
  );
}
