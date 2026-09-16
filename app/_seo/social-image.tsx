import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

import type { Locale } from "../_i18n/config";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

const logo = `data:image/png;base64,${readFileSync(join(process.cwd(), "public/branding/reltest-email-logo.png")).toString("base64")}`;

const copy: Record<
  Locale,
  { eyebrow: string; title: string; claim: string; topics: string }
> = {
  de: {
    eyebrow: "RELIABILITY ENGINEERING",
    title: "Zuverlässigkeitsberatung für belastbare Produktentscheidungen.",
    claim: "Wir verankern Zuverlässigkeit als Ihren strategischen Erfolgsfaktor.",
    topics: "Zuverlässigkeitstechnik  •  Risikomanagement  •  DoE",
  },
  en: {
    eyebrow: "RELIABILITY ENGINEERING",
    title: "Reliability engineering consulting for robust product decisions.",
    claim: "We make reliability your strategic advantage.",
    topics: "Reliability engineering  •  Risk management  •  DoE",
  },
};

export function renderSocialImage(locale: Locale) {
  const text = copy[locale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#142452",
          color: "#ffffff",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            display: "flex",
            opacity: 0.18,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 780,
              height: 2,
              background: "#2ea1cf",
              transform: "rotate(16deg)",
              right: -120,
              top: 170,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 680,
              height: 2,
                background: "#2ea1cf",
              transform: "rotate(-12deg)",
              right: -80,
              bottom: 135,
            }}
          />
        </div>

        <div
          style={{
            width: 18,
            height: "100%",
            background: "#2ea1cf",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "40px 60px 40px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
              fontSize: 34,
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            <div
              style={{
                width: 270,
                height: 106,
                padding: 14,
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* next/og embeds the local, official logo; no external fetch. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo} alt="RelTest" width={240} height={77} />
            </div>
            <div style={{ maxWidth: 650, fontSize: 24, fontWeight: 400, letterSpacing: 0, lineHeight: 1.4 }}>
              {text.claim}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                color: "#2ea1cf",
                fontSize: 19,
                fontWeight: 700,
                letterSpacing: 4,
              }}
            >
              {text.eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: 920,
                fontSize: locale === "de" ? 54 : 52,
                lineHeight: 1.08,
                fontWeight: 800,
                letterSpacing: -1.5,
              }}
            >
              {text.title}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid rgba(255,255,255,0.28)",
              paddingTop: 24,
              fontSize: 18,
              color: "#d7dcef",
            }}
          >
            <div>{text.topics}</div>
            <div style={{ color: "#2ea1cf", fontWeight: 700 }}>
              reltest-solutions.com
            </div>
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
