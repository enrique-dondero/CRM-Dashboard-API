import { Response } from "express";
import { NylasService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "root/controllers/base-controller";
import { IdQueryRequest } from "root/requests/common";

export class GetMessageById extends Controller {
  public QueryRequst = IdQueryRequest;
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public async hander (res: Response, _: any, query: IdQueryRequest) {
    const message = await NylasService.getMessageById(this.user, query);
    return res.json(message);
  }
}
