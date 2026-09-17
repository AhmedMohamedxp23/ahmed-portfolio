import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };

export async function OgImage() {
  const avatar = await readFile(join(process.cwd(), "public/avatar.png"));
  const avatarSrc = `data:image/png;base64,${avatar.toString("base64")}`;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#090a0d",
        backgroundImage:
          "radial-gradient(circle at 8% 10%, rgba(190,242,79,0.25), transparent 45%), radial-gradient(circle at 92% 92%, rgba(155,140,255,0.28), transparent 45%)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatarSrc}
          alt=""
          width={140}
          height={140}
          style={{
            borderRadius: 28,
            objectFit: "cover",
            border: "3px solid rgba(238,242,245,0.18)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#eef2f5",
              letterSpacing: -2,
            }}
          >
            {siteConfig.name}
          </span>
          <span
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: "#bef24f",
              marginTop: 8,
            }}
          >
            Full-Stack Developer · Riyadh
          </span>
        </div>
      </div>
      <span
        style={{
          fontSize: 26,
          color: "#9aa6b2",
          marginTop: 48,
          maxWidth: 920,
          lineHeight: 1.5,
        }}
      >
        Next.js · React · TypeScript · Node.js — bilingual (AR/EN) websites
        &amp; web apps shipped end-to-end, brief to launch.
      </span>
    </div>
  );
}
