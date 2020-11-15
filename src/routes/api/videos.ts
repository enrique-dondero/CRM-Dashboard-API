import express from "express";
import { UploadVideo, DeleteVideo, UpdateVideo, CreateCollection, ListCollection } from "root/controllers/videos";
const router = express.Router();

const uploadVideo = new UploadVideo();
const deleteVideo = new DeleteVideo();
const updateVideo = new UpdateVideo();
const createCollection = new CreateCollection();
const listCollection = new ListCollection();
router.post("/upload", uploadVideo.getMiddlewares(), uploadVideo.setUp());
router.delete("/delete", deleteVideo.getMiddlewares(), deleteVideo.setUp());
router.put("/update", updateVideo.getMiddlewares(), updateVideo.setUp());
router.post("/create-collection", createCollection.getMiddlewares(), createCollection.setUp());
router.get("/collections", listCollection.getMiddlewares(), listCollection.setUp());

export default router;
