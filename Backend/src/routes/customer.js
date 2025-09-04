import express from "express";

import {
  forgotPassword,
  login,
  logout,
  resetPassword,
  signUp,
  updateProfile,
  verifySignupOtp,
} from "../controllers/customer.js";
import { verifyCustomerToken } from "../middlewares/verifyCustomerToken.js";

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/verify-signup").post(verifySignupOtp);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/update-profile").patch(verifyCustomerToken, updateProfile);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password").patch(resetPassword);

export default router;
