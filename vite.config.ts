import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Suppress warnings for Spline chunks (they're lazy-loaded)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Isolate heavy 3D deps into separate lazy-loaded chunks
          'spline': ['@splinetool/react-spline', '@splinetool/runtime'],
          'three': ['three'],
          'framer': ['framer-motion'],
        },
      },
    },
  },
});
