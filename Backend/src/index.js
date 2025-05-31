import connectDB from "./libs/connectDB.js";
import express from "express";
import cors from "cors";
import "dotenv/config";
import urlRouter from "./routes/urlRoutes.js";
import userRouter from "./routes/userRoutes.js";
import { ClerkExpressWithAuth } from "@clerk/clerk-sdk-node";
import pingRouter from "./routes/pingRoutes.js";
import checkoutRouter from "./routes/checkoutRoutes.js";
import { startPingScheduler } from "./libs/pingScheduler.js";

connectDB();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["https://uptimepulse.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);

const port = process.env.PORT;

app.use(ClerkExpressWithAuth());
app.use("/api/user", userRouter);
app.use("/api/url", urlRouter);
app.use("/api/ping", pingRouter);
app.use("/api/checkout", checkoutRouter);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
  startPingScheduler();
});
