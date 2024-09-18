import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TaskWhereInput = {
  id?: StringFilter;
  progress?: FloatNullableFilter;
  status?: StringNullableFilter;
};
