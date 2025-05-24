import connectDB from "./libs/connectDB.js";
import express from "express";
import cors from "cors";
import "dotenv/config";
import urlRouter from "./routes/urlRoutes.js";
import userRouter from "./routes/userRoutes.js";
import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.use(ClerkExpressWithAuth());
app.use("/api/user", userRouter);
app.use("/api/url", urlRouter);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
