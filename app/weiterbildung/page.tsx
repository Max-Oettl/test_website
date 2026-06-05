import Image from "next/image";
import Link from "next/link";

import { PageIntro } from "../_components/page-intro";
import { SiteFooter } from "../_components/site-footer";
import { SiteHeader } from "../_components/site-header";
import { getEducationBullets } from "../_content/education-copy";
import { educationFormats } from "../_content/site-content";

export default function WeiterbildungPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Weiterbildung"
          title="Weiterbildung, die sich an Ihrem Ziel und nicht an einem Standardformat orientiert"
          description="RelTest bietet Weiterbildung in zwei klar unterschiedlichen Formen: persönliche Inhouse-Schulungen für Teams und die RelTest Academy für flexibles, digitales Lernen."
        />
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {educationFormats.map((format) => (
              <article
                key={format.title}
                className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200"
                  >
                    <Image
                      src={
                        format.title === "RelTest Academy"
                          ? "/academy/reltest-academy-logo.webp"
                          : format.icon
                      }
                      alt={format.title === "RelTest Academy" ? "RelTest Academy" : ""}
                      width={format.title === "RelTest Academy" ? 56 : 56}
                      height={format.title === "RelTest Academy" ? 56 : 56}
                      className={
                        format.title === "RelTest Academy"
                          ? "h-12 w-12 object-contain"
                          : "h-14 w-14"
                      }
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                      {format.title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-slate-600">{format.description}</p>
                  </div>
                </div>
                <div className="mt-8 grid gap-3">
                  {getEducationBullets(format.title, format.bullets).map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-2xl bg-slate-50 px-4 py-4 ring-1 ring-slate-200"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-cyan-100">
                          <span className="h-2 w-2 rounded-full bg-cyan-500" />
                        </span>
                        <p className="text-sm leading-7 font-medium text-slate-700">{bullet}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-8">
                  <Link
                    href={format.ctaHref}
                    target={format.external ? "_blank" : undefined}
                    rel={format.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
                  >
                    {format.ctaLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
