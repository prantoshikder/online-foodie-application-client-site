import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #f97316, #ea580c)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        gap: 0,
      }}
    >
      {/* Fork + Spoon */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 10, marginBottom: 12 }}>
        {/* Fork */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
          <div style={{ display: "flex", gap: 5, marginBottom: 0 }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: 7,
                  height: 36,
                  background: "white",
                  borderRadius: 3.5,
                  display: "flex",
                }}
              />
            ))}
          </div>
          <div
            style={{
              width: 7,
              height: 40,
              background: "white",
              borderRadius: 3.5,
              display: "flex",
              marginTop: -2,
            }}
          />
        </div>
        {/* Spoon */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              width: 28,
              height: 36,
              background: "white",
              borderRadius: "50%",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 8,
              height: 40,
              background: "white",
              borderRadius: 4,
              display: "flex",
              marginTop: -2,
            }}
          />
        </div>
      </div>

      {/* Wordmark */}
      <div
        style={{
          fontSize: 36,
          fontWeight: 900,
          color: "white",
          letterSpacing: "-1px",
          display: "flex",
        }}
      >
        Foodie
      </div>
    </div>,
    { ...size }
  );
}
