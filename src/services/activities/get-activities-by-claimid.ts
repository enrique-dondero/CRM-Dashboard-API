import { ClaimIdRequest } from "root/requests/claims";
import { NoteProps, FileProps } from "root/models";
import { claimModel, fileModel, noteModel } from "root/providers";
import HttpError from "root/exceptions/http-error";
import { NOT_FOUND } from "http-status-codes";
import { CLAIM_NOT_FOUND } from "root/exceptions/messages";

export const getActivitiesByClaimId = async (query: ClaimIdRequest): Promise<{ notes: NoteProps[]; files: FileProps[] }> => {
  const claim = await claimModel().findById(query.claimId);
  if (!claim) {
    throw new HttpError(CLAIM_NOT_FOUND, NOT_FOUND);
  }
  const notes = await noteModel().find({ claim });
  const files = await fileModel().find({ claim });
  return {
    notes,
    files
  };
};
