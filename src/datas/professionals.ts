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
    description: "J’ai participé au développement full stack et à la maintenance des plateformes de Carrevolutis dans un cadre Agile. Mes missions comprenaient la création de nouvelles fonctionnalités, le refactoring de code existant et la résolution de bugs en collaboration avec les équipes techniques.",
    technologies: ["React.js", "PHP", "Symphony", "TypeScript", "Git"],
    image: "/images/logo.png",
    location: "Paris, France"
  },
  {
    id: 2,
    date: "2023 - 2024",
    title: "Développeur Full Stack",
    company: "Eventify",
    description: "",
    technologies: ["React.js", "PHP", "Symphony", "TypeScript", "Git"],
    image: "/images/eventify.png",
    location: "Paris, France"
  }
]