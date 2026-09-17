import Reveal from "./Reveal";
import { howIWork } from "@/lib/data";

export default function HowIWork() {
  return (
    <Reveal>
      <section aria-labelledby="how-heading" className="px-5 pb-12 sm:px-9">
        <h2 id="how-heading" className="sr-only">
          How I Work
        </h2>
        <div className="mb-[18px] text-[11px] text-muted">
          {"// how_i_work — the reason clients hand over the whole thing"}
        </div>
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {howIWork.map((step) => (
            <div
              key={step.n}
              className={`rounded-2xl border p-5 ${
                step.accent === "lime"
                  ? "border-line bg-linear-to-br from-lime/[0.07] to-transparent"
                  : step.accent === "violet"
                    ? "border-violet/28 bg-linear-to-br from-violet/[0.08] to-transparent"
                    : "border-line"
              }`}
            >
              <div
                className={`mb-3 font-mono text-[13px] font-bold ${
                  step.accent === "violet" ? "text-violet" : "text-lime"
                }`}
              >
                {step.n}
              </div>
              <h3 className="font-display mb-1.5 text-base font-semibold">
                {step.title}
              </h3>
              <p className="text-[11.5px] leading-[1.7] text-muted-2">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
