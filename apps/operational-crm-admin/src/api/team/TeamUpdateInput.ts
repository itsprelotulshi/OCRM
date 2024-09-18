import { EmployeeUpdateManyWithoutTeamsInput } from "./EmployeeUpdateManyWithoutTeamsInput";
import { ProjectUpdateManyWithoutTeamsInput } from "./ProjectUpdateManyWithoutTeamsInput";
import { TeamLeaderWhereUniqueInput } from "../teamLeader/TeamLeaderWhereUniqueInput";

export type TeamUpdateInput = {
  employees?: EmployeeUpdateManyWithoutTeamsInput;
  name?: string | null;
  projects?: ProjectUpdateManyWithoutTeamsInput;
  teamLeader?: TeamLeaderWhereUniqueInput | null;
};
