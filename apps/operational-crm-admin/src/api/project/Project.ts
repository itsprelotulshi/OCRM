import { Team } from "../team/Team";

export type Project = {
  createdAt: Date;
  id: string;
  progress: number | null;
  status: string | null;
  team?: Team | null;
  updatedAt: Date;
};
