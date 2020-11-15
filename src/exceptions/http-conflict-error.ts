import HttpStatus from "http-status-codes";;
import HttpError from "./http-error";
export default class HttpConflictError<T> extends HttpError {
  conflictResource: T;

  constructor (
    conflictResource: T,
    m: string,
  ) {
    super(m, HttpStatus.CONFLICT, "CONFLICTERROR");
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, HttpConflictError.prototype);
    this.conflictResource = conflictResource;
  }

  getConflictResource () {
    return this.conflictResource;
  }
}
