import { StringFilter } from "../../util/StringFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProjectWhereInput = {
  id?: StringFilter;
  team?: TeamWhereUniqueInput;
};
