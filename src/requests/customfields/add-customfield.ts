import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CustomFieldType } from "root/types/enums";

export class AddCustomFieldRequest implements BodyRequest {
  @IsNotEmpty()
  @IsString()
  fieldName: string;

  @IsNotEmpty()
  @IsString()
  fieldType: string;

  @IsBoolean()
  @IsOptional()
  detailView?: boolean;

  @IsBoolean()
  @IsOptional()
  addView?: true;

  @IsNotEmpty()
  @IsEnum(CustomFieldType)
  customFieldType: CustomFieldType;
}
