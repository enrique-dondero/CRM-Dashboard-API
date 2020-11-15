import { AccountType } from "root/types/enums";
import { Response } from "express";
import { OrgIdRequest } from "root/requests/organizations";
import { Controller } from "../base-controller";
import { OrganizationService } from "root/services";

export class GetOrganizationById extends Controller {
  public Permission = [AccountType.ADMIN];
  public QueryRequst = OrgIdRequest;
  public async hander (res: Response, _: any, query: OrgIdRequest) {
    const org = await OrganizationService.getOrganizationById(query);
    return res.json(org);
  }
}
