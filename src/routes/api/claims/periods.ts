import express from "express";
import { AddClaimPeriod, ListClaimPeriod } from "root/controllers/claims/periods";

const router = express.Router();

const addClaimPeriod = new AddClaimPeriod();
const listClaimPeriod = new ListClaimPeriod();

router.post("/", addClaimPeriod.getMiddlewares(), addClaimPeriod.setUp());
router.get("/", listClaimPeriod.getMiddlewares(), listClaimPeriod.setUp());

export default router;
