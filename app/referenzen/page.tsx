import Image from "next/image";

import { PageIntro } from "../_components/page-intro";
import { SiteFooter } from "../_components/site-footer";
import { SiteHeader } from "../_components/site-header";
import { referenceLogos } from "../_content/site-content";

export default function ReferenzenPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Referenzen"
          title="Ein Auszug der Unternehmen, für die RelTest bereits gearbeitet hat"
          description="Die Referenzen werden hier mit den Logos der aktuellen Website gezeigt. So entsteht direkt ein belastbares Signal für Branchennähe, Vertrauen und technische Anschlussfähigkeit."
        />
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {referenceLogos.map((reference) => (
              <div
                key={reference.name}
                className="flex min-h-40 items-center justify-center rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Image
                  src={reference.src}
                  alt={reference.name}
                  width={220}
                  height={110}
                  className="h-auto max-h-16 w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
