import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProjectCreateInput = {
  team?: TeamWhereUniqueInput | null;
};
