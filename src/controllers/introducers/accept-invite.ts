import { IntroducerService } from "root/services";
import { Controller } from "../base-controller";
import { Response } from "express";
import { AcceptIntroduerInviteRequest } from "root/requests/introducers";

export class AcceptInvite extends Controller {
  public BodyRequst = AcceptIntroduerInviteRequest;
  public RequireAuth = false;
  public async hander (res: Response, body: AcceptIntroduerInviteRequest) {
    const introducer = await IntroducerService.acceptInvite(body);
    return res.json(introducer);
  }
}
