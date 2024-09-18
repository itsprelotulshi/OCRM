import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  contactInfo?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
