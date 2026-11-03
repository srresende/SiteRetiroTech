# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # static export to ./out (output: "export" in next.config.ts)
npm run lint     # ESLint (eslint-config-next)
npm run format   # Prettier (+ tailwind class sorting)
```

There are no tests. Verify changes with `npm run lint && npm run build`, then check the page in a browser at mobile and desktop widths.

## What this is

A single static landing page (pt-BR) for **RETIRO TECH**, a one-day in-person mentoring immersion. `.llm/PRD.MD` is the spec for content, section order, copy and visual identity. Stack: Next.js 16 (App Router, Turbopack) + Tailwind CSS v4, deployed to Vercel. Next 16 differs from older versions; read `node_modules/next/dist/docs/` before using unfamiliar APIs.

## Architecture

- **`content/site.ts` is the single source of truth for all copy and data** (event info, CTA URL, profiles, pillars, 90-day phases, agenda, mentor, pricing, contacts). Components never hardcode copy. Values in `[BRACKETS]` with `// TODO preencher` are placeholders the user hasn't defined yet. Keep them as they are; never invent values.
- **`site.ctaUrl`**: every signup CTA points to this one URL (it is `#investimento` until a checkout or WhatsApp link is set). `Button` opens external `http(s)` URLs in a new tab.
- **`app/page.tsx`** puts the sections together in the order from PRD §7: Header → Hero → ParaQuemE → OQueVoceLeva → ODia → Mentor → Investimento → ChamadaFinal → Footer (`components/sections/`). Only `Header` is a client component (mobile menu state).
- **`components/ui/`**: `Section` (anchor id + alternating bg + label/h2), `SectionLabel`, `Card`, `Button` (primary/secondary).
- **Design tokens** live in `app/globals.css` under `@theme inline`: colors (`bg`, `bg-alt`, `surface`, `line`/`line-2`/`line-3`, `text`/`text-2`/`text-3`, `muted`, `accent`, `cyan`, `lime`, `blue`), fonts (`font-display` Space Grotesk, `font-sans` Inter, `font-mono` JetBrains Mono, loaded with `next/font` in `app/layout.tsx`), and radii (`rounded-btn` 10px, `rounded-card` 16px). Use token classes like `bg-surface` and `text-accent`, never raw hex.
- Nav anchors (`#para-quem-e`, `#o-dia`, `#mentor`) must match the section ids. `section[id]` has `scroll-margin-top` to clear the sticky header.
- Images: static export uses `images.unoptimized`. To add the mentor photo, put it in `public/` and set `site.mentor.photo`.

## Repository notes

- `AGENTS.md` is generated and re-added by `next dev`. Commit it as is.
- `.llm/` holds planning/spec docs.
