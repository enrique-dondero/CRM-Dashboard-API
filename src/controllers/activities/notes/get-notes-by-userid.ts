import { Response } from "express";
import { Controller } from "root/controllers/base-controller";
import { IdQueryRequest } from "root/requests/common";
import { ActivityService } from "root/services";

export class GetNotesByUserId extends Controller {
  public QueryRequst = IdQueryRequest;
  public async hander (res: Response, _: any, query: IdQueryRequest) {
    const notes = await ActivityService.getNotesByUserId(this.user.userId, query.id);
    return res.json(notes);
  }
}
