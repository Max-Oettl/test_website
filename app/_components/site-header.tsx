import Link from "next/link";

import { getSiteContent } from "../_content/site-content";
import { localizeHref, type Locale } from "../_i18n/config";
import { ActiveNavLink } from "./active-nav-link";
import { CompactHeaderMenu } from "./compact-header-menu";
import { LanguageSwitcher } from "./language-switcher";
import { SiteBrandLogo } from "./site-brand-logo";

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
    <header className="site-header-shell sticky top-0 z-50 border-b border-brand-steel-cyan/20 bg-white/95 backdrop-blur-xl">
      <div className="site-header-inner mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
        <ActiveNavLink
          href={localizeHref(locale, "/")}
          className="site-header-brand flex items-center gap-3"
          activeClassName=""
          exact
          aria-label={navigation.homeLabel}
        >
          <span className="site-header-logo-mark relative block h-11 w-36 sm:w-44">
            <SiteBrandLogo placement="header" />
          </span>
        </ActiveNavLink>

        <nav
          className="site-header-nav hidden items-center gap-5 2xl:gap-6 xl:flex"
          aria-label={navigation.ariaLabel}
        >
          {navigation.items.map((item) => {
            const dropdown = dropdowns[item.href];
            const isEducationItem = item.href === "/education";
            const dropdownItems =
              dropdown?.items?.map((dropdownItem) =>
                removeHash(dropdownItem.href),
              ) ?? [];
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
              <div key={item.href} className="group relative">
                <ActiveNavLink
                  href={localizeHref(locale, item.href)}
                  activeHrefs={activeHrefs}
                  blurOnPointerActivation
                  className={topLinkClassName}
                  activeClassName={topActiveClassName}
                >
                  {item.label}
                </ActiveNavLink>

                <div
                  className={`site-nav-dropdown-shell pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 ${
                    dropdown.width === "wide" ? "w-96" : "w-72"
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
                      dropdown.items?.map((dropdownItem) =>
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

        <div className="site-header-language-desktop hidden items-center">
          <LanguageSwitcher locale={locale} />
        </div>

        <div className="site-header-actions hidden items-center gap-3 xl:flex">
          <Link
            href={localizeHref(locale, "/kontakt#anfrageformular")}
            className="brand-action site-header-cta whitespace-nowrap bg-brand-marine px-5 py-3 font-winnstein-display text-sm font-semibold text-white transition-colors hover:bg-brand-steel-cyan"
          >
            {navigation.inquiry}
          </Link>
          <div className="site-header-language ml-1 border-l border-brand-marine/15 pl-4">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>

        <CompactHeaderMenu label={navigation.menu}>
            <div className="mb-2 px-2">
              <LanguageSwitcher locale={locale} compact />
            </div>
            {navigation.items.map((item) => {
              const dropdown = dropdowns[item.href];
              const isEducationItem = item.href === "/education";
              const dropdownItems =
                dropdown?.items?.map((dropdownItem) =>
                  removeHash(dropdownItem.href),
                ) ?? [];
              const activeHrefs = uniqueItems([item.href, ...dropdownItems]).map(
                (href) => localizeHref(locale, href),
              );

              return dropdown ? (
                <div key={item.href} className="px-2 py-2">
                  <ActiveNavLink
                    href={localizeHref(locale, item.href)}
                    className={`site-compact-menu-link block border-l-2 border-transparent px-2 py-2 font-winnstein-display text-sm font-semibold text-brand-marine ${
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
                  <div className="mt-1 grid gap-1">
                    {dropdown.groups ? (
                      dropdown.groups.map((group) => (
                        <div key={group.title} className="mt-2">
                          <p className="px-4 pb-1 font-winnstein-display text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-steel-cyan">
                            {group.title}
                          </p>
                          <div className="grid gap-1">
                            {group.items.map((dropdownItem) => (
                              <ActiveNavLink
                                key={dropdownItem.href}
                                href={localizeHref(locale, dropdownItem.href)}
                                className="site-compact-menu-link block border-l-2 border-transparent px-4 py-2 text-sm font-medium text-brand-marine/80"
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
                            className="site-compact-menu-link block border-l-2 border-transparent px-4 py-2 text-sm font-medium text-brand-marine/80"
                          >
                            {dropdownItem.label}
                          </Link>
                        ) : (
                          <ActiveNavLink
                            key={dropdownItem.href}
                            href={localizeHref(locale, dropdownItem.href)}
                            className="site-compact-menu-link block border-l-2 border-transparent px-4 py-2 text-sm font-medium text-brand-marine/80"
                            activeClassName="border-brand-steel-cyan bg-brand-steel-cyan-10 text-brand-marine"
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
                  className="site-compact-menu-link block border-l-2 border-transparent px-4 py-3 text-sm font-medium text-brand-marine/80"
                  activeClassName="border-brand-steel-cyan bg-brand-steel-cyan-10 font-semibold text-brand-marine"
                >
                  {item.label}
                </ActiveNavLink>
              );
            })}
            <Link
              href={localizeHref(locale, "/kontakt#anfrageformular")}
              className="brand-action site-header-cta mt-2 flex bg-brand-marine px-4 py-3 font-winnstein-display text-sm font-semibold text-white transition-colors hover:bg-brand-steel-cyan focus-visible:bg-brand-steel-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-steel-cyan/40"
            >
              {navigation.inquiry}
            </Link>
        </CompactHeaderMenu>
      </div>
    </header>
  );
}
