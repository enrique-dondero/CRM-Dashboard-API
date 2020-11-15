import RestfulModel from "nylas/lib/models/restful-model";
import { nylasModel, userModel } from "root/providers";
import { IdQueryRequest } from "root/requests/common";

export const getDraftById = async (user: User, query: IdQueryRequest): Promise<RestfulModel> => {
  const authUser = await userModel().findById(user.userId);
  const nylas = await nylasModel().with(authUser.nylas.accessToken);
  const draft = await nylas.drafts.find(query.id);
  return draft;
};
