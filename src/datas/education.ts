export interface EducationItem {
  id: number;
  year: string;
  title: string;
  institution: string;
}

export const educationData: EducationItem[] = [
  {
    id: 1,
    year: "2019",
    title: "Baccalauréat technologique",
    institution: "Lycée Levavasseur"
  },
  {
    id: 2,
    year: "2019-2022",
    title: "Bachelor Epitech",
    institution: "EPITECH"
  },
  {
    id: 3,
    year: "2022-2024",
    title: "Expert en technologie de l'information",
    institution: "EPITECH"
  }
]; 