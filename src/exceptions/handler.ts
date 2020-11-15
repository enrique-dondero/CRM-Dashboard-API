import { Request, Response, NextFunction } from "express";
import HttpStatus from "http-status-codes";
import HttpError from "./http-error";
import MultipleHttpError from "./multiple-http-error";
import HttpConflictError from "root/exceptions/http-conflict-error";
import { isNotOneInstanceOf } from "root/util";
import { INVALID_URL } from "./messages";
import logger from "root/util/logger";
import { APP_DEBUG } from "root/config/env-vars";

// TODO create reusable function to send error & winston logger if its not insteance of HttpError
const dontReports: Array<any> = [ HttpError, MultipleHttpError ];

export default (err: Error, req: Request, res: Response, next: NextFunction): void => {
  if (res.headersSent) {
    return next(err);
  }

  if (isNotOneInstanceOf(dontReports, err)) {
  // log error to winston <file/stdout>
    logger.error(JSON.stringify({ ...err, stack: err.stack }));
  }

  res.status(HttpStatus.INTERNAL_SERVER_ERROR);
  if (err instanceof HttpError) {
    res.status(err.getCode());
  }

  if (err instanceof MultipleHttpError) {
    res.status(err.getCode());
    res.send({
      errors: err.getErrors().map(e => ({
        status: e.getCode(),
        code: e.name,
        message: e.message,
        trace: APP_DEBUG && res.statusCode != HttpStatus.NOT_FOUND ? e.stack : undefined
      }))
    });

    return;
  }

  if (err instanceof HttpConflictError) {
    res.status(err.code).json({
      errors: {
        status: err.code,
        code: err.name,
        message: err.message,
        meta: {
          data: err.conflictResource,
        }
      }
    });
    return;
  }

  res.send({
    errors: {
      status: res.statusCode,
      code: err.name,
      message: err.message,
      trace: APP_DEBUG && res.statusCode != HttpStatus.NOT_FOUND ? err.stack : undefined
    }
  });
};

export const NotFoundHandler = (): void => {
  throw new HttpError(INVALID_URL, HttpStatus.NOT_FOUND, "ERRNOTFOUND");
};
