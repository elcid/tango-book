// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://elcid.github.io',
  base: '/tango-book',

});