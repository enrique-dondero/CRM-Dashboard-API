import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SendEmailRequest implements BodyRequest {
  @IsNotEmpty()
  @IsString()
  introducerId: string;

  @IsNotEmpty()
  @IsString()
  masterAdminId: string;

  @IsNotEmpty()
  @IsEmail()
  toEmail: string;

  @IsNotEmpty()
  @IsString()
  subject: string;

  @IsNotEmpty()
  @IsString()
  messageBody: string;
}
