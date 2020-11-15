import { UserProps } from "root/models";
import { userModel } from "root/providers";
import { ManageUserRequest } from "root/requests/users";

export const changeUserStatusByIds = async (query: ManageUserRequest): Promise<UserProps[]> => {
  const users = await userModel().updateMany(
    {
      _id: {
        $in: query.userIds
      }
    },
    {
      status: query.accountStatus
    }
  );
  return users;
};
