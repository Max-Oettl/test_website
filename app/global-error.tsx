"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { ErrorScreen } from "./_components/error-screen";
import "./globals.css";

export default function GlobalError({ error, retry }: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] === "en" ? "en" : "de";
  useEffect(() => { console.error("Root rendering failed", error.digest ?? "client error"); }, [error]);
  return (
    <html lang={locale}>
      <head>
        <title>{locale === "de" ? "Technischer Fehler | RelTest" : "Technical error | RelTest"}</title>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body data-site-design="winnstein">
        <main><ErrorScreen locale={locale} kind="error" retry={retry} /></main>
      </body>
    </html>
  );
}
