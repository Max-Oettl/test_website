import Image from "next/image";
import Link from "next/link";

import { getSiteContent } from "../_content/site-content";
import { localizeHref, type Locale } from "../_i18n/config";
import { SiteBrandLogo } from "./site-brand-logo";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const { footer } = getSiteContent(locale);
  const primaryLinks = footer.links.slice(0, 8);
  const secondaryLinks = footer.links.slice(8);

  return (
    <footer className="site-footer-shell border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-[100rem] gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.15fr_1.2fr_0.85fr_0.7fr] lg:gap-12 lg:px-8 lg:py-16 xl:gap-16">
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
          <div className="mt-5 grid grid-cols-2 gap-x-8 sm:gap-x-12">
            {[primaryLinks, secondaryLinks].map((links, columnIndex) => (
              <div key={columnIndex} className="grid content-start gap-2.5">
                {links.map((link) => {
                  const isEducation = link.href === "/education";

                  return (
                    <Link
                      key={link.href}
                      href={localizeHref(locale, link.href)}
                      className={`site-footer-link w-fit text-sm ${
                        isEducation ? "site-footer-link-education" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
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
      <div className="border-t border-slate-800 px-5 py-5 text-center text-xs text-slate-500">
        {footer.copyright}
      </div>
    </footer>
  );
}
