import { Router } from "express";
import { getPingLogs, pingUrl } from "../controllers/PingController.js";

const pingRouter = Router();

pingRouter.get("/:id", pingUrl);
pingRouter.get("/log/:monitorId", getPingLogs);

export default pingRouter;
