import { UserProps } from "root/models";
import { Schema, model, Document } from "mongoose";

export interface NotificationProps extends Document {
  checked: boolean;
  createdBy: UserProps;
  message: {
    body: string;
    link: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const NotificationSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  checked: { type: Boolean, default: false },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  message: {
    body: { type: String },
    link: { type: String }
  },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, {
  timestamps: true,
  _id: true
});

NotificationSchema.virtual("id").get(function () {
  return this._id;
});

NotificationSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
  }
});

export const Notification = model<NotificationProps>("Notification", NotificationSchema);
