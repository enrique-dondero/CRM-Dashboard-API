import { IsNotEmpty, IsString } from "class-validator";

export class ClaimPeriodRequest implements BodyRequest {
  @IsNotEmpty()
  @IsString()
  period: string;
}
