import { AccountType } from "root/types/enums";
import { Response } from "express";
import { AddClientRequest } from "root/requests/clients";
import { ClientService } from "root/services";
import { Controller } from "../base-controller";

export class AddClient extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER ];
  public BodyRequst = AddClientRequest;
  public async hander (res: Response, body: AddClientRequest) {
    const client = await ClientService.addClient(this.user, body);
    return res.json(client);
  }
}
