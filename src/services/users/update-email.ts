import { UserProps } from "root/models";
import { userModel } from "root/providers";
import { EmailBodyRequest } from "root/requests/common";

export const updateEmail = async (user: User, payload: EmailBodyRequest): Promise<UserProps> => {
  const authUser = await userModel().findById(user.userId);
  authUser.email = payload.email;
  authUser.save();
  return authUser;
};
