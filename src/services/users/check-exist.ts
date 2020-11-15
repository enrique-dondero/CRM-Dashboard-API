import { userModel } from "root/providers";

export const checkExist = async (email: string): Promise<boolean> => {
  return await userModel().exists({ email });
};
