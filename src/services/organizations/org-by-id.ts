import { NOT_FOUND } from "http-status-codes";
import HttpError from "root/exceptions/http-error";
import { ITEM_NOT_FOUND } from "root/exceptions/messages";
import { organizationModel } from "root/providers";
import { OrgIdRequest } from "root/requests/organizations";
import { OrganizationProps } from "root/models";

export const getOrganizationById = async (query: OrgIdRequest): Promise<OrganizationProps> => {
  const organization = await organizationModel().findById(query.orgId);
  if (!organization) {
    throw new HttpError(ITEM_NOT_FOUND, NOT_FOUND);
  }
  return organization;
};
