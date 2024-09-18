/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TaskWhereUniqueInput } from "../../task/base/TaskWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TaskUpdateManyWithoutTeamsInput {
  @Field(() => [TaskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TaskWhereUniqueInput],
  })
  connect?: Array<TaskWhereUniqueInput>;

  @Field(() => [TaskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TaskWhereUniqueInput],
  })
  disconnect?: Array<TaskWhereUniqueInput>;

  @Field(() => [TaskWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TaskWhereUniqueInput],
  })
  set?: Array<TaskWhereUniqueInput>;
}

export { TaskUpdateManyWithoutTeamsInput as TaskUpdateManyWithoutTeamsInput };
