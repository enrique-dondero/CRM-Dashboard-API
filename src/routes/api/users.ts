import express from "express";
import {
  ListUsers,
  ChangeUserStatusByIds,
  ReInviteByIds,
  UpdateEmail,
  Login,
  UpdatePassword,
  GetUser,
  ValidateToken,
  GetUserByToken
} from "root/controllers/users";

const router = express.Router();

const login = new Login();
const listUsers = new ListUsers();
const changeUserStatusByIds = new ChangeUserStatusByIds();
const reInviteByIds = new ReInviteByIds();
const updateEmail = new UpdateEmail();
const updatePassword = new UpdatePassword();
const getUser = new GetUser();
const validateToken = new ValidateToken();
const getUserByToken = new GetUserByToken();

router.post("/login", login.getMiddlewares(), login.setUp());
router.get("/getUser", getUser.getMiddlewares(), getUser.setUp());
router.get("/", listUsers.getMiddlewares(), listUsers.setUp());
router.patch("/", changeUserStatusByIds.getMiddlewares(), changeUserStatusByIds.setUp());
router.post("/", reInviteByIds.getMiddlewares(), reInviteByIds.setUp());
router.put("/update-email", updateEmail.getMiddlewares(), updateEmail.setUp());
router.put("/update-password", updatePassword.getMiddlewares(), updatePassword.setUp());
router.get("/validateToken", validateToken.getMiddlewares(), validateToken.setUp());
router.get("/getuser-by-token", getUserByToken.getMiddlewares(), getUserByToken.setUp());

export default router;
