import { AccountType } from "root/types/enums";
import { Response } from "express";
import { AddOrganizationRequest } from "root/requests/organizations";
import { OrganizationService } from "root/services";
import { Controller } from "../base-controller";

export class AddOrganization extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER, AccountType.CLIENT ];
  public BodyRequst = AddOrganizationRequest;
  public async hander (res: Response, body: AddOrganizationRequest) {
    const organization = await OrganizationService.addOrganization(this.user, body);
    return res.json(organization);
  }
}
