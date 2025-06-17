import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { imagetools } from 'vite-imagetools';
import lqip from 'vite-plugin-lqip';
export default defineConfig({
  plugins: [react(), imagetools(), lqip()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['lv-newshop.solutions-apps.com'],
    fs: {
      strict: false,
    },
    // 👇 اینو اضافه کن
  },
  build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/shared/ui'),
      '@hooks': path.resolve(__dirname, 'src/core/hooks'),
      '@styles': path.resolve(__dirname, 'src/core/styles'),
      '@utils': path.resolve(__dirname, 'src/core/utils'),
    }
  }
});
