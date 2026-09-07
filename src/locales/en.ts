// English dictionary.
//
// Typed against `fr.ts`: every key defined there is required here, so a missing
// translation is a compile error rather than a silent fallback at runtime.
//
// Register: measured, elegant British English — the app teaches French manners
// to an English-speaking reader, so French terms of art are kept and glossed
// rather than flattened into Anglo-Saxon equivalents.

import type { TranslationKey } from './fr'

export const en: Record<TranslationKey, string> = {
  // ---- Brand & navigation -------------------------------------------------
  'brand.name': 'L’Étiquette',
  'brand.tagline':
    'Master the art of French savoir-vivre — and become a Gentleman.',
  'nav.aria': 'Main navigation',
  'nav.modules': 'Modules',
  'nav.leaderboard': 'Ranking',
  'nav.profile': 'Profile',
  'lang.switch': 'Français',
  'lang.aria': 'Change language',

  // ---- Honorific titles ---------------------------------------------------
  'title.certified': 'Certified Gentleman',
  'title.aspirant': 'Aspiring Gentleman',
  'title.apprentice': 'Apprentice',
  'title.novice': 'Novice',

  // ---- Difficulty ---------------------------------------------------------
  'difficulty.Fondamental': 'Fundamental',
  'difficulty.Intermédiaire': 'Intermediate',
  'difficulty.Piège': 'Pitfall',

  // ---- Sign in / profile creation -----------------------------------------
  'login.loadError': '{error} Check your connection, then try again.',
  'login.pseudoLabel': 'Choose your name',
  'login.pseudoPlaceholder': 'e.g. Phileas Fogg',
  'login.pinLabel': 'Create a code · {min} to {max} digits',
  'login.pinPlaceholder': 'e.g. 1837',
  'login.pinHint': 'It guards your profile, from any device.',
  'login.create': 'Create my profile',
  'login.resume': 'Resume a profile',
  'login.enterCode': 'Enter your access code',
  'login.code': 'Code',
  'login.checking': 'Verifying…',
  'login.unlock': 'Unlock',
  'login.back': '← Back',
  'login.created': 'Profile created',
  'login.noteCode': 'Note down your code',
  'login.noteCodeHint':
    'You will be asked for it to reopen the profile “{pseudo}”. Keep it safe.',
  'login.copied': 'Copied ✓',
  'login.copy': 'Copy the code',
  'login.copyFailed': 'Copying failed — please write the code down.',
  'login.emailLabel': 'Receive the code by email (optional)',
  'login.emailPlaceholder': 'you@example.com',
  'login.emailHint': 'Used once to send you the code — never stored.',
  'login.emailSending': 'Sending…',
  'login.emailSent': 'Code sent ✓',
  'login.emailSend': 'Send the code by email',
  'login.emailInvalid': 'Please give a valid email address to receive the code.',
  'login.emailFailed': 'The email could not be sent.',
  'login.enterCircle': 'Enter the circle',

  // ---- Home ---------------------------------------------------------------
  'home.morning': 'Good morning',
  'home.evening': 'Good evening',
  'home.greeting': '{greeting}, {pseudo}.',
  'home.progress': 'Your progress',
  'home.certifiedMsg': 'Congratulations — you are a Certified Gentleman.',
  'home.unlockedMsg': 'Every module is passed. The final examination awaits.',
  'home.lockedMsg':
    'Pass each module ({threshold} required) to unlock the final examination.',
  'home.modules': 'The modules',
  'home.finalExam': 'Certification examination',
  'home.graduate': 'Graduate',
  'home.seeCertificate': 'View my certificate ›',
  'home.finalTitle': 'The final trial',
  'home.finalDesc':
    '{count} questions drawn from every module. Reach {threshold} to be certified a Gentleman.',
  'home.takeExam': 'Sit the examination',
  'home.locked': 'Locked',
  'home.lockedDesc':
    'The {count}-question final examination unlocks once all {total} modules are passed ({passed}/{total} so far).',

  // ---- Module card --------------------------------------------------------
  'module.passed': 'Passed',
  'module.questionsPerTry': '{count} questions per attempt',
  'module.passedLong': 'Module passed',
  'module.bestScore': 'Best score {score}',
  'module.discover': 'To discover',

  // ---- Quiz ---------------------------------------------------------------
  'quiz.quit': 'Leave',
  'quiz.question': 'Question {index} / {total}',
  'quiz.wellSpotted': 'Well spotted',
  'quiz.remember': 'Worth remembering',
  'quiz.seeResult': 'See the result',
  'quiz.continue': 'Continue',
  'quiz.brilliant': 'Brilliant.',
  'quiz.notQuite': 'Not quite.',
  'quiz.correctCount': '{correct} correct out of {total}.',
  'quiz.nowCertified': 'You are now a Certified Gentleman.',
  'quiz.modulePassed': 'Module passed with honours.',
  'quiz.needThreshold': 'You need {threshold} to pass. Persevere.',
  'quiz.finalUnlocked': '✦ The final examination is now unlocked',
  'quiz.seeCertificate': 'View my certificate',
  'quiz.restart': 'Start again',
  'quiz.backHome': 'Back to home',
  'quiz.toReview': 'To review',
  'quiz.yourAnswer': 'Your answer',
  'quiz.rightAnswer': 'Correct answer',

  // ---- Ranking ------------------------------------------------------------
  'leaderboard.eyebrow': 'The circle',
  'leaderboard.title': 'Ranking',
  'leaderboard.empty': 'No players yet.',
  'leaderboard.modulesSuffix': '{passed}/{total} modules',
  'leaderboard.points': 'points',
  'leaderboard.footnote': 'A single ranking shared by all players, updated live.',

  // ---- Profile ------------------------------------------------------------
  'profile.modulesPassed': 'Modules passed',
  'profile.finalExam': 'Final examination',
  'profile.rankingPoints': 'Ranking points',
  'profile.byModule': 'Module by module',
  'profile.statusPassed': 'Passed',
  'profile.statusInProgress': 'In progress',
  'profile.statusNotStarted': 'Not started',
  'profile.best': 'best',
  'profile.account': 'Account',
  'profile.changePseudo': 'Change name',
  'profile.changePin': 'Change code',
  'profile.newPseudo': 'New name',
  'profile.newPin': 'New code · {min} to {max} digits',
  'profile.save': 'Save',
  'profile.savePin': 'Save the code',
  'profile.cancel': 'Cancel',
  'profile.signOut': 'Sign out',
  'profile.pseudoUpdated': 'Name updated.',
  'profile.pinUpdated': 'Code updated.',

  // ---- Certificate --------------------------------------------------------
  'certificate.eyebrow': 'French Étiquette',
  'certificate.attests': 'This certificate attests that',
  'certificate.body':
    'has demonstrated a thorough command of the usages of savoir-vivre and is recognised as',
  'certificate.rank': 'Gentleman',
  'certificate.issued': 'Issued on {date}',
  'certificate.score': 'Score',

  // ---- Generic states & errors --------------------------------------------
  'common.wait': 'One moment…',
  'common.loading': 'One moment…',
  'error.generic': 'Something went wrong.',
  'error.genericRetry': 'Something went wrong. Please try again.',
  'error.nameTaken': 'That name is already taken.',
  'error.noProfile': 'No profile is open.',
  'error.wrongCode': 'Incorrect code.',
  'error.pseudoTooShort': 'At least 2 characters, if you please.',
  'error.pseudoTooLong': '24 characters maximum.',
  'error.pseudoCharset': 'Letters, digits and spaces only.',
  'error.pinDigitsOnly': 'The code must contain digits only.',
  'error.pinTooShort': 'At least {min} digits, if you please.',
  'error.pinTooLong': '{max} digits maximum.',
}
