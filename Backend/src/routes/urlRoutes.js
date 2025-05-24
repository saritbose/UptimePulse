import { Router } from "express";
import {
  addUrl,
  deleteUrl,
  editUrl,
  getUrl,
  getUrls,
} from "../controllers/UrlController.js";

const urlRouter = Router();

urlRouter.get("/getUrl/:id", getUrl);
urlRouter.get("/getUrls", getUrls);
urlRouter.post("/addUrl", addUrl);
urlRouter.put("/editUrl", editUrl);
urlRouter.delete("/deleteUrl", deleteUrl);

export default urlRouter;
