import RestfulModel from "nylas/lib/models/restful-model";
import { nylasModel, userModel } from "root/providers";
import { ChangeReadStatusRequest } from "root/requests/nylas";

export const setReadMessageById = async (user: User, query: ChangeReadStatusRequest): Promise<RestfulModel> => {
  const authUser = await userModel().findById(user.userId);
  const nylas = await nylasModel().with(authUser.nylas.accessToken);
  const message: any = await nylas.messages.find(query.messageId);
  message.unread = query.readStatus;
  message.save();
  return message;
};
