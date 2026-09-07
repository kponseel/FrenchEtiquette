// Générateur de contenu pour L'Étiquette (bilingue FR / EN).
//
// Lit le QCM source français (CSV) et, s'il existe, sa traduction anglaise,
// puis produit `src/content/modules.ts`.
// Usage : `npm run build:content`.
//
// CSV français — colonnes requises :
//   Ref, Theme, Sous-theme, Statut, Difficulte, Question, A, B, C, D,
//   Bonne_reponse, Explication
// CSV anglais — colonnes requises :
//   Ref, Question, A, B, C, D, Explication  (+ Sous-theme facultatif)
//
// L'anglais est un CALQUE posé sur la structure française : on part de la
// question française et on ne remplace que le texte. `id`, `correctIndex` et
// `difficulty` viennent donc toujours du français — il est structurellement
// impossible que la version anglaise désigne une autre bonne réponse.
// Les questions sont regroupées en modules d'après le préfixe de `Ref`
// (T1, T2, …), dont les métadonnées d'affichage sont définies dans META.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

const CSV_PATH = process.argv[2]
  ? resolve(process.cwd(), process.argv[2])
  : resolve(ROOT, 'content/qcm-savoir-vivre.csv')
const CSV_EN_PATH = resolve(ROOT, 'content/qcm-savoir-vivre.en.csv')
const OUT_PATH = resolve(ROOT, 'src/content/modules.ts')

// Métadonnées d'affichage des modules, indexées par préfixe de Ref.
const META = {
  T1: {
    id: 'affaires',
    fr: {
      title: 'Affaires & Gentleman’s Agreement',
      subtitle: 'Parole donnée, cercles & discrétion',
      description:
        'Gentleman’s agreement, cooptation, cadeaux d’affaires, ponctualité… les codes feutrés du monde des affaires à la française.',
    },
    en: {
      title: 'Business & the Gentleman’s Agreement',
      subtitle: 'One’s word, circles & discretion',
      description:
        'Gentleman’s agreements, co-optation, business gifts, punctuality — the hushed codes of French business life.',
    },
    motif: '🤝',
  },
  T2: {
    id: 'conversation',
    fr: {
      title: 'Conversation & Discrétion',
      subtitle: 'Sujets, ton, tutoiement & tact',
      description:
        'Sujets tabous, art de dire non, tutoiement, protocole épistolaire… converser avec esprit sans jamais froisser.',
    },
    en: {
      title: 'Conversation & Discretion',
      subtitle: 'Subjects, tone, forms of address & tact',
      description:
        'Taboo subjects, the art of refusal, tu versus vous, letter-writing protocol — conversing with wit and never giving offence.',
    },
    motif: '🕯',
  },
  T3: {
    id: 'table',
    fr: {
      title: 'Table & Réceptions',
      subtitle: 'Couverts, vins, fromages & préséances',
      description:
        'Placement, couverts, service du vin, art du fromage, remerciements… le repas, là où se révèle l’éducation.',
    },
    en: {
      title: 'The Table & Entertaining',
      subtitle: 'Cutlery, wines, cheeses & precedence',
      description:
        'Seating, cutlery, serving wine, the art of cheese, thanking one’s host — the meal, where breeding shows.',
    },
    motif: '🍽',
  },
  T4: {
    id: 'elegance',
    fr: {
      title: 'Élégance & Dress Code',
      subtitle: 'Tenue, posture & luxe discret',
      description:
        'White tie, black tie, luxe discret, posture, bise et galanterie… l’art de paraître sans ostentation.',
    },
    en: {
      title: 'Elegance & Dress Codes',
      subtitle: 'Dress, bearing & quiet luxury',
      description:
        'White tie, black tie, quiet luxury, bearing, la bise and gallantry — the art of appearing without ostentation.',
    },
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

/** Lit un CSV et renvoie { header, rows, col(name) }. */
function readCsv(path) {
  const text = readFileSync(path, 'utf8').replace(/^﻿/, '')
  const rows = parseCsv(text).filter(
    (r) => r.length > 1 || (r.length === 1 && r[0].trim() !== ''),
  )
  const header = rows.shift().map((h) => h.replace(/^﻿/, '').trim())
  const col = (name, required = true) => {
    const idx = header.indexOf(name)
    if (idx === -1 && required)
      throw new Error(`Colonne manquante dans ${path} : ${name}`)
    return idx
  }
  return { rows, col }
}

// ---------------------------------------------------------------------------
// 1. Français — structure canonique
// ---------------------------------------------------------------------------
const { rows: frRows, col: frCol } = readCsv(CSV_PATH)
const C = {
  ref: frCol('Ref'),
  sous: frCol('Sous-theme'),
  diff: frCol('Difficulte'),
  q: frCol('Question'),
  a: frCol('A'),
  b: frCol('B'),
  c: frCol('C'),
  d: frCol('D'),
  bonne: frCol('Bonne_reponse'),
  expl: frCol('Explication'),
}

const byPrefix = new Map()
for (const r of frRows) {
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
  byPrefix.get(prefix).push({ ref, question })
}

if (byPrefix.size === 0) throw new Error('Aucune question trouvée dans le CSV.')

// ---------------------------------------------------------------------------
// 2. Anglais — calque de texte, indexé par Ref
// ---------------------------------------------------------------------------
const enByRef = new Map()
let enAvailable = false
if (existsSync(CSV_EN_PATH)) {
  enAvailable = true
  const { rows: enRows, col: enCol } = readCsv(CSV_EN_PATH)
  const E = {
    ref: enCol('Ref'),
    sous: enCol('Sous-theme', false),
    q: enCol('Question'),
    a: enCol('A'),
    b: enCol('B'),
    c: enCol('C'),
    d: enCol('D'),
    expl: enCol('Explication'),
  }
  for (const r of enRows) {
    const ref = (r[E.ref] ?? '').trim()
    if (!ref) continue
    const choices = [r[E.a], r[E.b], r[E.c], r[E.d]].map((s) => (s ?? '').trim())
    const prompt = (r[E.q] ?? '').trim()
    const explanation = (r[E.expl] ?? '').trim()
    if (!prompt || !explanation || choices.some((s) => s === '')) {
      console.warn(`⚠ Traduction anglaise incomplète pour ${ref} — le français est conservé.`)
      continue
    }
    enByRef.set(ref, {
      prompt,
      choices,
      explanation,
      tag: E.sous === -1 ? undefined : (r[E.sous] ?? '').trim(),
    })
  }
}

/** Applique le calque anglais à une question française. */
function translate(ref, question) {
  const t = enByRef.get(ref)
  if (!t) return question
  return {
    ...question,
    prompt: t.prompt,
    choices: t.choices,
    explanation: t.explanation,
    tag: t.tag || question.tag,
  }
}

// ---------------------------------------------------------------------------
// 3. Assemblage
// ---------------------------------------------------------------------------
const present = ORDER.filter((p) => byPrefix.has(p))

const build = (locale) =>
  present.map((p) => ({
    id: META[p].id,
    ...META[p][locale],
    motif: META[p].motif,
    questions: byPrefix
      .get(p)
      .map(({ ref, question }) => (locale === 'en' ? translate(ref, question) : question)),
  }))

const modulesByLocale = { fr: build('fr'), en: build('en') }

const banner =
  '// AUTO-GÉNÉRÉ par scripts/build-modules.mjs à partir de content/qcm-savoir-vivre.csv\n' +
  '// (+ sa traduction content/qcm-savoir-vivre.en.csv).\n' +
  '// Ne pas modifier à la main : éditez les CSV puis lancez `npm run build:content`.\n'

const body =
  `import type { Module } from '../types'\n` +
  `import type { Locale } from '../lib/i18n'\n\n` +
  `export const modulesByLocale: Record<Locale, Module[]> = ${JSON.stringify(
    modulesByLocale,
    null,
    2,
  )}\n\n` +
  `/**\n` +
  ` * Liste canonique servant à toute la logique indexée par identifiant\n` +
  ` * (progression, classement, tirage de l'examen). Les \`id\` de modules et de\n` +
  ` * questions sont identiques dans les deux langues : la progression d'un\n` +
  ` * joueur reste donc valable s'il change de langue.\n` +
  ` */\n` +
  `export const modules: Module[] = modulesByLocale.fr\n\n` +
  `export const modulesFor = (locale: Locale): Module[] => modulesByLocale[locale]\n\n` +
  `export const moduleById = (id: string, locale: Locale = 'fr'): Module | undefined =>\n` +
  `  modulesByLocale[locale].find((m) => m.id === id)\n`

// `modules.ts` étant le seul fichier de src/content/ et n'étant plus versionné,
// le dossier n'existe pas sur un clone frais : il faut le créer avant d'écrire.
mkdirSync(dirname(OUT_PATH), { recursive: true })
writeFileSync(OUT_PATH, banner + '\n' + body, 'utf8')

const total = modulesByLocale.fr.reduce((n, m) => n + m.questions.length, 0)
console.log(`✓ ${modulesByLocale.fr.length} modules, ${total} questions → src/content/modules.ts`)
for (const m of modulesByLocale.fr) console.log(`  · ${m.title} — ${m.questions.length} questions`)
if (!enAvailable) {
  console.warn(
    `\n⚠ ${CSV_EN_PATH} introuvable : la version anglaise reprend le texte français.`,
  )
} else {
  const missing = total - enByRef.size
  console.log(
    `  EN : ${enByRef.size}/${total} questions traduites` +
      (missing > 0 ? ` — ⚠ ${missing} encore en français` : ''),
  )
}
