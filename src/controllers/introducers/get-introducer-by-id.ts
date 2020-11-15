import { Response } from "express";
import { IdQueryRequest } from "root/requests/common";
import { IntroducerService } from "root/services";
import { Controller } from "../base-controller";

export class GetIntroducerById extends Controller {
  public QueryRequst = IdQueryRequest;
  public async hander (res: Response, _: any, query: IdQueryRequest) {
    const introducer = await IntroducerService.getIntroducerById(query.id);
    return res.json(introducer);
  }
}
