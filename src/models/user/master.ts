import { Schema, model, Document } from "mongoose";
import { UserProps } from "root/models";

export interface MasterProps extends Document {
  user: UserProps;
  clients: Array<UserProps>;
  introducers: Array<UserProps>;
  managers: Array<UserProps>;
  customFields: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const MasterSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  clients: [{ type: Schema.Types.ObjectId, ref: "User" }],
  introducers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  managers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  customFields: { type: Object },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, {
  timestamps: true,
  _id: true
});

MasterSchema.virtual("id").get(function () {
  return this._id;
});

MasterSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
  }
});

export const Master = model<MasterProps>("Master", MasterSchema);
