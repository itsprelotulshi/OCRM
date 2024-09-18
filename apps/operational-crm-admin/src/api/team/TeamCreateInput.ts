import { EmployeeCreateNestedManyWithoutTeamsInput } from "./EmployeeCreateNestedManyWithoutTeamsInput";
import { ProjectCreateNestedManyWithoutTeamsInput } from "./ProjectCreateNestedManyWithoutTeamsInput";
import { TeamLeaderWhereUniqueInput } from "../teamLeader/TeamLeaderWhereUniqueInput";

export type TeamCreateInput = {
  employees?: EmployeeCreateNestedManyWithoutTeamsInput;
  name?: string | null;
  projects?: ProjectCreateNestedManyWithoutTeamsInput;
  teamLeader?: TeamLeaderWhereUniqueInput | null;
};
