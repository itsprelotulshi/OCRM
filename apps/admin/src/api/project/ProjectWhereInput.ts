import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProjectWhereInput = {
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  progress?: FloatNullableFilter;
  status?: StringNullableFilter;
  tasks?: TaskListRelationFilter;
  team?: TeamWhereUniqueInput;
};
