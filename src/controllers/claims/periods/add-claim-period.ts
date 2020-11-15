import { AccountType } from "root/types/enums";
import { Controller } from "root/controllers/base-controller";
import { Response } from "express";
import { ClaimPeriodRequest } from "root/requests/claims/periods";
import { ClaimService } from "root/services";

export class AddClaimPeriod extends Controller {
  public Permission = [AccountType.ADMIN];
  public BodyRequst = ClaimPeriodRequest;
  public async hander (res: Response, body: ClaimPeriodRequest) {
    const status = await ClaimService.addClaimPeriod(body);
    return res.json(status);
  }
}
