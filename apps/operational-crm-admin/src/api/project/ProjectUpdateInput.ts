import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProjectUpdateInput = {
  progress?: number | null;
  status?: string | null;
  team?: TeamWhereUniqueInput | null;
};
