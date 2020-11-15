import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { AccountType } from "root/types/enums";

export class UploadVideoRequest implements BodyRequest {
  @IsString()
  @IsNotEmpty()
  link: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  collectionType: string;

  @IsNotEmpty()
  @IsEnum(AccountType)
  visibility: AccountType;
}
