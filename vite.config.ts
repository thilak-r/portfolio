import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: "/vite-deploy/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          threejs: ['three'],
          lodash: ['lodash'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the chunk size limit warning to 1MB
  },
});
