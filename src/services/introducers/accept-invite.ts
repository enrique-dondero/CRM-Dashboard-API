import { IntroducerProps } from "root/models";
import { AcceptIntroduerInviteRequest } from "root/requests/introducers";
import HttpError from "root/exceptions/http-error";
import { BAD_REQUEST } from "http-status-codes";
import { INVITE_TOKEN_NOT_FOUND } from "root/exceptions/messages";
import { AccountStatus } from "root/types/enums";
import { introducerModel, userModel } from "root/providers";

export const acceptInvite = async (payload: AcceptIntroduerInviteRequest): Promise<IntroducerProps> => {
  const user = await userModel().findOne({ inviteToken: payload.token });
  if (!payload.token || !user) {
    throw new HttpError("BAD_REQUEST", BAD_REQUEST, INVITE_TOKEN_NOT_FOUND);
  }
  const {
    name,
    contactNumber,
    introducerType,
    birthday,
    hobbiesAndInterests,
    preferredTerm,
    password,
    customFields
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

  const introducer = await introducerModel().create({
    user: user,
    type: introducerType,
    hobbiesAndInterests,
    preferredTerm,
    customFields
  });

  return introducer;
};
