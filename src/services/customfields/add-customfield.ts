import { CustomFieldProps } from "root/models";
import { customFieldModel } from "root/providers";
import { AddCustomFieldRequest } from "root/requests/customfields";

export const addCustomField = async (payload: AddCustomFieldRequest): Promise<CustomFieldProps> => {
  const {
    fieldName,
    fieldType,
    addView,
    detailView,
    customFieldType,
  } = payload;

  const customField = await customFieldModel().create({
    fieldName,
    fieldType,
    addView,
    detailView,
    customFieldType
  });

  return customField;
};
