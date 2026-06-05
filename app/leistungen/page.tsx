import { PageIntro } from "../_components/page-intro";
import { SectionHeading } from "../_components/section-heading";
import { ServiceCard } from "../_components/service-card";
import { SiteFooter } from "../_components/site-footer";
import { SiteHeader } from "../_components/site-header";
import { methodHighlights, serviceOverview } from "../_content/site-content";

export default function LeistungenPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Leistungen"
          title="Ein Leistungsportfolio für anspruchsvolle technische Produkte"
          description="RelTest Solutions verbindet Beratung, methodische Absicherung, Weiterbildung und langfristige operative Unterstützung zu einem Angebot, das sich an realen Entwicklungs- und Qualitätsherausforderungen orientiert."
        />
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Überblick"
            title="Vier Angebotsfelder mit klarer Rolle im Projekt"
            description="Jedes Leistungsfeld adressiert einen anderen Bedarf: Orientierung schaffen, Teams befähigen, Know-how skalieren oder Verantwortung dauerhaft übernehmen."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {methodHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-900"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceOverview.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
