import Image from "next/image";
import Reveal from "./Reveal";
import { featuredCase } from "@/lib/data";

export default function FeaturedCase() {
  return (
    <Reveal>
      <section
        id="work"
        aria-labelledby="work-heading"
        className="scroll-mt-20 px-5 pb-10 pt-12 sm:px-9 sm:pt-14"
      >
        <h2 id="work-heading" className="sr-only">
          Selected Work
        </h2>
        <div className="mb-5 flex items-baseline justify-between gap-3">
          <div className="text-[11px] text-muted">
            {"// featured_case_study · 01 of 05"}
          </div>
          <a
            href={featuredCase.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-lime hover:underline"
          >
            visit the live site ↗
          </a>
        </div>

        <div className="rounded-2xl bg-linear-to-br from-lime/32 to-white/[0.07] p-px">
          <div className="overflow-hidden rounded-[15px] bg-panel">
            <div className="grid lg:grid-cols-2">
              <div className="p-7 sm:p-8">
                <div className="mb-4 flex flex-wrap gap-2">
                  {featuredCase.tags.map((tag) => (
                    <span
                      key={tag}
                      className={
                        tag === "LIVE · 2026"
                          ? "rounded-full bg-lime/12 px-2.5 py-1.5 text-[11px] font-medium text-lime"
                          : "rounded-full border border-line-soft px-2.5 py-1.5 text-[11px] font-medium text-muted-2"
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display mb-2.5 text-[32px] font-bold leading-[1.04] tracking-[-0.028em] sm:text-[40px]">
                  {featuredCase.title}
                </h3>
                <p className="mb-5 text-[13px] leading-[1.8] text-muted">
                  {featuredCase.description}
                </p>
                <div className="flex flex-col gap-3 border-b border-line pb-5 text-[12.5px] leading-[1.7] text-muted-2">
                  {featuredCase.points.map((point) => (
                    <div key={point} className="flex gap-2.5">
                      <span className="text-lime">▸</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 py-5">
                  {featuredCase.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-[22px] font-bold">
                        {m.value}
                      </div>
                      <div className="mt-1 text-[11px] leading-[1.55] text-muted">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {featuredCase.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/[0.06] px-2.5 py-1.5 text-[10.5px] text-muted-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={featuredCase.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block min-h-[300px] overflow-hidden border-t border-line bg-panel-2 lg:min-h-[440px] lg:border-l lg:border-t-0"
              >
                <div className="absolute inset-5 overflow-hidden rounded-[10px] border border-line-soft sm:inset-[22px]">
                  <Image
                    src={featuredCase.desktopImage}
                    alt="Eagle Eye Trading Est. desktop homepage screenshot"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-6 right-6 hidden h-[236px] w-[118px] overflow-hidden rounded-2xl border border-line-soft bg-panel shadow-[0_20px_50px_rgba(0,0,0,0.6)] sm:block">
                  <Image
                    src={featuredCase.mobileImage}
                    alt="Eagle Eye Trading Est. mobile homepage screenshot"
                    fill
                    sizes="118px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="animate-sheen pointer-events-none absolute left-0 top-0 h-full w-[45%] bg-linear-to-r from-transparent via-white/[0.06] to-transparent" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
