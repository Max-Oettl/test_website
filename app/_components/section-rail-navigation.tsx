type SectionRailItem = {
  href: string;
  label: string;
  number: string;
};

type SectionRailNavigationProps = {
  ariaLabel: string;
  items: readonly SectionRailItem[];
  title: string;
};

export function SectionRailNavigation({
  ariaLabel,
  items,
  title,
}: SectionRailNavigationProps) {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-32 border-t border-brand-marine/18 pt-5">
        <p className="font-winnstein-display text-sm font-bold text-brand-steel-cyan">
          {title}
        </p>
        <nav aria-label={ariaLabel} className="mt-4">
          <ol className="space-y-1">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group grid grid-cols-[2rem_minmax(0,1fr)] gap-3 border-t border-brand-marine/12 py-4 text-sm leading-5 text-brand-marine/64 transition-colors hover:text-brand-marine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-offset-2"
                >
                  <span className="font-winnstein-display text-xs font-bold text-brand-steel-cyan">
                    {item.number}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </aside>
  );
}
