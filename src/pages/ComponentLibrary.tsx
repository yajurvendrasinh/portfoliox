/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Eye } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GrainOverlay from "../components/GrainOverlay";
import ArtifactCard from "../components/ArtifactCard";
import RecordCard from "../components/RecordCard";
import TechnicalGrid from "../components/TechnicalGrid";
import BentoGrid from "../components/BentoGrid";
import Manifesto from "../components/Manifesto";
import ManifestoPlus from "../components/ManifestoPlus";
import SpecCard from "../components/SpecCard";
import Watermark from "../components/Watermark";
import AsymmetricDetail from "../components/AsymmetricDetail";
import { IMAGES } from "../data/images";

const COMPONENTS = [
  {
    id: "manifesto",
    name: "Manifesto",
    description: "A section defining the core philosophy and process of the practice.",
    render: () => <Manifesto />,
  },
  {
    id: "manifesto-plus",
    name: "ManifestoPlus",
    description: "Enhanced Manifesto with a mobile-optimized sticky heading that animates from full size to a slim compact bar when pinned, with an opaque background to cleanly hide scrolling content beneath.",
    render: () => <ManifestoPlus />,
  },
  {
    id: "artifact-card",
    name: "ArtifactCard",
    description: "A high-precision project card with hover reveal for metadata and role information.",
    render: () => (
      <div className="max-w-md mx-auto">
        <ArtifactCard
          image={IMAGES.monolith}
          title="Monolith Interface"
          category="Visual Identity / R&D"
          project="Project 001"
          role="Lead Systems Architect"
          year="2024"
        />
      </div>
    ),
  },
  {
    id: "record-card",
    name: "RecordCard",
    description: "An archival entry card with a sliding reveal animation and monochromatic filtering.",
    render: () => (
      <div className="max-w-2xl mx-auto">
        <RecordCard
          image={IMAGES.prism}
          title="Brutalist Grid"
          category="System Architecture"
          year="2023"
          index="005"
        />
      </div>
    ),
  },
  {
    id: "technical-grid",
    name: "TechnicalGrid",
    description: "A data-dense section showcasing structural integrity and technical metadata.",
    render: () => <TechnicalGrid />,
  },
  {
    id: "bento-grid",
    name: "BentoGrid",
    description: "An asymmetric grid system for modular components and architectural imagery.",
    render: () => (
      <BentoGrid circuitImage={IMAGES.circuit} />
    ),
  },
  {
    id: "asymmetric-detail",
    name: "AsymmetricDetail",
    description: "A two-column section pairing a grayscale image with a heading, body copy, and CTA. Configurable content via props.",
    render: () => (
      <AsymmetricDetail
        image={IMAGES.carbon}
        imageAlt="Structural Detail"
        label="Structural_Analysis"
        title="The Monolith Editorial System"
        description="A design system rooted in technical precision and brutalist minimalism."
        ctaText="View Documentation"
        ctaHref="#/lab"
      />
    ),
  },
  {
    id: "spec-card",
    name: "SpecCard",
    description: "A technical specification card displaying key-value metadata rows. Configurable version badge, label, and spec entries.",
    render: () => (
      <div className="max-w-sm mx-auto">
        <SpecCard />
      </div>
    ),
  },
  {
    id: "watermark",
    name: "Watermark",
    description: "A large, nearly invisible typographic glyph used as a decorative background element. Configurable character and positioning.",
    render: () => (
      <div className="relative h-64 overflow-hidden">
        <Watermark glyph="A" />
      </div>
    ),
  },
];

export default function ComponentLibrary() {
  const [viewingComponent, setViewingComponent] = useState<string | null>(null);

  const activeComponent = COMPONENTS.find((c) => c.id === viewingComponent);

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-on-accent bg-surface">
      <a href="#library-content" className="skip-link">Skip to content</a>
      <GrainOverlay />

      <header className="fixed top-0 w-full z-50 bg-surface-lowest/70 backdrop-blur-md h-[calc(4rem_+_var(--sat))] pt-[var(--sat)] border-b border-outline-variant">
        <div className="max-w-7xl mx-auto h-16">
          <Navigation activeItem="LIBRARY" />
        </div>
      </header>

      <main id="library-content" className="relative pt-[calc(8rem_+_var(--sat))] pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!viewingComponent ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
            >
              <div className="mb-20">
                <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ink-subtle mb-4 block">Archive // Lab</span>
                <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-none text-balance">
                  Component<br />Library.
                </h1>
              </div>

              <div className="grid grid-cols-1 gap-32">
                {COMPONENTS.map((comp) => (
                  <section key={comp.id} className="border-t border-outline-variant pt-12">
                    <div className="flex flex-col gap-10">
                      <div className="p-8 border border-[#14213d]/20 dark:border-white/20">
                        {comp.render()}
                      </div>
                      <div className="text-center">
                        <h2 className="font-display text-2xl font-bold uppercase tracking-tight mb-4">{comp.name}</h2>
                        <p className="text-ink-muted text-sm leading-relaxed mb-8 max-w-xl mx-auto">{comp.description}</p>
                        <button
                          onClick={() => setViewingComponent(comp.id)}
                          className="inline-flex items-center gap-2 bg-accent text-on-accent px-6 py-3 font-display uppercase tracking-widest text-[10px] hover:bg-accent-hover transition-colors"
                        >
                          <Eye size={14} />
                          View Component
                        </button>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
              className="min-h-[60vh] flex flex-col"
            >
              <button
                onClick={() => setViewingComponent(null)}
                className="flex items-center gap-2 text-ink-subtle hover:text-ink transition-colors mb-12 font-display uppercase tracking-widest text-[10px]"
              >
                <ArrowLeft size={14} />
                Back to Library
              </button>

              <div className="flex-1 border border-[#14213d]/20 dark:border-white/20 p-12 md:p-24 min-h-[150vh] flex flex-col items-center">
                <div className="w-full max-w-7xl">
                  <div className="mb-12 text-center">
                    <h2 className="font-display text-4xl font-bold uppercase tracking-tighter mb-2">{activeComponent?.name}</h2>
                    <p className="text-ink-subtle text-xs uppercase tracking-widest">Isolated View Mode</p>
                  </div>
                  {activeComponent?.render()}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
