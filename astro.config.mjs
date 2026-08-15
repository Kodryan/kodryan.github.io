import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kodryan.github.io',
  base: '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
