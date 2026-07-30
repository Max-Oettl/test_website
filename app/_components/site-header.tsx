import Link from "next/link";

import { getSiteContent } from "../_content/site-content";
import { localizeHref, type Locale } from "../_i18n/config";
import { ActiveNavLink } from "./active-nav-link";
import { ConceptBrandLogo } from "./concept-brand-logo";
import { LanguageSwitcher } from "./language-switcher";
import { LandingConceptBodySync } from "./landing-concept-body-sync";

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

function removeHash(href: string) {
  return href.split("#")[0] ?? href;
}

function uniqueItems(items: string[]) {
  return Array.from(new Set(items));
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const { navigation } = getSiteContent(locale);
  const dropdowns: Record<string, NavigationDropdown> = {
    "/leistungen": {
      overview: navigation.servicesOverview,
      items: navigation.serviceItems,
      width: "default",
    },
    "/education": {
      overview: navigation.educationOverview,
      items: navigation.educationItems,
      width: "default",
    },
    "/wissen": {
      overview: navigation.knowledgeOverview,
      items: navigation.knowledgeItems,
      width: "default",
    },
    "/expertise": {
      overview: navigation.expertiseOverview,
      items: navigation.expertiseItems,
      width: "default",
    },
  };

  return (
    <>
      <LandingConceptBodySync />
      <header className="site-header-shell sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="site-header-inner mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href={localizeHref(locale, "/")}
          className="site-header-brand flex items-center gap-3"
          aria-label={navigation.homeLabel}
        >
          <span className="site-header-logo-mark relative block h-11 w-36 sm:w-44">
            <ConceptBrandLogo placement="header" />
          </span>
          <span className="site-header-claim hidden text-xs font-medium uppercase tracking-[0.22em] text-cyan-700 2xl:block">
            Reliability & Testing
          </span>
        </Link>

        <nav
          className="site-header-nav hidden items-center gap-5 2xl:gap-6 xl:flex"
          aria-label={navigation.ariaLabel}
        >
          {navigation.items.map((item) => {
            const dropdown = dropdowns[item.href];
            const dropdownItems =
              dropdown?.items?.map((dropdownItem) =>
                removeHash(dropdownItem.href),
              ) ?? [];
            const activeHrefs = uniqueItems([item.href, ...dropdownItems]).map(
              (href) => localizeHref(locale, href),
            );
            const topLinkClassName =
              "site-nav-link block whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-cyan-700";
            const topActiveClassName =
              "site-nav-link-active bg-cyan-50 text-cyan-800 ring-1 ring-cyan-100";

            return dropdown ? (
              <div key={item.href} className="group relative">
                <ActiveNavLink
                  href={localizeHref(locale, item.href)}
                  activeHrefs={activeHrefs}
                  className={topLinkClassName}
                  activeClassName={topActiveClassName}
                >
                  {item.label}
                </ActiveNavLink>

                <div
                  className={`pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 ${
                    dropdown.width === "wide" ? "w-96" : "w-72"
                  }`}
                >
                  <div className="site-nav-dropdown rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-950/10">
                    <ActiveNavLink
                      href={localizeHref(locale, item.href)}
                      className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:text-cyan-700"
                      activeClassName="bg-cyan-50 text-cyan-800 ring-1 ring-cyan-100"
                    >
                      {dropdown.overview}
                    </ActiveNavLink>
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
                                <ActiveNavLink
                                  key={dropdownItem.href}
                                  href={localizeHref(locale, dropdownItem.href)}
                                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                                  activeClassName="bg-cyan-50 text-cyan-800"
                                >
                                  {dropdownItem.label}
                                </ActiveNavLink>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      dropdown.items?.map((dropdownItem) =>
                        dropdownItem.href.includes("#") ? (
                          <Link
                            key={dropdownItem.href}
                            href={localizeHref(locale, dropdownItem.href)}
                            className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                          >
                            {dropdownItem.label}
                          </Link>
                        ) : (
                          <ActiveNavLink
                            key={dropdownItem.href}
                            href={localizeHref(locale, dropdownItem.href)}
                            className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                            activeClassName="bg-cyan-50 text-cyan-800"
                          >
                            {dropdownItem.label}
                          </ActiveNavLink>
                        ),
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <ActiveNavLink
                key={item.href}
                href={localizeHref(locale, item.href)}
                className={topLinkClassName}
                activeClassName={topActiveClassName}
              >
                {item.label}
              </ActiveNavLink>
            );
          })}
        </nav>

        <div className="site-header-language-kacheln hidden items-center">
          <LanguageSwitcher locale={locale} />
        </div>

        <div className="site-header-actions hidden items-center gap-3 xl:flex">
          <Link
            href={localizeHref(locale, "/kontakt")}
            className="site-header-cta whitespace-nowrap rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-cyan-800"
          >
            {navigation.inquiry}
          </Link>
          <div className="site-header-language ml-1 border-l border-slate-200 pl-4">
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
              const dropdownItems =
                dropdown?.items?.map((dropdownItem) =>
                  removeHash(dropdownItem.href),
                ) ?? [];
              const activeHrefs = uniqueItems([item.href, ...dropdownItems]).map(
                (href) => localizeHref(locale, href),
              );

              return dropdown ? (
                <div key={item.href} className="rounded-xl px-2 py-2">
                  <ActiveNavLink
                    href={localizeHref(locale, item.href)}
                    className="block rounded-xl px-2 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:text-cyan-700"
                    activeHrefs={activeHrefs}
                    activeClassName="bg-cyan-50 text-cyan-800 ring-1 ring-cyan-100"
                  >
                    {dropdown.overview}
                  </ActiveNavLink>
                  <div className="mt-1 grid gap-1">
                    {dropdown.groups ? (
                      dropdown.groups.map((group) => (
                        <div key={group.title} className="mt-2">
                          <p className="px-4 pb-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cyan-700">
                            {group.title}
                          </p>
                          <div className="grid gap-1">
                            {group.items.map((dropdownItem) => (
                              <ActiveNavLink
                                key={dropdownItem.href}
                                href={localizeHref(locale, dropdownItem.href)}
                                className="block rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                                activeClassName="bg-cyan-50 text-cyan-800"
                              >
                                {dropdownItem.label}
                              </ActiveNavLink>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      dropdown.items?.map((dropdownItem) =>
                        dropdownItem.href.includes("#") ? (
                          <Link
                            key={dropdownItem.href}
                            href={localizeHref(locale, dropdownItem.href)}
                            className="block rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                          >
                            {dropdownItem.label}
                          </Link>
                        ) : (
                          <ActiveNavLink
                            key={dropdownItem.href}
                            href={localizeHref(locale, dropdownItem.href)}
                            className="block rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                            activeClassName="bg-cyan-50 text-cyan-800"
                          >
                            {dropdownItem.label}
                          </ActiveNavLink>
                        ),
                      )
                    )}
                  </div>
                </div>
              ) : (
                <ActiveNavLink
                  key={item.href}
                  href={localizeHref(locale, item.href)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                  activeClassName="bg-cyan-50 font-semibold text-cyan-800 ring-1 ring-cyan-100"
                >
                  {item.label}
                </ActiveNavLink>
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
    </header>
    </>
  );
}
