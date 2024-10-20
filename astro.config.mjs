// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://leanevorach.github.io/my-repo', // Ensure this matches your repo URL
  base: '/my-repo/', // Set the base path correctly
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    svelte(),
    sitemap(),
    robotsTxt({
      sitemapBaseFileName: 'sitemap-index',
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@lib': '/src/lib',
        '@': '',
      },
    },
  },
});
