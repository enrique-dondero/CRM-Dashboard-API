import { Response } from "express";
import { UserService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "../base-controller";

export class GetUser extends Controller {
  public Permission = [AccountType.ADMIN];
  public async hander (res: Response, _: any) {
    const user = await UserService.getUser(this.user);
    return res.json(user);
  }
}
