import { AccountType } from "root/types/enums";
import { Response } from "express";
import { ClaimService } from "root/services";
import { Controller } from "../base-controller";
import { ClaimIdRequest } from "root/requests/claims";

export class GetClaimById extends Controller {
  public QueryRequst = ClaimIdRequest;
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public async hander (res: Response, _: any, query: ClaimIdRequest) {
    const claim = await ClaimService.getClaimById(query.claimId);
    return res.json(claim);
  }
}
