# Yajurvendrasinh Gohil

A high-precision digital portfolio architected with a focus on **Digital Brutalism**, structural integrity, and mathematical balance. This project serves as a curation of artifacts and an exploration of raw digital aesthetics, updated for the 2026 landscape. Includes data-driven experience and play-state detail systems, a component library, and a standalone printable HTML resume.

---

## Design Philosophy

### Digital Brutalism

The interface is defined by its raw, unadorned structure. We celebrate the functional nature of the machine through:

- **Monochromatic Palette**: A strict focus on `#f9f9f9` (surface), `#e8e8e8` (surface-high), and pure white tones to emphasize form over color. A dark mode alternative uses `#000000`, `#14213d` (navy), `#fca311` (amber accent), `#e5e5e5`, and `#ffffff`.
- **Structural Grids**: Every element is aligned to a rigorous mathematical grid, ensuring optical balance and precision.
- **Grain & Texture**: A persistent `.grain-overlay` adds a tactile, analog quality to the digital canvas using SVG-generated fractal noise.
- **Artifacts Fade**: A sophisticated `.artifacts-fade` system utilizing `mask` and `backdrop-filter` to create seamless, feathered transitions between content sections.

### Typography

- **Display**: **Space Grotesk** — a proportional sans-serif with geometric character used for all headings and display text.
- **Body**: **Inter** — a variable sans-serif with optical sizing, optimized for screen readability in body text and metadata.
- **Micro-labels**: Uppercase, wide-tracked labels for archival indexing and status indicators.
- **Numeric**: `font-variant-numeric: tabular-nums` applied globally for monospaced number alignment.
- **Headings**: `text-wrap: balance` on display headings for even line breaks.

### Motion & Interaction

- **Layout Animations**: Utilizing `motion` for smooth, physics-based transitions between views, wrapped in `MotionConfig reducedMotion="user"` to respect the user's OS preference.
- **Hero Text Flip**: The homepage hero headline cycles through role pairs (UX/ENGINEER → UX/DESIGNER → UI/DESIGNER → UI/ENGINEER → DESIGN/ENGINEER) using a 3D `rotateX` flip transition. Only one word changes per step, so a single slot flips while the other stays static. Powered by a `FlipWord` component that wraps each word in a `perspective` container and uses `AnimatePresence mode="wait"` for sequential exit/enter. The sequence and timing are defined in `HERO_SEQUENCE` and `FLIP_INTERVAL_MS` constants in `App.tsx`.
- **Hover Reveals**: Metadata and archival details are revealed through precise, sliding animations. In dark mode, card hover overlays use the amber accent (`#fca311`) background with black text for contrast consistency.
- **Atmospheric Depth**: Layered blurs and masks create a sense of physical depth within a flat digital space.
- **Reduced Motion**: A global `prefers-reduced-motion` media query disables all animations and transitions for users who opt out. The hero flip degrades to instant text swaps when Motion detects `prefers-reduced-motion`.

---

## Technical Architecture

### Core Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite` plugin)
- **Animation**: [Motion](https://motion.dev/) (`motion/react`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript 5.8](https://www.typescriptlang.org/) (ES2022 target, bundler module resolution)

### External CDN Dependencies

Loaded via `index.html`, outside the npm dependency graph:

- **[particles.js 2.0.0](https://vincentgarreau.com/particles.js/)**: Renders interactive particle backgrounds on the Home view (repulse on hover, push on click).
- **[Google Material Symbols Outlined](https://fonts.google.com/icons)**: Variable-weight icon font used in the About page sidebar and capability grid.
- **Google Fonts**: Space Grotesk and Inter are loaded via `@import` in `src/index.css`.

### Routing & View Management

The application uses **hash-based routing** without external dependencies. `getViewFromHash()`, `getExperienceIdFromHash()`, and `getPlayIdFromHash()` functions in `App.tsx` map URL hashes to view states:

| Hash               | View         | Description                        |
| ------------------ | ------------ | ---------------------------------- |
| `#/` (or empty)    | `HOME`       | Portfolio home page                |
| `#/project`        | `PROJECT`    | Placeholder project detail page    |
| `#/experience/:id` | `EXPERIENCE` | Data-driven experience detail page |
| `#/play/:id`       | `PLAY`       | Data-driven play-state detail page |
| `#/lab`            | `LIBRARY`    | Component library                  |
| `#/about`          | `ABOUT`      | About page                         |

**Experience routes** use a dynamic `:id` segment parsed via regex. Valid IDs: `salesforce`, `roku`, `levis`, `apple`, `ssr-labs`. Each experience page chains to the next via a "Next Experience" transition (circular: Salesforce → Roku → Levi's → Apple → SSR Labs → Salesforce).

**Play routes** also use a dynamic `:id` segment. Valid IDs: `nasm-cpt`, `guitar-covers`, `creative-jam`, `improv`. Each play page chains to the next via a "Next Play" transition (circular: NASM CPT → Guitar Covers → Creative Jam → Improv → NASM CPT).

A `hashchange` event listener syncs React state with the URL, providing browser back/forward navigation and deep-linking support. Navigation and Footer components use `<a href="#/...">` elements instead of callback props, enabling Cmd+click and middle-click behavior. Non-route hashes (e.g., `#main-content` from skip links) are ignored by the router.

### Advanced CSS Techniques

- **CSS Masks**: Leveraging `mask: linear-gradient` for complex feathering effects that are more performant than traditional opacity gradients.
- **Backdrop Filters**: Extensive use of `backdrop-filter: blur()` to create glassmorphism effects that maintain readability over high-density content.
- **Modern Tailwind Theming**: Utilizing the `@theme` block in Tailwind 4 for centralized, variable-driven design tokens. 15 semantic color tokens (`ink`, `ink-muted`, `ink-subtle`, `ink-faint`, `surface`, `surface-high`, `surface-lowest`, `surface-muted`, `outline-variant`, `accent`, `accent-hover`, `on-accent`, `contrast`, `on-contrast`, `on-contrast-muted`) plus font tokens (`--font-sans`, `--font-display`). All component colors reference these tokens — no hardcoded Tailwind color classes in application code.
- **Dark Mode**: A `.dark` class on `<html>` overrides all color tokens in `@layer base`. Toggled via a self-contained `ThemeToggle` component (Sun/Moon icon) in the Navigation bar, persisted to `localStorage`. The `<meta name="theme-color">` tag updates dynamically. Contrast sections invert from dark-on-light to light-on-dark via `contrast` / `on-contrast` tokens. Card hover overlays (`ArtifactCard`, `RecordCard`) use amber accent (`#fca311`) background with black text in dark mode for design language consistency. The grain overlay uses `filter: invert(1)` in dark mode. Particles.js switches to amber (`#fca311`) particles in dark mode. All token pairings pass WCAG AA/AAA contrast requirements.
- **Safe Area Insets**: CSS custom properties (`--sat`, `--sar`, `--sab`, `--sal`) map `env(safe-area-inset-*)` values for notched-device support. `viewport-fit=cover` enables edge-to-edge rendering. All fixed headers and the footer account for safe areas.
- **Reduced Motion**: A global `@media (prefers-reduced-motion: reduce)` rule zeroes out all `animation-duration`, `animation-iteration-count`, `transition-duration`, and `scroll-behavior` for accessibility.
- **Focus Visible**: A global base rule on `button`, `a`, and `[role="button"]` provides a consistent `outline-2 outline-offset-2 outline-accent` focus ring via `focus-visible` (amber in dark mode, black in light mode).
- **Touch Optimization**: `touch-action: manipulation` is applied globally to all interactive elements, eliminating the 300ms tap delay on mobile.

### Path Aliases

The `@/*` alias resolves to the project root and is configured in both `tsconfig.json` and `vite.config.ts`.

---

## Local Environment Setup

### Prerequisites

- **Node.js**: Version 18.0.0 or higher.
- **npm**: Version 9.0.0 or higher.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd linear-precision
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`. No environment variables or API keys are required.

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

### 6. Type-Check (Lint)

```bash
npm run lint
```

Runs `tsc --noEmit` for type-only validation without emitting JS.

### 7. Clean Build Artifacts

```bash
npm run clean
```

Removes the `dist/` directory.

---

## Project Structure

```
linear-precision/
├── index.html              # Entry HTML — meta tags, CDN scripts (particles.js, Material Symbols)
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript config (ES2022, bundler resolution, @/* alias, vite/client types)
├── vite.config.ts          # Vite config (React plugin, Tailwind plugin)
├── public/
│   └── resume.html         # Standalone printable HTML resume — responsive with print-optimized A4 layout and floating PDF download button
├── SKILLS/
│   ├── IA_SKILL.md         # Information Architecture skill reference
│   ├── CO-Author_SKILL.md  # Co-authoring guidelines
│   ├── WEB_GUIDE_SKILL.md  # Web development guide
│   ├── CANVAS_SKILL.md     # Canvas/design skill reference
│   └── FRONTEND_SKILL.md   # Frontend development skill reference
└── src/
    ├── main.tsx            # React 19 entry point (StrictMode, createRoot, MotionConfig reducedMotion)
    ├── App.tsx             # Root component — hash-based router, particles.js init, Home view layout
    ├── index.css           # Tailwind 4 @theme tokens, safe-area variables, base layer, grain-overlay & artifacts-fade utilities
    ├── vite-env.d.ts       # Vite client type declarations (enables image imports in TypeScript)
    ├── data/
    │   ├── images.ts       # Centralized image constants — local imports + remote URLs
    │   ├── experiences.ts  # Structured data for 5 experience entries (Salesforce, Roku, Levi's, Apple, SSR Labs)
    │   └── plays.ts        # Structured data for 4 play-state entries (NASM CPT, Guitar Covers, Creative Jam, Improv)
    ├── pages/
    │   ├── About.tsx           # About page — sidebar navigation, career narrative, capabilities grid
    │   ├── ComponentLibrary.tsx # Library page — catalogues reusable components with isolated view mode
    │   ├── ExperienceDetail.tsx # Data-driven experience detail — scroll-aware header, role content, tech stack, bento grid
    │   ├── PlayState.tsx        # Data-driven play-state detail — scroll-aware header, dynamic terminal layouts
    │   └── ProjectDetail.tsx    # Project detail — scroll-aware expanding header, image stacking, bento grid
    └── components/
        ├── ArtifactCard.tsx        # Experience card with configurable aspect ratio and full-overlay hover reveal
        ├── AsymmetricDetail.tsx     # Two-column asymmetric layout section
        ├── BentoGrid.tsx           # Asymmetric 4-column bento grid with imagery, stats, and icon cells
        ├── FloatingMailButton.tsx   # Fixed-position email CTA button (standalone, not currently rendered)
        ├── Footer.tsx              # Footer with centered internal nav links (HOME, LIBRARY)
        ├── GrainOverlay.tsx        # Fixed full-screen SVG fractal noise overlay (z-index 70)
        ├── Manifesto.tsx           # Sticky-scrolling manifesto section (Reduction, Precision, Honesty)
        ├── Navigation.tsx          # Fixed top nav — HOME, LIBRARY, LINKEDIN (external), theme toggle, RESUME CTA
        ├── RecordCard.tsx          # Archival record card — grayscale image with slide-up hover reveal
        ├── SpecCard.tsx            # Specification card for technical details
        ├── ThemeToggle.tsx         # Self-contained dark mode toggle — Sun/Moon icon, localStorage, .dark class
        ├── TechnicalGrid.tsx       # Full-width dark section — structural integrity writeup, terminal status block
        └── Watermark.tsx           # Decorative watermark element
```

---

## Pages

| Page                 | Route              | View Key     | Description                                                                                                                                                                                                                                                                                                                |
| -------------------- | ------------------ | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Home**             | `#/`               | `HOME`       | Hero with particles.js background and flip-text animation, selected artifacts grid (4 experiences: Salesforce, Roku, Levi Strauss, Apple), archival records (4 play-state entries), component specs, asymmetric detail section, manifesto, and technical capabilities.                                                     |
| **ProjectDetail**    | `#/project`        | `PROJECT`    | Scroll-aware header that expands to show project title once the hero scrolls out of view. Includes image stacking, `TechnicalGrid`, `BentoGrid`, and a "next project" transition.                                                                                                                                          |
| **ExperienceDetail** | `#/experience/:id` | `EXPERIENCE` | Data-driven experience page. Accepts `experienceId` prop, renders role-specific hero, two image+content sections, a 3-column tech stack grid (dark bg), `BentoGrid`, and a "next experience" transition. Content sourced from `src/data/experiences.ts`.                                                                   |
| **PlayState**        | `#/play/:id`       | `PLAY`       | Data-driven play-state page for "Outside of Work" activities. Scroll-aware header, hero with tags, inline technical grid driven by per-play data, dynamic terminal panel layouts with optional facade-pattern social embeds (Instagram / YouTube), and a "next play" transition. Content sourced from `src/data/plays.ts`. |
| **ComponentLibrary** | `#/lab`            | `LIBRARY`    | Catalogues reusable components (Manifesto, ArtifactCard, RecordCard, TechnicalGrid, BentoGrid) with full-width previews, centered descriptions, and an isolated full-view mode.                                                                                                                                            |
| **About**            | `#/about`          | `ABOUT`      | Desktop-only fixed sidebar with task-based navigation. Career narrative ("The Arc"), capabilities grid (Design Systems, Frontend Engineering, Accessibility, Cross-Functional Delivery), and design approach section.                                                                                                      |

---

## Data Files

| File                      | Description                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/data/images.ts`      | Centralized `IMAGES` constant with local image imports (`salesforceTower`, `roku`, `leviStrauss`, `apple`) and remote placeholder URLs. Used across `ArtifactCard`s and detail pages.                                                                                                                                                                                                                                    |
| `src/data/experiences.ts` | Typed `Experience[]` array with structured content for 5 roles: company, role, dates, description, tags, two content sections (title + text + image), tech stack groups, bento image, and next-experience link. Exports `getExperienceById()` lookup.                                                                                                                                                                    |
| `src/data/plays.ts`       | Typed `Play[]` array with structured content for 4 play-state entries. Each entry includes: id, title, category, year, description, tags, side label, image, `techGrid` (architecture items + terminal data), `terminalLayout` variant, next-play link, and optional `instagramPosts` / `youtubeVideos` arrays (`EmbedItem[]` with `id`, `thumbnail`, `label`). Exports `getPlayById()` lookup and the `EmbedItem` type. |
| `public/resume.html`      | Standalone HTML resume with embedded CSS. Print-optimized for single-page A4 output. Responsive breakpoints for tablet (≤768px) and mobile (≤480px). Includes a floating download button that triggers `window.print()` for PDF export. Contact links styled in `#1a56db` blue.                                                                                                                                          |

---

## Components

| Component            | Props                     | Key Behavior                                                                                                                                                                                                            |
| -------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ArtifactCard`       | `ArtifactCardProps`       | Configurable `aspect` ratio, full overlay on hover revealing project/role/year metadata. Dark mode: amber accent bg with black text.                                                                                    |
| `RecordCard`         | `RecordCardProps`         | Grayscale + brightness filters on idle; `translate-y-full` slide-up reveal with custom easing `[0.16,1,0.3,1]`. Dark mode: amber accent bg with black text.                                                             |
| `BentoGrid`          | `BentoGridProps`          | 4-col × 2-row asymmetric grid; accepts a `circuitImage` prop for the hero cell.                                                                                                                                         |
| `TechnicalGrid`      | _(none)_                  | Self-contained dark section; displays architectural principles and a terminal-style status block.                                                                                                                       |
| `GrainOverlay`       | _(none)_                  | Renders an inline SVG fractal noise texture at `opacity: 0.03`, fixed at `z-index: 70`.                                                                                                                                 |
| `Manifesto`          | _(none)_                  | Sticky left column with scrolling right-column principles (Reduction, Precision, Honesty).                                                                                                                              |
| `Navigation`         | `NavigationProps`         | Three nav items (HOME, LIBRARY, LINKEDIN) with hash-based routing, active-state underline, brand link to `#/`, `ThemeToggle`, and RESUME CTA linking to `/resume.html`. `activeItem` prop controls the underlined item. |
| `ThemeToggle`        | _(none)_                  | Self-contained dark mode switch (Sun/Moon icon, `role="switch"`, `aria-checked`). Manages `.dark` class, `localStorage`, `<meta name="theme-color">`, and dispatches a `themechange` CustomEvent.                       |
| `Footer`             | _(none)_                  | Centered internal `<a>` links (HOME, LIBRARY) with hash routing. No external links.                                                                                                                                     |
| `FloatingMailButton` | `FloatingMailButtonProps` | Fixed-position email CTA. Accepts optional `href`. Currently extracted as a standalone component but not rendered in any view.                                                                                          |
| `AsymmetricDetail`   | —                         | Two-column asymmetric layout used on the Home page for featured content.                                                                                                                                                |
| `SpecCard`           | —                         | Small specification/stat card used in the Home page spec grid.                                                                                                                                                          |
| `Watermark`          | —                         | Decorative watermark element.                                                                                                                                                                                           |

---

## PlayState Terminal Layouts

The `PlayState` page renders a dynamic terminal panel whose layout varies per play entry, controlled by the `terminalLayout` field on each `Play` object:

| Layout     | Plays                   | Description                                                                                                                                                                                                                                                                   |
| ---------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `grid-2x2` | NASM CPT, Guitar Covers | Four cells in a 2×2 grid. When social embed data exists (`instagramPosts` or `youtubeVideos`), renders facade-pattern embeds (static thumbnail + play button; iframe loads only on user click). Otherwise falls back to terminal metadata cells (icon + status + data lines). |
| `bento`    | Creative Jam            | Asymmetric 4-column × 2-row grid. Left half: tall terminal panel spanning both rows with status and decorative scan lines. Top-right: play title + description. Bottom-right splits into an icon cell (DraftingCompass with hover scale) and an index/output cell.            |
| `single`   | Improv                  | Single full-width panel with Terminal icon, status, decorative scan lines, and all terminal lines rendered together. Clean and minimal.                                                                                                                                       |

### Social Embed Facade Pattern

Play-state entries can optionally include `instagramPosts` or `youtubeVideos` arrays (typed as `EmbedItem[]` with `id`, `thumbnail`, and `label` fields). When present, the `grid-2x2` terminal panel renders an `EmbedFacade` component instead of the default terminal cells.

**How it works:**

1. **Before click**: A static thumbnail image is shown with a `play_circle` icon overlay. The element is an `<a>` tag linking to the original post/video URL, so it functions as a standard link if JS is unavailable.
2. **On click**: The `<a>` is replaced by an `<iframe>` that loads the embed (Instagram via `instagram.com/p/{id}/embed/`, YouTube via `youtube-nocookie.com/embed/{id}`).

**Performance**: Zero third-party JavaScript on initial page load. Each thumbnail costs ~20-50KB vs ~1-2MB per eager iframe. No Cumulative Layout Shift — dimensions are locked via `aspect-square` (Instagram) or `aspect-video` (YouTube).

**Accessibility**: Each facade is an `<a>` element with a descriptive `aria-label` (e.g., "Load embed: Deadlift PR session"). Thumbnails carry meaningful `alt` text. No keyboard trap exists until the user explicitly activates an embed. YouTube embeds use the `youtube-nocookie.com` domain for privacy-enhanced mode (no tracking cookies until playback).

---

## Accessibility

- **Skip Links**: Every page includes a visually hidden "Skip to content" link that becomes visible on focus, allowing keyboard users to bypass the fixed navigation.
- **Focus Visible**: All interactive elements (`button`, `a`, `[role="button"]`) receive a consistent `outline-2 outline-offset-2 outline-accent` focus ring via `focus-visible` (black in light mode, amber in dark mode).
- **Semantic HTML**: Interactive cards (`ArtifactCard`, `RecordCard`) use `<button>` elements instead of `<div>` with click handlers. Navigation uses `<a>` elements with `href` attributes.
- **ARIA Attributes**: Decorative icons use `aria-hidden="true"`. The theme toggle uses `role="switch"` with `aria-checked`.
- **Heading Hierarchy**: The Home hero uses `<h1>` for the primary heading. Section headings follow a logical `<h2>` → `<h3>` hierarchy.
- **Reduced Motion**: `MotionConfig reducedMotion="user"` respects the OS `prefers-reduced-motion` setting globally. A CSS media query also disables all CSS animations and transitions. The pulsing availability indicator uses `motion-reduce:animate-none`. Particles.js is disabled entirely when reduced motion is preferred.

---

## Performance

- **Image Optimization**: All `<img>` elements include explicit `width` and `height` attributes (prevents layout shift) and `loading="lazy"` for below-the-fold images. Local images are imported as ES modules and processed by Vite's asset pipeline for hashing and optimization.
- **Transition Specificity**: `transition-all` replaced with specific property transitions (`transition-colors`, `transition-[height]`, `transition-[filter]`, `transition-[font-style]`) to reduce paint cost.
- **Scroll Observation**: `ProjectDetail`, `ExperienceDetail`, and `PlayState` use `IntersectionObserver` instead of scroll-event-based `getBoundingClientRect` for the expanding header.
- **Script Loading**: The particles.js CDN script uses the `defer` attribute to avoid blocking the initial render.
- **Platform Meta Tags**: `<meta name="theme-color">` updates dynamically on theme change (`#f9f9f9` light / `#000000` dark). `<meta name="color-scheme">` enables the browser to render the correct chrome color before CSS loads.

---

## License

All source files are marked with `SPDX-License-Identifier: Apache-2.0`.

---
