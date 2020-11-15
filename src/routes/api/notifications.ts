import express from "express";
import { ReadNotificationById, NotificationsByUserId } from "root/controllers/notifications";

const router = express.Router();

const readNotificationById = new ReadNotificationById();
const notificationsByUserId = new NotificationsByUserId();
router.put("/read/:id", readNotificationById.getMiddlewares(), readNotificationById.setUp());
router.get("/", notificationsByUserId.getMiddlewares(), notificationsByUserId.setUp());

export default router;
