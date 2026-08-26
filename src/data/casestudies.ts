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
  testImage?: string;
  context: string;
  friction: string;
  research: string;
  asymmetricDetail: {
    title: string;
    description: string;
    image: string;
    video?: string;
    ctaHref?: string;
    ctaText?: string;
  };
  asymmetricDetailTwo: {
    title: string;
    description: string;
    image: string;
    video?: string;
    ctaHref?: string;
    ctaText?: string;
  };
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
    context: "Workout Builder builds an instant workout based on three factors: current level, focus, and the time available for the session.",
    friction: "Even motivated people freeze at the decision point where there are too many options available, too many variables, and no clear answer. The fix is simple, fewer choices delivered with confidence and backed by science and research",
    research: "After working out with friends, acquaintance and gym buds, I realized they dont have a motivation problem, they have a decision and initiation problem. I have built this for them, so when they want anything quick and solid, they can use the app for their advantage",
    asymmetricDetail: {
      title: "Agency with Simplicity",
      description: "More choices creates overwhelm. Fewer optimized choices builds decisions. The hardest part of working out isn't the workout. It's deciding to start.",
      image: IMAGES.wellness,
      video: IMAGES.ethosgif,
      ctaHref: "https://yajurvendrasinh.github.io/wellness-platform/workout",
      ctaText: "Try It"
    },
    asymmetricDetailTwo: {
      title: "Purposeful and Flexible",
      description: "Three quick selections creates pleathora of workouts focused towards individual goals",
      image: IMAGES.mackprowellness,
      video: IMAGES.ethosgif,
      ctaHref: "https://yajurvendrasinh.github.io/wellness-platform/workout",
      ctaText: "Try It"
    },
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
    subtitle: "Interactive Mindfulness",
    dates: "Feb 2025",
    year: "2025",
    description: "A succint responsive web-app that provides quick access to scientifically researched breathing exercises for nervous system regulation, anxiety management and athletic performance enhancement",
    tags: ['Product Design', 'Interaction Design', 'Visual Design'],
    link: 'https://yajurvendrasinh.github.io/breathe',
    sideLabel: "BREATHE_MINDFULNESS_CS",
    testImage: IMAGES.breatheMac,
    context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Individuals pursuing ambitious goals can struggle to down-regulate after sustained effort, creating a need for simple and immediate recovery tools.",
    friction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Existing mindfulness products often add signup, accounts, and paywalls before delivering value, increasing friction during moments of anxiety or stress.",
    research: "Breathe provides a visual cue for three breathing techniques, each chosen because it's scientifically grounded and covers a distinct physiological need. Box breathing - down-regulates the nervous system and counters accumulated stress. 4-7-8 breathing calms things further for focus. A 6-6 technique increases oxygenation for elevated athletic performance.",
    asymmetricDetail: {
      title: "Interactivity with Purpose",
      description: "Timed interactive animation eliminates cognitive load, allowing focused delightful experience",
      image: IMAGES.breathegif,
      video: IMAGES.breathegif,
      ctaHref: 'https://yajurvendrasinh.github.io/breathe',
      ctaText: "Try It"
    },
    asymmetricDetailTwo: {
      title: "Simplicity with Distilled Protocols",
      description: "The app provides a streamlined approach to mindfulness practice by distilling complex protocols into simple, actionable steps without overwhelming the user with more options.",
      image: IMAGES.breatheThree,
      ctaHref: 'https://yajurvendrasinh.github.io/breathe',
      ctaText: "Try It"
    },

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
      title: "Design Artifacts",
      link:'https://yajurvendrasinh.github.io/breathe',
      description: "Monochromatic palette provides more focused action and clear visual animations offloads overwhelm while focusing on mindfulness",
      image: IMAGES.breathePalatte,
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
