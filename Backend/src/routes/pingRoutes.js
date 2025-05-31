import { Router } from "express";
import { getPingLogs, pingUrl } from "../controllers/PingController.js";

const pingRouter = Router();

pingRouter.get("/:id", pingUrl); // Pinging a URL
pingRouter.get("/log/:monitorId", getPingLogs); // Getting all ping logs of a specific URL

export default pingRouter;
