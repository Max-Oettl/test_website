import type { ReactNode } from "react";

import { PageIntro } from "./page-intro";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalDocumentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  navigationLabel: string;
  updatedLabel: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalDocumentPage({
  eyebrow,
  title,
  description,
  navigationLabel,
  updatedLabel,
  updated,
  sections,
}: LegalDocumentPageProps) {
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title} description={description} />

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
          <aside className="self-start lg:sticky lg:top-28">
            <p className="font-winnstein-display text-xs font-bold tracking-[0.12em] text-brand-steel-cyan uppercase">
              {navigationLabel}
            </p>
            <nav aria-label={navigationLabel} className="mt-5 border-t border-brand-marine/16">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group grid grid-cols-[2rem_1fr] gap-3 border-b border-brand-marine/16 py-4 text-sm leading-6 text-brand-marine/66 transition-colors hover:text-brand-marine"
                >
                  <span className="font-winnstein-display text-xs font-bold text-brand-steel-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{section.title}</span>
                </a>
              ))}
            </nav>
            <p className="mt-7 text-xs leading-5 text-brand-marine/52">
              {updatedLabel}: {updated}
            </p>
          </aside>

          <div className="min-w-0 border-t border-brand-marine/16">
            {sections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-32 border-b border-brand-marine/16 py-9 first:pt-0 sm:py-11"
              >
                <div className="grid gap-5 sm:grid-cols-[3.25rem_minmax(0,1fr)] sm:gap-7">
                  <span className="pt-1 font-winnstein-display text-sm font-bold text-brand-steel-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-winnstein-display text-2xl leading-tight font-bold tracking-[-0.025em] text-brand-marine sm:text-3xl">
                      {section.title}
                    </h2>
                    <div className="legal-copy mt-5 space-y-5 text-base leading-7 text-brand-marine/74 sm:text-[1.05rem] sm:leading-8">
                      {section.content}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
