import { Controller } from "../base-controller";
import { AccountType } from "root/types/enums";
import { Response } from "express";

export class ValidateToken extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public async hander (res: Response, _: any) {
    return res.json(true);
  }
}
