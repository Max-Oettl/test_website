import Link from "next/link";

import { getSiteContent } from "../_content/site-content";
import { localizeHref, type Locale } from "../_i18n/config";
import { ConceptBrandLogo } from "./concept-brand-logo";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const { footer } = getSiteContent(locale);

  return (
    <footer className="site-footer-shell border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <ConceptBrandLogo placement="footer" />
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            {footer.description}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            {footer.quickAccess}
          </p>
          <div className="mt-4 grid gap-2">
            {footer.links.map((link) => (
              <Link
                key={link.href}
                href={localizeHref(locale, link.href)}
                className="text-sm text-slate-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            {footer.contact}
          </p>
          <address className="mt-4 space-y-2 text-sm not-italic text-slate-300">
            <p>Steglen 26, 71083 Herrenberg</p>
            <a
              className="block hover:text-white"
              href="mailto:info@reltest-solutions.com"
            >
              info@reltest-solutions.com
            </a>
            <a className="block hover:text-white" href="tel:+4971125253531">
              +49 711 25253531
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-slate-800 px-5 py-5 text-center text-xs text-slate-500">
        {footer.copyright}
      </div>
    </footer>
  );
}
