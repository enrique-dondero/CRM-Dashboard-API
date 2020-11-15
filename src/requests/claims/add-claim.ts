import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class AddClaimRequest implements BodyRequest {
  @IsNotEmpty()
  @IsString()
  claimPeriodId: string;

  @IsNotEmpty()
  @IsString()
  associatedOrgId: string;

  @IsNotEmpty()
  @IsNumber()
  claimValue: number;

  @IsNotEmpty()
  @IsNumber()
  grossFees: number;

  @IsNotEmpty()
  @IsString()
  statusId: string;

  @IsOptional()
  customFields?: Record<string, any>
}
