import { FORBIDDEN } from "http-status-codes";
import HttpError from "root/exceptions/http-error";
import { NON_EXIST_USER } from "root/exceptions/messages";
import { IntroducerProps } from "root/models";
import { introducerModel, userModel } from "root/providers";

export const getIntroducerById = async (id: string): Promise<IntroducerProps> => {
  const user = await userModel().findById(id);
  const introducer = await introducerModel()
    .findOne({ user })
    .populate("user");
  if (!user) {
    throw new HttpError(NON_EXIST_USER, FORBIDDEN, NON_EXIST_USER);
  }
  return introducer;
};
