# Dimitrii Codrean

Personal photography and writing site built with [Astro](https://astro.build/).

## Development

```sh
npm install
npm run dev
```

The production build is created with `npm run build`. Pushes to `main` are
deployed automatically to GitHub Pages.

## Adding an article

Duplicate `src/content/articles/_example.md`, remove `draft: true`, and rename
the file. The filename becomes the article URL.

## Photography

Gallery metadata lives in `src/data/galleries.ts`. Photographs are stored in
`src/assets/images/<gallery>/`; matching files are discovered automatically.

## Editing site wording

General page copy, navigation labels, and footer wording live in
`src/data/content.ts`. Gallery names and descriptions stay in
`src/data/galleries.ts`, and each article's title and body stay in its Markdown
file in `src/content/articles/`. Photo totals are calculated automatically.
