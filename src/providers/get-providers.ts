import { Model } from "mongoose";
import Nylas from "root/config/nylas";
import { Container } from "typedi";
import {
  UserProps,
  FileProps,
  NoteProps,
  IntroducerProps,
  ClientProps,
  ManagerProps,
  MasterProps,
  OrganizationProps,
  ClaimProps,
  ClaimStatusProps,
  ClaimPeriodProps,
  CustomFieldProps,
  NotificationProps,
  CollectionProps,
  VideoProps,
} from "root/models";

// Nylas Models
export const nylasModel = (): typeof Nylas => {
  return Container.get("common.nylas");
};

// User Models
export const userModel = (): Model<UserProps> => {
  return Container.get("model.user");
};

export const introducerModel = (): Model<IntroducerProps> => {
  return Container.get("model.introducer");
};

export const clientModel = (): Model<ClientProps> => {
  return Container.get("model.client");
};

export const managerModel = (): Model<ManagerProps> => {
  return Container.get("model.manager");
};

export const masterModel = (): Model<MasterProps> => {
  return Container.get("model.master");
};

export const organizationModel = (): Model<OrganizationProps> => {
  return Container.get("model.organization");
};

// File Models
export const fileModel = (): Model<FileProps> => {
  return Container.get("model.file");
};

// Note Models
export const noteModel = (): Model<NoteProps> => {
  return Container.get("model.note");
};

// Claim Models
export const claimModel = (): Model<ClaimProps> => {
  return Container.get("model.claim");
};

export const claimStatusModel = (): Model<ClaimStatusProps> => {
  return Container.get("model.claimStatus");
};

export const claimPeriodModel = (): Model<ClaimPeriodProps> => {
  return Container.get("model.claimPeriod");
};

// CustomField Model
export const customFieldModel = (): Model<CustomFieldProps> => {
  return Container.get("model.customField");
};

// Notification Model
export const notificationModel = (): Model<NotificationProps> => {
  return Container.get("model.notification");
};

// Video Models
export const videoModel = (): Model<VideoProps> => {
  return Container.get("model.video");
};

export const collectionModel = (): Model<CollectionProps> => {
  return Container.get("model.collection");
};
