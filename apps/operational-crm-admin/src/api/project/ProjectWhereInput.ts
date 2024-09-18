import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProjectWhereInput = {
  id?: StringFilter;
  progress?: FloatNullableFilter;
  status?: StringNullableFilter;
  team?: TeamWhereUniqueInput;
};
