import { PageIntro } from "../_components/page-intro";
import { SiteFooter } from "../_components/site-footer";
import { SiteHeader } from "../_components/site-header";

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Kontakt"
          title="Der schnellste Weg zum passenden Zuverlässigkeitsansatz"
          description="Ob Projektanfrage, Weiterbildungsbedarf oder fachliche Rückfrage: RelTest Solutions berät Sie unverbindlich und zielgerichtet."
        />
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                Direktkontakt
              </h2>
              <div className="mt-6 space-y-4 text-base text-slate-600">
                <p>RelTest Solutions GmbH</p>
                <p>Steglen 26, 71083 Herrenberg</p>
                <a className="block font-semibold text-slate-950 hover:text-cyan-800" href="mailto:info@reltest-solutions.com">
                  info@reltest-solutions.com
                </a>
                <a className="block font-semibold text-slate-950 hover:text-cyan-800" href="tel:+4971125253531">
                  +49 711 25253531
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300">
              <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                Typische Anlässe für ein Erstgespräch
              </h2>
              <div className="mt-6 grid gap-3">
                {[
                  "Zuverlässigkeitsziele für neue Produkte festlegen",
                  "Versuchsplanung oder DoE absichern",
                  "Teams durch Schulungen oder Academy weiterentwickeln",
                  "Langfristige Unterstützung im Projekt aufsetzen",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                    <p className="text-sm text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
