import { userModel } from "root/providers";
import { ManageUserRequest } from "root/requests/users";
import { generateToken } from "root/util/generate-token";
import { EmailSubjects } from "../emails/email-subjects";
import { sendEmail } from "../emails/send-email";
import { inviteIntroducerEmailTemplate } from "../emails/templates";

export const reInviteByIds = async (query: ManageUserRequest): Promise<void> => {
  const users = await userModel().find({
    inviteToken: {
      $not: null
    },
    _id: {
      $in: query.userIds
    }
  });

  for (const user of users) {
    const token = generateToken(30);
    await sendEmail(
      user.email,
      EmailSubjects.reInviteUser,
      inviteIntroducerEmailTemplate(user.email, token)
    );
    user.inviteToken = token;
    user.save();
  }
};
