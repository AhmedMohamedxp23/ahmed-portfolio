import Reveal from "./Reveal";
import Spotlight from "./Spotlight";
import { contact } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function ContactFooter() {
  return (
    <Reveal>
      <section id="contact" className="scroll-mt-20 px-5 pb-12 sm:px-9">
        <Spotlight className="relative overflow-hidden rounded-[20px] bg-linear-to-br from-lime/45 via-violet/40 to-white/[0.06] p-px">
          <div className="relative overflow-hidden rounded-[19px] bg-panel-2 p-7 sm:p-11">
            <div
              data-glow
              className="animate-aurora pointer-events-none absolute -bottom-[60%] left-[20%] h-[520px] w-[520px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(190,242,79,.16), transparent 62%)",
              }}
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-[18px] inline-flex items-center gap-2 text-[10.5px] text-lime">
                  <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-lime" />
                  REPLIES WITHIN 24H · AR / EN
                </div>
                <h2 className="font-display mb-[18px] max-w-[640px] text-[34px] font-bold leading-[1.04] tracking-[-0.035em] sm:text-[54px]">
                  Got a product that needs shipping?
                </h2>
                <div className="flex flex-wrap gap-4 text-[12.5px] text-muted-2 sm:gap-[26px]">
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-ink"
                  >
                    {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    className="hover:text-ink"
                  >
                    {contact.phone}
                  </a>
                  <span>{contact.location}</span>
                </div>
              </div>
              <div className="flex min-w-[210px] flex-col gap-2.5">
                <a
                  href={`mailto:${contact.email}`}
                  className="rounded-[9px] bg-lime px-[22px] py-[15px] text-center text-[11.5px] font-bold text-bg transition-transform duration-300 hover:-translate-y-0.5"
                >
                  SEND A MESSAGE →
                </a>
                <a
                  href="/Ahmed_Mohamed_CV.pdf"
                  download
                  className="rounded-[9px] border border-line-soft px-[22px] py-[15px] text-center text-[11.5px] font-medium text-ink transition-colors hover:border-violet hover:text-violet"
                >
                  DOWNLOAD CV ↓
                </a>
                <div className="flex gap-2.5">
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="flex-1 rounded-[9px] border border-line-soft px-[14px] py-[15px] text-center text-[11.5px] font-medium text-ink transition-colors hover:border-violet hover:text-violet"
                  >
                    LINKEDIN ↗
                  </a>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="flex-1 rounded-[9px] border border-line-soft px-[14px] py-[15px] text-center text-[11.5px] font-medium text-ink transition-colors hover:border-violet hover:text-violet"
                  >
                    GITHUB ↗
                  </a>
                </div>
              </div>
            </div>

            <div className="relative mt-8 overflow-hidden">
              <div className="font-display whitespace-nowrap text-[15vw] font-bold leading-none tracking-[-0.045em] text-transparent [-webkit-text-stroke:1px_rgba(238,242,245,0.16)] sm:text-[96px]">
                AHMED MOHAMED
                <span className="text-lime [-webkit-text-stroke:0]">.</span>
              </div>
            </div>
            <footer className="relative mt-[18px] flex flex-col gap-2 text-[11px] text-muted sm:flex-row sm:justify-between">
              <span>© {new Date().getFullYear()} Ahmed Mohamed</span>
              <span>
                built with next.js · deployed on vercel · ⌘K to navigate
              </span>
            </footer>
          </div>
        </Spotlight>
      </section>
    </Reveal>
  );
}
