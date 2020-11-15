import express from "express";
import {
  CreateNote,
  GetNotesByUserId,
} from "root/controllers/activities";
const router = express.Router();

const createNote = new CreateNote();
const getNotesByUserId = new GetNotesByUserId();

router.post("/create-note", createNote.getMiddlewares(), createNote.setUp());
router.get("/get-notes-by-userid", getNotesByUserId.getMiddlewares(), getNotesByUserId.setUp());

export default router;
