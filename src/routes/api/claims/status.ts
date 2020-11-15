import express from "express";
import { AddClaimStatus, ListClaimStatus, DelAndMoveClaimStatus, UpdateClaimStatus } from "root/controllers/claims/status";

const router = express.Router();

const addClaimStatus = new AddClaimStatus();
const listClaimStatus = new ListClaimStatus();
const delAndMoveClaimStatus = new DelAndMoveClaimStatus();
const updateClaimStatus = new UpdateClaimStatus();

router.post("/", addClaimStatus.getMiddlewares(), addClaimStatus.setUp());
router.get("/", listClaimStatus.getMiddlewares(), listClaimStatus.setUp());
router.delete("/", delAndMoveClaimStatus.getMiddlewares(), delAndMoveClaimStatus.setUp());
router.patch("/", updateClaimStatus.getMiddlewares(), updateClaimStatus.setUp());

export default router;
