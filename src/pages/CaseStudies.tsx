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
import { getCaseStudyById, CASE_STUDIES } from "../data/casestudies";

interface CaseStudiesProps {
  caseStudyId: string;
}

export default function CaseStudies({ caseStudyId }: CaseStudiesProps) {
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
  const caseStudy = getCaseStudyById(caseStudyId);

  useEffect(() => {
    const heroTitle = document.getElementById("hero-title");
    if (!heroTitle) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeaderExpanded(!entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(heroTitle);
    return () => observer.disconnect();
  }, [caseStudyId]);

  if (!caseStudy) {
    const fallback = CASE_STUDIES[0];
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Case Study not found</h1>
          <a href={`#/casestudy/${fallback.id}`} className="font-display text-sm uppercase tracking-widest underline">
            View {fallback.title}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-on-accent bg-surface">
      <a href="#casestudy-content" className="skip-link">Skip to content</a>
      <GrainOverlay />

      {/* Dynamic Header */}
      <header
        className={`fixed top-0 w-full z-[60] bg-surface-lowest/70 backdrop-blur-md overflow-hidden transition-[height] duration-500 ease-[0.2,0,0,1] pt-[var(--sat)] ${
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
              <span className="font-display font-bold tracking-tighter text-ink text-3xl md:text-4xl">{caseStudy.title}.</span>
              <span className="font-display font-bold tracking-tighter text-ink text-3xl md:text-4xl">{caseStudy.index}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="casestudy-content" className="relative pt-[calc(4rem_+_var(--sat))]">
        {/* Hero Section */}
        <section className="min-h-[60vh] md:min-h-[70vh] flex flex-col justify-end px-6 md:px-12 pb-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <div className="absolute top-24 right-12 text-right opacity-10 pointer-events-none">
              <span className="font-display text-[15vw] leading-none font-bold tracking-tighter uppercase select-none">{caseStudy.index}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
              <div className="md:col-span-8">
                <span className="font-display text-xs uppercase tracking-[0.2em] text-ink-subtle mb-4 block">
                  {caseStudy.subtitle} | {caseStudy.year}
                </span>
                <h1 id="hero-title" className="font-display text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-balance">
                  {caseStudy.title}.
                </h1>
              </div>
              <div className="md:col-span-4 flex flex-col justify-end md:pb-4 border-l-[0.5px] border-outline-variant/30 pl-8">
                <p className="font-sans text-sm leading-relaxed text-ink-muted max-w-xs mb-6">
                  {caseStudy.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {caseStudy.tags.map((tag) => (
                    <span key={tag} className="font-display text-[10px] uppercase tracking-widest border border-outline-variant px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <ScrollHint />
        </section>

        {/* Technical Grid Section */}
        <TechnicalGrid
          title={caseStudy.technicalGrid.title}
          items={caseStudy.technicalGrid.items}
          status={caseStudy.technicalGrid.status}
          terminalLines={caseStudy.technicalGrid.terminalLines}
          image={caseStudy.technicalGrid.image}
          video={caseStudy.technicalGrid.video}
        />

        {/* Bento Grid Section */}
        <BentoGrid
          circuitImage={caseStudy.bentoGrid.image}
          video={caseStudy.bentoGrid.video}
          title={caseStudy.bentoGrid.title}
          description={caseStudy.bentoGrid.description}
          statValue={caseStudy.bentoGrid.statValue}
          statLabel={caseStudy.bentoGrid.statLabel}
          link={caseStudy.bentoGrid.link}
        />

        {/* Prev / Next Case Study Navigation */}
        <section className="relative bg-surface-muted flex flex-col md:flex-row overflow-hidden border-t-[0.5px] border-outline-variant">
          <a href={`#/casestudy/${caseStudy.prev.id}`} className="group flex-1 flex flex-col justify-center px-8 md:px-16 py-16 md:py-24 border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-outline-variant hover:bg-surface transition-colors text-left">
            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ink-subtle mb-4 block">Previous Study</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter transition-[font-style] group-hover:italic text-balance">
              {caseStudy.prev.name}
            </h2>
            <div className="mt-6 flex items-center gap-4">
              <span className="font-display text-xs uppercase tracking-widest group-hover:-translate-x-2 transition-transform">Explore Study</span>
              <span className="h-[1px] w-12 bg-accent transition-all group-hover:w-24"></span>
            </div>
          </a>
          <a href={`#/casestudy/${caseStudy.next.id}`} className="group flex-1 flex flex-col justify-center px-8 md:px-16 py-16 md:py-24 hover:bg-surface transition-colors text-right">
            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ink-subtle mb-4 block">Next Study</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter transition-[font-style] group-hover:italic text-balance">
              {caseStudy.next.name}
            </h2>
            <div className="mt-6 flex items-center justify-end gap-4">
              <span className="h-[1px] w-12 bg-accent transition-all group-hover:w-24"></span>
              <span className="font-display text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">Explore Study</span>
            </div>
          </a>
        </section>
      </main>

      <Footer />

      {/* Side Label */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:block z-[45] pointer-events-none">
        <span className="[writing-mode:vertical-rl] font-display text-[10px] uppercase tracking-[0.4em] text-ink-faint select-none">
          {caseStudy.sideLabel}
        </span>
      </div>
    </div>
  );
}
