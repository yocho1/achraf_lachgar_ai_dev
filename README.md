## Achraf Lachgar — AI Systems Engineer Portfolio

Modern, AI-native, single-page portfolio built with Next.js 15 App Router, React 19, Tailwind CSS v4, Framer Motion, Three.js, Vercel AI SDK, and Sanity-ready content hooks. Dark-mode-first “Liquid Glass 2.0” design with Bento grid, R3F hero, AI Twin chat, evidence-based projects, stack honeycomb, experience timeline, and SEO/Schema for recruiters.

### Tech stack

- Next.js 15 (App Router, React 19, Server Components)
- Tailwind CSS v4 + container queries
- Framer Motion (micro-interactions) + Three.js (hero background)
- Vercel AI SDK (AI Twin) via OpenRouter; AgentKit-ready prompt
- Sanity-ready data layer (plug your dataset when keys are available)

### Getting started

```bash
npm install
npm run dev
# open http://localhost:3000
```

### Environment

- `OPENROUTER_API_KEY` — required for the AI Twin endpoint.
- Optional: `OPENROUTER_MODEL` (defaults to `openai/gpt-4o-mini`), `OPENROUTER_REFERER` for OpenRouter policy compliance.
- Optional Sanity wiring: add `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_VERSION`, `SANITY_READ_TOKEN` and swap the static profile data for CMS queries.
- Optional AgentKit: install `@openai/agentkit` and extend `app/api/ai-twin/route.ts` with tool definitions/credentials.

### Project structure

- `src/app/page.tsx` — page composition (hero, bento, projects, stack, experience, CTA).
- `src/components/*` — UI sections, AI Twin widget, Three.js hero, motion interactions.
- `src/app/api/ai-twin/route.ts` — Vercel AI SDK streaming endpoint via OpenRouter.
- `src/lib/profile.ts` — structured resume/project data for quick edits or CMS replacement.
- `src/lib/structured-data.ts` — JSON-LD builders (Person, SoftwareSourceCode) for SEO + AI discoverability.

### Production tips

- Run `npm run build` before shipping; aim for Lighthouse 100/100.
- Set real OG image at `public/og-image.png` and resume PDF at `public/resume-achraf-lachgar.pdf` or update the URLs in `profile.ts`.
- Deploy on Vercel for best DX; environment variables should be added in the dashboard.

### Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — lint with ESLint
