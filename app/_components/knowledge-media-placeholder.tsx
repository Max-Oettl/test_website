import { AiAwareImage as Image } from "./ai-aware-image";

import type { KnowledgeMedia } from "../_content/knowledge-content";

type Props = {
  media: KnowledgeMedia;
  dark?: boolean;
  className?: string;
  frameClassName?: string;
  preload?: boolean;
  locale?: "de" | "en";
};

export function KnowledgeMediaPlaceholder({
  media,
  dark = false,
  className = "",
  frameClassName = "",
  preload = false,
  locale = "de",
}: Props) {
  const aspectRatio =
    media.ratio === "wide"
      ? "aspect-[16/7]"
      : media.ratio === "two-one"
        ? "aspect-[2/1]"
        : media.ratio === "sixteen-nine"
          ? "aspect-video"
          : "aspect-[4/3]";
  const widthClass =
    media.maxWidth === "tiny"
      ? "mx-auto w-full max-w-lg"
      : media.maxWidth === "small"
        ? "mx-auto w-full max-w-2xl"
        : media.maxWidth === "compact"
          ? "mx-auto w-full max-w-4xl"
          : media.maxWidth === "standard"
            ? "mx-auto w-full max-w-5xl"
            : media.maxWidth === "wide"
              ? "mx-auto w-full max-w-6xl"
              : "";
  const figureClassName = `${widthClass} ${className}`.trim();

  if (media.src) {
    return (
      <figure className={figureClassName}>
        <div
          className={`brand-panel-cut-bottom-right relative overflow-hidden border ${aspectRatio} ${
            dark
              ? "border-white/15 bg-white"
              : "border-[var(--solution-marine-20)] bg-[var(--solution-steel-cyan-10)]"
          } ${frameClassName}`}
        >
          <Image
            src={media.src}
            alt={media.alt ?? media.label}
            fill
            sizes={
              media.ratio === "wide" ||
              media.ratio === "sixteen-nine" ||
              media.ratio === "two-one"
                ? "(max-width: 1024px) 100vw, 960px"
                : "(max-width: 1024px) 100vw, 560px"
            }
            className="object-contain"
            preload={preload}
            quality={90}
            disclosureLocale={locale}
          />
        </div>
        {media.caption ? (
          <figcaption
            className={`mt-4 border-l-2 pl-4 text-sm leading-6 ${
              dark
                ? "border-[var(--solution-steel-cyan)] text-white/70"
                : "border-[var(--solution-steel-cyan)] text-[var(--solution-marine-80)]"
            }`}
          >
            {media.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure
      className={`brand-panel-cut-bottom-right relative isolate overflow-hidden border ${
        dark
          ? "border-white/15 bg-white/[0.06] text-white"
          : "border-[var(--solution-marine-20)] bg-[var(--solution-steel-cyan-10)] text-[var(--solution-marine)]"
      } ${aspectRatio} ${figureClassName}`}
      role="img"
      aria-label={media.label}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 opacity-50 ${
          dark
            ? "bg-[linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(20,36,82,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(20,36,82,.07)_1px,transparent_1px)]"
        } bg-[size:42px_42px]`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(46,161,207,.18),transparent_34%)]" />
      <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
        <div className="mb-auto flex h-12 w-12 items-center justify-center border border-current/20 bg-white/70 text-[var(--solution-steel-cyan)]">
          <svg aria-hidden="true" viewBox="0 0 48 48" className="h-7 w-7" fill="none">
            <path d="M8 35 18 24l7 7 6-8 9 12" stroke="currentColor" strokeWidth="2" />
            <path d="M8 10v28h32" stroke="currentColor" strokeWidth="2" />
            <circle cx="31" cy="23" r="2.5" fill="currentColor" />
          </svg>
        </div>
        <figcaption>
          <p className="font-winnstein-display text-lg font-semibold sm:text-xl">{media.label}</p>
          <p className={`mt-2 max-w-2xl text-sm leading-6 ${dark ? "text-white/70" : "text-[var(--solution-marine-80)]"}`}>
            {media.brief}
          </p>
        </figcaption>
      </div>
    </figure>
  );
}
