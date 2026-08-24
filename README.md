# About Me

A single-page personal site. Edit the copy in `src/views/Home/constants.ts`.

## Stack

| Layer | Tech |
|---|---|
| App | Vite 8, React 19, TypeScript 6 |
| Styling | CSS |

TypeScript 6 is the version [Vite’s React template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) currently ships. TypeScript 7 exists, but editor/lint tooling is still catching up.

## Structure

```text
about-me/
  src/
    components/         # Shared UI (Layout, Placeholder)
    views/              # Feature folders (Home)
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
| `pnpm dev` / `pnpm start` | Run the Vite app |
| `pnpm build` | Production build |
| `pnpm preview` | Preview production build |
| `pnpm typecheck` | Typecheck |
| `pnpm lint` / `pnpm lint:fix` | Lint the app |
| `pnpm clean` | Remove build artifacts and `node_modules` |
