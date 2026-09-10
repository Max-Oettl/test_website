import Link from "next/link";

import type { BerndPublication } from "../_content/bernd-publications";
import type { Locale } from "../_i18n/config";
import { AiAwareImage as Image } from "./ai-aware-image";

type PublicationAccordionProps = {
  defaultOpen?: boolean;
  items: BerndPublication[];
  lead: string;
  locale: Locale;
  title: string;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path
        d="M4 10h11m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PublicationAccordion({
  defaultOpen = false,
  items,
  lead,
  locale,
  title,
}: PublicationAccordionProps) {
  const itemLabel =
    locale === "de"
      ? `${items.length} ausgewählte Veröffentlichungen`
      : `${items.length} selected publications`;

  return (
    <details
      open={defaultOpen}
      className="group border-t border-brand-marine/18 last:border-b"
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-8 marker:hidden sm:items-center sm:gap-8 sm:py-10">
        <span className="min-w-0">
          <span className="font-winnstein-display text-xs font-bold tracking-[0.08em] text-brand-steel-cyan uppercase">
            {itemLabel}
          </span>
          <span className="mt-3 block font-winnstein-display text-2xl leading-tight font-bold tracking-[-0.03em] sm:text-3xl">
            {title}
          </span>
          <span className="mt-4 block max-w-4xl text-base leading-8 text-brand-marine/70">
            {lead}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="brand-action brand-action-outline brand-action-outline-light flex h-12 w-12 shrink-0 origin-center items-center justify-center font-winnstein-display text-2xl leading-none text-brand-steel-cyan transition-transform duration-300 ease-out will-change-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>

      <div className="grid gap-px overflow-hidden border border-brand-marine/16 bg-brand-marine/16 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={`${item.year}-${item.title}`}
            className="flex min-h-full flex-col bg-white p-6 sm:p-7"
          >
            {item.cover ? (
              <div className="mb-6 flex h-52 items-center justify-center bg-brand-steel-cyan-10 p-4">
                <Image
                  src={item.cover}
                  alt={item.coverAlt ?? item.title}
                  width={316}
                  height={479}
                  sizes="(min-width: 1024px) 14rem, (min-width: 768px) 30vw, 60vw"
                  className="h-full w-auto object-contain shadow-[0_18px_32px_-18px_rgba(20,36,82,.55)]"
                />
              </div>
            ) : (
              <div className="relative mb-6 flex h-28 items-center justify-between overflow-hidden bg-brand-marine px-6 text-white">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 72 84"
                  className="h-16 w-14 text-brand-steel-cyan"
                  fill="none"
                >
                  <path d="M11 3h35l15 15v63H11V3Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M46 3v16h15M21 34h30M21 45h30M21 56h22" stroke="currentColor" strokeWidth="2" />
                  <path d="m21 69 7-7 7 4 10-12 7 6" stroke="white" strokeWidth="2" />
                </svg>
                <span className="font-winnstein-display text-2xl font-bold">
                  {item.year}
                </span>
                <span className="absolute right-0 bottom-0 h-1 w-24 bg-brand-steel-cyan" />
              </div>
            )}
            <p className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
              {item.year}
            </p>
            {item.credit ? (
              <p className="mt-4 border-l-2 border-brand-steel-cyan pl-3 font-winnstein-display text-sm leading-6 font-bold">
                {item.credit}
              </p>
            ) : null}
            <h4 className="mt-3 font-winnstein-display text-xl leading-7 font-bold tracking-[-0.02em]">
              {item.title}
            </h4>
            <p className="mt-4 text-sm leading-7 text-brand-marine/70">
              {item.context}
            </p>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-3 pt-7 font-winnstein-display text-sm font-bold transition-colors hover:text-brand-steel-cyan"
            >
              <span className="border-b border-brand-steel-cyan pb-1">
                {item.linkLabel}
              </span>
              <ArrowIcon />
            </Link>
          </article>
        ))}
      </div>
    </details>
  );
}
