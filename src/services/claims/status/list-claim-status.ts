import { claimStatusModel } from "root/providers";
import { ClaimStatusProps } from "root/models";

export const listClaimStatus = async (): Promise<Array<ClaimStatusProps>> => {
  const status = await claimStatusModel().find().sort({ createdAt: 1 });
  return status;
};
