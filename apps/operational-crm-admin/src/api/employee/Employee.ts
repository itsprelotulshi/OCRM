import { Team } from "../team/Team";

export type Employee = {
  contactInfo: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  role: string | null;
  team?: Team | null;
  updatedAt: Date;
};
