export interface EducationItem {
  id: number;
  date: string;
  title: string;
  institution: string;
}

export const educationData: EducationItem[] = [
  {
    id: 1,
    date: "2019",
    title: "Baccalauréat technologique",
    institution: "Lycée Levavasseur"
  },
  {
    id: 2,
    date: "2019-2022",
    title: "Bachelor en technologie de l'information",
    institution: "EPITECH"
  },
  {
    id: 3,
    date: "2022-2024",
    title: "Expert en technologie de l'information",
    institution: "EPITECH"
  }
]; 