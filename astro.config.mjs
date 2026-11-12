// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://akashdev.pro',
  integrations: [sitemap()],
  // Tailwind 3.4 + PostCSS are picked up automatically via postcss.config.mjs
})
