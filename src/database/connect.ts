import { AccountType } from "root/types/enums";
import mongoose, { Mongoose } from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";
import { ADMIN_EMAIL, ADMIN_PASSWORD } from "root/config/env-vars";
import { masterModel, userModel } from "root/providers";
export default async (mongoose: Mongoose, connectionUri: string) => {
  await mongoose
    .connect(connectionUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then(async () => {
      const adminUser = await userModel().findOne({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
      });
      if (!adminUser) {
        const user =await userModel().create({
          email: ADMIN_EMAIL,
          password: ADMIN_PASSWORD,
          accountType: AccountType.ADMIN,
        });
        await masterModel().create({
          user: user
        });
      }
    })
    .catch(err => {
      // TODO add health check state updated here telling that mongodb connection error
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running and mongodb env configuration valid. " +
          err
      );
    });
};
export const AutoIncrement = AutoIncrementFactory(mongoose);
