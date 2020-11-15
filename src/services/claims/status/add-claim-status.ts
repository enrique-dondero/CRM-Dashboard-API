import { UNPROCESSABLE_ENTITY } from "http-status-codes";
import HttpError from "root/exceptions/http-error";
import { ITEM_ALREAD_EXIST } from "root/exceptions/messages";
import { claimStatusModel } from "root/providers";
import { ClaimStatusRequest } from "root/requests/claims/status";
import { ClaimStatusProps } from "root/models";

export const addClaimStatus = async (payload: ClaimStatusRequest): Promise<ClaimStatusProps> => {
  const status = await claimStatusModel().findOne({ name: payload.name });
  if (status) {
    throw new HttpError(ITEM_ALREAD_EXIST, UNPROCESSABLE_ENTITY);
  }
  const newStatus = await claimStatusModel().create({
    name: payload.name
  });
  return newStatus;
};
