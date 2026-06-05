import Image from "next/image";
import Link from "next/link";

import { PageIntro } from "../_components/page-intro";
import { SiteFooter } from "../_components/site-footer";
import { SiteHeader } from "../_components/site-header";
import { bookDetails } from "../_content/site-content";

export default function LiteraturPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Literatur"
          title="Fachliche Autorität, die über Marketingbehauptungen hinausgeht"
          description="Das Springer-Fachbuch von Prof. Dr.-Ing. Bernd Bertsche und Dr.-Ing. Martin Dazer ist ein sichtbarer Beleg für die wissenschaftliche und praktische Tiefe hinter den Leistungen von RelTest."
        />
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div className="flex items-center justify-center">
            <div className="mx-auto max-w-sm">
              <div className="relative">
                <Image
                  src={bookDetails.cover}
                  alt={bookDetails.title}
                  width={900}
                  height={1284}
                  className="h-auto w-full shadow-xl shadow-slate-300/70"
                  sizes="(min-width: 1024px) 28vw, 80vw"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">
              {bookDetails.title}
            </h2>
            <p className="mt-4 text-xl text-slate-600">{bookDetails.subtitle}</p>
            <p className="mt-6 text-base leading-8 text-slate-600">{bookDetails.description}</p>
            <p className="mt-4 text-base leading-8 text-slate-600">Autoren: {bookDetails.authors}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={bookDetails.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
              >
                Buchseite öffnen
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-4 text-sm font-bold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-800"
              >
                Fachfragen stellen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
