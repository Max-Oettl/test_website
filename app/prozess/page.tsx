import Image from "next/image";

import { PageIntro } from "../_components/page-intro";
import { SiteFooter } from "../_components/site-footer";
import { SiteHeader } from "../_components/site-header";
import { processSteps } from "../_content/site-content";

export default function ProzessPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Prozess"
          title="Ein klarer Zuverlässigkeitsprozess schafft Vertrauen und reduziert Fehlentscheidungen"
          description="Der methodische Ablauf macht sichtbar, wie aus einzelnen Analysen, Versuchen und Bewertungen ein belastbarer Gesamtansatz entsteht."
        />
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-4 shadow-2xl shadow-slate-300">
              <Image
                src="/graphics/reliability-process-flow.svg"
                alt="Vierstufige Grafik des Zuverlässigkeitsprozesses"
                width={1400}
              height={360}
              className="h-auto w-full rounded-[1.5rem]"
              sizes="100vw"
            />
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-3xl bg-white p-6 ring-1 ring-slate-200">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-700">
                  Schritt 0{index + 1}
                </p>
                <h2 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-slate-950">
                  {step.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
