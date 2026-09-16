import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { defaultLocale, hasLocale, type Locale } from "./app/_i18n/config";

function getPreferredLocale(request: NextRequest): Locale {
  const savedLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (savedLocale && hasLocale(savedLocale)) {
    return savedLocale;
  }

  const preferredLanguage = request.headers
    .get("accept-language")
    ?.split(",")[0]
    ?.trim()
    .toLowerCase();

  return preferredLanguage?.startsWith("en") ? "en" : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Legacy redirects run before Proxy, so they keep their direct 301 targets.
  // Normalize remaining page URLs without losing query parameters.
  if (pathname !== "/" && pathname.endsWith("/")) {
    const canonicalUrl = new URL(request.url);
    canonicalUrl.pathname = pathname.replace(/\/+$/, "");
    return NextResponse.redirect(canonicalUrl, 301);
  }

  const localeSegment = pathname.split("/")[1];

  if (!hasLocale(localeSegment)) {
    const locale = getPreferredLocale(request);
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(redirectUrl);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-reltest-locale", localeSegment);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|.*\\..*).*)"],
};
