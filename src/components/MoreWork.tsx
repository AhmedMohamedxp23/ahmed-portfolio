import Image from "next/image";
import Reveal from "./Reveal";
import { moreWork } from "@/lib/data";

export default function MoreWork() {
  return (
    <Reveal>
      <section aria-labelledby="more-work-heading" className="px-5 pb-12 sm:px-9">
        <h2 id="more-work-heading" className="sr-only">
          More Work
        </h2>
        <div className="mb-[18px] flex items-baseline justify-between">
          <div className="text-[11px] text-muted">{"// more_work"}</div>
          <div className="text-[11px] text-muted/80">04 more →</div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {moreWork.map((item) => {
            const Wrapper = item.url ? "a" : "div";
            const linkProps = item.url
              ? {
                  href: item.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Wrapper
                key={item.title}
                {...linkProps}
                className={`group block rounded-2xl border border-line bg-panel p-5 transition-all duration-500 ease-out hover:-translate-y-1.5 ${
                  item.accent === "violet"
                    ? "hover:border-violet/50"
                    : "hover:border-lime/45"
                }`}
              >
                <div
                  className={`relative mb-4 aspect-[16/10] overflow-hidden rounded-xl ${
                    item.accent === "violet" ? "bg-violet/12" : "bg-panel-2"
                  }`}
                >
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={`${item.title} (${item.meta}) — full-stack web development project screenshot by Ahmed Mohamed`}
                      fill
                      quality={90}
                      placeholder={item.isIllustration ? "empty" : "blur"}
                      sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw"
                      className={
                        item.isIllustration
                          ? "object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-105"
                          : "object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      }
                    />
                  )}
                  {item.mobileImage && (
                    <div className="absolute bottom-3 right-3 h-[132px] w-[66px] overflow-hidden rounded-xl border border-line-soft bg-panel shadow-[0_14px_30px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-hover:-translate-y-1">
                      <Image
                        src={item.mobileImage}
                        alt={`${item.title} mobile responsive view`}
                        fill
                        quality={90}
                        placeholder="blur"
                        sizes="66px"
                        className="object-cover object-top"
                      />
                    </div>
                  )}
                </div>
                <h3 className="font-display text-[19px] font-semibold tracking-[-0.01em]">
                  {item.title}
                </h3>
                <div className="mb-2.5 mt-1 text-[11px] text-muted">
                  {item.meta}
                </div>
                <p className="mb-3 text-[12.5px] leading-[1.65] text-muted-2">
                  {item.description}
                </p>
                <div
                  className={`text-[11px] font-medium ${
                    item.accent === "violet" ? "text-violet" : "text-lime"
                  }`}
                >
                  {item.result}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}
