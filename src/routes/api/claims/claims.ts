import express from "express";
import { AddClaim, GetClaims, GetClaimById, GetClaimsByOrgId } from "root/controllers/claims";

const router = express.Router();

const addClaim = new AddClaim();
const getClaims = new GetClaims();
const getClaimById = new GetClaimById();
const getClaimsByOrgId = new GetClaimsByOrgId();

router.post("/add-claim", addClaim.getMiddlewares(), addClaim.setUp());
router.get("/get-claims", getClaims.getMiddlewares(), getClaims.setUp());
router.get("/get-claim-by-id", getClaimById.getMiddlewares(), getClaimById.setUp());
router.get("/get-claims-by-orgid", getClaimsByOrgId.getMiddlewares(), getClaimsByOrgId.setUp());

export default router;
