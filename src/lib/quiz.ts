import type { AttemptResult, Difficulty, Module, Question } from '../types'

/** Score minimum (ratio) pour valider un module ou le test final. */
export const PASS_THRESHOLD = 0.9

/** Nombre de questions tirées pour le test final de certification. */
export const FINAL_TEST_SIZE = 50

/** Une question préparée pour une session : réponses mélangées. */
export interface PreparedQuestion {
  id: string
  prompt: string
  choices: string[]
  correctIndex: number
  explanation: string
  difficulty?: Difficulty
}

/** Fisher–Yates — renvoie une nouvelle liste mélangée. */
export function shuffle<T>(input: readonly T[]): T[] {
  const arr = input.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/** Mélange les réponses d'une question en recalculant l'index de la bonne réponse. */
export function prepareQuestion(q: Question): PreparedQuestion {
  const indexed = q.choices.map((text, i) => ({ text, i }))
  const mixed = shuffle(indexed)
  return {
    id: q.id,
    prompt: q.prompt,
    choices: mixed.map((c) => c.text),
    correctIndex: mixed.findIndex((c) => c.i === q.correctIndex),
    explanation: q.explanation,
    difficulty: q.difficulty,
  }
}

/** Prépare une session de QCM : questions mélangées, réponses mélangées. */
export function prepareQuiz(questions: readonly Question[]): PreparedQuestion[] {
  return shuffle(questions).map(prepareQuestion)
}

/** Tire les questions du test final dans l'ensemble des modules. */
export function buildFinalTest(
  modules: readonly Module[],
  size: number = FINAL_TEST_SIZE,
): PreparedQuestion[] {
  const pool: Question[] = modules.flatMap((m) => m.questions)
  return shuffle(pool)
    .slice(0, Math.min(size, pool.length))
    .map(prepareQuestion)
}

/** Calcule le résultat d'une tentative. */
export function computeResult(correct: number, total: number): AttemptResult {
  const score = total > 0 ? correct / total : 0
  return {
    score,
    correct,
    total,
    passed: score >= PASS_THRESHOLD,
    at: Date.now(),
  }
}

export const formatPercent = (ratio: number): string =>
  `${Math.round(ratio * 100)}%`
