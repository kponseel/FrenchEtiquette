// AUTO-GÉNÉRÉ par scripts/build-modules.mjs à partir de content/qcm-savoir-vivre.csv
// Ne pas modifier à la main : éditez le CSV puis lancez `npm run build:content`.

import type { Module } from '../types'

export const modules: Module[] = [
  {
    "id": "affaires",
    "title": "Affaires & Gentleman’s Agreement",
    "subtitle": "Parole donnée, cercles & discrétion",
    "description": "Gentleman’s agreement, cooptation, cadeaux d’affaires, ponctualité… les codes feutrés du monde des affaires à la française.",
    "motif": "🤝",
    "questions": [
      {
        "id": "t1-001",
        "prompt": "Un « gentleman's agreement » conclu uniquement à l'oral :",
        "choices": [
          "devient automatiquement nul dès qu'un avocat est consulté",
          "est sans force contraignante en principe, mais sa preuve peut fonder une action en justice",
          "ne peut jamais produire d'effet juridique devant un tribunal",
          "a toujours exactement la même valeur qu'un contrat écrit signé"
        ],
        "correctIndex": 1,
        "explanation": "L'affaire de Pury / Gauguin (Londres, 2018-2019) a accordé 10 M$ de commission sur la seule base d'un accord oral prouvé.",
        "difficulty": "Intermédiaire",
        "tag": "Gentleman's agreement"
      },
      {
        "id": "t1-002",
        "prompt": "Quelle devise historique symbolise l'attachement de la maison Rothschild à l'intégrité ?",
        "choices": [
          "« Honneur et Patrie »",
          "« Liberté, Égalité, Fraternité »",
          "« Fluctuat nec mergitur »",
          "« Concordia, Integritas, Industria »"
        ],
        "correctIndex": 3,
        "explanation": "Octroyée en 1822 lors de l'anoblissement des cinq frères ; elle a donné son nom à la holding « Concordia ».",
        "difficulty": "Intermédiaire",
        "tag": "Esprit Rothschild"
      },
      {
        "id": "t1-003",
        "prompt": "Lors d'un dîner privé chez un associé, vous apprenez une information sensible sur une opération en cours. Vous :",
        "choices": [
          "la transmettez uniquement à votre supérieur hiérarchique",
          "n'en parlez à personne, pas même en interne",
          "y faites une allusion discrète pour montrer que vous êtes au courant",
          "la partagez avec un collègue de confiance en interne"
        ],
        "correctIndex": 1,
        "explanation": "« Ce qui se dit au salon reste au salon » : la discrétion absolue interdit toute divulgation, même feutrée.",
        "difficulty": "Fondamental",
        "tag": "Discrétion / secret"
      },
      {
        "id": "t1-004",
        "prompt": "Après un dîner où un haut fonctionnaire a évoqué de futures orientations de régulation, un client vous interroge sur ces rumeurs. Vous :",
        "choices": [
          "mentionnez avoir dîné avec lui sans détailler, pour valoriser votre prestige",
          "feignez l'ignorance et taisez la tenue même du dîner et l'identité des convives",
          "révélez les propos tenus pour prouver la qualité de votre réseau",
          "confirmez la rumeur sans citer votre source"
        ],
        "correctIndex": 1,
        "explanation": "La discrétion interdit d'instrumentaliser une rencontre privée à des fins commerciales ou de prestige.",
        "difficulty": "Piège",
        "tag": "Discrétion / secret"
      },
      {
        "id": "t1-005",
        "prompt": "Au Jockey Club de Paris, combien de votes favorables une seule boule noire (vote défavorable) annule-t-elle ?",
        "choices": [
          "10",
          "3",
          "5",
          "2"
        ],
        "correctIndex": 2,
        "explanation": "Le scrutin exige une majorité des cinq-sixièmes : une boule noire annule cinq boules blanches.",
        "difficulty": "Piège",
        "tag": "Cooptation / Jockey Club"
      },
      {
        "id": "t1-006",
        "prompt": "Dans les cercles fermés français, la richesse économique seule :",
        "choices": [
          "est un obstacle à l'admission",
          "ne suffit jamais : elle doit être légitimée par le capital culturel et social",
          "suffit toujours à se faire coopter",
          "dispense de tout parrainage"
        ],
        "correctIndex": 1,
        "explanation": "Selon Pinçon-Charlot, le capital économique doit être légitimé par d'autres capitaux (culturel, social).",
        "difficulty": "Intermédiaire",
        "tag": "Cooptation"
      },
      {
        "id": "t1-007",
        "prompt": "Vous souhaitez intégrer un club très sélectif où deux relations sont déjà membres. Vous :",
        "choices": [
          "suscitez des échanges informels et laissez vos relations proposer d'elles-mêmes de vous parrainer",
          "leur envoyez votre CV en leur demandant d'être vos parrains",
          "déposez votre candidature au secrétariat en les citant comme références sans les prévenir",
          "sollicitez directement le président du club"
        ],
        "correctIndex": 0,
        "explanation": "La cooptation feutrée proscrit la sollicitation directe : l'introduction doit être suggérée par les parrains eux-mêmes.",
        "difficulty": "Intermédiaire",
        "tag": "Art d'introduire"
      },
      {
        "id": "t1-008",
        "prompt": "En affaires à la française, un interlocuteur qui répond « je vais y réfléchir » puis ne revient jamais signifie le plus souvent :",
        "choices": [
          "qu'il a besoin de temps et reviendra",
          "qu'il attend une relance insistante",
          "qu'il s'agit d'un refus poli déguisé",
          "qu'il a oublié votre proposition"
        ],
        "correctIndex": 2,
        "explanation": "« Je vais y réfléchir » sans suite fonctionne comme un « non » courtois qui préserve la relation.",
        "difficulty": "Piège",
        "tag": "Art de dire non"
      },
      {
        "id": "t1-009",
        "prompt": "Pour notifier un refus à un partenaire lors d'un déjeuner, l'usage français privilégie :",
        "choices": [
          "cesser de répondre à ses sollicitations",
          "saluer l'intérêt de l'idée et différer la décision en proposant d'approfondir d'autres pistes",
          "un refus catégorique et immédiat, en listant les failles de la proposition",
          "déléguer le refus à un subordonné"
        ],
        "correctIndex": 1,
        "explanation": "L'art de dire non enveloppe le refus dans une étude continue, évitant l'affront tout en gardant le dialogue ouvert.",
        "difficulty": "Intermédiaire",
        "tag": "Art de dire non"
      },
      {
        "id": "t1-010",
        "prompt": "Vous êtes convié à une réunion d'affaires à Paris à 9h00. À quelle heure arrivez-vous ?",
        "choices": [
          "9h00, voire un peu avant",
          "8h00, une heure à l'avance",
          "9h15, en appliquant le quart d'heure de politesse",
          "9h30, pour montrer que vous êtes occupé"
        ],
        "correctIndex": 0,
        "explanation": "Le quart d'heure de politesse ne s'applique pas en contexte professionnel : l'heure annoncée est l'heure réelle.",
        "difficulty": "Piège",
        "tag": "Ponctualité"
      },
      {
        "id": "t1-011",
        "prompt": "Vous êtes invité à dîner à 20h00 au domicile privé de vos hôtes. L'usage veut que vous arriviez :",
        "choices": [
          "vers 20h15, pour laisser à l'hôte le temps de finir ses préparatifs",
          "à 19h45, en avance pour aider",
          "après 21h00",
          "à 20h00 précises"
        ],
        "correctIndex": 0,
        "explanation": "Pour un dîner privé à domicile, on accorde ~15 min à l'hôte ; ce délai ne vaut ni au restaurant ni en contexte pro.",
        "difficulty": "Intermédiaire",
        "tag": "Ponctualité"
      },
      {
        "id": "t1-012",
        "prompt": "La loi Sapin II fixe-t-elle un seuil monétaire légal précis (ex. 150 €) au-delà duquel tout cadeau d'affaires est interdit ?",
        "choices": [
          "Oui, 50 €",
          "Non : aucun seuil légal ; c'est la disproportion, la fréquence et l'intention qui caractérisent la corruption",
          "Oui, 150 € précisément",
          "Oui, mais uniquement pour les fonctionnaires"
        ],
        "correctIndex": 1,
        "explanation": "L'AFA n'impose pas de seuil ; chaque entreprise fixe le sien, et c'est l'intention corruptrice qui est sanctionnée.",
        "difficulty": "Piège",
        "tag": "Cadeaux d'affaires / Sapin II"
      },
      {
        "id": "t1-013",
        "prompt": "À quel moment est-il le plus approprié d'aborder explicitement une proposition commerciale chiffrée ?",
        "choices": [
          "au cocktail, debout",
          "au déjeuner d'affaires",
          "jamais à table, en aucune circonstance",
          "au dîner mondain, entre la poire et le fromage"
        ],
        "correctIndex": 1,
        "explanation": "Le déjeuner d'affaires a un objectif opérationnel ; le dîner mondain tisse du lien et exclut le registre transactionnel frontal.",
        "difficulty": "Intermédiaire",
        "tag": "Déjeuner vs dîner"
      },
      {
        "id": "t1-014",
        "prompt": "L'expression « noblesse d'État », qui décrit l'élite des grands corps et grandes écoles, a été conceptualisée par :",
        "choices": [
          "Alexis de Tocqueville",
          "Niall Ferguson",
          "Nadine de Rothschild",
          "Pierre Bourdieu"
        ],
        "correctIndex": 3,
        "explanation": "Bourdieu, dans « La Noblesse d'État » (1989), y analyse l'esprit de corps et le pantouflage.",
        "difficulty": "Intermédiaire",
        "tag": "Grands corps"
      },
      {
        "id": "t1-015",
        "prompt": "Concernant l'admission des femmes, le Jockey Club de Paris est :",
        "choices": [
          "mixte depuis sa fondation",
          "mixte depuis l'an 2000",
          "strictement masculin (les femmes en sont exclues)",
          "réservé aux femmes"
        ],
        "correctIndex": 2,
        "explanation": "Contrairement au Cercle de l'Union interalliée (mixte), le Jockey Club demeure strictement masculin.",
        "difficulty": "Intermédiaire",
        "tag": "Cercles parisiens"
      },
      {
        "id": "t1-016",
        "prompt": "Comment l'Académie française définit-elle le « gentleman's agreement » ?",
        "choices": [
          "un accord signé devant notaire",
          "une clause de confidentialité commerciale",
          "un contrat écrit sous seing privé",
          "une convention verbale où les parties s'engagent sur leur parole d'honneur"
        ],
        "correctIndex": 3,
        "explanation": "C'est un engagement moral reposant sur l'honneur des personnes, en principe dépourvu de force contraignante.",
        "difficulty": "Intermédiaire",
        "tag": "Gentleman's agreement"
      },
      {
        "id": "t1-017",
        "prompt": "Dans les cercles de cooptation, rompre un engagement pris oralement entraîne :",
        "choices": [
          "l'exclusion définitive des cercles et des flux d'affaires",
          "une simple pénalité financière",
          "une renégociation automatique des termes",
          "aucune conséquence, faute d'écrit"
        ],
        "correctIndex": 0,
        "explanation": "La valeur de la signature et la réputation étant l'actif principal, se dédire détruit durablement la crédibilité.",
        "difficulty": "Intermédiaire",
        "tag": "Parole donnée"
      },
      {
        "id": "t1-018",
        "prompt": "Après avoir scellé un accord d'une poignée de main dans un cercle exclusif, exiger aussitôt un protocole écrit signé est perçu comme :",
        "choices": [
          "une obligation légale",
          "une marque de professionnalisme",
          "un manque de confiance insultant",
          "une précaution avisée et bien vue"
        ],
        "correctIndex": 2,
        "explanation": "Réclamer un écrit immédiat trahit une défiance qui insulte l'interlocuteur dans ces milieux.",
        "difficulty": "Piège",
        "tag": "Parole donnée"
      },
      {
        "id": "t1-019",
        "prompt": "Le dispositif anticorruption de la loi Sapin II s'impose aux entreprises :",
        "choices": [
          "de toutes tailles sans exception",
          "uniquement cotées en Bourse",
          "d'au moins 500 salariés et de plus de 100 M€ de chiffre d'affaires",
          "de plus de 50 salariés"
        ],
        "correctIndex": 2,
        "explanation": "La loi n°2016-1691 vise les grandes entreprises (≥500 salariés et >100 M€ de CA).",
        "difficulty": "Intermédiaire",
        "tag": "Cadeaux d'affaires / Sapin II"
      },
      {
        "id": "t1-020",
        "prompt": "Offrir un cadeau à un client pendant un appel d'offres en cours est :",
        "choices": [
          "acceptable si la valeur est faible",
          "recommandé pour se démarquer",
          "obligatoire dans certains secteurs",
          "à proscrire absolument"
        ],
        "correctIndex": 3,
        "explanation": "Un cadeau en pleine procédure d'attribution est typiquement caractéristique d'une tentative de corruption.",
        "difficulty": "Fondamental",
        "tag": "Cadeaux d'affaires"
      },
      {
        "id": "t1-021",
        "prompt": "La jurisprudence distingue les « cadeaux d'usage » des « cadeaux de valeur ». Lequel relève des cadeaux d'usage ?",
        "choices": [
          "un coffret de chocolats de faible montant",
          "un voyage tous frais payés",
          "un bijou de prix",
          "une montre de luxe"
        ],
        "correctIndex": 0,
        "explanation": "Les cadeaux d'usage sont de faible montant et non corruptifs ; voyages et bijoux relèvent des cadeaux de valeur.",
        "difficulty": "Intermédiaire",
        "tag": "Cadeaux d'affaires"
      },
      {
        "id": "t1-022",
        "prompt": "En 2023, les laboratoires Urgo, pour avoir offert plus de 55 M€ de cadeaux à 8 000 pharmaciens, ont écopé d'une amende d'environ :",
        "choices": [
          "1 000 €",
          "55 M€",
          "500 M€",
          "1,1 M€"
        ],
        "correctIndex": 3,
        "explanation": "L'amende de 1,125 M€ illustre la sanction des pratiques de cadeaux disproportionnés.",
        "difficulty": "Intermédiaire",
        "tag": "Cadeaux d'affaires"
      },
      {
        "id": "t1-023",
        "prompt": "Pour candidater au Jockey Club de Paris, il faut être présenté par :",
        "choices": [
          "le président du club",
          "un seul parrain",
          "aucun parrain",
          "deux parrains membres du club"
        ],
        "correctIndex": 3,
        "explanation": "Deux parrains membres présentent le candidat, dont l'acceptabilité sociale est examinée avant tout vote.",
        "difficulty": "Intermédiaire",
        "tag": "Cooptation / Jockey Club"
      },
      {
        "id": "t1-024",
        "prompt": "À la différence du Jockey Club, le Cercle de l'Union interalliée :",
        "choices": [
          "admet les femmes comme membres (cercle mixte)",
          "exclut les femmes",
          "n'exige aucun parrainage",
          "est réservé aux seuls diplomates"
        ],
        "correctIndex": 0,
        "explanation": "Le Cercle de l'Union interalliée est mixte, là où le Jockey Club demeure strictement masculin.",
        "difficulty": "Intermédiaire",
        "tag": "Cercles parisiens"
      },
      {
        "id": "t1-025",
        "prompt": "Au Cercle de l'Union interalliée, l'usage veut que, parmi les deux parrains, l'un soit :",
        "choices": [
          "un ancien ministre",
          "membre depuis plus de vingt ans",
          "un membre fondateur",
          "de la même nationalité que le candidat"
        ],
        "correctIndex": 3,
        "explanation": "L'un des deux parrains doit être de la même nationalité que le candidat.",
        "difficulty": "Piège",
        "tag": "Cercles parisiens"
      },
      {
        "id": "t1-026",
        "prompt": "Dans le vocabulaire des grands corps, le « pantouflage » désigne :",
        "choices": [
          "la solidarité entre anciens d'une même école",
          "le secret professionnel bancaire",
          "un rite d'admission dans un cercle",
          "le passage de la haute fonction publique vers la banque et les grandes entreprises"
        ],
        "correctIndex": 3,
        "explanation": "Le pantouflage est le départ d'un haut fonctionnaire vers le privé ; l'« esprit de corps » désigne la solidarité entre diplômés.",
        "difficulty": "Intermédiaire",
        "tag": "Grands corps"
      },
      {
        "id": "t1-027",
        "prompt": "Lequel de ces réseaux structure traditionnellement l'élite des affaires françaises ?",
        "choices": [
          "le Rotary Club",
          "les Compagnons du Devoir",
          "l'Inspection des Finances",
          "la Croix-Rouge"
        ],
        "correctIndex": 2,
        "explanation": "Inspection des Finances, ENA (devenue INSP) et Polytechnique forment la « noblesse d'État » décrite par Bourdieu.",
        "difficulty": "Intermédiaire",
        "tag": "Grands corps"
      },
      {
        "id": "t1-028",
        "prompt": "Quel historien, premier à accéder aux archives familiales Rothschild, en a tiré une grande biographie ?",
        "choices": [
          "Pierre Bourdieu",
          "Jacques Le Goff",
          "Fernand Braudel",
          "Niall Ferguson"
        ],
        "correctIndex": 3,
        "explanation": "Niall Ferguson a exploité plus de 20 000 lettres pour « The House of Rothschild ».",
        "difficulty": "Intermédiaire",
        "tag": "Esprit Rothschild"
      },
      {
        "id": "t1-029",
        "prompt": "Le tabou français de l'argent s'enracine notamment dans :",
        "choices": [
          "la tradition protestante de la réussite affichée",
          "l'héritage catholique, le mépris aristocratique du commerce et l'idéal égalitaire révolutionnaire",
          "une loi récente sur la transparence",
          "le seul Code civil de 1804"
        ],
        "correctIndex": 1,
        "explanation": "Trois racines se conjuguent : religieuse (anti-chrématistique), aristocratique et révolutionnaire.",
        "difficulty": "Intermédiaire",
        "tag": "Tabou de l'argent"
      },
      {
        "id": "t1-030",
        "prompt": "En France, les déclarations de patrimoine des parlementaires sont :",
        "choices": [
          "consultables uniquement en préfecture, sans publication en ligne",
          "publiées en ligne pour tous",
          "totalement secrètes",
          "envoyées à chaque citoyen"
        ],
        "correctIndex": 0,
        "explanation": "Sous le régime de la HATVP, elles sont consultables en préfecture ; seules les déclarations d'intérêts sont publiées.",
        "difficulty": "Piège",
        "tag": "Tabou de l'argent"
      },
      {
        "id": "t1-031",
        "prompt": "En quelle année le Jockey Club de Paris a-t-il été fondé ?",
        "choices": [
          "1834",
          "1789",
          "1945",
          "1901"
        ],
        "correctIndex": 0,
        "explanation": "Le Jockey Club a été fondé en 1834 ; il a son siège au 2 rue Rabelais à Paris.",
        "difficulty": "Intermédiaire",
        "tag": "Cooptation / Jockey Club"
      },
      {
        "id": "t1-032",
        "prompt": "L'effectif du Jockey Club de Paris est :",
        "choices": [
          "plafonné (autour de 1 150 membres)",
          "illimité",
          "limité à 100 membres",
          "fixé à 10 000 membres"
        ],
        "correctIndex": 0,
        "explanation": "L'effectif est plafonné (environ 1 146 membres), ce qui renforce la rareté et la sélectivité.",
        "difficulty": "Intermédiaire",
        "tag": "Cooptation / Jockey Club"
      },
      {
        "id": "t1-033",
        "prompt": "Pour être admis au Jockey Club, un candidat doit obtenir au scrutin une majorité :",
        "choices": [
          "absolue de 75 %",
          "simple (plus de 50 %)",
          "des deux tiers",
          "des cinq-sixièmes (environ 84 %)"
        ],
        "correctIndex": 3,
        "explanation": "La majorité requise est des cinq-sixièmes ; une seule boule noire annule cinq boules blanches.",
        "difficulty": "Piège",
        "tag": "Cooptation / Jockey Club"
      },
      {
        "id": "t1-034",
        "prompt": "Que désigne le sigle AFA, lié à la loi Sapin II ?",
        "choices": [
          "l'Association financière des affaires",
          "l'Agence française anticorruption",
          "l'Autorité des fournisseurs agréés",
          "l'Agence fiscale autonome"
        ],
        "correctIndex": 1,
        "explanation": "L'AFA veille au dispositif anticorruption et qualifie les cadeaux d'« actes ordinaires de la vie des affaires ».",
        "difficulty": "Intermédiaire",
        "tag": "Cadeaux d'affaires / Sapin II"
      },
      {
        "id": "t1-035",
        "prompt": "En quelle année la loi Sapin II a-t-elle été adoptée ?",
        "choices": [
          "2016",
          "2010",
          "2021",
          "2004"
        ],
        "correctIndex": 0,
        "explanation": "La loi n°2016-1691 date du 9 décembre 2016.",
        "difficulty": "Fondamental",
        "tag": "Cadeaux d'affaires / Sapin II"
      },
      {
        "id": "t1-036",
        "prompt": "À quoi servent surtout, pour les grands patrons, les cercles comme le Jockey ou l'Automobile Club de France ?",
        "choices": [
          "à « faire des affaires l'air de rien », dans un cadre feutré",
          "à pratiquer un sport de compétition",
          "à organiser des conférences de presse",
          "à recruter des stagiaires"
        ],
        "correctIndex": 0,
        "explanation": "Ces cercles permettent de tisser des relations d'affaires sans jamais les afficher frontalement.",
        "difficulty": "Intermédiaire",
        "tag": "Cercles d'influence"
      },
      {
        "id": "t1-037",
        "prompt": "Quelle institution a remplacé l'ENA dans la formation de la haute fonction publique ?",
        "choices": [
          "l'INSP (Institut national du service public)",
          "l'ENS",
          "HEC",
          "l'IEP de Lyon"
        ],
        "correctIndex": 0,
        "explanation": "L'ENA est devenue l'INSP ; avec Polytechnique et l'Inspection des Finances, elle structure la « noblesse d'État ».",
        "difficulty": "Intermédiaire",
        "tag": "Grands corps"
      },
      {
        "id": "t1-038",
        "prompt": "L'expression « esprit de corps » désigne :",
        "choices": [
          "la solidarité et la cooptation entre diplômés d'un même corps",
          "la discipline interne d'une entreprise",
          "le secret bancaire",
          "la rigueur physique des militaires"
        ],
        "correctIndex": 0,
        "explanation": "Bourdieu en fait le sous-titre de « La Noblesse d'État » : solidarité entre pairs issus du même corps.",
        "difficulty": "Intermédiaire",
        "tag": "Grands corps"
      },
      {
        "id": "t1-039",
        "prompt": "« Concordia » est aussi le nom :",
        "choices": [
          "d'un cercle parisien",
          "d'une banque concurrente",
          "d'un traité de savoir-vivre",
          "de la holding familiale de contrôle des Rothschild"
        ],
        "correctIndex": 3,
        "explanation": "Tirée de la devise « Concordia, Integritas, Industria », elle nomme la holding de contrôle de la famille.",
        "difficulty": "Intermédiaire",
        "tag": "Esprit Rothschild"
      },
      {
        "id": "t1-040",
        "prompt": "Le secret « de salon » trouve historiquement sa source dans :",
        "choices": [
          "les salons de la Restauration et de la Monarchie de Juillet",
          "les tranchées de 1914",
          "les cafés du XXe siècle",
          "les forums numériques"
        ],
        "correctIndex": 0,
        "explanation": "C'est là que s'élaboraient alliances politiques et financières à l'écart du public, d'où l'exigence de discrétion.",
        "difficulty": "Intermédiaire",
        "tag": "Discrétion / secret"
      },
      {
        "id": "t1-041",
        "prompt": "L'art diplomatique français de dire non sans froisser puise sa source dans :",
        "choices": [
          "le droit commercial anglo-saxon",
          "la philosophie des Lumières",
          "la doctrine militaire napoléonienne",
          "le protocole de l'Ancien Régime, conçu pour éviter les crises d'État"
        ],
        "correctIndex": 3,
        "explanation": "Le cérémonial évitait que les heurts individuels ne dégénèrent en conflits entre puissances.",
        "difficulty": "Intermédiaire",
        "tag": "Art de dire non"
      },
      {
        "id": "t1-042",
        "prompt": "Historiquement, la cooptation servait surtout à :",
        "choices": [
          "ouvrir les cercles au plus grand nombre",
          "accélérer les recrutements",
          "réduire les cotisations des membres",
          "protéger l'aristocratie et la haute bourgeoisie des intrusions opportunistes"
        ],
        "correctIndex": 3,
        "explanation": "Le filtrage par parrainage écartait les candidatures jugées intempestives ou opportunistes.",
        "difficulty": "Intermédiaire",
        "tag": "Cooptation"
      },
      {
        "id": "t1-043",
        "prompt": "Selon Bourdieu, la « noblesse d'État » est l'héritière structurale de :",
        "choices": [
          "la noblesse d'épée",
          "la noblesse d'Empire",
          "la noblesse de robe",
          "la bourgeoisie marchande"
        ],
        "correctIndex": 2,
        "explanation": "Bourdieu en fait l'héritière — parfois généalogique — de l'ancienne noblesse de robe.",
        "difficulty": "Piège",
        "tag": "Grands corps"
      },
      {
        "id": "t1-044",
        "prompt": "Quels sociologues ont étudié le « répertoire d'action » et la discrétion de la grande bourgeoisie ?",
        "choices": [
          "Michel et Monique Pinçon-Charlot",
          "Raymond Aron",
          "Bruno Latour",
          "Émile Durkheim et Marcel Mauss"
        ],
        "correctIndex": 0,
        "explanation": "Les Pinçon-Charlot ont montré que la discrétion est une marque du répertoire d'action de la grande bourgeoisie.",
        "difficulty": "Intermédiaire",
        "tag": "Sociologie des élites"
      },
      {
        "id": "t1-045",
        "prompt": "Au Cercle de l'Union interalliée, la sélection passe notamment par :",
        "choices": [
          "un entretien formel devant une commission d'admission, suivi d'un vote",
          "un simple paiement de cotisation",
          "un tirage au sort",
          "un concours écrit"
        ],
        "correctIndex": 0,
        "explanation": "Le candidat est reçu par une commission d'admission, puis soumis à un vote.",
        "difficulty": "Intermédiaire",
        "tag": "Cercles parisiens"
      }
    ]
  },
  {
    "id": "conversation",
    "title": "Conversation & Discrétion",
    "subtitle": "Sujets, ton, tutoiement & tact",
    "description": "Sujets tabous, art de dire non, tutoiement, protocole épistolaire… converser avec esprit sans jamais froisser.",
    "motif": "🕯",
    "questions": [
      {
        "id": "t2-001",
        "prompt": "Dans un dîner bourgeois français, lequel de ces sujets est le plus gravement tabou ?",
        "choices": [
          "le montant de votre prime annuelle",
          "le dernier film que vous avez vu",
          "une exposition récente",
          "vos projets de vacances"
        ],
        "correctIndex": 0,
        "explanation": "L'argent (salaire, prix, patrimoine) est le tabou central et le plus spécifiquement français.",
        "difficulty": "Fondamental",
        "tag": "Sujets tabous"
      },
      {
        "id": "t2-002",
        "prompt": "Un invité demande à votre hôte le prix d'acquisition d'un tableau de maître exposé dans son salon. L'hôte devrait :",
        "choices": [
          "éluder l'aspect financier en parlant de l'artiste, de l'école picturale ou de l'émotion esthétique",
          "répondre sèchement que la question est déplacée",
          "donner une fourchette de prix approximative",
          "révéler le montant exact pour souligner la valeur de sa collection"
        ],
        "correctIndex": 0,
        "explanation": "L'élégance neutralise l'intrusion matérielle par une digression culturelle, sans valider la question d'argent.",
        "difficulty": "Intermédiaire",
        "tag": "Sujets tabous"
      },
      {
        "id": "t2-003",
        "prompt": "Pour démontrer son capital culturel sans paraître vulgaire dans un dîner français, on parle de préférence :",
        "choices": [
          "d'un cru de Bourgogne ou d'une exposition récente",
          "de ses opinions politiques partisanes",
          "du montant de ses investissements",
          "du prix de sa résidence secondaire"
        ],
        "correctIndex": 0,
        "explanation": "Culture, vin, gastronomie, voyages et art valorisent sans heurter le tabou de l'argent.",
        "difficulty": "Fondamental",
        "tag": "Sujets valorisants"
      },
      {
        "id": "t2-004",
        "prompt": "Quel registre humoristique est le plus valorisé dans les cercles raffinés français ?",
        "choices": [
          "la blague potache",
          "le sous-entendu et le second degré",
          "le calembour appuyé",
          "l'humour grivois"
        ],
        "correctIndex": 1,
        "explanation": "L'esprit, l'understatement et l'ironie fine priment ; l'agressivité et la grossièreté sont proscrites.",
        "difficulty": "Intermédiaire",
        "tag": "Ton & humour"
      },
      {
        "id": "t2-005",
        "prompt": "Un interlocuteur affirme avec aplomb une opinion historique manifestement fausse. Vous :",
        "choices": [
          "quittez la conversation avec ostentation",
          "approuvez son propos pour éviter toute contradiction",
          "le corrigez immédiatement et magistralement pour rétablir la vérité",
          "relevez l'argument par une formule légère (« interprétation très originale ») avant de changer de sujet"
        ],
        "correctIndex": 3,
        "explanation": "La litote marque le désaccord sans humilier ; préserver le confort de l'autre prime sur le fait d'avoir raison publiquement.",
        "difficulty": "Piège",
        "tag": "Désaccord / litote"
      },
      {
        "id": "t2-006",
        "prompt": "Dans un cadre professionnel traditionnel, qui doit proposer le passage au tutoiement ?",
        "choices": [
          "n'importe qui, indifféremment",
          "la personne la plus haut placée ou la plus âgée",
          "toujours la femme, en toute circonstance",
          "le plus jeune ou le subalterne"
        ],
        "correctIndex": 1,
        "explanation": "L'initiative revient au « supérieur » dans la relation (aîné, supérieur hiérarchique) ; l'inverse est une intrusion.",
        "difficulty": "Fondamental",
        "tag": "Tutoiement / vouvoiement"
      },
      {
        "id": "t2-007",
        "prompt": "Un jeune banquier échange chaleureusement avec une cliente de haut rang plus âgée. Le tutoiement :",
        "choices": [
          "ne peut venir que d'une invitation explicite de la cliente",
          "s'installe spontanément des deux côtés",
          "peut être proposé par le banquier pour fluidifier la relation",
          "doit être évité définitivement"
        ],
        "correctIndex": 0,
        "explanation": "Genre, âge et statut de cliente se cumulent : l'initiative lui appartient exclusivement.",
        "difficulty": "Piège",
        "tag": "Tutoiement / vouvoiement"
      },
      {
        "id": "t2-008",
        "prompt": "Complimenter abondamment et directement votre hôtesse sur sa fortune et la valeur de sa demeure est :",
        "choices": [
          "acceptable si c'est sincère",
          "recommandé pour créer du lien",
          "une marque de savoir-vivre appréciée",
          "doublement fautif : flatterie servile et évocation de l'argent"
        ],
        "correctIndex": 3,
        "explanation": "L'éloge doit être indirect et porter sur un détail (une conversation, un choix de vin), jamais sur l'argent.",
        "difficulty": "Intermédiaire",
        "tag": "Flatterie"
      },
      {
        "id": "t2-009",
        "prompt": "Pour exprimer votre estime à un dirigeant lors d'une réception, vous dites :",
        "choices": [
          "rien, pour ne pas paraître servile",
          "« Votre analyse des mutations industrielles propose une grille de lecture très stimulante »",
          "« Vous devez très bien gagner votre vie »",
          "« Votre parcours est exceptionnel, vous êtes un modèle pour nous tous »"
        ],
        "correctIndex": 1,
        "explanation": "L'éloge à la française porte sur l'intelligence d'une action ou d'une pensée, non sur l'ego par des superlatifs génériques.",
        "difficulty": "Intermédiaire",
        "tag": "Flatterie"
      },
      {
        "id": "t2-010",
        "prompt": "Pour être un bon convive dans une conversation, il convient de :",
        "choices": [
          "poser des questions ouvertes et relancer ses voisins",
          "corriger les erreurs des autres",
          "raconter ses meilleures anecdotes le plus longtemps possible",
          "monopoliser la parole pour briller"
        ],
        "correctIndex": 0,
        "explanation": "L'art conversationnel valorise l'écoute active et l'équilibre des temps de parole : on cherche à faire briller l'autre.",
        "difficulty": "Fondamental",
        "tag": "Écoute / relance"
      },
      {
        "id": "t2-011",
        "prompt": "Dans des cercles fermés où les familles sont souvent apparentées, répandre une rumeur malveillante nuit surtout :",
        "choices": [
          "à l'hôte de la soirée",
          "à celui qui la propage",
          "à la personne visée",
          "à personne, car tout s'oublie"
        ],
        "correctIndex": 1,
        "explanation": "La médisance ouverte détruit la réputation de son auteur dans un milieu où tout le monde se connaît.",
        "difficulty": "Intermédiaire",
        "tag": "Médisance"
      },
      {
        "id": "t2-012",
        "prompt": "Face à une remarque indiscrète sur vos revenus en société, la réponse la plus élégante est :",
        "choices": [
          "une réplique cinglante",
          "un silence courtois ou une pirouette qui change de sujet",
          "quitter la table",
          "donner le chiffre exact"
        ],
        "correctIndex": 1,
        "explanation": "Le silence ou la litote permet de ne pas s'engager et de signaler une réserve sans la formuler.",
        "difficulty": "Intermédiaire",
        "tag": "Silence"
      },
      {
        "id": "t2-013",
        "prompt": "En France, le titre protocolaire « Excellence » s'applique à :",
        "choices": [
          "tous les ministres français",
          "les préfets de région",
          "les ambassadeurs étrangers en poste en France",
          "le Président de la République française dans tous les contextes"
        ],
        "correctIndex": 2,
        "explanation": "« Excellence » n'existe pas dans le protocole interne français ; il est réservé aux hauts dignitaires étrangers.",
        "difficulty": "Piège",
        "tag": "Protocole / titres"
      },
      {
        "id": "t2-014",
        "prompt": "Dans une lettre formelle soutenue, on exprime à son destinataire :",
        "choices": [
          "ses « amitiés » en toute circonstance",
          "ses « considérations affectueuses »",
          "ses « sentiments » (et non ses « salutations »)",
          "ses « salutations » (« Veuillez agréer mes salutations »)"
        ],
        "correctIndex": 2,
        "explanation": "On exprime des « sentiments » ; « Veuillez agréer mes salutations » est incorrect dans le registre soutenu.",
        "difficulty": "Piège",
        "tag": "Protocole épistolaire"
      },
      {
        "id": "t2-015",
        "prompt": "Une femme qui s'adresse à un officier général dit :",
        "choices": [
          "« Mon Général », comme un homme",
          "« Excellence »",
          "« Monsieur le Général »",
          "simplement « Général »"
        ],
        "correctIndex": 3,
        "explanation": "« Mon » abrège « Monsieur » (réservé aux hommes) ; une femme dit donc simplement « Général ».",
        "difficulty": "Piège",
        "tag": "Protocole / titres"
      },
      {
        "id": "t2-016",
        "prompt": "Dans la tradition bourgeoise stricte, dire « Bon appétit » avant de manger est :",
        "choices": [
          "obligatoire seulement au déjeuner",
          "proscrit, car cela renvoie à la mécanique digestive du corps",
          "réservé à la maîtresse de maison",
          "une marque de politesse indispensable"
        ],
        "correctIndex": 1,
        "explanation": "Souhaiter « bon appétit » évoque la dimension physiologique du repas, jugée vulgaire dans les manuels du XIXe siècle.",
        "difficulty": "Piège",
        "tag": "Langage / formulations"
      },
      {
        "id": "t2-017",
        "prompt": "Pour quitter brièvement la table afin d'aller aux toilettes, on dit :",
        "choices": [
          "« Je reviens, petite pause technique »",
          "« Où sont les WC ? »",
          "« Je vais aux toilettes »",
          "« Veuillez m'excuser quelques instants »"
        ],
        "correctIndex": 3,
        "explanation": "Évoquer un besoin physiologique est proscrit : on s'éclipse discrètement sans justification.",
        "difficulty": "Intermédiaire",
        "tag": "Langage / formulations"
      },
      {
        "id": "t2-018",
        "prompt": "Lorsqu'un convive éternue à table, l'usage le plus raffiné veut que l'on :",
        "choices": [
          "propose un mouchoir à voix haute",
          "dise « À vos souhaits »",
          "dise « À vos amours »",
          "ignore l'éternuement comme s'il n'avait pas eu lieu"
        ],
        "correctIndex": 3,
        "explanation": "L'éternuement étant une manifestation corporelle, la bienséance feint de ne pas le remarquer pour ne pas embarrasser.",
        "difficulty": "Intermédiaire",
        "tag": "Langage / formulations"
      },
      {
        "id": "t2-019",
        "prompt": "Lors d'une présentation officielle, il est plus soutenu de désigner son conjoint par :",
        "choices": [
          "son seul prénom",
          "« mon mari » / « ma femme »",
          "« mon époux » / « mon épouse »",
          "« mon homme » / « ma compagne »"
        ],
        "correctIndex": 2,
        "explanation": "« Époux/épouse » marque le lien d'alliance dans les contextes solennels ; « mari/femme » s'emploie au quotidien.",
        "difficulty": "Intermédiaire",
        "tag": "Langage / formulations"
      },
      {
        "id": "t2-020",
        "prompt": "Si vous n'avez pas entendu ce que dit votre interlocuteur, la formule la plus distinguée est :",
        "choices": [
          "« Pardon ? »",
          "« Hein ? »",
          "« Comment ? » ou « Je n'ai pas bien saisi »",
          "« Quoi ? »"
        ],
        "correctIndex": 2,
        "explanation": "« Pardon » traduit une posture jugée servile pour une simple inattention auditive ; on préfère « Comment ? ».",
        "difficulty": "Intermédiaire",
        "tag": "Langage / formulations"
      },
      {
        "id": "t2-021",
        "prompt": "Outre l'argent, quels sont les deux autres grands sujets à éviter dans un salon ?",
        "choices": [
          "le sport et la météo",
          "la littérature et l'art",
          "la politique partisane et la religion",
          "la cuisine et les voyages"
        ],
        "correctIndex": 2,
        "explanation": "Argent, politique partisane et religion forment le trio des sujets tabous.",
        "difficulty": "Fondamental",
        "tag": "Sujets tabous"
      },
      {
        "id": "t2-022",
        "prompt": "Pour diriger un courrier vers une personne précise, on écrit :",
        "choices": [
          "« à l'intention de »",
          "« aux bons soins de » uniquement",
          "« à l'attention de »",
          "« pour le compte de »"
        ],
        "correctIndex": 2,
        "explanation": "« À l'attention de » dirige le courrier ; « à l'intention de » signifie « en l'honneur de » et serait incorrect ici.",
        "difficulty": "Piège",
        "tag": "Protocole épistolaire"
      },
      {
        "id": "t2-023",
        "prompt": "En clôture d'une lettre au Président de la République, on exprime :",
        "choices": [
          "« mes sentiments les meilleurs »",
          "« l'expression de ma haute considération »",
          "« l'hommage de mon profond respect »",
          "« mes salutations distinguées »"
        ],
        "correctIndex": 2,
        "explanation": "Au chef de l'État on adresse « l'hommage de mon profond respect », non une « considération ».",
        "difficulty": "Piège",
        "tag": "Protocole épistolaire"
      },
      {
        "id": "t2-024",
        "prompt": "Un homme qui écrit à une femme ne lui adresse pas ses « sentiments », mais plutôt :",
        "choices": [
          "ses « pensées »",
          "ses « salutations »",
          "ses « hommages respectueux » ou sa « considération »",
          "ses « amitiés »"
        ],
        "correctIndex": 2,
        "explanation": "On n'adresse pas ses « sentiments » à une personne du sexe opposé ; on emploie « hommages respectueux ».",
        "difficulty": "Piège",
        "tag": "Protocole épistolaire"
      },
      {
        "id": "t2-025",
        "prompt": "Le titre « Maître » s'emploie en s'adressant à :",
        "choices": [
          "un médecin",
          "un avocat ou un notaire",
          "un professeur d'université",
          "un ingénieur"
        ],
        "correctIndex": 1,
        "explanation": "« Maître » est réservé aux avocats et notaires (et autres officiers ministériels).",
        "difficulty": "Intermédiaire",
        "tag": "Protocole / titres"
      },
      {
        "id": "t2-026",
        "prompt": "Parler de la météo dans un dîner mondain est :",
        "choices": [
          "le sujet le plus valorisant",
          "strictement interdit",
          "gravement tabou",
          "admis, mais jugé plat et ennuyeux"
        ],
        "correctIndex": 3,
        "explanation": "La météo est un sujet « sûr » mais banal ; culture, vin et voyages valorisent davantage.",
        "difficulty": "Intermédiaire",
        "tag": "Sujets valorisants"
      },
      {
        "id": "t2-027",
        "prompt": "Tutoyer un subalterne qui, lui, doit vous vouvoyer est :",
        "choices": [
          "recommandé entre collègues",
          "une marque de proximité appréciée",
          "la norme hiérarchique",
          "très mal ressenti"
        ],
        "correctIndex": 3,
        "explanation": "Le tutoiement non réciproque marque une condescendance mal vécue.",
        "difficulty": "Piège",
        "tag": "Tutoiement / vouvoiement"
      },
      {
        "id": "t2-028",
        "prompt": "Dans la conversation raffinée, les éclats de voix et les rires bruyants sont :",
        "choices": [
          "un signe de convivialité bienvenu",
          "tolérés au dessert",
          "proscrits, au profit d'un ton modéré et maîtrisé",
          "le propre de l'esprit français"
        ],
        "correctIndex": 2,
        "explanation": "La voix maîtrisée, jamais forte, est la marque du raffinement hérité des salons.",
        "difficulty": "Intermédiaire",
        "tag": "Ton & volume"
      },
      {
        "id": "t2-029",
        "prompt": "L'art français de l'éloge indirect et chirurgical trouve sa source dans :",
        "choices": [
          "les salons littéraires du XXe siècle",
          "la vie de cour à Versailles",
          "les tranchées de 1914",
          "la Révolution française"
        ],
        "correctIndex": 1,
        "explanation": "À Versailles, la flatterie était un art de précision destiné à se distinguer du vulgaire.",
        "difficulty": "Intermédiaire",
        "tag": "Flatterie"
      },
      {
        "id": "t2-030",
        "prompt": "La frontière sociale à ne pas franchir oppose l'« information discrète » échangée entre initiés à :",
        "choices": [
          "le compliment indirect",
          "le silence courtois",
          "la conversation culturelle",
          "la calomnie sociale ouverte, qui se retourne contre son auteur"
        ],
        "correctIndex": 3,
        "explanation": "L'information circule à mots couverts, mais médire ouvertement détruit la réputation de celui qui colporte.",
        "difficulty": "Intermédiaire",
        "tag": "Médisance"
      },
      {
        "id": "t2-031",
        "prompt": "Quelle linguiste analyse le choix tu/vous à travers la « distance sociale » et la « solidarité communicationnelle » ?",
        "choices": [
          "Hannah Arendt",
          "Julia Kristeva",
          "Simone de Beauvoir",
          "Catherine Kerbrat-Orecchioni"
        ],
        "correctIndex": 3,
        "explanation": "Kerbrat-Orecchioni étudie le tutoiement-vouvoiement via la distance sociale et la solidarité communicationnelle.",
        "difficulty": "Intermédiaire",
        "tag": "Tutoiement / vouvoiement"
      },
      {
        "id": "t2-032",
        "prompt": "On s'adresse au maire d'une commune en disant :",
        "choices": [
          "« Excellence »",
          "« Monsieur l'Élu »",
          "« Monsieur le Maire »",
          "« Maître »"
        ],
        "correctIndex": 2,
        "explanation": "On emploie la fonction : « Monsieur le Maire », comme « Monsieur le Président ».",
        "difficulty": "Intermédiaire",
        "tag": "Protocole / titres"
      },
      {
        "id": "t2-033",
        "prompt": "Dans la bourgeoisie très traditionnelle, le vouvoiement peut persister :",
        "choices": [
          "seulement avec les inconnus",
          "jusqu'au sein du couple ou envers les parents",
          "jamais au-delà d'un mois",
          "uniquement au travail"
        ],
        "correctIndex": 1,
        "explanation": "Le vouvoiement s'y maintient parfois entre époux ou envers les parents, marque de déférence persistante.",
        "difficulty": "Piège",
        "tag": "Tutoiement / vouvoiement"
      },
      {
        "id": "t2-034",
        "prompt": "Dans quels milieux le tutoiement s'installe-t-il généralement plus vite ?",
        "choices": [
          "la magistrature",
          "la haute banque traditionnelle",
          "les start-up, le milieu associatif et le sport",
          "la diplomatie"
        ],
        "correctIndex": 2,
        "explanation": "Les jeunes générations et ces milieux tutoient plus rapidement que les cercles traditionnels.",
        "difficulty": "Intermédiaire",
        "tag": "Tutoiement / vouvoiement"
      },
      {
        "id": "t2-035",
        "prompt": "Face à une provocation en société, l'attitude la plus raffinée consiste à :",
        "choices": [
          "répliquer du tac au tac",
          "hausser le ton",
          "laisser un blanc éloquent, sans répondre",
          "quitter la pièce avec éclat"
        ],
        "correctIndex": 2,
        "explanation": "« Le silence est d'or » : ne pas répondre à une provocation est une compétence sociale.",
        "difficulty": "Intermédiaire",
        "tag": "Silence"
      },
      {
        "id": "t2-036",
        "prompt": "L'« hommage voilé » désigne :",
        "choices": [
          "un compliment indirect et allusif, jamais appuyé",
          "une lettre de remerciement",
          "un cadeau coûteux",
          "une flatterie publique et appuyée"
        ],
        "correctIndex": 0,
        "explanation": "On loue par la nuance (un détail, un choix), à l'opposé de la flatterie servile.",
        "difficulty": "Intermédiaire",
        "tag": "Flatterie"
      },
      {
        "id": "t2-037",
        "prompt": "Dans les cercles raffinés, l'« esprit » (la répartie élégante) se distingue :",
        "choices": [
          "de l'understatement",
          "du calembour lourd et de la blague grossière",
          "de l'ironie fine",
          "du sous-entendu"
        ],
        "correctIndex": 1,
        "explanation": "L'esprit, c'est la répartie élégante — l'inverse du calembour appuyé ou de la plaisanterie grossière.",
        "difficulty": "Intermédiaire",
        "tag": "Ton & humour"
      },
      {
        "id": "t2-038",
        "prompt": "La conversation conçue comme « joute feutrée » valorisant la vivacité intellectuelle vient des salons :",
        "choices": [
          "des années 1960",
          "de la Belle Époque",
          "du Second Empire",
          "du Siècle des Lumières"
        ],
        "correctIndex": 3,
        "explanation": "Les salons des Lumières concevaient la conversation comme un exercice d'esprit sans colère ni grossièreté.",
        "difficulty": "Intermédiaire",
        "tag": "Conversation / origine"
      },
      {
        "id": "t2-039",
        "prompt": "La conversation mondaine française vise avant tout :",
        "choices": [
          "l'efficacité informationnelle",
          "la résolution rapide d'un problème",
          "la transmission de données chiffrées",
          "un exercice intellectuel où la forme et le sous-entendu priment"
        ],
        "correctIndex": 3,
        "explanation": "Elle privilégie la forme, le sous-entendu et la maîtrise de soi sur l'exposition des convictions.",
        "difficulty": "Intermédiaire",
        "tag": "Conversation / nature"
      },
      {
        "id": "t2-040",
        "prompt": "Quelle sociologue relie le tabou français de l'argent à l'héritage catholique, aristocratique et révolutionnaire ?",
        "choices": [
          "Jeanne Lazarus",
          "Monique Pinçon-Charlot",
          "Dominique Schnapper",
          "Nathalie Heinich"
        ],
        "correctIndex": 0,
        "explanation": "Jeanne Lazarus (Sciences Po) analyse ces trois racines du tabou de l'argent.",
        "difficulty": "Intermédiaire",
        "tag": "Tabou de l'argent"
      },
      {
        "id": "t2-041",
        "prompt": "Demander à quelqu'un « combien gagnes-tu ? » est, en France :",
        "choices": [
          "un compliment déguisé",
          "une question banale",
          "considéré comme un manque d'éducation",
          "une marque d'intérêt sincère"
        ],
        "correctIndex": 2,
        "explanation": "L'argent étant tabou, interroger sur les revenus passe pour un manque d'éducation.",
        "difficulty": "Fondamental",
        "tag": "Tabou de l'argent"
      },
      {
        "id": "t2-042",
        "prompt": "Par contraste avec la France, les cultures protestantes anglo-saxonnes ont tendance à :",
        "choices": [
          "mépriser le travail",
          "interdire le commerce",
          "célébrer publiquement la réussite matérielle",
          "taire totalement la réussite"
        ],
        "correctIndex": 2,
        "explanation": "Là où la France tait l'argent, la tradition protestante valorise plus ouvertement la réussite matérielle.",
        "difficulty": "Intermédiaire",
        "tag": "Tabou de l'argent"
      },
      {
        "id": "t2-043",
        "prompt": "Dans la conversation française raffinée :",
        "choices": [
          "l'ironie fine est prisée, mais l'agressivité ouverte est proscrite",
          "la surenchère verbale est recherchée",
          "la contradiction systématique est appréciée",
          "l'agressivité ouverte est valorisée"
        ],
        "correctIndex": 0,
        "explanation": "L'ironie fine est valorisée ; l'agressivité frontale est bannie.",
        "difficulty": "Intermédiaire",
        "tag": "Ton & humour"
      },
      {
        "id": "t2-044",
        "prompt": "Pour signaler une réserve sans refuser ouvertement, on peut dire :",
        "choices": [
          "« c'est intéressant » ou « nous allons voir »",
          "« c'est non, définitivement »",
          "« n'y comptez pas »",
          "« je refuse catégoriquement »"
        ],
        "correctIndex": 0,
        "explanation": "Ces formules signalent une réserve polie sans formuler de refus explicite.",
        "difficulty": "Piège",
        "tag": "Art de dire non"
      },
      {
        "id": "t2-045",
        "prompt": "Le but ultime de la politesse conversationnelle française est :",
        "choices": [
          "d'avoir raison publiquement",
          "d'imposer son point de vue",
          "d'exposer clairement ses convictions",
          "de préserver la relation et le confort de l'interlocuteur"
        ],
        "correctIndex": 3,
        "explanation": "On privilégie l'harmonie de la relation sur la nécessité d'avoir raison ou d'exposer ses opinions.",
        "difficulty": "Intermédiaire",
        "tag": "Finalité de la politesse"
      }
    ]
  },
  {
    "id": "table",
    "title": "Table & Réceptions",
    "subtitle": "Couverts, vins, fromages & préséances",
    "description": "Placement, couverts, service du vin, art du fromage, remerciements… le repas, là où se révèle l’éducation.",
    "motif": "🍽",
    "questions": [
      {
        "id": "t3-001",
        "prompt": "Lors d'un dîner privé, l'invité d'honneur masculin est placé :",
        "choices": [
          "en bout de table",
          "à la gauche du maître de maison",
          "face à la maîtresse de maison",
          "à la droite de la maîtresse de maison"
        ],
        "correctIndex": 3,
        "explanation": "L'invité d'honneur masculin est à la droite de la maîtresse de maison ; l'invitée d'honneur féminine à la droite du maître.",
        "difficulty": "Fondamental",
        "tag": "Placement / préséances"
      },
      {
        "id": "t3-002",
        "prompt": "À un dîner privé réunissant un ministre français et un ambassadeur étranger en poste, qui prend la préséance à la droite de la maîtresse de maison ?",
        "choices": [
          "le ministre français, au nom des rangs de l'État",
          "l'ambassadeur étranger, par courtoisie diplomatique",
          "le plus âgé des deux",
          "aucun : on les place en bout de table"
        ],
        "correctIndex": 1,
        "explanation": "La courtoisie internationale accorde la préséance au représentant d'une puissance souveraine étrangère.",
        "difficulty": "Piège",
        "tag": "Préséance diplomatique"
      },
      {
        "id": "t3-003",
        "prompt": "À table, on sépare traditionnellement les couples, sauf :",
        "choices": [
          "les couples mariés depuis plus de dix ans",
          "jamais : on ne sépare aucun couple",
          "les fiancés et jeunes mariés de moins d'un an",
          "les couples qui le demandent"
        ],
        "correctIndex": 2,
        "explanation": "On alterne hommes et femmes et on sépare les couples, hormis les unions de moins d'un an.",
        "difficulty": "Intermédiaire",
        "tag": "Placement / couples"
      },
      {
        "id": "t3-004",
        "prompt": "En France, lorsqu'on ne s'en sert pas, la main gauche doit :",
        "choices": [
          "rester posée sur les genoux, comme en Angleterre",
          "être glissée dans la poche",
          "tenir en permanence le verre",
          "rester visible, posée sur la table (poignet ou avant-bras)"
        ],
        "correctIndex": 3,
        "explanation": "En France les deux mains restent visibles ; poser la main sur les genoux est la règle anglaise.",
        "difficulty": "Piège",
        "tag": "Posture à table"
      },
      {
        "id": "t3-005",
        "prompt": "À table, les coudes :",
        "choices": [
          "doivent toujours toucher la table",
          "se posent uniquement au dessert",
          "ne se posent jamais sur la table, contrairement aux poignets et avant-bras",
          "peuvent reposer sur la table pendant qu'on mange"
        ],
        "correctIndex": 2,
        "explanation": "On ne met pas les coudes sur la table en mangeant ; seuls poignets et avant-bras peuvent y reposer.",
        "difficulty": "Intermédiaire",
        "tag": "Posture à table"
      },
      {
        "id": "t3-006",
        "prompt": "Comment mange-t-on la salade verte à un dîner formel français ?",
        "choices": [
          "on la pousse avec un morceau de pain",
          "on la coupe au couteau",
          "on la mange avec les doigts",
          "on plie les feuilles avec la fourchette, sans couteau"
        ],
        "correctIndex": 3,
        "explanation": "On ne coupe jamais la salade au couteau ; on plie la feuille avec la fourchette.",
        "difficulty": "Piège",
        "tag": "Couverts / salade"
      },
      {
        "id": "t3-007",
        "prompt": "Pourquoi l'étiquette interdit-elle historiquement de couper la salade au couteau ?",
        "choices": [
          "parce que le vinaigre oxydait les anciennes lames en acier non inoxydable et donnait un goût métallique",
          "pour des raisons religieuses",
          "parce que c'est trop bruyant",
          "pour éviter de tacher la nappe"
        ],
        "correctIndex": 0,
        "explanation": "La vinaigrette attaquait l'acier non inoxydable des couteaux d'antan, altérant le goût et ternissant l'argenterie.",
        "difficulty": "Piège",
        "tag": "Couverts / salade"
      },
      {
        "id": "t3-008",
        "prompt": "Pour signaler au service que vous avez terminé votre plat, vous disposez vos couverts :",
        "choices": [
          "posés sur le rebord du verre",
          "croisés au centre de l'assiette",
          "parallèles, posés ensemble dans l'assiette",
          "directement sur la nappe"
        ],
        "correctIndex": 2,
        "explanation": "Couverts parallèles dans l'assiette = « terminé » ; couverts croisés = « pause ».",
        "difficulty": "Intermédiaire",
        "tag": "Couverts / position"
      },
      {
        "id": "t3-009",
        "prompt": "Parmi ces mets, lequel se mange en principe sans couteau ?",
        "choices": [
          "le gigot",
          "le fromage à pâte dure",
          "la viande rouge",
          "l'omelette"
        ],
        "correctIndex": 3,
        "explanation": "Le couteau ne sert qu'à la viande et au fromage ; pas pour l'omelette, les pâtes, la salade ou le foie gras.",
        "difficulty": "Intermédiaire",
        "tag": "Couverts / usage"
      },
      {
        "id": "t3-010",
        "prompt": "Spécificité française, les fourchettes sont posées sur la table :",
        "choices": [
          "dents tournées vers la nappe, pour montrer les armoiries gravées au dos",
          "à droite de l'assiette",
          "dents tournées vers le haut, comme en Angleterre",
          "à la verticale dans le verre"
        ],
        "correctIndex": 0,
        "explanation": "En France les dents pointent vers la nappe (armoiries au dos), à l'inverse de l'usage anglais.",
        "difficulty": "Piège",
        "tag": "Couverts / fourchette"
      },
      {
        "id": "t3-011",
        "prompt": "Pour refuser poliment d'être resservi en vin, il faut :",
        "choices": [
          "le couvrir avec sa serviette",
          "laisser le verre tel quel ou poser brièvement la main au-dessus en remerciant",
          "retourner son verre",
          "le poser par terre"
        ],
        "correctIndex": 1,
        "explanation": "On ne retourne jamais son verre ; on le laisse en place ou on le couvre d'un geste discret de la main.",
        "difficulty": "Piège",
        "tag": "Vin / refus"
      },
      {
        "id": "t3-012",
        "prompt": "Un verre à vin se tient :",
        "choices": [
          "à deux mains",
          "par le pied (la jambe)",
          "par le calice, à pleine main",
          "par le bord supérieur"
        ],
        "correctIndex": 1,
        "explanation": "On tient le verre par le pied pour ne pas réchauffer le vin ni laisser de traces sur le calice.",
        "difficulty": "Intermédiaire",
        "tag": "Vin / tenue du verre"
      },
      {
        "id": "t3-013",
        "prompt": "Lors d'un dîner, qui goûte le vin pour vérifier l'absence de défaut avant le service des convives ?",
        "choices": [
          "chacun pour son propre verre",
          "l'invité d'honneur",
          "l'hôte (ou la personne qui a commandé)",
          "le plus jeune convive"
        ],
        "correctIndex": 2,
        "explanation": "L'hôte goûte et approuve ; les dames sont servies en premier, celui qui a goûté en dernier.",
        "difficulty": "Intermédiaire",
        "tag": "Vin / dégustation"
      },
      {
        "id": "t3-014",
        "prompt": "On remplit un verre à vin :",
        "choices": [
          "à moitié, systématiquement",
          "à ras bord",
          "aux deux tiers au maximum, pour laisser les arômes se déployer",
          "au quart seulement"
        ],
        "correctIndex": 2,
        "explanation": "Un verre rempli aux deux tiers au plus permet au vin de s'aérer et aux arômes de s'exprimer.",
        "difficulty": "Intermédiaire",
        "tag": "Vin / service"
      },
      {
        "id": "t3-015",
        "prompt": "Devant un brie déjà entamé en pointe, vous coupez :",
        "choices": [
          "une tranche dans la longueur, pour avoir cœur et croûte",
          "la pointe (le « nez »), la meilleure partie",
          "uniquement le cœur à la cuillère",
          "un morceau au hasard"
        ],
        "correctIndex": 0,
        "explanation": "Couper le « nez » revient à s'approprier le meilleur ; on coupe pour que chacun ait sa part de cœur et de croûte.",
        "difficulty": "Piège",
        "tag": "Fromage / nez"
      },
      {
        "id": "t3-016",
        "prompt": "Un fromage à pâte persillée (roquefort, bleu) se découpe :",
        "choices": [
          "en raclant uniquement la surface",
          "en gros cubes irréguliers",
          "en éventail ou en triangles depuis la pointe, pour répartir équitablement le bleu",
          "en retirant tout le persillage central"
        ],
        "correctIndex": 2,
        "explanation": "Le persillage étant concentré au cœur, la coupe en éventail répartit les saveurs fortes entre les convives.",
        "difficulty": "Intermédiaire",
        "tag": "Fromage / bleu"
      },
      {
        "id": "t3-017",
        "prompt": "Lors du service du plateau de fromages, se resservir une seconde fois est :",
        "choices": [
          "jugé impoli, car cela suggère un repas principal trop peu copieux",
          "obligatoire",
          "recommandé pour honorer l'hôte",
          "toléré uniquement pour le comté"
        ],
        "correctIndex": 0,
        "explanation": "Le plateau ne passe qu'une fois ; le fromage est une dégustation et l'on ne se ressert pas.",
        "difficulty": "Intermédiaire",
        "tag": "Fromage / se resservir"
      },
      {
        "id": "t3-018",
        "prompt": "On présente classiquement un plateau composé d'un nombre :",
        "choices": [
          "impair de fromages (3, 5, 7)",
          "d'au moins dix fromages",
          "pair de fromages (2, 4, 6)",
          "indifférent"
        ],
        "correctIndex": 0,
        "explanation": "La tradition veut un nombre impair de fromages, dégustés du plus doux au plus fort.",
        "difficulty": "Intermédiaire",
        "tag": "Fromage / présentation"
      },
      {
        "id": "t3-019",
        "prompt": "Le pain, à table, se place :",
        "choices": [
          "sur le rebord du verre",
          "dans l'assiette principale",
          "directement sur la nappe (ou sur l'assiette à pain, en haut à gauche)",
          "empilé au centre de la table"
        ],
        "correctIndex": 2,
        "explanation": "Le pain se pose sur la nappe ou sur la petite assiette à pain à gauche, jamais dans l'assiette principale.",
        "difficulty": "Intermédiaire",
        "tag": "Pain / placement"
      },
      {
        "id": "t3-020",
        "prompt": "À table, le pain :",
        "choices": [
          "s'arrache avec les dents",
          "se rompt à la main, en petits morceaux, au fur et à mesure",
          "se coupe au couteau en tranches régulières",
          "se tartine entièrement à l'avance"
        ],
        "correctIndex": 1,
        "explanation": "On rompt le pain à la main morceau par morceau ; le couper à son couteau de table est proscrit.",
        "difficulty": "Fondamental",
        "tag": "Pain / rompre"
      },
      {
        "id": "t3-021",
        "prompt": "Arriver à un dîner avec un grand bouquet de fleurs coupées à arranger le soir même est :",
        "choices": [
          "maladroit : cela occupe l'hôtesse au mauvais moment ; mieux vaut faire livrer les fleurs avant ou après",
          "toujours le cadeau idéal",
          "obligatoire pour un premier dîner",
          "acceptable seulement avec des roses rouges"
        ],
        "correctIndex": 0,
        "explanation": "Un bouquet à mettre en vase mobilise la maîtresse de maison ; l'usage raffiné fait livrer les fleurs avant/après.",
        "difficulty": "Piège",
        "tag": "Cadeau d'invité / fleurs"
      },
      {
        "id": "t3-022",
        "prompt": "Parmi ces fleurs, laquelle est à éviter absolument comme cadeau, par sa connotation funéraire ?",
        "choices": [
          "les pivoines",
          "les tulipes",
          "les renoncules",
          "les chrysanthèmes"
        ],
        "correctIndex": 3,
        "explanation": "Les chrysanthèmes évoquent le deuil (Toussaint) ; les œillets et les roses rouges sont également déconseillés.",
        "difficulty": "Intermédiaire",
        "tag": "Cadeau d'invité / fleurs"
      },
      {
        "id": "t3-023",
        "prompt": "Offrir une bouteille de vin à ouvrir le soir même chez vos hôtes est délicat car :",
        "choices": [
          "cela porte malheur",
          "cela bouscule les accords mets-vins méticuleusement préparés par l'hôte",
          "c'est interdit par la loi",
          "le vin est un cadeau trop modeste"
        ],
        "correctIndex": 1,
        "explanation": "L'hôte se sentirait obligé d'ouvrir la bouteille, perturbant l'harmonie prévue entre plats et vins.",
        "difficulty": "Intermédiaire",
        "tag": "Cadeau d'invité / vin"
      },
      {
        "id": "t3-024",
        "prompt": "La « lettre de château » (remerciement après réception ou séjour) s'envoie :",
        "choices": [
          "le jour même, par SMS",
          "dans les jours qui suivent (idéalement sous trois semaines), manuscrite",
          "avant la réception",
          "un an plus tard"
        ],
        "correctIndex": 1,
        "explanation": "Lettre manuscrite à la maîtresse de maison, personnelle et sincère, envoyée de trois jours à trois semaines après.",
        "difficulty": "Intermédiaire",
        "tag": "Remerciements / lettre de château"
      },
      {
        "id": "t3-025",
        "prompt": "Selon la tradition épistolaire de la bonne société, une lettre ne commence jamais par :",
        "choices": [
          "la date du jour",
          "le mot « Je »",
          "une formule de politesse",
          "« Chère Madame »"
        ],
        "correctIndex": 1,
        "explanation": "L'usage proscrit de débuter une lettre par « Je », jugé trop centré sur soi.",
        "difficulty": "Piège",
        "tag": "Remerciements / lettre"
      },
      {
        "id": "t3-026",
        "prompt": "Qui porte le premier toast lors d'un dîner ?",
        "choices": [
          "le dernier arrivé",
          "le maître ou la maîtresse de maison",
          "l'invité d'honneur",
          "l'invité le plus âgé"
        ],
        "correctIndex": 1,
        "explanation": "L'hôte porte le premier toast (bienvenue ou hommage à un invité) ; l'invité d'honneur peut répondre.",
        "difficulty": "Fondamental",
        "tag": "Toasts"
      },
      {
        "id": "t3-027",
        "prompt": "La règle classique de conversation de table recommande de :",
        "choices": [
          "s'adresser à toute la table à voix haute",
          "parler avec un seul voisin durant tout le repas",
          "ne parler qu'à l'invité d'honneur",
          "converser d'abord avec son voisin de droite, puis se tourner vers celui de gauche au plat suivant"
        ],
        "correctIndex": 3,
        "explanation": "Cette « rotation », souvent lancée par la maîtresse de maison, évite qu'un convive ne soit délaissé.",
        "difficulty": "Intermédiaire",
        "tag": "Conversation de table"
      },
      {
        "id": "t3-028",
        "prompt": "Lors d'un dîner formel, lequel de ces objets peut être posé sur la table ?",
        "choices": [
          "aucun de ces objets : ni téléphone, ni clés, ni cigarettes",
          "le paquet de cigarettes",
          "le téléphone, face contre table",
          "les clés de voiture"
        ],
        "correctIndex": 0,
        "explanation": "Aucun objet personnel ne se pose sur la table (ni téléphone, ni clés, ni cigarettes).",
        "difficulty": "Intermédiaire",
        "tag": "Interdits à table"
      },
      {
        "id": "t3-029",
        "prompt": "La serviette de table se place :",
        "choices": [
          "en bavette autour du cou",
          "sur le dossier de la chaise",
          "à droite du verre, pliée avec soin",
          "sur les genoux, et se pose à gauche de l'assiette en fin de repas"
        ],
        "correctIndex": 3,
        "explanation": "La serviette va sur les genoux (jamais en bavette) et se dépose à gauche, sans la replier soigneusement.",
        "difficulty": "Intermédiaire",
        "tag": "Serviette"
      },
      {
        "id": "t3-030",
        "prompt": "À un dîner où une très haute personnalité est présente, l'usage protocolaire veut que :",
        "choices": [
          "l'on ne prenne pas congé avant cette personnalité",
          "l'on parte dès qu'on est fatigué",
          "l'invité d'honneur parte le premier",
          "l'on parte tous en même temps"
        ],
        "correctIndex": 0,
        "explanation": "On ne quitte pas la table avant la personne du plus haut rang.",
        "difficulty": "Intermédiaire",
        "tag": "Départ"
      },
      {
        "id": "t3-031",
        "prompt": "La « présidence à la française » d'une table place les hôtes :",
        "choices": [
          "au milieu de la table, face à face",
          "aux deux extrémités de la table",
          "dos à dos",
          "côte à côte en bout de table"
        ],
        "correctIndex": 0,
        "explanation": "Recommandée, elle place les hôtes au centre face à face ; « à l'anglaise » les place aux extrémités.",
        "difficulty": "Intermédiaire",
        "tag": "Placement / table"
      },
      {
        "id": "t3-032",
        "prompt": "Dans quel ordre sert-on classiquement les vins au cours d'un repas ?",
        "choices": [
          "uniquement par millésime décroissant",
          "des plus légers aux plus corsés, blancs avant rouges, secs avant liquoreux",
          "les liquoreux en tout premier",
          "des plus corsés aux plus légers"
        ],
        "correctIndex": 1,
        "explanation": "On va du léger au corsé, du blanc au rouge, du jeune au vieux, du sec au liquoreux (le champagne brut faisant exception).",
        "difficulty": "Intermédiaire",
        "tag": "Vin / ordre de service"
      },
      {
        "id": "t3-033",
        "prompt": "Un fromage en meule à pâte pressée (comté, beaufort) se découpe :",
        "choices": [
          "en gros cubes irréguliers",
          "en coupant d'abord la pointe centrale",
          "à la petite cuillère",
          "en tranches parallèles depuis le cœur vers le talon"
        ],
        "correctIndex": 3,
        "explanation": "La coupe en tranches depuis le cœur évite que les derniers convives n'héritent que du talon de croûte.",
        "difficulty": "Intermédiaire",
        "tag": "Fromage / découpe meule"
      },
      {
        "id": "t3-034",
        "prompt": "La « lettre de château » correspond, dans le monde anglo-saxon, à :",
        "choices": [
          "le « thank you note » professionnel",
          "le « memo » interne",
          "le « bread and butter letter »",
          "la « cover letter »"
        ],
        "correctIndex": 2,
        "explanation": "C'est l'équivalent du « bread and butter letter », mot de remerciement après une hospitalité.",
        "difficulty": "Intermédiaire",
        "tag": "Remerciements / lettre de château"
      },
      {
        "id": "t3-035",
        "prompt": "Les préséances d'un repas officiel républicain sont fixées par :",
        "choices": [
          "la Constitution de 1958",
          "le Code civil",
          "le décret n°89-655 du 13 septembre 1989",
          "un simple usage non écrit"
        ],
        "correctIndex": 2,
        "explanation": "Ce décret fixe l'ordre des préséances ; une personne est considérée selon sa plus haute fonction.",
        "difficulty": "Intermédiaire",
        "tag": "Préséances officielles"
      },
      {
        "id": "t3-036",
        "prompt": "On utilise les couverts d'un repas à plusieurs services :",
        "choices": [
          "de l'extérieur vers l'intérieur, au fil des plats",
          "au hasard",
          "en commençant par les couverts du haut de l'assiette",
          "de l'intérieur vers l'extérieur"
        ],
        "correctIndex": 0,
        "explanation": "On part des couverts les plus éloignés de l'assiette, sans jamais en disposer plus de trois de chaque côté.",
        "difficulty": "Intermédiaire",
        "tag": "Couverts"
      },
      {
        "id": "t3-037",
        "prompt": "Pour signaler une simple pause pendant le repas, on dispose ses couverts :",
        "choices": [
          "parallèles dans l'assiette",
          "croisés dans l'assiette",
          "debout contre le verre",
          "posés sur la nappe"
        ],
        "correctIndex": 1,
        "explanation": "Couverts croisés = « pause » ; couverts parallèles = « terminé ».",
        "difficulty": "Intermédiaire",
        "tag": "Couverts / position"
      },
      {
        "id": "t3-038",
        "prompt": "Un fromage rond et plat (camembert, reblochon) se découpe :",
        "choices": [
          "en coupant d'abord la pointe centrale",
          "à la petite cuillère",
          "en tranches horizontales",
          "en parts triangulaires égales, du centre vers la croûte"
        ],
        "correctIndex": 3,
        "explanation": "La coupe en rayons garantit à chacun une part égale de cœur et de croûte.",
        "difficulty": "Intermédiaire",
        "tag": "Fromage / découpe"
      },
      {
        "id": "t3-039",
        "prompt": "Avant de couper une bûche de chèvre (Sainte-Maure), il faut :",
        "choices": [
          "la peler entièrement",
          "la chauffer",
          "retirer délicatement la paille centrale",
          "retirer toute la croûte"
        ],
        "correctIndex": 2,
        "explanation": "On ôte la paille de céréale pour ne pas écraser la pâte fragile lors de la découpe.",
        "difficulty": "Piège",
        "tag": "Fromage / découpe"
      },
      {
        "id": "t3-040",
        "prompt": "Un fromage de forme carrée (Maroilles, Pont-l'Évêque) se découpe :",
        "choices": [
          "en diagonale croisée (quatre triangles), puis en parts égales",
          "en retirant uniquement le cœur",
          "en une seule tranche épaisse",
          "en cercles concentriques"
        ],
        "correctIndex": 0,
        "explanation": "La diagonale croisée assure une répartition juste de la croûte et du cœur.",
        "difficulty": "Intermédiaire",
        "tag": "Fromage / découpe"
      },
      {
        "id": "t3-041",
        "prompt": "Saucer son assiette est toléré uniquement :",
        "choices": [
          "jamais, en aucun cas",
          "avec la cuillère",
          "avec un morceau de pain tenu à la main",
          "avec un morceau de pain piqué à la fourchette"
        ],
        "correctIndex": 3,
        "explanation": "Saucer au pain tenu à la main est proscrit ; seul le pain piqué à la fourchette est admis.",
        "difficulty": "Piège",
        "tag": "Interdits à table"
      },
      {
        "id": "t3-042",
        "prompt": "Lors du service du vin, on sert d'abord :",
        "choices": [
          "les dames",
          "le maître de maison",
          "celui qui a goûté le vin",
          "l'invité le plus jeune"
        ],
        "correctIndex": 0,
        "explanation": "Les dames sont servies en premier ; celui qui a goûté le vin est resservi en dernier.",
        "difficulty": "Intermédiaire",
        "tag": "Vin / service"
      },
      {
        "id": "t3-043",
        "prompt": "Pourquoi privilégie-t-on souvent une table ronde ou ovale pour un dîner ?",
        "choices": [
          "parce qu'elle évite les conflits de préséance (pas de bouts de table)",
          "parce qu'elle est moins coûteuse",
          "pour gagner de la place",
          "parce qu'elle est plus moderne"
        ],
        "correctIndex": 0,
        "explanation": "Sans extrémités, la table ronde neutralise les questions de rang ; on évite au-delà de 14 à 16 convives.",
        "difficulty": "Intermédiaire",
        "tag": "Placement / table"
      },
      {
        "id": "t3-044",
        "prompt": "Pour des condoléances ou une lettre de château, une carte de visite :",
        "choices": [
          "est préférable à une lettre",
          "est strictement interdite",
          "suffit toujours",
          "ne remplace jamais une vraie lettre"
        ],
        "correctIndex": 3,
        "explanation": "Certaines circonstances (condoléances, lettre de château) imposent une véritable lettre, pas une simple carte.",
        "difficulty": "Piège",
        "tag": "Remerciements"
      },
      {
        "id": "t3-045",
        "prompt": "À un dîner privé, l'invitée d'honneur féminine est placée :",
        "choices": [
          "à la gauche de la maîtresse de maison",
          "à la droite du maître de maison",
          "à côté de l'invité d'honneur masculin",
          "en bout de table"
        ],
        "correctIndex": 1,
        "explanation": "Symétriquement à l'invité d'honneur masculin, placé à la droite de la maîtresse de maison.",
        "difficulty": "Intermédiaire",
        "tag": "Placement / préséances"
      },
      {
        "id": "t3-046",
        "prompt": "Dans quel ordre déguste-t-on les fromages d'un plateau ?",
        "choices": [
          "en commençant par les bleus",
          "du plus fort au plus doux",
          "sans ordre particulier",
          "du plus doux au plus fort"
        ],
        "correctIndex": 3,
        "explanation": "On va du plus doux au plus fort pour ne pas saturer le palais d'emblée.",
        "difficulty": "Intermédiaire",
        "tag": "Fromage / dégustation"
      },
      {
        "id": "t3-047",
        "prompt": "Dans l'ordre de service des vins (secs avant liquoreux), quelle est l'exception classique ?",
        "choices": [
          "le vin jaune",
          "le vin rosé",
          "le champagne brut",
          "le vin rouge"
        ],
        "correctIndex": 2,
        "explanation": "Le champagne brut fait figure d'exception dans la progression du sec vers le liquoreux.",
        "difficulty": "Piège",
        "tag": "Vin / ordre de service"
      }
    ]
  },
  {
    "id": "elegance",
    "title": "Élégance & Dress Code",
    "subtitle": "Tenue, posture & luxe discret",
    "description": "White tie, black tie, luxe discret, posture, bise et galanterie… l’art de paraître sans ostentation.",
    "motif": "🎩",
    "questions": [
      {
        "id": "t4-001",
        "prompt": "La discrétion du luxe à la française privilégie :",
        "choices": [
          "les couleurs criardes et le clinquant",
          "l'accumulation de signes de richesse",
          "les logos visibles de grandes marques",
          "des pièces de grande qualité mais discrètes, sans ostentation"
        ],
        "correctIndex": 3,
        "explanation": "« Le luxe, ce n'est pas le contraire de la pauvreté mais celui de la vulgarité » (attribué à Coco Chanel).",
        "difficulty": "Fondamental",
        "tag": "Luxe discret"
      },
      {
        "id": "t4-002",
        "prompt": "Quelle est la différence entre le White Tie et le Black Tie ?",
        "choices": [
          "aucune : ce sont des synonymes",
          "White Tie = smoking ; Black Tie = queue-de-pie",
          "White Tie = tenue de ville ; Black Tie = smoking",
          "White Tie = queue-de-pie/frac et nœud papillon blanc ; Black Tie = smoking et nœud papillon noir"
        ],
        "correctIndex": 3,
        "explanation": "White Tie (le plus formel) impose frac et nœud blanc ; Black Tie impose le smoking et le nœud noir.",
        "difficulty": "Intermédiaire",
        "tag": "Dress code"
      },
      {
        "id": "t4-003",
        "prompt": "Avec un smoking (Black Tie), l'erreur à ne jamais commettre est :",
        "choices": [
          "porter un nœud papillon noir",
          "porter des chaussures vernies",
          "porter une cravate longue noire au lieu du nœud papillon (évoque le deuil)",
          "porter une ceinture de smoking (cummerbund)"
        ],
        "correctIndex": 2,
        "explanation": "La cravate longue noire évoque le deuil ; le smoking impose le nœud papillon noir.",
        "difficulty": "Piège",
        "tag": "Dress code / smoking"
      },
      {
        "id": "t4-004",
        "prompt": "Sur une invitation, la mention « Tenue de Ville » impose :",
        "choices": [
          "une tenue de cocktail décontractée",
          "un costume sombre (anthracite ou bleu marine), chemise claire et cravate sobre",
          "un smoking complet avec nœud papillon",
          "un jean haut de gamme avec veste de sport"
        ],
        "correctIndex": 1,
        "explanation": "« Tenue de Ville » = costume d'affaires sombre avec cravate, pour les événements formels avant la nuit.",
        "difficulty": "Intermédiaire",
        "tag": "Dress code / tenue de ville"
      },
      {
        "id": "t4-005",
        "prompt": "En cas de doute sur le niveau de formalité d'un événement, il vaut mieux être :",
        "choices": [
          "légèrement trop habillé (overdressed) que pas assez",
          "habillé exactement comme l'hôte",
          "vêtu de couleurs vives pour se démarquer",
          "délibérément sous-habillé pour rester décontracté"
        ],
        "correctIndex": 0,
        "explanation": "Être légèrement mieux habillé que requis est toujours préférable à une tenue insuffisante.",
        "difficulty": "Intermédiaire",
        "tag": "Dress code / doute"
      },
      {
        "id": "t4-006",
        "prompt": "La pochette de costume doit-elle être assortie exactement à la cravate, dans le même tissu ?",
        "choices": [
          "cela n'a aucune importance",
          "non : elle s'harmonise mais ne doit jamais être identique au tissu de la cravate",
          "oui, toujours, dans le même tissu",
          "oui, mais seulement le soir"
        ],
        "correctIndex": 1,
        "explanation": "Assortir pochette et cravate dans le même tissu est jugé d'un goût douteux ; l'harmonie doit rester indirecte.",
        "difficulty": "Piège",
        "tag": "Accessoires / pochette"
      },
      {
        "id": "t4-007",
        "prompt": "La règle attribuée à Coco Chanel sur les accessoires recommande, avant de sortir :",
        "choices": [
          "d'en retirer un devant le miroir, pour éviter la surcharge",
          "de ne porter aucun bijou",
          "d'ajouter un accessoire pour se démarquer",
          "d'assortir tous ses bijoux dans un même ensemble"
        ],
        "correctIndex": 0,
        "explanation": "La règle du « -1 » : un bijou fort plutôt que l'accumulation.",
        "difficulty": "Fondamental",
        "tag": "Accessoires / règle Chanel"
      },
      {
        "id": "t4-008",
        "prompt": "Croiser les bras pendant une conversation est perçu en France comme :",
        "choices": [
          "une posture de fermeture, à éviter",
          "une marque de réflexion appréciée",
          "un signe de respect",
          "une posture ouverte et engageante"
        ],
        "correctIndex": 0,
        "explanation": "On se tient droit et l'on évite de croiser les bras, signe de fermeture ou de défense.",
        "difficulty": "Intermédiaire",
        "tag": "Posture"
      },
      {
        "id": "t4-009",
        "prompt": "En trinquant en France, il convient de :",
        "choices": [
          "regarder son verre",
          "regarder la personne dans les yeux",
          "fermer les yeux",
          "regarder ailleurs par modestie"
        ],
        "correctIndex": 1,
        "explanation": "Le regard direct est signe de sincérité ; lors du toast, on regarde dans les yeux la personne avec qui l'on trinque.",
        "difficulty": "Fondamental",
        "tag": "Contact visuel"
      },
      {
        "id": "t4-010",
        "prompt": "Dans le doute, en contexte professionnel (surtout international), le geste le plus sûr est :",
        "choices": [
          "une accolade",
          "une poignée de main franche",
          "faire deux bises d'emblée",
          "un signe de la main à distance"
        ],
        "correctIndex": 1,
        "explanation": "La poignée de main, ni molle ni broyeuse, n'est jamais une faute ; la bise relève du registre amical.",
        "difficulty": "Intermédiaire",
        "tag": "Bise / poignée de main"
      },
      {
        "id": "t4-011",
        "prompt": "Le nombre de bises en France :",
        "choices": [
          "est toujours de deux partout",
          "est toujours de quatre à Paris",
          "varie selon les régions (une, deux, trois ou quatre)",
          "est fixé par la loi à trois"
        ],
        "correctIndex": 2,
        "explanation": "Deux dans la majeure partie du pays dont Paris, mais une dans le Finistère, trois ou quatre ailleurs.",
        "difficulty": "Intermédiaire",
        "tag": "Bise / régions"
      },
      {
        "id": "t4-012",
        "prompt": "Un parfum puissant, perceptible à plusieurs mètres, est-il un signe d'élégance à un dîner ?",
        "choices": [
          "cela dépend de la saison",
          "oui, à condition que ce soit une grande marque",
          "non : le sillage doit rester discret, surtout à table",
          "oui, cela marque sa présence"
        ],
        "correctIndex": 2,
        "explanation": "Un parfum doit se deviner de près ; un sillage envahissant gêne notamment la dégustation des mets et des vins.",
        "difficulty": "Intermédiaire",
        "tag": "Parfum"
      },
      {
        "id": "t4-013",
        "prompt": "Pour désigner quelqu'un ou quelque chose élégamment, on :",
        "choices": [
          "pointe du doigt",
          "indique d'un geste ouvert de la main",
          "claque des doigts",
          "désigne du menton"
        ],
        "correctIndex": 1,
        "explanation": "On ne pointe pas du doigt ; on indique d'un geste ouvert de la main.",
        "difficulty": "Intermédiaire",
        "tag": "Langage corporel"
      },
      {
        "id": "t4-014",
        "prompt": "À l'Automobile Club de France, quel accessoire est obligatoire pour les hommes ?",
        "choices": [
          "la canne",
          "les gants",
          "la cravate",
          "le chapeau"
        ],
        "correctIndex": 2,
        "explanation": "L'Automobile Club de France impose le port de la cravate.",
        "difficulty": "Intermédiaire",
        "tag": "Codes des cercles"
      },
      {
        "id": "t4-015",
        "prompt": "Le premier traité de savoir-vivre de l'époque moderne (1530) a été écrit par :",
        "choices": [
          "Nadine de Rothschild",
          "Baldassare Castiglione",
          "Jean-Baptiste de La Salle",
          "Érasme de Rotterdam"
        ],
        "correctIndex": 3,
        "explanation": "« De civilitate morum puerilium » d'Érasme (1530) fonde le savoir-vivre occidental moderne.",
        "difficulty": "Intermédiaire",
        "tag": "Héritage / civilité"
      },
      {
        "id": "t4-016",
        "prompt": "En escortant une femme dans un escalier monumental, l'homme doit, selon l'usage classique :",
        "choices": [
          "monter côte à côte, bras dessus bras dessous",
          "rester en bas et l'attendre",
          "la précéder à la montée et se placer devant elle à la descente",
          "la laisser monter devant et la suivre"
        ],
        "correctIndex": 2,
        "explanation": "L'homme précède à la montée (intimité) et passe devant à la descente pour parer une éventuelle chute.",
        "difficulty": "Piège",
        "tag": "Galanterie / escalier"
      },
      {
        "id": "t4-017",
        "prompt": "La distance de courtoisie à respecter entre interlocuteurs dans un cadre formel est d'environ :",
        "choices": [
          "dix centimètres",
          "un mètre",
          "trois mètres",
          "il n'y a aucune règle"
        ],
        "correctIndex": 1,
        "explanation": "On garde environ un mètre, avec un contact visuel franc mais non agressif et sans gestes brusques.",
        "difficulty": "Intermédiaire",
        "tag": "Distance sociale"
      },
      {
        "id": "t4-018",
        "prompt": "En tenue de White Tie, le pantalon se porte avec :",
        "choices": [
          "une ceinture de smoking (cummerbund)",
          "au choix, ceinture ou bretelles",
          "des bretelles (jamais de ceinture)",
          "une ceinture en cuir noir"
        ],
        "correctIndex": 2,
        "explanation": "Le pantalon de frac se porte avec des bretelles, jamais avec une ceinture.",
        "difficulty": "Piège",
        "tag": "Dress code / White Tie"
      },
      {
        "id": "t4-019",
        "prompt": "La mention « Black Tie Optional » signifie :",
        "choices": [
          "la tenue est totalement libre",
          "le smoking est interdit",
          "le smoking est encouragé, mais un costume sombre est toléré",
          "seul le White Tie est admis"
        ],
        "correctIndex": 2,
        "explanation": "« Optional » laisse le choix entre smoking (préféré) et costume sombre.",
        "difficulty": "Intermédiaire",
        "tag": "Dress code / Black Tie Optional"
      },
      {
        "id": "t4-020",
        "prompt": "Le « Creative Black Tie » autorise :",
        "choices": [
          "l'absence de veste",
          "n'importe quelle fantaisie",
          "un seul élément signature personnel",
          "le port du jean"
        ],
        "correctIndex": 2,
        "explanation": "La fantaisie se limite à un unique élément personnel ; le reste suit les codes du smoking.",
        "difficulty": "Piège",
        "tag": "Dress code / Creative Black Tie"
      },
      {
        "id": "t4-021",
        "prompt": "Le jean, dans un contexte professionnel formel, est :",
        "choices": [
          "proscrit",
          "obligatoire en start-up",
          "toléré le vendredi",
          "recommandé s'il est de marque"
        ],
        "correctIndex": 0,
        "explanation": "Le jean reste exclu du registre professionnel formel.",
        "difficulty": "Fondamental",
        "tag": "Dress code"
      },
      {
        "id": "t4-022",
        "prompt": "Les boutons de manchettes accompagnent :",
        "choices": [
          "toutes les chemises",
          "les chemises à col cassé uniquement",
          "les polos habillés",
          "les chemises à poignets mousquetaires"
        ],
        "correctIndex": 3,
        "explanation": "Les poignets mousquetaires, de rigueur en cérémonie, appellent les boutons de manchettes.",
        "difficulty": "Intermédiaire",
        "tag": "Accessoires masculins"
      },
      {
        "id": "t4-023",
        "prompt": "En tenue de White Tie, une montre-bracelet visible est :",
        "choices": [
          "un signe d'élégance",
          "à éviter",
          "recommandée si elle est de luxe",
          "obligatoire"
        ],
        "correctIndex": 1,
        "explanation": "La montre-bracelet visible est déconseillée dans le registre le plus formel.",
        "difficulty": "Piège",
        "tag": "Accessoires masculins"
      },
      {
        "id": "t4-024",
        "prompt": "Le concept de « sprezzatura » (élégance sans effort apparent) est emprunté à :",
        "choices": [
          "Coco Chanel",
          "Castiglione (tradition italienne)",
          "Nadine de Rothschild",
          "Beau Brummell"
        ],
        "correctIndex": 1,
        "explanation": "La sprezzatura, concept de Castiglione, désigne le raffinement qui paraît naturel et sans effort.",
        "difficulty": "Intermédiaire",
        "tag": "Sprezzatura"
      },
      {
        "id": "t4-025",
        "prompt": "« Le luxe, ce n'est pas le contraire de la pauvreté mais celui de... » :",
        "choices": [
          "la richesse",
          "l'élégance",
          "la vulgarité",
          "la simplicité"
        ],
        "correctIndex": 2,
        "explanation": "La formule attribuée à Coco Chanel oppose le luxe à la vulgarité, non à la pauvreté.",
        "difficulty": "Intermédiaire",
        "tag": "Luxe discret"
      },
      {
        "id": "t4-026",
        "prompt": "Se curer les dents en public est une faute déjà signalée en 1530 par :",
        "choices": [
          "La Rochefoucauld",
          "Érasme",
          "Beau Brummell",
          "Louis XIV"
        ],
        "correctIndex": 1,
        "explanation": "Le traité d'Érasme (1530) proscrivait déjà ce geste, toujours valable aujourd'hui.",
        "difficulty": "Intermédiaire",
        "tag": "Langage corporel"
      },
      {
        "id": "t4-027",
        "prompt": "Appliquer un registre vestimentaire « Saint-Tropez » très décontracté à Deauville est :",
        "choices": [
          "parfaitement adapté",
          "une faute de registre : Deauville impose un chic feutré « marine »",
          "sans aucune importance",
          "recommandé l'été"
        ],
        "correctIndex": 1,
        "explanation": "Deauville relève d'un chic feutré (marine), distinct du registre estival décontracté de Saint-Tropez.",
        "difficulty": "Piège",
        "tag": "Codes des cercles"
      },
      {
        "id": "t4-028",
        "prompt": "Dans la tradition, une femme assise garde :",
        "choices": [
          "les genoux côte à côte, sans s'avachir",
          "les pieds sur un repose-pied",
          "une posture indifférente",
          "les jambes largement croisées"
        ],
        "correctIndex": 0,
        "explanation": "Le maintien droit, genoux joints, fait partie de la tenue corporelle classique.",
        "difficulty": "Intermédiaire",
        "tag": "Posture"
      },
      {
        "id": "t4-029",
        "prompt": "La distance sociale française se situe :",
        "choices": [
          "exactement identique à la distance anglo-saxonne",
          "sans aucune norme repérable",
          "plus rapprochée que dans les cultures latines",
          "entre les cultures nordiques (plus distantes) et méditerranéennes (plus rapprochées)"
        ],
        "correctIndex": 3,
        "explanation": "Elle est plus proche que dans les cultures nordiques/anglo-saxonnes, mais plus distante que dans les cultures latines.",
        "difficulty": "Intermédiaire",
        "tag": "Distance sociale"
      },
      {
        "id": "t4-030",
        "prompt": "Avec un smoking, quel accessoire constitue une faute de goût manifeste ?",
        "choices": [
          "une chemise blanche à col cassé",
          "un nœud papillon en soie noire",
          "des chaussures vernies",
          "une grosse montre de sport numérique"
        ],
        "correctIndex": 3,
        "explanation": "Une montre de sport volumineuse (comme un nœud pré-noué à élastique) trahit la méconnaissance des codes du smoking.",
        "difficulty": "Piège",
        "tag": "Dress code / smoking"
      },
      {
        "id": "t4-031",
        "prompt": "Pour une tenue formelle, on privilégie :",
        "choices": [
          "les couleurs criardes",
          "les matières naturelles (laine, soie, lin, coton d'Égypte)",
          "les coupes très ajustées",
          "les matières synthétiques brillantes"
        ],
        "correctIndex": 1,
        "explanation": "Les matières naturelles et les coupes classiques priment sur le synthétique brillant et le criard.",
        "difficulty": "Intermédiaire",
        "tag": "Matières & tenue"
      },
      {
        "id": "t4-032",
        "prompt": "Le White Tie est réservé :",
        "choices": [
          "aux dîners d'État, grands galas et soirées à l'opéra",
          "aux déjeuners d'affaires",
          "aux week-ends à la campagne",
          "aux réunions de travail"
        ],
        "correctIndex": 0,
        "explanation": "C'est la tenue la plus formelle, réservée aux grandes occasions de soirée.",
        "difficulty": "Intermédiaire",
        "tag": "Dress code / White Tie"
      },
      {
        "id": "t4-033",
        "prompt": "En White Tie, le nœud papillon est :",
        "choices": [
          "noir en satin",
          "de couleur libre",
          "remplacé par une cravate longue",
          "blanc en piqué"
        ],
        "correctIndex": 3,
        "explanation": "Le White Tie impose un nœud papillon blanc en piqué (le noir étant réservé au smoking).",
        "difficulty": "Intermédiaire",
        "tag": "Dress code / White Tie"
      },
      {
        "id": "t4-034",
        "prompt": "Pour une femme, la tenue correspondant au White Tie est :",
        "choices": [
          "une robe courte",
          "un tailleur-pantalon",
          "une robe longue, avec gants",
          "une tenue de cocktail"
        ],
        "correctIndex": 2,
        "explanation": "Au White Tie masculin répond, pour les femmes, la robe longue accompagnée de gants.",
        "difficulty": "Intermédiaire",
        "tag": "Dress code / White Tie"
      },
      {
        "id": "t4-035",
        "prompt": "Avec un smoking, la taille se marque par :",
        "choices": [
          "une ceinture de smoking (cummerbund) ou un gilet, jamais une ceinture à passants",
          "une simple ceinture de costume",
          "rien du tout",
          "une ceinture à passants en cuir"
        ],
        "correctIndex": 0,
        "explanation": "Le smoking se porte avec cummerbund ou gilet ; la ceinture à passants est exclue.",
        "difficulty": "Piège",
        "tag": "Dress code / Black Tie"
      },
      {
        "id": "t4-036",
        "prompt": "Le « Business Formal » se compose typiquement :",
        "choices": [
          "d'un jean et d'une veste de sport",
          "d'un costume sombre, chemise blanche ou bleu ciel, cravate sobre et chaussures de ville noires",
          "d'un blazer sans cravate et d'un chino",
          "d'un smoking et d'un nœud papillon"
        ],
        "correctIndex": 1,
        "explanation": "C'est la tenue d'affaires classique, un cran sous le smoking.",
        "difficulty": "Intermédiaire",
        "tag": "Dress code / Business Formal"
      },
      {
        "id": "t4-037",
        "prompt": "Quel ouvrage de savoir-vivre contemporain est dû à Nadine de Rothschild ?",
        "choices": [
          "« De civilitate morum puerilium »",
          "« Le Courtisan »",
          "« Le Bonheur de séduire, l'art de réussir »",
          "« Les Caractères »"
        ],
        "correctIndex": 2,
        "explanation": "Nadine de Rothschild y prolonge la tradition des manuels de savoir-vivre au XXIe siècle.",
        "difficulty": "Intermédiaire",
        "tag": "Héritage / civilité"
      },
      {
        "id": "t4-038",
        "prompt": "Après Érasme, la tradition française des traités de civilité se prolonge notamment avec :",
        "choices": [
          "Voltaire",
          "Jean-Baptiste de La Salle",
          "Molière",
          "Beau Brummell"
        ],
        "correctIndex": 1,
        "explanation": "Mathurin Cordier puis Jean-Baptiste de La Salle prolongent en France la tradition inaugurée par Érasme.",
        "difficulty": "Intermédiaire",
        "tag": "Héritage / civilité"
      },
      {
        "id": "t4-039",
        "prompt": "Pour Érasme, le savoir-vivre est le reflet :",
        "choices": [
          "du savoir-faire",
          "de la fortune",
          "du savoir-être",
          "du rang de naissance"
        ],
        "correctIndex": 2,
        "explanation": "Son traité de 1530 fonde l'idée que les manières expriment l'être profond (le savoir-être).",
        "difficulty": "Intermédiaire",
        "tag": "Héritage / civilité"
      },
      {
        "id": "t4-040",
        "prompt": "En public, se recoiffer ou se regarder ostensiblement dans un miroir est :",
        "choices": [
          "recommandé pour rester soigné",
          "obligatoire avant le repas",
          "sans aucune importance",
          "à éviter"
        ],
        "correctIndex": 3,
        "explanation": "On ne se recoiffe pas et on ne se contemple pas dans un miroir en public : règle de retenue gestuelle.",
        "difficulty": "Intermédiaire",
        "tag": "Langage corporel"
      },
      {
        "id": "t4-041",
        "prompt": "Dans un cadre formel, mâcher du chewing-gum est :",
        "choices": [
          "toléré discrètement",
          "recommandé pour l'haleine",
          "proscrit",
          "réservé au moment du dessert"
        ],
        "correctIndex": 2,
        "explanation": "Le chewing-gum est exclu de tout cadre formel.",
        "difficulty": "Fondamental",
        "tag": "Langage corporel"
      },
      {
        "id": "t4-042",
        "prompt": "Pour un dîner, une femme privilégie comme sac :",
        "choices": [
          "un grand sac de jour",
          "une pochette (petit sac de soirée)",
          "un sac à dos",
          "aucun sac"
        ],
        "correctIndex": 1,
        "explanation": "La pochette de soirée s'impose au dîner, plutôt qu'un grand sac de jour.",
        "difficulty": "Intermédiaire",
        "tag": "Accessoires féminins"
      },
      {
        "id": "t4-043",
        "prompt": "En France, fuir le regard de son interlocuteur est perçu comme :",
        "choices": [
          "une marque de modestie",
          "de la timidité valorisée",
          "suspect (le regard direct étant signe de sincérité)",
          "un signe de respect"
        ],
        "correctIndex": 2,
        "explanation": "Le regard direct signale l'honnêteté ; le fuir éveille la méfiance.",
        "difficulty": "Intermédiaire",
        "tag": "Contact visuel"
      },
      {
        "id": "t4-044",
        "prompt": "Aux courses hippiques de Longchamp ou Chantilly, la tenue impose notamment, pour les femmes :",
        "choices": [
          "des baskets",
          "le port du chapeau",
          "une tenue de sport",
          "un jean"
        ],
        "correctIndex": 1,
        "explanation": "Hippodromes prestigieux : tenue élégante, chapeaux pour les femmes et costume pour les hommes.",
        "difficulty": "Intermédiaire",
        "tag": "Codes des cercles"
      },
      {
        "id": "t4-045",
        "prompt": "La « tenue de vénerie » et le « bouton » renvoient au code vestimentaire :",
        "choices": [
          "de la chasse à courre",
          "du polo",
          "de l'opéra",
          "du yachting"
        ],
        "correctIndex": 0,
        "explanation": "La chasse à courre impose une tenue traditionnelle de vénerie, codifiée par équipage (le « bouton »).",
        "difficulty": "Piège",
        "tag": "Codes des cercles"
      }
    ]
  }
]

export const moduleById = (id: string): Module | undefined =>
  modules.find((m) => m.id === id)
