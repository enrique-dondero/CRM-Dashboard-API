import { AccountType } from "root/types/enums";
import { Controller } from "root/controllers/base-controller";
import { Response } from "express";
import { ClaimService } from "root/services";
import { DMClaimStatusRequest } from "root/requests/claims/status";
import { NO_CONTENT } from "http-status-codes";

export class DelAndMoveClaimStatus extends Controller {
  public Permission = [AccountType.ADMIN];
  public QueryRequst = DMClaimStatusRequest;
  public async hander (res: Response, _: any, query: DMClaimStatusRequest) {
    await ClaimService.delAndMoveClaimStatus(query);
    return res.status(NO_CONTENT).json();
  }
}
