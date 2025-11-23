import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['vite.svg'],
      manifest: {
        name: 'Word Hero',
        short_name: 'WordHero',
        description: '离线可用的英语学习工具',
        theme_color: '#f0f9ff',
        background_color: '#f0f9ff',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: 'vite.svg', sizes: '192x192', type: 'image/svg+xml' },
          { src: 'vite.svg', sizes: '512x512', type: 'image/svg+xml' }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  server: {
    port: 3000,
  },
})
