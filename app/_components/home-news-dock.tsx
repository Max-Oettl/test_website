import Link from "next/link";

import { localizeHref, type Locale } from "../_i18n/config";
import styles from "./home-news-dock.module.css";

type HomeNewsDockProps = {
  locale: Locale;
};

const newsDockCopy = {
  de: {
    label: "Aktuelles",
    title: "Aktuelles bei RelTest",
    description:
      "Fachbeiträge, Webinare und Entwicklungen aus Zuverlässigkeitstechnik, Erprobung und Normung.",
    link: "Alle Beiträge ansehen",
  },
  en: {
    label: "News",
    title: "News from RelTest",
    description:
      "Technical articles, webinars and developments in reliability engineering, testing and standardisation.",
    link: "View all news",
  },
} as const satisfies Record<Locale, object>;

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none">
      <path
        d="m7 4 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

function NewsDock({
  locale,
  defaultOpen = false,
  className,
}: HomeNewsDockProps & { defaultOpen?: boolean; className: string }) {
  const copy = newsDockCopy[locale];

  return (
    <details
      open={defaultOpen}
      className={`group fixed right-0 z-40 ${className}`}
    >
      <summary className={`${styles.trigger} flex h-36 w-[3.25rem] cursor-pointer list-none flex-col items-center justify-between bg-brand-steel-cyan py-4 text-brand-marine shadow-[-10px_12px_26px_rgba(20,36,82,0.14)] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-marine focus-visible:ring-inset [&::-webkit-details-marker]:hidden`}>
        <span className={`${styles.label} font-winnstein-display text-xs font-bold tracking-[0.08em] [writing-mode:vertical-rl] rotate-180`}>
          {copy.label}
        </span>
        <span className={`${styles.chevron} rotate-180 transition-transform duration-200 motion-reduce:transition-none group-open:rotate-0`}>
          <ChevronIcon />
        </span>
      </summary>

      <aside
        aria-label={copy.title}
        className={`${styles.panel} absolute top-0 right-full w-[min(20rem,calc(100vw-4rem))] border border-r-0 border-brand-marine/18 border-t-4 border-t-brand-steel-cyan bg-white p-6 text-brand-marine shadow-[-22px_24px_52px_rgba(20,36,82,0.24)] sm:p-7`}
      >
        <p className="font-winnstein-display text-xl leading-tight font-bold sm:text-2xl">
          {copy.title}
        </p>
        <p className="mt-4 text-sm leading-6 text-brand-marine/70">
          {copy.description}
        </p>
        <Link
          href={localizeHref(locale, "/aktuelles")}
          className="mt-6 inline-flex items-center gap-4 border-b-2 border-brand-steel-cyan pb-2 font-winnstein-display text-sm font-bold text-brand-marine transition-colors hover:text-brand-steel-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan"
        >
          {copy.link}
          <ArrowIcon />
        </Link>
      </aside>
    </details>
  );
}

export function HomeNewsDock({ locale }: HomeNewsDockProps) {
  return (
    <>
      <NewsDock
        locale={locale}
        className={`${styles.mobileDock} top-28 lg:hidden`}
      />
      <NewsDock
        locale={locale}
        defaultOpen
        className="top-40 hidden lg:block"
      />
    </>
  );
}
