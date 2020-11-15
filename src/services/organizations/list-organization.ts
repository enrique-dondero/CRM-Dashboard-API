import { OrganizationProps } from "root/models";
import { organizationModel } from "root/providers";

export const listOrganization = async (): Promise<Array<OrganizationProps>> => {
  const organizations = await organizationModel().find();
  return organizations;
};
