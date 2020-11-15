import { UpdateClaimStatusRequest } from "root/requests/claims/status";
import { ClaimStatusProps } from "root/models";
import { claimStatusModel } from "root/providers";
import HttpError from "root/exceptions/http-error";
import { ITEM_NOT_FOUND } from "root/exceptions/messages";
import { NOT_FOUND } from "http-status-codes";

export const updateClaimStatus = async (body: UpdateClaimStatusRequest): Promise<ClaimStatusProps> => {
  const status = await claimStatusModel().findById(body.statusId);
  if (!status) {
    throw new HttpError(ITEM_NOT_FOUND, NOT_FOUND);
  }
  status.name = body.newStatusName;
  status.save();
  return status;
};
