import { FORBIDDEN } from "http-status-codes";
import HttpError from "root/exceptions/http-error";
import { NON_EXIST_USER } from "root/exceptions/messages";
import { ManagerProps } from "root/models";
import { managerModel, userModel } from "root/providers";

export const getManagerById = async (id: string): Promise<ManagerProps> => {
  const user = await userModel().findById(id);
  const manager = await managerModel()
    .findOne({ user })
    .populate("user");
  if (!user) {
    throw new HttpError(NON_EXIST_USER, FORBIDDEN, NON_EXIST_USER);
  }
  return manager;
};
