import MailHeader from "./header";
import MailFooter from "./footer";
import mjml2html from "mjml";
import HttpError from "root/exceptions/http-error";
import { INTERNAL_SERVER_ERROR } from "http-status-codes";

export const renderEmail = (MailContent: string) => {
  const res = mjml2html(`
  ${MailHeader}
  ${MailContent}
  ${MailFooter}
  `);
  if (res.errors.length) {
    throw new HttpError("Internal Server error", INTERNAL_SERVER_ERROR, "Can't Send Email");
  }
  return res.html;
};
