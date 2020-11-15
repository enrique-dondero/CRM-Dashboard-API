import { model, Schema, Document } from "mongoose";
import { OrganizationProps, UserProps, ClaimStatusProps, ClaimPeriodProps } from "root/models";

export interface ClaimProps extends Document{
  createdBy: UserProps;
  claimPeriod: ClaimPeriodProps;
  associatedOrganization: OrganizationProps;
  claimValue: number;
  grossFees: number;
  status: ClaimStatusProps;
  customFields: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const ClaimSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  claimPeriod: { type: Schema.Types.ObjectId, ref: "ClaimPeriod" },
  associatedOrganization: { type: Schema.Types.ObjectId, ref: "Organization" },
  claimValue: { type: Number },
  grossFees: { type: Number },
  status: { type: Schema.Types.ObjectId, ref: "ClaimStatus" },
  customFields: { type: Object },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, {
  timestamps: true,
  _id: true
});

ClaimSchema.virtual("id").get(function () {
  return this._id;
});

ClaimSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
  }
});

export const Claim = model<ClaimProps>("Claim", ClaimSchema);
