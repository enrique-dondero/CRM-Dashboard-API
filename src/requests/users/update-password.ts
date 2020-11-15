import { IsNotEmpty, IsString } from "class-validator";

export class UpdatePasswordRequest implements BodyRequest {
  @IsNotEmpty()
  @IsString()
  password: string;
}
