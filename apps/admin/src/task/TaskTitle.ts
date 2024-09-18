import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "assignedEmployee";

export const TaskTitle = (record: TTask): string => {
  return record.assignedEmployee?.toString() || String(record.id);
};
