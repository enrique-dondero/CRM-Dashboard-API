import { Controller } from "../base-controller";
import { AccountType } from "root/types/enums";
import { Response } from "express";
import { UserService } from "root/services";
import { UpdatePasswordRequest } from "root/requests/users";

export class UpdatePassword extends Controller {
  public BodyRequst = UpdatePasswordRequest;
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public async hander (res: Response, body: UpdatePasswordRequest) {
    const user = await UserService.updatePassword(this.user, body);
    return res.json(user);
  }
}
