import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  highlight: string;
  href: string;
  icon: string;
  meta: string;
};

export function ServiceCard({
  title,
  description,
  highlight,
  href,
  icon,
  meta,
}: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-950/10">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-slate-900" />
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200">
        <Image src={icon} alt="" width={52} height={52} className="h-12 w-12" />
      </div>
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-700">{meta}</p>
      <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-slate-950">{title}</h3>
      <p className="mt-4 text-sm font-semibold text-slate-500">{highlight}</p>
      <p className="mt-5 text-base leading-8 text-slate-600">{description}</p>
      <div className="mt-auto pt-8">
        <Link
          href={href}
          className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
        >
          Mehr erfahren
        </Link>
      </div>
    </article>
  );
}
