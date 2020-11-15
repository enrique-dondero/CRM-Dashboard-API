import { AccountType } from "root/types/enums";
import { Response } from "express";
import { Controller } from "../base-controller";
import { ActivityService } from "root/services";
import { ClaimIdRequest } from "root/requests/claims";

export class GetActivitiesByClaimId extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public async hander (res: Response, _: any, query: ClaimIdRequest) {
    const activities = await ActivityService.getActivitiesByClaimId(query);
    return res.json(activities);
  }
}
