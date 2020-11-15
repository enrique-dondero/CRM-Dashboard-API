import { Response } from "express";
import { AddCustomFieldRequest } from "root/requests/customfields";
import { CustomFieldService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "../base-controller";

export class AddCustomField extends Controller {
  public Permission = [AccountType.ADMIN];
  public BodyRequst = AddCustomFieldRequest;
  public async hander (res: Response, body: AddCustomFieldRequest) {
    const customField = await CustomFieldService.addCustomField(body);
    return res.json(customField);
  }
}
