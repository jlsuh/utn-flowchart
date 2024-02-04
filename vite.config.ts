import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const NODE_MODULES = "node_modules";

const manualChunks = (id: string) =>
  id.indexOf(NODE_MODULES) !== -1
    ? id.toString().split(`${NODE_MODULES}/`)[1].split("/")[0].toString()
    : undefined;

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
  },
});
