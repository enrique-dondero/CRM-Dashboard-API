
declare module 'mongoose' {
  interface Document {
    _id: number | string
  }

  namespace Types {
    interface Subdocument {
      _id: Number
    }
  }
}

declare module "mongoose-sequence" {
  import { Mongoose, Schema } from "mongoose";
  const _: (mongoose: Mongoose) => (schema: Schema<any>) => void;
  export = _;
}
