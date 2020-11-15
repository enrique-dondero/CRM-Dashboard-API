import { Response } from "express";
import { NylasService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "root/controllers/base-controller";
import { CONFLICT } from "http-status-codes";
import { ChangeReadStatusRequest } from "root/requests/nylas";

export class SetReadMessageById extends Controller {
  public QueryRequst = ChangeReadStatusRequest;
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public async hander (res: Response, _: any, query: ChangeReadStatusRequest) {
    await NylasService.setReadMessageById(this.user, query);
    return res.status(CONFLICT).send();
  }
}
