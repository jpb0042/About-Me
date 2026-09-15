# About Me

A single-page personal site. Edit the copy in `src/views/Home/constants.ts`.

## Stack

| Layer | Tech |
|---|---|
| App | Next.js 15 (App Router), React 19, TypeScript |
| Styling | CSS |
| Motion | GSAP |

## Structure

```text
about-me/
  public/               # Static files (resume PDF)
  src/
    app/                # Next.js App Router (layout, page)
    components/         # Shared UI (SiteShell, SectionHead)
    views/              # Feature folders (Home)
    lib/                # GSAP helpers
    assets/             # Project media
```

Views follow a portal-style layout: each feature is a folder with the screen component, an `index.ts` barrel, and optional `components/` for page-local UI. Cross-page pieces live in `src/components/`.

## Setup

1. **Node 20.19+** (22 recommended) and [pnpm](https://pnpm.io/installation)
2. From the repo root:

```bash
pnpm install
pnpm dev
```

If you use nvm:

```bash
nvm use
```

## Scripts

| Script | Purpose |
|---|---|
| `pnpm dev` | Run the Next.js app |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm typecheck` | Typecheck |
| `pnpm lint` / `pnpm lint:fix` | Lint the app |
| `pnpm clean` | Remove build artifacts and `node_modules` |
| `pnpm site:deploy` | Production deploy to Vercel (`npx vercel login` once first) |

## Deploy

Same flow as DocPuppet:

```bash
npx vercel login
pnpm site:deploy
```

`pnpm site:deploy` runs `npx --yes vercel deploy --prod --yes --name about-me`. Next.js is auto-detected, so no custom `vercel.json` is needed. Production is currently [https://about-me-beryl-rho.vercel.app](https://about-me-beryl-rho.vercel.app). Connecting the GitHub repo in the Vercel dashboard is optional (needs the Vercel GitHub app on `jpb0042/About-Me`).
