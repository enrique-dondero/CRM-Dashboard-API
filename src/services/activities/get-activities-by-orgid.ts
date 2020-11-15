import { NoteProps, FileProps, ClaimProps } from "root/models";
import { claimModel, fileModel, noteModel, organizationModel } from "root/providers";
import HttpError from "root/exceptions/http-error";
import { NOT_FOUND } from "http-status-codes";
import { ORGANIZATION_NOT_FOUND } from "root/exceptions/messages";
import { OrgIdRequest } from "root/requests/organizations";

export const getActivitiesByOrgId = async (query: OrgIdRequest): Promise<{
  notes: NoteProps[];
  files: FileProps[];
  claims: ClaimProps[];
  emails: any[];
}> => {
  const organization = await organizationModel().findById(query.orgId);
  if (!organization) {
    throw new HttpError(ORGANIZATION_NOT_FOUND, NOT_FOUND);
  }
  const notes = await noteModel().find({ organization }).populate("createdBy");
  const files = await fileModel().find({ organization }).populate("uploadedBy");
  const claims = await claimModel().find({ organization }).populate("createdBy");
  const emails: any[] = [];
  return {
    notes,
    files,
    claims,
    emails,
  };
};
