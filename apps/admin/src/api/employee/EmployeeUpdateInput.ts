import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type EmployeeUpdateInput = {
  contactInfo?: string | null;
  name?: string | null;
  role?: string | null;
  team?: TeamWhereUniqueInput | null;
  userRole?: string | null;
};
