import { Response } from "express";
import { ClientIdRequest } from "root/requests/clients";
import { ActivityService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "../base-controller";

export class GetActivitiesByClientId extends Controller {
  public Permission = [AccountType.ADMIN];
  public QueryRequst = ClientIdRequest;
  public async hander (res: Response, _: any, query: ClientIdRequest) {
    const activities = await ActivityService.getActivitiesByClientId(query);
    return res.json(activities);
  }
}
