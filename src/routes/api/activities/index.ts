import express from "express";
import notes from "./notes";
import files from "./files";
import emails from "./emails";
import activities from "./activities";

const router = express.Router();

router.use("/notes", notes);
router.use("/files", files);
router.use("/emails", emails);
router.use("/", activities);

export default router;
