import express from "express";
import { NylasAuthorize, NylasCallback, NylasConnect, NylasRevoke, NylasHooks } from "root/controllers/nylas";

const router = express.Router();

const nylasAuthorize = new NylasAuthorize();
const nylasCallback = new NylasCallback();
const nylasConnect = new NylasConnect();
const nylasRevoke = new NylasRevoke();
const nylasHooks = new NylasHooks();

router.get("/authorize", nylasAuthorize.getMiddlewares(), nylasAuthorize.setUp());
router.get("/callback", nylasCallback.getMiddlewares(), nylasCallback.setUp());
router.post("/connect", nylasConnect.getMiddlewares(), nylasConnect.setUp());
router.put("/revoke", nylasRevoke.getMiddlewares(), nylasRevoke.setUp());
router.post("/hooks", nylasHooks.getMiddlewares(), nylasHooks.setUp());

export default router;
