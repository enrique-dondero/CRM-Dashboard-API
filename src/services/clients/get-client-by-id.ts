import { NOT_FOUND } from "http-status-codes";
import HttpError from "root/exceptions/http-error";
import { ITEM_NOT_FOUND } from "root/exceptions/messages";
import { ClientProps } from "root/models";
import { clientModel, userModel } from "root/providers";
import { ClientIdRequest } from "root/requests/clients";

export const getClientById = async (query: ClientIdRequest): Promise<ClientProps> => {
  const clientUser = await userModel().findById(query.clientId);
  const client = await clientModel().findOne({
    user: clientUser
  }).populate("user");
  if (!client) {
    throw new HttpError(ITEM_NOT_FOUND, NOT_FOUND);
  }
  return client;
};
