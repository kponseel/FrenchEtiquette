import type { ReactNode } from 'react'

// Rendu inline minimal : *terme* devient <em>terme</em>.
//
// Le contenu anglais conserve les termes français consacrés (*smoking*,
// *gigot*, *vouvoiement*…) en italique, comme le veut l'usage typographique
// pour les mots étrangers. Le contenu français, lui, n'utilise pas
// d'astérisques : le composant est alors un simple passe-plat.
//
// Volontairement PAS un moteur markdown : pas de dépendance, et surtout pas de
// dangerouslySetInnerHTML — on découpe la chaîne et on émet des nœuds React.

const EMPHASIS = /\*([^*\n]+)\*/g

export default function RichText({ children }: { children: string }) {
  if (!children.includes('*')) return <>{children}</>

  const parts: ReactNode[] = []
  const re = new RegExp(EMPHASIS)
  let last = 0
  let match: RegExpExecArray | null

  while ((match = re.exec(children)) !== null) {
    if (match.index > last) parts.push(children.slice(last, match.index))
    parts.push(<em key={match.index}>{match[1]}</em>)
    last = match.index + match[0].length
  }
  if (last < children.length) parts.push(children.slice(last))

  return <>{parts}</>
}
