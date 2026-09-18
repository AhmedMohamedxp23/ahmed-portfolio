import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 82, 90],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          { type: "host", value: "ahmedmohamed-portfolio-lovat.vercel.app" },
        ],
        destination: "https://ahmedmohamed-dev.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
