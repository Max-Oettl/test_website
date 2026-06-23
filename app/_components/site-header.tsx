import Image from "next/image";
import Link from "next/link";

import { getSiteContent } from "../_content/site-content";
import { localizeHref, type Locale } from "../_i18n/config";
import { LanguageSwitcher } from "./language-switcher";
import { SiteExplorerBand } from "./site-explorer-band";

type SiteHeaderProps = {
  locale: Locale;
};

type NavigationDropdown = {
  overview: string;
  items?: ReadonlyArray<{ label: string; href: string }>;
  groups?: ReadonlyArray<{
    title: string;
    items: ReadonlyArray<{ label: string; href: string }>;
  }>;
  width: "wide" | "default";
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const { navigation } = getSiteContent(locale);
  const dropdowns: Record<string, NavigationDropdown> = {
    "/leistungen": {
      overview: navigation.servicesOverview,
      groups: navigation.serviceGroups,
      width: "wide",
    },
    "/wissen": {
      overview: navigation.knowledgeOverview,
      items: navigation.knowledgeItems,
      width: "default",
    },
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href={localizeHref(locale, "/")}
          className="flex items-center gap-3"
          aria-label={navigation.homeLabel}
        >
          <span className="relative block h-11 w-36 sm:w-44">
            <Image
              src="/reltest-solutions-logo.png"
              alt="RelTest Solutions"
              fill
              priority
              className="object-contain object-left"
              sizes="(min-width: 640px) 176px, 144px"
            />
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.22em] text-cyan-700 2xl:block">
            Reliability & Testing
          </span>
        </Link>

        <nav
          className="hidden items-center gap-5 2xl:gap-6 xl:flex"
          aria-label={navigation.ariaLabel}
        >
          {navigation.items.map((item) => {
            const dropdown = dropdowns[item.href];

            return dropdown ? (
              <div key={item.href} className="group relative">
                <Link
                  href={localizeHref(locale, item.href)}
                  className="block whitespace-nowrap py-2 text-sm font-medium text-slate-700 transition-colors hover:text-cyan-700"
                >
                  {item.label}
                </Link>

                <div
                  className={`pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 ${
                    dropdown.width === "wide" ? "w-96" : "w-72"
                  }`}
                >
                  <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-950/10">
                    <Link
                      href={localizeHref(locale, item.href)}
                      className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:text-cyan-700"
                    >
                      {dropdown.overview}
                    </Link>
                    <div className="my-2 h-px bg-slate-200" />
                    {dropdown.groups ? (
                      <div className="grid gap-3">
                        {dropdown.groups.map((group) => (
                          <div key={group.title}>
                            <p className="px-4 pb-1 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-cyan-700">
                              {group.title}
                            </p>
                            <div className="grid gap-1">
                              {group.items.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.href}
                                  href={localizeHref(locale, dropdownItem.href)}
                                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                                >
                                  {dropdownItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      dropdown.items?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={localizeHref(locale, dropdownItem.href)}
                          className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={localizeHref(locale, item.href)}
                className="whitespace-nowrap text-sm font-medium text-slate-700 transition-colors hover:text-cyan-700"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href={localizeHref(locale, "/kontakt")}
            className="whitespace-nowrap rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-cyan-800"
          >
            {navigation.inquiry}
          </Link>
          <div className="ml-1 border-l border-slate-200 pl-4">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>

        <details className="group relative xl:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 [&::-webkit-details-marker]:hidden">
            {navigation.menu}
          </summary>
          <div className="absolute right-0 mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-950/10">
            <div className="mb-2 px-2">
              <LanguageSwitcher locale={locale} compact />
            </div>
            {navigation.items.map((item) => {
              const dropdown = dropdowns[item.href];

              return dropdown ? (
                <div key={item.href} className="rounded-xl px-2 py-2">
                  <Link
                    href={localizeHref(locale, item.href)}
                    className="block rounded-xl px-2 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:text-cyan-700"
                  >
                    {dropdown.overview}
                  </Link>
                  <div className="mt-1 grid gap-1">
                    {dropdown.groups ? (
                      dropdown.groups.map((group) => (
                        <div key={group.title} className="mt-2">
                          <p className="px-4 pb-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cyan-700">
                            {group.title}
                          </p>
                          <div className="grid gap-1">
                            {group.items.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={localizeHref(locale, dropdownItem.href)}
                                className="block rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      dropdown.items?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={localizeHref(locale, dropdownItem.href)}
                          className="block rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={localizeHref(locale, item.href)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={localizeHref(locale, "/kontakt")}
              className="mt-2 flex rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
            >
              {navigation.inquiry}
            </Link>
          </div>
        </details>
      </div>
      <SiteExplorerBand locale={locale} />
    </header>
  );
}
