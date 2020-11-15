import { AccountType } from "root/types/enums";
import { Response } from "express";
import { ClaimService } from "root/services";
import { Controller } from "../base-controller";

export class GetClaims extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public async hander (res: Response) {
    const claims = await ClaimService.getClaims(this.user);
    return res.json(claims);
  }
}
