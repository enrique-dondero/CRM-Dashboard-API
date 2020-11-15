import { AccountType } from "root/types/enums";
import { Response } from "express";
import { ListCustomFieldRequest } from "root/requests/customfields";
import { CustomFieldService } from "root/services";
import { Controller } from "../base-controller";

export class ListCustomField extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public QueryRequst = ListCustomFieldRequest;
  public async hander (res: Response, _: any, query: ListCustomFieldRequest) {
    const customField = await CustomFieldService.listCustomField(query);
    return res.json(customField);
  }
}
