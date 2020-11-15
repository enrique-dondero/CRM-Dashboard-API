import RestfulModel from "nylas/lib/models/restful-model";
import { nylasModel, userModel } from "root/providers";

export const listMessages = async (user: User): Promise<RestfulModel[]> => {
  const authUser = await userModel().findById(user.userId);
  const nylas = await nylasModel().with(authUser.nylas.accessToken);
  const messages = await nylas.messages.list({ in: "inbox" });
  return messages;
};
