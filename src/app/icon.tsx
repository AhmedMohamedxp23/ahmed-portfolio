import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 7,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span
          style={{
            fontSize: 17,
            fontWeight: 800,
            letterSpacing: -1,
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
