export interface ProfessionalItem {
  id: number;
  date: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  image: string;
  location: string;
}

export const professionalsData: ProfessionalItem[] = [
  {
    id: 1,
    date: "2023 - 2024",
    title: "Développeur Full Stack",
    company: "Carrevolutis",
    description: "Participation à la maintenance et au développement des plateformes CARREVOLUTIS (Dogfinance.com, Tekkit.io, Bizzeo.co, admin, client). Contribution à la création de nouvelles fonctionnalités front-end et back-end dans un environnement Agile et au refactoring du code. Collaboration avec l’équipe pour résoudre les bugs rencontrés sur les plateformes.",
    technologies: ["React.js", "PHP", "Symphony", "TypeScript", "Scrum", "Git", "MySQL"],
    image: "/images/logo-pro/logo.png",
    location: "Paris, France"
  },
  {
    id: 2,
    date: "2022 - 2024",
    title: "Développeur Mobile",
    company: "Epitech",
    description: "Développement d'une application mobile Flutter pour l'accompagnement psychologique, intégrant l'API OpenAI pour fournir des réponses personnalisées aux utilisateurs. Conception de l'interface et gestion de l'état de l'application, ainsi que participation à la création de nouvelles fonctionnalités côté front-end et back-end dans un environnement Agile (Scrum).",
    technologies: ["Flutter", "Node.js", "MongoDB", "Scrum", "Git"],
    image: "/images/logo-pro/epitech.png",
    location: "Paris, France"
  },
  {
    id: 3,
    date: "2021",
    title: "Stage développeur Web",
    company: "SIDR",
    description: "Création d’un parcours conversationnel via Google Dialogflow, intégré à une application web Flutter. Mise en place d’une boîte de dialogue interactive avec des questions/réponses guidées par boutons et redirection dynamique selon les choix de l'utilisateur.",
    technologies: ["Flutter", "Google DialogFlow", "Git"],
    image: "/images/logo-pro/logo-sidr.png",
    location: "Saint-Denis, Réunion"
  },
]