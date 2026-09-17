import { stack } from "@/lib/data";

export default function Marquee() {
  const items = [...stack, ...stack];
  return (
    <div className="overflow-hidden border-y border-line bg-white/[0.02] py-3.5">
      <div className="animate-marquee inline-flex gap-[26px] whitespace-nowrap text-[11.5px] tracking-[0.06em] text-muted will-change-transform">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-[26px]">
            {item}
            <span className="text-lime">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
