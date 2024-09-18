import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type TeamWhereInput = {
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
  tasks?: TaskListRelationFilter;
};
