import type { StaticImageData } from "next/image";
import eagleEyeDesktopImg from "../../public/projects/eagle-eye-desktop.jpg";
import eagleEyeMobileImg from "../../public/projects/eagle-eye-mobile.jpg";
import amalEduDesktopImg from "../../public/projects/amal-edu-desktop.jpg";
import amalEduMobileImg from "../../public/projects/amal-edu-mobile.jpg";
import thomsonHealthDesktopImg from "../../public/projects/thomson-health-desktop.jpg";
import thomsonHealthMobileImg from "../../public/projects/thomson-health-mobile.jpg";
import behIdesignDesktopImg from "../../public/projects/beh-idesign-desktop.jpg";
import behIdesignMobileImg from "../../public/projects/beh-idesign-mobile.jpg";
import qrQueueImg from "../../public/projects/qr-queue.svg";

export const nav = [
  { label: "work", href: "#work" },
  { label: "impact", href: "#impact" },
  { label: "path", href: "#path" },
  { label: "contact", href: "#contact" },
];

export const shippedFor = [
  "Alshamelah Schools",
  "Edense",
  "Eagle Eye Est.",
  "Amal Edu",
  "Thomson Health",
];

export const stack = [
  "NEXT.JS",
  "TYPESCRIPT",
  "REACT",
  "NODE.JS",
  "EXPRESS",
  "MYSQL",
  "THREE.JS",
  "GSAP",
  "TAILWIND",
  "STORYBLOK",
  "SHOPIFY",
  "VERCEL",
  "LIGHTHOUSE",
];

type Stat = {
  prefix: string;
  value: number;
  suffix: string;
  label: string;
  sub: string;
  accent?: "lime" | "violet";
};

export const stats: Stat[] = [
  {
    prefix: "-",
    value: 25,
    suffix: "%",
    label: "page load time",
    sub: "Lighthouse-verified",
    accent: "lime",
  },
  {
    prefix: "+",
    value: 20,
    suffix: "%",
    label: "maintainability",
    sub: "per team code review",
  },
  {
    prefix: "",
    value: 70,
    suffix: "+",
    label: "weekly portal users",
    sub: "on auth I engineered",
  },
  {
    prefix: "",
    value: 15,
    suffix: "+",
    label: "bugs caught pre-release",
    sub: "UAT + regression",
  },
  {
    prefix: "",
    value: 5,
    suffix: "",
    label: "client products",
    sub: "live in production",
    accent: "violet",
  },
];

export const featuredCase = {
  tags: ["LIVE · 2026", "SOLO BUILD", "EN / AR RTL"],
  title: "Eagle Eye Trading Est.",
  description:
    "Bilingual corporate site for an electrical & security systems integrator. Requirements, design, build, deploy and client iteration — owned end-to-end.",
  points: [
    "Static generation per locale with true RTL layout and localized SEO metadata.",
    "Serverless RFQ pipeline on the Resend API — no server to maintain, quotes hit the inbox.",
    "Three.js hero and GSAP scroll timeline, watched with Vercel Speed Insights.",
  ],
  metrics: [
    { value: "2", label: "languages, one codebase" },
    { value: "6 wks", label: "brief to launch" },
    { value: "0", label: "servers to maintain" },
  ],
  tech: ["next.js", "typescript", "three.js", "gsap", "resend", "vercel"],
  url: "https://eagleeye-est.com",
  desktopImage: eagleEyeDesktopImg,
  mobileImage: eagleEyeMobileImg,
};

type WorkItem = {
  tag: string;
  title: string;
  meta: string;
  description: string;
  result: string;
  accent?: "lime" | "violet";
  url?: string;
  image?: StaticImageData;
  mobileImage?: StaticImageData;
  isIllustration?: boolean;
};

export const moreWork: WorkItem[] = [
  {
    tag: "amaledu.com",
    title: "Amal Educational",
    meta: "next.js · storyblok · 2025",
    description:
      "University search with advanced filtering; client edits all content themselves.",
    result: "+15% load speed →",
    accent: "lime",
    url: "https://amaledu.com",
    image: amalEduDesktopImg,
    mobileImage: amalEduMobileImg,
  },
  {
    tag: "storefront",
    title: "Thomson Health",
    meta: "shopify · CRO · 2024",
    description:
      "Trust signals, guided category nav and a shorter add-to-cart path.",
    result: "+10–20% sales →",
    accent: "lime",
    url: "https://my-shop.thomsonhealth.com",
    image: thomsonHealthDesktopImg,
    mobileImage: thomsonHealthMobileImg,
  },
  {
    tag: "behidesign",
    title: "Beh IDesign",
    meta: "react · next.js · 2024",
    description:
      "Multi-step inquiry collapsed into one form, piped to the client's Excel flow.",
    result: "~95% delivery →",
    accent: "lime",
    url: "https://behidesign.vercel.app",
    image: behIdesignDesktopImg,
    mobileImage: behIdesignMobileImg,
  },
  {
    tag: "qr queue UI",
    title: "QR Queue System",
    meta: "react · express · mysql",
    description:
      "Real-time queue generation and status updates for 20 concurrent users.",
    result: "35 e2e tests →",
    accent: "violet",
    image: qrQueueImg,
    isIllustration: true,
  },
];

type TimelineEntry = {
  date: string;
  role: string;
  body: string;
  org?: string;
  head?: boolean;
  accent?: "lime" | "violet";
  isEducation?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    date: "aug 2025 — present",
    head: true,
    role: "Frontend Developer Specialist",
    org: "Alshamelah International Schools · Riyadh",
    body: "Rebuilt 6 core pages incl. admissions and announcements; portal-wide metadata and navigation restructure for SEO; automated auth module for 70+ weekly users; mentored 40+ students in Python.",
    accent: "lime",
  },
  {
    date: "jul 2024 — jan 2025",
    role: "Web Developer Intern",
    org: "Edense Sdn. Bhd. · Kuala Lumpur",
    body: "Refactored 5–10 React/Next.js components into reusable modules (+20% maintainability); -25% load time; validated REST payloads in Postman; weekly UAT and regression cycles with the product team.",
    accent: "violet",
  },
  {
    date: "jan 2022 — jun 2022",
    role: "Technical Support Intern",
    org: "Engineering Consultant Group · Doha",
    body: "Supported 50+ enterprise users across hardware, software and network issues; -20% downtime through preventive maintenance policy.",
  },
  {
    date: "2022 — 2026 · education",
    role: "MSc Information Technology · BSc Software Engineering",
    body: "INTI International University — CGPA 3.67 · Multimedia University — CGPA 3.11\nCertified: Advanced Next.js & React (2026)",
    isEducation: true,
  },
];

export const capabilities = [
  { label: "React · Next.js · TypeScript", tag: "daily", value: 92 },
  { label: "Component architecture · refactoring", tag: "daily", value: 86 },
  { label: "Node.js · Express · REST · MySQL", tag: "shipped", value: 74 },
  { label: "Performance & SEO auditing", tag: "measured", value: 80 },
  { label: "UAT · regression · cross-browser QA", tag: "structured", value: 78 },
  { label: "Three.js · GSAP motion", tag: "production", value: 66 },
];

export const proofPoints = [
  {
    label: "Eagle Eye Trading Est.",
    fact: "Owned end-to-end — requirements to launch in 6 weeks, bilingual AR/EN with true RTL.",
    url: "https://eagleeye-est.com",
    accent: "lime",
  },
  {
    label: "Amal Educational",
    fact: "Client edits every page themselves post-handoff — zero developer dependency for content.",
    url: "https://amaledu.com",
    accent: "violet",
  },
];

export const howIWork = [
  {
    n: "01",
    title: "Scope the brief",
    body: "Requirements, content model and success metric agreed before a line of code.",
    accent: "lime",
  },
  {
    n: "02",
    title: "Design & structure",
    body: "Component architecture first — reusable modules, localization and SEO planned in.",
  },
  {
    n: "03",
    title: "Build & test",
    body: "UAT and regression passes, REST payload checks, cross-browser sweeps before release.",
  },
  {
    n: "04",
    title: "Ship & watch",
    body: "Deployed on Vercel with Analytics and Speed Insights — then iterated with the client.",
    accent: "violet",
  },
];

export const contact = {
  email: "ahmedymcareer@gmail.com",
  phone: "+966 595 788 323",
  location: "Riyadh, SA",
};

export const badges = [
  { label: "MSc IT · CGPA 3.67", dot: "lime" },
  { label: "2 yrs in production", dot: "violet" },
  { label: "AR / EN · RTL native" },
  { label: "Riyadh · GMT+3" },
];
