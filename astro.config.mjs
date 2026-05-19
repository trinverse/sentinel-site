// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://trinverse.github.io',
  base: '/sentinel-site',
  vite: {
    plugins: [tailwindcss()],
  },
});
