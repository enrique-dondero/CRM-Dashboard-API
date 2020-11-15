import { clientModel, organizationModel, userModel } from "root/providers";
import { AddClientRequest } from "root/requests/clients";
import { ClientProps } from "root/models";
import { getUserModel } from "../users";

export const addClient = async (userReq: User, payload: AddClientRequest): Promise<ClientProps> => {
  const authUser = await userModel().findById(userReq.userId);
  const {
    contactNumber,
    email,
    name,
    organizations,
    customFields
  } = payload;

  const clientUser = await userModel().create({
    email,
    name,
    accountData: {
      contactNumber
    }
  });

  const orgs = await organizationModel().create(organizations);
  clientUser.organizations = orgs;
  clientUser.save();
  const client = await clientModel().create({
    user: clientUser,
    customFields
  });

  const model = getUserModel(userReq.userRole);
  await (await model.findOne({
    user: authUser
  })).updateOne(
    { $push: { clients: client }},
  );

  return client;
};
