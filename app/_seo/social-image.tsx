import { ImageResponse } from "next/og";

import type { Locale } from "../_i18n/config";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

const copy: Record<
  Locale,
  { eyebrow: string; title: string; claim: string; topics: string }
> = {
  de: {
    eyebrow: "RELIABILITY ENGINEERING",
    title: "Zuverlässigkeit verstehen. Entscheidungen absichern.",
    claim: "Ingenieurberatung für belastbare Produktentscheidungen",
    topics: "Zuverlässigkeitstechnik  •  Risikomanagement  •  DoE",
  },
  en: {
    eyebrow: "RELIABILITY ENGINEERING",
    title: "Understand reliability. Support sound decisions.",
    claim: "Engineering consulting for robust product decisions",
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
          background: "#1f2559",
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
              background: "#75a7ff",
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
              background: "#75a7ff",
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
            background: "#48a5d1",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "62px 72px 58px",
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
                width: 62,
                height: 62,
                border: "3px solid #ffffff",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#48a5d1",
                fontSize: 34,
              }}
            >
              R
            </div>
            RELTEST
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                color: "#48a5d1",
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
                fontSize: locale === "de" ? 64 : 60,
                lineHeight: 1.08,
                fontWeight: 800,
                letterSpacing: -1.5,
              }}
            >
              {text.title}
            </div>
            <div style={{ fontSize: 25, color: "#d7dcef" }}>{text.claim}</div>
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
            <div style={{ color: "#48a5d1", fontWeight: 700 }}>
              reltest-solutions.com
            </div>
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
