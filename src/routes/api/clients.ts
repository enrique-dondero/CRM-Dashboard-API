import express from "express";
import { AddClient, ListClient, GetClientById } from "root/controllers/clients";

const router = express.Router();

const addClient = new AddClient();
const listClient = new ListClient();
const getClientById = new GetClientById();

router.post("/add-client", addClient.getMiddlewares(), addClient.setUp());
router.get("/list-client", listClient.getMiddlewares(), listClient.setUp());
router.get("/get-client-by-id", getClientById.getMiddlewares(), getClientById.setUp());

export default router;
