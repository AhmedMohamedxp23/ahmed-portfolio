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
  title: "Ahmed Mohamed — Full-Stack Developer in Riyadh",
  description:
    "Full-stack developer shipping bilingual (AR/EN), production Next.js products end-to-end — from brief to launch. Next.js, TypeScript, Node.js, Three.js.",
  keywords: [
    "Ahmed Mohamed",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer Riyadh",
    "Web Developer Saudi Arabia",
    "Node.js Developer",
    "Three.js Developer",
    "Bilingual Developer AR EN",
    "Freelance Next.js Developer",
  ],
  locale: "en_US",
  email: "ahmedymcareer@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmed-mohamed-528b46302",
  github: "https://github.com/AhmedMohamedxp23",
};
