import { Response } from "express";
import { Controller } from "../base-controller";
import { BrowserQueryRequest } from "root/requests/common";
import { ManagerService } from "root/services";

export class ListManagers extends Controller {
  public QueryRequst = BrowserQueryRequest;
  public async hander (res: Response, _: any, query: BrowserQueryRequest ) {
    const introducers = await ManagerService.listManagers(query);
    return res.json(introducers);
  }
}
