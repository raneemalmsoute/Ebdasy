import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // مهم جداً لـ Netlify و SPA
  base: "/",

  plugins: [
    react(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,

    // يمنع مشاكل MIME و module script
    rollupOptions: {
      output: {
        format: "es",
        manualChunks: undefined,
      },
    },
  },

  server: {
    cors: true,
  },

  preview: {
    port: 4173,
    strictPort: true,
  },
});
