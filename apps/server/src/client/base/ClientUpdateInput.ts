/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProjectUpdateManyWithoutClientsInput } from "./ProjectUpdateManyWithoutClientsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ClientUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ProjectUpdateManyWithoutClientsInput,
  })
  @ValidateNested()
  @Type(() => ProjectUpdateManyWithoutClientsInput)
  @IsOptional()
  @Field(() => ProjectUpdateManyWithoutClientsInput, {
    nullable: true,
  })
  projects?: ProjectUpdateManyWithoutClientsInput;
}

export { ClientUpdateInput as ClientUpdateInput };
