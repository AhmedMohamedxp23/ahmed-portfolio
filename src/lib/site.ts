function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const siteConfig = {
  name: "Ahmed Mohamed",
  title: "Ahmed Mohamed | Full-Stack Next.js Developer in Riyadh, KSA",
  description:
    "Full-stack developer in Riyadh building fast, bilingual (Arabic/English) websites & web apps with Next.js, React, TypeScript and Node.js — from brief to production launch.",
  keywords: [
    "Ahmed Mohamed",
    "Ahmed Mohamed developer",
    "Full-Stack Developer",
    "Full-Stack Developer Riyadh",
    "Next.js Developer",
    "Next.js Developer Riyadh",
    "Next.js Developer Saudi Arabia",
    "React Developer",
    "React Developer Saudi Arabia",
    "TypeScript Developer",
    "Frontend Developer Riyadh",
    "Web Developer Saudi Arabia",
    "Node.js Developer",
    "Three.js Developer",
    "Shopify Developer",
    "Bilingual Developer Arabic English",
    "RTL Website Developer",
    "Freelance Next.js Developer",
    "Hire Full-Stack Developer Riyadh",
    "Web Performance & SEO Optimization",
  ],
  locale: "en_US",
  email: "ahmedymcareer@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmed-mohamed-528b46302",
  github: "https://github.com/AhmedMohamedxp23",
};
