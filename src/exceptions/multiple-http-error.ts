import HttpStatus from "http-status-codes";
import { ExtendableError } from "ts-error";
import BaseError from "./base-error";

export default class MultipleHttpError extends ExtendableError {
  code: number;
  name: string;
  errors: BaseError[];

  constructor (m: string, errors: BaseError[], code: number = HttpStatus.INTERNAL_SERVER_ERROR, name: string) {
    super(m);
    this.code = code;
    this.name = name ?? this.constructor.name;
    this.errors = errors;
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, MultipleHttpError.prototype);
  }

  getCode () {
    return this.code;
  }

  getErrors (): BaseError[] {
    return this.errors;
  }
}
