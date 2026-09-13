import Link from "next/link";

import { getIndustries } from "../_content/industry-overview-content";
import { getSiteContent } from "../_content/site-content";
import { localizeHref, type Locale } from "../_i18n/config";
import { ActiveNavLink } from "./active-nav-link";
import { CompactHeaderMenu } from "./compact-header-menu";
import { DesktopNavigationDropdown } from "./desktop-navigation-dropdown";
import { LanguageSwitcher } from "./language-switcher";
import { SiteBrandLogo } from "./site-brand-logo";
import { SiteSearch } from "./site-search";

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
  columns?: 1 | 2;
  width: "wide" | "default" | "industries";
};

function removeHash(href: string) {
  return href.split("#")[0] ?? href;
}

function uniqueItems(items: string[]) {
  return Array.from(new Set(items));
}

function getDropdownItems(dropdown?: NavigationDropdown) {
  return [
    ...(dropdown?.items ?? []),
    ...(dropdown?.groups?.flatMap((group) => group.items) ?? []),
  ];
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const { navigation } = getSiteContent(locale);
  const industryItems = getIndustries(locale).map((industry) => ({
    label: industry.title,
    href: `/branchen/${industry.slug}`,
  }));
  const glossaryHref = localizeHref(locale, "/glossar");
  const dropdowns: Record<string, NavigationDropdown> = {
    "/leistungen": {
      overview: navigation.servicesOverview,
      groups: [
        {
          title: navigation.serviceGroupLabels.primary,
          items: navigation.serviceItems,
        },
        {
          title: navigation.serviceGroupLabels.methods,
          items: navigation.serviceMethodItems,
        },
      ],
      width: "wide",
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
    "/branchen": {
      overview: navigation.industriesOverview,
      items: industryItems,
      columns: 2,
      width: "industries",
    },
    "/expertise": {
      overview: navigation.expertiseOverview,
      items: navigation.expertiseItems,
      width: "default",
    },
  };

  return (
    <header className="site-header-shell sticky top-0 z-50 border-b border-brand-steel-cyan/20 bg-white/95 backdrop-blur-xl">
      <div className="site-header-inner mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
        <ActiveNavLink
          href={localizeHref(locale, "/")}
          className="site-header-brand flex items-center gap-3"
          activeClassName=""
          exact
          scrollToTopWhenActive
          aria-label={navigation.homeLabel}
        >
          <span className="site-header-logo-mark relative block h-11 w-36 sm:w-44">
            <SiteBrandLogo placement="header" />
          </span>
        </ActiveNavLink>

        <nav
          className="site-header-nav hidden items-center gap-5 min-[1360px]:flex 2xl:gap-6"
          aria-label={navigation.ariaLabel}
        >
          {navigation.items.map((item) => {
            const dropdown = dropdowns[item.href];
            const isEducationItem = item.href === "/education";
            const dropdownItems = getDropdownItems(dropdown).map(
              (dropdownItem) => removeHash(dropdownItem.href),
            );
            const activeHrefs = uniqueItems([item.href, ...dropdownItems]).map(
              (href) => localizeHref(locale, href),
            );
            const topLinkClassName =
              `site-nav-link ${
                isEducationItem
                  ? "site-nav-link-education hover:text-brand-education"
                  : "hover:text-brand-steel-cyan"
              } block whitespace-nowrap px-2 py-2 font-winnstein-display text-sm font-semibold text-brand-marine transition-colors`;
            const topActiveClassName = `site-nav-link-active ${
              isEducationItem
                ? "site-nav-link-education-active text-brand-education"
                : "text-brand-marine"
            }`;

            return dropdown ? (
              <DesktopNavigationDropdown key={item.href}>
                <ActiveNavLink
                  href={localizeHref(locale, item.href)}
                  activeHrefs={activeHrefs}
                  blurOnPointerActivation
                  data-site-nav-dropdown-trigger
                  className={topLinkClassName}
                  activeClassName={topActiveClassName}
                >
                  {item.label}
                </ActiveNavLink>

                <div
                  className={`site-nav-dropdown-shell pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 ${
                    dropdown.width === "wide"
                      ? "w-96"
                      : dropdown.width === "industries"
                        ? "w-[36rem]"
                        : "w-72"
                  }`}
                >
                  <div className="site-nav-dropdown border border-brand-marine/15 bg-white p-3">
                    <ActiveNavLink
                      href={localizeHref(locale, item.href)}
                      className="block border-l-2 border-transparent px-4 py-3 font-winnstein-display text-sm font-semibold text-brand-marine hover:border-brand-steel-cyan hover:bg-brand-steel-cyan-10 hover:text-brand-steel-cyan"
                      activeClassName="border-brand-steel-cyan bg-brand-steel-cyan-10 text-brand-marine"
                    >
                      {dropdown.overview}
                    </ActiveNavLink>
                    <div className="my-2 h-px bg-brand-marine/10" />
                    {dropdown.groups ? (
                      <div className="grid gap-3">
                        {dropdown.groups.map((group) => (
                          <div key={group.title}>
                            <p className="px-4 pb-1 font-winnstein-display text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-steel-cyan">
                              {group.title}
                            </p>
                            <div className="grid gap-1">
                              {group.items.map((dropdownItem) => (
                                <ActiveNavLink
                                  key={dropdownItem.href}
                                  href={localizeHref(locale, dropdownItem.href)}
                                  className="block border-l-2 border-transparent px-4 py-2.5 text-sm font-medium text-brand-marine/80 hover:border-brand-steel-cyan hover:bg-brand-steel-cyan-10 hover:text-brand-marine"
                                  activeClassName="border-brand-steel-cyan bg-brand-steel-cyan-10 text-brand-marine"
                                >
                                  {dropdownItem.label}
                                </ActiveNavLink>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div
                        className={
                          dropdown.columns === 2
                            ? "grid grid-cols-2 gap-x-2"
                            : "grid"
                        }
                      >
                        {dropdown.items?.map((dropdownItem) =>
                          dropdownItem.href.includes("#") ? (
                            <Link
                              key={dropdownItem.href}
                              href={localizeHref(locale, dropdownItem.href)}
                              className="block border-l-2 border-transparent px-4 py-3 text-sm font-medium text-brand-marine/80 hover:border-brand-steel-cyan hover:bg-brand-steel-cyan-10 hover:text-brand-marine"
                            >
                              {dropdownItem.label}
                            </Link>
                          ) : (
                            <ActiveNavLink
                              key={dropdownItem.href}
                              href={localizeHref(locale, dropdownItem.href)}
                              className="block border-l-2 border-transparent px-4 py-3 text-sm font-medium text-brand-marine/80 hover:border-brand-steel-cyan hover:bg-brand-steel-cyan-10 hover:text-brand-marine"
                              activeClassName="border-brand-steel-cyan bg-brand-steel-cyan-10 text-brand-marine"
                            >
                              {dropdownItem.label}
                            </ActiveNavLink>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </DesktopNavigationDropdown>
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

        <div className="hidden items-center gap-2 min-[1360px]:flex">
          <SiteSearch
            locale={locale}
            glossaryHref={glossaryHref}
          />
          <div className="site-header-language-desktop hidden items-center">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>

        <div className="site-header-actions hidden items-center gap-3 min-[1360px]:flex">
          <Link
            href={localizeHref(locale, "/kontakt")}
            className="brand-action site-header-cta whitespace-nowrap bg-brand-marine px-5 py-3 font-winnstein-display text-sm font-semibold text-white transition-colors hover:bg-brand-steel-cyan"
          >
            {navigation.inquiry}
          </Link>
          <div className="site-header-language ml-1 border-l border-brand-marine/15 pl-4">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>

        <CompactHeaderMenu
          label={navigation.menu}
          closeLabel={locale === "de" ? "Menü schließen" : "Close menu"}
          actions={
            <>
              <LanguageSwitcher locale={locale} compact />
              <SiteSearch
                locale={locale}
                glossaryHref={glossaryHref}
                compact
              />
            </>
          }
          brand={
            <Link
              href={localizeHref(locale, "/")}
              className="grid min-h-16 grid-cols-[8.5rem_minmax(0,1fr)] items-center gap-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan focus-visible:ring-inset"
              aria-label={navigation.homeLabel}
            >
              <span className="relative block h-11 w-[8.5rem]">
                <SiteBrandLogo placement="header" />
              </span>
              <span className="text-[0.6875rem] leading-[1.3] font-semibold text-brand-marine/75">
                {locale === "de"
                  ? "Zuverlässigkeitsberatung und Engineering für anspruchsvolle Produkte."
                  : "Reliability consulting and engineering for demanding products."}
              </span>
            </Link>
          }
          footer={
            <Link
              href={localizeHref(locale, "/kontakt")}
              className="brand-action site-header-cta flex min-h-12 w-full items-center justify-between bg-brand-marine px-5 py-3 font-winnstein-display text-sm font-semibold text-white transition-colors hover:bg-brand-steel-cyan focus-visible:bg-brand-steel-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan/40"
            >
              {navigation.inquiry}
              <svg
                aria-hidden="true"
                className="h-5 w-5 shrink-0"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4 10h11m-4-4 4 4-4 4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </Link>
          }
        >
            {navigation.items.map((item) => {
              const dropdown = dropdowns[item.href];
              const isEducationItem = item.href === "/education";
              const dropdownItems = getDropdownItems(dropdown).map(
                (dropdownItem) => removeHash(dropdownItem.href),
              );
              const activeHrefs = uniqueItems([item.href, ...dropdownItems]).map(
                (href) => localizeHref(locale, href),
              );

              return dropdown ? (
                <section
                  key={item.href}
                  className="border-b border-brand-marine/10 px-5 py-4"
                >
                  <ActiveNavLink
                    href={localizeHref(locale, item.href)}
                    className={`site-compact-menu-link flex min-h-11 items-center border-l-2 border-transparent px-3 py-2 font-winnstein-display text-base font-bold text-brand-marine ${
                      isEducationItem
                        ? "site-compact-menu-link-education"
                        : ""
                    }`}
                    activeHrefs={activeHrefs}
                    activeClassName={
                      isEducationItem
                        ? "border-brand-education bg-brand-education/[0.07] text-brand-education"
                        : "border-brand-steel-cyan bg-brand-steel-cyan-10 text-brand-marine"
                    }
                  >
                    {dropdown.overview}
                  </ActiveNavLink>
                  <div className="mt-2 grid gap-1 border-l border-brand-steel-cyan/20 pl-3">
                    {dropdown.groups ? (
                      dropdown.groups.map((group) => (
                        <div key={group.title} className="py-1">
                          <p className="px-3 pb-1.5 font-winnstein-display text-[0.68rem] font-bold uppercase tracking-[0.14em] text-brand-steel-cyan">
                            {group.title}
                          </p>
                          <div className="grid gap-1">
                            {group.items.map((dropdownItem) => (
                              <ActiveNavLink
                                key={dropdownItem.href}
                                href={localizeHref(locale, dropdownItem.href)}
                                className="site-compact-menu-link flex min-h-11 items-center border-l-2 border-transparent px-3 py-2 text-sm font-medium leading-snug text-brand-marine/80"
                                activeClassName="border-brand-steel-cyan bg-brand-steel-cyan-10 text-brand-marine"
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
                            className="site-compact-menu-link flex min-h-11 items-center border-l-2 border-transparent px-3 py-2 text-sm font-medium leading-snug text-brand-marine/80"
                          >
                            {dropdownItem.label}
                          </Link>
                        ) : (
                          <ActiveNavLink
                            key={dropdownItem.href}
                            href={localizeHref(locale, dropdownItem.href)}
                            className="site-compact-menu-link flex min-h-11 items-center border-l-2 border-transparent px-3 py-2 text-sm font-medium leading-snug text-brand-marine/80"
                            activeClassName="border-brand-steel-cyan bg-brand-steel-cyan-10 text-brand-marine"
                          >
                            {dropdownItem.label}
                          </ActiveNavLink>
                        ),
                      )
                    )}
                  </div>
                </section>
              ) : (
                <ActiveNavLink
                  key={item.href}
                  href={localizeHref(locale, item.href)}
                  className="site-compact-menu-link flex min-h-14 items-center border-b border-l-2 border-brand-marine/10 border-l-transparent px-8 py-3 font-winnstein-display text-base font-bold text-brand-marine"
                  activeClassName="border-brand-steel-cyan bg-brand-steel-cyan-10 font-semibold text-brand-marine"
                >
                  {item.label}
                </ActiveNavLink>
              );
            })}
        </CompactHeaderMenu>
      </div>
    </header>
  );
}
