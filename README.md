# Dimitrii Codrean

Personal photography gallery built with [Astro](https://astro.build/).

## Development

```sh
npm install
npm run dev
```

The production build is created with `npm run build`. Pushes to `main` are
deployed automatically to GitHub Pages.

## Photography

Gallery metadata lives in `src/data/galleries.ts`. Photographs are stored in
`src/assets/images/<gallery>/`; matching files are discovered automatically.
