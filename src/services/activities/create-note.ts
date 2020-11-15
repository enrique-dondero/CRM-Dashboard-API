import HttpError from "root/exceptions/http-error";
import { NoteProps } from "root/models/note";
import { CreateNoteRequest } from "root/requests/activities";
import { claimModel, noteModel, organizationModel, userModel } from "root/providers";
import { NON_EXIST_USER } from "root/exceptions/messages";
import { NOT_FOUND } from "http-status-codes";

export const createNote = async (userId: string, payload: CreateNoteRequest): Promise<NoteProps> => {
  const {
    status,
    claimId,
    createdToUserId,
    orgId,
    body,
  } = payload;

  const creatingUser = await userModel().findById(userId);
  if (!creatingUser)
    throw new HttpError(NON_EXIST_USER, NOT_FOUND);
  const note = await noteModel().create({
    status,
    createdBy: creatingUser,
  });

  if (body) {
    note.body = body;
  }

  if (createdToUserId) {
    const gettingUser = await userModel().findById(createdToUserId);
    if (!gettingUser)
      throw new HttpError(NON_EXIST_USER, NOT_FOUND);

    note.createdTo = gettingUser;
  } else if (claimId) {
    const claim = await claimModel().findById(claimId);
    if (!claim)
      throw new HttpError("CLAIM NOT FOUND", NOT_FOUND);

    note.claim = claim;
  } else if (orgId) {
    const organization = await organizationModel().findById(orgId);
    if (!organization)
      throw new HttpError("ORG NOT FOUND", NOT_FOUND);

    note.organization = organization;
  }
  note.save();
  return note;
};
