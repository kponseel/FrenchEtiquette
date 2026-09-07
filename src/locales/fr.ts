// Dictionnaire français — SOURCE DE VÉRITÉ des clés de traduction.
//
// Le type `TranslationKey` est dérivé de cet objet : toute clé ajoutée ici
// devient obligatoire dans `en.ts`, sinon TypeScript refuse de compiler.
// Les placeholders s'écrivent {nom} et sont remplacés par t(key, { nom }).

export const fr = {
  // ---- Marque & navigation ------------------------------------------------
  'brand.name': 'L’Étiquette',
  // Typographie française : une espace insécable précède le tiret cadratin et
  // borde les guillemets. Écrite en échappement   plutôt qu'en caractère
  // littéral, invisible et facile à écraser par mégarde.
  'brand.tagline':
    'Maîtrisez l’art du savoir-vivre à la française — et devenez Gentleman.',
  'nav.aria': 'Navigation principale',
  'nav.modules': 'Modules',
  'nav.leaderboard': 'Classement',
  'nav.profile': 'Profil',
  'lang.switch': 'English',
  'lang.aria': 'Changer de langue',

  // ---- Titres honorifiques ------------------------------------------------
  'title.certified': 'Gentleman Certifié',
  'title.aspirant': 'Aspirant Gentleman',
  'title.apprentice': 'Apprenti',
  'title.novice': 'Novice',

  // ---- Difficultés --------------------------------------------------------
  'difficulty.Fondamental': 'Fondamental',
  'difficulty.Intermédiaire': 'Intermédiaire',
  'difficulty.Piège': 'Piège',

  // ---- Connexion / création de profil -------------------------------------
  'login.loadError': '{error} Vérifiez votre connexion, puis réessayez.',
  'login.pseudoLabel': 'Choisissez votre nom',
  'login.pseudoPlaceholder': 'ex. Philéas Fogg',
  'login.pinLabel': 'Créez un code · {min} à {max} chiffres',
  'login.pinPlaceholder': 'ex. 1837',
  'login.pinHint':
    'Il protège l’accès à votre profil, depuis n’importe quel appareil.',
  'login.create': 'Créer mon profil',
  'login.resume': 'Reprendre un profil',
  'login.enterCode': 'Entrez votre code d’accès',
  'login.code': 'Code',
  'login.checking': 'Vérification…',
  'login.unlock': 'Déverrouiller',
  'login.back': '← Retour',
  'login.created': 'Profil créé',
  'login.noteCode': 'Notez votre code',
  'login.noteCodeHint':
    'Il vous sera demandé pour rouvrir le profil « {pseudo} ». Conservez-le précieusement.',
  'login.copied': 'Copié ✓',
  'login.copy': 'Copier le code',
  'login.copyFailed': 'Copie impossible — notez le code à la main.',
  'login.emailLabel': 'Recevoir le code par email (facultatif)',
  'login.emailPlaceholder': 'vous@exemple.fr',
  'login.emailHint':
    'Utilisée une seule fois pour vous envoyer le code — jamais enregistrée.',
  'login.emailSending': 'Envoi…',
  'login.emailSent': 'Code envoyé ✓',
  'login.emailSend': 'Envoyer le code par email',
  'login.emailInvalid': 'Indiquez une adresse email valide pour recevoir le code.',
  'login.emailFailed': 'Impossible d’envoyer l’email.',
  'login.enterCircle': 'Entrer dans le cercle',

  // ---- Accueil ------------------------------------------------------------
  'home.morning': 'Bonjour',
  'home.evening': 'Bonsoir',
  'home.greeting': '{greeting}, {pseudo}.',
  'home.progress': 'Votre progression',
  'home.certifiedMsg': 'Félicitations, vous êtes certifié Gentleman.',
  'home.unlockedMsg': 'Tous les modules sont validés. L’examen final vous attend.',
  'home.lockedMsg':
    'Validez chaque module ({threshold} requis) pour débloquer l’examen final.',
  'home.modules': 'Les modules',
  'home.finalExam': 'Examen de certification',
  'home.graduate': 'Diplômé',
  'home.seeCertificate': 'Voir mon certificat ›',
  'home.finalTitle': 'L’épreuve finale',
  'home.finalDesc':
    '{count} questions tirées de l’ensemble des modules. Atteignez {threshold} pour être certifié Gentleman.',
  'home.takeExam': 'Passer l’examen',
  'home.locked': 'Verrouillé',
  'home.lockedDesc':
    'L’examen final de {count} questions se débloque une fois les {total} modules validés ({passed}/{total} pour l’instant).',

  // ---- Carte de module ----------------------------------------------------
  'module.passed': 'Validé',
  'module.questionsPerTry': '{count} questions par essai',
  'module.passedLong': 'Module validé',
  'module.bestScore': 'Meilleur score {score}',
  'module.discover': 'À découvrir',

  // ---- Quiz ---------------------------------------------------------------
  'quiz.quit': 'Quitter',
  'quiz.question': 'Question {index} / {total}',
  'quiz.wellSpotted': 'Bien vu',
  'quiz.remember': 'À retenir',
  'quiz.seeResult': 'Voir le résultat',
  'quiz.continue': 'Continuer',
  'quiz.brilliant': 'Brillant.',
  'quiz.notQuite': 'Pas tout à fait.',
  'quiz.correctCount': '{correct} bonnes réponses sur {total}.',
  'quiz.nowCertified': 'Vous voici Gentleman certifié.',
  'quiz.modulePassed': 'Module validé avec les honneurs.',
  'quiz.needThreshold': 'Il faut atteindre {threshold} pour valider. Persévérez.',
  'quiz.finalUnlocked': '✦ L’examen final est désormais débloqué',
  'quiz.seeCertificate': 'Voir mon certificat',
  'quiz.restart': 'Recommencer',
  'quiz.backHome': 'Retour à l’accueil',
  'quiz.toReview': 'À revoir',
  'quiz.yourAnswer': 'Votre réponse',
  'quiz.rightAnswer': 'Bonne réponse',

  // ---- Classement ---------------------------------------------------------
  'leaderboard.eyebrow': 'Le cercle',
  'leaderboard.title': 'Classement',
  'leaderboard.empty': 'Aucun joueur pour l’instant.',
  'leaderboard.modulesSuffix': '{passed}/{total} modules',
  'leaderboard.points': 'points',
  'leaderboard.footnote': 'Classement commun à tous les joueurs, mis à jour en direct.',

  // ---- Profil -------------------------------------------------------------
  'profile.modulesPassed': 'Modules validés',
  'profile.finalExam': 'Examen final',
  'profile.rankingPoints': 'Points de classement',
  'profile.byModule': 'Détail par module',
  'profile.statusPassed': 'Validé',
  'profile.statusInProgress': 'En cours',
  'profile.statusNotStarted': 'Non commencé',
  'profile.best': 'meilleur',
  'profile.account': 'Compte',
  'profile.changePseudo': 'Changer de pseudo',
  'profile.changePin': 'Changer de code',
  'profile.newPseudo': 'Nouveau pseudo',
  'profile.newPin': 'Nouveau code · {min} à {max} chiffres',
  'profile.save': 'Enregistrer',
  'profile.savePin': 'Enregistrer le code',
  'profile.cancel': 'Annuler',
  'profile.signOut': 'Se déconnecter',
  'profile.pseudoUpdated': 'Pseudo mis à jour.',
  'profile.pinUpdated': 'Code mis à jour.',

  // ---- Certificat ---------------------------------------------------------
  'certificate.eyebrow': 'L’Étiquette française',
  'certificate.attests': 'Le présent certificat atteste que',
  'certificate.body':
    'a fait preuve d’une parfaite connaissance des usages du savoir-vivre et est reconnu(e)',
  'certificate.rank': 'Gentleman',
  'certificate.issued': 'Délivré le {date}',
  'certificate.score': 'Score',

  // ---- États & erreurs génériques -----------------------------------------
  'common.wait': 'Un instant…',
  'common.loading': 'Un instant…',
  'error.generic': 'Une erreur est survenue.',
  'error.genericRetry': 'Une erreur est survenue. Réessayez.',
  'error.nameTaken': 'Ce nom est déjà pris.',
  'error.noProfile': 'Aucun profil ouvert.',
  'error.wrongCode': 'Code incorrect.',
  'error.pseudoTooShort': 'Au moins 2 caractères, je vous prie.',
  'error.pseudoTooLong': '24 caractères maximum.',
  'error.pseudoCharset': 'Lettres, chiffres et espaces uniquement.',
  'error.pinDigitsOnly': 'Le code ne doit contenir que des chiffres.',
  'error.pinTooShort': 'Au moins {min} chiffres, je vous prie.',
  'error.pinTooLong': '{max} chiffres maximum.',
} as const

export type TranslationKey = keyof typeof fr
