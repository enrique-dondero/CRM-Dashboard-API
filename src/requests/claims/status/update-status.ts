import { IsNotEmpty, IsString } from "class-validator";

export class UpdateClaimStatusRequest implements BodyRequest {
  @IsNotEmpty()
  @IsString()
  statusId: string;

  @IsNotEmpty()
  @IsString()
  newStatusName: string;
}
