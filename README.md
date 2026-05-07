# Dingbats

A static web app of curated dingbat (rebus) puzzles. Decode the visual clue and type the phrase.

## Stack

- Vite + React 18 + TypeScript (strict)
- Material UI v6
- React Router v6 (HashRouter — required for GitHub Pages)
- ESLint with `typescript-eslint` strict-type-checked + stylistic-type-checked, react, react-hooks, jsx-a11y

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm lint
pnpm build
pnpm preview
```

## Adding puzzles

Edit `src/data/puzzles.ts` and append an entry to `PUZZLES`. Each puzzle has a unique, stable `id` (used for progress tracking — never rename).

### Typographic puzzles (rendered from data)

```ts
{
  id: 'mind-over-matter',
  answer: 'Mind over matter',
  difficulty: 'easy',
  visual: {
    kind: 'text',
    lines: [
      { segments: [{ text: 'MIND', style: ['bold', 'huge'] }] },
      { segments: [{ text: 'MATTER', style: ['bold', 'huge'] }] },
    ],
  },
}
```

Available segment styles: `bold`, `italic`, `underline`, `overline`, `strike`, `small`, `tiny`, `huge`, `mirror`, `flip`, `rotate90`, `rotate180`, `rotate270`, `spaced`, `crammed`, `rainbow`. Per-segment `color` is also supported.

### Image puzzles

Drop the file into `public/puzzles/` and reference it with a leading slash:

```ts
{
  id: 'pie-in-the-sky',
  answer: 'Pie in the sky',
  difficulty: 'medium',
  source: 'https://example.com/...',
  visual: {
    kind: 'image',
    src: '/puzzles/pie-in-the-sky.png',
    alt: 'A pie floating in the sky',
  },
}
```

The Vite base path is applied automatically — do not include `/dingbat/`.

## Deploying to GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.

One-time setup in the repo:

1. Settings → Pages → Source: **GitHub Actions**
2. Push to `main` and the workflow will publish to `https://<user>.github.io/dingbat/`.

If the repository name is not `dingbat`, update the `repoName` constant in `vite.config.ts`.
