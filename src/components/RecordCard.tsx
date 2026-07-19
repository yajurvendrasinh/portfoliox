/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight } from "lucide-react";

export interface RecordCardProps {
  image?: string;
  video?: string;
  title: string;
  category: string;
  year: string;
  index: string;
  onClick?: () => void;
}

export default function RecordCard({ image, video, title, category, year, index, onClick }: RecordCardProps) {
  return (
    <button className="relative aspect-video group overflow-hidden bg-surface-high cursor-pointer text-left w-full" onClick={onClick}>
      {video ? (
        <video
          key={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-100 transition-[filter] duration-700 group-hover:grayscale-0 group-hover:brightness-100"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : image ? (
        <img
          src={image}
          alt={title}
          width={800}
          height={450}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover brightness-100 transition-[filter] duration-700 group-hover:grayscale-0 group-hover:brightness-100"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3">
          <span className="font-display text-[11px] uppercase tracking-[0.3em] text-ink-faint">Coming Soon</span>
          <div className="h-[1px] w-12 bg-outline-variant" />
        </div>
      )}
      <div className="absolute inset-0 bg-black dark:bg-accent flex flex-col justify-between p-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] text-white dark:text-on-accent">
        <div className="flex justify-between items-start">
          <span className="font-display text-[11px] tracking-[0.2em] uppercase text-zinc-400 dark:text-black/60">Record_{index}</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </div>
        <div>
          <h4 className="font-display text-4xl font-bold tracking-tighter uppercase mb-6 leading-none">{title}</h4>
          <div className="grid grid-cols-2 gap-8 border-t border-white/10 dark:border-black/20 pt-8">
            <div>
              <span className="block font-display text-[11px] tracking-[0.2em] uppercase text-zinc-500 dark:text-black/50 mb-2">Category</span>
              <span className="text-md font-medium">{category}</span>
            </div>
            <div>
              <span className="block font-display text-[11px] tracking-[0.2em] uppercase text-zinc-500 dark:text-black/50 mb-2">Year</span>
              <span className="text-md font-medium">{year}</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
