import { Response } from "express";
import { ClientIdRequest } from "root/requests/clients";
import { ClientService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "../base-controller";

export class GetClientById extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER, AccountType.INTRODUCER ];
  public QueryRequst = ClientIdRequest;
  public async hander (res: Response, _: any, query: ClientIdRequest) {
    const client = await ClientService.getClientById(query);
    return res.json(client);
  }
}
