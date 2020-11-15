import { PubSub } from "@google-cloud/pubsub";
import { Container } from "typedi";
import grpc from "grpc";
import { GrpcModule } from "google-gax/build/src/grpc";
import { GOOGLE_APPLICATION_CREDENTIALS, GOOGLE_PROJECT_ID, GOOGLE_PUBSUB_TOPIC_NOTIFICATION } from "root/util/secrets";
import { transformNotification } from "root/util/transform_notification";

interface Message<T> {
    data: T;
    type?: string;
    actionName: string;
    topicName?: string;
}

export interface NotificationData {
  userIds: Array<string>;
  message: {
    body: string;
    link: string;
  };
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const grpcModule: GrpcModule = <GrpcModule><unknown>grpc;

export const pubSub = new PubSub({
  projectId: GOOGLE_PROJECT_ID,
  grpc: grpcModule
});

export const pubsubClient = (): PubSub => {
  return Container.get("google.pubsub");
};

export const publishMessage = async <T>(message: Message<T>, customAttributes = {}): Promise<string> => {
  const isGoogleData = Boolean(
    GOOGLE_PUBSUB_TOPIC_NOTIFICATION &&
    GOOGLE_APPLICATION_CREDENTIALS &&
    GOOGLE_PROJECT_ID
  );

  if (!isGoogleData) {
    console.warn(`The ${message.actionName} was not published. Google credentials are required`);
    return;
  }

  const { data, actionName, topicName = GOOGLE_PUBSUB_TOPIC_NOTIFICATION } = message;

  const publishData: {
    type?: string;
    data: Record<string, any>;
    action: string;
  } = {
    data: transformNotification(data),
    action: actionName
  };

  if (message.type) {
    publishData.type = message.type;
  }

  const dataBuffer = Buffer.from(JSON.stringify(publishData));
  return pubsubClient().topic(topicName).publish(dataBuffer, customAttributes);
};
