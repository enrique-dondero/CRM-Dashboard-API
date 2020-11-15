import { Response } from "express";
import { Controller } from "root/controllers/base-controller";
import { NylasCallbackRequest } from "root/requests/nylas";

export class NylasCallback extends Controller {
  public QueryRequst = NylasCallbackRequest;
  public RequireAuth = false;
  public async hander (res: Response, _: any ,query: NylasCallbackRequest ) {
    return res.json(query.code);
  }
}
