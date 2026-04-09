/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from "../components/Navigation";
import GrainOverlay from "../components/GrainOverlay";
import Footer from "../components/Footer";
import ScrollHint from "../components/ScrollHint";

export default function About() {
  return (
    <div className="relative min-h-screen bg-surface text-ink selection:bg-accent selection:text-on-accent overflow-x-hidden">
      <a href="#about-content" className="skip-link">Skip to content</a>
      <GrainOverlay />

      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-surface-lowest/70 backdrop-blur-md h-[calc(4rem_+_var(--sat))] pt-[var(--sat)] border-b border-outline-variant">
        <div className="max-w-7xl mx-auto h-16">
          <Navigation />
        </div>
      </header>

      {/* SideNavBar (Shared Component - Hidden on mobile) */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-surface-lowest border-r-[0.5px] border-outline-variant flex-col py-24 z-40">
        <div className="px-8 mb-16">
          <div className="font-display font-bold text-ink text-xl tracking-tighter">INDEX</div>
          <div className="font-display font-bold uppercase tracking-widest text-[10px] text-ink/40 mt-1">V1.0.4</div>
        </div>
        <nav className="flex flex-col flex-grow" aria-label="About page sections">
          <a 
            href="#/"
            className="flex items-center gap-4 px-8 py-4 font-display font-bold uppercase tracking-widest text-[10px] text-ink hover:bg-surface-muted transition-colors duration-100"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">grid_view</span> WORK
          </a>
          <a 
            href="#about-capabilities"
            className="flex items-center gap-4 px-8 py-4 font-display font-bold uppercase tracking-widest text-[10px] text-ink hover:bg-surface-muted transition-colors duration-100"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">layers</span> CAPABILITIES
          </a>
          <a 
            href="#about-beyond"
            className="flex items-center gap-4 px-8 py-4 font-display font-bold uppercase tracking-widest text-[10px] text-ink hover:bg-surface-muted transition-colors duration-100"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">interests</span> BEYOND THE DESK
          </a>
          <a 
            href="#about-approach"
            className="flex items-center gap-4 px-8 py-4 font-display font-bold uppercase tracking-widest text-[10px] text-ink hover:bg-surface-muted transition-colors duration-100"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">architecture</span> APPROACH
          </a>
          <a 
            href="mailto:yajur.gohil@gmail.com"
            className="flex items-center gap-4 px-8 py-4 font-display font-bold uppercase tracking-widest text-[10px] text-ink hover:bg-surface-muted transition-colors duration-100"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">mail</span> CONNECT
          </a>
        </nav>
      </aside>

      <main id="about-content" className="md:ml-64 pt-[calc(4rem_+_var(--sat))]">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-end px-8 pb-16 md:px-16 md:pb-32 bg-surface relative">
          <div className="max-w-7xl mx-auto w-full">
            <span className="font-display uppercase tracking-[0.5em] text-[10px] text-ink-faint mb-8 block">ABOUT — 01</span>
            <h1 className="font-display font-bold text-[12vw] md:text-[8rem] leading-[0.85] uppercase tracking-tighter text-ink text-balance">
              DESIGN<br/>ENGINEER
            </h1>
            <div className="mt-12 md:mt-20 flex flex-col md:flex-row md:items-end justify-between border-t-[0.5px] border-outline-variant pt-8">
              <p className="font-sans text-xl md:text-2xl max-w-xl text-ink font-light leading-snug">
                A design-engineering practice at the intersection of design systems, platform conventions, and developer enablement — evangelizing UI standards that scale across Salesforce, Roku, Levi's, and Apple.
              </p>
              <div className="mt-8 md:mt-0 text-right flex flex-col gap-6">
                <div>
                  <span className="block font-display text-[10px] tracking-widest text-ink-faint uppercase">BASED IN</span>
                  <span className="font-display font-bold text-2xl tracking-tighter">San Jose, CA</span>
                </div>
                <div>
                  <span className="block font-display text-[10px] tracking-widest text-ink-faint uppercase">EXPERIENCE</span>
                  <span className="font-display font-bold text-2xl tracking-tighter">10+ Years</span>
                </div>
                <div>
                  <span className="block font-display text-[10px] tracking-widest text-ink-faint uppercase">VERTICALS</span>
                  <span className="font-display font-bold text-2xl tracking-tighter">Enterprise, Streaming, Retail, Consumer Tech</span>
                </div>
              </div>
            </div>
          </div>
          <ScrollHint />
        </section>

        {/* Narrative Section */}
        <section className="py-32 px-8 md:px-16 bg-surface-muted">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 max-w-7xl mx-auto">
            <div className="md:col-span-4">
              <h2 className="font-display text-[10px] tracking-[0.5em] uppercase text-ink mb-12 border-b-[0.5px] border-outline-variant pb-4 inline-block">THE ARC</h2>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="font-sans text-lg leading-relaxed text-ink-muted font-light">
                  Started in software engineering, building frontend systems at scale — from Apple's Online Store to Levi's global ecommerce platform. The work was always about bridging what designers envision and what engineers ship, and then making that bridge available to everyone.
                </p>
              </div>
              <div>
                <p className="font-sans text-lg leading-relaxed text-ink-muted font-light">
                  That bridge became the practice. At Roku, it meant publishing a shared component library that enabled multiple teams to ship consistently. At Salesforce, it means evangelizing the COSMOS Design System across Tableau Next — defining the patterns, tokens, and guidelines that product teams adopt, not just consume.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section id="about-capabilities" className="px-8 md:px-16 py-32 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="font-display text-[10px] tracking-[0.5em] uppercase text-ink-faint">CORE CAPABILITIES — V1.0</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t-[0.5px] border-outline-variant border-l-[0.5px]">
              <div className="p-10 border-r-[0.5px] border-b-[0.5px] border-outline-variant hover:bg-accent hover:text-on-accent transition-colors duration-300 group">
                <div className="flex justify-between items-start mb-16">
                  <span className="font-display text-[10px] tracking-widest text-ink-faint group-hover:text-on-accent/50">01</span>
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">layers</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 tracking-tighter">DESIGN SYSTEMS & UI KITS</h3>
                <p className="font-sans text-sm leading-relaxed opacity-60">Building and maintaining component libraries, design tokens, and UI kits that scale — from COSMOS at Salesforce to shared React libraries at Roku and modular pattern systems at Levi's. Ensuring templates, components, and assets are accurate, well-organized, and ready for adoption.</p>
              </div>
              <div className="p-10 border-r-[0.5px] border-b-[0.5px] border-outline-variant hover:bg-accent hover:text-on-accent transition-colors duration-300 group">
                <div className="flex justify-between items-start mb-16">
                  <span className="font-display text-[10px] tracking-widest text-ink-faint group-hover:text-on-accent/50">02</span>
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">campaign</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 tracking-tighter">DESIGN COMMUNICATION</h3>
                <p className="font-sans text-sm leading-relaxed opacity-60">Translating system-level design decisions into clear usage patterns, migration guides, and hands-on enablement. Partnering with UX leads, engineers, and product teams to drive adoption through persuasion and demonstration, not mandates.</p>
              </div>
              <div className="p-10 border-r-[0.5px] border-b-[0.5px] border-outline-variant hover:bg-accent hover:text-on-accent transition-colors duration-300 group">
                <div className="flex justify-between items-start mb-16">
                  <span className="font-display text-[10px] tracking-widest text-ink-faint group-hover:text-on-accent/50">03</span>
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">accessibility_new</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 tracking-tighter">ACCESSIBILITY & INCLUSIVE DESIGN</h3>
                <p className="font-sans text-sm leading-relaxed opacity-60">WCAG 2.1 compliance, ARIA roles, keyboard navigation, and screen reader support — designed in from the start. Internationalization and inclusive patterns that serve worldwide developer and user needs.</p>
              </div>
              <div className="p-10 border-r-[0.5px] border-b-[0.5px] border-outline-variant hover:bg-accent hover:text-on-accent transition-colors duration-300 group">
                <div className="flex justify-between items-start mb-16">
                  <span className="font-display text-[10px] tracking-widest text-ink-faint group-hover:text-on-accent/50">04</span>
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">devices</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 tracking-tighter">MULTI-PLATFORM CRAFT</h3>
                <p className="font-sans text-sm leading-relaxed opacity-60">Enterprise SaaS, streaming media, global retail, consumer tech — 10+ years shipping across verticals where design precision, cross-browser consistency, and platform conventions are non-negotiable.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Beyond the Desk */}
        <section id="about-beyond" className="px-8 md:px-16 py-32 bg-surface-muted">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="font-display text-[10px] tracking-[0.5em] uppercase text-ink-faint">BEYOND THE DESK — V1.0</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t-[0.5px] border-outline-variant border-l-[0.5px]">
              <a href="#/play/nasm-cpt" className="p-10 border-r-[0.5px] border-b-[0.5px] border-outline-variant hover:bg-accent hover:text-on-accent transition-colors duration-300 group">
                <div className="flex justify-between items-start mb-16">
                  <span className="font-display text-[10px] tracking-widest text-ink-faint group-hover:text-on-accent/50">05</span>
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">fitness_center</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 tracking-tighter">HEALTH & FITNESS</h3>
                <p className="font-sans text-sm leading-relaxed opacity-60">NASM-certified personal trainer — applying systematic programming and periodization to strength training. Firsthand experience in the health & fitness vertical.</p>
              </a>
              <a href="#/play/guitar-covers" className="p-10 border-r-[0.5px] border-b-[0.5px] border-outline-variant hover:bg-accent hover:text-on-accent transition-colors duration-300 group">
                <div className="flex justify-between items-start mb-16">
                  <span className="font-display text-[10px] tracking-widest text-ink-faint group-hover:text-on-accent/50">06</span>
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">music_note</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 tracking-tighter">MUSICAL PERFORMANCE</h3>
                <p className="font-sans text-sm leading-relaxed opacity-60">Acoustic and electric guitar arrangements — deconstructing, reinterpreting, and rebuilding songs through tone, dynamics, and personal phrasing.</p>
              </a>
              <a href="#/play/creative-jam" className="p-10 border-r-[0.5px] border-b-[0.5px] border-outline-variant hover:bg-accent hover:text-on-accent transition-colors duration-300 group">
                <div className="flex justify-between items-start mb-16">
                  <span className="font-display text-[10px] tracking-widest text-ink-faint group-hover:text-on-accent/50">07</span>
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">bolt</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 tracking-tighter">DESIGN HACKATHONS</h3>
                <p className="font-sans text-sm leading-relaxed opacity-60">Time-boxed design sprints under constraints — rapid prototyping that surfaces ideas only pressure produces. Creative problem-solving as a practice, not an accident.</p>
              </a>
              <a href="#/play/improv" className="p-10 border-r-[0.5px] border-b-[0.5px] border-outline-variant hover:bg-accent hover:text-on-accent transition-colors duration-300 group">
                <div className="flex justify-between items-start mb-16">
                  <span className="font-display text-[10px] tracking-widest text-ink-faint group-hover:text-on-accent/50">08</span>
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">record_voice_over</span>
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 tracking-tighter">PUBLIC SPEAKING</h3>
                <p className="font-sans text-sm leading-relaxed opacity-60">Improvisational performance — building comfort with spontaneity, audience dynamics, and thinking on your feet. Skills that translate directly to presentations, design critiques, and stakeholder conversations.</p>
              </a>
            </div>
          </div>
        </section>

        {/* Approach Section — uses contrast tokens, inverts in dark mode */}
        <section id="about-approach" className="bg-contrast text-on-contrast px-8 md:px-16 py-40">
          <div className="max-w-7xl mx-auto text-center md:text-left">
            <div className="inline-block border border-on-contrast/30 px-4 py-1 mb-12">
              <span className="font-display text-[10px] tracking-[0.5em] uppercase text-on-contrast">THE APPROACH</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-7xl leading-tight tracking-tighter mb-16 text-balance">
              ENABLE THE ECOSYSTEM, NOT JUST THE INTERFACE.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
              <p className="font-sans text-xl font-light text-on-contrast/60 leading-relaxed italic">
                "The best design work multiplies through others. When component patterns are clear, teams adopt them without friction. When guidelines are well-written, developers build better apps without needing to ask. The goal isn't controlling every pixel — it's enabling every team to get the pixels right."
              </p>
              <div className="flex flex-col gap-6">
                <div className="border-l-[0.5px] border-on-contrast/20 pl-8">
                  <span className="block font-display text-[8px] tracking-[0.3em] text-on-contrast/40 uppercase mb-2">PRINCIPLE A</span>
                  <p className="font-sans text-sm uppercase tracking-widest">Enable Over Control</p>
                </div>
                <div className="border-l-[0.5px] border-on-contrast/20 pl-8">
                  <span className="block font-display text-[8px] tracking-[0.3em] text-on-contrast/40 uppercase mb-2">PRINCIPLE B</span>
                  <p className="font-sans text-sm uppercase tracking-widest">Demonstrate, Then Document</p>
                </div>
                <div className="border-l-[0.5px] border-on-contrast/20 pl-8">
                  <span className="block font-display text-[8px] tracking-[0.3em] text-on-contrast/40 uppercase mb-2">PRINCIPLE C</span>
                  <p className="font-sans text-sm uppercase tracking-widest">Clarity Over Cleverness</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
