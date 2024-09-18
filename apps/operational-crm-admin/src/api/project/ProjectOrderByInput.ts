import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  progress?: SortOrder;
  status?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
