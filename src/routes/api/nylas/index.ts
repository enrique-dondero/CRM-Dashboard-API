import express from "express";
import common from "./common";
import messages from "./messages";
import drafts from "./drafts";
import emails from "./emails";
import contacts from "./contacts";

const router = express.Router();

router.use("/", common);
router.use("/messages", messages);
router.use("/drafts", drafts);
router.use("/emails", emails);
router.use("/contacts", contacts);

export default router;
