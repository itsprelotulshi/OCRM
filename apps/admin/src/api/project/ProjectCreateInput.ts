import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProjectCreateInput = {
  client?: ClientWhereUniqueInput | null;
  progress?: number | null;
  status?: string | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
  team?: TeamWhereUniqueInput | null;
};
