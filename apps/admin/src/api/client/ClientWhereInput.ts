import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type ClientWhereInput = {
  id?: StringFilter;
  projects?: ProjectListRelationFilter;
};
