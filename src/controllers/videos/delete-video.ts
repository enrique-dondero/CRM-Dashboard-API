import { Response } from "express";
import { NO_CONTENT } from "http-status-codes";
import { IdQueryRequest } from "root/requests/common";
import { VideoService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "../base-controller";

export class DeleteVideo extends Controller {
  public Permission = [AccountType.ADMIN];
  public QueryRequst = IdQueryRequest;
  public async hander (res: Response, _: any, query: IdQueryRequest) {
    await VideoService.deleteVideo(query);
    return res.status(NO_CONTENT).send();
  }
}
