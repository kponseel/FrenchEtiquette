import type { Module } from '../types'

/**
 * Contenu pédagogique de L'Étiquette.
 *
 * ⚠️ Contenu d'EXEMPLE — à remplacer / compléter par le contenu définitif.
 * Objectif visé : 20 questions minimum par module.
 * Le moteur fonctionne avec n'importe quel nombre de questions ; le seuil de
 * réussite (90 %) et le test final (50 questions) sont définis dans src/lib/quiz.ts.
 *
 * Pour ajouter une question : copier un objet { id, prompt, choices, correctIndex, explanation }.
 * - `choices` doit contenir exactement 4 réponses.
 * - `correctIndex` est l'index (0-3) de la bonne réponse.
 */
export const modules: Module[] = [
  {
    id: 'a-table',
    title: 'À table',
    subtitle: "L'art de la table à la française",
    description:
      "Couverts, verres, serviette, pain… Maîtrisez les usages du repas, là où se révèle l'éducation.",
    motif: '🍽',
    questions: [
      {
        id: 'table-1',
        prompt: 'Une fois assis à un dîner, où place-t-on sa serviette ?',
        choices: [
          'Sur les genoux, pliée en deux',
          'Autour du cou',
          'Glissée dans le col de la chemise',
          'À droite de l’assiette, dépliée',
        ],
        correctIndex: 0,
        explanation:
          'La serviette se pose sur les genoux, pliée en deux, jamais autour du cou. On attend que la maîtresse de maison déplie la sienne pour l’imiter.',
      },
      {
        id: 'table-2',
        prompt: 'Dans quel ordre utilise-t-on les couverts disposés autour de l’assiette ?',
        choices: [
          'De l’extérieur vers l’intérieur',
          'De l’intérieur vers l’extérieur',
          'Les fourchettes d’abord, puis les couteaux',
          'Au hasard, selon le plat',
        ],
        correctIndex: 0,
        explanation:
          'On commence par les couverts les plus éloignés de l’assiette et l’on progresse vers elle au fil des plats. Le couvert le plus proche sert le plat principal.',
      },
      {
        id: 'table-3',
        prompt: 'Comment reconnaît-on le verre à eau parmi les verres ?',
        choices: [
          'C’est le plus grand des verres',
          'C’est le plus petit des verres',
          'C’est celui le plus à droite',
          'C’est celui qui a un pied coloré',
        ],
        correctIndex: 0,
        explanation:
          'Le verre à eau est le plus grand ; il se place au-dessus de la pointe du couteau, les verres à vin s’alignant à sa droite par taille décroissante.',
      },
      {
        id: 'table-4',
        prompt: 'À la française, comment tient-on sa fourchette pendant le repas ?',
        choices: [
          'Dents vers le bas, dans la main gauche, sans en changer',
          'Dents vers le haut, comme une cuillère',
          'On coupe, on pose le couteau, puis on change la fourchette de main',
          'Dans la main droite, le couteau dans la gauche',
        ],
        correctIndex: 0,
        explanation:
          'À la française, la fourchette reste dans la main gauche, dents tournées vers le bas. Changer la fourchette de main après avoir coupé est l’usage américain.',
      },
      {
        id: 'table-5',
        prompt: 'Comment mange-t-on le pain à table ?',
        choices: [
          'On le rompt à la main en petites bouchées',
          'On le coupe au couteau',
          'On mord directement dans la tranche',
          'On le trempe dans la sauce',
        ],
        correctIndex: 0,
        explanation:
          'Le pain se rompt à la main en petits morceaux, au-dessus de l’assiette à pain (à gauche). On ne le coupe pas au couteau et l’on n’y mord pas à pleine bouche.',
      },
      {
        id: 'table-6',
        prompt: 'Que fait-on de ses mains entre les plats, selon l’usage français ?',
        choices: [
          'On pose les poignets sur le bord de la table',
          'On garde les mains sur les genoux',
          'On pose les coudes sur la table',
          'On croise les bras',
        ],
        correctIndex: 0,
        explanation:
          'En France, on pose les poignets sur le bord de la table — cacher ses mains sous la table est mal vu (contrairement à l’usage anglo-saxon). Les coudes, eux, restent toujours hors de la table.',
      },
      {
        id: 'table-7',
        prompt: 'Comment puise-t-on correctement sa soupe à la cuillère ?',
        choices: [
          'En éloignant la cuillère de soi',
          'En ramenant la cuillère vers soi',
          'En soulevant l’assiette vers sa bouche',
          'En buvant directement au bord de l’assiette',
        ],
        correctIndex: 0,
        explanation:
          'On puise toujours en éloignant la cuillère de soi et l’on incline l’assiette vers l’extérieur pour la terminer, afin d’éviter toute éclaboussure sur soi.',
      },
      {
        id: 'table-8',
        prompt: 'Comment signifie-t-on que l’on a terminé son plat ?',
        choices: [
          'Couverts réunis et parallèles sur l’assiette',
          'Couverts croisés en X sur l’assiette',
          'Un couvert de chaque côté de l’assiette',
          'Les couverts posés sur la nappe',
        ],
        correctIndex: 0,
        explanation:
          'Couverts réunis et parallèles sur l’assiette = « j’ai terminé ». Croisés ou écartés, ils signifient une simple pause et le service ne débarrasse pas.',
      },
      {
        id: 'table-9',
        prompt: 'Quand commence-t-on à manger ?',
        choices: [
          'Quand la maîtresse de maison a commencé',
          'Dès que l’on est servi',
          'Dès que le plat principal arrive',
          'Quand le maître de maison le permet à voix haute',
        ],
        correctIndex: 0,
        explanation:
          'On attend que tout le monde soit servi et que la maîtresse de maison commence : c’est elle qui « donne le signal ».',
      },
      {
        id: 'table-10',
        prompt: 'Peut-on saucer son assiette avec du pain dans un repas en société ?',
        choices: [
          'Non à la main ; éventuellement avec un morceau piqué sur la fourchette, en cadre intime',
          'Oui, à la main : c’est un compliment au cuisinier',
          'Oui, en soulevant l’assiette pour récupérer la sauce',
          'Toujours, c’est une tradition à honorer',
        ],
        correctIndex: 0,
        explanation:
          'Saucer à la main est à proscrire en société. Dans un cadre intime, on peut le faire avec un morceau de pain piqué sur la fourchette — jamais à pleine main.',
      },
    ],
  },

  {
    id: 'portes-civilite',
    title: 'Portes & civilité',
    subtitle: 'Se déplacer, céder le passage',
    description:
      'Tenir une porte, marcher dans la rue, l’ascenseur, la voiture… La courtoisie des gestes du quotidien.',
    motif: '🚪',
    questions: [
      {
        id: 'portes-1',
        prompt: 'Devant une porte qui s’ouvre en poussant, qui passe en premier ?',
        choices: [
          'L’homme, afin de pousser le battant et le maintenir',
          'La femme, en toute circonstance',
          'Celui qui est arrivé le premier',
          'On passe ensemble de front',
        ],
        correctIndex: 0,
        explanation:
          'Quand il faut pousser la porte, l’homme passe devant pour l’ouvrir et la tenir. Quand elle s’ouvre en tirant, il retient le battant et laisse passer la dame.',
      },
      {
        id: 'portes-2',
        prompt: 'Dans la rue, où se place traditionnellement l’homme par rapport à sa compagne ?',
        choices: [
          'Côté chaussée (extérieur du trottoir)',
          'Côté mur (intérieur du trottoir)',
          'Toujours à sa gauche',
          'Quelques pas devant elle',
        ],
        correctIndex: 0,
        explanation:
          'L’homme marche côté rue pour protéger sa compagne des projections et de la circulation — usage hérité du temps où l’on vidait les eaux par les fenêtres.',
      },
      {
        id: 'portes-3',
        prompt: 'Lorsqu’on tient une porte, jusqu’à quand la maintient-on ?',
        choices: [
          'Jusqu’à ce que la personne qui suit l’ait prise en main ou soit passée',
          'On la lâche dès que l’on est soi-même passé',
          'Uniquement pour les personnes que l’on connaît',
          'Seulement pour les dames',
        ],
        correctIndex: 0,
        explanation:
          'On retient le battant jusqu’à ce que la personne qui suit l’ait saisi ou soit passée, qu’on la connaisse ou non. Le lâcher au nez de quelqu’un est grossier.',
      },
      {
        id: 'portes-4',
        prompt: 'À l’ascenseur, quelle est la règle de passage ?',
        choices: [
          'On laisse d’abord sortir, puis on cède le passage aux femmes et aux aînés',
          'On entre toujours le premier pour tenir la porte',
          'Le plus pressé passe en premier',
          'Chacun pour soi, c’est un lieu de transit',
        ],
        correctIndex: 0,
        explanation:
          'Priorité à ceux qui sortent. À l’entrée, on s’efface devant les femmes et les personnes âgées, puis on veille à la porte.',
      },
      {
        id: 'portes-5',
        prompt: 'Au restaurant, quelle place offre-t-on à son invité(e) ?',
        choices: [
          'La place dos au mur (ou sur la banquette), avec vue sur la salle',
          'La chaise face à la cuisine',
          'La place la plus proche de la sortie',
          'Peu importe, on s’assoit au hasard',
        ],
        correctIndex: 0,
        explanation:
          'On offre à l’invité la place d’honneur : sur la banquette, dos au mur, avec la vue sur la salle. L’hôte fait face, dos à la salle.',
      },
      {
        id: 'portes-6',
        prompt: 'Selon les usages, dans quel ordre salue-t-on ou sert-on les personnes ?',
        choices: [
          'Les femmes avant les hommes, les aînés avant les cadets',
          'Les hommes d’abord, par courtoisie entre eux',
          'Les plus jeunes d’abord, par dynamisme',
          'Dans l’ordre d’arrivée',
        ],
        correctIndex: 0,
        explanation:
          'La préséance va aux femmes puis aux hommes, et aux aînés avant les plus jeunes. C’est le fil conducteur de toutes les politesses de passage.',
      },
      {
        id: 'portes-7',
        prompt: 'Quand une femme arrive à table ou la quitte, que fait un homme bien élevé ?',
        choices: [
          'Il se lève (ou en esquisse le geste)',
          'Il reste assis pour ne pas la gêner',
          'Il lui serre la main',
          'Il attend qu’elle soit installée pour la saluer',
        ],
        correctIndex: 0,
        explanation:
          'Un homme se lève lorsqu’une femme arrive ou quitte la table, et l’aide à avancer ou reculer sa chaise.',
      },
      {
        id: 'portes-8',
        prompt: 'Comment aide-t-on une dame à mettre son manteau ?',
        choices: [
          'On présente le manteau ouvert pour qu’elle y glisse les bras, puis on l’ajuste',
          'On lui tend le manteau pour qu’elle se débrouille',
          'On le pose sur ses épaules sans ouvrir les manches',
          'On le tient le plus haut possible et elle saute dedans',
        ],
        correctIndex: 0,
        explanation:
          'On présente le manteau ouvert, à bonne hauteur, pour qu’elle y passe les bras sans effort, puis on l’ajuste délicatement sur les épaules.',
      },
      {
        id: 'portes-9',
        prompt: 'Au moment de régler une addition lorsqu’on a invité, quelle est la règle ?',
        choices: [
          'L’hôte règle, avec discrétion, sans commenter les prix',
          'On partage systématiquement en parts égales',
          'L’invité insiste pour payer sa part',
          'On vérifie l’addition à voix haute, ligne par ligne',
        ],
        correctIndex: 0,
        explanation:
          'Celui qui invite règle l’addition, idéalement avec discrétion. On ne commente jamais les prix devant ses convives.',
      },
      {
        id: 'portes-10',
        prompt: 'Comment se comporte-t-on à la portière de la voiture avec son invitée ?',
        choices: [
          'On ouvre la portière, on s’assure qu’elle est installée, puis on referme doucement',
          'On démarre dès qu’elle a touché le siège',
          'On la laisse ouvrir et fermer elle-même',
          'On claque la porte pour être certain qu’elle est fermée',
        ],
        correctIndex: 0,
        explanation:
          'On ouvre la portière pour son invitée, on veille à ce qu’elle soit confortablement installée — manteau et pans de robe à l’intérieur — avant de refermer sans brusquerie.',
      },
    ],
  },

  {
    id: 'presentations',
    title: 'Présentations & salutations',
    subtitle: 'Présenter, saluer, vouvoyer',
    description:
      'Qui présente-t-on à qui ? Poignée de main, baisemain, tutoiement… Les codes de la rencontre.',
    motif: '🤝',
    questions: [
      {
        id: 'pres-1',
        prompt: 'Lors d’une présentation entre un homme et une femme, dans quel sens présente-t-on ?',
        choices: [
          'On présente l’homme à la femme',
          'On présente la femme à l’homme',
          'C’est au plus jeune de décider',
          'L’ordre n’a aucune importance',
        ],
        correctIndex: 0,
        explanation:
          'On présente l’homme à la femme : on nomme d’abord la personne que l’on veut honorer (la femme), puis on « lui présente » l’autre.',
      },
      {
        id: 'pres-2',
        prompt: 'Selon l’âge, comment présente-t-on deux personnes ?',
        choices: [
          'On présente le plus jeune à la personne la plus âgée',
          'On présente l’aîné au plus jeune',
          'On présente le plus grand au plus petit',
          'On les laisse se présenter seuls',
        ],
        correctIndex: 0,
        explanation:
          'La personne que l’on honore — l’aînée — est nommée la première ; on « lui présente » la plus jeune. Même logique pour la hiérarchie : l’inférieur est présenté au supérieur.',
      },
      {
        id: 'pres-3',
        prompt: 'Comment se pratique correctement le baisemain ?',
        choices: [
          'À l’intérieur, à une femme mariée, sans que les lèvres touchent la main',
          'Dans la rue, à toute femme rencontrée',
          'En déposant un vrai baiser sur la main',
          'À une jeune fille, pour la flatter',
        ],
        correctIndex: 0,
        explanation:
          'Le baisemain se fait à l’intérieur, réservé aux femmes mariées : on s’incline et les lèvres effleurent sans toucher. Jamais à une jeune fille, jamais dehors, jamais sur un gant.',
      },
      {
        id: 'pres-4',
        prompt: 'À qui revient l’initiative de tendre la main pour la serrer ?',
        choices: [
          'À la femme, à l’aîné ou au supérieur',
          'À l’homme, toujours',
          'Au plus jeune, par respect',
          'À celui qui parle le premier',
        ],
        correctIndex: 0,
        explanation:
          'C’est à la femme, à la personne la plus âgée ou de rang supérieur de tendre la main la première ; on attend ce geste avant de la serrer.',
      },
      {
        id: 'pres-5',
        prompt: 'Le passage du vouvoiement au tutoiement : qui le propose ?',
        choices: [
          'L’aîné, la femme ou le supérieur hiérarchique',
          'Le plus jeune, pour créer du lien',
          'Le premier qui le souhaite',
          'On tutoie d’emblée, c’est plus chaleureux',
        ],
        correctIndex: 0,
        explanation:
          'C’est à l’aîné, à la femme ou au supérieur de proposer le tutoiement. On ne l’impose jamais à une personne plus âgée ou que l’on vient de rencontrer.',
      },
      {
        id: 'pres-6',
        prompt: 'Quelle formule privilégier quand on vous présente quelqu’un ?',
        choices: [
          'Un sobre « Bonjour, Madame » (ou « Mes hommages, Madame » d’un homme à une femme)',
          '« Enchanté de faire enfin votre connaissance ! », chaleureusement',
          '« Salut, ça va ? »',
          'Un signe de tête sans un mot',
        ],
        correctIndex: 0,
        explanation:
          'Un sobre « Bonjour, Madame / Monsieur » est toujours juste ; un homme peut présenter « ses hommages » à une femme. On évite les formules trop empressées ou familières.',
      },
      {
        id: 'pres-7',
        prompt: 'Doit-on se lever pour être présenté ou pour saluer ?',
        choices: [
          'Un homme se lève toujours ; une femme se lève pour une aînée ou une personne de marque',
          'On reste assis pour rester détendu',
          'Seules les femmes se lèvent',
          'On ne se lève qu’en présence d’un titre de noblesse',
        ],
        correctIndex: 0,
        explanation:
          'Un homme se lève systématiquement pour saluer ou être présenté. Une femme se lève pour une femme plus âgée, ou pour un homme d’un certain âge ou rang.',
      },
      {
        id: 'pres-8',
        prompt: 'Pour une première rencontre ou en contexte professionnel, que privilégie-t-on ?',
        choices: [
          'La poignée de main',
          'La bise, pour briser la glace',
          'Une accolade',
          'Un simple signe de la main à distance',
        ],
        correctIndex: 0,
        explanation:
          'Pour une première rencontre ou en milieu professionnel, on s’en tient à la poignée de main. La bise suppose une familiarité que l’on n’a pas encore.',
      },
      {
        id: 'pres-9',
        prompt: 'Comment se présente-t-on soi-même ?',
        choices: [
          'Par son prénom puis son nom, sans « Monsieur / Madame » devant le sien',
          'Par « Monsieur » suivi de son nom de famille',
          'Par son nom seul, d’un ton bref',
          'Par son titre suivi de son nom',
        ],
        correctIndex: 0,
        explanation:
          'On ne fait jamais précéder son propre nom de « Monsieur » ou « Madame ». On se présente simplement par son prénom et son nom.',
      },
      {
        id: 'pres-10',
        prompt: 'Lorsqu’on présente deux personnes, que doit-on faire en plus de les nommer ?',
        choices: [
          'Donner un mot de contexte sur chacune pour amorcer la conversation',
          'Se contenter des deux noms, le plus vite possible',
          'Les laisser deviner qui est qui',
          'Raconter une anecdote longue sur l’une d’elles',
        ],
        correctIndex: 0,
        explanation:
          'Une bonne présentation ajoute un mot de contexte (« …qui revient d’un voyage en Italie ») afin de fournir une amorce de conversation et de mettre les deux personnes à l’aise.',
      },
    ],
  },

  {
    id: 'tenue',
    title: 'Tenue & élégance',
    subtitle: 'Dress codes et art de se vêtir',
    description:
      'Cravate noire, smoking, boutons, harmonie des couleurs… Décoder une invitation et s’habiller juste.',
    motif: '🎩',
    questions: [
      {
        id: 'tenue-1',
        prompt: 'Que signifie « cravate noire » (black tie) sur un carton d’invitation ?',
        choices: [
          'Le smoking',
          'Un simple costume sombre',
          'L’habit à queue-de-pie (frac)',
          'Une tenue de ville libre',
        ],
        correctIndex: 0,
        explanation:
          '« Cravate noire » impose le smoking, avec nœud papillon noir — ni le costume de ville, ni le frac.',
      },
      {
        id: 'tenue-2',
        prompt: 'Que signifie « cravate blanche » (white tie) ?',
        choices: [
          'L’habit (frac) à queue-de-pie, gilet et nœud papillon blancs',
          'Un smoking avec nœud papillon blanc',
          'Un costume clair d’été',
          'Une chemise sans cravate',
        ],
        correctIndex: 0,
        explanation:
          '« Cravate blanche » est la tenue la plus formelle qui soit : l’habit (frac), avec gilet et nœud papillon blancs. C’est le degré au-dessus du smoking.',
      },
      {
        id: 'tenue-3',
        prompt: 'Le bouton du bas d’un gilet (ou d’une veste droite) se boutonne-t-il ?',
        choices: [
          'Non, on le laisse toujours ouvert',
          'Oui, on boutonne tout',
          'Seulement debout',
          'Seulement assis',
        ],
        correctIndex: 0,
        explanation:
          'Par tradition héritée d’Édouard VII, le bouton inférieur du gilet — comme celui d’une veste — reste toujours ouvert.',
      },
      {
        id: 'tenue-4',
        prompt: 'Une veste de costume à deux boutons : que boutonne-t-on debout ?',
        choices: [
          'Le bouton du haut seulement',
          'Les deux boutons',
          'Le bouton du bas seulement',
          'Aucun, pour rester décontracté',
        ],
        correctIndex: 0,
        explanation:
          'Debout, on boutonne le bouton supérieur — jamais celui du bas — et l’on déboutonne entièrement la veste une fois assis.',
      },
      {
        id: 'tenue-5',
        prompt: 'À quelle hauteur doit arriver la pointe de la cravate ?',
        choices: [
          'Au milieu de la boucle de ceinture',
          'Au niveau du nombril',
          'Bien au-dessus du nombril',
          'À mi-poitrine',
        ],
        correctIndex: 0,
        explanation:
          'La pointe de la cravate doit affleurer le milieu de la boucle de ceinture : ni plus haut, ni plus bas.',
      },
      {
        id: 'tenue-6',
        prompt: 'Quelle est la règle pour les chaussettes avec un costume ?',
        choices: [
          'Montantes (mi-mollet) et accordées au pantalon',
          'Courtes et blanches, pour la fraîcheur',
          'Assorties aux chaussures plutôt qu’au pantalon',
          'Fantaisie et bien visibles, c’est un signe distinctif',
        ],
        correctIndex: 0,
        explanation:
          'On porte des chaussettes montantes, accordées à la couleur du pantalon, afin de ne jamais laisser voir la peau des jambes une fois assis.',
      },
      {
        id: 'tenue-7',
        prompt: 'Comment harmonise-t-on ceinture et chaussures ?',
        choices: [
          'Même couleur de cuir (noir avec noir, marron avec marron)',
          'Couleurs volontairement contrastées',
          'La ceinture s’accorde à la cravate',
          'Peu importe, on ne les voit pas ensemble',
        ],
        correctIndex: 0,
        explanation:
          'La ceinture s’accorde à la couleur des chaussures : cuir noir avec chaussures noires, marron avec marron.',
      },
      {
        id: 'tenue-8',
        prompt: 'La pochette (mouchoir de poche) doit-elle être assortie à la cravate ?',
        choices: [
          'Non : elle s’harmonise sans jamais être identique à la cravate',
          'Oui : exactement le même tissu que la cravate',
          'Elle doit toujours être blanche, sans exception',
          'On n’en met jamais avec une cravate',
        ],
        correctIndex: 0,
        explanation:
          'La pochette dialogue avec les couleurs de l’ensemble sans jamais être assortie à l’identique à la cravate — un ensemble « parure » fait apprêté et de mauvais goût.',
      },
      {
        id: 'tenue-9',
        prompt: 'Doit-on retirer ses gants pour serrer une main ?',
        choices: [
          'Un homme retire son gant ; une femme peut garder le sien',
          'Tout le monde garde ses gants',
          'Tout le monde retire ses gants',
          'On ne serre jamais la main avec des gants, on s’incline',
        ],
        correctIndex: 0,
        explanation:
          'Un homme ôte son gant pour serrer une main. Une femme, elle, peut conserver le sien — usage hérité de l’époque des gants longs de soirée.',
      },
      {
        id: 'tenue-10',
        prompt: 'Le smoking se porte-t-il avant la tombée de la nuit ?',
        choices: [
          'Non, c’est une tenue de soirée (après 18 h)',
          'Oui, à toute heure de la journée',
          'Oui, c’est même conseillé pour les déjeuners',
          'Seulement le matin pour les mariages',
        ],
        correctIndex: 0,
        explanation:
          'Le smoking est une tenue du soir. Avant 18 heures, on lui préfère le costume sombre ou, pour les grandes occasions diurnes, la jaquette.',
      },
    ],
  },

  {
    id: 'conversation',
    title: 'Conversation & savoir-être',
    subtitle: 'L’art de la conversation et de la discrétion',
    description:
      'Sujets à éviter, ponctualité, remerciements, présents… Le savoir-vivre de l’invité et de l’hôte.',
    motif: '🕯',
    questions: [
      {
        id: 'conv-1',
        prompt: 'Quels sujets évite-t-on dans une conversation mondaine ?',
        choices: [
          'L’argent, la politique et la religion',
          'Les voyages, l’art et les lectures',
          'La météo et les jardins',
          'Le théâtre et la musique',
        ],
        correctIndex: 0,
        explanation:
          'On évite l’argent, la politique et la religion — sources de discorde — au profit de sujets fédérateurs : arts, voyages, lectures, spectacles.',
      },
      {
        id: 'conv-2',
        prompt: 'Quel est le bon usage du téléphone portable à table ?',
        choices: [
          'Il reste rangé et silencieux, jamais posé sur la table',
          'On le pose face contre table, au cas où',
          'On le consulte discrètement entre les plats',
          'On répond si c’est important, en s’excusant',
        ],
        correctIndex: 0,
        explanation:
          'Le téléphone reste rangé et silencieux. Le poser sur la table ou le consulter pendant le repas signifie aux convives qu’ils passent au second plan.',
      },
      {
        id: 'conv-3',
        prompt: 'Qui veille à ce que chacun participe à la conversation ?',
        choices: [
          'La maîtresse ou le maître de maison',
          'L’invité le plus âgé',
          'L’invité d’honneur',
          'Personne : chacun se débrouille',
        ],
        correctIndex: 0,
        explanation:
          'La maîtresse ou le maître de maison veille à inclure chacun, relance les plus silencieux et oriente les sujets pour qu’aucun convive ne reste à l’écart.',
      },
      {
        id: 'conv-4',
        prompt: 'Demander « Et que faites-vous dans la vie ? » dès la rencontre est-il bienvenu ?',
        choices: [
          'Non, c’est trop direct : on laisse la conversation venir',
          'Oui, c’est la première chose à demander',
          'Oui, et l’on peut enchaîner sur le salaire',
          'Oui, après avoir longuement parlé de soi',
        ],
        correctIndex: 0,
        explanation:
          'Interroger d’emblée sur le métier — donc sur le statut et l’argent — est jugé indiscret. On laisse la conversation amener naturellement le sujet.',
      },
      {
        id: 'conv-5',
        prompt: 'Quelle attitude adopte-t-on dans l’échange ?',
        choices: [
          'On écoute, on laisse finir et l’on ne monopolise pas la parole',
          'On occupe le devant de la scène pour briller',
          'On coupe la parole pour montrer son intérêt',
          'On parle plus fort pour se faire entendre',
        ],
        correctIndex: 0,
        explanation:
          'La conversation est un échange : on ne coupe pas la parole, on laisse les autres s’exprimer et l’on sait s’effacer. Briller, c’est d’abord savoir écouter.',
      },
      {
        id: 'conv-6',
        prompt: 'Après un dîner chez des hôtes, que fait l’invité bien élevé ?',
        choices: [
          'Il remercie en partant, puis renouvelle ses remerciements le lendemain',
          'Un simple merci en sortant suffit',
          'Il n’a pas à remercier : il était invité',
          'Il remercie environ une semaine plus tard',
        ],
        correctIndex: 0,
        explanation:
          'On remercie en prenant congé, puis l’on renouvelle ses remerciements le lendemain — par un mot, un appel ou un petit présent : c’est le « merci du lendemain ».',
      },
      {
        id: 'conv-7',
        prompt: 'Comment offrir des fleurs à la maîtresse de maison ?',
        choices: [
          'Les faire livrer le jour même, avant le dîner',
          'Arriver avec un grand bouquet à mettre en vase sur-le-champ',
          'Offrir des chrysanthèmes, élégants et durables',
          'Ne rien apporter, c’est plus discret',
        ],
        correctIndex: 0,
        explanation:
          'On fait porter les fleurs avant le dîner, pour ne pas occuper l’hôtesse à les arranger pendant l’accueil. On évite les chrysanthèmes, associés au deuil en France.',
      },
      {
        id: 'conv-8',
        prompt: 'Quelle est la règle de ponctualité pour un dîner chez des particuliers ?',
        choices: [
          'On respecte l’heure, avec au plus un « quart d’heure de politesse » ; jamais en avance',
          'On arrive en avance pour aider en cuisine',
          'On arrive volontairement très en retard, c’est chic',
          'L’heure indiquée n’a qu’une valeur indicative',
        ],
        correctIndex: 0,
        explanation:
          'On n’arrive jamais en avance — l’hôtesse termine ses préparatifs — ni très en retard. Un « quart d’heure de politesse » (5 à 15 minutes) est toléré.',
      },
      {
        id: 'conv-9',
        prompt: 'Que faire après un impair à table (un verre renversé, par exemple) ?',
        choices: [
          'S’excuser brièvement et passer ; l’hôte, lui, minimise',
          'S’excuser longuement pour bien montrer sa gêne',
          'Faire comme si de rien n’était, sans un mot',
          'Quitter la table aussitôt',
        ],
        correctIndex: 0,
        explanation:
          'Devant un impair, on s’excuse brièvement et l’on passe. L’hôte, de son côté, minimise l’incident pour remettre aussitôt son invité à l’aise.',
      },
      {
        id: 'conv-10',
        prompt: 'Quel ton de voix adopte-t-on en société ?',
        choices: [
          'Une voix posée et mesurée, un rire discret',
          'Une voix forte pour capter l’attention',
          'Un rire éclatant pour montrer sa joie',
          'Des chuchotements, pour l’effet de confidence',
        ],
        correctIndex: 0,
        explanation:
          'On garde une voix posée et un rire discret. Parler fort ou rire bruyamment attire l’attention et déroge à la discrétion qui sied au bon ton.',
      },
    ],
  },
]

export const moduleById = (id: string): Module | undefined =>
  modules.find((m) => m.id === id)
