// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  vite: {
    resolve: {
      preserveSymlinks: true,
      alias: {
        'astro/entrypoints/prerender': fileURLToPath(import.meta.resolve('astro/entrypoints/prerender')),
      },
    },
  },
});
