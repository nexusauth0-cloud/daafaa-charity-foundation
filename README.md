# DA'AFAA Charity Foundation

Official website for **DA'AFAA Charity Foundation** — *"Giving Hope, Touching Lives."*

A humanitarian and community-based organization established on 2nd February, 2026, supporting the less privileged, orphans, widows, widowers, and vulnerable members of society across Nigeria.

Production-ready marketing website built as a single-page application with scrollspy navigation, animated section reveals, an executive-team photo lightbox, and an account-copy support section.

## Tech stack

- **React 18** + **TypeScript 5.6**
- **Vite 5** (build tool + dev server)
- **Tailwind CSS 3** (utility-first styling, custom brand palette)
- **react-icons** (Feather icons)
- **ESLint 9** + **typescript-eslint** (linting)
- **Playwright** (dev-time QA only, not a runtime dependency)

## Requirements

- Node.js 18+ (Node 20 recommended)
- npm 10+

## Local setup

```bash
npm install
```

During install, npm may ask to approve the `esbuild` postinstall script (`npm approve-scripts esbuild`). Approve it — the Vite optimizer needs esbuild's native binary. The approval is already recorded in `package.json` (`allowScripts`), so CI/Vercel installs run without prompting.

### Available scripts

| Command            | Description                                             |
| ------------------ | ------------------------------------------------------- |
| `npm run dev`      | Start the Vite dev server (available on your LAN too)   |
| `npm run build`    | Type-check then build the production site into `dist/`  |
| `npm run preview`  | Preview the production build locally                    |
| `npm run lint`     | Run ESLint over the project                             |
| `npm run typecheck`| Run the TypeScript compiler (`tsc -b`) without emitting |

## Project structure

```
.
├── index.html                 # HTML entrypoint (SEO/OG meta)
├── src/
│   ├── main.tsx               # React entrypoint
│   ├── App.tsx                # Page composition & section order
│   ├── index.css              # Tailwind entry, fonts, .reveal animations
│   ├── data/
│   │   └── foundation.ts      # ALL client content (single source of truth)
│   ├── hooks/
│   │   └── useInView.ts       # IntersectionObserver hook for reveals
│   └── components/
│       ├── Navbar.tsx         # Sticky header, scrollspy, mobile drawer
│       ├── Hero.tsx
│       ├── AboutSection.tsx
│       ├── FounderSection.tsx
│       ├── LeadershipSection.tsx   # + ImageLightbox
│       ├── SupportSection.tsx      # account copy-to-clipboard
│       ├── ContactSection.tsx
│       ├── Footer.tsx
│       ├── ImageLightbox.tsx
│       ├── Reveal.tsx
│       ├── GeometricPattern.tsx
│       ├── SectionHeader.tsx
│       └── Button.tsx
├── public/                   # Optimized static assets shipped as-is
│   ├── logo.webp
│   ├── founder.webp
│   ├── group-executives.webp
│   ├── executive-0X.webp      # portrait thumbnails (cards)
│   └── executive-0X.jpeg      # lightbox full-size photos
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── tsconfig*.json
└── package.json
```

## Content & asset notes

- **All site copy lives in `src/data/foundation.ts`** — mission, founder profile, executive roster (in official order), support account details, and contact information. Edit content there; do not hardcode text in components.
- **`public/` is the runtime asset set** (optimized WebP + JPEG pairs). The unoptimized source photos in `/web`, `/originals`, and the project-root `*.jpeg` files are working copies and are **gitignored** — do not add them to the repo.
- The foundation's support details (bank account number, account name, bank) are intentionally shown on the page (not hidden) so supporters can donate directly via bank transfer.
- No environment variables or secrets are used anywhere in the project; no `.env` file is required.

## Deployment (Vercel)

Recommended hosting: **Vercel**.

1. Push this repository to GitHub (default branch `main`).
2. In Vercel, **Add New Project → Import** the repository.
3. Use the **Vite**/React framework preset (Vercel auto-detects it).
4. Settings (defaults are correct):
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
5. Click **Deploy**. No environment variables are needed.

Any push to `main` triggers a production deployment automatically.

## QA

The site passed automated visual/functional QA before delivery (responsive across 320–1920px, contrast ≥ WCAG AA, no console errors, no horizontal overflow). QA scripts live under `/tmp/opencode/qa` and are dev-time only — they are not part of the repository.