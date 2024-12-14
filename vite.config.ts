import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['**/*'],
      manifest: {
        name: 'Gopal Gurram Portfolio',
        short_name: 'Portfolio',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/src/assets/g-icon.jpg',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['web-vitals'],
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
