import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type TaskWhereInput = {
  assignedEmployee?: StringNullableFilter;
  id?: StringFilter;
  progress?: FloatNullableFilter;
  project?: ProjectWhereUniqueInput;
  status?: StringNullableFilter;
  team?: TeamWhereUniqueInput;
  teamLeader?: StringNullableFilter;
};
