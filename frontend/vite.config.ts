import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "src", replacement: path.resolve(__dirname, "src") },
      { find: "server", replacement: path.resolve(__dirname, "../server") },
    ],
  },
  server: {
    proxy: {
      // Server proxy in development.
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
