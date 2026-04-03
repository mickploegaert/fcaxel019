import { unstable_cache } from "next/cache";

export type Player = {
  number: number;
  name: string;
  position: "Keeper" | "Verdediger" | "Middenvelder" | "Aanvaller" | "Wissel";
  goals: number;
  assists: number;
  image: string;
  imagePosition?: string;
};

export type Match = {
  date: string;
  fixture: string;
  kickoff: string;
};

export type Standing = {
  rank: number;
  team: string;
  played: number;
  points: number;
  isHighlight?: boolean;
};

const players: Player[] = [
  { number: 1, name: "Joey", position: "Keeper", goals: 1, assists: 2, image: "/assets/images/joey1.jpg", imagePosition: "center top" },
  { number: 2, name: "Pim", position: "Verdediger", goals: 2, assists: 4, image: "/assets/images/pim2.jpg", imagePosition: "center top" },
  { number: 3, name: "Loic", position: "Verdediger", goals: 1, assists: 3, image: "/assets/images/loïc10.jpg", imagePosition: "center top" },
  { number: 4, name: "Guus", position: "Verdediger", goals: 3, assists: 1, image: "/assets/images/guus4.jpg", imagePosition: "center top" },
  { number: 5, name: "Thijmen", position: "Verdediger", goals: 12, assists: 5, image: "/assets/images/thijmen5.jpg", imagePosition: "center top" },
  { number: 6, name: "Teije", position: "Middenvelder", goals: 4, assists: 6, image: "/assets/images/teije6.jpg", imagePosition: "center top" },
  { number: 7, name: "Mick", position: "Middenvelder", goals: 2, assists: 3, image: "/assets/images/mick7.jpg", imagePosition: "center top" },
  { number: 8, name: "Joost", position: "Middenvelder", goals: 3, assists: 4, image: "/assets/images/joost8.jpg", imagePosition: "center top" },
  { number: 9, name: "Carsten", position: "Aanvaller", goals: 8, assists: 2, image: "/assets/images/carsten9.jpg", imagePosition: "center top" },
  { number: 10, name: "Sendrick", position: "Aanvaller", goals: 9, assists: 6, image: "/assets/images/sendrick10.jpg", imagePosition: "center top" },
  { number: 11, name: "Tijn", position: "Aanvaller", goals: 7, assists: 4, image: "/assets/images/tijn11.jpg", imagePosition: "center top" },
  { number: 12, name: "Micah", position: "Wissel", goals: 2, assists: 3, image: "/assets/images/micah12.jpg", imagePosition: "center top" },
  { number: 13, name: "Merijn", position: "Wissel", goals: 4, assists: 1, image: "/assets/images/merijn13.jpg", imagePosition: "center top" },
  { number: 14, name: "Ferre", position: "Wissel", goals: 3, assists: 2, image: "/assets/images/ferre14.jpg", imagePosition: "center top" }
];

const matches: Match[] = [
  { date: "11-04-2026", fixture: "Nieuwland JO19-1 - FC Axel JO19-1", kickoff: "12:30" },
  { date: "18-04-2026", fixture: "Terneuzen JO19-1 - FC Axel JO19-1", kickoff: "12:30" },
  { date: "02-05-2026", fixture: "FC Axel JO19-1 - Halsteren JO19-1", kickoff: "14:30" },
  { date: "09-05-2026", fixture: "Tholense Boys JO19-1 - FC Axel JO19-1", kickoff: "12:00" },
  { date: "16-05-2026", fixture: "FC Axel JO19-1 - De Markiezaten JO19-1", kickoff: "12:30" }
];

const standings: Standing[] = [
  { rank: 1, team: "Bevelanders JO19-1", played: 6, points: 15 },
  { rank: 2, team: "Halsteren JO19-1", played: 4, points: 12 },
  { rank: 3, team: "Terneuzen JO19-1", played: 6, points: 12 },
  { rank: 4, team: "ST Apollo'69/DwO'15 JO19-1", played: 6, points: 10 },
  { rank: 5, team: "Steenbergen JO19-1", played: 6, points: 9 },
  { rank: 6, team: "De Markiezaten JO19-1", played: 4, points: 7 },
  { rank: 7, team: "MOC'17 JO19-2", played: 6, points: 7 },
  { rank: 8, team: "Kloetinge JO19-2", played: 7, points: 7 },
  { rank: 9, team: "Tholense Boys JO19-1", played: 5, points: 4 },
  { rank: 10, team: "Nieuwland JO19-1", played: 5, points: 4 },
  { rank: 11, team: "FC Axel JO19-1", played: 5, points: 0, isHighlight: true }
];

export const getPlayers = unstable_cache(async () => players, ["players"], {
  revalidate: 3600,
  tags: ["players"]
});

export const getMatches = unstable_cache(async () => matches, ["matches"], {
  revalidate: 600,
  tags: ["matches"]
});

export const getStandings = unstable_cache(async () => standings, ["standings"], {
  revalidate: 600,
  tags: ["standings"]
});
