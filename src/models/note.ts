import { ClaimProps, UserProps } from "root/models";
import { Schema, model, Document } from "mongoose";
import { OrganizationProps } from "user";

export interface NoteProps extends Document {
  status: string;
  body: string;
  createdBy: UserProps;
  createdTo: UserProps;
  claim: ClaimProps;
  organization: OrganizationProps;
  createdAt: Date;
  updatedAt: Date;
}

const NoteSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  status: { type: String, required: true },
  body: { type: String },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  createdTo: { type: Schema.Types.ObjectId, ref: "User" },
  claim: { type: Schema.Types.ObjectId, ref: "Claim" },
  organization: { type: Schema.Types.ObjectId, ref: "Organization" },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, {
  timestamps: true,
  _id: true
});

NoteSchema.virtual("id").get(function () {
  return this._id;
});

NoteSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
  }
});

export const Note = model<NoteProps>("Note", NoteSchema);
