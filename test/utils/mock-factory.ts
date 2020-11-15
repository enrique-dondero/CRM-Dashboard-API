import { Model } from "mongoose";
import { SourceProps } from "../../src/models/source";

// Mock PubSub Topic
export const mockedSourceTopicPublish = jest.fn(async (buffer: Buffer) => {
  try {
    const bufferObject = JSON.parse(buffer.toString());

    return await bufferObject;
  } catch (err) {
    console.error("error on publish: ", err);

    throw (err);
  }
});

export const mockedSourcedObjectTopicPublish = jest.fn(async (buffer: Buffer) => {
  try {
    const bufferObject = JSON.parse(buffer.toString());

    return await bufferObject;
  } catch (err) {
    console.error("error on publish: ", err);

    throw (err);
  }
});

export const mockedSourceTopicFactory = () => ({
  publish: mockedSourceTopicPublish
});

export const mockedSourcedObjectTopicFactory = () => ({
  publish: mockedSourcedObjectTopicPublish
});

export const mockedModelFactory = (options: {
  findOneResult?: SourceProps | null;
  createResult?: SourceProps;
}) => {
  const mockedModel = {
    findOne: jest.fn().mockReturnValue(options.findOneResult),
    create: jest.fn().mockResolvedValue(options?.createResult),
  };

  // Conversion to unknown before casting to Model<SourceProps> is intentional
  return (mockedModel as unknown) as Model<SourceProps>;
};
