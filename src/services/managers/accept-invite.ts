import { ManagerProps } from "root/models";
import HttpError from "root/exceptions/http-error";
import { BAD_REQUEST } from "http-status-codes";
import { INVITE_TOKEN_NOT_FOUND } from "root/exceptions/messages";
import { managerModel, userModel } from "root/providers";
import { AcceptManagerInviteRequest } from "root/requests/managers";
import { AccountStatus } from "root/types/enums";

export const acceptInvite = async (payload: AcceptManagerInviteRequest): Promise<ManagerProps> => {
  const user = await userModel().findOne({ inviteToken: payload.token });
  if (!payload.token || !user) {
    throw new HttpError("BAD_REQUEST", BAD_REQUEST, INVITE_TOKEN_NOT_FOUND);
  }

  const {
    name,
    contactNumber,
    birthday,
    password,
    customFields,
  } = payload;

  user.inviteToken = null;
  user.name = name;
  user.password = password;
  user.status = AccountStatus.Onboarded;
  user.accountData = {
    birthday,
    contactNumber
  };
  await user.save();

  const manager = await managerModel().create({
    user,
    customFields,
  });
  return manager;
};
