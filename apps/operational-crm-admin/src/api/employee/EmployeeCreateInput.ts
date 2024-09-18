import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type EmployeeCreateInput = {
  contactInfo?: string | null;
  name?: string | null;
  role?: string | null;
  team?: TeamWhereUniqueInput | null;
};
