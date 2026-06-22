# L’Étiquette — *Are you a gentleman?*

PWA mobile-first pour tester sa connaissance de l’**étiquette à la française**
(savoir-vivre : affaires, conversation, art de la table, élégance…) et obtenir
un **certificat de Gentleman**.

> Esthétique « Ivoire & Encre » : fond ivoire, encre bleu-nuit, filets dorés,
> titres serif — sobre, classe et minimaliste, dans l’esprit Apple / éditorial de luxe.

## Principe

- Plusieurs **modules** thématiques, chacun avec un **QCM** (4 réponses, 1 seule correcte).
- **90 %** de bonnes réponses pour valider un module.
- Une **explication** est affichée après chaque réponse.
- Une fois **tous les modules validés**, l’**examen final** (50 questions tirées
  de l’ensemble) se débloque. Le réussir certifie le joueur **Gentleman**.
- **Multi-joueurs** avec **classement** : connexion par simple pseudo (unicité vérifiée).

## Stack

- **Vite + React + TypeScript**
- **vite-plugin-pwa** (manifest + service worker, installable, hors-ligne)
- **react-router-dom**
- Persistance via **localStorage** (couche isolée et remplaçable — voir ci-dessous)
- CSS maison (aucune librairie d’UI) — design system dans `src/index.css`

## Démarrer

```bash
npm install
npm run dev        # serveur de développement
npm run build      # typecheck + build de production (génère le service worker)
npm run preview    # sert le build de production
npm run icons         # régénère les icônes PNG de la PWA depuis le motif vectoriel
npm run build:content # régénère src/content/modules.ts depuis le CSV source
```

## Structure

```
content/
└── qcm-savoir-vivre.csv   ← SOURCE des questions (on édite ici)
scripts/
└── build-modules.mjs      ← Générateur : CSV → src/content/modules.ts
src/
├── content/modules.ts     ← Contenu GÉNÉRÉ (ne pas éditer à la main)
├── types.ts               ← Modèles de données (Question, Module, Player…)
├── lib/
│   ├── storage.ts         ← Accès localStorage (point unique à remplacer pour un backend)
│   ├── players.ts         ← Joueurs : unicité du pseudo, scores, titres, classement
│   ├── quiz.ts            ← Moteur : mélange, tirage du test final, scoring (seuil 90 %)
│   └── PlayerContext.tsx  ← État du joueur courant (React Context)
├── components/            ← BottomNav, ModuleCard, ProgressBar, ScoreRing, icônes
├── pages/                 ← Login, Home, Quiz, Certificate, Leaderboard, Profile
├── App.tsx                ← Routes
└── main.tsx               ← Point d’entrée
```

## Ajouter / modifier des questions

Le contenu provient d’un **unique fichier CSV** : `content/qcm-savoir-vivre.csv`
(colonnes : `Ref, Theme, Sous-theme, Statut, Difficulte, Question, A, B, C, D,
Bonne_reponse, Explication`). Après édition, régénérez le TypeScript :

```bash
npm run build:content
```

- Les questions sont **regroupées en modules** d’après le préfixe de `Ref`
  (`T1-…`, `T2-…`, …) ; titres, sous-titres et emojis des modules sont définis
  dans l’objet `META` de `scripts/build-modules.mjs`.
- `Bonne_reponse` (`A`–`D`) devient `correctIndex` (0–3).
- `Difficulte` (`Fondamental` / `Intermédiaire` / `Piège`) s’affiche en pastille
  pendant le quiz.
- **`src/content/modules.ts` est généré** — ne l’éditez pas à la main.

Contenu actuel : **182 questions** en **4 thèmes** — Affaires & Gentleman’s
Agreement, Conversation & Discrétion, Table & Réceptions, Élégance & Dress Code.
L’examen final tire **50 questions** dans l’ensemble.

Les réglages du moteur sont dans `src/lib/quiz.ts` :

```ts
export const PASS_THRESHOLD = 0.9   // 90 % pour valider
export const MODULE_TEST_SIZE = 20  // questions tirées par tentative de module
export const FINAL_TEST_SIZE = 50   // questions tirées pour l'examen final
```

## Note sur le multi-joueurs

Pour le développement, joueurs / scores / classement sont stockés **localement**
(localStorage, donc par appareil). Toute la persistance passe par `src/lib/storage.ts`
et `src/lib/players.ts` : brancher un vrai backend (API REST, Supabase, Firebase…)
pour un classement partagé ne demande de réécrire que ces fichiers, sans toucher à l’UI.
