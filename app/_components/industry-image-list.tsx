import Link from "next/link";

import { AiAwareImage as Image } from "./ai-aware-image";

type IndustryImageListItem = {
  name: string;
  href: string;
  image: string;
};

type IndustryImageListProps = {
  items: readonly IndustryImageListItem[];
  referencesHref: string;
  referencesLabel: string;
  title: string;
};

function IndustryArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 20"
      className="h-5 w-9"
      fill="none"
    >
      <path
        d="M2 10h31"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
      <path
        d="m26 3 7 7-7 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

export function IndustryImageList({
  items,
  referencesHref,
  referencesLabel,
  title,
}: IndustryImageListProps) {
  const columnBreak = Math.ceil(items.length / 2);
  const columns = [items.slice(0, columnBreak), items.slice(columnBreak)];

  return (
    <section className="home-industries-section border-t border-line-soft bg-white">
      <div className="mx-auto max-w-[92rem] px-5 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
        <div className="max-w-4xl">
          <h2 className="text-[clamp(2rem,2.7vw,2.9rem)] leading-[1.04] font-semibold tracking-[-0.055em] text-brand-ink">
            {title}
          </h2>
          <span
            aria-hidden="true"
            className="mt-6 block h-0.5 w-24 bg-brand-cyan"
          />
        </div>

        <div className="mt-14 grid lg:grid-cols-2 lg:gap-x-8">
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={
                columnIndex === 0
                  ? "border-t border-slate-200"
                  : "-mt-px border-t border-slate-200 lg:mt-0"
              }
            >
              {column.map((industry) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  className="group relative isolate flex min-h-28 items-center justify-between gap-7 overflow-hidden border-b border-slate-200 px-5 py-6 transition-colors duration-300 hover:border-cyan-300 focus:outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-inset sm:px-8"
                >
                  <Image
                    src={industry.image}
                    alt=""
                    fill
                    aria-hidden="true"
                    className="-z-20 object-cover object-center opacity-45 saturate-[0.84] transition duration-500 ease-out group-hover:scale-[1.035] group-hover:opacity-60"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.94)_45%,rgba(255,255,255,0.62)_70%,rgba(255,255,255,0.12)_100%)] transition-opacity duration-300 group-hover:opacity-90"
                  />

                  <span className="max-w-[72%] text-lg leading-tight font-semibold tracking-[-0.035em] text-brand-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                    {industry.name}
                  </span>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/95 text-brand-cyan shadow-[0_4px_18px_rgba(15,23,42,0.16)] ring-1 ring-slate-200 transition-[color,background-color,box-shadow,transform] duration-300 group-hover:translate-x-1 group-hover:bg-brand-cyan group-hover:text-white group-hover:shadow-[0_6px_20px_rgba(0,159,214,0.28)] group-hover:ring-brand-cyan motion-reduce:transform-none">
                    <IndustryArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href={referencesHref}
            className="group inline-flex min-h-11 items-center gap-3 border-b-2 border-brand-cyan px-1 text-sm font-bold text-brand-ink transition-colors hover:text-brand-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-4"
          >
            {referencesLabel}
            <span className="text-brand-cyan transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none">
              <IndustryArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
