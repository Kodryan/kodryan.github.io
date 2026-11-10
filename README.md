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

Photos are capped at 2048px on the long edge. After `npm install`, a pre-commit
hook downscales any larger JPG you stage, and the build fails if one slips
through. Run `npm run photos` to downscale manually. Add photos through a local
commit, not GitHub's web upload, which skips the hook.
