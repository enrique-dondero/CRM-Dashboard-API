import { nylasModel, userModel } from "root/providers";
import { IdQueryRequest } from "root/requests/common";

export const delDraftById = async (user: User, query: IdQueryRequest): Promise<void> => {
  const authUser = await userModel().findById(user.userId);
  const nylas = await nylasModel().with(authUser.nylas.accessToken);
  await nylas.drafts.delete(query.id, { version: 0 });
};
