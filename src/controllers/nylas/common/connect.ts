import { Response } from "express";
import { Controller } from "root/controllers/base-controller";
import { NylasCallbackRequest } from "root/requests/nylas";
import { NylasService } from "root/services";

export class NylasConnect extends Controller {
  public QueryRequst = NylasCallbackRequest;
  public async hander (res: Response, _: any ,query: NylasCallbackRequest ) {
    await NylasService.saveNylasAccessToken(query.code, this.user);
    return res.json("CONNECTED");
  }
}
