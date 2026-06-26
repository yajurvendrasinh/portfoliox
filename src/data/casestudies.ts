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
  };
  // Dynamic fields for BentoGrid
  bentoGrid: {
    title: string;
    description: string;
    image: string;
    statValue: string;
    statLabel: string;
  };
  prev: { id: string; name: string };
  next: { id: string; name: string };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "wellness-platform",
    index: "01",
    title: "Wellness Platform",
    subtitle: "Health & Fitness",
    dates: "Jan 2025 - Present",
    year: "2025",
    description: "A premium, responsive health and workout scheduling platform prioritizing intuitive UX and visual clarity.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    sideLabel: "WELLNESS_PLATFORM_CS",
    technicalGrid: {
      title: "Core Mechanics",
      items: [
        { label: "Flow // 01", title: "Frictionless Scheduling", text: "Minimizing cognitive load by transforming complex workout planning patterns into single-tap actions." },
        { label: "Architecture // 02", title: "Instant Hydration", text: "Utilizing modern caching and optimistic updates to keep UI responsive under variable network conditions." }
      ],
      status: "Operational",
      terminalLines: ["WELLNESS_SCHEDULER_V1.0", "SYNC_RATE: 100%"],
      image: ""
    },
    bentoGrid: {
      title: "Interactive Telemetry",
      description: "Visual charts, real-time statistics, and visual states that make health progress tangible and motivating.",
      image: IMAGES.wellness,
      statValue: "98%",
      statLabel: "Completion Rate"
    },
    prev: { id: "breathe", name: "Breathe Mindfulness" },
    next: { id: "breathe", name: "Breathe Mindfulness" },
  },
  {
    id: "breathe",
    index: "02",
    title: "Breathe",
    subtitle: "Mindfulness",
    dates: "Feb 2025",
    year: "2025",
    description: "An immersive, meditative experience utilizing CSS scroll-driven animations and tranquil color palettes to encourage deep breathing.",
    tags: ["CSS Scroll Animations", "Audio Synthesis", "SVG", "Responsive Design"],
    sideLabel: "BREATHE_MINDFULNESS_CS",
    technicalGrid: {
      title: "Auditory Protocol",
      items: [
        { label: "Visual // 01", title: "Scroll-Driven SVG", text: "Shapes expand and contract dynamically using native CSS custom properties mapped to scroll/time parameters." },
        { label: "Sound // 02", title: "Binaural Synthesis", text: "Low-frequency waveforms synthesized in-browser to guide breathing cycles and improve calming efficiency." }
      ],
      status: "Calibrated",
      terminalLines: ["AUDIO_ENGINE_V2.1", "LATENCY: <12ms"],
      image: IMAGES.creativeJam
    },
    bentoGrid: {
      title: "Visual Breathing Ring",
      description: "A central SVG path breathing simulation that shifts size and color dynamically to provide an intuitive anchor for focus.",
      image: IMAGES.breathe,
      statValue: "200ms",
      statLabel: "Initial Load Time"
    },
    prev: { id: "wellness-platform", name: "Wellness Platform" },
    next: { id: "wellness-platform", name: "Wellness Platform" },
  },
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return CASE_STUDIES.find((cs) => cs.id === id);
}
