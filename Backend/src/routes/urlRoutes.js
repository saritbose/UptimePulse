import { Router } from "express";
import {
  addUrl,
  deleteUrl,
  editUrl,
  getMonitorUsage,
  getUrl,
  getUrls,
} from "../controllers/UrlController.js";

const urlRouter = Router();

urlRouter.get("/getUrl/:id", getUrl); // Get a specific URL
urlRouter.get("/getUrls", getUrls); // Get all URLs
urlRouter.post("/addUrl", addUrl); // Add a URL
urlRouter.put("/editUrl/:id", editUrl); // Edit a URL
urlRouter.delete("/deleteUrl/:id", deleteUrl); // Delete a URL
urlRouter.get("/usage", getMonitorUsage); // Checking features according to subscription

export default urlRouter;
