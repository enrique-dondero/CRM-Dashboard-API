import express from "express";
import { InviteIntroduer, AcceptInvite, ListIntroducers, GetIntroducerById } from "root/controllers/introducers";
const router = express.Router();

const inviteIntroducer = new InviteIntroduer();
const acceptInvite = new AcceptInvite();
const listIntroducers = new ListIntroducers();
const getIntroducerById = new GetIntroducerById();
router.post("/invite", inviteIntroducer.getMiddlewares(), inviteIntroducer.setUp());
router.post("/accept-invite", acceptInvite.getMiddlewares(), acceptInvite.setUp());
router.get("/list-introducers", listIntroducers.getMiddlewares(), listIntroducers.setUp());
router.get("/get-introducer-byid", getIntroducerById.getMiddlewares(), getIntroducerById.setUp());
export default router;
