import { ManagerService } from "root/services";
import { Controller } from "../base-controller";
import { Response } from "express";
import { AcceptManagerInviteRequest } from "root/requests/managers";

export class AcceptInvite extends Controller {
  public BodyRequst = AcceptManagerInviteRequest;
  public async hander (res: Response, body: AcceptManagerInviteRequest) {
    const manager = await ManagerService.acceptInvite(body);
    return res.json(manager);
  }
}
