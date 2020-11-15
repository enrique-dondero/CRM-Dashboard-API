import { HobbiesAndInterestsEnum, IntroducerType, PreferredTermType } from "root/types/enums";
import { Schema, model, Document } from "mongoose";
import { UserProps } from "root/models";

export interface IntroducerProps extends Document {
  user: UserProps;
  clients: Array<UserProps>;
  preferredTerm: PreferredTermType;
  hobbiesAndInterests: Array<HobbiesAndInterestsEnum>;
  type: IntroducerType;
  companyName: string;
  customFields: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const IntroducerSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  clients: [{ type: Schema.Types.ObjectId, ref: "User" }],
  preferredTerm: { type: String, enum: Object.keys(PreferredTermType) },
  hobbiesAndInterests: { type: [{
    type: String,
    enum: Object.values(HobbiesAndInterestsEnum),
  }] },
  type: { type: String, enum: Object.keys(IntroducerType) },
  companyName: { type: String },
  customFields: { type: Object },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, {
  timestamps: true,
  _id: true
});

IntroducerSchema.virtual("id").get(function () {
  return this._id;
});

IntroducerSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
  }
});

export const Introducer = model<IntroducerProps>("Introducer", IntroducerSchema);
