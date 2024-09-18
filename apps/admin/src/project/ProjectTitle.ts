import { Project as TProject } from "../api/project/Project";

export const PROJECT_TITLE_FIELD = "status";

export const ProjectTitle = (record: TProject): string => {
  return record.status?.toString() || String(record.id);
};
