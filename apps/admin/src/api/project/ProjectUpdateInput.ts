import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProjectUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  progress?: number | null;
  status?: string | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
  team?: TeamWhereUniqueInput | null;
};
