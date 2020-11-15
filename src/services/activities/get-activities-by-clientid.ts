import { ClientIdRequest } from "root/requests/clients";
import { NoteProps, FileProps, OrganizationProps } from "root/models";
import { fileModel, noteModel, nylasModel, userModel } from "root/providers";
import RestfulModel from "nylas/lib/models/restful-model";

export const getActivitiesByClientId = async (query: ClientIdRequest): Promise<{
  notes: Array<NoteProps>;
  files: Array<FileProps>;
  emails: Array<RestfulModel>;
  organizations: Array<OrganizationProps>;
}> => {
  const clientUser = await userModel().findById(query.clientId);
  const nylas = await nylasModel().with(clientUser.nylas.accessToken);
  const emails = await nylas.messages.list();
  const notes = await noteModel().find({
    createdTo: clientUser
  });
  const files = await fileModel().find({
    createdTo: clientUser
  });
  return {
    notes,
    files,
    emails: emails,
    organizations: clientUser.organizations
  };
};
