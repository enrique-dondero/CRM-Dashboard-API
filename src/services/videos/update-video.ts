import { collectionModel, videoModel } from "root/providers";
import { VideoProps } from "root/models";
import { UpdateVideoRequest } from "root/requests/videos";
import HttpError from "root/exceptions/http-error";
import { ITEM_NOT_FOUND } from "root/exceptions/messages";
import { NOT_FOUND } from "http-status-codes";

export const updateVideo = async (body: UpdateVideoRequest): Promise<VideoProps> => {
  const {
    collectionType,
    description,
    link,
    title,
    visibility,
    videoId
  } = body;
  let collection = null;
  if (collectionType) {
    collection = await collectionModel().findById(collectionType);
  }

  const video = await videoModel().findById(videoId);
  if (!video) {
    throw new HttpError(ITEM_NOT_FOUND, NOT_FOUND);
  }

  if (description) video.description = description;
  if (link) video.link = link;
  if (title) video.title = title;
  if (visibility) video.visibility = visibility;
  if (collection) video.collectionType = collection;

  video.save();

  return video;
};
