import Link from "next/link";

import type { DetailPage } from "../_content/migration-pages";
import { localizeHref, type Locale } from "../_i18n/config";

type IndexCardGridProps = {
  locale: Locale;
  basePath: string;
  items: DetailPage[];
};

export function IndexCardGrid({ locale, basePath, items }: IndexCardGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.slug}
          className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-700">
            {item.eyebrow}
          </p>
          <h2 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
            {item.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {item.description}
          </p>
          <div className="mt-auto pt-8">
            <Link
              href={localizeHref(locale, `${basePath}/${item.slug}`)}
              className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
            >
              {locale === "de" ? "Mehr erfahren" : "Learn more"}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
