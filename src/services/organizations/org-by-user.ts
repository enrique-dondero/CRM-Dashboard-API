import { AccountType } from "root/types/enums";
import { NOT_FOUND } from "http-status-codes";
import HttpError from "root/exceptions/http-error";
import { NON_EXIST_USER } from "root/exceptions/messages";
import { OrganizationProps } from "root/models";
import { userModel } from "root/providers";
import { OrganizationService } from "..";

export const getOrganizationsByUser = async (user: User): Promise<Array<OrganizationProps>> => {
  const authUser = await userModel().findById(user.userId);
  if (!user) {
    throw new HttpError(NON_EXIST_USER, NOT_FOUND);
  }
  if (user.userRole === AccountType.ADMIN) {
    return await OrganizationService.listOrganization();
  }
  const orgs = authUser.organizations;
  return orgs;
};
