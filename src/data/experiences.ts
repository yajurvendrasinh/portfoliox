/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { IMAGES } from "./images";

export interface ExperienceManifestoItem {
  id: string;
  text: string;
}

export interface Experience {
  id: string;
  index: string;
  company: string;
  role: string;
  dates: string;
  year: string;
  description: string;
  tags: string[];
  sideLabel: string;
  sections: {
    primary: { title: string; text: string; image: string };
    secondary: { title: string; text: string; image: string };
  };
  manifesto: {
    label: string;
    title: string;
    items: ExperienceManifestoItem[];
  };
  techStack: { label: string; items: string[] }[];
  bentoImage: string;
  nextImage: string;
  prev: { id: string; name: string };
  next: { id: string; name: string };
}

export const EXPERIENCES: Experience[] = [
  {
    id: "salesforce",
    index: "01",
    company: "Salesforce",
    role: "Sr. Software Engineer — Frontend",
    dates: "Jan 2024 – Present",
    year: "2024",
    description:
      "Led design system adoption and accessibility-first re-usable component architecture across Salesforce's Tableau Next ecosystem.",
    tags: ["Lightning Design System - SLDS 2", "Design Tokens", "Accessibility", "Figma", "Agentic AI"],
    sideLabel: "SALESFORCE_COSMOS_DS",
    sections: {
      primary: {
        title: "Design System",
        text: "Championed the adoption of Salesforce's COSMOS Design System across Tableau Next — defining component patterns, usage guidelines, and migration paths that unified 3+ product teams on a shared design language. Partnered with UX Leads and Design System teams to uplift legacy lightning web interfaces to SLDS Plus components and design tokens.",
        image: "",
      },
      secondary: {
        title: "Accessible Design",
        text: "Drove WCAG 2.1 accessibility compliance on Tableau Next dashboards to exceed minimum of 90% compliance across the dashboard experience— designing and implementing ARIA roles, keyboard navigation, and screen reader support in partnership with UX and Developers. Owned end-to-end design of reusable product UI including Unified Filters, Data Pickers, and Operator Panels — from user flows and Figma prototypes through to production LWC with TypeScript.",
        image: "",
      },
    },
    manifesto: {
      label: "Tableau Next",
      title: "Agentic Design System",
      items: [
        { id: "OVERVIEW", text: "Salesforce Lightning Design System 2 (SLDS 2), is a complete AI Design System framework that helps ensure designers and developers create consistent, accessible, and scalable user interfaces in the age of ai and agents." },
        { id: "CHALLENGE", text: "Adopting and building of SLDS 2 that decouples the structure from the visual style that provides customization and theming capabilities at the same time adhereing to SLDS for current products and design language already adopted by consumers." },
        { id: "MY ROLE", text: "Uplifting Tableau Next with SLDS 2 Design System and COSMOS theme and translating enterprise component standards into usage patterns, migration guides, and hands-on enablement that aligned 3+ product teams on a unified design language." },
        { id: "RESULTS", text: "Designed and published reusable product components from Figma prototypes through production LWC with TypeScript, maintaining design fidelity across the handoff. Embedded WCAG 2.1 accessibility as a design constraint, not a retrofit. ARIA roles, keyboard navigation, and screen reader support designed into every component from the start." },
        { id: "PROCESS", text: "Collaborating with designers, developer on regular basis and setting up strict standards of design token usage, code quality and standards, progressive design and css fallback variables for legacy support." },
      ],
    },
    techStack: [
      { label: "Frontend", items: ["LWC", "TypeScript", "SLDS Plus"] },
      { label: "Design", items: ["Figma", "COSMOS DS", "Design Tokens"] },
      { label: "Standards", items: ["WCAG 2.1", "ARIA"] },
    ],
    bentoImage: "",
    nextImage: IMAGES.prism,
    prev: { id: "levis", name: "Levi Strauss & Co." },
    next: { id: "roku", name: "Roku Inc." },
  },
  {
    id: "roku",
    index: "02",
    company: "Roku Inc.",
    role: "Sr. Software Engineer — Frontend",
    dates: "Jan 2021 – Dec 2023",
    year: "2021",
    description:
      "Component library architecture, data-driven UX, and high-stakes streaming partner launches for Roku's consumer web platform.",
    tags: ["Component Library", "Consumer UX", "Data-driven Design"],
    sideLabel: "ROKU_WEB_PLATFORM",
    sections: {
      primary: {
        title: "Consumer Launches at Scale",
        text: "Owned frontend and UX implementation for Paramount+, HBO Max, and Peacock — designing user onboarding, device activation, and account management experiences for Roku's web platform. Delivered under tight launch timelines with product and design stakeholders where design precision, cross-browser consistency, and accessibility were non-negotiable.",
        image: "",
      },
      secondary: {
        title: "Shared Design Patterns",
        text: "Published a consumer-centric React component library as an NPM package — establishing shared patterns that reduced design-to-development friction across multiple teams. Instrumented touchpoints with GTM tagging to feed engagement and performance data back into UX decisions.",
        image: "",
      },
    },
    manifesto: {
      label: "Roku",
      title: "User Onboarding Experience",
      items: [
        { id: "OVERVIEW", text: "ROKU's onboarding experience is one of the highest velocity touch points for consumer and requires cohesive and smoother user experience" },
        { id: "CHALLENGE", text: "There was a requirement to have unison library of components that can be utilized and re-utilized across different brands and offerings such as ROKU channel store, ROKU offers and ROKU User Account" },
        { id: "MY ROLE", text: "Owned the UX and frontend for partner offers and integrations on the Roku web platform for Paramount+, HBO Max, and Peacock — high-stakes partner launches where design precision, cross-browser consistency, and accessibility were non-negotiable." },
        { id: "RESULTS", text: "Published a React component library as an NPM package — shared design patterns that reduced design-to-development friction and increased velocity across multiple Roku teams." },
        { id: "PROCESS", text: "Instrumented every touchpoint with GTM tagging - feeding quantitative engagement and performance data back into UX decisions so design choices were validated by behavior." },
      ],
    },
    techStack: [
      { label: "Frontend", items: ["React", "NPM", "JavaScript", "FIGMA"] },
      { label: "Analytics", items: ["GTM", "Page Views", "Engagement"] },
      { label: "Standards", items: ["ADA", "W3C", "Cross-browser Compliance"] },
    ],
    bentoImage: "",
    nextImage: IMAGES.vellum,
    prev: { id: "salesforce", name: "Salesforce" },
    next: { id: "levis", name: "Levi Strauss & Co." },
  },
  {
    id: "levis",
    index: "03",
    company: "Levi Strauss & Co.",
    role: "Front End Web Developer",
    dates: "Jun 2017 – Dec 2020",
    year: "2017",
    description:
      "Global design language, modular component library, and internationalized ecommerce experiences for Levi.com and Dockers.com.",
    tags: ["Design Language", "i18n", "Marketing and Branding", "Design Sprints", "Headless Frontend"],
    sideLabel: "LEVIS_GLOBAL_ECOM",
    sections: {
      primary: {
        title: "Marketing and Branding Experiences",
        text: "Defined the consumer-facing design language and built a modular component library for Levi.com and Dockers.com — translating Figma and Zeplin designs into a scalable headless frontend on SAP Hybris and Content Stack. Ensured accessibility, internationalization, and SEO compliance across global markets.",
        image: IMAGES.prism,
      },
      secondary: {
        title: "Cross-Functional Delivery",
        text: "Partnered with Design, Marketing, Engineering, and Branding in Agile and Design sprints — contributing to UI/UX scoping from ideation through delivery. Coordinated multi-market launches and offshore collaboration for consistent, on-time quality.",
        image: IMAGES.kinetic,
      },
    },
    manifesto: {
      label: "Levi's Strauss & Co.",
      title: "Levi's Global Ecommerce",
      items: [
        { id: "OVERVIEW", text: "Levi's not only wanted to build a memorable online shopping experience but also uplift the brand identity while provideing the consumers experience of being a Levi's Family. Building online web presence and spearheading the design language for sister brands was one of the crucial part of the puzzle." },
        { id: "CHALLENGE", text: "Defined two generations of design language and modular component library for Levi.com and Dockers.com — translating Figma and Zeplin into a scalable headless frontend that maintained fidelity across global markets, browsers, and devices." },
        { id: "MY ROLE", text: "Bulding and brainstorming UX flows, UI Component and accessibility guidelines for components to be utilized on homepage, marketing campaign pages and product landing pages. " },
        { id: "RESULTS", text: "Delivered responsive, accessible, internationalized, and SEO compliant global ecommerce platfrom — while coordinating with regional teams to serve worldwide needs across multi-market launches." },
        { id: "PROCESS", text: "Partnered with Design, Marketing, and Engineering in Agile and Design sprints — from ideation through delivery, coordinating offshore collaboration for on-time global promo and marketing rollouts." },
      ],
    },
    techStack: [
      { label: "Frontend", items: ["JavaScript", "SASS", "Vue.js", "Figma", "Zeplin"] },
      { label: "Platform", items: ["SAP Hybris", "Content Stack CMS", "Headless"] },
      { label: "Standards", items: ["W3C/ADA", "SEO", "i18n"] },
    ],
    bentoImage: IMAGES.facade,
    nextImage: IMAGES.carbon,
    prev: { id: "roku", name: "Roku Inc." },
    next: { id: "salesforce", name: "Salesforce" },
  },
];

export function getExperienceById(id: string): Experience | undefined {
  return EXPERIENCES.find((exp) => exp.id === id);
}
