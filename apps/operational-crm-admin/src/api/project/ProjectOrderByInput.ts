import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
