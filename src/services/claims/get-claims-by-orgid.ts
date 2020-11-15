import { NOT_FOUND } from "http-status-codes";
import HttpError from "root/exceptions/http-error";
import { ITEM_NOT_FOUND } from "root/exceptions/messages";
import { ClaimProps } from "root/models";
import { claimModel, organizationModel, userModel } from "root/providers";
import { OrgIdRequest } from "root/requests/organizations";

export const getClaimsByOrgId = async (user: User, query: OrgIdRequest): Promise<Array<ClaimProps>> => {
  const authUser = await userModel().findById(user.userId);
  const org = await organizationModel().findById(query.orgId);
  if (!org) {
    throw new HttpError(ITEM_NOT_FOUND, NOT_FOUND);
  }
  const claims = await claimModel().find({
    createdBy: authUser,
    associatedOrganization: org
  })
    .populate("claimPeriod")
    .populate("associatedOrganization")
    .populate("status");
  return claims;
};
