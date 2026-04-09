/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DraftingCompass } from "lucide-react";

export interface BentoGridProps {
  circuitImage: string;
}

export default function BentoGrid({ circuitImage }: BentoGridProps) {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
        <div className="md:col-span-2 md:row-span-2 bg-surface-muted relative overflow-hidden group min-h-[400px]">
          {circuitImage ? (
            <>
              <img
                src={circuitImage}
                alt="Circuit board close up"
                width={800}
                height={800}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute bottom-8 left-8">
                <span className="font-display text-[10px] uppercase tracking-widest text-on-accent bg-accent px-2 py-1">Layer 01: Core</span>
              </div>
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-3">
              <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ink-faint">Coming Soon</span>
              <div className="h-[1px] w-12 bg-outline-variant" />
            </div>
          )}
        </div>
        <div className="md:col-span-2 bg-surface-lowest p-12 flex flex-col justify-center border-[0.5px] border-outline-variant/30">
          <h3 className="font-display text-3xl font-bold mb-6 tracking-tighter">Digital Vellum</h3>
          <p className="text-ink-muted text-sm leading-relaxed max-w-sm">
            Each interactive surface mimics the translucency and stacking properties of architectural paper, creating a sense of history and depth within the digital workspace.
          </p>
        </div>
        <div className="bg-surface-muted flex items-center justify-center p-8 group overflow-hidden min-h-[200px]">
          <DraftingCompass className="text-ink-faint group-hover:scale-125 transition-transform duration-700" size={64} strokeWidth={1} aria-hidden="true" />
        </div>
        {/* Stats cell uses contrast tokens — inverts in dark mode */}
        <div className="bg-contrast text-on-contrast p-8 flex flex-col justify-end min-h-[200px]">
          <span className="font-display text-4xl font-bold">128</span>
          <span className="font-display text-[10px] uppercase tracking-widest opacity-60">Modular Components</span>
        </div>
      </div>
    </section>
  );
}
