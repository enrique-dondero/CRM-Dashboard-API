import express from "express";
import { SendNylasEmail } from "root/controllers/nylas";

const router = express.Router();

const sendNylasEmail = new SendNylasEmail();

router.post("/send-email", sendNylasEmail.getMiddlewares(), sendNylasEmail.setUp());

export default router;
