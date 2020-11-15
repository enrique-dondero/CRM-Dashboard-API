import { AccountStatus, AccountType } from "root/types/enums";
import { Schema, model, Document } from "mongoose";
import { OrganizationProps } from "root/models/user";
import { userModel } from "root/providers";

export interface UserProps extends Document {
  email: string;
  password: string;
  accountType: AccountType;
  name: string;
  inviteToken: string;
  status: AccountStatus;
  nylas: {
    accessToken: string;
    accountId: string;
  };
  accountData: {
    birthday: Date;
    contactNumber: string;
  };
  organizations: Array<OrganizationProps>;
  createdAt: Date;
  updatedAt: Date;
  lastLoginDate: Date;
}

const UserSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  email: { type: String, required: true },
  password: { type: String },
  accountType: { type: String, enum: Object.keys(AccountType) },
  name: { type: String },
  inviteToken: { type: String },
  status: { type: String, enum: Object.keys(AccountStatus) },
  nylas: {
    accessToken: { type: String },
    accountId: { type: String },
  },
  accountData: {
    birthday: { type: Date },
    contactNumber: { type: String },
  },
  organizations: [{ type: Schema.Types.ObjectId, ref: "Organization" }],
  createdAt: { type: Date },
  updatedAt: { type: Date },
  lastLoginDate: { type: Date, default: Date.now() },
}, {
  timestamps: true,
  _id: true
});

UserSchema.static("login", async function (id: Schema.Types.ObjectId) {
  return await userModel().findByIdAndUpdate(id, { "$set": { "lastLoginDate": Date.now() }}, { new: true });
});

UserSchema.virtual("id").get(function () {
  return this._id;
});

UserSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
    delete ret.inviteToken;
    delete ret.password;
  }
});

export const User = model<UserProps>("User", UserSchema);
