import { CONFLICT } from "http-status-codes";
import HttpError from "root/exceptions/http-error";
import { CollectionProps } from "root/models";
import { collectionModel } from "root/providers";

export const createCollection = async (name: string): Promise<CollectionProps> => {
  const collection = await collectionModel().findOne({
    name
  });
  if (collection) {
    throw new HttpError("Item Already exist", CONFLICT);
  }
  const newCollection = await collectionModel().create({
    name
  });

  return newCollection;
};
