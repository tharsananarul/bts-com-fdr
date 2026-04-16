export interface ChapterContent {
  id: string;
  number: string;
  title: string;
  tag: string;
  content: string | any[];
}

export interface Section {
  id: string;
  title: string;
  badge?: string;
  badgeColor?: 'blue' | 'green' | 'amber' | 'red' | 'purple' | 'teal';
  description?: string;
  content: any;
}

export interface Subject {
  id: string;
  title: string;
  icon: string;
  tag: string;
  description: string;
  sections: Section[];
}

export const CEJM_CHAPTERS: { annee1: ChapterContent[]; annee2: ChapterContent[] } = {
  annee1: [
    { id: 'ch1-1', number: '01', title: "L'intégration de l'entreprise dans son environnement", tag: 'Économie / Droit', content: 'Contenu de révision à venir...' },
    { id: 'ch1-2', number: '02', title: "La régulation de l'activité économique", tag: 'Économie publique', content: 'Contenu de révision à venir...' },
    { id: 'ch1-3', number: '03', title: "L'organisation de l'activité économique", tag: 'Droit des contrats', content: 'Contenu de révision à venir...' },
    { id: 'ch1-4', number: '04', title: "L'impact du numérique sur l'entreprise", tag: 'Management / Stratégie', content: 'Contenu de révision à venir...' },
    { id: 'ch1-5', number: '05', title: "Le choix d'une structure juridique", tag: 'Droit des sociétés', content: 'Contenu de révision à venir...' },
    { id: 'ch1-6', number: '06', title: "Les relations contractuelles entre les acteurs", tag: 'Droit des contrats', content: 'Contenu de révision à venir...' },
  ],
  annee2: [
    {
      id: 'ch2-12',
      number: '12',
      title: "L'impact des mutations du travail sur l'emploi",
      tag: 'RH / Management',
      content: [
        {
          id: 'gepp',
          title: "I. La GEPP et l'adaptation des RH",
          type: 'grid',
          items: [
            {
              title: "🎯 1. La GEPP : Anticiper pour agir",
              color: 'blue',
              text: [
                "Objectif : Analyser les écarts entre les RH actuelles et les besoins futurs de l'entreprise.",
                "-> C'est un outil d'anticipation stratégique.",
                "📉 Si Ressources > Besoins :",
                "• Réduction des effectifs",
                "• Mobilités internes (changement de poste)",
                "• Réduction du temps de travail",
                "📈 Si Besoins > Ressources :",
                "• Recrutements de nouveaux talents",
                "• Promotions internes",
                "• Formations ciblées"
              ]
            },
            {
              title: "⭐ 2. La gestion des talents",
              color: 'purple',
              text: [
                "Pourquoi ? Obtenir un avantage compétitif en valorisant l'unicité de chaque collaborateur.",
                "-> Permet un gain en souplesse et réactivité face aux mutations du marché.",
                "Les 3 piliers stratégiques :",
                "1️⃣ Attirer les talents via la Marque Employeur.",
                "2️⃣ Détecter les potentiels en interne.",
                "3️⃣ Fidéliser pour réduire le turn-over."
              ]
            }
          ]
        },
        {
          id: 'motivation',
          title: "II. Leviers et théories de la motivation",
          type: 'grid',
          items: [
            {
              title: "🛠️ 1. Les leviers de l'employeur",
              color: 'green',
              text: [
                "Comment agir concrètement sur la motivation ?",
                "💰 Rémunération : Salaire fixe, primes, bonus.",
                "📈 Épargne salariale : Intéressement, participation.",
                "🚀 Gestion des carrières : Formations, perspectives d'évolution.",
                "🕒 Temps de travail : Horaires flexibles, temps partiel choisi.",
                "🛡️ Stabilité : Contrats CDI, sécurité face au chômage."
              ]
            },
            {
              title: "🧠 2. Théories de la motivation",
              color: 'amber',
              text: [
                "🔺 Pyramide de Maslow (5 besoins hiérarchisés) :",
                "1. Physiologique (survie, salaire de base)",
                "2. Sécurité (stabilité, conditions sûres)",
                "3. Appartenance (intégration dans une équipe)",
                "4. Estime (reconnaissance, respect)",
                "5. Épanouissement personnel (accomplissement)",
                "⚖️ Théorie bifactorielle d'Herzberg :",
                "• Facteurs d'hygiène : Maintiennent un climat (salaire, sécurité).",
                "• Facteurs de motivation : Donnent l'envie de s'impliquer (autonomie, défis, reconnaissance)."
              ]
            },
            {
              title: "💻 3. Le cas des Digital Natives",
              color: 'teal',
              text: [
                "📱 Qui sont-ils ? Aussi appelés \"Millennials\", nés avec un smartphone dans la main.",
                "Leurs attentes principales :",
                "• 🤝 Des modes de travail ultra-collaboratifs.",
                "• 🏠 Beaucoup plus de flexibilité (Télétravail banalisé).",
                "• 🗣️ Du management participatif (besoin de codécider).",
                "• 🎯 Une quête de sens : pourquoi je le fais, pour quel impact ?"
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'ch2-13',
      number: '13',
      title: "La démarche et le diagnostic stratégiques",
      tag: 'Stratégie',
      content: [
        {
          id: 'demarche',
          title: "I. La démarche stratégique globale",
          type: 'grid',
          items: [
            {
              title: "📊 1. Le Modèle LCAG",
              color: 'blue',
              text: [
                "Démarche classique (Learned, Christensen, Andrews, Guth) :",
                "1️⃣ Réaliser un diagnostic stratégique complet (FFOM/SWOT).",
                "2️⃣ Fixer des objectifs stratégiques (long terme).",
                "3️⃣ Déterminer des choix stratégiques pour les atteindre.",
                "-> S'appuie sur un double diagnostic externe et interne."
              ]
            },
            {
              title: "🛤️ 2. Délibérée vs Émergente",
              color: 'teal',
              text: [
                "Concept de Mintzberg : La stratégie subit toujours l'environnement.",
                "🎯 Stratégie délibérée :",
                "Planifiée et voulue dès le départ par la direction.",
                "🌊 Stratégie émergente :",
                "Improvisée, elle surgit face aux aléas et imprévus du marché."
              ]
            }
          ]
        },
        {
          id: 'diag-externe',
          title: "II. Le diagnostic stratégique externe",
          type: 'grid',
          items: [
            {
              title: "🌍 1. Le Macro (Outil PESTEL)",
              color: 'amber',
              text: [
                "Analyse de l'environnement global subi par l'entreprise :",
                "🏛️ P = Politique (lois, stabilité).",
                "📈 E = Économique (inflation, croissance).",
                "👥 S = Socioculturel (tendances de consommation).",
                "📱 T = Technologique (innovations, R&D).",
                "🌱 E = Écologique (lois vertes, climat).",
                "⚖️ L = Légal (droit du travail, normes)."
              ]
            },
            {
              title: "🥊 2. Le Micro (5 forces de Porter)",
              color: 'red',
              text: [
                "L'environnement concurrentiel (ceux qui exercent une pression) :",
                "⚔️ 1. Concurrents directs : Rivaux déjà en place.",
                "🚪 2. Nouveaux entrants : Menace d'entrée sur le marché (si pas de barrières).",
                "🔄 3. Produits de substitution : Répondent au même besoin autrement.",
                "🛒 4. Fournisseurs : S'ils sont incontournables, ils imposent leurs prix.",
                "💳 5. Clients : S'ils sont puissants, ils exigent plus pour moins cher."
              ]
            },
            {
              title: "🗝️ 3. Facteurs Clés de Succès (FCS)",
              color: 'purple',
              text: [
                "Définition : Élément essentiel à maîtriser pour réussir sur un marché.",
                "-> Pré-requis incontournable pour survivre.",
                "Exemples de FCS :",
                "• L'agilité ou la rapidité d'exécution.",
                "• La maîtrise des coûts pour casser les prix.",
                "• Un savoir-faire technologique unique."
              ]
            }
          ]
        },
        {
          id: 'diag-interne',
          title: "III. Le diagnostic stratégique interne",
          type: 'grid',
          items: [
            {
              title: "💎 1. La théorie des ressources",
              color: 'green',
              text: [
                "Par Edith Penrose : Ce sont les ressources spécifiques (rares) qui créent de la valeur.",
                "📦 Ressources Tangibles :",
                "Matérielles, financières, physiques, humaines.",
                "✨ Ressources Intangibles :",
                "Savoir-faire, image de marque, brevets, innovations technologiques."
              ]
            },
            {
              title: "🧠 2. La théorie des compétences",
              color: 'blue',
              text: [
                "Par Hamel & Prahalad : Une ressource n'est rien sans la compétence ! c'est la façon dont on l'utilise qui compte.",
                "-> C'est la manière de combiner les ressources qui donne un avantage.",
                "🌟 Les compétences fondamentales :",
                "Capacité d'innovation, flexibilité, design unique pour se différencier durablement."
              ]
            },
            {
              title: "🔗 3. La chaîne de valeur",
              color: 'amber',
              text: [
                "Par Michael Porter : Décomposer l'entreprise pour chasser les coûts inutiles.",
                "⚙️ Activités de soutien (les appuis) :",
                "RH, Achats, R&D, Infrastructures.",
                "🚀 Activités principales (cœur du réacteur) :",
                "Logistique, Production, Marketing, Ventes, Services.",
                "-> Le but : Externaliser (sous-traiter) ce qui ne génère pas de valeur, pour se concentrer sur son cœur de métier."
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const SUBJECTS: Subject[] = [
  {
    id: 'bloc1',
    title: 'Stratégie de communication',
    icon: '📐',
    tag: 'Bloc 01',
    description: "Les 8 étapes clés du plan de com, de l'analyse au pilotage.",
    sections: [
      {
        id: 'diagnostic',
        title: '1. Diagnostic',
        badge: 'SWOT / FFOM',
        badgeColor: 'blue',
        description: "Analyse Interne (Forces/Faiblesses) et Externe (Opportunités/Menaces).",
        content: {
          type: 'swot',
          items: [
            { title: 'Forces (interne)', color: 'green', items: ['Atouts, savoir-faire distinctifs', 'Notoriété, label, budget fort', 'Image de marque positive'], example: 'Ex. Reels très vus, comm. organique performante' },
            { title: 'Faiblesses (interne)', color: 'red', items: ['Points faibles internes', 'Site obsolète, budget nul', 'Image vieillissante'], example: 'Ex. Ventes en ligne = 5%, pas de stratégie omnicanale' },
            { title: 'Opportunités (externe)', color: 'blue', items: ['Tendances favorables du marché', 'Croissance du e-commerce', 'Nouveaux besoins des cibles'], example: 'Ex. Essor de Pinterest/Instagram' },
            { title: 'Menaces (externe)', color: 'amber', items: ['Concurrents agressifs', 'Crise économique, inflation', 'Saturation médiatique'], example: 'Ex. Concurrence internationale à bas coût' }
          ],
          warning: "Ne faire que Forces/Faiblesses = diagnostic interne seulement = max 6 pts sur 10. Le SWOT complet est obligatoire."
        }
      },
      {
        id: 'probleme',
        title: '2. Problème',
        description: "Le défi que la campagne doit résoudre. Tension entre ambition et obstacle.",
        content: {
          type: 'formula',
          formula: "« Comment [objectif / ambition] alors que [obstacle / frein / préjugé] ? »",
          examples: [
            { label: 'Exemple 1 — Formation artisanale', text: "« Comment informer et inciter des jeunes à intégrer un centre de formation artisanal, alors que l'artisanat est perçu comme peu attractif et peu lucratif ? »" },
            { label: 'Exemple 2 — Culture / Spectacle', text: "« Comment attirer les jeunes vers l'opéra, alors que cette musique est perçue comme élitiste et chère ? »" },
            { label: 'Exemple 3 — Marque locale', text: "« Comment développer les ventes en ligne d'une marque artisanale locale, alors que sa cible privilégie encore l'achat en magasin ? »" }
          ],
          tip: "Le 'comment' = ton objectif. Le 'alors que' = le frein principal tiré du SWOT."
        }
      },
      {
        id: 'positionnement',
        title: '3. Positionnement',
        badge: '4 critères',
        badgeColor: 'blue',
        description: "La place que la marque veut occuper dans l'esprit du public.",
        content: {
          type: 'grid',
          items: [
            { title: 'Crédible', color: 'blue', text: 'La promesse est réaliste et prouvée (Labels, prix, ancienneté).' },
            { title: 'Distinctif', color: 'green', text: "L'offre se démarque clairement des concurrents (Avantage unique)." },
            { title: 'Attractif', color: 'amber', text: 'Répond à un vrai besoin ou attente forte de la cible.' },
            { title: 'Durable', color: 'red', text: 'Peut être maintenu et défendu sur le long terme.' }
          ],
          formula: "« [La marque] se positionne comme [image souhaitée] pour [cible], grâce à [preuve / différenciation]. »"
        }
      },
      {
        id: 'objectifs',
        title: '4. Objectifs',
        badge: 'Triptyque CAC',
        badgeColor: 'purple',
        content: {
          type: 'grid',
          items: [
            { title: '🧠 Cognitif', color: 'blue', text: 'FAIRE CONNAÎTRE : Informer, annoncer, développer la notoriété.' },
            { title: '❤️ Affectif', color: 'green', text: 'FAIRE AIMER : Améliorer l\'image, moderniser, créer la préférence.' },
            { title: '⚡ Conatif', color: 'amber', text: 'FAIRE AGIR : Pousser à l\'achat, générer des inscriptions ou du trafic.' }
          ],
          example: "Cognitif : Faire connaître le centre. Affectif : Valoriser l'image. Conatif : Inciter à l'inscription."
        }
      },
      {
        id: 'cibles',
        title: '5. Cibles',
        content: {
          type: 'table',
          headers: ['Type', 'Définition', 'Exemple'],
          rows: [
            ['Cible principale', 'Public global visé.', 'Jeunes 16-25 ans national.'],
            ['Cœur de cible', 'Fraction prioritaire.', 'Jeunes 16-25 ans régionaux.'],
            ['Cible secondaire', 'Public influent.', 'Parents, enseignants.'],
            ['Relais', 'Prescripteurs.', 'Journalistes, influenceurs.'],
            ['Interne', 'Collaborateurs.', 'Équipes, formateurs.']
          ],
          extra: {
            title: "Motivations & Freins",
            items: [
              { label: 'Motivations', color: 'green', list: ['Sens dans la carrière', 'Attrait local', 'Formation pratique'] },
              { label: 'Freins', color: 'red', list: ['Image dépassée', 'Méconnaissance débouchés', 'Peur revenus'] }
            ]
          }
        }
      },
      {
        id: 'moyens',
        title: '6. Moyens',
        badge: 'POE',
        badgeColor: 'amber',
        content: {
          type: 'grid',
          items: [
            { title: '📺 Médias', color: 'blue', text: 'Affichage, Presse, Radio, TV, Internet, Réseaux Sociaux.' },
            { title: '🎯 Hors-médias', color: 'green', text: 'Édition, Marketing direct, Événementiel, RP, Influence.' },
            { title: '💰 Paid', color: 'red', text: 'Ads, Influence rémunérée, Achat d\'espace.' },
            { title: '🏠 Owned', color: 'blue', text: 'Site, Blog, Réseaux (organique), Newsletter.' },
            { title: '🌱 Earned', color: 'green', text: 'Retombées presse, Bouche à oreille, Partages.' }
          ]
        }
      },
      {
        id: 'kpi',
        title: '7. KPI',
        content: {
          type: 'table',
          headers: ['Objectif', 'Indicateurs (KPI)'],
          rows: [
            ['Cognitif', 'Impressions, Visiteurs uniques, SEO, Notoriété.'],
            ['Affectif', 'Taux engagement, Followers, NPS, Sentiment.'],
            ['Conatif', 'Taux conversion, Panier moyen, CPA, CTR, CA.'],
            ['Physique', 'Taux de visite tracé (QR code), Entrées.'],
            ['RP', 'Nombre retombées, Audience cumulée, EAP.']
          ]
        }
      },
      {
        id: 'droit',
        title: '8. Droit',
        content: {
          type: 'list',
          items: [
            { title: 'RGPD (2018)', text: 'Consentement explicite, droit à l\'oubli, politique de confidentialité.' },
            { title: 'Loi Évin (1991)', text: 'Encadrement alcool (message sanitaire) et tabac (interdiction).' },
            { title: 'Loi Sapin (1993)', text: 'Transparence des achats d\'espaces publicitaires.' },
            { title: 'LCEN (2004)', text: 'Opt-in e-mailing, mentions légales, cookies.' },
            { title: 'Droit d\'auteur', text: 'Cession de droits obligatoire pour toute création originale.' },
            { title: 'Droit à l\'image', text: 'Autorisation écrite obligatoire pour toute personne identifiable.' },
            { title: 'Loi AGEC (2020)', text: 'Anti-gaspillage, éco-conception des supports.' }
          ]
        }
      },
      {
        id: 'recap',
        title: '✅ Récapitulatif',
        content: {
          type: 'table',
          headers: ['Étape', 'Question clé', 'Piège'],
          rows: [
            ['SWOT', 'Où en est-on ?', 'Oublier l\'externe.'],
            ['Problème', 'Défi à résoudre ?', 'Oublier le "Alors que".'],
            ['Positionnement', 'Image voulue ?', 'Oublier les 4 critères.'],
            ['Objectifs', 'Quoi obtenir ?', 'Oublier un des 3 niveaux.'],
            ['Cibles', 'À qui parler ?', 'Oublier les relais.'],
            ['Moyens', 'Quels canaux ?', 'Lister sans justifier.'],
            ['KPI', 'Comment mesurer ?', 'Déconnectés des moyens.']
          ]
        }
      }
    ]
  },
  {
    id: 'culture',
    title: 'Cultures de la Com',
    icon: '🎨',
    tag: 'Cultures',
    description: "Analyse des thèmes transversaux : La Rue, Le Repas, L'Excès.",
    sections: [
      {
        id: 'la-rue',
        title: "La Rue",
        badge: 'Séance 1',
        badgeColor: 'blue',
        content: {
          type: 'construction',
          text: 'Contenu en cours de construction — Bientôt disponible.'
        }
      },
      {
        id: 'le-repas',
        title: "Le Repas",
        badge: 'Séance 2',
        badgeColor: 'amber',
        content: {
          type: 'construction',
          text: 'Contenu en cours de construction — Bientôt disponible.'
        }
      },
      {
        id: 'exces',
        title: "L'Excès",
        badge: 'Séance 3',
        badgeColor: 'purple',
        content: {
          type: 'exces-full',
          subsections: [
            {
              id: 'philo',
              title: "I. L'Excès face à la Modération",
              type: 'grid',
              items: [
                {
                  title: 'Épicure (341-270 av. J.-C.)',
                  color: 'purple',
                  text: [
                    'Le bonheur = satisfaction des désirs naturels et nécessaires (manger, dormir, amitié).',
                    'La comm. crée des désirs artificiels (luxe, accumulation) qui mènent à la frustration.',
                    'La modération est la clé de la vie heureuse.',
                    "-> L'hyperconsommation promue par la pub est épicuriennement nuisible."
                  ]
                },
                {
                  title: "L'éthique en communication",
                  color: 'green',
                  text: [
                    'Recherche du juste, du beau et du vrai dans les discours.',
                    'Une communication éthique valorise la modération et la sollicitude.',
                    "Elle s'éloigne des discours démagogiques et manipulatoires.",
                    '-> Le but est de créer une vraie relation de confiance avec la cible.'
                  ]
                },
                {
                  title: "La Sagesse et l'Architecture",
                  color: 'blue',
                  text: [
                    "L'architecture religieuse magistrale sert à imposer le respect de la croyance par l'excès.",
                    'Ex. : La Chapelle Sixtine de Michel-Ange, ou la Sagrada Familia.',
                    '-> La démesure est utilisée comme outil de conviction.'
                  ]
                },
                {
                  title: 'Le paradoxe publicitaire',
                  color: 'amber',
                  text: [
                    "Les annonceurs utilisent l'excès formel (visuel choc, hyperbole) pour vanter un mode de vie équilibré.",
                    "Il n'y a pas de contradiction entre recourir à l'excès et prôner la modération.",
                    "Ex. L'excès est un moyen d'appuyer le discours, mais la finalité du message reste saine."
                  ]
                }
              ]
            },
            {
              id: 'pourquoi',
              title: "II. Pourquoi les marques ont-elles recours à l'excès ?",
              type: 'grid',
              items: [
                {
                  title: "Capter l'attention",
                  color: 'red',
                  text: [
                    "Économie de l'attention : chaque marque se bat pour exister dans un espace saturé.",
                    "L'excès permet de créer une rupture visuelle ou cognitive."
                  ]
                },
                {
                  title: 'Figures de style',
                  color: 'blue',
                  text: [
                    'Les communicateurs utilisent des procédés rhétoriques : amplification, exagération, hyperbole, répétition.',
                    'Le but est de marquer les esprits par une expressivité accrue.'
                  ]
                },
                {
                  title: 'Faire rêver',
                  color: 'amber',
                  text: [
                    'La mise en scène de la démesure (dorures, environnements grandioses).',
                    "Marques de luxe : utiliser l'excès pour créer l'illusion et rapprocher le produit du divin."
                  ]
                }
              ]
            },
            {
              id: 'campagnes',
              title: 'III. Campagnes de com emblématiques',
              type: 'cases',
              items: [
                {
                  brand: "DIOR × RIHANNA (J'ADORE) — 2024",
                  title: "L'excès divin et l'esthétique de l'or",
                  body: [
                    "1. La mise en scène historique : Le produit est mis en scène dans un environnement historique magistral (le château de Versailles). Le montage alterne des gros plans (sur les vêtements et accessoires), des travellings, des plans moyens montrant Rihanna, et des plans généraux sur le somptueux décor.",
                    "2. Le symbolisme des couleurs : Le spot est dominé par des couleurs chaudes et dorées, en lien direct avec la paronomase (Dior / J'adore / Or). Il crée une analogie entre le parfum et l'or (le parfum est littéralement montré dans un coffre-fort).",
                    "3. Rêve, illusion et sacré : La campagne établit un rapprochement fort entre le rêve et l'illusion. On y trouve une référence au Christ avec la scène de l'eau, puis l'apparition de Rihanna dans un encadrement illuminé. C'est une véritable apparition divine, traitée de manière sculpturale."
                  ],
                  tags: ['Luxe', 'Hyperbole visuelle', 'Références divines', "L'or"],
                  color: 'purple'
                },
                {
                  brand: 'JUST EAT — 2018 / 2019',
                  title: 'Le décalage temporel et la promesse absurde',
                  body: [
                    "La publicité joue sur un contraste temporel très fort : le spot se déroule à une époque ancienne, mais promet un service de livraison ultra-rapide en 2 secondes.",
                    "Cette promesse est délibérément absurde et trop exagérée. L'hyperbole temporelle ne cherche pas à être crédible de manière littérale, mais à marquer les esprits par l'humour absurde pour souligner la véritable force du service : sa rapidité."
                  ],
                  tags: ['Hyperbole', 'Humour absurde', 'Promesse exagérée', 'Mémorisation'],
                  color: 'amber'
                },
                {
                  brand: 'AGENCE BABEL ("FULLWASHING") — AVRIL 2021',
                  title: "La parodie pour dénoncer l'excès de mensonges",
                  body: [
                    "L'Agence Babel parodie les annonceurs qui mentent sur leurs images (via le greenwashing, pinkwashing, ou womanwashing).",
                    "Dans ce spot vidéo, ils inventent la fausse lessive \"Fullwashing\", présentée comme \"le premier discours de marque qui lave tout en 1\". C'est une campagne parodique (à visée humoristique et dénonciatrice) qui pointe du doigt les discours démagogiques des annonceurs. L'agence encourage ainsi une consommation et une communication responsables et mesurées."
                  ],
                  tags: ['Parodie', 'Dénonciation', 'Washing', 'Humour'],
                  color: 'teal'
                },
                {
                  brand: 'INTERFEL / FRUITS & LÉGUMES FRAIS — "JAMAIS TROP" (JUIN 2015 / AVRIL 2025)',
                  title: "Valoriser l'excès pour promouvoir la nature",
                  body: [
                    "La campagne utilise des images en accéléré qui produisent un effet d'accélération du temps. La succession extrêmement rapide de gros plans avec des mouvements de caméra rapides (travelling, panoramiques) crée un effet immersif et de vitesse.",
                    "La musique choisie est \"Just can't get enough\" de Depeche Mode, ce qui fait directement écho au slogan \"Jamais trop\". La campagne présente une esthétique très chargée et excentrique (décors, costumes et accessoires colorés façon années 70). La succession de séquences se conclut par la répétition du slogan, créant un effet cumulatif. L'excès formel est utilisé pour prouver qu'avec un produit sain, l'excès est positif."
                  ],
                  tags: ['Contre-pied', 'Répétition / Accumulation', 'Vitesse', 'Excès positif'],
                  color: 'green'
                }
              ]
            },
            {
              id: 'cas',
              title: "IV. Études de cas (Les types d'excès)",
              type: 'list',
              items: [
                {
                  title: '1. Le Shockvertising — Choquer pour alerter',
                  text: [
                    "Utiliser un choc émotionnel (image violente, injure) pour forcer une prise de conscience, souvent en prévention sanitaire ou routière.",
                    "Campagne étudiée : Ligue contre le Cancer (\"Va chier\")",
                    "Recours direct à l'injure au sens propre. L'impératif sert à exprimer un ordre, un conseil, voire une prière. C'est une manière de dépasser le tabou (le cancer colorectal, les toilettes) pour donner au dépistage un caractère plus sérieux et provoquer une réaction."
                  ]
                },
                {
                  title: '2. La Transgression — Repousser les limites',
                  text: [
                    "L'excès peut passer par des thématiques transgressives (l'intimité, le scatologique) pour paraître crédible et extraordinaire.",
                    "Référence étudiée : Gargantua de Rabelais",
                    "Dans Gargantua, les personnages sont des géants, ce qui permet un effet grossissant permanent. Rabelais utilise des sujets transgressifs et scatologiques, et l'onomastique (le jeu sur les noms comme Grandgousier) programme les appétits excessifs. Ce gigantisme et cet extra-ordinaire renforcent paradoxalement le côté crédible du récit."
                  ]
                },
                {
                  title: "3. La Parodie — Dénoncer par l'exagération",
                  text: [
                    "La parodie est une façon d'exagérer les traits et les défauts de manière excessive pour imiter une œuvre ou un comportement. Elle a une visée humoristique et comparative (dénonciation de l'hypocrisie des marques, comme dans la campagne Wero ou Agence Babel)."
                  ]
                }
              ]
            },
            {
              id: 'risques',
              title: "V. Risques et limites de l'excès",
              type: 'grid',
              items: [
                {
                  title: 'Tension et Malaise',
                  color: 'red',
                  text: [
                    "Un recours trop fort à l'excès peut créer une véritable tension et faire peur.",
                    "Il peut être associé à l'idée de débauche ou de surconsommation.",
                    "L'outrance peut être poussée jusqu'au dégoût (limite du shockvertising)."
                  ]
                },
                {
                  title: 'Questionnement moral',
                  color: 'amber',
                  text: [
                    "L'excès ne va pas forcément de pair avec la frugalité, l'équilibre et la mesure, pourtant attendus par les aspirations actuelles de la société.",
                    "Pour Montaigne, la vertu lorsqu'elle est appliquée avec excès se trouve corrompue et dénaturée."
                  ]
                },
                {
                  title: 'Le mauvais goût',
                  color: 'purple',
                  text: [
                    "Jusqu'où peut-on aller ? L'excès pose la question de la frontière entre le bon goût et le grotesque.",
                    "Le luxe ostentatoire des \"nouveaux riches\" (ex. Gatsby le Magnifique) montre que l'excès n'est pas forcément du côté du raffinement."
                  ]
                }
              ]
            }
          ]
        }
      }
    ]
  },
  {
    id: 'cejm',
    title: 'CEJM',
    icon: '⚖️',
    tag: 'Droit & Éco',
    description: "Culture Économique, Juridique et Managériale.",
    sections: [
      {
        id: 'methodologie',
        title: 'Méthodologie',
        badge: 'Outils',
        badgeColor: 'purple',
        content: {
          type: 'subsections',
          subsections: [
            {
              id: 'pestel',
              title: "1. L'Analyse de l'Environnement (PESTEL)",
              type: 'grid',
              items: [
                {
                  title: "Quand l'utiliser ?",
                  color: 'blue',
                  text: 'Dès que l\'on te demande d\'analyser le "macro-environnement", d\'identifier les facteurs externes qui influencent l\'entreprise ou de chercher des Opportunités et des Menaces.'
                },
                {
                  title: "La Méthode (6 dimensions)",
                  color: 'green',
                  text: [
                    "P (Politique) : Stabilité gouvernementale, politique fiscale, commerce extérieur.",
                    "E (Économique) : Croissance (PIB), taux d'intérêt, inflation, pouvoir d'achat.",
                    "S (Socioculturel) : Démographie, habitudes de consommation, niveau d'éducation.",
                    "T (Technologique) : Innovations, dépenses en R&D, nouveaux brevets.",
                    "E (Écologique) : Lois sur la protection de l'environnement, recyclage, consommation d'énergie.",
                    "L (Légal) : Droit du travail, droit de la consommation, normes de sécurité."
                  ]
                }
              ]
            },
            {
              id: 'swot',
              title: "2. Le Diagnostic Stratégique (SWOT / FFOM)",
              type: 'grid',
              items: [
                {
                  title: "Quand l'utiliser ?",
                  color: 'amber',
                  text: "C'est l'outil de synthèse par excellence. Il permet de croiser les capacités de l'entreprise avec son marché."
                },
                {
                  title: "Le Diagnostic Interne",
                  color: 'teal',
                  text: [
                    "Ce que l'entreprise contrôle :",
                    "• Forces : Atouts, savoir-faire, ressources financières solides, bonne image.",
                    "• Faiblesses : Manque de compétences, site web obsolète, faible notoriété."
                  ]
                },
                {
                  title: "Le Diagnostic Externe",
                  color: 'red',
                  text: [
                    "Ce que l'entreprise subit :",
                    "• Opportunités : Marché en croissance, nouvelles lois favorables (Loi AGEC), boom du e-commerce.",
                    "• Menaces : Arrivée d'un nouveau concurrent, hausse du prix des matières premières."
                  ]
                }
              ]
            },
            {
              id: 'syllogisme',
              title: "3. Le Raisonnement Juridique (Le Syllogisme)",
              type: 'grid',
              items: [
                {
                  title: "Quand l'utiliser ?",
                  color: 'blue',
                  text: 'Pour répondre à toute question de droit (Mission 1.3, 2.3 ou 3.3 du cas Gemdoubs par exemple). C\'est la structure qui garantit le maximum de points.'
                },
                {
                  title: "Les 5 étapes clés",
                  color: 'purple',
                  text: [
                    "1. Les Faits : Résumer la situation de manière qualifiée juridiquement (ne pas dire \"le monsieur\", mais \"le salarié\" ou \"le créancier\").",
                    "2. Le Problème de droit : Poser la question sous forme juridique (ex: \"L'employeur peut-il utiliser des images de vidéosurveillance sans informer le salarié ?\").",
                    "3. La Majeure (La Règle) : Citer les articles de loi ou les principes juridiques applicables (Code civil, Code du travail).",
                    "4. La Mineure (L'Application) : Vérifier si, dans le cas présent, les conditions de la loi sont remplies.",
                    "5. La Conclusion : Répondre clairement à la question posée."
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        id: 'annee1',
        title: '1ère Année',
        badge: 'L1',
        badgeColor: 'teal',
        content: { type: 'cejm-chapters', year: 'annee1' }
      },
      {
        id: 'annee2',
        title: '2ème Année',
        badge: 'L2',
        badgeColor: 'blue',
        content: { type: 'cejm-chapters', year: 'annee2' }
      }
    ]
  }
];
