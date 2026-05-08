import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #f97316, #ea580c)",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
        position: "relative",
      }}
    >
      {/* Fork */}
      <div style={{ display: "flex", gap: 1.5, alignItems: "flex-end", marginRight: 3 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 2,
              height: 14,
              background: "white",
              borderRadius: 1,
              display: "flex",
            }}
          />
        ))}
      </div>
      {/* Spoon */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 6,
            height: 8,
            background: "white",
            borderRadius: "50%",
            display: "flex",
          }}
        />
        <div
          style={{
            width: 2,
            height: 8,
            background: "white",
            borderRadius: 1,
            display: "flex",
          }}
        />
      </div>
    </div>,
    { ...size }
  );
}
