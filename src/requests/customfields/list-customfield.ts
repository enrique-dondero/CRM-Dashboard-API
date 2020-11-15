import { IsEnum, IsNotEmpty } from "class-validator";
import { CustomFieldType } from "root/types/enums";

export class ListCustomFieldRequest implements QueryRequest {
  @IsNotEmpty()
  @IsEnum(CustomFieldType)
  customFieldType: CustomFieldType;
}
