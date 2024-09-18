import { Project } from "../project/Project";

export type Client = {
  createdAt: Date;
  id: string;
  projects?: Array<Project>;
  updatedAt: Date;
};
