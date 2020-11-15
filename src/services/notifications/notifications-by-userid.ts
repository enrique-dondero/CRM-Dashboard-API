import { NotificationProps } from "root/models";
import { notificationModel, userModel } from "root/providers";

export const notificationsByUserId = async (user: User): Promise<Array<NotificationProps>> => {
  const authUser = await userModel().findById(user.userId);
  const notifications = await notificationModel().find({
    user: authUser
  });
  return notifications;
};
