import express from "express";
import {
  addPricingConfig,
  getAllPricingConfig,
} from "../controllers/pricingConfig.js";
import { verifyAdminToken } from "../middlewares/verifyAdminToken.js";
import { requireSuperAdmin } from "../middlewares/access.js";

const router = express.Router();

router.route("/").post(verifyAdminToken, requireSuperAdmin, addPricingConfig);
router.route("/").get(verifyAdminToken, requireSuperAdmin, getAllPricingConfig);

export default router;
