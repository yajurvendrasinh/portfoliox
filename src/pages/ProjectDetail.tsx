/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GrainOverlay from "../components/GrainOverlay";
import TechnicalGrid from "../components/TechnicalGrid";
import BentoGrid from "../components/BentoGrid";
import ScrollHint from "../components/ScrollHint";
import { IMAGES } from "../data/images";

export default function ProjectDetail() {
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);

  useEffect(() => {
    const heroTitle = document.getElementById("hero-title");
    if (!heroTitle) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeaderExpanded(!entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(heroTitle);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-on-accent bg-surface">
      <a href="#project-content" className="skip-link">Skip to content</a>
      <GrainOverlay />

      {/* Unified Header */}
      <header
        className={`fixed top-0 w-full z-[60] bg-surface-lowest/70 backdrop-blur-md overflow-hidden transition-[height] duration-500 ease-[0.2,0,0,1] border-b border-outline-variant pt-[var(--sat)] ${
          isHeaderExpanded ? "h-[calc(8rem_+_var(--sat))]" : "h-[calc(4rem_+_var(--sat))]"
        }`}
      >
        <Navigation activeItem="HOME" />

        <AnimatePresence>
          {isHeaderExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className="px-6 md:px-12 pb-5 pt-1 flex items-center justify-between"
            >
              <span className="font-display font-bold tracking-tighter text-ink text-3xl md:text-4xl">Anthropic Decision.</span>
              <span className="font-display font-bold tracking-tighter text-ink text-3xl md:text-4xl">01</span>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="project-content" className="relative pt-[calc(4rem_+_var(--sat))]">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <div className="absolute top-24 right-12 text-right opacity-10 pointer-events-none">
              <span className="font-display text-[15vw] leading-none font-bold tracking-tighter uppercase select-none">01</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
              <div className="md:col-span-8">
                <span className="font-display text-xs uppercase tracking-[0.2em] text-ink-subtle mb-4 block">Selected Archive // 2024</span>
                <h1 id="hero-title" className="font-display text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-balance">
                  Anthropic<br />Decision.
                </h1>
              </div>
              <div className="md:col-span-4 flex flex-col justify-end md:pb-4 border-l-[0.5px] border-outline-variant/30 pl-8">
                <p className="font-sans text-sm leading-relaxed text-ink-muted max-w-xs mb-6">
                  An exploration into the architectural logic of automated systems and human-centric intervention.
                </p>
                <div className="flex gap-4">
                  <span className="font-display text-[10px] uppercase tracking-widest border border-outline-variant px-2 py-1">Strategy</span>
                  <span className="font-display text-[10px] uppercase tracking-widest border border-outline-variant px-2 py-1">Interface</span>
                </div>
              </div>
            </div>
          </div>
          <ScrollHint />
        </section>

        {/* Image Stacking Reveal Section */}
        <section className="relative bg-surface-muted px-6 md:px-12 py-32 space-y-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 aspect-[4/5] overflow-hidden bg-surface-high">
                {IMAGES.facade ? (
                  <img
                    src={IMAGES.facade}
                    alt="Architectural facade"
                    width={800}
                    height={1000}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ink-faint">Coming Soon</span>
                    <div className="h-[1px] w-12 bg-outline-variant" />
                  </div>
                )}
              </div>
              <div className="md:col-span-4 md:col-start-9">
                <h3 className="font-display text-2xl font-bold mb-6 uppercase tracking-tight">The Core Logic</h3>
                <p className="text-ink-muted leading-relaxed text-sm mb-8">
                  The design system for Anthropic Decision utilizes a strict 4pt grid, echoing the precision of machine-level operations while maintaining the tactile feedback of physical drafting tools.
                </p>
                <div className="pt-8 border-t-[0.5px] border-outline-variant">
                  <span className="font-display text-[10px] uppercase tracking-widest text-ink-subtle block mb-2">Technical Specification</span>
                  <code className="text-[11px] font-mono text-ink leading-tight">
                    grid_unit: 4px;<br />
                    tonal_base: #F9F9F9;<br />
                    interaction_curve: cubic(0.2, 0, 0, 1);
                  </code>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mt-32">
              <div className="md:col-span-4 order-2 md:order-1">
                <h3 className="font-display text-2xl font-bold mb-6 uppercase tracking-tight">Atmospheric Depth</h3>
                <p className="text-ink-muted leading-relaxed text-sm mb-8">
                  Depth is communicated through light values rather than shadows. Surfaces are stacked as digital vellum layers, allowing the structural bones of the application to remain visible.
                </p>
              </div>
              <div className="md:col-span-7 md:col-start-6 order-1 md:order-2 aspect-video overflow-hidden bg-surface-high">
                {IMAGES.workspace ? (
                  <img
                    src={IMAGES.workspace}
                    alt="Tech minimal workspace"
                    width={800}
                    height={450}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover grayscale"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ink-faint">Coming Soon</span>
                    <div className="h-[1px] w-12 bg-outline-variant" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <TechnicalGrid />

        <BentoGrid circuitImage={IMAGES.circuit} />

        {/* Next Project Transition */}
        <section className="relative h-[600px] bg-surface-muted flex flex-col items-center justify-center overflow-hidden border-t-[0.5px] border-outline-variant">
          <div className="absolute inset-0 z-0">
            {IMAGES.next ? (
              <img
                src={IMAGES.next}
                alt="Next project hint"
                width={1200}
                height={600}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover grayscale opacity-10"
              />
            ) : (
              <div className="w-full h-full bg-surface-muted" />
            )}
          </div>
          <div className="relative z-10 text-center">
            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ink-subtle mb-4 block">Next Evolution</span>
            <a href="#/lab" className="group">
              <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tighter transition-[font-style] hover:italic text-balance">
                Neural Prism
              </h2>
              <div className="mt-8 flex justify-center items-center gap-4">
                <span className="h-[1px] w-12 bg-accent transition-all group-hover:w-24"></span>
                <span className="font-display text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">Explore Archive</span>
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* Vertical Side Label */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:block z-[45] pointer-events-none">
        <span className="[writing-mode:vertical-rl] font-display text-[10px] uppercase tracking-[0.4em] text-ink-faint select-none">
          ARCHITECTURAL_PROTOCOL_V.1
        </span>
      </div>
    </div>
  );
}
