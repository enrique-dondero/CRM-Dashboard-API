import { UNPROCESSABLE_ENTITY } from "http-status-codes";
import HttpError from "root/exceptions/http-error";
import { ITEM_ALREAD_EXIST } from "root/exceptions/messages";
import { claimPeriodModel } from "root/providers";
import { ClaimPeriodRequest } from "root/requests/claims/periods";
import { ClaimPeriodProps } from "root/models";

export const addClaimPeriod = async (payload: ClaimPeriodRequest): Promise<ClaimPeriodProps> => {
  const status = await claimPeriodModel().findOne({ period: payload.period });
  if (status) {
    throw new HttpError(ITEM_ALREAD_EXIST, UNPROCESSABLE_ENTITY);
  }
  const newPeriod = await claimPeriodModel().create({
    period: payload.period
  });
  return newPeriod;
};
