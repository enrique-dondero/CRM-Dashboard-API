import { Response } from "express";
import { ManageUserRequest } from "root/requests/users";
import { UserService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "../base-controller";

export class ListUsers extends Controller {
  public Permission = [AccountType.ADMIN];
  public QueryRequst = ManageUserRequest;
  public async hander (res: Response, _: any, query: ManageUserRequest) {
    const users = await UserService.listUsers(query);
    return res.json(users);
  }
}
