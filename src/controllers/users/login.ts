import { Controller } from "../base-controller";
import { Response } from "express";
import { LoginBodyRequest } from "root/requests/auths";
import { UserService } from "root/services";
import { FORBIDDEN } from "http-status-codes";
import { NON_EXIST_USER, NO_MATCH_PASSWORD } from "root/exceptions/messages";
import HttpError from "root/exceptions/http-error";

export class Login extends Controller {
  public BodyRequst = LoginBodyRequest;
  public RequireAuth = false;
  public async hander (res: Response, body: LoginBodyRequest) {
    if (!(await UserService.checkExist(body.email))) {
      throw new HttpError("FORBIDEN", FORBIDDEN, NON_EXIST_USER);
    }
    const token = await UserService.login(body);
    if (token === false) {
      throw new HttpError("FORBIDEN", FORBIDDEN, NO_MATCH_PASSWORD);
    }
    return res.json({ token });
  }
}
