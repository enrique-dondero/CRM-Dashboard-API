import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UploadFileRequest implements BodyRequest {
  @IsOptional()
  @IsString()
  uploadToUserId?: string;

  @IsOptional()
  @IsString()
  claimId?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  link: string;
}
