// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://elcid.github.io',
  base: '/tango-book',

});