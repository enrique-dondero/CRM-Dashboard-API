import { Response } from "express";
import { NylasService } from "root/services";
import { Controller } from "root/controllers/base-controller";

export class NylasRevoke extends Controller {
  public RequireAuth = true;
  public async hander (res: Response, _: any) {
    await NylasService.revokeNylas(this.user);
    return res.json("REVOKED");
  }
}
