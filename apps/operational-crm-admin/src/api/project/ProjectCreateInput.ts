import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ProjectCreateInput = {
  progress?: number | null;
  status?: string | null;
  team?: TeamWhereUniqueInput | null;
};
