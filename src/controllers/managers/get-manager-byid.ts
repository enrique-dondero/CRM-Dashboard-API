import { Response } from "express";
import { IdQueryRequest } from "root/requests/common";
import { ManagerService } from "root/services";
import { Controller } from "../base-controller";

export class GetManagerById extends Controller {
  public QueryRequst = IdQueryRequest;
  public async hander (res: Response, _: any, query: IdQueryRequest) {
    const manager = await ManagerService.getManagerById(query.id);
    return res.json(manager);
  }
}
