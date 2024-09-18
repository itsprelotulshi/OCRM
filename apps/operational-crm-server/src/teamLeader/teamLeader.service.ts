import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeamLeaderServiceBase } from "./base/teamLeader.service.base";

@Injectable()
export class TeamLeaderService extends TeamLeaderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
