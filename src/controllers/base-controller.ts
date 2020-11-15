import { AccountType } from "root/types/enums";
import { NextFunction, Request, RequestHandler, Response } from "express";
import {
  setDataToRequest,
  validateBodyMiddleware,
  validateParamMiddleware, validateQueryMiddleware,
  authMiddleWare, permissionMiddleware
} from "root/middlewares/validation-middleware";
export abstract class Controller {
  public BodyRequst: BodyRequest = null;
  public QueryRequst: QueryRequest = null;
  public ParamsRequst: ParamsRequest = null;
  public RequireAuth = true;
  public user: User = null;
  public Permission: Array<AccountType> = null;

  public getMiddlewares (middlewares: Array<RequestHandler> = []): Array<RequestHandler> {
    if (this.BodyRequst) {
      middlewares.unshift(validateBodyMiddleware(this.BodyRequst));
    }
    if (this.QueryRequst) {
      middlewares.unshift(validateQueryMiddleware(this.QueryRequst));
    }
    if (this.ParamsRequst) {
      middlewares.unshift(validateParamMiddleware(this.ParamsRequst));
    }
    if (this.RequireAuth) {
      if (this.Permission) {
        middlewares.unshift(permissionMiddleware(this.Permission));
      }
      middlewares.unshift(authMiddleWare());
    }
    middlewares.unshift(setDataToRequest);
    return middlewares;
  }

  public setUp () {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        this.user = req.user;
        return await this.hander(res, req.data.body, req.data.query, req.data.params);
      } catch (err) {
        next(err);
      }
    };
  }

  public async hander (res?: Response, request?: BodyRequest, query?: QueryRequest, params?: ParamsRequest): Promise<Response | void> {
    return res.json();
  };
}
