import express from "express";
import { ListDrafts, GetDraftById, DelDraftById, SendDraftById } from "root/controllers/nylas";

const router = express.Router();

const listDrafts = new ListDrafts();
const getDraftById = new GetDraftById();
const delDraftById = new DelDraftById();
const sendDraftById = new SendDraftById();

router.get("/list-drafts", listDrafts.getMiddlewares(), listDrafts.setUp());
router.get("/get-by-id", getDraftById.getMiddlewares(), getDraftById.setUp());
router.delete("/del-by-id", delDraftById.getMiddlewares(), delDraftById.setUp());
router.post("/send-by-id", sendDraftById.getMiddlewares(), sendDraftById.setUp());

export default router;
