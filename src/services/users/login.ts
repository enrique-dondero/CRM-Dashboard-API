import { sign } from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_LIFE } from "root/config/env-vars";
import { LoginBodyRequest } from "root/requests/auths";
import { userModel } from "root/providers";

export const login = async (loginBody: LoginBodyRequest): Promise<string | boolean> => {
  const user = await userModel().findOne({
    email: loginBody.email,
    password: loginBody.password,
  });

  if (!user) {
    return false;
  }

  user.schema.statics.login(user.id);

  const accessToken = sign(
    { userId: user.id, userRole: user.accountType },
    ACCESS_TOKEN_SECRET,
    {
      algorithm: "HS256",
      expiresIn: ACCESS_TOKEN_LIFE,
    }
  );

  return accessToken;
};
