/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AsymmetricDetailProps {
  image: string;
  imageAlt?: string;
  video?: string;
  label: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  reversed?: boolean;
}

export default function AsymmetricDetail({
  image,
  video,
  imageAlt = "",
  label,
  title,
  description,
  ctaText,
  ctaHref,
  reversed,
}: AsymmetricDetailProps) {
  return (
    <section className="mt-48 grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-6 md:px-12 max-w-7xl mx-auto">
      <div className={reversed ? "md:order-2" : ""}>
        <div className="relative aspect-[4/3] overflow-hidden">
          {video ? (
            <video
              key={video}
              autoPlay
              loop
              muted
              playsInline
              className="max-w-full h-auto object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>
          ) : image ? (
            <img
              src={image}
              alt={title}
              className="max-w-full h-auto object-cover"
            />
          ) : (
            <>
              <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                <span className="font-display text-[11px] uppercase tracking-[0.3em] text-ink-faint">
                  Coming Soon
                </span>
                <div className="h-[1px] w-12 bg-outline-variant" />
              </div>
            </>
          )}
        </div>
      </div>
      <div className={reversed ? "md:order-1" : ""}>
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="font-display text-[11px] uppercase tracking-widest text-ink-faint">
              {label}
            </span>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter leading-none text-balance">
              {title}
            </h2>
          </div>
          <p className="text-xl text-ink-muted leading-relaxed max-w-md">
            {description}
          </p>
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
      </div>
    </section>
  );
}
