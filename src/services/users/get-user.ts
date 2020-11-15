import { UserProps } from "root/models";
import { userModel } from "root/providers";

export const getUser = async (user: User): Promise<UserProps> => {
  const authUser = await userModel().findById(user.userId);
  return authUser;
};
