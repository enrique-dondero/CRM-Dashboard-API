import HttpError from "root/exceptions/http-error";
import { CONFLICT, NO_CONTENT } from "http-status-codes";
import { UserService, IntroducerService } from "root/services";
import { Controller } from "../base-controller";
import { INTRODUCER_ALEADY_EXIST } from "root/exceptions/messages";
import { Response } from "express";
import { EmailBodyRequest } from "root/requests/common";

export class InviteIntroduer extends Controller {
  public BodyRequst = EmailBodyRequest;
  public async hander (res: Response, body: EmailBodyRequest) {
    if (await UserService.checkExist(body.email)) {
      throw new HttpError("CONFLICT", CONFLICT, INTRODUCER_ALEADY_EXIST);
    }
    await IntroducerService.sendInvite(body.email, this.user);
    return res.status(NO_CONTENT).json();
  }
}
