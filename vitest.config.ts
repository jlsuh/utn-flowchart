import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

const vitestConfig = mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{ts,tsx}'],
    },
  }),
);

export default vitestConfig;
