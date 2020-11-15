import { Response } from "express";
import { ClientService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "../base-controller";

export class ListClient extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER ];
  public async hander (res: Response, _: any) {
    const clients = await ClientService.listClient(this.user);
    return res.json(clients);
  }
}
