import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    sourcemap: true,
  },
  server: {
    port: 5500,
    sourcemap: true,
    proxy: {
      "/api": {
        target: "http://localhost:5179",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
