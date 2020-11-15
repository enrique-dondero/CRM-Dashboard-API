import { Response } from "express";
import { UpdateVideoRequest } from "root/requests/videos";
import { VideoService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "../base-controller";

export class UpdateVideo extends Controller {
  public Permission = [AccountType.ADMIN];
  public BodyRequst = UpdateVideoRequest;
  public async hander (res: Response, body: UpdateVideoRequest) {
    const video = await VideoService.updateVideo(body);
    return res.json(video);;
  }
}
