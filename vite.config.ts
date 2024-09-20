import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const viteConfig = defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          reactDOM: ['react-dom'],
          emotionReact: ['@emotion/react'],
          emotionStyled: ['@emotion/styled'],
          muiMaterial: ['@mui/material'],
          viz: ['@viz-js/viz'],
        },
      },
    },
  },
});

export default viteConfig;
