import { ProjectCreateNestedManyWithoutClientsInput } from "./ProjectCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  projects?: ProjectCreateNestedManyWithoutClientsInput;
};
