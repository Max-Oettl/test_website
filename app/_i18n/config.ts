import { notFound } from "next/navigation";

export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizeHref(locale: Locale, href: string) {
  if (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  const normalizedHref = href === "/" ? "" : href;
  return `/${locale}${normalizedHref}`;
}

export async function resolveLocale(
  params: Promise<{ lang: string }>,
): Promise<Locale> {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  return lang;
}
