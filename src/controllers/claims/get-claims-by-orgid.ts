import { AccountType } from "root/types/enums";
import { Response } from "express";
import { ClaimService } from "root/services";
import { Controller } from "../base-controller";
import { OrgIdRequest } from "root/requests/organizations";

export class GetClaimsByOrgId extends Controller {
  public QueryRequst = OrgIdRequest;
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public async hander (res: Response, _: any, query: OrgIdRequest) {
    const claims = await ClaimService.getClaimsByOrgId(this.user, query);
    return res.json(claims);
  }
}
