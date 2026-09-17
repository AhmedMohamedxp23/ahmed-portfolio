import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#090a0d",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span
          style={{
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: -4,
            backgroundImage: "linear-gradient(135deg, #bef24f, #9b8cff)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          AM
        </span>
      </div>
    ),
    { ...size }
  );
}
