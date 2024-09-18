import { StringFilter } from "../../util/StringFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";

export type TeamLeaderWhereInput = {
  id?: StringFilter;
  teams?: TeamListRelationFilter;
};
