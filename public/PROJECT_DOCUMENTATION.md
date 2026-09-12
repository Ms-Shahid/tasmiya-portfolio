# Tasmiya Amreen Portfolio — Project Documentation

## Executive Summary

**Project Name:** Tasmiya Amreen HR Portfolio Website  
**Purpose:** A modern, responsive portfolio website showcasing Tasmiya's professional background in Human Resources, her experience, skills, and HR case studies.  
**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router DOM  
**Status:** MVP Complete — Deployed on Vercel  
**Repository:** `/Users/mohammedshahid/Developer/code/side-projects/tasmiya-portfolio`

---

## Project Overview

### What This Project Does

The portfolio is a **single-page application (SPA)** that presents Tasmiya's professional profile through five pages:

1. **Home** — Hero landing page with name, role, and call-to-action buttons
2. **About** — Bio, personal interests, and connection options
3. **Experience** — Timeline of education and work experience, plus technical skills
4. **Projects** — Grid of six HR case studies with outcomes
5. **Contact** — Direct links to email and LinkedIn

The site emphasizes **professional aesthetics** with a dark theme (dark teal/gold accents), smooth animations via Framer Motion, and full accessibility support including reduced-motion preference.

---

## Technology Stack

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Framework** | React | 18.3.1 | UI component library |
| **Language** | TypeScript | ~5.8.3 | Type-safe development |
| **Build Tool** | Vite | 5.4.19 | Fast dev server and bundler |
| **Styling** | Tailwind CSS | 3.4.17 | Utility-first CSS framework |
| **Animations** | Framer Motion | 11.18.2 | Page and component transitions |
| **Routing** | React Router DOM | 6.30.1 | Client-side SPA routing |
| **Icons** | Lucide React | 0.511.0 | SVG icon library |
| **CSS Processing** | PostCSS, Autoprefixer | Latest | CSS vendor prefixing |
| **Deployment** | Vercel | - | Hosting and CI/CD |
| **Linting** | Oxlint | Built-in | Code quality (type-aware) |

---

## Project Structure

```
tasmiya-portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.tsx          # Root layout with <Outlet>
│   │   │   ├── Navbar.tsx          # Fixed top navigation bar
│   │   │   └── PageWrapper.tsx     # Page fade-in/out animation wrapper
│   │   ├── motion/
│   │   │   └── MotionSection.tsx   # Framer Motion reveal-on-scroll wrapper
│   │   └── ui/
│   │       ├── SectionHeading.tsx  # Page section headings
│   │       ├── SkillChip.tsx       # Skill tag pills (gold, teal, ghost)
│   │       ├── Button.tsx          # CTA buttons (primary, ghost)
│   │       ├── TimelineEntry.tsx   # Timeline item (work/education)
│   │       └── CaseStudyCard.tsx   # Project case study card
│   ├── data/
│   │   ├── experience.ts           # Exported experience data & interface
│   │   ├── projects.ts             # Exported project data & interface
│   │   └── skills.ts               # Exported skills data & interface
│   ├── hooks/
│   │   └── useReducedMotion.ts     # Detects prefers-reduced-motion
│   ├── pages/
│   │   ├── Home.tsx                # Hero landing page
│   │   ├── About.tsx               # About & personal info
│   │   ├── Experience.tsx          # Timeline + skills
│   │   ├── Projects.tsx            # Case study grid
│   │   └── Contact.tsx             # Email/LinkedIn links
│   ├── styles/
│   │   └── globals.css             # Tailwind directives + theme tokens
│   ├── assets/                     # SVG icons, images (future)
│   ├── App.tsx                     # Root route configuration
│   ├── main.tsx                    # React DOM render entry
│   ├── vite-env.d.ts               # Vite environment types
│   └── index.css                   # Tailwind import (minimal)
├── .kiro/
│   ├── PROJECT_DOCUMENTATION.md    # This file
│   └── specs/
│       └── hr-portfolio-website/
│           └── tasks.md            # Detailed implementation spec
├── public/                          # Static files
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.ts              # Tailwind theme tokens
├── postcss.config.js               # PostCSS plugins
├── vercel.json                     # Vercel SPA deployment config
├── package.json                    # Dependencies and scripts
├── package-lock.json               # Dependency lock file
├── .env                            # Runtime environment variables
├── .env.example                    # Environment variable template
├── .oxlintrc.json                  # Oxlint configuration
└── README.md                       # Quick start guide
```

---

## Key Concepts & Architectural Patterns

### 1. **Routing Architecture**
- **BrowserRouter** from React Router v6 wraps all pages
- **Nested routes** under a shared `<Layout>` component
- **Catch-all route** (`*`) redirects unknown paths to home (`/`)
- **Active route highlighting** in navbar via `useLocation` hook

### 2. **Styling & Theme**
- **Tailwind CSS** with custom colour tokens:
  - `bg-[#0D1117]` — Primary dark background
  - `surface: #161B22` — Card/panel backgrounds
  - `accent: #C9A84C` — Gold accent (primary CTA, highlights)
  - `teal: #2DD4BF` — Secondary accent (education timeline)
  - `text: #F5F0E8` — Light text on dark
  - `muted: #8B949E` — Subdued text
  - `border: #30363D` — Border colour
- **Typography:**
  - Display: **Playfair Display** (headings, hero)
  - Body: **Inter** (paragraphs, UI text)

### 3. **Animation & Motion**
- **Page transitions** via `<AnimatePresence>` with fade + scale effects
- **Section reveals** via `<MotionSection>` (fade + slide-up on scroll)
- **Staggered children** for sequential component entrance
- **Reduced-motion support** via `useReducedMotion` hook — disables all animations if user prefers

### 4. **Data Layer**
- **Seed data** in `src/data/*.ts` files (no backend required)
- **Interfaces** for type safety:
  - `ExperienceEntry` (type, title, org, duration, description, startYear)
  - `ProjectEntry` (title, tags, description, outcomes, detailUrl)
  - `SkillItem` (label, variant: 'gold' | 'teal' | 'ghost')
- **Data is sorted** at export time (experience by descending startYear)

### 5. **Component Hierarchy**
```
<App>
  <BrowserRouter>
    <Routes>
      <Route element={<Layout>}>  ← Navbar + Outlet
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
</App>
```

Each page is wrapped in `<PageWrapper>` for consistent fade-in animation.

---

## Functional Requirements

### 1. Routing & Navigation (Requirements 1.1–1.4)
- ✅ SPA with five primary routes: `/`, `/about`, `/experience`, `/projects`, `/contact`
- ✅ Catch-all redirects unknown routes to home
- ✅ Fixed navbar shows logo and links, with **active route highlighted in gold**
- ✅ Mobile hamburger menu for devices < 768px (md breakpoint)
- ✅ Navbar overlays content with `fixed top-0 left-0 right-0` and backdrop blur

### 2. Hero Page (Requirements 2.1–2.8)
- ✅ Full-viewport hero section (`min-h-screen`)
- ✅ Large "Tasmiya Amreen" heading in Playfair Display
- ✅ Role subtitle ("HR Professional")
- ✅ Tagline / value proposition
- ✅ Two CTA buttons: "View My Work" (→ /projects) and "Connect" (→ /contact)
- ✅ Scroll indicator arrow at bottom

### 3. About Page (Requirements 3.1–3.5)
- ✅ Circular avatar placeholder (160px, gold border ring)
- ✅ Bio paragraph (free-form text about Tasmiya)
- ✅ Six personal interests, each with a gold arrow (→) prefix
- ✅ Desktop: two-column layout (avatar + interests left, bio right)
- ✅ Mobile: stacked single-column layout

### 4. Experience Page (Requirements 4.1–4.6)
- ✅ Section heading "Experience"
- ✅ **Vertical timeline** of experience entries:
  - **Work entries**: gold dot + Briefcase icon, dark background
  - **Education entries**: teal dot + BookOpen icon, lighter background
  - Entries sorted descending by year
- ✅ Each entry shows: title, organisation, duration, description
- ✅ **Skills section** below timeline with 10 skill chips (gold, teal, ghost variants)
- ✅ Staggered entrance animations for timeline items

### 5. Projects Page (Requirements 5.1–5.6)
- ✅ Section heading "Projects"
- ✅ **Responsive grid** of case study cards:
  - 1 column on mobile (< 640px)
  - 2 columns on tablet (640–1024px)
  - 3 columns on desktop (> 1024px)
- ✅ Each card shows:
  - Title, tags (skill labels), description, bulleted outcomes
  - Gold bullets on outcome items
  - "Explore" link only if `detailUrl` is defined
- ✅ Hover effect: cards lift (`y: -6`) with subtle gold shadow

### 6. Contact Page (Requirements 6.1–6.6)
- ✅ Section heading "Get In Touch"
- ✅ Warm, professional copy (1–2 sentences)
- ✅ **Email link** — rendered from `VITE_CONTACT_EMAIL` env variable as `mailto:` link
- ✅ **LinkedIn link** — rendered from `VITE_LINKEDIN_URL` env variable, opens in new tab with `noopener noreferrer`
- ✅ No form, no phone number

### 7. Styling & Theme (Requirements 7.1–7.7)
- ✅ Dark theme applied globally (`bg-[#0D1117]`)
- ✅ Gold (`#C9A84C`) used for primary accents and active states
- ✅ Teal (`#2DD4BF`) used for secondary accents (education timeline)
- ✅ Consistent typography (Playfair Display for headings, Inter for body)
- ✅ Responsive design: works on 320px (mobile), 768px (tablet), 1280px (desktop)
- ✅ Mobile navbar with hamburger toggle
- ✅ All interactive elements have clear visual feedback (hover, active states)

### 8. Animation & Accessibility (Requirements 8.1–8.5)
- ✅ Page transitions fade in/out smoothly via `<AnimatePresence>`
- ✅ Sections fade in and slide up when scrolled into view
- ✅ Staggered entrance for timeline items and project cards
- ✅ **Reduced-motion support**: animations disabled if `prefers-reduced-motion: reduce` is set
- ✅ No animations block interactivity or distract from content

### 9. Deployment & Build (Requirements 9.1–9.4)
- ✅ Production build succeeds with `npm run build`
- ✅ Built output in `dist/` contains minified HTML, JS, CSS
- ✅ `vercel.json` configured with SPA rewrite rule
- ✅ `VITE_CONTACT_EMAIL` and `VITE_LINKEDIN_URL` env variables set in Vercel dashboard

---

## Non-Functional Requirements

### Performance
- **Build time**: < 5 seconds
- **Dev server startup**: < 3 seconds
- **Page load**: Full page interactive within 2 seconds on 4G LTE
- **Bundle size**: < 150KB (gzipped JS)
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms

### Accessibility
- **WCAG 2.1 AA** compliance (visual contrast, keyboard navigation, screen reader support)
- **Semantic HTML** (proper heading hierarchy, nav landmarks)
- **Keyboard navigation**: All interactive elements accessible via Tab
- **Reduced-motion**: Respects `prefers-reduced-motion: reduce`
- **Color contrast**: All text meets AA standards (4.5:1 for body, 3:1 for large text)

### Security
- **No third-party tracking** unless explicitly added
- **Environment variables** not exposed in client bundle (Vite `VITE_*` prefix ensures this)
- **Content Security Policy** (CSP) headers configured via Vercel
- **HTTPS only** on production

### Maintainability
- **TypeScript strict mode** enabled for type safety
- **Component-driven** architecture (reusable UI primitives)
- **Data-driven rendering** (separate data layer, no hardcoded content in components)
- **Consistent naming** (BEM-like class naming where applicable)
- **Well-documented** components with JSDoc comments

---

## Environment Variables

### Required for Runtime
```env
# Contact form & social links
VITE_CONTACT_EMAIL=tasmiya.amreen@gmail.com
VITE_LINKEDIN_URL=https://www.linkedin.com/in/tasmiya-amreen-290349218/
```

**Note:** These are prefixed with `VITE_` so they are injected at build time and not exposed in the client bundle.

---

## Build & Development Commands

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Data Models

### ExperienceEntry
```typescript
interface ExperienceEntry {
  type: 'work' | 'education'
  title: string
  organisation: string
  duration: string
  description: string
  startYear: number
}
```

### ProjectEntry
```typescript
interface ProjectEntry {
  title: string
  tags: string[]
  description: string
  outcomes: string[]
  detailUrl?: string
}
```

### SkillItem
```typescript
interface SkillItem {
  label: string
  variant: 'gold' | 'teal' | 'ghost'
}
```

---

## Deployment Information

### Hosting Platform
**Vercel** (production SPA host)

### Configuration
- **Framework Preset**: React
- **Root Directory**: `/`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**: `VITE_CONTACT_EMAIL`, `VITE_LINKEDIN_URL` (set in Vercel dashboard)

### SPA Rewrite Rule
All requests (except static assets) are rewritten to `/index.html` for client-side routing:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Domain & HTTPS
- **Domain**: Custom domain (configured in Vercel)
- **HTTPS**: Automatic via Vercel SSL certificate
- **Redirects**: `www` → root domain (configured via Vercel)

---

## Testing & Quality Assurance

### Unit Tests (Optional, Marked with `*` in Spec)
The spec includes 12 optional property-based tests using **Vitest + React Testing Library + fast-check**:

1. **Active route in nav** — Validates navbar highlights correct route
2. **Theme consistency** — Ensures dark theme applied across all routes
3. **Reverse-chronological order** — Timeline sorted by year descending
4. **Entry completeness** — Timeline fields render correctly
5. **Work vs. education distinction** — Different visual styling for entry types
6. **Skills completeness** — All 10 skills appear in Experience page
7. **Case study card completeness** — Project fields render correctly
8. **Explore link conditionality** — Link appears only when `detailUrl` defined
9. **Email link format** — `mailto:` URL format correct
10. **LinkedIn link safety** — `target="_blank"` + `rel="noopener noreferrer"`
11. **Reduced-motion disables animations** — No transforms in reduced-motion mode
12. **Personal interests completeness** — All 6 interests appear in About page

### Linting
- **Oxlint** enabled for code quality (type-aware mode recommended for production)
- Run via npm/Vite (config in `.oxlintrc.json`)

---

## Known Limitations & Future Enhancements

### Current Limitations
1. **No real backend** — All data is seed data in `src/data/`
2. **No email form** — Contact page has direct mailto and LinkedIn links only
3. **No avatar image** — Placeholder circular div with gold border; real image can be added later
4. **No detail pages** — Projects link to external URLs or do nothing if `detailUrl` undefined
5. **No dark/light theme toggle** — Fixed to dark theme only

### Future Enhancements
1. **Case study detail pages** — Individual pages for each project with full write-ups
2. **Blog section** — HR insights or thought leadership articles
3. **Dark/light theme toggle** — User preference + localStorage
4. **Contact form** — Email submission (requires backend/Formspree/Netlify Forms)
5. **Analytics** — Google Analytics or Vercel Analytics integration
6. **Search** — Content search for blog posts
7. **Internationalization** — Multi-language support

---

## Troubleshooting & Common Issues

| Issue | Solution |
|-------|----------|
| **Navbar not fixed** | Check `fixed top-0` classes are applied; verify `z-index` is high enough |
| **Animations not playing** | Verify `prefers-reduced-motion` is not set; check Framer Motion variants |
| **Tailwind styles not applied** | Ensure `globals.css` imports all three Tailwind directives; clear `.next` or build cache |
| **Build fails with TypeScript errors** | Run `npx tsc --noEmit` to see full error list; fix type mismatches |
| **Env variables undefined** | Prefix variables with `VITE_` in `.env`; restart dev server after changing `.env` |
| **Mobile nav overlay doesn't close** | Verify `onClick` handler on nav links; ensure state updates correctly |

---

## Quick Reference: Key Contacts & Resources

| Resource | Link |
|----------|------|
| **Tasmiya's Email** | `tasmiya.amreen@gmail.com` (from env var) |
| **Tasmiya's LinkedIn** | https://www.linkedin.com/in/tasmiya-amreen-290349218/ (from env var) |
| **React Router Docs** | https://reactrouter.com |
| **Framer Motion Docs** | https://www.framer.com/motion |
| **Tailwind Docs** | https://tailwindcss.com |
| **Vite Docs** | https://vitejs.dev |
| **Vercel Docs** | https://vercel.com/docs |

---

## File Modification History

| Date | Author | Change |
|------|--------|--------|
| Sep 12, 2026 | Kiro | Created initial project documentation from codebase inspection |

---

## Questions for Next Agent

When continuing work on this project, consider:

1. **Is there a real backend API** to connect to, or should all data remain seed-based?
2. **Should case study cards link to external resources** or have internal detail pages?
3. **Are there analytics requirements** (Google Analytics, Vercel Analytics)?
4. **Should a contact form be implemented**, and if so, which backend service?
5. **Are there future plans for blog/content** sections?
6. **Is multi-language support needed?**
7. **Should there be a dark/light theme toggle** or stay fixed to dark?

---

**End of Project Documentation**
