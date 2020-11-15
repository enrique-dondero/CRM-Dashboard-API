import express from "express";
import claims from "./claims";
import status from "./status";
import periods from "./periods";

const router = express.Router();

router.use("/", claims);
router.use("/status", status);
router.use("/periods", periods);

export default router;
