import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Foodie — Delicious Delivered";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #f97316 0%, #ea580c 60%, #c2410c 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Background circles */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.08)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -120,
          left: -60,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          display: "flex",
        }}
      />

      {/* Logo icon */}
      <div
        style={{
          width: 110,
          height: 110,
          background: "rgba(255,255,255,0.2)",
          borderRadius: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 62,
          marginBottom: 28,
          border: "3px solid rgba(255,255,255,0.35)",
        }}
      >
        🍔
      </div>

      {/* App name */}
      <div
        style={{
          fontSize: 80,
          fontWeight: 900,
          color: "white",
          letterSpacing: "-2px",
          marginBottom: 16,
        }}
      >
        Foodie
      </div>

      {/* Tagline */}
      <div
        style={{
          fontSize: 30,
          color: "rgba(255,255,255,0.88)",
          fontWeight: 500,
          letterSpacing: "0.5px",
          marginBottom: 48,
        }}
      >
        Delicious Delivered
      </div>

      {/* Feature pills */}
      <div style={{ display: "flex", gap: 16 }}>
        {["🛵 Fast Delivery", "🎁 Exclusive Deals", "⭐ Top Restaurants"].map((text) => (
          <div
            key={text}
            style={{
              background: "rgba(255,255,255,0.18)",
              border: "1.5px solid rgba(255,255,255,0.3)",
              borderRadius: 50,
              padding: "10px 24px",
              color: "white",
              fontSize: 20,
              fontWeight: 600,
              display: "flex",
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>,
    { ...size }
  );
}
