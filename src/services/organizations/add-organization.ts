import { organizationModel, userModel } from "root/providers";
import { AddOrganizationRequest } from "root/requests/organizations";
import { OrganizationProps } from "root/models";

export const addOrganization = async (userReq: User, payload: AddOrganizationRequest): Promise<OrganizationProps> => {
  const user = await userModel().findById(userReq.userId);
  const {
    organizationName,
    companyName,
    address,
    websiteAddress,
    customFields
  } = payload;

  const org = await organizationModel().create({
    organizationName,
    companyName,
    address,
    websiteAddress,
    customFields
  });

  user.organizations.push(org);
  user.save();

  return org;
};
