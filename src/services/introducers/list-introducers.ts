import { introducerModel, managerModel, userModel } from "root/providers";
import { AccountType } from "root/types/enums";
import { UserProps } from "root/models";

export const listIntroducers = async (user: User): Promise<{
  userId: string;
  introducerType: string;
  name: string;
  email: string;
  status: string;
  contactNumber: string;
  managerName: string;
}[]> => {
  const authUser = await userModel().findById(user.userId);
  let users: Array<UserProps> = [];
  if (user.userRole === AccountType.ADMIN) {
    users = await userModel().find({
      accountType: AccountType.INTRODUCER
    });
  } else {
    const managerUser = await managerModel().findOne({
      user: authUser
    });
    users = managerUser.introducers;
  }
  const res = [];
  for (const userItem of users) {
    const introducer = await introducerModel().findOne({
      user: userItem
    }).populate("user");
    const item = {
      userId: userItem.id,
      introducerType: "",
      name: userItem.name,
      email: userItem.email,
      status: userItem.status,
      contactNumber: userItem.accountData.contactNumber,
      managerName: authUser.name,
    };
    if (introducer) {
      item.introducerType = introducer.type;
    }
    res.push(item);
  }
  return res;
};
