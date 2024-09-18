import { Employee } from "../employee/Employee";
import { Project } from "../project/Project";
import { Task } from "../task/Task";

export type Team = {
  createdAt: Date;
  employees?: Array<Employee>;
  id: string;
  name: string | null;
  projects?: Array<Project>;
  tasks?: Array<Task>;
  updatedAt: Date;
};
