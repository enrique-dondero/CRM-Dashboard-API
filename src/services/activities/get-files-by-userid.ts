import { NOT_FOUND } from "http-status-codes";
import HttpError from "root/exceptions/http-error";
import { NON_EXIST_USER } from "root/exceptions/messages";
import { FileProps } from "root/models/file";
import { fileModel, userModel } from "root/providers";

export const getFilesByUserId = async (rootUserId: string, userId: string): Promise<FileProps[]> => {
  const uploadedUser = await userModel().findById(rootUserId);
  const gotUser = await userModel().findById(userId);
  if (!uploadedUser || !gotUser) {
    throw new HttpError(NON_EXIST_USER, NOT_FOUND);
  }
  const files = await fileModel().find({
    $or: [
      { uploadedBy: uploadedUser },
      { uploadedTo: gotUser }
    ]
  });
  return files;
};
