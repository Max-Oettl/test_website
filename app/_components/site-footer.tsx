import Image from "next/image";
import Link from "next/link";

import { getSiteContent } from "../_content/site-content";
import { localizeHref, type Locale } from "../_i18n/config";
import { CookieSettingsButton } from "./cookie-settings-button";
import { SiteBrandLogo } from "./site-brand-logo";

type SiteFooterProps = {
  locale: Locale;
};

const linkedInUrl = "https://www.linkedin.com/company/reltest-solutions";
const xingUrl = "https://www.xing.com/pages/reltest-solutions-gmbh";

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="currentColor"
    >
      <path d="M5.2 7.6A2.2 2.2 0 1 0 5.2 3a2.2 2.2 0 0 0 0 4.5ZM3.4 21h3.7V9H3.4v12Zm6 0h3.7v-6.6c0-1.7.3-3.4 2.5-3.4 2.1 0 2.2 2 2.2 3.5V21h3.7v-7.2c0-3.6-.8-6.3-4.9-6.3-2 0-3.3 1.1-3.8 2.1h-.1V9H9.3v12Z" />
    </svg>
  );
}

function XingIcon() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-5 min-w-5 items-center justify-center text-[0.55rem] leading-none font-bold tracking-[-0.04em]"
    >
      XING
    </span>
  );
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const { footer } = getSiteContent(locale);
  const legalLinks = footer.links.filter(
    (link) => link.href === "/impressum" || link.href === "/datenschutz",
  );
  const quickAccessOrder = [
    "/aktuelles",
    "/glossar",
    "/literatur",
    "/referenzen",
    "/branchen",
    "/kontakt",
  ];
  const quickAccessLinks = quickAccessOrder.flatMap((href) => {
    const link = footer.links.find((candidate) => candidate.href === href);

    return link ? [link] : [];
  });

  return (
    <footer className="site-footer-shell border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-[100rem] grid-cols-1 gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.7fr_0.9fr_0.7fr] lg:gap-12 lg:px-8 lg:py-16 xl:gap-16">
        <div>
          <SiteBrandLogo placement="footer" />
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            {footer.description}
          </p>
        </div>

        <div>
          <p className="site-footer-heading text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            {footer.quickAccess}
          </p>
          <div className="mt-5 grid content-start gap-2.5">
            {quickAccessLinks.map((link) => (
              <Link
                key={link.href}
                href={localizeHref(locale, link.href)}
                className="site-footer-link w-fit text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="site-footer-heading text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            {footer.contact}
          </p>
          <address className="mt-4 space-y-2 text-sm not-italic text-slate-300">
            <p>Steglen 26, 71083 Herrenberg</p>
            <a
              className="site-footer-link block w-fit"
              href="mailto:info@reltest-solutions.com"
            >
              info@reltest-solutions.com
            </a>
            <a className="site-footer-link block w-fit" href="tel:+4971125253531">
              +49 711 25253531
            </a>
          </address>
          <div className="mt-5 flex flex-col items-start gap-3 border-t border-slate-800 pt-4">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-link inline-flex w-fit items-center gap-2 text-sm text-slate-300"
            >
              <LinkedInIcon />
              {locale === "de" ? "RelTest auf LinkedIn" : "RelTest on LinkedIn"}
            </a>
            <a
              href={xingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-link inline-flex w-fit items-center gap-2 text-sm text-slate-300"
            >
              <XingIcon />
              {locale === "de" ? "RelTest auf XING" : "RelTest on XING"}
            </a>
          </div>
        </div>

        <div className="hidden items-end justify-end lg:flex" aria-hidden="true">
          <Image
            src="/branding/reltest-horizontal-negative.svg"
            alt=""
            width={466}
            height={195}
            className="h-auto w-full max-w-52 opacity-50"
          />
        </div>
      </div>
      <div className="border-t border-slate-800 px-5 py-5 text-xs text-slate-300 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[100rem] flex-col items-center justify-between gap-3 sm:flex-row">
          <span>{footer.copyright}</span>
          <nav
            aria-label={locale === "de" ? "Rechtliches und Datenschutz" : "Legal and privacy"}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-end"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={localizeHref(locale, link.href)}
                className="site-footer-link w-fit text-xs"
              >
                {link.label}
              </Link>
            ))}
            <CookieSettingsButton
              label={locale === "de" ? "Cookie-Einstellungen" : "Cookie settings"}
            />
          </nav>
        </div>
      </div>
    </footer>
  );
}
