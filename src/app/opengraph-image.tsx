import { ImageResponse } from "next/og";
import { OgImage, ogSize } from "@/lib/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(await OgImage(), { ...size });
}
