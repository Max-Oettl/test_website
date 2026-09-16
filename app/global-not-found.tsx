import type { Metadata } from "next";
import { headers } from "next/headers";

import { ErrorScreen } from "./_components/error-screen";
import "./globals.css";

async function getLocale() {
  return (await headers()).get("x-reltest-locale") === "en" ? "en" : "de";
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === "de" ? "Seite nicht gefunden | RelTest" : "Page not found | RelTest",
    robots: { index: false, follow: false },
  };
}

export default async function GlobalNotFound() {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body data-site-design="winnstein">
        <main><ErrorScreen locale={locale} kind="not-found" /></main>
      </body>
    </html>
  );
}
