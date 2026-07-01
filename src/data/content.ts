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
      title: "L'impact des mutations du travail sur l'emploi et les conditions de travail",
      tag: 'RH / Management',
      content: [
        {
          id: 'gepp',
          title: "I. Les actions appropriées dans le cadre d'une gestion des emplois et des parcours professionnels",
          type: 'grid',
          items: [
            {
              title: "🎯 1. La GEPP (gestion des emplois et des parcours professionnels)",
              color: 'blue',
              text: [
                "La GEPP a pour vocation d'analyser les écarts entre les ressources humaines disponibles et les besoins futurs. En fonction de cette analyse, des actions appropriées vont être mises en place :",
                "📈 Si les besoins sont supérieurs aux ressources : l'organisation pourra envisager de recruter, de favoriser la promotion interne ou de former ses salariés ;",
                "📉 Si les ressources sont supérieures aux besoins : il faudra envisager de réduire les effectifs, de proposer des mobilités internes ou de réduire le temps de travail."
              ]
            },
            {
              title: "⭐ 2. La gestion des talents",
              color: 'purple',
              text: [
                "La gestion des talents vise à bénéficier d'un avantage compétitif en valorisant l'unicité et les compétences de chaque collaborateur afin de gagner en souplesse et en réactivité.",
                "-> Elle doit également permettre d'attirer, de détecter et de fidéliser les talents."
              ]
            }
          ]
        },
        {
          id: 'motivation',
          title: "II. Identifier les leviers de la motivation",
          type: 'grid',
          items: [
            {
              title: "🛠️ 1. Définition et leviers de l'employeur",
              color: 'green',
              text: [
                "💡 La motivation se définit comme une force plus ou moins consciente qui pousse un salarié à s'impliquer dans son travail.",
                "Pour agir sur la motivation des salariés, l'employeur dispose d'un certain nombre de leviers :",
                "• 💰 la rémunération ;",
                "• 📈 l'épargne salariale ;",
                "• 🚀 la gestion des carrières ;",
                "• 🕒 l'aménagement du temps de travail ;",
                "• 🛡️ la stabilité de l'emploi."
              ]
            },
            {
              title: "🧠 2. Les grandes théories de la motivation",
              color: 'amber',
              text: [
                "🔺 Abraham Maslow présente cinq besoins que l'entreprise doit satisfaire pour motiver ses salariés : le besoin physiologique, le besoin de sécurité, le besoin d'appartenance, le besoin d'estime (ou de reconnaissance) et le besoin d'épanouissement personnel.",
                "⚖️ Dans sa théorie bifactorielle, Frederick Herzberg distingue deux types de facteurs qui influencent la satisfaction au travail :",
                "-> d'une part, les facteurs d'hygiène, qui concernent l'environnement du travail (le salaire, les conditions de travail, la sécurité) ; leur absence crée de l'insatisfaction, mais leur présence ne motive pas durablement.",
                "-> d'autre part, les facteurs de motivation (ou moteurs), qui sont liés au travail en lui-même (l'intérêt de la mission, l'autonomie, la reconnaissance) et qui génèrent une véritable satisfaction."
              ]
            },
            {
              title: "💻 3. Le cas des nouvelles générations : les Digital Natives",
              color: 'teal',
              text: [
                "📱 Les digital natives, également appelés « Millennials », sont les collaborateurs nés dans un environnement digitalisé. Leurs attentes diffèrent des générations précédentes : ils souhaitent travailler dans un environnement qui favorise les échanges et le développement individuel.",
                "-> Pour répondre à leurs attentes, les entreprises doivent s'adapter en proposant des modes de travail collaboratifs, le recours au télétravail et la mise en place d'un management participatif (où le salarié est impliqué dans les décisions)."
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
          title: "I. Identifier les différentes étapes d'une démarche d'analyse stratégique",
          type: 'grid',
          items: [
            {
              title: "📊 1-1 La démarche stratégique (Modèle LCAG)",
              color: 'blue',
              text: [
                "Dans les années 1960, quatre professeurs de la Harvard Business School (Learned, Christensen, Andrews et Guth) ont développé le modèle LCAG, qui propose une démarche stratégique en plusieurs étapes afin de déterminer les choix stratégiques d'une entreprise.",
                "Les étapes de la démarche stratégique sont :",
                "1️⃣ la réalisation du diagnostic stratégique,",
                "2️⃣ la fixation des objectifs stratégiques",
                "3️⃣ et la détermination de choix stratégiques pour atteindre les objectifs.",
                " ",
                "La démarche stratégique s'appuie sur un diagnostic stratégique externe (analyse des menaces et des opportunités présentes dans l'environnement général et concurrentiel) et un diagnostic stratégique interne (identification des forces et des faiblesses de l'entreprise).",
                "-> Ce double diagnostic stratégique s'effectue au moyen d'un outil d'aide à la décision, appelé « FFOM » (Forces / Faiblesses, Menaces / Opportunités) ou « SWOT » (Strengths / Weaknesses, Opportunities / Threats)."
              ]
            },
            {
              title: "🛤️ 1-2 Stratégie délibérée ou émergente",
              color: 'teal',
              text: [
                "La démarche stratégique n'est pas linéaire et subit les perturbations de l'environnement (Henry Mintzberg). On distingue la stratégie délibérée de la stratégie émergente :",
                "🎯 la stratégie délibérée est celle qui est voulue dès le départ et planifiée pour plusieurs années ;",
                "🌊 la stratégie émergente ne l'est pas, elle surgit au cours du temps en fonction des aléas de l'environnement."
              ]
            }
          ]
        },
        {
          id: 'diag-externe',
          title: "II. Présenter les principaux éléments d'un diagnostic externe de l'entreprise",
          type: 'grid',
          items: [
            {
              title: "🌍 2-1 L'environnement global (Outil PESTEL)",
              color: 'amber',
              text: [
                "L'environnement global est l'ensemble des éléments externes qui peuvent influencer l'activité de l'entreprise et sur lesquels elle a généralement peu d'influence.",
                "Appelé également « macro-environnement », il englobe les caractéristiques générales de l'économie et de la société.",
                "-> Ce diagnostic peut être réalisé à l'aide de l'outil PESTEL, qui prend en compte six dimensions factuelles : 🏛️ Politique, 📈 Économique, 👥 Socioculturel, 📱 Technologique, 🌱 Écologique et ⚖️ Légal."
              ]
            },
            {
              title: "🥊 2-2 Le Micro-environnement (Les 5 forces de Porter)",
              color: 'red',
              text: [
                "Pour apprécier les forces concurrentielles en présence sur un marché donné (l'environnement proche de l'entreprise), on utilise le modèle des cinq forces concurrentielles proposé par Michael Porter. Ces forces qui exercent une pression sont :",
                "⚔️ Les concurrents directs : Déjà en place, ils sont rivaux car ils proposent des produits identiques.",
                "🚪 Les concurrents potentiels (nouveaux entrants) : Ils pourraient entrer sur le marché s'il n'est pas protégé et venir concurrencer les entreprises en place.",
                "🔄 Les concurrents indirects (produits de substitution) : Ils proposent des produits différents en apparence, mais qui répondent à un besoin des consommateurs identique.",
                "🛒 Les fournisseurs : Ils peuvent détenir un pouvoir de négociation important sur l'entreprise s'ils sont puissants, concentrés et incontournables.",
                "💳 Les clients : Ils peuvent détenir un pouvoir de négociation important sur l'entreprise s'ils sont puissants et organisés, pesant ainsi sur les prix ou la qualité."
              ]
            },
            {
              title: "🗝️ 2-3 Les Facteurs Clés de Succès (FCS)",
              color: 'purple',
              text: [
                "Le diagnostic externe permet de repérer les facteurs clés de succès (FCS) à maîtriser impérativement sur un marché. Un FCS est un élément essentiel qui garantit le succès d'une entreprise dans un domaine donné.",
                "Il peut s'agir d'une qualité comme l'agilité, d'une caractéristique du produit comme le prix, l'image ou les fonctionnalités, d'une compétence comme un savoir-faire technologique, ou d'une relation avec des tiers comme la fidélisation client.",
                "-> Il doit répondre spécifiquement aux besoins du marché tout en constituant une ressource ou une force exploitable par l'entreprise."
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
              title: "💎 1. La théorie des ressources (Edith Penrose, 1959)",
              color: 'green',
              text: [
                "Il évalue la capacité intrinsèque de l'entreprise à affronter son marché. La théorie définit la firme comme un ensemble de ressources dont le succès résulte de sa capacité à mobiliser et exploiter des ressources clés ou spécifiques, c'est-à-dire celles qui vont créer de la valeur et qui sont rares.",
                "Les ressources détenues peuvent être de différentes natures :",
                "📦 Tangibles : Ressources matérielles, financières, humaines et physiques.",
                "✨ Intangibles : Ressources immatérielles comme les capacités organisationnelles, technologiques et réputationnelles (image de marque)."
              ]
            },
            {
              title: "🧠 2. La théorie des compétences (Gary Hamel et C.K. Prahalad, 1993)",
              color: 'blue',
              text: [
                "Une compétence correspond à ce que sait faire l'entreprise avec ses ressources ; c'est la manière de les combiner qui va leur donner de la valeur.",
                "-> Les compétences deviennent fondamentales ou distinctives si elles permettent à l'entreprise de se différencier de façon stratégique de ses concurrents.",
                "Elles contribuent à un avantage concurrentiel durable en permettant de gagner en qualité, flexibilité et rapidité d'exécution grâce à une expertise, en facilitant l'accès à un grand nombre de marchés via le management des marques ou la distribution, ou en distinguant le produit par son caractère unique et innovant."
              ]
            },
            {
              title: "🔗 3. La chaîne de valeur (Michael Porter, 1985)",
              color: 'amber',
              text: [
                "Cet outil représente l'entreprise comme un enchaînement d'activités, en distinguant les activités principales (qui touchent directement au produit : logistique, production, vente) des activités de soutien (qui viennent en appui : RH, achats, infrastructures).",
                "• Le but : Repérer les activités qui génèrent le plus de valeur pour le client final, et identifier celles qui ne créent pas de valeur et génèrent uniquement des coûts.",
                "• La décision : Il s'agit alors de se concentrer sur les activités génératrices de valeur, tandis que pour les secondes, se pose la question stratégique de les conserver en interne ou de les externaliser (sous-traiter).",
                "-> Les activités et les liens entre ces activités qui génèrent le plus de valeur vont constituer l'avantage concurrentiel de l'entreprise, sa source de différenciation par rapport à la concurrence."
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
    description: "Fiches de révision pour le Bloc 01.",
    sections: [
      {
        id: 'plan',
        title: 'Plan de Communication',
        badge: 'D·P·P·O·C·M·B·K',
        badgeColor: 'blue',
        description: "Les 8 étapes du plan de com + le Brief Créatif",
        content: {
          type: 'subsections',
          subsections: [
            {
              id: 'recap',
              title: '🗝️ Mémo D·P·P·O·C·M·B·K',
              type: 'table',
              headers: ['Lettre', 'Étape', 'Question clé', 'Piège à éviter'],
              rows: [
                ['D', 'Diagnostic (SWOT)', 'Où en est-on ?', "Oublier l'analyse externe (PESTEL)."],
                ['P', 'Problème de com', 'Quel défi à résoudre ?', 'Oublier le « alors que » (le frein).'],
                ['P', 'Positionnement', 'Quelle image voulue ?', 'Oublier un des 4 critères CDAD.'],
                ['O', 'Objectifs (SMART)', 'Quoi obtenir ?', 'Oublier un des 3 niveaux CAC.'],
                ['C', 'Cibles', 'À qui parler ?', 'Oublier les cibles relais et interne.'],
                ['M', 'Moyens (POEM)', 'Quels canaux ?', 'Lister sans justifier par rapport à la cible.'],
                ['B', 'Budget', 'Combien ça coûte ?', 'Ne pas ventiler (répartir) le budget.'],
                ['K', 'KPI & Bilan', 'Comment mesurer ?', 'KPI déconnectés des objectifs fixés.']
              ]
            },
            {
              id: 'swot',
              title: '📊 Étape 1 — La Matrice SWOT',
              type: 'grid',
              items: [
                {
                  title: '💪 Forces (interne)',
                  color: 'green',
                  text: [
                    "Atouts, savoir-faire distinctifs, notoriété.",
                    "Image de marque positive, budget fort.",
                    "-> Ce que l'organisation maîtrise et qui lui donne un avantage."
                  ]
                },
                {
                  title: '⚠️ Faiblesses (interne)',
                  color: 'red',
                  text: [
                    "Points faibles internes : site obsolète, budget nul.",
                    "Image vieillissante, manque de compétences.",
                    "-> Ce qui freine l'organisation de l'intérieur."
                  ]
                },
                {
                  title: '🌟 Opportunités (externe)',
                  color: 'blue',
                  text: [
                    "Tendances favorables du marché, croissance du e-commerce.",
                    "Nouveaux besoins des cibles, lois favorables.",
                    "-> Ex : L'essor de Pinterest/Instagram pour une marque mode."
                  ]
                },
                {
                  title: '🚨 Menaces (externe)',
                  color: 'amber',
                  text: [
                    "Concurrents agressifs, crise économique, inflation.",
                    "Saturation médiatique, nouvelles réglementations.",
                    "-> Ex : Concurrence internationale à bas coût."
                  ]
                }
              ]
            },
            {
              id: 'pestel',
              title: "🌍 L'Analyse PESTEL (Macro-environnement)",
              type: 'grid',
              items: [
                { title: '🏛️ P — Politique', color: 'purple', text: ["Stabilité de l'État, aides gouvernementales, politique fiscale."] },
                { title: '📈 E — Économique', color: 'blue', text: ["Inflation, pouvoir d'achat, taux d'intérêt, croissance (PIB)."] },
                { title: '👥 S — Socioculturel', color: 'teal', text: ["Modes de vie, valeurs culturelles, tendances de consommation, démographie."] },
                { title: '📱 T — Technologique', color: 'green', text: ["Innovations, IA, réseaux sociaux, brevets, dépenses en R&D."] },
                { title: '🌱 E — Environnemental', color: 'green', text: ["Écologie, météo, normes environnementales, recyclage."] },
                { title: '⚖️ L — Légal', color: 'red', text: ["Lois, RGPD, droit du travail, normes de sécurité, Loi AGEC.", "-> Ex : Loi interdisant les emballages plastiques = menace pour une marque d'eau, opportunité pour une marque de gourdes."] }
              ]
            },
            {
              id: 'probleme',
              title: '💬 Étape 2 — Le Problème de com',
              type: 'formula',
              formula: "« Comment [objectif / ambition] alors que [obstacle / frein / préjugé] ? »",
              examples: [
                { label: 'Exemple — Reconditionnement B2B', text: "« Comment faire de Recyclea LA référence du reconditionnement B2B alors que les entreprises ont une image vieillotte et méfiante du reconditionné ? »" },
                { label: 'Exemple — Formation artisanale', text: "« Comment informer et inciter des jeunes à intégrer un centre de formation artisanal, alors que l'artisanat est perçu comme peu attractif et peu lucratif ? »" },
                { label: 'Exemple — Culture / Spectacle', text: "« Comment attirer les jeunes vers l'opéra, alors que cette musique est perçue comme élitiste et chère ? »" }
              ],
              tip: "Le 'comment' = ton objectif de communication. Le 'alors que' = le frein principal tiré directement de ton SWOT (souvent une faiblesse ou une menace)."
            },
            {
              id: 'positionnement',
              title: '📍 Étape 3 — Le Positionnement',
              type: 'grid',
              items: [
                { title: '✅ Crédible', color: 'blue', text: "La promesse est réaliste et justifiée by des preuves réelles (Labels, prix, ancienneté, certifications)." },
                { title: '🎯 Distinctif', color: 'green', text: "L'offre se démarque clairement des concurrents. Avantage unique, différent de la concurrence." },
                { title: '💡 Attractif', color: 'amber', text: "Répond à un besoin réel ou une attente forte de la cible. Donne envie." },
                { title: '⏳ Durable', color: 'red', text: "Peut être maintenu et défendu sur le long terme. Pas un simple effet de mode." }
              ],
              formula: "« [La marque] se positionne comme [image souhaitée] pour [cible précise], grâce à [preuve / différenciation]. »"
            },
            {
              id: 'cac',
              title: '🎯 Étape 4 — Les Objectifs (CAC & SMART)',
              type: 'grid',
              items: [
                {
                  title: '🧠 Cognitif — Faire SAVOIR',
                  color: 'blue',
                  text: [
                    "Informer, faire connaître, développer la notoriété.",
                    "-> Ex : « Augmenter la notoriété de la marque de 15% »"
                  ]
                },
                {
                  title: '❤️ Affectif — Faire AIMER',
                  color: 'green',
                  text: [
                    "Modifier l'image, créer de la sympathie, moderniser.",
                    "-> Ex : « Rajeunir l'image de marque »"
                  ]
                },
                {
                  title: '⚡ Conatif — Faire AGIR',
                  color: 'amber',
                  text: [
                    "Pousser à l'achat, à l'inscription, à l'action.",
                    "-> Ex : « Générer 200 leads qualifiés »"
                  ]
                }
              ]
            },
            {
              id: 'smart',
              title: '📏 Les critères SMART',
              type: 'grid',
              items: [
                { title: '🔎 S — Spécifique', color: 'blue', text: "Précis, pas vague. On sait exactement ce qu'on veut atteindre." },
                { title: '📊 M — Mesurable', color: 'green', text: "On peut le quantifier et le vérifier avec des chiffres." },
                { title: '✅ A — Atteignable', color: 'teal', text: "Réaliste avec les ressources et le budget disponibles." },
                { title: '🌍 R — Réaliste', color: 'amber', text: "Cohérent avec le marché et la situation actuelle." },
                { title: '⏱️ T — Temporel', color: 'red', text: "Défini dans le temps, avec une date butoir claire." }
              ]
            },
            {
              id: 'cibles',
              title: '👥 Étape 5 — Les Cibles',
              type: 'table',
              headers: ['Type de cible', 'Définition', 'Exemple BTS'],
              rows: [
                ['Cible principale', 'Le groupe global visé par la campagne.', 'DSI et DAF des PME de 50 à 500 salariés.'],
                ['Cœur de cible', 'La fraction la plus rentable et prioritaire.', 'DSI des PME tech de 100 à 300 salariés.'],
                ['Cible secondaire', 'Complémentaire, peut influencer les décisions.', 'Responsables RSE, Directeurs Généraux.'],
                ['Cible relais', 'Prescripteurs qui relaient le message.', 'Influenceurs tech, journalistes IT, partenaires.'],
                ['Cible interne', "Les salariés — premiers ambassadeurs de la marque.", 'Commerciaux, équipes terrain, managers.']
              ],
              extra: {
                title: "Motivations & Freins de la cible",
                items: [
                  { label: 'Motivations', color: 'green', list: ["Gain de temps et d'efficacité", "Image innovante et responsable", "Rapport qualité/prix avantageux", "Accompagnement et SAV de qualité"] },
                  { label: 'Freins', color: 'red', list: ["Méfiance envers le reconditionné", "Peur du risque et des pannes", "Habitudes d'achat (neuf uniquement)", "Manque de visibilité de la marque"] }
                ]
              }
            },
            {
              id: 'moyens',
              title: '🛠️ Étape 6 — Les Moyens (POEM)',
              type: 'grid',
              items: [
                {
                  title: '💰 Paid Media — Espace acheté',
                  color: 'red',
                  text: [
                    'Pub TV, Display, Google Ads, posts sponsorisés LinkedIn.',
                    'Influence rémunérée (partenariats payants).',
                    '-> On paie pour diffuser le message.'
                  ]
                },
                {
                  title: "🏠 Owned Media — Ce qu'on possède",
                  color: 'blue',
                  text: [
                    'Site web, réseaux sociaux (organique), newsletter, brochures.',
                    'Blog, application mobile, stand salon.',
                    '-> On contrôle totalement ces espaces.'
                  ]
                },
                {
                  title: "🌱 Earned Media — Ce qu'on gagne gratuitement",
                  color: 'green',
                  text: [
                    'Articles de presse, partages, avis clients, bouche-à-oreille.',
                    'Retombées RP, mentions spontanées sur les réseaux.',
                    '-> Pas maîtrisable, mais très crédible.'
                  ]
                },
                {
                  title: '📺 Médias classiques',
                  color: 'purple',
                  text: ['Affichage, Presse, Radio, TV, Cinéma, Internet.']
                },
                {
                  title: '🎯 Hors-médias',
                  color: 'teal',
                  text: [
                    'Édition, Marketing direct, Événementiel, RP, Influence, Mécénat.',
                    '-> Astuce : Justifie toujours tes choix de moyens par rapport à la cible !'
                  ]
                }
              ]
            },
            {
              id: 'budget',
              title: '💰 Étape 7 — Le Budget',
              type: 'list',
              items: [
                {
                  title: "📺 Achat d'espace (Paid Media)",
                  text: "La part la plus importante. Réserver des espaces publicitaires : TV, display, réseaux sociaux sponsorisés, Google Ads."
                },
                {
                  title: '🎨 Production créative',
                  text: "Coûts de l'agence, du graphiste, de la vidéo, de la photographie. La création du contenu."
                },
                {
                  title: '🎪 Événementiel et salons',
                  text: 'Location de stand, scénographie, logistique, déplacements, animations.'
                },
                {
                  title: '💻 Outils numériques',
                  text: "Logiciels (Adobe, Canva Pro), plateformes d'emailing, CRM, abonnements SaaS."
                },
                {
                  title: '📊 Mesure et analyse (KPI)',
                  text: 'Outils de tracking, études de notoriété, sondages post-campagne, tableaux de bord.'
                }
              ]
            },
            {
              id: 'kpi',
              title: '📈 Étape 8 — KPIs & Bilan',
              type: 'table',
              headers: ['Objectif (CAC)', 'Indicateurs (KPI) à mesurer'],
              rows: [
                ['🧠 Cognitif', 'Impressions, Visiteurs uniques, Taux de notoriété, Référencement SEO.'],
                ['❤️ Affectif', "Taux d'engagement, Followers, NPS (Net Promoter Score), Sentiment analysis."],
                ['⚡ Conatif', 'Taux de conversion, Panier moyen, CPA (Coût par Acquisition), CTR, CA généré.'],
                ['📍 Physique', 'Taux de visite tracé (QR code), Entrées en magasin, Trafic en point de vente.'],
                ['📰 RP', "Nombre de retombées presse, Audience cumulée, EAP (Équivalent Achat Publicitaire)."]
              ]
            },
            {
              id: 'brief',
              title: '🎨 Le Brief Créatif',
              type: 'list',
              items: [
                {
                  title: "🎯 La Promesse",
                  text: "L'idée centrale à faire passer. C'est l'axe de communication principal de la campagne (le bénéfice client). Ex : « Recyclea, le choix responsable et intelligent »."
                },
                {
                  title: '⭐ La Preuve (Reason Why)',
                  text: "Ce qui rend la promesse crédible et realistic auprès des cibles. Ex : L'ancienneté, les labels environnementaux (RSE), l'expertise technique, des garanties ou certifications."
                },
                {
                  title: '💬 Le Ton',
                  text: "Le registre et l'ambiance de la communication. Ex : Institutionnel, décalé, humoristique, rassurant ou moderne."
                },
                {
                  title: '🛡️ Les Contraintes',
                  text: "Toutes les limites imposées par la loi (ex: RGPD, Loi Toubon) ou par l'annonceur lui-même (ex: charte graphique, budget strict)."
                }
              ]
            }
          ]
        }
      },
      {
        id: 'legal',
        title: 'Le Cadre Légal',
        badge: 'Lois & Règles',
        badgeColor: 'red',
        description: "Toutes les lois à connaître avec leurs obligations et exemples de justification en copie.",
        content: {
          type: 'subsections',
          subsections: [
            {
              id: 'loi-toubon',
              title: "1️⃣ Loi Toubon (1994) — La langue française",
              type: 'grid',
              items: [
                {
                  title: "Obligations principales",
                  color: 'red',
                  text: [
                    "Le français est obligatoire dans tout message publicitaire diffusé en France.",
                    "Exceptions : noms de marques déposées, slogans déposés de marque, produits typiques étrangers."
                  ]
                },
                {
                  title: "Exemple & Astuce de rédaction en copie",
                  color: 'blue',
                  text: [
                    "Exemple : Une pub avec « Just Do It » est autorisée (signature déposée Nike). Mais « Our products are the best » sans traduction française en bas serait illégale.",
                    "-> En copie : « Conformément à la loi Toubon, tous les messages de notre campagne seront rédigés en français. »"
                  ]
                }
              ]
            },
            {
              id: 'loi-evin',
              title: "2️⃣ Loi Évin (1991) — Alcool & Tabac",
              type: 'table',
              headers: ['Produit', 'Ce qui est interdit', 'Ce qui est autorisé'],
              rows: [
                ['Tabac', 'Toute publicité, parrainage ou mécénat sans exception.', 'Rien. Interdiction totale.'],
                ['Alcool', 'TV, cinéma, affichage pour les mineurs, parrainage sportif.', "Presse adulte, radio (certaines tranches), internet (avec barrière d'âge) + message sanitaire obligatoire."]
              ],
              extra: {
                title: "Exemple & Rédaction à l'examen",
                items: [
                  {
                    label: "Exemple d'application",
                    color: 'red',
                    list: [
                      "Une marque de bière ne peut pas faire de spot TV en France.",
                      "Elle peut faire une campagne presse adulte avec la mention obligatoire : « L'abus d'alcool est dangereux pour la santé, à consommer avec modération. »"
                    ]
                  },
                  {
                    label: "Formule pour la copie",
                    color: 'green',
                    list: [
                      "En copie : « Ce support n'étant pas autorisé pour l'alcool par la loi Évin, nous optons pour un encart dans la presse spécialisée adulte. »"
                    ]
                  }
                ]
              }
            },
            {
              id: 'droit-auteur',
              title: "3️⃣ Droit d'auteur & Contrefaçon",
              type: 'grid',
              items: [
                {
                  title: "Règles d'utilisation des œuvres",
                  color: 'red',
                  text: [
                    "Toute utilisation d'une œuvre (photo, musique, texte, logo) sans autorisation écrite préalable = délit de contrefaçon.",
                    "Les personnes représentées dans une publicité doivent signer un accord écrit (droit à l'image).",
                    "Le droit à la vie privée est protégé : pas de diffusion de photos d'un lieu privé ou d'une personne sans accord."
                  ]
                },
                {
                  title: "Astuce examen",
                  color: 'green',
                  text: [
                    "-> En copie : « Toutes les illustrations et photos utilisées seront libres de droits ou achetées. Les figurants auront préalablement signé une autorisation de droit à l'image. »"
                  ]
                }
              ]
            },
            {
              id: 'rgpd',
              title: "4️⃣ RGPD (2018) — Protection des données",
              type: 'grid',
              items: [
                {
                  title: "Principes fondamentaux & Risques",
                  color: 'red',
                  text: [
                    "Toute collecte de données personnelles nécessite le consentement explicite de l'utilisateur (Opt-in).",
                    "Les personnes disposent d'un droit d'accès, de rectification et d'effacement de leurs données (droit à l'oubli).",
                    "Les bases de données doivent être documentées (Registre des traitements).",
                    "Amendes maximales : jusqu'à 4% du chiffre d'affaires mondial."
                  ]
                },
                {
                  title: "Exemple & Justification en copie",
                  color: 'blue',
                  text: [
                    "Exemple : Lors d'une campagne emailing, on ne peut envoyer des courriels qu'aux contacts ayant explicitement consenti à recevoir nos offres.",
                    "-> En copie : « Conformément au RGPD, notre campagne d'emailing ne ciblera que des contacts ayant donné leur consentement préalable et explicite (opt-in). »"
                  ]
                }
              ]
            },
            {
              id: 'arpp',
              title: "5️⃣ Recommandations ARPP — Publicité responsable",
              type: 'grid',
              items: [
                {
                  title: "Déontologie publicitaire",
                  color: 'red',
                  text: [
                    "L'ARPP fixe les règles de bonne conduite de la publicité en France.",
                    "Interdit : stéréotypes sexistes, dégradants, violents ou discriminatoires.",
                    "Interdit : le greenwashing = alléguer des vertus écologiques mensongères ou disproportionnées.",
                    "Obligation : toute allégation environnementale doit être étayée par des preuves objectives."
                  ]
                },
                {
                  title: "Mise en garde RSE & Rédaction",
                  color: 'amber',
                  text: [
                    "Attention : Le greenwashing est sévèrement sanctionné. Si la campagne mentionne un argument écologique, des labels certifiés ou des données chiffrées claires doivent servir de preuves.",
                    "-> En copie : « Conformément aux recommandations de l'ARPP, notre discours environnemental s'appuiera sur des données certifiées et vérifiables. »"
                  ]
                }
              ]
            },
            {
              id: 'secteurs',
              title: "Autres réglementations sectorielles",
              type: 'table',
              headers: ["Secteur d'activité", 'Obligation légale spécifique'],
              rows: [
                ['Médicaments', "Autorisation obligatoire de l'ANSM requise avant toute campagne publicitaire."],
                ['Alimentation', 'Mentions sanitaires obligatoires (ex : « Pour votre santé, mangez au moins cinq fruits et légumes par jour ») sous peine de taxe.'],
                ['Crédit à la consommation', 'Affichage obligatoire et lisible du TAEG (Taux Annuel Effectif Global), de la durée et de la mention « Un crédit vous engage et doit être remboursé ».'],
                ['Publicité comparative', 'Doit porter sur des caractéristiques essentielles, objectives, vérifiables et représentatives. Ne doit pas être trompeuse.'],
                ['Énergies fossiles', 'Publicité totalement interdite depuis 2023 pour les carburants fossiles.']
              ]
            },
            {
              id: 'regulation',
              title: "Organismes de Contrôle & Régulation",
              type: 'list',
              items: [
                {
                  title: "ARCOM (ex-CSA & Hadopi)",
                  text: "Régule les médias audiovisuels et numériques (TV, radio, internet). Veille au respect des règles de diffusion."
                },
                {
                  title: "ARPP (Autorité de Régulation Professionnelle de la Publicité)",
                  text: "Organisme d'autorégulation géré par les professionnels pour assurer une publicité saine et déontologique."
                },
                {
                  title: "DGCCRF",
                  text: "Organisme d'État qui contrôle et sanctionne les fraudes (pratiques commerciales trompeuses, publicité mensongère)."
                }
              ]
            }
          ]
        }
      },
      {
        id: 'veille',
        title: 'Veille & Outils',
        badge: 'Outils',
        badgeColor: 'teal',
        description: "Quel outil choisir et pourquoi — comment argumenter en examen.",
        content: {
          type: 'subsections',
          subsections: [
            {
              id: 'veille-definition',
              title: "💡 Pourquoi faire de la veille ?",
              type: 'grid',
              items: [
                {
                  title: "L'utilité stratégique",
                  color: 'green',
                  text: [
                    "La veille informationnelle et concurrentielle permet de capter les signaux du marché, d'analyser la concurrence, de suivre l'e-reputation de la marque et de mesurer l'efficacité de ses campagnes.",
                    "-> C'est le point de départ indispensable pour réaliser le diagnostic (Étape 1 du plan de com)."
                  ]
                }
              ]
            },
            {
              id: 'analyse',
              title: "📊 Outils d'Analyse d'Audience Web & UX",
              type: 'grid',
              items: [
                {
                  title: "Google Analytics & Adobe Analytics",
                  color: 'blue',
                  text: [
                    "Google Analytics : Mesure l'audience et le trafic d'un site web (nombre de visiteurs, origine, taux de rebond). Gratuit.",
                    "-> Justification : « Nous utiliserons Google Analytics pour mesurer le taux de rebond et le parcours des visiteurs sur notre landing page. »",
                    "Adobe Analytics : Version payante entreprise, offrant une segmentation de données très fine et une attribution multi-touch."
                  ]
                },
                {
                  title: "Matomo & Hotjar",
                  color: 'green',
                  text: [
                    "Matomo : Outil d'analyse d'audience web hébergé en interne, 100% respectueux du RGPD (recommandé pour les administrations et les marques éthiques).",
                    "-> Justification : « Nous choisissons Matomo car il garantit que les données de nos utilisateurs restent locales et conformes au RGPD. »",
                    "Hotjar : Cartes de chaleur (heatmaps) et enregistrements de sessions pour analyser le comportement visuel et l'ergonomie (UX) des pages."
                  ]
                }
              ]
            },
            {
              id: 'medias',
              title: "📺 Outils de Mesure des Médias Traditionnels",
              type: 'grid',
              items: [
                {
                  title: "Médiamétrie (Médiamat)",
                  color: 'purple',
                  text: [
                    "Mesure de référence de l'audience de la télévision et de la radio en France. Fournit la PDA (Part d'Audience) et la durée d'écoute.",
                    "-> Justification : « D'après les mesures Médiamétrie, la tranche horaire choisie bénéficie d'une forte part d'audience auprès de notre cible active. »"
                  ]
                },
                {
                  title: "Kantar Media & Kantar Sofres",
                  color: 'amber',
                  text: [
                    "Kantar Media : Calcule la pression publicitaire (les budgets investis par les concurrents dans chaque média).",
                    "Kantar Sofres / BVA : Instituts de sondage réalisant des études d'opinion quantitatives et qualitatives (notoriété, image, satisfaction)."
                  ]
                }
              ]
            },
            {
              id: 'planning',
              title: "📅 Outils de Gestion & Planification Social Media",
              type: 'grid',
              items: [
                {
                  title: "Hootsuite & Buffer",
                  color: 'blue',
                  text: [
                    "Hootsuite : Tableau de bord centralisé pour programmer des publications sur plusieurs réseaux sociaux et mesurer l'engagement.",
                    "Buffer : Solution plus simple et accessible, idéale pour la planification rapide de posts et l'analyse d'impact."
                  ]
                },
                {
                  title: "Sprout Social",
                  color: 'teal',
                  text: [
                    "Plateforme avancée intégrant un CRM pour réseaux sociaux, la gestion des messages entrants et le social listening."
                  ]
                }
              ]
            },
            {
              id: 'emailing',
              title: "📧 Outils de Campagnes d'Emailing",
              type: 'grid',
              items: [
                {
                  title: "Mailchimp & ActiveCampaign",
                  color: 'amber',
                  text: [
                    "Mailchimp : Leader mondial pour la création de newsletters, la segmentation simple d'abonnés et les tests A/B.",
                    "ActiveCampaign : Plateforme de marketing automation pour programmer des scénarios d'emailing complexes en fonction des actions clients."
                  ]
                },
                {
                  title: "Brevo (ex-Sendinblue)",
                  color: 'green',
                  text: [
                    "Solution française intégrant emails, SMS et CRM. Conforme au RGPD, idéale pour les entreprises européennes et le B2B.",
                    "-> Justification : « Nous utiliserons Brevo pour notre campagne d'acquisition B2B pour garantir la conformité RGPD et l'hébergement en Europe. »"
                  ]
                }
              ]
            },
            {
              id: 'veille-info',
              title: "📰 Outils de Veille Informationnelle & Réputation",
              type: 'grid',
              items: [
                {
                  title: "Feedly & Google Alerts",
                  color: 'purple',
                  text: [
                    "Feedly : Outil de centralisation de flux RSS pour s'informer en continu sur son secteur.",
                    "Google Alerts : Outil gratuit pour surveiller l'apparition de mots-clés ou du nom de la marque sur le web."
                  ]
                },
                {
                  title: "Mention & Talkwalker",
                  color: 'red',
                  text: [
                    "Surveillent en temps réel l'e-réputation de la marque sur tous les supports du web et les réseaux sociaux."
                  ]
                }
              ]
            },
            {
              id: 'choix-examen',
              title: "🎓 Comment choisir un outil à l'examen ?",
              type: 'list',
              items: [
                { title: "Trafic et comportement web", text: "Google Analytics (classique) ou Matomo (RGPD / Public)." },
                { title: "Audience Télévision ou Radio", text: "Médiamétrie (PDA, audimat)." },
                { title: "Surveillance de la concurrence", text: "Kantar Media (pression publicitaire)." },
                { title: "Newsletter et Emailing marketing", text: "Mailchimp (classique) ou Brevo (B2B, RGPD)." },
                { title: "Gestion et publication réseaux sociaux", text: "Hootsuite (complet) ou Buffer (simple)." },
                { title: "Veille et e-réputation", text: "Feedly (RSS) et Mention (social listening)." }
              ]
            }
          ]
        }
      },
      {
        id: 'acteurs',
        title: 'Les Acteurs',
        badge: 'Acteurs',
        badgeColor: 'purple',
        description: "Qui mobiliser selon la campagne et comment justifier tes choix.",
        content: {
          type: 'subsections',
          subsections: [
            {
              id: 'annonceur',
              title: "🏢 Les acteurs côté Annonceur (L'entreprise)",
              type: 'grid',
              items: [
                {
                  title: "Direction Marketing & Chef de Projet",
                  color: 'blue',
                  text: [
                    "Direction Marketing / Communication : Fixe la stratégie, alloue les budgets et valide les créations finales.",
                    "Chef de Projet / Traffic Manager : Coordonne la campagne au quotidien, gère le planning et fait le lien avec les agences."
                  ]
                },
                {
                  title: "Chargé d'Études & Community Manager",
                  color: 'green',
                  text: [
                    "Chargé d'Études : Réalise les études de marché, analyse les cibles et configure la veille.",
                    "Community Manager : Publie, répond aux internautes et gère l'animation des communautés sur les réseaux."
                  ]
                }
              ]
            },
            {
              id: 'agence',
              title: "🎨 Les acteurs côté Agence (Les prestataires)",
              type: 'grid',
              items: [
                {
                  title: "Agence 360° & Agence Digitale",
                  color: 'purple',
                  text: [
                    "Agence de Communication (360°) : Prise en charge globale de la stratégie et de la création sur tous les canaux.",
                    "Agence Digitale : Spécialiste du développement web, du référencement (SEO/SEA) et du marketing numérique."
                  ]
                },
                {
                  title: "Le Binôme Créatif",
                  color: 'red',
                  text: [
                    "Directeur Artistique (DA) : Traduit le brief en concepts visuels (images, vidéos, chartes graphiques).",
                    "Concepteur-Rédacteur : Écrit les slogans, les textes de pub et les accroches rédactionnelles."
                  ]
                },
                {
                  title: "Régie Publicitaire & Imprimeur",
                  color: 'amber',
                  text: [
                    "Régie Publicitaire : Commercialise les espaces pub des médias (ex: régies de chaînes TV ou de sites web).",
                    "Imprimeur : Réalise le façonnage et le tirage physique des supports de com (affiches, brochures, flyers)."
                  ]
                }
              ]
            },
            {
              id: 'relais',
              title: "📣 Les acteurs Relais (Les prescripteurs)",
              type: 'grid',
              items: [
                {
                  title: "Journalistes, Attachés de presse & RP",
                  color: 'blue',
                  text: [
                    "Relaient les messages de la marque dans la presse écrite, radio ou TV à travers des articles ou reportages non payés."
                  ]
                },
                {
                  title: "Influenceurs & Créateurs de contenu",
                  color: 'teal',
                  text: [
                    "Relaient la campagne auprès de leurs communautés ciblées sur Instagram, TikTok, LinkedIn ou YouTube."
                  ]
                }
              ]
            },
            {
              id: 'mobilisation',
              title: "🎓 Synthèse : Qui mobiliser selon la campagne ?",
              type: 'table',
              headers: ['Type de campagne', 'Acteurs clés à mobiliser'],
              rows: [
                ['Lancement grand public', "Agence 360° (stratégie multi-canal), Binôme créatif (DA + Rédacteur), Régie publicitaire (achat d'espace TV/affichage), RP & Journalistes (relations presse), Influenceurs."],
                ['Campagne B2B (ex: Recyclea)', "Agence digitale (SEO/SEA/site web), Community Manager (animation LinkedIn), Agence RP spécialisée, Chargé d'études."],
                ['Événement / Salon', "Agence événementielle (scénographie, logistique), Chef de projet (coordination), Imprimeur (supports print)."],
                ['Campagne emailing', "Community Manager, Agence digitale (conception du template), Responsable RGPD."],
                ['Relations presse', "Attaché de presse, Journalistes ciblés, Rédacteur (communiqué de presse)."]
              ],
              extra: {
                title: "Méthode pour l'examen",
                items: [
                  {
                    label: "La Règle d'Or",
                    color: 'red',
                    list: [
                      "Dans votre copie, ne vous contentez pas de lister les acteurs.",
                      "Vous devez justifier de manière logique pourquoi chaque acteur est nécessaire au projet."
                    ]
                  },
                  {
                    label: "Exemple de phrase type",
                    color: 'green',
                    list: [
                      "« Nous mobiliserons un concepteur-rédacteur et un directeur artistique de l'agence afin de concevoir un visuel percutant et une accroche adaptée pour la cible des DSI. »"
                    ]
                  }
                ]
              }
            }
          ]
        }
      },
      {
        id: 'quiz',
        title: "Quiz d'entraînement",
        badge: 'Noté /20',
        badgeColor: 'amber',
        content: {
          type: 'quiz',
          text: 'Quiz interactif du Bloc 01'
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
              title: "🌍 1. L'Analyse de l'Environnement (PESTEL)",
              type: 'grid',
              items: [
                {
                  title: "🤔 Quand l'utiliser ?",
                  color: 'blue',
                  text: 'Dès que l\'on te demande d\'analyser le "macro-environnement", d\'identifier les facteurs externes qui influencent l\'entreprise ou de chercher des Opportunités et des Menaces.'
                },
                {
                  title: "🧩 La Méthode (6 dimensions)",
                  color: 'green',
                  text: [
                    "🏛️ P (Politique) : Stabilité gouvernementale, politique fiscale, commerce extérieur.",
                    "📈 E (Économique) : Croissance (PIB), taux d'intérêt, inflation, pouvoir d'achat.",
                    "👥 S (Socioculturel) : Démographie, habitudes de consommation, niveau d'éducation.",
                    "📱 T (Technologique) : Innovations, dépenses en R&D, nouveaux brevets.",
                    "🌱 E (Écologique) : Lois sur la protection de l'environnement, recyclage, consommation d'énergie.",
                    "⚖️ L (Légal) : Droit du travail, droit de la consommation, normes de sécurité."
                  ]
                }
              ]
            },
            {
              id: 'swot',
              title: "📊 2. Le Diagnostic Stratégique (SWOT / FFOM)",
              type: 'grid',
              items: [
                {
                  title: "🤔 Quand l'utiliser ?",
                  color: 'amber',
                  text: "C'est l'outil de synthèse par excellence. Il permet de croiser les capacités de l'entreprise avec son marché."
                },
                {
                  title: "🏢 Le Diagnostic Interne",
                  color: 'teal',
                  text: [
                    "Ce que l'entreprise contrôle :",
                    "• 💪 Forces : Atouts, savoir-faire, ressources financières solides, bonne image.",
                    "• ⚠️ Faiblesses : Manque de compétences, site web obsolète, faible notoriété."
                  ]
                },
                {
                  title: "🌍 Le Diagnostic Externe",
                  color: 'red',
                  text: [
                    "Ce que l'entreprise subit :",
                    "• 🌟 Opportunités : Marché en croissance, nouvelles lois favorables (Loi AGEC), boom du e-commerce.",
                    "• 🚨 Menaces : Arrivée d'un nouveau concurrent, hausse du prix des matières premières."
                  ]
                }
              ]
            },
            {
              id: 'syllogisme',
              title: "⚖️ 3. Le Raisonnement Juridique (Le Syllogisme)",
              type: 'grid',
              items: [
                {
                  title: "🤔 Quand l'utiliser ?",
                  color: 'blue',
                  text: 'Pour répondre de manière structurée à toute question juridique (mission de droit). C\'est la méthode qui garantit d\'obtenir le maximum de points.'
                },
                {
                  title: "🔑 Les 5 étapes clés",
                  color: 'purple',
                  text: [
                    "1️⃣ Les Faits : Résumer la situation de manière qualifiée juridiquement (ne pas dire \"le monsieur\", mais \"le salarié\" ou \"le créancier\").",
                    "2️⃣ Le Problème de droit : Poser la question sous forme juridique (ex: \"L'employeur peut-il utiliser des images de vidéosurveillance sans informer le salarié ?\").",
                    "3️⃣ La Majeure (La Règle) : Citer les articles de loi ou les principes juridiques applicables (Code civil, Code du travail).",
                    "4️⃣ La Mineure (L'Application) : Vérifier si, dans le cas présent, les conditions de la loi sont remplies.",
                    "5️⃣ La Conclusion : Répondre clairement à la question posée."
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
