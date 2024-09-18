import { EmployeeCreateNestedManyWithoutTeamsInput } from "./EmployeeCreateNestedManyWithoutTeamsInput";
import { ProjectCreateNestedManyWithoutTeamsInput } from "./ProjectCreateNestedManyWithoutTeamsInput";
import { TaskCreateNestedManyWithoutTeamsInput } from "./TaskCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  employees?: EmployeeCreateNestedManyWithoutTeamsInput;
  name?: string | null;
  projects?: ProjectCreateNestedManyWithoutTeamsInput;
  tasks?: TaskCreateNestedManyWithoutTeamsInput;
};
