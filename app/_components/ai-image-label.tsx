"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

type AiImageLabelProps = {
  className?: string;
  kind?: "generated" | "modified";
  locale?: "de" | "en";
  size?: "sm" | "md";
};

export function AiImageLabel({
  className = "",
  kind = "generated",
  locale,
  size = "md",
}: AiImageLabelProps) {
  const pathname = usePathname();
  const activeLocale = locale ?? (pathname.startsWith("/en") ? "en" : "de");
  const label =
    activeLocale === "de"
      ? kind === "generated"
        ? "KI-generiertes Bild"
        : "KI-bearbeitetes Bild"
      : kind === "generated"
        ? "AI-generated image"
        : "AI-modified image";
  const dimensions = size === "sm" ? "size-8" : "size-10";
  const src =
    kind === "generated"
      ? "/labels/ai-generated-transparent.svg"
      : "/labels/ai-modified-transparent.svg";

  return (
    <span
      className={`group/ai-label absolute z-30 inline-flex ${dimensions} items-center justify-center opacity-60 transition-opacity duration-200 hover:opacity-90 focus:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-offset-2 ${className}`}
      role="img"
      aria-label={label}
      tabIndex={0}
    >
      <Image
        src={src}
        alt=""
        fill
        aria-hidden="true"
        className="object-contain"
        sizes={size === "sm" ? "32px" : "40px"}
      />
      <span className="pointer-events-none absolute right-0 bottom-[calc(100%+0.45rem)] w-max max-w-44 bg-brand-marine px-2.5 py-1.5 text-[0.65rem] leading-tight font-semibold text-white opacity-0 shadow-sm transition-opacity group-hover/ai-label:opacity-100 group-focus/ai-label:opacity-100">
        {label}
      </span>
    </span>
  );
}
