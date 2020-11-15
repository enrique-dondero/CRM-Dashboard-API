import { AccountType } from "root/types/enums";
import { Controller } from "root/controllers/base-controller";
import { Response } from "express";
import { ClaimService } from "root/services";

export class ListClaimStatus extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public async hander (res: Response, _: any) {
    const status = await ClaimService.listClaimStatus();
    return res.json(status);
  }
}
