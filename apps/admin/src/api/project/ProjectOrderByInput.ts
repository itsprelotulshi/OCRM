import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  progress?: SortOrder;
  status?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
