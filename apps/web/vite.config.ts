// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'studs-lit.js',
        assetFileNames: 'studs-lit.css',
        chunkFileNames: 'chunk.js',
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
      styles: '/src/styles',
    },
  },
});
