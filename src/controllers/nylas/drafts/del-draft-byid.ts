import { Response } from "express";
import { NylasService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "root/controllers/base-controller";
import { IdQueryRequest } from "root/requests/common";
import { CONFLICT } from "http-status-codes";

export class DelDraftById extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public QueryRequst = IdQueryRequest;
  public async hander (res: Response, _: any, query: IdQueryRequest) {
    await NylasService.delDraftById(this.user, query);
    return res.status(CONFLICT).send();
  }
}
