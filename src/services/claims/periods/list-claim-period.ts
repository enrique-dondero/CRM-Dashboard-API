import { claimPeriodModel } from "root/providers";
import { ClaimPeriodProps } from "root/models";

export const listClaimPeriod = async (): Promise<Array<ClaimPeriodProps>> => {
  const status = await claimPeriodModel().find().sort({ createdAt: 1 });
  return status;
};
