# Abdul-Wahid Yakubu - Personal Website

This repository contains my personal website built with Astro and deployed to GitHub Pages.

## Stack

- Astro 6 + TypeScript
- Tailwind CSS 4
- Astro Content Collections (posts, notes, tags)
- Pagefind static search
- GitHub Actions for CI and deployment

## Local development

### Requirements

- Node 22 (see `.nvmrc`)
- npm

### Setup

```bash
npm ci
cp .env.example .env
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Build static site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Biome checks (non-mutating) |
| `npm run lint:fix` | Apply Biome fixes |
| `npm run check` | Run Astro type/content checks + Biome |
| `npm run format` | Format files with Prettier |

## Content management

- Blog posts: `src/content/post/`
- Notes: `src/content/note/`
- Tag metadata: `src/content/tag/`
- Content schemas: `src/content.config.ts`

## Environment variables

These are optional unless you use webmentions:

- `WEBMENTION_API_KEY`: Secret token for webmention.io API calls
- `WEBMENTION_URL`: Public webmention endpoint URL
- `WEBMENTION_PINGBACK`: Optional pingback endpoint

Set them in `.env` (do not commit secrets).

## Deployment

The site is deployed with GitHub Actions to GitHub Pages:

- CI workflow: `.github/workflows/ci.yml`
- Deploy workflow: `.github/workflows/deploy.yml`

GitHub Pages must be configured to use **GitHub Actions** as the source.

## Notes

- This project started from the Astro Cactus template and has been customized.
- Default site settings live in `src/site.config.ts`.
