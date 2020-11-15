import { Response } from "express";
import { Controller } from "root/controllers/base-controller";

export class NylasHooks extends Controller {
  public async hander (res: Response, _: any) {
    return res.json();
  }
}
