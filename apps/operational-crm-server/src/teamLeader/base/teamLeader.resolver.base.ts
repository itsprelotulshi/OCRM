/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { TeamLeader } from "./TeamLeader";
import { TeamLeaderCountArgs } from "./TeamLeaderCountArgs";
import { TeamLeaderFindManyArgs } from "./TeamLeaderFindManyArgs";
import { TeamLeaderFindUniqueArgs } from "./TeamLeaderFindUniqueArgs";
import { CreateTeamLeaderArgs } from "./CreateTeamLeaderArgs";
import { UpdateTeamLeaderArgs } from "./UpdateTeamLeaderArgs";
import { DeleteTeamLeaderArgs } from "./DeleteTeamLeaderArgs";
import { TeamFindManyArgs } from "../../team/base/TeamFindManyArgs";
import { Team } from "../../team/base/Team";
import { TeamLeaderService } from "../teamLeader.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TeamLeader)
export class TeamLeaderResolverBase {
  constructor(
    protected readonly service: TeamLeaderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TeamLeader",
    action: "read",
    possession: "any",
  })
  async _teamLeadersMeta(
    @graphql.Args() args: TeamLeaderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TeamLeader])
  @nestAccessControl.UseRoles({
    resource: "TeamLeader",
    action: "read",
    possession: "any",
  })
  async teamLeaders(
    @graphql.Args() args: TeamLeaderFindManyArgs
  ): Promise<TeamLeader[]> {
    return this.service.teamLeaders(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TeamLeader, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TeamLeader",
    action: "read",
    possession: "own",
  })
  async teamLeader(
    @graphql.Args() args: TeamLeaderFindUniqueArgs
  ): Promise<TeamLeader | null> {
    const result = await this.service.teamLeader(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TeamLeader)
  @nestAccessControl.UseRoles({
    resource: "TeamLeader",
    action: "create",
    possession: "any",
  })
  async createTeamLeader(
    @graphql.Args() args: CreateTeamLeaderArgs
  ): Promise<TeamLeader> {
    return await this.service.createTeamLeader({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TeamLeader)
  @nestAccessControl.UseRoles({
    resource: "TeamLeader",
    action: "update",
    possession: "any",
  })
  async updateTeamLeader(
    @graphql.Args() args: UpdateTeamLeaderArgs
  ): Promise<TeamLeader | null> {
    try {
      return await this.service.updateTeamLeader({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TeamLeader)
  @nestAccessControl.UseRoles({
    resource: "TeamLeader",
    action: "delete",
    possession: "any",
  })
  async deleteTeamLeader(
    @graphql.Args() args: DeleteTeamLeaderArgs
  ): Promise<TeamLeader | null> {
    try {
      return await this.service.deleteTeamLeader(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Team], { name: "teams" })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "any",
  })
  async findTeams(
    @graphql.Parent() parent: TeamLeader,
    @graphql.Args() args: TeamFindManyArgs
  ): Promise<Team[]> {
    const results = await this.service.findTeams(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
