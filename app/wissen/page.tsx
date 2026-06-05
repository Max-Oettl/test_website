import Link from "next/link";

import { PageIntro } from "../_components/page-intro";
import { SiteFooter } from "../_components/site-footer";
import { SiteHeader } from "../_components/site-header";

const knowledgeTopics = [
  {
    title: "Zuverlässigkeit verstehen",
    description:
      "Warum Zuverlässigkeit nicht erst im Feld beginnt, sondern früh in Entwicklung, Absicherung und Entscheidungslogik angelegt wird.",
  },
  {
    title: "DoE gezielt einsetzen",
    description:
      "Wie strukturierte Versuchsplanung Entwicklungszeiten verkürzt, Zusammenhänge sichtbar macht und Aussagen belastbarer werden lässt.",
  },
  {
    title: "Risikomanagement greifbar machen",
    description:
      "Wie Risiken systematisch bewertet, priorisiert und in wirtschaftlich sinnvolle Maßnahmen überführt werden können.",
  },
];

export default function WissenPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <SiteHeader />
      <main>
        <PageIntro
          eyebrow="Wissen"
          title="Fachwissen, das die Bedeutung von Zuverlässigkeit verständlich macht"
          description="Dieser Bereich wird als Wissensreiter für ausgewählte Inhalte rund um Zuverlässigkeitstechnik, DoE und Risikomanagement aufgebaut. Ziel ist es, technische Zusammenhänge anschaulich zu erklären und die Relevanz für reale Entwicklungsprojekte sichtbar zu machen."
        />

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {knowledgeTopics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="h-1.5 w-16 rounded-full bg-cyan-500" />
                <h2 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  {topic.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{topic.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fbfd_0%,#eef4f7_100%)] p-8 shadow-sm sm:p-10 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700">
                In Vorbereitung
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                Hier entstehen später Fachbeiträge, erklärende Grafiken und visuelle
                Einordnungen für potenzielle Kunden.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
                Der Bereich ist bewusst bereits strukturell angelegt, damit zukünftig
                suchmaschinenrelevante Inhalte, Diagramme und thematische Landingpages
                ergänzt werden können, die sowohl über Google gefunden werden als auch
                qualifizierte Besucher auf RelTest Solutions führen.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
                >
                  Thema mit uns besprechen
                </Link>
                <Link
                  href="/leistungen"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-900 transition-colors hover:border-cyan-300 hover:text-cyan-800"
                >
                  Zu den Leistungen
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
