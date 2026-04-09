/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AsymmetricDetailProps {
  image: string;
  imageAlt?: string;
  label: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export default function AsymmetricDetail({
  image,
  imageAlt = "",
  label,
  title,
  description,
  ctaText,
  ctaHref,
}: AsymmetricDetailProps) {
  return (
    <section className="mt-48 grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-6 md:px-12 max-w-7xl mx-auto">
      <div className="relative aspect-square bg-surface-high overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            width={800}
            height={800}
            loading="lazy"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ink-faint">Coming Soon</span>
            <div className="h-[1px] w-12 bg-outline-variant" />
          </div>
        )}
      </div>
      <div className="space-y-12">
        <div className="space-y-4">
          <span className="font-display text-[10px] uppercase tracking-widest text-ink-faint">{label}</span>
          <h2 className="font-display text-5xl font-bold uppercase tracking-tighter leading-none text-balance">{title}</h2>
        </div>
        <p className="text-xl text-ink-muted leading-relaxed max-w-md">{description}</p>
        <div className="flex items-center gap-6">
          <a
            href={ctaHref}
            className="bg-accent text-on-accent px-8 py-4 font-display text-xs uppercase tracking-widest hover:bg-accent-hover transition-colors"
          >
            {ctaText}
          </a>
          <div className="h-[1px] w-20 bg-outline-variant"></div>
        </div>
      </div>
    </section>
  );
}
