import { Schema, model, Document } from "mongoose";
import { UserProps, ClaimProps } from "root/models";
import { OrganizationProps } from "user";

export interface FileProps extends Document {
  name: string;
  link: string;
  uploadedBy: UserProps;
  uploadedTo: UserProps;
  claim: ClaimProps;
  organization: OrganizationProps;
  createdAt: Date;
  updatedAt: Date;
}

const FileSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  name: { type: String, required: true },
  link: { type: String, required: true },
  uploadedBy: { type: Schema.Types.ObjectId, ref: "User" },
  uploadedTo: { type: Schema.Types.ObjectId, ref: "User" },
  claim: { type: Schema.Types.ObjectId, ref: "Claim" },
  organization: { type: Schema.Types.ObjectId, ref: "Organization" },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, {
  timestamps: true,
  _id: true
});

FileSchema.virtual("id").get(function () {
  return this._id;
});

FileSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
  }
});

export const File = model<FileProps>("File", FileSchema);
