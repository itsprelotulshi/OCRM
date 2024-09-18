import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  assignedEmployee?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  progress?: SortOrder;
  projectId?: SortOrder;
  status?: SortOrder;
  teamId?: SortOrder;
  teamLeader?: SortOrder;
  updatedAt?: SortOrder;
};
