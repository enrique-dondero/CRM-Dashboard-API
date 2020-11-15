import { Response } from "express";
import { ManageUserRequest } from "root/requests/users";
import { UserService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "../base-controller";

export class ReInviteByIds extends Controller {
  public Permission = [AccountType.ADMIN];
  public QueryRequst = ManageUserRequest;
  public async hander (res: Response, _: any, body: ManageUserRequest) {
    const users = await UserService.reInviteByIds(body);
    return res.json(users);
  }
}
