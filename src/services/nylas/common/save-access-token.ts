import { NOT_FOUND } from "http-status-codes";
import HttpError from "root/exceptions/http-error";
import { NON_EXIST_USER, NOT_FOUND_IN_USER } from "root/exceptions/messages";
import { nylasModel, userModel } from "root/providers";

export const saveNylasAccessToken = async (code: string, user: User) => {
  const accessToken = await nylasModel().exchangeCodeForToken(code);
  const nylas = nylasModel().with(accessToken);
  const account = await nylas.account.get();
  if (!account) {
    throw new HttpError(NOT_FOUND_IN_USER, NOT_FOUND);
  }
  const authedUser = await userModel().findById(user.userId);
  if (!authedUser) {
    throw new HttpError(NON_EXIST_USER, NOT_FOUND);
  }
  authedUser.nylas = {
    accountId: account.accountId,
    accessToken,
  };
  await authedUser.save();
};
