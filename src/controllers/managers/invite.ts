import HttpError from "root/exceptions/http-error";
import { CONFLICT, NO_CONTENT } from "http-status-codes";
import { UserService, ManagerService } from "root/services";
import { Controller } from "../base-controller";
import { Response } from "express";
import { MANAGER_ALEADY_EXIST } from "root/exceptions/messages";
import { EmailBodyRequest } from "root/requests/common/email-body";

export class InviteManager extends Controller {
  public BodyRequst = EmailBodyRequest;
  public async hander (res: Response, body: EmailBodyRequest) {
    if (await UserService.checkExist(body.email)) {
      throw new HttpError("CONFLICT", CONFLICT, MANAGER_ALEADY_EXIST);
    }
    await ManagerService.sendInvite(body.email);
    return res.status(NO_CONTENT).json();
  }
}
