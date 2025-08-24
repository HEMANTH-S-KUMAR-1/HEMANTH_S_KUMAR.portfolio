import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    // Proxy API calls to your Cloudflare Worker in development
    // Replace 'your-worker-name.your-subdomain.workers.dev' with your actual worker URL
    proxy: {
      '/api': {
        target: 'https://hemanth-portfolio-contact.your-subdomain.workers.dev',
        changeOrigin: true,
        secure: true,
        configure: (proxy, options) => {
          // Fallback for development when worker is not available
          proxy.on('error', (err, req, res) => {
            console.log('API proxy error, using fallback');
          });
        },
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
