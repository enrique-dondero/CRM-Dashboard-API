import { claimModel, userModel } from "root/providers";
import { ClaimProps } from "root/models";
import { AccountType } from "root/types/enums";

export const getClaims = async (user: User): Promise<Array<ClaimProps>> => {
  let claims = null;

  if (user.userRole === AccountType.ADMIN) {
    claims = await claimModel().find()
      .populate("associatedOrganization")
      .populate("status");
  } else {
    const authUser = await userModel().findById(user.userId);
    claims = await claimModel().find({ createdBy: authUser })
      .populate("associatedOrganization")
      .populate("status");
  }

  return claims;
};
