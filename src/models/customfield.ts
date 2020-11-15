import { CustomFieldType } from "root/types/enums";
import { model, Schema, Document } from "mongoose";

export interface CustomFieldProps extends Document{
  fieldName: string;
  fieldType: string;
  detailView: boolean;
  addView: boolean;
  customFieldType: CustomFieldType;
  createdAt: Date;
  updatedAt: Date;
}

const CustomFieldSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  fieldName: { type: String, required: true },
  fieldType: { type: String, required: true, lowercase: true },
  detailView: { type: Boolean, default: false },
  addView: { type: Boolean, default: false },
  customFieldType: { type: String, enum: Object.keys(CustomFieldType), required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
}, {
  timestamps: true,
  _id: true
});

CustomFieldSchema.virtual("id").get(function () {
  return this._id;
});

CustomFieldSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    delete ret._id;
  }
});

export const CustomField = model<CustomFieldProps>("CustomField", CustomFieldSchema);
