import { Controller } from "../base-controller";
import { AccountType } from "root/types/enums";
import { Response } from "express";
import { EmailBodyRequest } from "root/requests/common";
import { UserService } from "root/services";

export class UpdateEmail extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public async hander (res: Response, body: EmailBodyRequest) {
    const user = await UserService.updateEmail(this.user, body);
    return res.json(user);
  }
}
