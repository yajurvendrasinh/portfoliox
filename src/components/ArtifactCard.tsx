/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight } from "lucide-react";

export interface ArtifactCardProps {
  className?: string;
  image: string;
  title: string;
  category: string;
  project: string;
  role: string;
  year: string;
  aspect?: string;
  onClick?: () => void;
}

export default function ArtifactCard({
  className = "",
  image,
  title,
  category,
  project,
  role,
  year,
  aspect = "aspect-[4/5]",
  onClick,
}: ArtifactCardProps) {
  return (
    <button className={`${className} group cursor-pointer text-left w-full`} onClick={onClick}>
      <div className={`relative ${aspect} bg-surface-high overflow-hidden`}>
        {image ? (
          <img
            src={image}
            alt={title}
            width={800}
            height={1000}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-[0.2,0,0,1] group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ink-faint">Coming Soon</span>
            <div className="h-[1px] w-12 bg-outline-variant" />
          </div>
        )}
        <div className="absolute inset-0 bg-black dark:bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12 text-white dark:text-on-accent">
          <div className="mb-auto">
            <span className="font-display text-[10px] tracking-[0.2em] uppercase text-zinc-400 dark:text-black/60">{project}</span>
            <h3 className="font-display text-4xl font-bold mt-2">{title}</h3>
          </div>
          <div className="grid grid-cols-2 gap-8 border-t border-zinc-800 dark:border-black/20 pt-8">
            <div>
              <p className="font-display text-[10px] uppercase text-zinc-500 dark:text-black/50 mb-1">Role</p>
              <p className="text-sm">{role}</p>
            </div>
            <div>
              <p className="font-display text-[10px] uppercase text-zinc-500 dark:text-black/50 mb-1">Year</p>
              <p className="text-sm">{year}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-start">
        <div>
          <h4 className="font-display font-bold text-lg uppercase tracking-tight">{title}</h4>
          <p className="font-display text-[10px] text-ink-subtle tracking-widest mt-1 uppercase">{category}</p>
        </div>
        <ArrowUpRight className="text-ink-faint" size={20} aria-hidden="true" />
      </div>
    </button>
  );
}
