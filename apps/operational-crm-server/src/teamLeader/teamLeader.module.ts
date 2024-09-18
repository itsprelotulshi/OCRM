import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TeamLeaderModuleBase } from "./base/teamLeader.module.base";
import { TeamLeaderService } from "./teamLeader.service";
import { TeamLeaderController } from "./teamLeader.controller";
import { TeamLeaderResolver } from "./teamLeader.resolver";

@Module({
  imports: [TeamLeaderModuleBase, forwardRef(() => AuthModule)],
  controllers: [TeamLeaderController],
  providers: [TeamLeaderService, TeamLeaderResolver],
  exports: [TeamLeaderService],
})
export class TeamLeaderModule {}
