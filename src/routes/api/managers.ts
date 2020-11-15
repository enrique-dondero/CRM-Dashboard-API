import express from "express";
import { InviteManager, AcceptInvite, GetManagerById, ListManagers } from "root/controllers/managers";
const router = express.Router();

const inviteManager = new InviteManager();
const acceptInvite = new AcceptInvite();
const getManagerById = new GetManagerById();
const listManagers = new ListManagers();

router.post("/invite", inviteManager.getMiddlewares(), inviteManager.setUp());
router.post("/accept-invite", acceptInvite.getMiddlewares(), acceptInvite.setUp());
router.get("/get-manager-byid", getManagerById.getMiddlewares(), getManagerById.setUp());
router.get("/list-managers", listManagers.getMiddlewares(), listManagers.setUp());

export default router;
