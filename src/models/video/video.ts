import { AccountType } from "root/types/enums";
import { Schema, model, Document } from "mongoose";
import { UserProps, CollectionProps } from "root/models";

export interface VideoProps extends Document {
  link: string;
  title: string;
  description: string;
  collectionType: CollectionProps;
  visibility: AccountType;
  uploadedBy: UserProps;
  createdAt: Date;
  updatedAt: Date;
}

const VideoSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  link: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  collectionType: { type: Schema.Types.ObjectId, ref: "Collection" },
  visibility: { type: String, enum: Object.keys(AccountType) },
  uploadedBy: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, {
  timestamps: true,
  _id: true
});

VideoSchema.virtual("id").get(function () {
  return this._id;
});

VideoSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
  }
});

export const Video = model<VideoProps>("video", VideoSchema);
