import express from "express";

import {
  signUp,
  updateProfile,
  verifySignupOtp,
} from "../controllers/customer.js";
import { verifyCustomerToken } from "../middlewares/verifyCustomerToken.js";

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/verify-signup").post(verifySignupOtp);
router.route("/login").post(verifySignupOtp);
router.route("/update-profile").patch(verifyCustomerToken, updateProfile);

export default router;
