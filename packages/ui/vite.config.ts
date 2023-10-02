// vite.config.js
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    minify: 'terser',
    terserOptions: {
      ecma: 2020,
      compress: {
        ecma: 2020,
        inline: true,
        passes: 2,
        unsafe: true,
        unsafe_arrows: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
      },
      format: {
        comments: false,
      },
    },
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
