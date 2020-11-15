import { nylasModel, userModel } from "root/providers";
import { IdQueryRequest } from "root/requests/common";

export const delMessageById = async (user: User, query: IdQueryRequest): Promise<void> => {
  const authUser = await userModel().findById(user.userId);
  const nylas = await nylasModel().with(authUser.nylas.accessToken);
  const message = await nylas.messages.find(query.id);
  nylas.messages.delete(message).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  });
};
