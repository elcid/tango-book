// @ts-check
// Netlify deployment config for https://tangobuch.jorge-rodrigo.de
// Usage: pnpm astro build --config astro.config.netlify.mjs

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'de',
      locales: {
        de: 'de-DE',
      },
    },
  })],
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://tangobuch.jorge-rodrigo.de',
  base: '/',
  adapter: netlify(),
});
