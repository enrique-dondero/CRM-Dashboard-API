import { Response } from "express";
import { Controller } from "root/controllers/base-controller";
import { NylasAuthorizeRequest } from "root/requests/nylas";
import { NylasService } from "root/services";

export class NylasAuthorize extends Controller {
  public QueryRequst = NylasAuthorizeRequest;
  public RequireAuth = false;
  public async hander (res: Response, _: any ,query: NylasAuthorizeRequest ) {
    const authUrl = await NylasService.getNylasAuthUrl(query.email);
    return res.redirect(authUrl);
  }
}
