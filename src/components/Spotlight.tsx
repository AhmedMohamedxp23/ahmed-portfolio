"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

export default function Spotlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const zoneRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const zone = zoneRef.current;
    if (!zone) return;
    const r = zone.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;

    zone.querySelectorAll<HTMLElement>("[data-glow]").forEach((g, i) => {
      const d = 26 + i * 12;
      g.style.translate = `${x * d}px ${y * d}px`;
    });
    zone.querySelectorAll<HTMLElement>("[data-parallax]").forEach((l) => {
      const d = parseFloat(l.dataset.parallax ?? "12");
      l.style.transform = `translate3d(${-x * d}px, ${-y * d}px, 0) rotateX(${
        y * -3
      }deg) rotateY(${x * 3}deg)`;
      l.style.transition = "transform .5s cubic-bezier(.2,.7,.2,1)";
    });
  };

  const handleLeave = () => {
    const zone = zoneRef.current;
    if (!zone) return;
    zone
      .querySelectorAll<HTMLElement>("[data-glow]")
      .forEach((g) => (g.style.translate = "0 0"));
    zone
      .querySelectorAll<HTMLElement>("[data-parallax]")
      .forEach((l) => (l.style.transform = "none"));
  };

  return (
    <div
      ref={zoneRef}
      className={className}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {children}
    </div>
  );
}
