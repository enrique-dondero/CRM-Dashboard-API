import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateNoteRequest implements BodyRequest {
  @IsOptional()
  @IsString()
  createdToUserId?: string;

  @IsOptional()
  @IsString()
  claimId?: string;

  @IsOptional()
  @IsString()
  orgId?: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsOptional()
  @IsString()
  body?: string;
}
