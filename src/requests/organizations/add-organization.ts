import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AddOrganizationRequest implements BodyRequest {
  @IsNotEmpty()
  @IsString()
  organizationName: string;

  @IsNotEmpty()
  @IsString()
  companyName: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  websiteAddress: string;

  @IsOptional()
  customFields?: Record<string, any>;
}
