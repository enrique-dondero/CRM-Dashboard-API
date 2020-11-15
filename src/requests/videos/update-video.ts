import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { AccountType } from "root/types/enums";

export class UpdateVideoRequest implements BodyRequest {
  @IsNotEmpty()
  @IsString()
  videoId: string;

  @IsString()
  @IsOptional()
  link: string;

  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  collectionType: string;

  @IsOptional()
  @IsEnum(AccountType)
  visibility: AccountType;
}
