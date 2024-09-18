import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "status";

export const TaskTitle = (record: TTask): string => {
  return record.status?.toString() || String(record.id);
};
