import { NOT_FOUND } from "http-status-codes";
import HttpError from "root/exceptions/http-error";
import { NON_EXIST_USER } from "root/exceptions/messages";
import { NoteProps } from "root/models/note";
import { noteModel, userModel } from "root/providers";

export const getNotesByUserId = async (rootUserId: string, userId: string): Promise<NoteProps[]> => {
  const createdUser = await userModel().findById(rootUserId);
  const gotUser = await userModel().findById(userId);
  if (!createdUser || !gotUser) {
    throw new HttpError(NON_EXIST_USER, NOT_FOUND);
  }
  const notes = await noteModel().find({
    $or: [
      { createdBy: createdUser },
      { createdTo: gotUser }
    ]
  });
  return notes;
};
