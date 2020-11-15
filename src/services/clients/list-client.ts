import { clientModel, introducerModel, managerModel, userModel } from "root/providers";
import { AccountType } from "root/types/enums";
import { ClientProps } from "root/models";

export const listClient = async (user: User): Promise<ClientProps[]> => {
  const authUser = await userModel().findById(user.userId);

  if (user.userRole === AccountType.ADMIN) {

    const clients = await clientModel().find().populate("user");
    return clients;

  } else if (user.userRole === AccountType.MANAGER) {

    const userData = await managerModel().findOne({ user: authUser });
    const managerClientIds = userData.clients;
    const introducers = userData.introducers;
    const subClientIds = await introducerModel().find({
      _id: {
        $in: introducers
      }
    }).distinct("clients");
    console.log(managerClientIds, subClientIds);
    return null;

  } else if (user.userRole === AccountType.INTRODUCER) {

    const userData = await introducerModel().findOne({ user: authUser });
    const clientIds = userData.clients;
    const clients = await clientModel().find({
      _id: {
        $in: clientIds
      }
    }).populate("user");
    return clients;

  }
};
