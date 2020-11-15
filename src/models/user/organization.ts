import { Schema, model, Document } from "mongoose";

export interface OrganizationProps extends Document {
  organizationName: string;
  companyName: string;
  address: string;
  websiteAddress: string;
  customFields: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const OrganizationSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  organizationName: { type: String, required: true },
  companyName: { type: String, required: true },
  address: { type: String, required: true },
  websiteAddress: { type: String, required: true },
  customFields: { type: Object },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, {
  timestamps: true,
  _id: true
});

OrganizationSchema.virtual("id").get(function () {
  return this._id;
});

OrganizationSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
  }
});

export const Organization = model<OrganizationProps>("Organization", OrganizationSchema);
