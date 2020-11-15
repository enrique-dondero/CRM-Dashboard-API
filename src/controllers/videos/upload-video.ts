import { Response } from "express";
import { UploadVideoRequest } from "root/requests/videos";
import { VideoService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "../base-controller";

export class UploadVideo extends Controller {
  public Permission = [AccountType.ADMIN];
  public BodyRequst = UploadVideoRequest;
  public async hander (res: Response, body: UploadVideoRequest) {
    const video = await VideoService.uploadVideo(this.user, body);
    return res.json(video);
  }
}
