# L’Étiquette — *Are you a gentleman?*

PWA mobile-first pour tester sa connaissance de l’**étiquette à la française**
(savoir-vivre, art de la table, civilité, présentations, élégance…) et obtenir
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
npm run icons      # régénère les icônes PNG de la PWA depuis le motif vectoriel
```

## Structure

```
src/
├── content/modules.ts     ← LE CONTENU (modules + questions). À compléter ici.
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

Tout se passe dans **`src/content/modules.ts`**. Une question :

```ts
{
  id: 'table-11',                 // identifiant unique stable
  prompt: 'La question posée ?',
  choices: ['Réponse A', 'B', 'C', 'D'], // exactement 4
  correctIndex: 0,                // index (0-3) de la bonne réponse
  explanation: 'Pourquoi cette réponse est la bonne.',
}
```

Le contenu actuel est un **exemple** (~10 questions par module). Objectif visé :
**20 questions minimum par module** et **50 pour le test final** (le test final tire
automatiquement dans l’ensemble des questions des modules).

Les réglages du moteur sont dans `src/lib/quiz.ts` :

```ts
export const PASS_THRESHOLD = 0.9  // 90 % pour valider
export const FINAL_TEST_SIZE = 50  // taille du test final
```

## Note sur le multi-joueurs

Pour le développement, joueurs / scores / classement sont stockés **localement**
(localStorage, donc par appareil). Toute la persistance passe par `src/lib/storage.ts`
et `src/lib/players.ts` : brancher un vrai backend (API REST, Supabase, Firebase…)
pour un classement partagé ne demande de réécrire que ces fichiers, sans toucher à l’UI.
