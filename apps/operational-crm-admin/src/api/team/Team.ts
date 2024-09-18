import { Employee } from "../employee/Employee";
import { Project } from "../project/Project";
import { TeamLeader } from "../teamLeader/TeamLeader";

export type Team = {
  createdAt: Date;
  employees?: Array<Employee>;
  id: string;
  name: string | null;
  projects?: Array<Project>;
  teamLeader?: TeamLeader | null;
  updatedAt: Date;
};
