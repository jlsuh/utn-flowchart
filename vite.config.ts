import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const NODE_MODULES = 'node_modules';

const manualChunks = (id: string) =>
  id.indexOf(NODE_MODULES) !== -1
    ? id.toString().split(`${NODE_MODULES}/`)[1].split('/')[0].toString()
    : undefined;

const viteConfig = defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
  },
});

export default viteConfig;
