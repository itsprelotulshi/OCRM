import { TeamCreateNestedManyWithoutTeamLeadersInput } from "./TeamCreateNestedManyWithoutTeamLeadersInput";

export type TeamLeaderCreateInput = {
  teams?: TeamCreateNestedManyWithoutTeamLeadersInput;
};
