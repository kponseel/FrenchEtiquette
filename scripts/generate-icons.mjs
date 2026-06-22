// Génère les icônes PNG de la PWA à partir d'un motif vectoriel (nœud papillon).
// Aucune police requise : uniquement des formes → rendu fiable partout.
//
//   npm run icons
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

// Pleine page (sans coins arrondis) pour que les icônes « maskable » remplissent l'espace.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#F7F4EE"/>
  <circle cx="256" cy="256" r="150" fill="none" stroke="#B8924A" stroke-width="7"/>
  <g fill="#1B2A41">
    <polygon points="256,256 178,212 178,300"/>
    <polygon points="256,256 334,212 334,300"/>
    <rect x="244" y="234" width="24" height="44" rx="6"/>
  </g>
</svg>`

const targets = [
  { name: 'pwa-192x192.png', size: 192 },
  { name: 'pwa-512x512.png', size: 512 },
  { name: 'pwa-maskable-512x512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
]

await mkdir('public', { recursive: true })
for (const t of targets) {
  await sharp(Buffer.from(svg)).resize(t.size, t.size).png().toFile(`public/${t.name}`)
  console.log('✓ public/' + t.name)
}
