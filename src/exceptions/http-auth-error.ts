import HttpStatus from "http-status-codes";;
import HttpError from "./http-error";
export default class HttpAuthError extends HttpError {
  constructor (m: string, code: number = HttpStatus.FORBIDDEN) {
    super(m, code, "AUTHERROR");
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, HttpAuthError.prototype);
  }
}
