import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type TaskCreateInput = {
  assignedEmployee?: string | null;
  progress?: number | null;
  project?: ProjectWhereUniqueInput | null;
  status?: string | null;
  team?: TeamWhereUniqueInput | null;
  teamLeader?: string | null;
};
