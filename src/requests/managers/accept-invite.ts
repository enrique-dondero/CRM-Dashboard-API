import { Type } from "class-transformer/decorators";
import { IsDate, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class AcceptManagerInviteRequest implements BodyRequest {
  @IsNotEmpty()
  @IsString()
  token: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsPhoneNumber(null)
  @IsNotEmpty()
  @IsString()
  contactNumber: string;

  @Type(()=> Date)
  @IsNotEmpty()
  @IsDate()
  birthday: Date;

  @IsOptional()
  customFields?: Record<string, any>;
}
