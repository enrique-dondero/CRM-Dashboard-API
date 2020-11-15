import { Response } from "express";
import { Controller } from "../base-controller";
import { IntroducerService } from "root/services";
import { AccountType } from "root/types/enums";

export class ListIntroducers extends Controller {
  public Permission = [ AccountType.ADMIN, AccountType.MANAGER ];
  public async hander (res: Response, _: any ) {
    const introducers = await IntroducerService.listIntroducers(this.user);
    return res.json(introducers);
  }
}
