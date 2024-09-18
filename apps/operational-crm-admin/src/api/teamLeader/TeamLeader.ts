import { Team } from "../team/Team";

export type TeamLeader = {
  createdAt: Date;
  id: string;
  teams?: Array<Team>;
  updatedAt: Date;
};
