import HttpError from "root/exceptions/http-error";
import { FileProps } from "root/models/file";
import { UploadFileRequest } from "root/requests/activities";
import { fileModel, userModel } from "root/providers";
import { NON_EXIST_USER } from "root/exceptions/messages";
import { NOT_FOUND } from "http-status-codes";

export const uploadFile = async (userId: string ,body: UploadFileRequest): Promise<FileProps> => {
  const uploadingUser = await userModel().findById(userId);
  const gettingUser = await userModel().findById(body.uploadToUserId);
  if (!uploadingUser)
    throw new HttpError(NON_EXIST_USER, NOT_FOUND);

  if (!gettingUser)
    throw new HttpError(NON_EXIST_USER, NOT_FOUND);

  const file = await fileModel().create({
    name: body.name,
    link: body.link,
    uploadedBy: uploadingUser,
    uploadedTo: gettingUser,
  });
  return file;
};
