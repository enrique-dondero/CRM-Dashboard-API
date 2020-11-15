import { model, Schema, Document } from "mongoose";

export interface ClaimPeriodProps extends Document{
  period: string;
  createdAt: Date;
  updatedAt: Date;
}

const ClaimPeriodSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  period: { type: String, lowercase: true, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, {
  timestamps: true,
  _id: true
});

ClaimPeriodSchema.virtual("id").get(function () {
  return this._id;
});

ClaimPeriodSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
  }
});

export const ClaimPeriod = model<ClaimPeriodProps>("ClaimPeriod", ClaimPeriodSchema);
