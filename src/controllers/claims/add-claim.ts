import { AccountType } from "root/types/enums";
import { Response } from "express";
import { AddClaimRequest } from "root/requests/claims";
import { ClaimService } from "root/services";
import { Controller } from "../base-controller";

export class AddClaim extends Controller {
  public BodyRequst = AddClaimRequest;
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public async hander (res: Response, body: AddClaimRequest) {
    const claim = await ClaimService.addClaim(this.user, body);
    return res.json(claim);
  }
}
