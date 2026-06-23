import { NextResponse } from "next/server";

import { hasLocale } from "../../_i18n/config";

export async function POST(request: Request) {
  const body = (await request.json()) as { locale?: string };

  if (!body.locale || !hasLocale(body.locale)) {
    return NextResponse.json({ error: "Unsupported locale" }, { status: 400 });
  }

  const response = NextResponse.json({ locale: body.locale });
  response.cookies.set("NEXT_LOCALE", body.locale, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
