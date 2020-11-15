import { model, Schema, Document } from "mongoose";

export interface ClaimStatusProps extends Document{
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const ClaimStatusSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  name: { type: String, lowercase: true, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, {
  timestamps: true,
  _id: true
});

ClaimStatusSchema.virtual("id").get(function () {
  return this._id;
});

ClaimStatusSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
  }
});

export const ClaimStatus = model<ClaimStatusProps>("ClaimStatus", ClaimStatusSchema);
