// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bam.lockardsites.com',
  output: 'static',
  trailingSlash: 'always',

  build: {
    inlineStylesheets: 'auto',
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you/'),
      serialize(item) {
        if (item.url.includes('/locations/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify({
    edgeMiddleware: true,
    imageCDN: true,
  }),

  image: {
    domains: ['images.unsplash.com'],
  },
});