import { Response } from "express";
import { SendNylasEmailReqeust } from "root/requests/nylas";
import { NylasService } from "root/services";
import { Controller } from "root/controllers/base-controller";

export class SendNylasEmail extends Controller {
  public RequireAuth = true;
  public BodyRequst = SendNylasEmailReqeust;
  public async hander (res: Response, body: SendNylasEmailReqeust) {
    await NylasService.sendNylasEmail(body, this.user);
    return res.json();
  }
}
