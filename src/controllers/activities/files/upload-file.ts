import { Response } from "express";
import { Controller } from "root/controllers/base-controller";
import { UploadFileRequest } from "root/requests/activities";
import { ActivityService } from "root/services";

export class UploadFile extends Controller {
  public BodyRequst = UploadFileRequest;
  public async hander (res: Response, body: UploadFileRequest) {
    const file = await ActivityService.uploadFile(this.user.userId, body);
    return res.json(file);
  }
}
