import { NOT_FOUND } from "http-status-codes";
import HttpError from "root/exceptions/http-error";
import { ITEM_NOT_FOUND } from "root/exceptions/messages";
import { ClaimProps } from "root/models";
import { claimModel } from "root/providers";

export const getClaimById = async (claimId: string): Promise<ClaimProps> => {
  const claim = await claimModel().findById(claimId)
    .populate("user")
    .populate("associatedOrganization")
    .populate("status")
    .populate("claimPeriod");
  if (!claim) {
    throw new HttpError(ITEM_NOT_FOUND, NOT_FOUND);
  }
  return claim;
};
