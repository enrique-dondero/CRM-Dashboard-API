import { AccountType } from "root/types/enums";
import { Controller } from "root/controllers/base-controller";
import { Response } from "express";
import { ClaimService } from "root/services";
import { UpdateClaimStatusRequest } from "root/requests/claims/status";

export class UpdateClaimStatus extends Controller {
  public Permission = [AccountType.ADMIN];
  public BodyRequst = UpdateClaimStatusRequest;
  public async hander (res: Response, body: UpdateClaimStatusRequest) {
    const status = await ClaimService.updateClaimStatus(body);
    return res.json(status);
  }
}
