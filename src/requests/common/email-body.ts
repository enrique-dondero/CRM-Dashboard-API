import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class EmailBodyRequest implements BodyRequest {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;
}
