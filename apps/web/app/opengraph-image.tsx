import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TrustOS — The trust layer for stablecoin payments";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Gradient background */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#6366F1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M14 3L5 8v5c0 6.5 3.86 12.55 9 14.72C19.14 25.55 23 19.5 23 13V8l-9-5z"
                fill="white"
                fillOpacity="0.9"
              />
              <path
                d="M11 14.5l2.5 2.5 5-5"
                stroke="#6366F1"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#FAFAFA",
              letterSpacing: "-0.02em",
            }}
          >
            Trust
            <span style={{ color: "#6366F1" }}>OS</span>
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#FAFAFA",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
            letterSpacing: "-0.03em",
          }}
        >
          The trust layer for
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #6366F1, #22D3EE)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            stablecoin payments
          </span>
        </div>

        {/* Subheadline */}
        <div
          style={{
            fontSize: "22px",
            color: "#A1A1AA",
            textAlign: "center",
            maxWidth: "700px",
            marginTop: "24px",
            lineHeight: 1.5,
          }}
        >
          Non-custodial escrow, dispute resolution, and buyer protection for USDC payments on Base.
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "16px",
            color: "#71717A",
          }}
        >
          trustos.io
        </div>
      </div>
    ),
    { ...size }
  );
}
