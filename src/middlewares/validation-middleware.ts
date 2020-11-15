import { Request, Response, NextFunction, RequestHandler } from "express";
import { validate, ValidationError } from "class-validator";
import { plainToClass } from "class-transformer";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "root/config/env-vars";
import { get } from "lodash";
import { FORBIDDEN, OK, UNAUTHORIZED } from "http-status-codes";
import { INCORRECT_CREDENTIAL, PERMISSION_DENIED } from "root/exceptions/messages";
import { AccountType } from "root/types/enums";
import { getError } from "root/exceptions/get-error";

// Validation Configuration Options
export const FORBID_UNKNOWN_PROPERTIES = {
  skipMissingProperties: false,
  whitelist: true,
  forbidNonWhitelisted: true
};

export const DEFAULT_VALIDATION_CONFIGURATION = {
  skipMissingProperties: false
};

const convertString = (data: any): string => {
  const keys = Object.keys(data);
  return keys.reduce((res, key) => `${res}${res ? ", " : ""}${data[key]}`, "");
};

const getErrorMessage = (data: any, nowKey: string): string => {
  try {
    if (!(data instanceof Array) && !(data instanceof Object)) return "";
    const keys = Object.keys(data);
    if (!keys.length) return "";
    if (nowKey == "constraints") return convertString(data);
    return keys.reduce((res, key) => {
      const errMsg = getErrorMessage(data[key], key);
      if (errMsg) return `${res}${res ? ", " : ""}${errMsg}`;
      else return res;
    }, "");
  } catch (e) {
    console.log(e);
  }
};

const getErrorObject = (data: any): object => {
  try {
    if (data instanceof Array) {
      return data.reduce((pre, val) => {
        return {
          ...pre,
          ...getErrorObject(val)
        };
      }, {});
    }
    if (data?.["property"] && Object.keys(data?.["constraints"] ?? {}).length) return {
      [data.property]: Object.values(data.constraints)
    };
    if (data?.["property"] && data?.["children"]?.length) return {
      [data.property]: getErrorObject(data.children)
    };
  } catch (e) {
    console.log(e);
  }
  return {};
};

export const setDataToRequest = (req: Request, _: Response, next: NextFunction): void => {
  req.data = {};
  next();
};

export const validatePathMiddleware = (type: any, skipMissingProperties = false): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): any => {
    validate(plainToClass(type, req.params), { skipMissingProperties })
      .then((errors: ValidationError[]) => {
        if (errors.length > 0) {
          return res.status(404).send(
            {
              errors: {
                status: 404,
                code: "NOTFOUNDERROR",
                message: getErrorObject(errors),
              }
            }
          );
        } else {
          next();
        }
      })
      .catch(error => next(error));
  };
};

export const validateBodyMiddleware = (type: any, options = DEFAULT_VALIDATION_CONFIGURATION): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): any => {
    const bodyData = plainToClass(type, req.body);

    validate(bodyData, options)
      .then((errors: ValidationError[]) => {
        if (errors.length > 0) {
          return res.status(400).send(
            {
              errors: {
                status: 400,
                code: "INVALID_REQUEST_BODY",
                message: getErrorObject(errors),
              }
            }
          );
        } else {
          req.data.body = bodyData;
          next();
        }
      });
  };
};

export const validateParamMiddleware = (type: any, skipMissingProperties = false): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): any => {
    const paramsData = plainToClass(type, req.params);
    validate(paramsData, { skipMissingProperties })
      .then((errors: ValidationError[]) => {
        if (errors.length > 0) {
          return res.status(400).send(
            {
              errors: {
                status: 400,
                code: "INVALID_REQUEST_PARAM",
                message: getErrorObject(errors),
              }
            }
          );
        } else {
          req.data.params = paramsData;
          next();
        }
      });
  };
};
export const validateQueryMiddleware = (type: any, skipMissingProperties = false): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): any => {
    const queryData = plainToClass(type, req.query);
    validate(queryData, { skipMissingProperties })
      .then((errors: ValidationError[]) => {
        if (errors.length > 0) {
          return res.status(400).send(
            {
              errors: {
                status: 400,
                code: "INVALID_REQUEST_QUERY",
                message: getErrorObject(errors),
              }
            }
          );
        } else {
          req.data.query = queryData;
          next();
        }
      });
  };
};

export const authMiddleWare = () => {
  return (req: Request, res: Response, next: NextFunction): any => {
    const authorization = req.headers.authorization;
    if (!authorization) {
      return res.status(OK).send(getError(UNAUTHORIZED, "UNAUTHORIZED"));
    } else {
      const accessToken = authorization.replace("Bearer ", "");
      jwt.verify(accessToken, ACCESS_TOKEN_SECRET, (error: Error, data: unknown) => {
        if (error) {
          return res.status(OK).send(getError(FORBIDDEN, INCORRECT_CREDENTIAL));
        }
        const userId = get(data, "userId", null);
        const userRole = get(data, "userRole", null);
        req.user = { userId, userRole };
        next();
      });
    }
  };
};

export const permissionMiddleware = (permissions: Array<AccountType>) => {
  return (req: Request, res: Response, next: NextFunction): any => {
    const userRole = req.user.userRole;
    if (permissions.length > 0 && !permissions.includes(userRole)) {
      return res.status(OK).send(getError(FORBIDDEN, PERMISSION_DENIED));
    } else {
      next();
    }
  };
};
