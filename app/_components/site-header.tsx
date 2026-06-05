import Image from "next/image";
import Link from "next/link";

import { navigationItems } from "../_content/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="RelTest Solutions Startseite">
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
          <span className="hidden text-xs font-medium uppercase tracking-[0.22em] text-cyan-700 xl:block">
            Reliability & Testing
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-cyan-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/kontakt"
          className="hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-cyan-800 lg:inline-flex"
        >
          Anfrage starten
        </Link>

        <details className="group relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-950/10">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="mt-2 flex rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
            >
              Anfrage starten
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
