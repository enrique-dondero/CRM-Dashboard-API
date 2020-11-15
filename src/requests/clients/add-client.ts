import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { AddOrganizationRequest } from "../organizations";

export class AddClientRequest implements BodyRequest {
  @Type(() => AddOrganizationRequest)
  @ValidateNested()
  organizations: Array<AddOrganizationRequest>;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  contactNumber: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  customFields?: Record<string, any>;
}
