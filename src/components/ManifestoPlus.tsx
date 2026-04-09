/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";

export interface ManifestoPlusItem {
  id: string;
  text: string;
}

export interface ManifestoPlusProps {
  label?: string;
  title?: string;
  items?: ManifestoPlusItem[];
  headerExpanded?: boolean;
}

const DEFAULT_ITEMS: ManifestoPlusItem[] = [
  {
    id: "01 / REDUCTION",
    text: "We believe that complexity is a failure of design. Our approach starts by stripping away the non-essential until only the structural truth remains.",
  },
  {
    id: "02 / PRECISION",
    text: "Every pixel is a decision. Every white space is a breath. We utilize mathematical grids to ensure perfect optical balance across all digital canvases.",
  },
  {
    id: "03 / HONESTY",
    text: "Digital materials should not pretend to be physical ones. We celebrate the raw, the monochromatic, and the functional nature of the machine.",
  },
];

export default function ManifestoPlus({
  label = "Manifesto",
  title = "The Linear Process",
  items = DEFAULT_ITEMS,
  headerExpanded = false,
}: ManifestoPlusProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const rootMarginTop = headerExpanded ? -144 : -80;
    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { rootMargin: `${rootMarginTop}px 0px 0px 0px`, threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [headerExpanded]);

  return (
    <section id="process" className="px-6 md:px-12 max-w-7xl mx-auto">
      {/* Sentinel — when this scrolls above the nav, the heading is "stuck" */}
      <div ref={sentinelRef} className="h-0 w-0" aria-hidden="true" />

      <div className="grid grid-cols-12 gap-6 md:gap-12 items-start">
        <div
          className={`
            col-span-12 md:col-span-4
            sticky md:top-32
            ${headerExpanded ? "top-[calc(8rem_+_var(--sat))]" : "top-[calc(4rem_+_var(--sat))]"}
            z-10 md:z-auto
            md:bg-transparent md:border-b-0
            -mx-6 px-6 md:mx-0 md:px-0
            origin-top-left
            transition-all duration-500 ease-out
            ${isStuck
              ? "bg-surface border-b border-outline-variant py-3"
              : "bg-transparent border-b border-transparent py-3 md:py-0"
            }
          `}
        >
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-ink-subtle border-l-2 border-accent pl-4 mb-1 md:mb-4 block">
            {label}
          </span>
          <h2
            className={`
              font-display font-bold tracking-tighter uppercase text-balance
              origin-top-left transition-all duration-500 ease-out
              md:text-5xl md:leading-[0.9]
              ${isStuck ? "text-lg leading-none" : "text-5xl leading-[0.9]"}
            `}
          >
            {title}
          </h2>
        </div>

        <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-16 pt-4 md:pt-0">
          {items.map((item) => (
            <div key={item.id} className="space-y-6">
              <span className="font-display text-xs font-medium text-ink-faint">{item.id}</span>
              <p className="text-2xl leading-snug text-ink">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
