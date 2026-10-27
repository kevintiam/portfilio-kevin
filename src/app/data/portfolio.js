// ============================================================
// DONNÉES DU PORTFOLIO
// Tout le contenu du site est ici : modifie ce fichier pour
// mettre à jour un texte, un lien ou ajouter un projet.
// ============================================================

export const navLinks = [
  { label: "Profil", href: "#about", number: "01" },
  { label: "Stack", href: "#skill", number: "02" },
  { label: "Projets", href: "#projets", number: "03" },
  { label: "Parcours", href: "#formation", number: "04" },
  { label: "Contact", href: "#contact", number: "05" },
];

// "icon" = nom de l'icône, traduit en composant dans components/Icon.jsx
export const socials = [
  { icon: "github", href: "https://github.com/kevintiam", label: "GitHub" },
  { icon: "linkedin", href: "https://www.linkedin.com/in/kevin-rostand-sop-tiam-49995a351/", label: "LinkedIn" },
  { icon: "facebook", href: "https://www.facebook.com/kevin.tiam.50", label: "Facebook" },
  { icon: "instagram", href: "https://www.instagram.com/kevintiam2561/", label: "Instagram" },
];

export const contactInfo = {
  email: "tiamkevin9@gmail.com",
  phone: "(+1) 613-261-7420",
  phoneHref: "tel:+16132617420",
  city: "Ottawa, ON, Canada",
  mapHref: "https://maps.app.goo.gl/KUNMy9HK1EZdt1188",
};

// ------------------------------------------------------------
// COMPÉTENCES — regroupées comme une "nomenclature" technique
// ------------------------------------------------------------
export const skillCategories = [
  {
    code: "A",
    title: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript", note: "en progression" },
      { name: "HTML / CSS", icon: "html" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    code: "B",
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "node" },
      { name: "FastAPI (Python)", icon: "fastapi" },
      { name: "C# / .NET", icon: "dotnet" },
      { name: "Python", icon: "python" },
      { name: "Spring Boot", icon: "spring" },
    ],
  },
  {
    code: "C",
    title: "Données",
    skills: [
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Prisma ORM", icon: "prisma" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    code: "D",
    title: "Outils",
    skills: [
      { name: "Git & GitHub", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Linux", icon: "linux" },
      { name: "WordPress", icon: "wordpress" },
      { name: "Kotlin (Android)", icon: "kotlin" },
    ],
  },
];

// ------------------------------------------------------------
// PROJETS
// featured: true  -> grande "planche" animée avec schéma
// featured: false -> liste "Autres réalisations"
// diagram         -> boîtes du schéma d'architecture (de gauche à droite)
// demo / code     -> laisse "" si tu n'as pas de lien : le bouton sera caché
// ------------------------------------------------------------
export const projects = [
  // ---------- PROJETS VEDETTES ----------
  {
    title: "SkillMap",
    category: "Intelligence artificielle",
    context: "Défi Informatique La Cité 2026 · équipe de 5",
    description:
      "Application de gestion de CV qui affecte automatiquement les professeurs aux cours. Les CV (PDF ou Word) sont analysés par un LLM qui extrait les compétences, puis un algorithme d'affectation pondérée propose les meilleures correspondances. Rôles professeur, RH et administrateur, authentification JWT.",
    tags: ["Next.js", "FastAPI", "Python", "PostgreSQL", "Prisma", "Docker", "LLM"],
    diagram: ["Next.js", "FastAPI", "LLM"],
    featured: true,
    demo: "",
    code: "https://github.com/ibou224/skillmap",
  },
  {
    title: "Gestion des horaires — La Cité",
    category: "Application web full-stack",
    context: "Projet d'équipe (3) · ITAC, Collège La Cité",
    description:
      "Application centralisée pour créer les horaires de cours de l'ITAC : authentification JWT par cookies HttpOnly, gestion des comptes, catalogue des cours et inventaire des salles. En cours : affectation des professeurs et détection des conflits de salles en temps réel.",
    tags: ["Next.js 16", "React 19", "Tailwind", "Prisma", "PostgreSQL", "JWT"],
    diagram: ["Next.js", "Prisma", "PostgreSQL"],
    featured: true,
    demo: "",
    code: "https://github.com/kevintiam/Systeme_Gestion_Des_Horaires-main",
  },
  {
    title: "Boutique Camp Impact ADN",
    category: "E-commerce · En ligne",
    context: "ICC Ottawa/Gatineau · 2026",
    description:
      "Boutique officielle de précommande des t-shirts et hoodies du Camp Impact ADN 2026 : passage de commande, suivi par numéro de référence, courriels de confirmation et espace d'administration des commandes.",
    tags: ["Next.js", "MongoDB", "Resend", "Vercel"],
    diagram: ["Next.js", "API", "MongoDB"],
    featured: true,
    demo: "https://precommande-tshirt.vercel.app/",
    code: "https://github.com/kevintiam/precommande-tshirt",
  },
  {
    title: "CESOC App",
    category: "Logiciel de gestion · Bénévolat",
    context: "CESOC · équipe de 3",
    description:
      "Gestion des postes informatiques mis à disposition des clients : sessions Windows encadrées à durée limitée et quota quotidien d'impression. Une API centrale, une application pour les postes et une console d'administration web. Ma contribution : connexion administrateur, accès au serveur en réseau local et documentation de déploiement.",
    tags: ["FastAPI", "SQLAlchemy", "PySide6", "React", "Vite"],
    diagram: ["Poste Windows", "FastAPI", "Console React"],
    featured: true,
    demo: "",
    code: "https://github.com/s6serge/cesoc_app",
  },

  // ---------- AUTRES RÉALISATIONS ----------
  {
    title: "Restaurant — commande en ligne",
    category: "Application web",
    context: "Backend Node.js",
    description:
      "Commande de plats pour un restaurant africain : panier, commandes, authentification Passport, tableau de bord admin, sécurité (Helmet, limitation de débit) et tests Jest.",
    tags: ["Express 5", "Prisma", "SQLite", "Passport", "Handlebars", "Jest"],
    featured: false,
    demo: "",
    code: "https://github.com/kevintiam/restaurant",
  },
  {
    title: "Labraideuse — salon de coiffure",
    category: "Site vitrine + réservation",
    context: "Full-stack",
    description: "Site d'un salon de coiffure avec réservation en ligne et formulaire de contact par courriel.",
    tags: ["React 19", "Vite", "Tailwind", "Express", "MongoDB", "Nodemailer"],
    featured: false,
    demo: "",
    code: "https://github.com/kevintiam/coiffure",
  },
  {
    title: "BibliothequeManager",
    category: "Application multiplateforme",
    context: ".NET MAUI",
    description:
      "Gestion de bibliothèque : connexion, livres, auteurs, catégories, adhérents, emprunts et réservations, interface bilingue FR/EN.",
    tags: ["C#", ".NET MAUI", "EF Core", "SQL Server"],
    featured: false,
    demo: "",
    code: "https://github.com/kevintiam/BibliothequeManager",
  },
  {
    title: "Carte des points de distribution",
    category: "Communauté · Cartographie",
    context: "Pour la communauté Life Changer",
    description:
      "Recense et gère les points de distribution sur une carte interactive.",
    tags: ["React", "Vite", "Spring Boot", "Leaflet"],
    featured: false,
    demo: "",
    code: "",
  },
  {
    title: "Assistant IA de recherche d'emploi",
    category: "Intelligence artificielle",
    context: "Outil personnel",
    description:
      "Score de compatibilité profil/offre, génération de lettres de présentation et suivi des candidatures.",
    tags: ["React", "IA"],
    featured: false,
    demo: "",
    code: "",
  },
  {
    title: "Site du Camp Impact ADN",
    category: "Communauté · WordPress",
    context: "ICC Ottawa/Gatineau",
    description: "Site web du camp Impact ADN réalisé avec WordPress et Elementor.",
    tags: ["WordPress", "Elementor"],
    featured: false,
    demo: "https://impact-adn.com",
    code: "",
  },
  {
    title: "Gestion de bibliothèque (WPF)",
    category: "Application de bureau",
    context: "C# / .NET 10",
    description: "Auteurs, livres, catégories et statistiques, avec changement de langue dynamique.",
    tags: ["C#", "WPF", "EF Core", "SQL Server"],
    featured: false,
    demo: "",
    code: "https://github.com/kevintiam237/Gestion_Bibliotheque_Livre",
  },
  {
    title: "To-Do List",
    category: "Application web",
    context: "React",
    description: "Ajouter, classer, supprimer et trier des tâches avec une date d'échéance.",
    tags: ["React", "Vite", "Tailwind", "React Router"],
    featured: false,
    demo: "",
    code: "https://github.com/kevintiam/todolist",
  },
  {
    title: "Mine de Cristaux",
    category: "Jeu web",
    context: "JavaScript",
    description: "Jeu d'exploration sur grille : collecter des cristaux en évitant les pièges, difficulté progressive.",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: false,
    demo: "",
    code: "https://github.com/kevintiam/mine_de_cristaux",
  },
];

// ------------------------------------------------------------
// PARCOURS (formation + expérience)
// ------------------------------------------------------------
export const journey = [
  {
    type: "Expérience",
    date: "Actuel",
    title: "Enseignement — Tests logiciels",
    place: "Collège La Cité, Ottawa",
    description: "J'enseigne les tests logiciels au Collège La Cité.",
  },
  {
    type: "Bénévolat",
    date: "Actuel",
    title: "Bénévole — Département informatique",
    place: "CESOC, Ottawa",
    description: "Bénévolat au sein du département informatique.",
  },
  {
    type: "Formation",
    date: "2023 – 2026",
    title: "DEC en Programmation informatique",
    place: "Collège La Cité, Ottawa",
    image: "/img/la-cite_campus.jpg",
    description:
      "Développement web et mobile, frontend et backend, bases de données et applications Android.",
    tags: ["React", "Node.js", "SQL", "C#", "Python", "Kotlin"],
  },
  {
    type: "Formation",
    date: "2016 – 2020",
    title: "Baccalauréat en physique mécanique",
    place: "Université de Douala, Cameroun",
    image: "/img/Universite_Douala.webp",
    description:
      "Une formation scientifique qui m'a donné la rigueur, la logique et le goût de la résolution de problèmes.",
    tags: ["Physique", "Mathématiques", "Modélisation"],
  },
];