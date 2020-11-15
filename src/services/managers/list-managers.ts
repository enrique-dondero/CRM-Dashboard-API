import { BrowserQueryRequest } from "root/requests/common";
import { managerModel } from "root/providers";
import { ManagerProps } from "root/models";

export const listManagers = async (browserParams: BrowserQueryRequest): Promise<Array<ManagerProps>> => {
  const managers = await managerModel().find()
    .populate("user")
    .limit(browserParams.limit)
    .skip(browserParams.limit * (browserParams.page - 1));
  return managers;
};
