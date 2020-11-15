import { Response } from "express";
import { VideoService } from "root/services";
import { AccountType } from "root/types/enums";
import { Controller } from "../base-controller";

export class ListCollection extends Controller {
  public Permission = [AccountType.ADMIN];
  public async hander (res: Response, _: any) {
    const collections = await VideoService.listCollection();
    return res.json(collections);
  }
}
