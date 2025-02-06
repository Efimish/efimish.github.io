// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://efimish.github.io',
  markdown: {
      shikiConfig: {
          themes: {
              light: 'github-light',
              dark: 'github-dark'
          }
      }
  },
  integrations: [sitemap()],
  experimental: {
    svg: true
  }
});