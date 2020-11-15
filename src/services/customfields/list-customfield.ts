import { CustomFieldProps } from "root/models";
import { customFieldModel } from "root/providers";
import { ListCustomFieldRequest } from "root/requests/customfields";

export const listCustomField = async (payload: ListCustomFieldRequest): Promise<CustomFieldProps[]> => {
  const {
    customFieldType,
  } = payload;

  const customFields = await customFieldModel().find({
    customFieldType
  });

  return customFields;
};
