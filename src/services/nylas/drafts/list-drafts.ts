import RestfulModel from "nylas/lib/models/restful-model";
import { nylasModel, userModel } from "root/providers";

export const listDrafts = async (user: User): Promise<RestfulModel[]> => {
  const authUser = await userModel().findById(user.userId);
  const nylas = await nylasModel().with(authUser.nylas.accessToken);
  const drafts = await nylas.drafts.list();
  return drafts;
};
