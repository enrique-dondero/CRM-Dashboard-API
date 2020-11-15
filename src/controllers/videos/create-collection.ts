import { Response } from "express";
import { CreateCollectionRequest } from "root/requests/videos";
import { VideoService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "../base-controller";

export class CreateCollection extends Controller {
  public Permission = [AccountType.ADMIN];
  public BodyRequst = CreateCollectionRequest;
  public async hander (res: Response, body: CreateCollectionRequest) {
    const video = await VideoService.createCollection(body.name);
    return res.json(video);
  }
}
