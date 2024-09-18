import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { TeamLeaderWhereUniqueInput } from "../teamLeader/TeamLeaderWhereUniqueInput";

export type TeamWhereInput = {
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
  teamLeader?: TeamLeaderWhereUniqueInput;
};
