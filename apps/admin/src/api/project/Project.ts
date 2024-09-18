import { Client } from "../client/Client";
import { Task } from "../task/Task";
import { Team } from "../team/Team";

export type Project = {
  client?: Client | null;
  createdAt: Date;
  id: string;
  progress: number | null;
  status: string | null;
  tasks?: Array<Task>;
  team?: Team | null;
  updatedAt: Date;
};
