import { Router } from "express";
import { createCheckoutSession } from "../controllers/checkoutController.js";

const checkoutRouter = Router();

checkoutRouter.post("/pay", createCheckoutSession); // Stripe Checkout

export default checkoutRouter;
