import { videoModel } from "root/providers";
import { IdQueryRequest } from "root/requests/common";

export const deleteVideo = async (query: IdQueryRequest): Promise<void> => {
  await videoModel().findOneAndDelete({ _id: query.id });
};
