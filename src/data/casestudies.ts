/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { IMAGES } from "./images";

export interface TechnicalGridItem {
  label: string;
  title: string;
  text: string;
}

export interface CaseStudy {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  dates: string;
  year: string;
  description: string;
  tags: string[];
  sideLabel: string;
  technicalGrid: {
    title: string;
    items: TechnicalGridItem[];
    status: string;
    terminalLines: string[];
    image?: string;
    video?: string;
  };
  // Dynamic fields for BentoGrid
  bentoGrid: {
    title: string;
    description: string;
    image?: string;
    video?: string;
    statValue: string;
    statLabel: string;
    link?: string;
  };
  prev: { id: string; name: string };
  next: { id: string; name: string };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "wellness-ethos",
    index: "02",
    title: "Wellness Ethos",
    subtitle: "Health & Fitness",
    dates: "Jan 2025 - Present",
    year: "2025",
    description: "Reducing decision fatigue through a minimalist workout builder.",
    tags: ["Product Design", "UX Research", "Frontend Engineering", "Scientific Fitness Principles"],
    sideLabel: "WELLNESS ETHOS",
    technicalGrid: {
      title: "Core Idea",
      items: [
        { label: "Problem", title: "Overwhelmed User", text: "People rarely fail to exercise because they lack information. More often, they struggle to decide where to begin. Existing fitness products ask users to create accounts, install apps, choose programs, and learn new interfaces before delivering any value." },
        { label: "Ideology", title: "Frictionless Scheduling", text: "Minimizing cognitive load by transforming complex workout planning brainstorming patterns into single-tap action." },
        { label: "Outcome", title: "Scientific Training", text: "The result was a responsive browser-based workout builder that generates a personalized workout in three decisions—without requiring sign-up, installation, or onboarding." }
      ],
      status: "Operational",
      terminalLines: ["WELLNESS_SCHEDULER_V1.0", "SYNC_RATE: 100%"],
      image: IMAGES.wellness,
      video: IMAGES.ethosgif
    },
    bentoGrid: {
      title: "Designing for fewer decisions",
      description: "If users receive immediate, trustworthy guidance instead of more choices, they are more likely to begin exercising.",
      link:'https://yajurvendrasinh.github.io/wellness-platform/workout',
      image: IMAGES.mackprowellness,
      statValue: "56",
      statLabel: "Workouts Created"
    },
    prev: { id: "breathe", name: "Breathe Mindfulness" },
    next: { id: "breathe", name: "Breathe Mindfulness" },
  },
  {
    id: "breathe",
    index: "01",
    title: "Breathe",
    subtitle: "Mindfulness",
    dates: "Feb 2025",
    year: "2025",
    description: "An immersive, meditative experience utilizing CSS scroll-driven animations and tranquil color palettes to encourage deep breathing.",
    tags: ["Visual Design", "Product Design", "CSS Animation"],
    sideLabel: "BREATHE_MINDFULNESS_CS",
    technicalGrid: {
      title: "Core Idea",
      items: [
        { label: "Problem", title: "Anxiety / Stress Overload", text: "People forget to breathe and take break from their busy schedule, overworking themselves to oblivion." },
        { label: "Ideology", title: "Quick Action", text: "Quick access to scientifically researched breathing exercise at tap of the finger to take a break and get anxiety and stress under control" },
        { label: "Outcome", title: "Click & Play", text: "The result was a responsive browser-based breathing app that visually helps user to get a quick breathing exercise without requiring sign-up, installation, or onboarding." }
      ],
      status: "Calibrated",
      terminalLines: ["AUDIO_ENGINE_V2.1", "LATENCY: <12ms"],
      image: IMAGES.breathe,
      video: IMAGES.breathegif
    },
    bentoGrid: {
      title: "Visual Breathing Exercise",
      link:'https://yajurvendrasinh.github.io/breathe',
      description: "A realtime breathing simulation that shifts size and instruction dynamically to provide an intuitive anchor for focus.",
      image: IMAGES.breathe,
      video: IMAGES.breatheTablet,
      statValue: "Focused",
      statLabel: "Breathwork"
    },
    prev: { id: "wellness-ethos", name: "Wellness Ethos" },
    next: { id: "wellness-ethos", name: "Wellness Ethos" },
  },
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.id === id);
}
