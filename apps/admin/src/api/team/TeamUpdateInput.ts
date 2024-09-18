import { EmployeeUpdateManyWithoutTeamsInput } from "./EmployeeUpdateManyWithoutTeamsInput";
import { ProjectUpdateManyWithoutTeamsInput } from "./ProjectUpdateManyWithoutTeamsInput";
import { TaskUpdateManyWithoutTeamsInput } from "./TaskUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  employees?: EmployeeUpdateManyWithoutTeamsInput;
  name?: string | null;
  projects?: ProjectUpdateManyWithoutTeamsInput;
  tasks?: TaskUpdateManyWithoutTeamsInput;
};
