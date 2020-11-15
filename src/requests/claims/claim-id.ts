import { IsNotEmpty, IsString } from "class-validator";

export class ClaimIdRequest implements QueryRequest {
  @IsNotEmpty()
  @IsString()
  claimId: string
}
