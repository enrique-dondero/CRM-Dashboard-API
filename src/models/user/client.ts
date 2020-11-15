import { LeadType } from "root/types/enums";
import { Schema, model, Document } from "mongoose";
import { UserProps } from "root/models";

export interface ClientProps extends Document {
  user: UserProps;
  leadType: LeadType;
  customFields: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const ClientSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  leadType: { type: String, enum: Object.keys(LeadType), default: LeadType.MANUAL },
  customFields: { type: Object },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, {
  timestamps: true,
  _id: true
});

ClientSchema.virtual("id").get(function () {
  return this._id;
});

ClientSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
  }
});

export const Client = model<ClientProps>("Client", ClientSchema);
