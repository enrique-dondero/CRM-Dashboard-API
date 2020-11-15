import express from "express";
import {
  SendEmail,
} from "root/controllers/activities";
const router = express.Router();

const sendEmail = new SendEmail();

router.post("/send-email", sendEmail.getMiddlewares(), sendEmail.setUp());

export default router;
