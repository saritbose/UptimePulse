import { Router } from "express";
import { authUser } from "../controllers/UserController.js";

const userRouter = Router();

userRouter.get("/me", authUser);

export default userRouter;
