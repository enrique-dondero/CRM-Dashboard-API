import { Response } from "express";
import { CreateNoteRequest } from "root/requests/activities";
import { Controller } from "root/controllers/base-controller";
import { ActivityService } from "root/services";

export class CreateNote extends Controller {
  public BodyRequst = CreateNoteRequest;
  public async hander (res: Response, body: CreateNoteRequest) {
    const note = await ActivityService.createNote(this.user.userId, body);
    return res.json(note);
  }
}
