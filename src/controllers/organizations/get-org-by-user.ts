import { AccountType } from "root/types/enums";
import { Response } from "express";
import { Controller } from "../base-controller";
import { OrganizationService } from "root/services";

export class GetOrganizationsByUser extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER ];
  public async hander (res: Response, _: any) {
    const orgs = await OrganizationService.getOrganizationsByUser(this.user);
    return res.json(orgs);
  }
}
