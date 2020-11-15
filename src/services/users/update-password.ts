import { APP_URL } from "root/config/env-vars";
import { UPDATE_PWD } from "root/exceptions/messages";
import { UserProps } from "root/models";
import { notificationModel, userModel } from "root/providers";
import { NotificationData, publishMessage } from "root/pubsub";
import { UpdatePasswordRequest } from "root/requests/users";
import { PASSWORD_PUBLISH_ACTION_NAMES } from "root/util/constants";

export const updatePassword = async (user: User, payload: UpdatePasswordRequest): Promise<UserProps> => {
  const authUser = await userModel().findById(user.userId);
  authUser.password = payload.password;
  authUser.save();

  const notification = await notificationModel().create({
    createdBy: authUser,
    message: {
      body: UPDATE_PWD
    }
  });
  notification.message.link = `${APP_URL}/api/notifications/read/${notification.id}`;
  notification.save();

  const pubsubData: NotificationData = {
    userIds: [user.userId],
    message: notification.message
  };
  await publishMessage({ data: pubsubData, actionName: PASSWORD_PUBLISH_ACTION_NAMES.UPDATE });

  return authUser;
};
