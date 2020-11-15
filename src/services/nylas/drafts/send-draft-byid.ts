import { nylasModel, userModel } from "root/providers";
import { IdQueryRequest } from "root/requests/common";

export const sendDraftById = async (user: User, query: IdQueryRequest): Promise<void> => {
  const authUser = await userModel().findById(user.userId);
  const nylas = await nylasModel().with(authUser.nylas.accessToken);
  const draft: any = await nylas.drafts.find(query.id);
  await draft.send();
};
