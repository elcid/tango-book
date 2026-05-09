// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://tango-book.netlify.app',
  base: '/',
  adapter: netlify(),
});