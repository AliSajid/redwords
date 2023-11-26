import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  plugins: [],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    alias: {
      $components: './src/components',
      $utils: './src/utils',
      $assets: './src/assets',
      $static: './static',
      '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
      '.prisma/client/index': './node_modules/.prisma/client/index.js',
      '@prisma/client/runtime/library': './node_modules/@prisma/client/runtime/library.js',
    },
  },
};

export default config;
