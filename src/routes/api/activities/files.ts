import express from "express";
import {
  UploadFile,
  GetfilesByUserId
} from "root/controllers/activities";
const router = express.Router();

const uploadFile = new UploadFile();
const getfilesByUserId = new GetfilesByUserId();

router.post("/upload-user-file", uploadFile.getMiddlewares(), uploadFile.setUp());
router.get("/get-files-by-userid", getfilesByUserId.getMiddlewares(), getfilesByUserId.setUp());

export default router;
