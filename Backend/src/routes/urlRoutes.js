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

urlRouter.get("/getUrl/:id", getUrl);
urlRouter.get("/getUrls", getUrls);
urlRouter.post("/addUrl", addUrl);
urlRouter.put("/editUrl/:id", editUrl);
urlRouter.delete("/deleteUrl/:id", deleteUrl);
urlRouter.get("/usage", getMonitorUsage);

export default urlRouter;
