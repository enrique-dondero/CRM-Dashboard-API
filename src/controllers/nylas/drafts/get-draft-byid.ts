import { Response } from "express";
import { NylasService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "root/controllers/base-controller";
import { IdQueryRequest } from "root/requests/common";

export class GetDraftById extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public QueryRequst = IdQueryRequest;
  public async hander (res: Response, _: any, query: IdQueryRequest) {
    const messages = await NylasService.getDraftById(this.user, query);
    return res.json(messages);
  }
}
