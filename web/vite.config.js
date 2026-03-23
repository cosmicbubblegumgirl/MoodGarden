import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    sourcemap: true,
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: true,
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
