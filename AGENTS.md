# Repository guidance

This is Dimitrii Codrean's static photography and writing site. It uses Astro 7,
TypeScript in strict mode, and npm. GitHub Pages serves the generated site at
`https://kodryan.github.io/`.

## Commands

- Install exactly from the lockfile: `npm ci`
- Start local development: `npm run dev`
- Type/content validation: `npm run check`
- Production build: `npm run build`
- Preview the production build: `npm run preview`

Run `npm run check` and `npm run build` after code or content changes. There is
no separate test or lint script.

## Project map

- `src/pages/`: file-based routes; dynamic article and gallery pages are
  statically generated with `getStaticPaths`.
- `src/layouts/` and `src/components/`: shared Astro UI.
- `src/styles/global.css`: site-wide design tokens and styles.
- `src/data/site.ts`: site metadata, date formatting, and the `withBase` URL
  helper.
- `src/data/galleries.ts`: gallery metadata and automatic photo discovery.
- `src/content/articles/`: Markdown/MDX articles validated by
  `src/content.config.ts`.
- `src/assets/images/`: source photographs processed by `astro:assets`.
- `public/`: files copied without processing, currently favicon and social
  preview image.
- `.github/workflows/deploy.yml`: automatic GitHub Pages deployment on pushes
  to `main`.

## Conventions

- Preserve the `site`, `base`, and `trailingSlash` settings in
  `astro.config.mjs`. Use `withBase()` for internal links and URLs to files in
  `public/`; this keeps links correct if the site is ever hosted under a
  subpath.
- Prefer Astro components and build-time rendering. Add client-side JavaScript
  only for behavior that needs it, following the gallery lightbox pattern.
- Use `Image` or `Picture` from `astro:assets` for source photographs. Keep
  meaningful alt text, responsive widths/sizes, and lazy loading where
  appropriate.
- Add a gallery by placing numbered JPGs in
  `src/assets/images/<slug>/`, adding its cover image, extending the glob in
  `src/data/galleries.ts`, and adding its metadata there. The current sorter
  expects numeric filenames such as `1.jpg`.
- Add an article by copying `src/content/articles/_example.md`. Required front
  matter is `title`, `description`, and `publishedAt`; `updatedAt` is optional,
  and `draft: true` excludes it from generated pages.
- Keep shared visual changes in `src/styles/global.css` and reuse its existing
  CSS variables, responsive layout patterns, dark gallery theme, focus states,
  and reduced-motion/accessibility behavior.
- Keep metadata and canonical URLs routed through `BaseLayout.astro` and
  `src/data/site.ts` rather than duplicating them in individual pages.
- Do not edit generated directories (`dist/`, `.astro/`, or `node_modules/`) or
  commit them.

## Deployment

The site is fully static. Pushes to `main` trigger the existing GitHub Actions
workflow, which builds Astro and deploys `dist/` to GitHub Pages. Do not replace
it with the GitHub "Static HTML" or Jekyll starter workflows.
