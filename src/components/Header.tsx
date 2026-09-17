import Image from "next/image";
import { nav } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-line bg-bg/85 px-5 py-3.5 backdrop-blur-lg sm:px-9">
      <div className="flex items-center gap-3.5">
        <div className="h-8 w-8 shrink-0 rounded-[9px] bg-linear-to-br from-lime to-violet p-[1.5px]">
          <Image
            src="/avatar.png"
            alt="Ahmed Mohamed, full-stack developer"
            width={32}
            height={32}
            className="block h-full w-full rounded-[7.5px] object-cover"
            priority
          />
        </div>
        <div>
          <div className="font-display text-[12.5px] font-semibold tracking-wide text-ink">
            Ahmed Mohamed
          </div>
          <div className="text-[10.5px] text-muted">
            full-stack developer · riyadh
          </div>
        </div>
      </div>

      <nav className="hidden items-center gap-1 text-[11.5px] text-muted md:flex">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-1.5 transition-colors hover:bg-white/[0.07] hover:text-ink"
          >
            {item.label}
          </a>
        ))}
        <span className="ml-2 flex items-center gap-1.5 rounded-md border border-line-soft px-2.5 py-1.5 text-muted-2">
          ⌘K<span className="text-muted">jump to</span>
        </span>
      </nav>

      <a
        href="/Ahmed_Mohamed_CV.pdf"
        download
        className="rounded-md bg-lime px-4 py-2 text-[11.5px] font-bold text-bg transition-colors hover:bg-[#d2ff6b]"
      >
        CV ↓
      </a>
    </header>
  );
}
