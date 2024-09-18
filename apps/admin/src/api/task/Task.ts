import { Project } from "../project/Project";
import { Team } from "../team/Team";

export type Task = {
  assignedEmployee: string | null;
  createdAt: Date;
  id: string;
  progress: number | null;
  project?: Project | null;
  status: string | null;
  team?: Team | null;
  teamLeader: string | null;
  updatedAt: Date;
};
