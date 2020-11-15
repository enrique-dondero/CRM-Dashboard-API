import { NOT_FOUND } from "http-status-codes";
import HttpError from "root/exceptions/http-error";
import { ITEM_NOT_FOUND } from "root/exceptions/messages";
import { claimModel, claimStatusModel } from "root/providers";
import { DMClaimStatusRequest } from "root/requests/claims/status";

export const delAndMoveClaimStatus = async (query: DMClaimStatusRequest): Promise<void> => {
  const moveStatus = await claimStatusModel().findById(query.newStatusId);
  if (!moveStatus) {
    throw new HttpError(ITEM_NOT_FOUND, NOT_FOUND);
  }

  const status = await claimStatusModel().findOne({
    name: query.name.toLowerCase()
  });
  if (!status) {
    throw new HttpError(ITEM_NOT_FOUND, NOT_FOUND);
  }

  await claimModel().updateMany({ status }, { status: moveStatus });
  await status.remove();
};
