import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Base path: '/' à la racine (dev local + hébergement etiquette.estim.pro),
// '/FrenchEtiquette/' sur GitHub Pages. La CI fixe VITE_BASE ; tout le reste
// (router basename, manifest, icônes, fallback du service-worker) en dérive.
const base = process.env.VITE_BASE ?? '/'

// Proxy de dev optionnel : `VITE_API_PROXY=http://127.0.0.1:8099 npm run dev`
// renvoie /api vers un backend PHP lancé à part (php -S). Sans effet en prod.
const apiProxy = process.env.VITE_API_PROXY

// https://vitejs.dev/config/
export default defineConfig({
  base,
  server: apiProxy
    ? { proxy: { '/api': { target: apiProxy, changeOrigin: true } } }
    : undefined,
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: "L'Étiquette — Devenez Gentleman",
        short_name: "L'Étiquette",
        description:
          "Testez votre connaissance de l'étiquette à la française et obtenez votre certificat de Gentleman.",
        lang: 'fr',
        theme_color: '#F7F4EE',
        background_color: '#F7F4EE',
        display: 'standalone',
        orientation: 'portrait',
        start_url: base,
        scope: base,
        categories: ['education', 'lifestyle'],
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'pwa-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        // SPA fallback so client-side routes resolve once the SW is active.
        navigateFallback: `${base}index.html`,
        // …mais jamais pour l'API : laisser passer les requêtes /api vers le réseau.
        navigateFallbackDenylist: [/^\/api\//],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
})
