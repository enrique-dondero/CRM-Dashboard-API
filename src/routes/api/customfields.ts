import express from "express";
import { AddCustomField, ListCustomField } from "root/controllers/customfields";

const router = express.Router();

const addCustomField = new AddCustomField();
const listCustomField = new ListCustomField();

router.post("/", addCustomField.getMiddlewares(), addCustomField.setUp());
router.get("/", listCustomField.getMiddlewares(), listCustomField.setUp());

export default router;
