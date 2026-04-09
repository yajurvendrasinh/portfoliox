/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, DraftingCompass } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GrainOverlay from "../components/GrainOverlay";
import ScrollHint from "../components/ScrollHint";
import { getPlayById, PLAYS, type Play, type EmbedItem } from "../data/plays";

interface EmbedFacadeProps {
  embedSrc: string;
  thumbnail: string;
  label: string;
  href: string;
  aspectClass?: string;
}

function EmbedFacade({
  embedSrc,
  thumbnail,
  label,
  href,
  aspectClass = "aspect-square",
}: EmbedFacadeProps) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className={`${aspectClass} overflow-hidden border border-on-contrast/10`}>
        <iframe
          src={embedSrc}
          className="w-full h-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={label}
        />
      </div>
    );
  }

  return (
    <a
      href={href}
      onClick={(e) => { e.preventDefault(); setActive(true); }}
      className={`${aspectClass} relative overflow-hidden border border-on-contrast/10 group block cursor-pointer`}
      aria-label={`Load embed: ${label}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={thumbnail}
        alt={label}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
        <span className="material-symbols-outlined text-5xl text-white drop-shadow-lg" aria-hidden="true">play_circle</span>
      </div>
    </a>
  );
}

function TerminalPanel({ play }: { play: Play }) {
  const { terminal } = play.techGrid;

  if (play.terminalLayout === "grid-2x2") {
    if (play.instagramPosts?.length) {
      return (
        <div className="grid grid-cols-2 gap-4">
          {play.instagramPosts.map((post) => (
            <div key={post.id}>
              <EmbedFacade
                embedSrc={`https://www.instagram.com/p/${post.id}/embed/`}
                thumbnail={post.thumbnail}
                label={post.label}
                href={`https://www.instagram.com/p/${post.id}/`}
              />
            </div>
          ))}
        </div>
      );
    }

    if (play.youtubeVideos?.length) {
      return (
        <div className="grid grid-cols-2 gap-4">
          {play.youtubeVideos.map((video) => (
            <div key={video.id}>
              <EmbedFacade
                embedSrc={`https://www.youtube-nocookie.com/embed/${video.id}`}
                thumbnail={video.thumbnail}
                label={video.label}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                aspectClass="aspect-video"
              />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-on-contrast/5 p-8 border border-on-contrast/10 flex flex-col justify-between aspect-square">
          <Terminal className="text-on-contrast opacity-50" size={40} strokeWidth={1} aria-hidden="true" />
          <span className="font-display text-[10px] uppercase tracking-widest text-on-contrast-muted">
            Status: {terminal.status}
          </span>
        </div>
        {terminal.lines.map((line, i) => (
          <div key={i} className="bg-on-contrast/5 p-8 border border-on-contrast/10 flex items-end aspect-square">
            <p className="font-mono text-[10px] text-on-contrast-muted leading-relaxed">{line}</p>
          </div>
        ))}
      </div>
    );
  }

  if (play.terminalLayout === "bento") {
    if (play.bentoImages) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[500px]">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden group min-h-[250px]">
            <img
              src={play.bentoImages.hero}
              alt={play.title}
              loading="lazy"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="md:col-span-2 bg-on-contrast/5 p-8 border border-on-contrast/10 flex flex-col justify-center">
            <h3 className="font-display text-2xl font-bold mb-4 tracking-tighter">{play.title}</h3>
            <p className="text-on-contrast-muted text-sm leading-relaxed max-w-sm">{play.description}</p>
          </div>
          <div className="relative overflow-hidden group min-h-[150px]">
            <img
              src={play.bentoImages.cell1}
              alt={`${play.title} event`}
              loading="lazy"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="relative overflow-hidden group min-h-[150px]">
            <img
              src={play.bentoImages.cell2}
              alt={`${play.title} event`}
              loading="lazy"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[500px]">
        <div className="md:col-span-2 md:row-span-2 bg-on-contrast/5 p-8 border border-on-contrast/10 flex flex-col justify-between min-h-[250px]">
          <div className="flex justify-between items-start">
            <Terminal className="text-on-contrast opacity-50" size={40} strokeWidth={1} aria-hidden="true" />
            <span className="font-display text-[10px] uppercase tracking-widest text-on-contrast-muted">
              Status: {terminal.status}
            </span>
          </div>
          <div className="space-y-4">
            <div className="h-[0.5px] bg-on-contrast/10 w-full"></div>
            <div className="h-[0.5px] bg-on-contrast/10 w-3/4"></div>
            <div className="h-[0.5px] bg-on-contrast/10 w-1/2"></div>
          </div>
          <p className="font-mono text-[10px] text-on-contrast-muted leading-relaxed">{terminal.lines[0]}</p>
        </div>
        <div className="md:col-span-2 bg-on-contrast/5 p-8 border border-on-contrast/10 flex flex-col justify-center">
          <h3 className="font-display text-2xl font-bold mb-4 tracking-tighter">{play.title}</h3>
          <p className="text-on-contrast-muted text-sm leading-relaxed max-w-sm">{play.description}</p>
        </div>
        <div className="bg-on-contrast/5 p-8 border border-on-contrast/10 flex items-center justify-center group overflow-hidden min-h-[150px]">
          <DraftingCompass className="text-on-contrast opacity-30 group-hover:scale-125 transition-transform duration-700" size={64} strokeWidth={1} aria-hidden="true" />
        </div>
        <div className="bg-on-contrast/5 p-8 border border-on-contrast/10 flex flex-col justify-end min-h-[150px]">
          <span className="font-display text-4xl font-bold">{play.index}</span>
          <span className="font-display text-[10px] uppercase tracking-widest text-on-contrast-muted">{terminal.lines[2]}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-on-contrast/5 p-8 border border-on-contrast/10 flex flex-col justify-between min-h-[300px]">
      <div className="flex justify-between items-start">
        <Terminal className="text-on-contrast opacity-50" size={40} strokeWidth={1} aria-hidden="true" />
        <span className="font-display text-[10px] uppercase tracking-widest text-on-contrast-muted">
          Status: {terminal.status}
        </span>
      </div>
      <div className="space-y-4">
        <div className="h-[0.5px] bg-on-contrast/10 w-full"></div>
        <div className="h-[0.5px] bg-on-contrast/10 w-3/4"></div>
        <div className="h-[0.5px] bg-on-contrast/10 w-1/2"></div>
      </div>
      <p className="font-mono text-[10px] text-on-contrast-muted leading-relaxed">
        {terminal.lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < terminal.lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  );
}

interface PlayStateProps {
  playId: string;
}

export default function PlayState({ playId }: PlayStateProps) {
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
  const play = getPlayById(playId);

  useEffect(() => {
    const heroTitle = document.getElementById("hero-title");
    if (!heroTitle) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeaderExpanded(!entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(heroTitle);
    return () => observer.disconnect();
  }, [playId]);

  if (!play) {
    const fallback = PLAYS[0];
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Not found</h1>
          <a href={`#/play/${fallback.id}`} className="font-display text-sm uppercase tracking-widest underline">
            View {fallback.title}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-on-accent bg-surface">
      <a href="#play-content" className="skip-link">Skip to content</a>
      <GrainOverlay />

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
              <span className="font-display font-bold tracking-tighter text-ink text-3xl md:text-4xl">{play.title}.</span>
              <span className="font-display font-bold tracking-tighter text-ink text-3xl md:text-4xl">{play.index}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="play-content" className="relative pt-[calc(4rem_+_var(--sat))]">
        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <div className="absolute top-24 right-12 text-right opacity-10 pointer-events-none">
              <span className="font-display text-[15vw] leading-none font-bold tracking-tighter uppercase select-none">{play.index}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
              <div className="md:col-span-8">
                <span className="font-display text-xs uppercase tracking-[0.2em] text-ink-subtle mb-4 block">
                  {play.category}
                </span>
                <h1 id="hero-title" className="font-display text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-balance">
                  {play.title}.
                </h1>
              </div>
              <div className="md:col-span-4 flex flex-col justify-end md:pb-4 border-l-[0.5px] border-outline-variant/30 pl-8">
                <p className="font-sans text-sm leading-relaxed text-ink-muted max-w-xs mb-6">
                  {play.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {play.tags.map((tag) => (
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

        {/* Technical Grid — unique per play */}
        <section className="bg-contrast py-32 px-6 md:px-12 text-on-contrast overflow-hidden relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 relative z-10">
            <div>
              <h2 className="font-display text-4xl font-bold mb-12 leading-none uppercase text-balance">
                {play.title}<br />Protocol
              </h2>
              <div className="space-y-12">
                {play.techGrid.items.map((item) => (
                  <div key={item.label} className="border-l-[0.5px] border-on-contrast/20 pl-8">
                    <span className="font-display text-[10px] uppercase tracking-[0.2em] text-on-contrast-muted block mb-4">{item.label}</span>
                    <h4 className="font-display text-xl mb-4">{item.title}</h4>
                    <p className="text-on-contrast-muted text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <TerminalPanel play={play} />
          </div>
        </section>

        {/* Prev / Next Play Navigation */}
        <section className="relative bg-surface-muted flex flex-col md:flex-row overflow-hidden border-t-[0.5px] border-outline-variant">
          <a href={`#/play/${play.prev.id}`} className="group flex-1 flex flex-col justify-center px-8 md:px-16 py-16 md:py-24 border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-outline-variant hover:bg-surface transition-colors text-left">
            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ink-subtle mb-4 block">Previous</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter transition-[font-style] group-hover:italic text-balance">
              {play.prev.name}
            </h2>
            <div className="mt-6 flex items-center gap-4">
              <span className="font-display text-xs uppercase tracking-widest group-hover:-translate-x-2 transition-transform">Explore</span>
              <span className="h-[1px] w-12 bg-accent transition-all group-hover:w-24"></span>
            </div>
          </a>
          <a href={`#/play/${play.next.id}`} className="group flex-1 flex flex-col justify-center px-8 md:px-16 py-16 md:py-24 hover:bg-surface transition-colors text-right">
            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-ink-subtle mb-4 block">Next</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter transition-[font-style] group-hover:italic text-balance">
              {play.next.name}
            </h2>
            <div className="mt-6 flex items-center justify-end gap-4">
              <span className="h-[1px] w-12 bg-accent transition-all group-hover:w-24"></span>
              <span className="font-display text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">Explore</span>
            </div>
          </a>
        </section>
      </main>

      <Footer />

      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:block z-[45] pointer-events-none">
        <span className="[writing-mode:vertical-rl] font-display text-[10px] uppercase tracking-[0.4em] text-ink-faint select-none">
          {play.sideLabel}
        </span>
      </div>
    </div>
  );
}
