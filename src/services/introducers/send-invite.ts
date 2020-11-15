import { AccountStatus, AccountType } from "root/types/enums";
import { userModel } from "root/providers";
import { generateToken } from "root/util/generate-token";
import { EmailSubjects } from "../emails/email-subjects";
import { sendEmail } from "../emails/send-email";
import { inviteIntroducerEmailTemplate } from "../emails/templates";
import { getUserModel } from "../users";

export const sendInvite = async (email: string, user: User): Promise<boolean> => {
  const authUser = await userModel().findById(user.userId);
  const token = generateToken(30);
  await sendEmail(
    email,
    EmailSubjects.inviteUser,
    inviteIntroducerEmailTemplate(email, token)
  );
  const invitedUser = await userModel().create({
    email,
    inviteToken: token,
    accountType: AccountType.INTRODUCER,
    status: AccountStatus["Invite Sent"]
  });
  const model = getUserModel(user.userRole);
  await (await model.findOne({
    user: authUser
  })).updateOne({
    $push: {
      introducers: invitedUser
    }
  });
  return true;
};
