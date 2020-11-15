import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class NylasAuthorizeRequest implements QueryRequest {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;
}
