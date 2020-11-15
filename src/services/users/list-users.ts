import { UserProps } from "root/models";
import { ManageUserRequest } from "root/requests/users";
import { userModel } from "root/providers";

export const listUsers = async (query: ManageUserRequest): Promise<UserProps[]> => {
  const users = await userModel().find({
    status: query.accountStatus
  });
  return users;
};
