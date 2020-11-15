import { NotificationProps } from "root/models";
import { notificationModel } from "root/providers";
import { IdQueryRequest } from "root/requests/common";

export const readNotificationById = async (query: IdQueryRequest): Promise<NotificationProps> => {
  const notification = await notificationModel().findById(query.id);
  notification.checked = true;
  notification.save();
  return notification;
};
