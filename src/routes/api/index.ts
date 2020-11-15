import express from "express";
import { getMe } from "root/controllers/api";
import introducers from "./introducers";
import activities from "./activities";
import nylas from "./nylas";
import clients from "./clients";
import claims from "./claims";
import organizations from "./organizations";
import customfields from "./customfields";
import users from "./users";
import managers from "./managers";
import notifications from "./notifications";
import videos from "./videos";

const router = express.Router();

router.get("/me", getMe);
router.use("/introducers", introducers);
router.use("/activities", activities);
router.use("/nylas", nylas);
router.use("/clients", clients);
router.use("/claims", claims);
router.use("/organizations", organizations);
router.use("/customfields", customfields);
router.use("/users", users);
router.use("/managers", managers);
router.use("/notifications", notifications);
router.use("/videos", videos);

export default router;
