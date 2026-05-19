# sentinel-site

Marketing site for [Sentinel](https://sntl.live) — AI-driven drone inspection platform.

**Live:** https://trinverse.github.io/sentinel-site/

## Stack

- [Astro 5](https://astro.build) — static site, zero JS by default
- [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite`
- TypeScript, pnpm 11, Node 20

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:4321/sentinel-site/
pnpm build        # writes dist/
pnpm preview      # serves dist/ locally
```

## Deployment

Push to `main` → GitHub Actions builds and publishes `dist/` to the `gh-pages` branch.

Pages settings (one-time): Settings → Pages → Source: "Deploy from a branch" → Branch: `gh-pages` / `/ (root)`.

## Editing content

All copy lives in the component files under `src/components/`. There is no CMS or content collection. The page composition order is in `src/pages/index.astro`.

## About

This is the marketing site only. Sentinel itself is a private product at <https://sntl.live>.
