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
    company: "Eventify",
    description: "",
    technologies: ["React.js", "PHP", "Symphony", "TypeScript", "Git"],
    image: "/images/eventify.png",
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