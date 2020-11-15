import { Container } from "typedi";
import {
  User ,
  File,
  Note,
  Introducer,
  Client,
  Manager,
  Master,
  Organization,
  Claim,
  ClaimStatus,
  ClaimPeriod,
  CustomField,
  Notification,
  Video,
  Collection,
} from "root/models";

export const modelProvider = (): void => {
  Container.set("model.user", User);
  Container.set("model.file", File);
  Container.set("model.note", Note);
  Container.set("model.introducer", Introducer);
  Container.set("model.client", Client);
  Container.set("model.manager", Manager);
  Container.set("model.master", Master);
  Container.set("model.organization", Organization);
  Container.set("model.claim", Claim);
  Container.set("model.claimStatus", ClaimStatus);
  Container.set("model.claimPeriod", ClaimPeriod);
  Container.set("model.customField", CustomField);
  Container.set("model.notification", Notification);
  Container.set("model.video", Video);
  Container.set("model.collection", Collection);
};
