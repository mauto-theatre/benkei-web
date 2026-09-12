// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://benkei-web.pages.dev',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/special/') &&
        !page.includes('/easter-egg') &&
        !page.includes('/indexsub') &&
        !page.includes('/notes/audition-no4'),
    }),
  ],
});