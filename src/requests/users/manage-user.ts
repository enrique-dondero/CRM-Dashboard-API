import { Type } from "class-transformer";
import { ArrayUnique, IsEnum, IsOptional } from "class-validator";
import { Schema } from "mongoose";
import { AccountStatus } from "root/types/enums";

export class ManageUserRequest implements QueryRequest {
  @IsOptional()
  @IsEnum(AccountStatus)
  accountStatus?: AccountStatus;

  @Type(() => Array)
  @IsOptional()
  @ArrayUnique()
  userIds?: Array<Schema.Types.ObjectId>;
}
