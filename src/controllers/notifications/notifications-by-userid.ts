import { AccountType } from "root/types/enums";
import { Response } from "express";
import { NotificationService } from "root/services";
import { Controller } from "../base-controller";

export class NotificationsByUserId extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public async hander (res: Response, _: any) {
    const notifications = await NotificationService.notificationsByUserId(this.user);
    return res.json(notifications);
  }
}
