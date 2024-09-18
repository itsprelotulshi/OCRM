import { Team } from "../team/Team";

export type Project = {
  createdAt: Date;
  id: string;
  team?: Team | null;
  updatedAt: Date;
};
