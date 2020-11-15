import Nylas from "root/config/nylas";
import { userModel } from "root/providers";

export const revokeNylas = async (user: User): Promise<boolean> => {
  const authedUser = await userModel().findById(user.userId);
  const account: any = await Nylas.accounts.find(authedUser.nylas.accountId);
  account.revokeAll();
  return true;
};
