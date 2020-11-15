import { VideoProps } from "root/models";
import { collectionModel, userModel, videoModel } from "root/providers";
import { UploadVideoRequest } from "root/requests/videos";

export const uploadVideo = async (user: User, body: UploadVideoRequest): Promise<VideoProps> => {
  const authUser = await userModel().findById(user.userId);
  const {
    collectionType,
    description,
    link,
    title,
    visibility
  } = body;
  const collection = await collectionModel().findById(collectionType);

  const video = await videoModel().create({
    collectionType: collection,
    description,
    link,
    title,
    visibility,
    uploadedBy: authUser,
  });

  return video;
};
