import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { signUp, verifySignupOtp } from "../controllers/customer.js";

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/verify-signup").post(verifySignupOtp);
router.route("/login").post(verifySignupOtp);

export default router;
