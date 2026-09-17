import Image from "next/image";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";
import { badges, contact, shippedFor } from "@/lib/data";

export default function Hero() {
  return (
    <Spotlight className="relative overflow-hidden bg-grid px-5 pb-14 pt-16 sm:px-9 sm:pt-[70px]">
      <div
        data-glow
        className="pointer-events-none absolute -left-[6%] -top-[24%] h-[620px] w-[620px] animate-aurora rounded-full blur-[10px]"
        style={{
          background:
            "radial-gradient(circle, rgba(190,242,79,.17), transparent 62%)",
        }}
      />
      <div
        data-glow
        className="animate-aurora pointer-events-none absolute -right-[2%] -bottom-[30%] h-[560px] w-[560px] rounded-full blur-[10px] [animation-direction:reverse] [animation-duration:21s]"
        style={{
          background:
            "radial-gradient(circle, rgba(155,140,255,.2), transparent 62%)",
        }}
      />

      <div className="relative grid gap-10 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-12">
        <Reveal>
          <h1 className="font-display mb-5 text-[42px] font-bold leading-[1.02] tracking-[-0.035em] sm:text-[58px] lg:text-[76px]">
            I take briefs to
            <br />
            <span className="bg-linear-to-r from-lime to-violet bg-clip-text text-transparent">
              production
            </span>{" "}
            — alone
            <br />
            if that&apos;s the job.
          </h1>
          <p className="mb-7 max-w-[540px] text-[13.5px] leading-[1.85] text-muted">
            Full-stack developer, two years shipping live client products.
            Next.js · TypeScript · Node · Three.js. Master&apos;s in IT. I
            measure what I ship: load time, maintainability, sales.
          </p>
          <div className="mb-8 flex flex-wrap gap-2.5">
            <a
              href="/Ahmed_Mohamed_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-[9px] bg-lime px-6 py-[15px] text-[11.5px] font-bold tracking-[0.03em] text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(190,242,79,0.25)]"
            >
              DOWNLOAD CV<span>↓</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[9px] border border-line-soft px-6 py-[15px] text-[11.5px] font-medium text-ink transition-colors hover:border-violet hover:text-violet"
            >
              BOOK A CALL — HIRE ME<span>↗</span>
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4 border-t border-line pt-5">
            <span className="whitespace-nowrap text-[11px] tracking-[0.08em] text-muted">
              SHIPPED FOR
            </span>
            <div className="flex flex-wrap gap-2">
              {shippedFor.map((name) => (
                <span
                  key={name}
                  className="rounded-md border border-line bg-white/5 px-2.5 py-1.5 text-[10.5px] text-muted-2"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div
          data-parallax="10"
          className="relative flex flex-col gap-4"
          style={{ willChange: "transform" }}
        >
          <div className="relative aspect-square sm:aspect-[1/1.02]">
            <div className="absolute left-1/2 top-[52%] aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(190,242,79,.24),rgba(155,140,255,.14)_52%,transparent_72%)]" />
            <div className="absolute left-1/2 top-[52%] aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 animate-spin-cw rounded-full border border-lime/30">
              <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-lime shadow-[0_0_14px_#bef24f]" />
            </div>
            <div className="animate-spin-ccw absolute left-1/2 top-[52%] aspect-square w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet/40">
              <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-violet shadow-[0_0_12px_#9b8cff]" />
            </div>
            <Image
              src="/cutout.png"
              alt="Ahmed Mohamed, full-stack developer based in Riyadh"
              width={520}
              height={640}
              className="absolute bottom-0 left-1/2 z-[2] w-[80%] -translate-x-1/2 drop-shadow-[0_26px_46px_rgba(0,0,0,0.65)]"
              priority
            />
            {badges.map((b, i) => {
              const pos = [
                "left-0 top-[16%]",
                "right-0 top-[38%]",
                "left-[2%] bottom-[20%]",
                "right-[4%] bottom-[8%]",
              ][i];
              const dot =
                b.dot === "lime"
                  ? "bg-lime"
                  : b.dot === "violet"
                    ? "bg-violet"
                    : null;
              return (
                <div
                  key={b.label}
                  className={`animate-bob absolute z-[3] ${pos}`}
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line-soft bg-bg/72 px-3.5 py-2 text-[11px] text-ink backdrop-blur-sm">
                    {dot && (
                      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                    )}
                    {b.label}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-lime/28 bg-linear-to-r from-lime/10 to-violet/[0.07] px-[18px] py-3.5">
            <span className="animate-pulse-dot h-2 w-2 shrink-0 rounded-full bg-lime shadow-[0_0_12px_#bef24f]" />
            <span className="text-[11.5px] leading-[1.6] text-ink">
              Open to full-time · one freelance slot open Q4 · replies within
              24h
            </span>
          </div>
          <div className="text-[11px] text-muted">{contact.email}</div>
        </div>
      </div>
    </Spotlight>
  );
}
