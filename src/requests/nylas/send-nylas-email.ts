import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class SendNylasEmailReqeust implements BodyRequest {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  toEmail: string;

  @IsOptional()
  @IsString()
  messageBody?: string;

  @IsOptional()
  @IsString()
  subject?: string;

  @IsOptional()
  @IsString()
  filePath?: string;
}
