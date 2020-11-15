import { IsNotEmpty, IsString } from "class-validator";

export class DMClaimStatusRequest implements QueryRequest {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  newStatusId: string;
}
