import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginBodyRequest implements BodyRequest {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
