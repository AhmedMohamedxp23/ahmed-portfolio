# Ahmed Mohamed — Portfolio

Personal portfolio site for Ahmed Mohamed, a full-stack developer based in Riyadh, Saudi Arabia.

**Live:** [ahmedmohamed-portfolio-lovat.vercel.app](https://ahmedmohamed-portfolio-lovat.vercel.app)

## Features

- Single-page portfolio with animated hero, impact stats, featured case study, project grid, career timeline and capabilities, and a contact CTA
- Real screenshots (desktop + mobile) for each project, statically imported for automatic blur placeholders and zero layout shift
- Full technical SEO: file-based `sitemap.xml` / `robots.txt`, programmatically generated Open Graph/Twitter images and favicons via `next/og`, JSON-LD structured data (`Person` + `WebSite`)
- Vercel Web Analytics and Speed Insights
- Scroll-reveal, count-up stats, and pointer-driven parallax/spotlight effects built as small React components (no animation library)

## Tech Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · next/font · next/image · next/og

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Deployment

Deployed on [Vercel](https://vercel.com). Set `NEXT_PUBLIC_SITE_URL` in production once a custom domain is attached (see `.env.example`) — until then, SEO metadata falls back to the Vercel-assigned URL automatically.
