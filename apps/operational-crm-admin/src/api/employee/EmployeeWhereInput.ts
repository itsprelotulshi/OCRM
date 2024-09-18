import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type EmployeeWhereInput = {
  contactInfo?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  role?: StringNullableFilter;
  team?: TeamWhereUniqueInput;
};
