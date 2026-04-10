/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectDetail from "./pages/ProjectDetail";
import ComponentLibrary from "./pages/ComponentLibrary";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ArtifactCard from "./components/ArtifactCard";
import RecordCard from "./components/RecordCard";
import GrainOverlay from "./components/GrainOverlay";
import Manifesto from "./components/ManifestoPlus";
import About from "./pages/About";
import ExperienceDetail from "./pages/ExperienceDetail";
import PlayState from "./pages/PlayState";
import AsymmetricDetail from "./components/AsymmetricDetail";
import ScrollHint from "./components/ScrollHint";
import { IMAGES } from "./data/images";

type View = "HOME" | "PROJECT" | "LIBRARY" | "ABOUT" | "EXPERIENCE" | "PLAY";

function getExperienceIdFromHash(): string {
  const match = window.location.hash.match(/^#\/experience\/(.+)$/);
  return match ? match[1] : "";
}

function getPlayIdFromHash(): string {
  const match = window.location.hash.match(/^#\/play\/(.+)$/);
  return match ? match[1] : "";
}

function getViewFromHash(): View {
  const hash = window.location.hash;
  if (hash === "#/project") return "PROJECT";
  if (hash.startsWith("#/experience/")) return "EXPERIENCE";
  if (hash.startsWith("#/play/")) return "PLAY";
  if (hash === "#/lab") return "LIBRARY";
  if (hash === "#/about") return "ABOUT";
  return "HOME";
}

// Hero flip animation — each entry is a [topWord, bottomWord] pair that the h1 cycles through
// Only one word changes per step, so only that slot flips while the other stays static
const HERO_SEQUENCE: [string, string][] = [
  ["UX", "ENGINEER"],
  ["UX", "DESIGNER"],
  ["UI", "DESIGNER"],
  ["UI", "ENGINEER"],
  ["DESIGN", "ENGINEER"],
];

// Dwell time (ms) each pair is visible before advancing to the next step
const FLIP_INTERVAL_MS = 2500;

// Split-flap style vertical flip — new word slides up from below while old word slides out through the top
// Container clips both words with overflow:hidden; popLayout keeps them stacked during the crossover
function FlipWord({ word }: { word: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        position: "relative",
        verticalAlign: "bottom",
        overflow: "hidden",
        minWidth: "6.5ch",
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={word}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.6, 0.04, 0.98, 0.335] }}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// Reads stored theme and applies .dark class before first paint to prevent flash
function getInitialTheme(): "light" | "dark" {
  const stored = localStorage.getItem("theme");
  const theme = stored === "light" ? "light" : "dark";
  document.documentElement.classList.toggle("dark", theme === "dark");
  return theme;
}

export default function App() {
  const [view, setView] = useState<View>(getViewFromHash);
  const [experienceId, setExperienceId] = useState(getExperienceIdFromHash);
  const [playId, setPlayId] = useState(getPlayIdFromHash);

  // Syncs with ThemeToggle's custom event so particles.js can react to theme changes
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    const handler = (e: Event) => setTheme((e as CustomEvent).detail);
    window.addEventListener("themechange", handler);
    return () => window.removeEventListener("themechange", handler);
  }, []);

  // Advances through HERO_SEQUENCE on a fixed interval to drive the hero text flip
  const [heroStep, setHeroStep] = useState(0);
  const [topWord, bottomWord] = HERO_SEQUENCE[heroStep];

  useEffect(() => {
    const id = setInterval(
      () => setHeroStep((s) => (s + 1) % HERO_SEQUENCE.length),
      FLIP_INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    function onHashChange() {
      const hash = window.location.hash;
      if (hash === "" || hash === "#" || hash.startsWith("#/")) {
        setView(getViewFromHash());
        setExperienceId(getExperienceIdFromHash());
        setPlayId(getPlayIdFromHash());
      }
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, experienceId, playId]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    // Particle color adapts to theme — black in light mode, amber accent in dark mode
    const particleColor = theme === "dark" ? "#fca311" : "#000000";

    if (
      (window as any).particlesJS &&
      document.getElementById("particles-js")
    ) {
      (window as any).particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: particleColor },
          shape: {
            type: "circle",
            stroke: { width: 0, color: particleColor },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 1,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.5, sync: false },
          },
          size: {
            value: 5,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: particleColor,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
    }
  }, [view, theme]);

  if (view === "EXPERIENCE") {
    return (
      <div key={experienceId}>
        <ExperienceDetail experienceId={experienceId} />
      </div>
    );
  }

  if (view === "PLAY") {
    return (
      <div key={playId}>
        <PlayState playId={playId} />
      </div>
    );
  }

  if (view === "PROJECT") {
    return <ProjectDetail />;
  }

  if (view === "LIBRARY") {
    return <ComponentLibrary />;
  }

  if (view === "ABOUT") {
    return <About />;
  }

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-on-accent">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <GrainOverlay />

      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-surface-lowest/70 backdrop-blur-md h-[calc(4rem_+_var(--sat))] pt-[var(--sat)] border-b border-outline-variant">
        <Navigation activeItem="HOME" />
      </header>

      {/* Hero Section */}
      <section className="sticky top-0 h-screen flex flex-col justify-center px-6 md:px-12 bg-surface overflow-hidden z-10 relative">
        <div
          id="particles-js"
          className="absolute inset-0 z-0 pointer-events-none opacity-50"
        />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-0 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
            className="md:col-span-8"
          >
            <h1 className="text-6xl md:text-[8rem] font-display font-bold uppercase tracking-tighter leading-[0.9] mb-12 text-balance">
              <FlipWord word={topWord} />
              <br />
              <FlipWord word={bottomWord} />
            </h1>
            <p className="text-lg md:text-xl text-ink-muted max-w-xl leading-relaxed font-light">
              who cares deeply about accessible, aesthetic and equitable design.
              Thriving at intersection of code and design connecting technology
              with human experience in a way that feels intentional, intuitive
              and inspiring.
            </p>
          </motion.div>
        </div>
        <ScrollHint />
      </section>

      {/* Main Content */}
      <main id="main-content" className="bg-surface relative z-20 pt-24 pb-32">
        {/* Selected Artifacts */}
        <section
          id="work"
          className="px-6 md:px-12 max-w-7xl mx-auto relative artifacts-fade"
        >
          <div className="flex items-baseline justify-between border-b-[0.5px] border-outline-variant pb-4 mb-20">
            <h2 className="font-display text-3xl font-bold tracking-tight uppercase">
              State of Work
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-y-24 md:gap-x-12">
            {/* Salesforce */}
            <ArtifactCard
              className="col-span-12 md:col-span-7"
              image={IMAGES.salesforceTower}
              title="Salesforce"
              category="Design Systems / Accessibility"
              project="Tableau Next — COSMOS DS"
              role="Sr. Software Engineer — Frontend"
              year="2024"
              aspect="aspect-[4/5]"
              onClick={() => {
                window.location.hash = "#/experience/salesforce";
              }}
            />
            <div className="col-span-12 md:col-span-5 flex flex-col gap-y-24 md:gap-y-0 md:justify-between">
              {/* Roku */}
              <ArtifactCard
                image={IMAGES.roku}
                title="Roku Inc."
                category="Component Library / UX Engineering"
                project="Roku Web Platform"
                role="Sr. Software Engineer — Frontend"
                year="2021"
                aspect="aspect-[4/3]"
                onClick={() => {
                  window.location.hash = "#/experience/roku";
                }}
              />
              {/* Levi Strauss & Co. */}
              <ArtifactCard
                image={IMAGES.leviStrauss}
                title="Levi Strauss & Co."
                category="E-commerce / Headless CMS"
                project="Levi.com & Dockers.com"
                role="Front End Web Developer"
                year="2017"
                aspect="aspect-[4/3]"
                onClick={() => {
                  window.location.hash = "#/experience/levis";
                }}
              />
            </div>
          </div>
        </section>

        {/* PLAY */}
        <section className="mt-48 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex items-baseline justify-between border-b-[0.5px] border-outline-variant pb-4 mb-20">
            <h2 className="font-display text-3xl font-bold tracking-tight uppercase">
              State of Play
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RecordCard
              image={IMAGES.nasm}
              title="NASM CPT"
              category="Fitness"
              year="2022"
              index="005"
              onClick={() => {
                window.location.hash = "#/play/nasm-cpt";
              }}
            />
            <RecordCard
              image={IMAGES.guitar}
              title="Guitar Covers"
              category="Music"
              year="2023"
              index="006"
              onClick={() => {
                window.location.hash = "#/play/guitar-covers";
              }}
            />
            <RecordCard
              image={IMAGES.creativeJam}
              title="Adobe Creative Jam"
              category="Design Hackathon"
              year="2026"
              index="007"
              onClick={() => {
                window.location.hash = "#/play/creative-jam";
              }}
            />
            <RecordCard
              image={IMAGES.improv}
              title="Improv"
              category="Public Speaking"
              year="2021"
              index="008"
              onClick={() => {
                window.location.hash = "#/play/improv";
              }}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
