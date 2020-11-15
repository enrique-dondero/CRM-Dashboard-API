import { Response } from "express";
import { OrgIdRequest } from "root/requests/organizations";
import { ActivityService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "../base-controller";

export class GetActivitiesByOrgId extends Controller {
  public Permission = [AccountType.ADMIN];
  public QueryRequst = OrgIdRequest;
  public async hander (res: Response, _: any, query: OrgIdRequest) {
    const activities = await ActivityService.getActivitiesByOrgId(query);
    return res.json(activities);
  }
}
