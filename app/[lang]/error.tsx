"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

import { ErrorScreen } from "../_components/error-screen";

export default function PageError({ error, retry }: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  const params = useParams();
  useEffect(() => { console.error("Page rendering failed", error.digest ?? "client error"); }, [error]);
  return <ErrorScreen locale={params.lang === "en" ? "en" : "de"} kind="error" retry={retry} />;
}
