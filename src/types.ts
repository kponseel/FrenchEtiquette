// Domain types for L'Étiquette.

export interface Question {
  /** Stable, unique id (used for review + drawing the final test). */
  id: string
  /** The question prompt. */
  prompt: string
  /** Exactly four possible answers. */
  choices: [string, string, string, string]
  /** Index (0-3) of the single correct answer in `choices`. */
  correctIndex: number
  /** Why the correct answer is correct — shown after answering. */
  explanation: string
}

export interface Module {
  id: string
  /** Short title, e.g. "À table". */
  title: string
  /** One-line subtitle shown on the card. */
  subtitle: string
  /** Longer description shown on the module intro. */
  description: string
  /** A single glyph/emoji used as a discreet motif. */
  motif: string
  questions: Question[]
}

/** Result of a single attempt at a module or the final exam. */
export interface AttemptResult {
  /** 0..1 — ratio of correct answers. */
  score: number
  correct: number
  total: number
  passed: boolean
  at: number
}

export interface ModuleProgress {
  bestScore: number
  passed: boolean
  attempts: number
  lastResult?: AttemptResult
}

export interface FinalProgress {
  bestScore: number
  passed: boolean
  attempts: number
  certifiedAt?: number
  lastResult?: AttemptResult
}

export interface Player {
  id: string
  pseudo: string
  createdAt: number
  /** Keyed by module id. */
  modules: Record<string, ModuleProgress>
  final: FinalProgress
}
