import { AccountType } from "root/types/enums";
import { Response } from "express";
import { OrganizationService } from "root/services";
import { Controller } from "../base-controller";

export class ListOrganization extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public async hander (res: Response, _: any) {
    const organizations = await OrganizationService.listOrganization();
    return res.json(organizations);
  }
}
