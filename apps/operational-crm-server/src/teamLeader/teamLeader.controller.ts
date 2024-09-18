import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TeamLeaderService } from "./teamLeader.service";
import { TeamLeaderControllerBase } from "./base/teamLeader.controller.base";

@swagger.ApiTags("teamLeaders")
@common.Controller("teamLeaders")
export class TeamLeaderController extends TeamLeaderControllerBase {
  constructor(
    protected readonly service: TeamLeaderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
