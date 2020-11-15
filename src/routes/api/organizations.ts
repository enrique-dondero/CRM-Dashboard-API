import express from "express";
import { AddOrganization, ListOrganization, GetOrganizationById, GetOrganizationsByUser } from "root/controllers/organizations";

const router = express.Router();

const addOrganization = new AddOrganization();
const listOrganization = new ListOrganization();
const getOrganizationById = new GetOrganizationById();
const getOrganizationsByUser = new GetOrganizationsByUser();

router.post("/add-organization", addOrganization.getMiddlewares(), addOrganization.setUp());
router.get("/list-organization", listOrganization.getMiddlewares(), listOrganization.setUp());
router.get("/organization-by-id", getOrganizationById.getMiddlewares(), getOrganizationById.setUp());
router.get("/organizations-by-user", getOrganizationsByUser.getMiddlewares(), getOrganizationsByUser.setUp());

export default router;
