import { NO_CONTENT } from "http-status-codes";
import { Controller } from "../../base-controller";
import { Response } from "express";

export class SendEmail extends Controller {
  public async hander (res: Response, _: any) {
    return res.status(NO_CONTENT).json();
  }
}
