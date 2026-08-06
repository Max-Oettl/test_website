type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-marine text-white">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="font-winnstein-display text-sm font-semibold text-brand-steel-cyan">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-winnstein-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl font-winnstein-body text-lg leading-[1.55] text-white/76">
          {description}
        </p>
      </div>
      <div className="h-2 bg-brand-steel-cyan" />
    </section>
  );
}
