/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GrainOverlay from "../components/GrainOverlay";
import BentoGrid from "../components/BentoGrid";
import ManifestoPlus from "../components/ManifestoPlus";
import ScrollHint from "../components/ScrollHint";
import { getExperienceById, EXPERIENCES } from "../data/experiences";

interface ExperienceDetailProps {
  experienceId: string;
}

export default function ExperienceDetail({ experienceId }: ExperienceDetailProps) {
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
  const experience = getExperienceById(experienceId);

  useEffect(() => {
    const heroTitle = document.getElementById("hero-title");
    if (!heroTitle) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeaderExpanded(!entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(heroTitle);
    return () => observer.disconnect();
  }, [experienceId]);

  if (!experience) {
    const fallback = EXPERIENCES[0];
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Experience not found</h1>
          <a href={`#/experience/${fallback.id}`} className="font-display text-sm uppercase tracking-widest underline">
            View {fallback.company}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-on-accent bg-surface">
      <a href="#experience-content" className="skip-link">Skip to content</a>
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
              <span className="font-display font-bold tracking-tighter text-ink text-3xl md:text-4xl">{experience.company}.</span>
              <span className="font-display font-bold tracking-tighter text-ink text-3xl md:text-4xl">{experience.index}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="experience-content" className="relative pt-[calc(4rem_+_var(--sat))]">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <div className="absolute top-24 right-12 text-right opacity-10 pointer-events-none">
              <span className="font-display text-[15vw] leading-none font-bold tracking-tighter uppercase select-none">{experience.index}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
              <div className="md:col-span-8">
                <span className="font-display text-xs uppercase tracking-[0.2em] text-ink-subtle mb-4 block">
                  {experience.role} | {experience.year}
                </span>
                <h1 id="hero-title" className="font-display text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-balance">
                  {experience.company}.
                </h1>
              </div>
              <div className="md:col-span-4 flex flex-col justify-end md:pb-4 border-l-[0.5px] border-outline-variant/30 pl-8">
                <p className="font-sans text-sm leading-relaxed text-ink-muted max-w-xs mb-6">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {experience.tags.map((tag) => (
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

        {/* Manifesto */}
        <section className="bg-surface-muted py-32">
          <ManifestoPlus
            label={experience.manifesto.label}
            title={experience.manifesto.title}
            items={experience.manifesto.items}
            headerExpanded={isHeaderExpanded}
          />
        </section>

        {/* Role Focus + Technical Environment */}
        <section className="bg-contrast py-32 px-6 md:px-12 text-on-contrast overflow-hidden relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 flex items-baseline justify-between border-b-[0.5px] border-on-contrast/20 pb-4">
              <span className="font-display text-[10px] tracking-[0.5em] uppercase text-on-contrast/40">Role Focus</span>
              <span className="font-display text-[10px] text-on-contrast/40">{experience.index} / {String(EXPERIENCES.length).padStart(2, "0")}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <div className="space-y-16">
                <div className="border-l-[0.5px] border-on-contrast/20 pl-8">
                  <span className="font-display text-[10px] uppercase tracking-[0.2em] text-on-contrast-muted block mb-4">Role Focus // 01</span>
                  <h4 className="font-display text-xl mb-4">{experience.sections.primary.title}</h4>
                  <p className="text-on-contrast-muted text-sm leading-relaxed">{experience.sections.primary.text}</p>
                </div>
                <div className="border-l-[0.5px] border-on-contrast/20 pl-8">
                  <span className="font-display text-[10px] uppercase tracking-[0.2em] text-on-contrast-muted block mb-4">Role Focus // 02</span>
                  <h4 className="font-display text-xl mb-4">{experience.sections.secondary.title}</h4>
                  <p className="text-on-contrast-muted text-sm leading-relaxed">{experience.sections.secondary.text}</p>
                </div>
              </div>
              <div className="bg-on-contrast/5 p-8 border border-on-contrast/10 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-display text-[10px] tracking-[0.5em] uppercase text-on-contrast-muted">Technical Environment</span>
                  <span className="font-display text-[10px] text-on-contrast-muted">{experience.company}</span>
                </div>
                <div className="grid grid-cols-1 gap-12">
                  {experience.techStack.map((group) => (
                    <div key={group.label} className="space-y-4">
                      <h5 className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-on-contrast/50">{group.label}</h5>
                      <ul className="space-y-2 text-sm font-medium">
                        {group.items.map((item) => (
                          <li key={item} className="border-b border-on-contrast/10 pb-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <BentoGrid circuitImage={experience.bentoImage} /> */}

        {/* Prev / Next Experience Navigation */}
        <section className="relative bg-surface-muted flex flex-col md:flex-row overflow-hidden border-t-[0.5px] border-outline-variant">
          <a href={`#/experience/${experience.prev.id}`} className="group flex-1 flex flex-col justify-center px-8 md:px-16 py-16 md:py-24 border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-outline-variant hover:bg-surface transition-colors text-left">
            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ink-subtle mb-4 block">Previous</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter transition-[font-style] group-hover:italic text-balance">
              {experience.prev.name}
            </h2>
            <div className="mt-6 flex items-center gap-4">
              <span className="font-display text-xs uppercase tracking-widest group-hover:-translate-x-2 transition-transform">Explore Role</span>
              <span className="h-[1px] w-12 bg-accent transition-all group-hover:w-24"></span>
            </div>
          </a>
          <a href={`#/experience/${experience.next.id}`} className="group flex-1 flex flex-col justify-center px-8 md:px-16 py-16 md:py-24 hover:bg-surface transition-colors text-right">
            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ink-subtle mb-4 block">Next</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter transition-[font-style] group-hover:italic text-balance">
              {experience.next.name}
            </h2>
            <div className="mt-6 flex items-center justify-end gap-4">
              <span className="h-[1px] w-12 bg-accent transition-all group-hover:w-24"></span>
              <span className="font-display text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">Explore Role</span>
            </div>
          </a>
        </section>
      </main>

      <Footer />

      {/* Vertical Side Label */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:block z-[45] pointer-events-none">
        <span className="[writing-mode:vertical-rl] font-display text-[10px] uppercase tracking-[0.4em] text-ink-faint select-none">
          {experience.sideLabel}
        </span>
      </div>
    </div>
  );
}
