import { CollectionProps } from "root/models";
import { collectionModel } from "root/providers";

export const listCollection = async (): Promise<Array<CollectionProps>> => {
  const collections = await collectionModel().find();
  return collections;
};
