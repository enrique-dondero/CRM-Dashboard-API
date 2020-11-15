import { Schema, model, Document } from "mongoose";

export interface CollectionProps extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const CollectionSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  name: { type: String, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, {
  timestamps: true,
  _id: true
});

CollectionSchema.virtual("id").get(function () {
  return this._id;
});

CollectionSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
  }
});

export const Collection = model<CollectionProps>("Collection", CollectionSchema);
