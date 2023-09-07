// vite.config.js
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'StudsUI',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forgot to update your package.json as well.
      formats: ['es', 'cjs'],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
      styles: '/src/styles/lib/components',
    },
  },
});
