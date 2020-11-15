import express from "express";
import { ListMessages, SetReadMessageById, GetMessageById, DelMessageById } from "root/controllers/nylas";

const router = express.Router();

const listMessages = new ListMessages();
const setReadMessageById = new SetReadMessageById();
const getMessageById = new GetMessageById();
const delMessageById = new DelMessageById();

router.get("/list-messages", listMessages.getMiddlewares(), listMessages.setUp());
router.put("/set-read-by-id", setReadMessageById.getMiddlewares(), setReadMessageById.setUp());
router.get("/get-by-id", getMessageById.getMiddlewares(), getMessageById.setUp());
router.delete("/del-by-id", delMessageById.getMiddlewares(), delMessageById.setUp());

export default router;
