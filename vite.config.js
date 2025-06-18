
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@admin": path.resolve(__dirname, "./src/admin"),
    },
  },
  // Support for potential multi-entry points
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        // Future admin entry point can be added here
      }
    }
  },
  // Environment variables preparation
  define: {
    'process.env.VITE_API_BASE': JSON.stringify(process.env.VITE_API_BASE || 'http://localhost:3000/api'),
  }
}));
