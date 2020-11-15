import express from "express";
import { GetActivitiesByClaimId, GetActivitiesByOrgId, GetActivitiesByClientId } from "root/controllers/activities";

const router = express.Router();

const getActivitiesByClaimId = new GetActivitiesByClaimId();
const getActivitiesByOrgId = new GetActivitiesByOrgId();
const getActivitiesByClientId = new GetActivitiesByClientId();

router.post("/get-activities-by-claimid", getActivitiesByClaimId.getMiddlewares(), getActivitiesByClaimId.setUp());
router.get("/get-activities-by-orgid", getActivitiesByOrgId.getMiddlewares(), getActivitiesByOrgId.setUp());
router.get("/get-activities-by-clientid", getActivitiesByClientId.getMiddlewares(), getActivitiesByClientId.setUp());

export default router;
