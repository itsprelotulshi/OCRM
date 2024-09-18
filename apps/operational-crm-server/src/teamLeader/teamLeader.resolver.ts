import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TeamLeaderResolverBase } from "./base/teamLeader.resolver.base";
import { TeamLeader } from "./base/TeamLeader";
import { TeamLeaderService } from "./teamLeader.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TeamLeader)
export class TeamLeaderResolver extends TeamLeaderResolverBase {
  constructor(
    protected readonly service: TeamLeaderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
