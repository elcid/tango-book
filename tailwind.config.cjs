import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [tailwind()],
});

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    safelist: [
        'bg-gradient-to-b',
        'from-yellow-500',
        'to-orange-500',
        'from-custom-light-red',
        'to-custom-red',
    ],
    theme: {
        extend: {
            colors: {
                'custom-light-red': '#ecc4c7',
                'custom-red': '#ec2b37'
            }
        },
    },
    plugins: [],
}