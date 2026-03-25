import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) return 'reactDOM';
            if (id.includes('@emotion/react')) return 'emotionReact';
            if (id.includes('@emotion/styled')) return 'emotionStyled';
            if (id.includes('@mui/material')) return 'muiMaterial';
            if (id.includes('@viz-js/viz')) return 'viz';
          }
        },
      },
    },
  },
});
