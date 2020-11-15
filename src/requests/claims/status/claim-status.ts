import { IsNotEmpty, IsString } from "class-validator";

export class ClaimStatusRequest implements BodyRequest {
  @IsNotEmpty()
  @IsString()
  name: string;
}
