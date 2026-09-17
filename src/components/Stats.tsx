import Reveal from "./Reveal";
import Counter from "./Counter";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <Reveal>
      <section
        id="impact"
        aria-labelledby="impact-heading"
        className="scroll-mt-20 border-y border-line bg-line"
      >
        <h2 id="impact-heading" className="sr-only">
          Impact &amp; Results
        </h2>
        <div className="grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label} className="bg-bg px-5 py-7 sm:px-[26px]">
            <div
              className={`font-display text-[34px] font-bold leading-none tracking-[-0.03em] sm:text-[42px] ${
                s.accent === "lime"
                  ? "text-lime"
                  : s.accent === "violet"
                    ? "text-violet"
                    : "text-ink"
              }`}
            >
              {s.prefix}
              <Counter target={s.value} />
              {s.suffix}
            </div>
            <div className="mt-1.5 text-[10.5px] leading-[1.6] text-muted">
              {s.label}
              <br />
              {s.sub}
            </div>
          </div>
        ))}
        </div>
      </section>
    </Reveal>
  );
}
