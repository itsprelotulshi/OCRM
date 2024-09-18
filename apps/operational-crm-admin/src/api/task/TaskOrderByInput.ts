import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  progress?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
