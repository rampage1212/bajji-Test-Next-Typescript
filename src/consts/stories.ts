export enum StoryTypes {
  top = "top",
  best = "best",
  new = "new",
  show = "show",
  ask = "ask",
  job = "job",
}

export interface HNStory {
  id: number;
  title: string;
  url?: string;
  score: number;
  by: string;
  time: number; // UNIX timestamp
  descendants?: number; // comment count
  type: string;
}
