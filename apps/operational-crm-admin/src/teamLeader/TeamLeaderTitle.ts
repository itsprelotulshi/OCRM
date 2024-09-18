import { TeamLeader as TTeamLeader } from "../api/teamLeader/TeamLeader";

export const TEAMLEADER_TITLE_FIELD = "id";

export const TeamLeaderTitle = (record: TTeamLeader): string => {
  return record.id?.toString() || String(record.id);
};
