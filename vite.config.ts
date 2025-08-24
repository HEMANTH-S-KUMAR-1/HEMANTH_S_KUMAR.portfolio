import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    // Proxy API calls to your deployed Cloudflare Pages for development testing
    proxy: {
      '/api': {
        target: 'https://hemanth-s-kumar-portfolio.pages.dev',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path,
      },
    },
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
