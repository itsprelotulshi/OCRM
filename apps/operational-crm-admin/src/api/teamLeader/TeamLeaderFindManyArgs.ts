import { TeamLeaderWhereInput } from "./TeamLeaderWhereInput";
import { TeamLeaderOrderByInput } from "./TeamLeaderOrderByInput";

export type TeamLeaderFindManyArgs = {
  where?: TeamLeaderWhereInput;
  orderBy?: Array<TeamLeaderOrderByInput>;
  skip?: number;
  take?: number;
};
