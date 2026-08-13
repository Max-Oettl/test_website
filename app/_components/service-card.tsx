import Link from "next/link";

import { AiAwareImage as Image } from "./ai-aware-image";

type ServiceCardProps = {
  title: string;
  description: string;
  highlight: string;
  href: string;
  icon: string;
  meta: string;
  image?: {
    src: string;
    alt: string;
    label: string;
  };
  topics?: readonly string[];
  ctaLabel: string;
  variant?: "default" | "home";
};

export function ServiceCard({
  title,
  description,
  highlight,
  href,
  icon,
  meta,
  image,
  topics,
  ctaLabel,
  variant = "default",
}: ServiceCardProps) {
  const isHomeVariant = variant === "home";
  const isEducationLogo = icon.includes("reltest-education-horizontal");

  if (image) {
    return (
      <article className="service-card group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-950/10">
        <div className="service-card-media relative h-44 overflow-hidden bg-slate-100">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/8 to-transparent" />
          {!isHomeVariant ? (
            <span className="service-card-label absolute bottom-4 left-4 rounded-full bg-white/92 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-950 shadow-sm">
              {image.label}
            </span>
          ) : null}
        </div>
        <div className="service-card-body flex flex-1 flex-col p-7">
          <div className={isHomeVariant ? "flex" : "flex items-center gap-4"}>
            <div
              className={`service-card-icon flex h-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200 ${
                isEducationLogo ? "w-28 px-2" : "w-14"
              }`}
            >
              <Image
                src={icon}
                alt={isEducationLogo ? "RelTest Education" : ""}
                width={isEducationLogo ? 466 : 44}
                height={isEducationLogo ? 226 : 44}
                className={
                  isEducationLogo
                    ? "h-12 w-full object-contain"
                    : "h-10 w-10"
                }
              />
            </div>
            {!isHomeVariant ? (
              <p className="service-card-meta text-xs font-bold uppercase tracking-[0.24em] text-cyan-700">
                {meta}
              </p>
            ) : null}
          </div>
          <h3 className="service-card-title mt-7 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
            {title}
          </h3>
          {!isHomeVariant ? (
            <p className="service-card-highlight mt-4 text-sm font-semibold text-slate-500">
              {highlight}
            </p>
          ) : null}
          <p className="service-card-description mt-5 text-base leading-8 text-slate-600">
            {description}
          </p>
          {topics && !isHomeVariant ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="service-card-topic rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                >
                  {topic}
                </span>
              ))}
            </div>
          ) : null}
          <div className="mt-auto pt-8">
            <Link
              href={href}
              className="service-card-cta inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="service-card group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-950/10">
      <div className="service-card-rule absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-slate-900" />
      <div
        className={`service-card-icon mb-6 flex h-16 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200 ${
          isEducationLogo ? "w-32 px-2" : "w-16"
        }`}
      >
        <Image
          src={icon}
          alt={isEducationLogo ? "RelTest Education" : ""}
          width={isEducationLogo ? 466 : 52}
          height={isEducationLogo ? 226 : 52}
          className={
            isEducationLogo ? "h-14 w-full object-contain" : "h-12 w-12"
          }
        />
      </div>
      {!isHomeVariant ? (
        <p className="service-card-meta text-xs font-bold uppercase tracking-[0.24em] text-cyan-700">
          {meta}
        </p>
      ) : null}
      <h3 className="service-card-title mt-8 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
        {title}
      </h3>
      {!isHomeVariant ? (
        <p className="service-card-highlight mt-4 text-sm font-semibold text-slate-500">
          {highlight}
        </p>
      ) : null}
      <p className="service-card-description mt-5 text-base leading-8 text-slate-600">
        {description}
      </p>
      {topics && !isHomeVariant ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="service-card-topic rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
            >
              {topic}
            </span>
          ))}
        </div>
      ) : null}
      <div className="mt-auto pt-8">
        <Link
          href={href}
          className="service-card-cta inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-cyan-800"
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}
