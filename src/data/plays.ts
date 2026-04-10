/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { IMAGES } from "./images";

export interface PlayTechGrid {
  items: { label: string; title: string; text: string }[];
  terminal: { status: string; lines: string[] };
}

export interface EmbedItem {
  id: string;
  thumbnail: string;
  label: string;
}

export interface Play {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  sideLabel: string;
  image: string;
  techGrid: PlayTechGrid;
  terminalLayout: "grid-2x2" | "bento" | "single";
  prev: { id: string; name: string };
  next: { id: string; name: string };
  instagramPosts?: EmbedItem[];
  youtubeVideos?: EmbedItem[];
  bentoImages?: { hero: string; cell1: string; cell2: string };
}

export const PLAYS: Play[] = [
  {
    id: "nasm-cpt",
    index: "04",
    title: "NASM CPT",
    category: "Fitness",
    year: "2022",
    description:
      "NASM-certified personal trainer applying systematic programming, progressive overload, and periodization to strength and hypertrophy training.",
    tags: ["Strength", "Periodization", "Nutrition"],
    sideLabel: "NASM_CERTIFIED_PT",
    image: IMAGES.prism,
    techGrid: {
      items: [
        {
          label: "Methodology // 01",
          title: "Driving Force",
          text: "I aim to inspire and motivate my friends and family to achieve their goals through a combination of education, accountability, and a fun and challenging training experience.",
        },
        {
          label: "Methodology // 02",
          title: "Training Architecture",
          text: "Macro, meso, and micro cycle planning that balances hypertrophy, strength, and deload phases — tracking volume, intensity, and recovery to drive adaptation and most importantly, pure fun and adrenalin rush.",
        },
      ],
      terminal: {
        status: "Certified",
        lines: [
          "NASM_CPT_CREDENTIAL: Active",
          "TRAINING_PROTOCOL: OPT MODEL",
          "SPECIALIZATION: Strength / Hypertrophy",
        ],
      },
    },
    terminalLayout: "grid-2x2",
    prev: { id: "improv", name: "Improv" },
    next: { id: "guitar-covers", name: "Guitar Covers" },
    instagramPosts: [
      {
        id: "PLACEHOLDER_1",
        thumbnail: IMAGES.nasm,
        label: "Training session — progressive overload",
      },
      {
        id: "PLACEHOLDER_2",
        thumbnail: IMAGES.nasm,
        label: "OPT model periodization cycle",
      },
      {
        id: "PLACEHOLDER_3",
        thumbnail: IMAGES.nasm,
        label: "Strength programming breakdown",
      },
      {
        id: "PLACEHOLDER_4",
        thumbnail: IMAGES.nasm,
        label: "Hypertrophy phase results",
      },
    ],
  },
  {
    id: "guitar-covers",
    index: "05",
    title: "Guitar Covers",
    category: "Music",
    year: "2024",
    description:
      "As a instrumental metal/rock, progressive-rock guitarist, these are some of my attempts to replicate the artists' emotions and interpretations.",
    tags: ["Ibanez", "PRS", "Quad Cortex"],
    sideLabel: "GUITAR_SESSIONS",
    image: IMAGES.carbon,
    techGrid: {
      items: [
        {
          label: "Process // 01",
          title: "Active Listening",
          text: "I take time in listening to the original recording and understanding the artist's emotions and interpretations. This takes multiple listens to fully understand the song and the artist's intent.",
        },
        {
          label: "Process // 02",
          title: "Active Learning",
          text: "Layering finger and picking patterns, speed and articulation to replicate the essence of the original recording as closely as possible with the flavour of my own.",
        },
      ],
      terminal: {
        status: "Recording",
        lines: [
          "SIGNAL_CHAIN: Guitar > Interface > DAW",
          "TUNING_REF: A440 / Drop-D / DADGAD",
          "OUTPUT: Cover Sessions / Live Takes",
        ],
      },
    },
    terminalLayout: "grid-2x2",
    prev: { id: "nasm-cpt", name: "NASM CPT" },
    next: { id: "creative-jam", name: "Creative Jam" },
    youtubeVideos: [
      {
        id: "Ll88xYR-tVU",
        thumbnail: "https://img.youtube.com/vi/Ll88xYR-tVU/hqdefault.jpg",
        label: "Guitar cover — Session 1",
      },
      {
        id: "l40EzSbQBK8",
        thumbnail: "https://img.youtube.com/vi/l40EzSbQBK8/hqdefault.jpg",
        label: "Guitar cover — Session 2",
      },
      {
        id: "FxwgQgmlSNY",
        thumbnail: "https://img.youtube.com/vi/FxwgQgmlSNY/hqdefault.jpg",
        label: "Guitar cover — Session 3",
      },
      {
        id: "SzoL3bFaODY",
        thumbnail: "https://img.youtube.com/vi/SzoL3bFaODY/hqdefault.jpg",
        label: "Guitar cover — Session 4",
      },
    ],
  },
  {
    id: "creative-jam",
    index: "06",
    title: "Adobe Creative Jam",
    category: "Design Hackathon",
    year: "2024",
    description:
      "Time-boxed design hackathons — rapid prototyping under constraints to push creative boundaries and explore ideas that don't fit into day-to-day product work.",
    tags: ["Adobe Firefly", "Campaign Creation", "Branding"],
    sideLabel: "CREATIVE_JAM_SESSION",
    image: IMAGES.vanta,
    techGrid: {
      items: [
        {
          label: "Framework // 01",
          title: "Rapid Prototyping",
          text: "Constraint-driven design sprints where the clock is the primary design tool — forcing decisions, eliminating overthinking, and surfacing ideas that only emerge under pressure.",
        },
        {
          label: "Framework // 02",
          title: "Cross-Pollination",
          text: "Pulling patterns from unrelated domains — architecture, music, data visualization — and colliding them with product design to generate unexpected interface concepts.",
        },
      ],
      terminal: {
        status: "Active",
        lines: [
          "FORMAT: 4hr Sprint / Solo or Team",
          "TOOLS: Figma / Cursor / Pen+Paper",
          "OUTPUT: Prototype + Concept Deck",
        ],
      },
    },
    terminalLayout: "bento",
    prev: { id: "guitar-covers", name: "Guitar Covers" },
    next: { id: "improv", name: "Improv" },
    bentoImages: {
      hero: IMAGES.cjHero,
      cell1: IMAGES.cjEvent1,
      cell2: IMAGES.cjEvent2,
    },
  },
  {
    id: "improv",
    index: "07",
    title: "Improv",
    category: "Public Speaking",
    year: "2024",
    description:
      "Improvisational performance and public speaking — building comfort with spontaneity, audience dynamics, and thinking on your feet.",
    tags: ["Performance", "Spontaneity", "Storytelling"],
    sideLabel: "IMPROV_PERFORMANCE",
    image: IMAGES.monolith,
    techGrid: {
      items: [
        {
          label: "Discipline // 01",
          title: "Spontaneous Performance",
          text: 'Training the instinct to build on what\'s given rather than planning ahead — "Yes, and" as a design philosophy for real-time creative decisions.',
        },
        {
          label: "Discipline // 02",
          title: "Audience Dynamics",
          text: "Reading the room, calibrating energy, and adapting delivery in real time — skills that translate directly to stakeholder presentations, design critiques, and cross-functional collaboration.",
        },
      ],
      terminal: {
        status: "Performing",
        lines: [
          "FORMAT: Short-form / Long-form",
          "VENUE: Live Stage / Workshop",
          "PRINCIPLE: Yes, And",
        ],
      },
    },
    terminalLayout: "single",
    prev: { id: "creative-jam", name: "Creative Jam" },
    next: { id: "nasm-cpt", name: "NASM CPT" },
  },
];

export function getPlayById(id: string): Play | undefined {
  return PLAYS.find((p) => p.id === id);
}
