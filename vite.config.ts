import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  plugins: [
    sveltekit(),
    // eslint-disable-next-line new-cap
    Icons({
      scale: 1.5,
      compiler: 'svelte',
    }),
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
});
