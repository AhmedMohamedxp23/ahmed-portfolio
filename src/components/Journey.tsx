import Reveal from "./Reveal";
import { capabilities, proofPoints, timeline } from "@/lib/data";

export default function Journey() {
  return (
    <Reveal>
      <section
        id="path"
        aria-labelledby="path-heading"
        className="grid scroll-mt-20 gap-10 px-5 pb-14 pt-2.5 sm:px-9 lg:grid-cols-[1.04fr_.96fr] lg:gap-10"
      >
        <h2 id="path-heading" className="sr-only">
          Experience, Capabilities &amp; Shipped Projects
        </h2>
        <div>
          <div className="mb-[22px] text-[11px] text-muted">
            $ git log --author=&quot;ahmed&quot; --career
          </div>
          <div>
            {timeline.map((t, i) => (
              <div key={t.role} className="grid grid-cols-[20px_1fr] gap-[18px]">
                <div className="flex flex-col items-center">
                  <span
                    className={
                      t.head
                        ? "h-[11px] w-[11px] rounded-full bg-lime shadow-[0_0_0_5px_rgba(190,242,79,0.14)]"
                        : t.accent === "violet"
                          ? "h-[11px] w-[11px] rounded-full border border-violet"
                          : "h-[11px] w-[11px] rounded-full border border-line-soft"
                    }
                  />
                  {i < timeline.length - 1 && (
                    <span
                      className={
                        t.head
                          ? "w-px flex-1 bg-linear-to-b from-lime/50 to-line-soft"
                          : "w-px flex-1 bg-line-soft"
                      }
                    />
                  )}
                </div>
                <div className={i < timeline.length - 1 ? "pb-[26px]" : ""}>
                  <div
                    className={`flex items-center gap-2 text-[10.5px] ${
                      t.head
                        ? "text-lime"
                        : t.accent === "violet"
                          ? "text-violet"
                          : "text-muted"
                    }`}
                  >
                    {t.date}
                    {t.head && (
                      <span className="rounded-md bg-lime/12 px-1.5 py-0.5">
                        HEAD
                      </span>
                    )}
                  </div>
                  <h3 className="font-display mb-0.5 mt-1.5 text-[19px] font-semibold">
                    {t.role}
                  </h3>
                  {t.org && (
                    <div className="mb-2 text-[11.5px] text-muted">
                      {t.org}
                    </div>
                  )}
                  <p
                    className={`whitespace-pre-line text-[12.5px] leading-[1.75] text-muted-2 ${
                      t.isEducation ? "mt-1.5" : ""
                    }`}
                  >
                    {t.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-[22px] text-[11px] text-muted">{"// capabilities"}</div>
          <div className="mb-7 flex flex-col gap-3.5">
            {capabilities.map((c) => (
              <div key={c.label}>
                <div className="mb-1.5 flex justify-between text-[11.5px] text-ink">
                  <span>{c.label}</span>
                  <span className="text-muted">{c.tag}</span>
                </div>
                <div className="h-1 rounded-full bg-white/[0.09]">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-lime to-violet"
                    style={{ width: `${c.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mb-3.5 text-[11px] text-muted">
            {"// shipped_and_live"}
          </div>
          <div className="flex flex-col gap-2.5">
            {proofPoints.map((p) => (
              <a
                key={p.label}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block rounded-xl border border-line p-5 transition-colors ${
                  p.accent === "violet"
                    ? "bg-linear-to-br from-violet/[0.07] to-transparent hover:border-violet/45"
                    : "bg-linear-to-br from-lime/[0.06] to-transparent hover:border-lime/45"
                }`}
              >
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="font-display text-[13.5px] font-semibold text-ink">
                    {p.label}
                  </span>
                  <span
                    className={`text-[10.5px] opacity-0 transition-opacity group-hover:opacity-100 ${
                      p.accent === "violet" ? "text-violet" : "text-lime"
                    }`}
                  >
                    visit live ↗
                  </span>
                </div>
                <p className="text-[12.5px] leading-[1.7] text-muted-2">
                  {p.fact}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
