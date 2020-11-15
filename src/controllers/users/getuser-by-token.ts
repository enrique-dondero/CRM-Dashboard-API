import { Response } from "express";
import { BAD_REQUEST } from "http-status-codes";
import { Controller } from "../base-controller";
import { GetUserByTokenRequest } from "root/requests/users";
import { userModel } from "root/providers";
import HttpError from "root/exceptions/http-error";
import { INVITE_TOKEN_NOT_FOUND } from "root/exceptions/messages";

export class GetUserByToken extends Controller {
  public QueryRequst = GetUserByTokenRequest;
  public RequireAuth = false;
  public async hander (res: Response, _: any, query: GetUserByTokenRequest ) {
    const user = await userModel().findOne({ inviteToken: query.token });
    if (!query.token || !user) {
      throw new HttpError("BAD_REQUEST", BAD_REQUEST, INVITE_TOKEN_NOT_FOUND);
    }
    return res.json(user);
  }
}
