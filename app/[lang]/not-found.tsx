"use client";

import { useParams } from "next/navigation";

import { ErrorScreen } from "../_components/error-screen";

export default function NotFound() {
  const params = useParams();
  const locale = params.lang === "en" ? "en" : "de";
  return <ErrorScreen locale={locale} kind="not-found" />;
}
