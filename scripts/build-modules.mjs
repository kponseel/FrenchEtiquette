// Générateur de contenu pour L'Étiquette.
//
// Lit le QCM source (CSV) et produit `src/content/modules.ts`.
// Usage : `npm run build:content` (ou `node scripts/build-modules.mjs [chemin.csv]`).
//
// Le CSV doit avoir les colonnes :
//   Ref, Theme, Sous-theme, Statut, Difficulte, Question, A, B, C, D,
//   Bonne_reponse, Explication
// Les questions sont regroupées en modules d'après le préfixe de `Ref`
// (T1, T2, …), dont les métadonnées d'affichage sont définies dans META.

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

const CSV_PATH = process.argv[2]
  ? resolve(process.cwd(), process.argv[2])
  : resolve(ROOT, 'content/qcm-savoir-vivre.csv')
const OUT_PATH = resolve(ROOT, 'src/content/modules.ts')

// Métadonnées d'affichage des modules, indexées par préfixe de Ref.
const META = {
  T1: {
    id: 'affaires',
    title: 'Affaires & Gentleman’s Agreement',
    subtitle: 'Parole donnée, cercles & discrétion',
    description:
      'Gentleman’s agreement, cooptation, cadeaux d’affaires, ponctualité… les codes feutrés du monde des affaires à la française.',
    motif: '🤝',
  },
  T2: {
    id: 'conversation',
    title: 'Conversation & Discrétion',
    subtitle: 'Sujets, ton, tutoiement & tact',
    description:
      'Sujets tabous, art de dire non, tutoiement, protocole épistolaire… converser avec esprit sans jamais froisser.',
    motif: '🕯',
  },
  T3: {
    id: 'table',
    title: 'Table & Réceptions',
    subtitle: 'Couverts, vins, fromages & préséances',
    description:
      'Placement, couverts, service du vin, art du fromage, remerciements… le repas, là où se révèle l’éducation.',
    motif: '🍽',
  },
  T4: {
    id: 'elegance',
    title: 'Élégance & Dress Code',
    subtitle: 'Tenue, posture & luxe discret',
    description:
      'White tie, black tie, luxe discret, posture, bise et galanterie… l’art de paraître sans ostentation.',
    motif: '🎩',
  },
}
const ORDER = ['T1', 'T2', 'T3', 'T4']
const DIFFICULTIES = new Set(['Fondamental', 'Intermédiaire', 'Piège'])
const LETTER = { A: 0, B: 1, C: 2, D: 3 }

// Analyseur CSV (RFC 4180) : gère les champs entre guillemets, les guillemets
// échappés ("") et les virgules / sauts de ligne à l'intérieur des champs.
function parseCsv(text) {
  const rows = []
  let row = []
  let field = ''
  let inQuotes = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        field += c
      }
      continue
    }
    if (c === '"') inQuotes = true
    else if (c === ',') {
      row.push(field)
      field = ''
    } else if (c === '\n') {
      row.push(field)
      rows.push(row)
      row = []
      field = ''
    } else if (c !== '\r') {
      field += c
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field)
    rows.push(row)
  }
  return rows
}

const text = readFileSync(CSV_PATH, 'utf8').replace(/^﻿/, '')
const rows = parseCsv(text).filter(
  (r) => r.length > 1 || (r.length === 1 && r[0].trim() !== ''),
)
const header = rows.shift().map((h) => h.replace(/^﻿/, '').trim())
const col = (name) => {
  const idx = header.indexOf(name)
  if (idx === -1) throw new Error(`Colonne manquante dans le CSV : ${name}`)
  return idx
}
const C = {
  ref: col('Ref'),
  sous: col('Sous-theme'),
  diff: col('Difficulte'),
  q: col('Question'),
  a: col('A'),
  b: col('B'),
  c: col('C'),
  d: col('D'),
  bonne: col('Bonne_reponse'),
  expl: col('Explication'),
}

const byPrefix = new Map()
for (const r of rows) {
  const ref = (r[C.ref] ?? '').trim()
  if (!ref) continue
  const prefix = ref.split('-')[0]
  if (!META[prefix]) throw new Error(`Préfixe de thème inconnu pour ${ref} : ${prefix}`)

  const letter = (r[C.bonne] ?? '').trim().toUpperCase()
  if (!(letter in LETTER)) throw new Error(`Bonne_reponse invalide pour ${ref} : "${r[C.bonne]}"`)

  const difficulty = (r[C.diff] ?? '').trim()
  if (!DIFFICULTIES.has(difficulty)) throw new Error(`Difficulté inconnue pour ${ref} : "${difficulty}"`)

  const choices = [r[C.a], r[C.b], r[C.c], r[C.d]].map((s) => (s ?? '').trim())
  if (choices.some((s) => s === '')) throw new Error(`Réponse vide pour ${ref}`)

  const prompt = (r[C.q] ?? '').trim()
  const explanation = (r[C.expl] ?? '').trim()
  if (!prompt) throw new Error(`Question vide pour ${ref}`)
  if (!explanation) throw new Error(`Explication vide pour ${ref}`)

  const question = {
    id: ref.toLowerCase(),
    prompt,
    choices,
    correctIndex: LETTER[letter],
    explanation,
    difficulty,
    tag: (r[C.sous] ?? '').trim(),
  }
  if (!byPrefix.has(prefix)) byPrefix.set(prefix, [])
  byPrefix.get(prefix).push(question)
}

const modules = ORDER.filter((p) => byPrefix.has(p)).map((p) => ({
  ...META[p],
  questions: byPrefix.get(p),
}))

if (modules.length === 0) throw new Error('Aucune question trouvée dans le CSV.')

const banner =
  '// AUTO-GÉNÉRÉ par scripts/build-modules.mjs à partir de content/qcm-savoir-vivre.csv\n' +
  '// Ne pas modifier à la main : éditez le CSV puis lancez `npm run build:content`.\n'

const body =
  `import type { Module } from '../types'\n\n` +
  `export const modules: Module[] = ${JSON.stringify(modules, null, 2)}\n\n` +
  `export const moduleById = (id: string): Module | undefined =>\n` +
  `  modules.find((m) => m.id === id)\n`

writeFileSync(OUT_PATH, banner + '\n' + body, 'utf8')

const total = modules.reduce((n, m) => n + m.questions.length, 0)
console.log(`✓ ${modules.length} modules, ${total} questions → src/content/modules.ts`)
for (const m of modules) console.log(`  · ${m.title} — ${m.questions.length} questions`)
