import { AccountType } from "root/types/enums";
import { Controller } from "root/controllers/base-controller";
import { Response } from "express";
import { ClaimStatusRequest } from "root/requests/claims/status";
import { ClaimService } from "root/services";

export class AddClaimStatus extends Controller {
  public Permission = [AccountType.ADMIN];
  public BodyRequst = ClaimStatusRequest;
  public async hander (res: Response, body: ClaimStatusRequest) {
    const status = await ClaimService.addClaimStatus(body);
    return res.json(status);
  }
}
