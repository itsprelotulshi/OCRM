import { SortOrder } from "../../util/SortOrder";

export type TeamOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  teamLeaderId?: SortOrder;
  updatedAt?: SortOrder;
};
