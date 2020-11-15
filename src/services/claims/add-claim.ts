import { claimModel, claimPeriodModel, claimStatusModel, organizationModel, userModel } from "root/providers";
import { AddClaimRequest } from "root/requests/claims";
import { ClaimProps } from "root/models";
import HttpError from "root/exceptions/http-error";
import { CLAIM_PERIOD_NOT_FOUND, CLAIM_STATUS_NOT_FOUND, ORGANIZATION_NOT_FOUND } from "root/exceptions/messages";
import { NOT_FOUND } from "http-status-codes";

export const addClaim = async (userReq: User, payload: AddClaimRequest): Promise<ClaimProps> => {
  const {
    associatedOrgId,
    claimPeriodId,
    claimValue,
    grossFees,
    statusId,
    customFields
  } = payload;

  const authUser = await userModel().findById(userReq.userId);
  const associatedOrganization = await organizationModel().findById(associatedOrgId);
  const status = await claimStatusModel().findById(statusId);
  const claimPeriod = await claimPeriodModel().findById(claimPeriodId);

  if (!associatedOrganization)
    throw new HttpError(ORGANIZATION_NOT_FOUND, NOT_FOUND);

  if (!status)
    throw new HttpError(CLAIM_STATUS_NOT_FOUND, NOT_FOUND);

  if (!claimPeriod)
    throw new HttpError(CLAIM_PERIOD_NOT_FOUND, NOT_FOUND);

  const claim = await claimModel().create({
    claimPeriod,
    claimValue,
    grossFees,
    status,
    associatedOrganization,
    createdBy: authUser,
    customFields
  });
  return claim;
};
