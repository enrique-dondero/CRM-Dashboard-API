import { Container } from "typedi";
import Nylas from "root/config/nylas";
import { pubSub } from "root/pubsub";

export const commonProvider = (): void => {
  Container.set("common.nylas", Nylas);
  Container.set("google.pubsub", pubSub);
};
