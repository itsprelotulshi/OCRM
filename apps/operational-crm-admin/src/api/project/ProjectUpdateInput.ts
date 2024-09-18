import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProjectUpdateInput = {
  team?: TeamWhereUniqueInput | null;
};
