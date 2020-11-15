import { AccountType } from "root/types/enums";
import { userModel } from "root/providers";
import { generateToken } from "root/util/generate-token";
import { EmailSubjects } from "../emails/email-subjects";
import { sendEmail } from "../emails/send-email";
import { inviteManagerEmailTemplate } from "../emails/templates";

export const sendInvite = async (email: string): Promise<boolean> => {
  const token = generateToken(30);
  await sendEmail(
    email,
    EmailSubjects.inviteUser,
    inviteManagerEmailTemplate(email, token)
  );
  await userModel().create({
    email,
    inviteToken: token,
    accountType: AccountType.MANAGER
  });
  return true;
};
