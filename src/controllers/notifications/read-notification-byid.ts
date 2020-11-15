import { Response } from "express";
import { IdQueryRequest } from "root/requests/common";
import { NotificationService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "../base-controller";

export class ReadNotificationById extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public QueryRequst = IdQueryRequest;
  public async hander (res: Response, _: any, query: IdQueryRequest) {
    const notification = await NotificationService.readNotificationById(query);
    return res.json(notification);
  }
};
